/* ============================================================
   Simulador de else if (el orden importa)
   
   ============================================================ */
/* ---------- simulador de else if ---------- */
function renderNota(el) {
  var good = [
    {
      c: 'nota < 0 || nota > 10',
      b: 'System.out.println("Nota incorrecta");',
      t: function (n) {
        return n < 0 || n > 10;
      }
    },
    {
      c: 'nota < 5',
      b: 'System.out.println("Insuficiente");',
      t: function (n) {
        return n < 5;
      }
    },
    {
      c: 'nota < 6',
      b: 'System.out.println("Suficiente");',
      t: function (n) {
        return n < 6;
      }
    },
    {
      c: 'nota < 7',
      b: 'System.out.println("Bien");',
      t: function (n) {
        return n < 7;
      }
    },
    {
      c: 'nota < 9',
      b: 'System.out.println("Notable");',
      t: function (n) {
        return n < 9;
      }
    },
    {
      c: null,
      b: 'System.out.println("Sobresaliente");',
      t: function () {
        return true;
      }
    }
  ];
  var bad = [
    {
      c: 'nota < 9',
      b: 'System.out.println("Notable");',
      t: function (n) {
        return n < 9;
      }
    },
    {
      c: 'nota < 7',
      b: 'System.out.println("Bien");',
      t: function (n) {
        return n < 7;
      }
    },
    {
      c: 'nota < 6',
      b: 'System.out.println("Suficiente");',
      t: function (n) {
        return n < 6;
      }
    },
    {
      c: 'nota < 5',
      b: 'System.out.println("Insuficiente");',
      t: function (n) {
        return n < 5;
      }
    },
    {
      c: null,
      b: 'System.out.println("Sobresaliente");',
      t: function () {
        return true;
      }
    }
  ];
  el.innerHTML =
    '<div class="row"><label>Nota <input type="number" id="nota-in" value="5.5" step="0.5" style="width:6rem"></label>' +
    '<label>Orden de las condiciones <select id="nota-ord"><option value="g">Correcto: error primero, de menor a mayor</option><option value="b">Incorrecto: de lo general a lo restrictivo</option></select></label></div><div id="nota-out"></div><div class="fb" id="nota-fb" aria-live="polite"></div>';
  function draw() {
    var n = parseFloat(document.getElementById('nota-in').value),
      isBad = document.getElementById('nota-ord').value === 'b',
      br = isBad ? bad : good;
    var html = '',
      won = -1,
      res = '';
    if (isNaN(n)) {
      document.getElementById('nota-out').innerHTML = '';
      document.getElementById('nota-fb').textContent = 'Escribe una nota.';
      return;
    }
    br.forEach(function (x, i) {
      var state = won >= 0 ? 'skip' : x.t(n) ? 'win' : '';
      if (state === 'win') {
        won = i;
        res = x.b.match(/"(.*)"/)[1];
      }
      var label =
        state === 'skip'
          ? 'no se llega a evaluar'
          : state === 'win'
            ? x.c
              ? 'verdadero: se ejecuta'
              : 'ninguna anterior se cumplió: se ejecuta'
            : 'falso: pasa a la siguiente';
      var head = i === 0 ? 'if (' + x.c + ') {' : x.c ? '} else if (' + x.c + ') {' : '} else {';
      html +=
        '<div class="branch ' +
        state +
        '"><pre class="code">' +
        hl(head + '\n    ' + x.b + (i === br.length - 1 ? '\n}' : '')) +
        '</pre><div class="st"><span>' +
        label +
        '</span></div></div>';
    });
    document.getElementById('nota-out').innerHTML = html;
    var m = 'Resultado: <b>' + res + '</b>.';
    if (isBad && n >= 5 && n < 9 && res === 'Notable')
      m +=
        ' Fíjate: con esta nota debería salir otra cosa, pero la condición más general se cumple primero y tapa a las demás. Además no se comprueba si la nota está fuera de rango.';
    document.getElementById('nota-fb').innerHTML = m;
  }
  el.querySelector('#nota-in').oninput = draw;
  el.querySelector('#nota-ord').onchange = draw;
  draw();
}
