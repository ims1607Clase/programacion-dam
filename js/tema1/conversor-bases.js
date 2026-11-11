/* ============================================================
   Simulador: conversor de bases y código ASCII
   Binario, octal, hexadecimal; entrenador de conversiones.
   ============================================================ */
/* ---------- conversor de bases ---------- */
function divSteps(n, base) {
  if (n === 0) return { rows: [], digits: '0' };
  var rows = [],
    q = n,
    D = '0123456789ABCDEF',
    out = '';
  while (q > 0) {
    var r = q % base;
    rows.push(q + ' ÷ ' + base + ' = ' + Math.floor(q / base) + ', resto ' + D[r]);
    out = D[r] + out;
    q = Math.floor(q / base);
  }
  return { rows: rows, digits: out };
}
function renderBaseConv(el) {
  el.innerHTML =
    '<div class="row"><label>Número decimal (0 a 255): <input type="number" id="bc-n" min="0" max="255" value="19" style="width:6rem"></label></div>' +
    '<div class="two"><div class="panel"><h4>Binario (base 2)</h4><div class="big" id="bc-b"></div></div><div class="panel"><h4>Octal (base 8)</h4><div class="big" id="bc-o"></div></div><div class="panel"><h4>Hexadecimal (base 16)</h4><div class="big" id="bc-h"></div></div></div>' +
    '<h4 style="margin:.8rem 0 .3rem">Las ruedas del cuentakilómetros binario (cada una vale el doble que la anterior)</h4><div class="bits" id="bc-bits"></div>' +
    '<div class="panel"><h4>Cómo se hace: dividir entre 2 y leer los restos de abajo a arriba</h4><div class="outp" id="bc-steps"></div></div>' +
    '<div class="panel"><h4>Y al revés: sumar las ruedas encendidas</h4><div class="outp" id="bc-sum"></div></div>';
  var inp = el.querySelector('#bc-n');
  function draw() {
    var n = Math.max(0, Math.min(255, parseInt(inp.value, 10) || 0));
    var b = divSteps(n, 2),
      o = divSteps(n, 8),
      h = divSteps(n, 16);
    el.querySelector('#bc-b').textContent = b.digits;
    el.querySelector('#bc-o').textContent = o.digits;
    el.querySelector('#bc-h').textContent = h.digits;
    var bin = ('00000000' + n.toString(2)).slice(-8),
      cells = '';
    for (var k = 0; k < 8; k++) {
      var w = Math.pow(2, 7 - k),
        on = bin[k] === '1';
      cells +=
        '<button type="button" class="bit' +
        (on ? ' on' : '') +
        '" data-w="' +
        w +
        '"><small>' +
        w +
        '</small><b>' +
        bin[k] +
        '</b></button>';
    }
    el.querySelector('#bc-bits').innerHTML = cells;
    el.querySelector('#bc-steps').textContent = b.rows.length
      ? b.rows.join('\n') + '\nÚltimo cociente: 1 → se lee ' + b.digits
      : '0 ÷ 2 = 0 → el binario es 0';
    var parts = [];
    for (var j = 0; j < 8; j++) if (bin[j] === '1') parts.push(Math.pow(2, 7 - j));
    el.querySelector('#bc-sum').textContent = parts.length ? parts.join(' + ') + ' = ' + n : '0';
  }
  inp.oninput = draw;
  el.querySelector('#bc-bits').onclick = function (e) {
    var b = e.target.closest('.bit');
    if (!b) return;
    var n = Math.max(0, Math.min(255, parseInt(inp.value, 10) || 0)),
      w = +b.dataset.w;
    inp.value = n & w ? n - w : n + w;
    draw();
  };
  draw();
}
function renderDrill(el) {
  var kinds = [
    {
      t: 'Binario → decimal',
      gen: function () {
        var n = 2 + Math.floor(Math.random() * 126);
        return {
          q: '¿Cuánto vale en decimal el binario <code>' + n.toString(2) + '</code>?',
          a: String(n),
          hint: 'Suma las potencias de 2 de los dígitos que valen 1 (de derecha a izquierda: 1, 2, 4, 8…).'
        };
      }
    },
    {
      t: 'Decimal → binario',
      gen: function () {
        var n = 2 + Math.floor(Math.random() * 62);
        return {
          q: 'Escribe <b>' + n + '</b> en binario.',
          a: n.toString(2),
          hint: 'Divide entre 2 una y otra vez y lee los restos del último al primero.'
        };
      }
    },
    {
      t: 'Decimal → octal',
      gen: function () {
        var n = 8 + Math.floor(Math.random() * 120);
        return {
          q: 'Escribe <b>' + n + '</b> en octal.',
          a: n.toString(8),
          hint: 'Igual que en binario pero dividiendo entre 8.'
        };
      }
    },
    {
      t: 'Octal → decimal',
      gen: function () {
        var n = 8 + Math.floor(Math.random() * 120);
        return {
          q: '¿Cuánto vale en decimal el octal <code>' + n.toString(8) + '</code>?',
          a: String(n),
          hint: 'Cada dígito por 8<sup>posición</sup>, y sumas.'
        };
      }
    },
    {
      t: 'Decimal → hexadecimal',
      gen: function () {
        var n = 16 + Math.floor(Math.random() * 240);
        return {
          q: 'Escribe <b>' + n + '</b> en hexadecimal (letras en mayúscula).',
          a: n.toString(16).toUpperCase(),
          hint: 'Divide entre 16. Si el resto es 10 a 15, usa A a F.'
        };
      }
    },
    {
      t: 'Hexadecimal → decimal',
      gen: function () {
        var n = 16 + Math.floor(Math.random() * 240);
        return {
          q: '¿Cuánto vale en decimal el hexadecimal <code>' + n.toString(16).toUpperCase() + '</code>?',
          a: String(n),
          hint: 'Cada dígito por 16<sup>posición</sup> (A=10 … F=15).'
        };
      }
    }
  ];
  el.innerHTML =
    '<div class="row"><label>Tipo <select id="dr-k"></select></label><button class="btn primary" type="button" id="dr-new">Otra</button></div><div class="pred"><p id="dr-q" style="margin-top:0"></p><div class="row"><input type="text" id="dr-a" autocomplete="off" placeholder="Tu respuesta"><button class="btn primary" type="button" id="dr-c">Comprobar</button><button class="btn" type="button" id="dr-h">Pista</button><button class="btn" type="button" id="dr-s">Solución</button></div><div class="res" id="dr-r" aria-live="polite"></div></div><div class="muted" id="dr-st"></div>';
  var sel = el.querySelector('#dr-k'),
    cur,
    good = 0,
    tot = 0;
  kinds.forEach(function (k, i) {
    var o = document.createElement('option');
    o.value = i;
    o.textContent = k.t;
    sel.appendChild(o);
  });
  function nw() {
    cur = kinds[+sel.value].gen();
    el.querySelector('#dr-q').innerHTML = cur.q;
    el.querySelector('#dr-a').value = '';
    el.querySelector('#dr-r').innerHTML = '';
  }
  function stat() {
    el.querySelector('#dr-st').textContent = tot
      ? 'Llevas ' + good + ' aciertos de ' + tot + ' intentos.'
      : '';
  }
  el.querySelector('#dr-c').onclick = function () {
    var v = el
      .querySelector('#dr-a')
      .value.trim()
      .toUpperCase()
      .replace(/^0+(?=.)/, '');
    if (!v) return;
    tot++;
    if (v === cur.a) {
      good++;
      el.querySelector('#dr-r').innerHTML =
        '<b style="color:var(--ok)">¡Correcto!</b> Pulsa «Otra» para seguir.';
    } else
      el.querySelector('#dr-r').innerHTML =
        '<b style="color:var(--bad)">No es esa.</b> Revisa los pasos o pide una pista.';
    stat();
  };
  el.querySelector('#dr-a').onkeydown = function (e) {
    if (e.key === 'Enter') el.querySelector('#dr-c').click();
  };
  el.querySelector('#dr-h').onclick = function () {
    el.querySelector('#dr-r').innerHTML = '<b>Pista:</b> ' + cur.hint;
  };
  el.querySelector('#dr-s').onclick = function () {
    el.querySelector('#dr-r').innerHTML = '<b>Solución:</b> <code>' + cur.a + '</code>';
  };
  el.querySelector('#dr-new').onclick = nw;
  sel.onchange = nw;
  nw();
}
function renderAscii(el) {
  el.innerHTML =
    '<div class="two"><div><h4>Texto → binario ASCII</h4><input type="text" id="as-t" value="Hola" style="width:100%" aria-label="Texto"><div class="panel"><div class="outp" id="as-o"></div></div></div><div><h4>Binario → texto</h4><input type="text" id="as-b" value="01001101 01101111 01101100 01100001 00100001" style="width:100%" aria-label="Binario"><div class="panel"><div class="outp" id="as-d"></div></div></div></div><p class="muted">Pon letras sin tildes ni ñ (el ASCII de los apuntes usa 8 bits por carácter). Prueba a descifrar el mensaje oculto de los apuntes.</p>';
  function a() {
    var t = el.querySelector('#as-t').value,
      rows = [];
    for (var i = 0; i < t.length; i++) {
      var c = t.charCodeAt(i);
      if (c > 255) {
        rows.push(t[i] + ' → (fuera del ASCII de 8 bits)');
        continue;
      }
      rows.push(t[i] + ' = ' + ('00000000' + c.toString(2)).slice(-8) + '  (' + c + ')');
    }
    el.querySelector('#as-o').textContent = rows.join('\n') || ' ';
    var b = el.querySelector('#as-b').value.trim().split(/\s+/).filter(Boolean),
      s = '',
      bad = false;
    b.forEach(function (x) {
      if (/^[01]{8}$/.test(x)) s += String.fromCharCode(parseInt(x, 2));
      else bad = true;
    });
    el.querySelector('#as-d').textContent =
      (s || ' ') + (bad ? '\n(cada grupo debe tener exactamente 8 ceros/unos)' : '');
  }
  el.querySelector('#as-t').oninput = a;
  el.querySelector('#as-b').oninput = a;
  a();
}
