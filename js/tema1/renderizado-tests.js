/* ============================================================
   Pintado de preguntas y de "Predice la salida"
   Funciones renderQuiz y renderPred.
   ============================================================ */
/* ---------- renderizado de tests ---------- */
function renderQuiz(el, qs, onFinish) {
  el.innerHTML = '';
  var answered = 0,
    good = 0;
  qs.forEach(function (q, qi) {
    var box = document.createElement('div');
    box.className = 'q';
    box.innerHTML =
      '<p class="qt"><span class="qn">' +
      (qi + 1) +
      '</span>' +
      q.q +
      '</p>' +
      (q.code ? '<pre class="code">' + hl(q.code) + '</pre>' : '') +
      '<div class="opts"></div><div class="fb" hidden></div>';
    var wrap = box.querySelector('.opts'),
      fb = box.querySelector('.fb');
    var opts = shuffle(
      q.o.map(function (t, i) {
        return { t: t, ok: i === 0 };
      })
    );
    var btns = [];
    opts.forEach(function (o) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'opt';
      b.innerHTML = o.t;
      b.onclick = function () {
        btns.forEach(function (x) {
          x.b.disabled = true;
          if (x.o.ok) x.b.classList.add('good');
        });
        if (!o.ok) b.classList.add('wrong');
        fb.hidden = false;
        fb.innerHTML = (o.ok ? '<b class="ok">Correcto.</b> ' : '<b class="no">No era esa.</b> ') + q.e;
        answered++;
        if (o.ok) {
          good++;
          prog[q.id] = 1;
          save();
        }
        if (onFinish && answered === qs.length) onFinish(good, qs.length);
      };
      btns.push({ b: b, o: o });
      wrap.appendChild(b);
    });
    el.appendChild(box);
  });
}
function renderPred(el, p) {
  var d = document.createElement('div');
  d.className = 'pred' + (prog[p.id] ? ' solved' : '');
  d.innerHTML =
    '<p style="margin-top:0"><b>' +
    p.p +
    '</b></p><pre class="code">' +
    hl(p.code) +
    '</pre>' +
    '<div class="row"><input type="text" id="in-' +
    p.id +
    '" aria-label="Tu respuesta" placeholder="Tu respuesta" autocomplete="off">' +
    '<button class="btn primary" type="button">Comprobar</button><button class="btn" type="button">Pista</button><button class="btn" type="button">Ver solución</button></div><div class="res" aria-live="polite"></div>';
  var inp = d.querySelector('input'),
    bs = d.querySelectorAll('button'),
    res = d.querySelector('.res');
  function check() {
    if (!inp.value.trim()) {
      res.innerHTML = 'Escribe lo que crees que muestra el programa.';
      return;
    }
    if (norm(inp.value) === norm(p.a)) {
      res.innerHTML = '<b style="color:var(--ok)">Correcto.</b> ' + p.e;
      d.classList.add('solved');
      prog[p.id] = 1;
      save();
    } else
      res.innerHTML =
        '<b style="color:var(--bad)">Todavía no.</b> Ejecuta el código línea a línea apuntando el valor de las variables. Si te atascas, pide la pista.';
  }
  bs[0].onclick = check;
  inp.onkeydown = function (e) {
    if (e.key === 'Enter') check();
  };
  bs[1].onclick = function () {
    res.innerHTML = '<b>Pista:</b> ' + p.h;
  };
  bs[2].onclick = function () {
    res.innerHTML = '<b>Salida:</b> <code>' + esc(p.a) + '</code><br>' + p.e;
  };
  el.appendChild(d);
}
