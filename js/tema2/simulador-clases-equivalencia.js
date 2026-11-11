/* ============================================================
   Simulador de clases de equivalencia (2.8)
   
   ============================================================ */
/* clases de equivalencia */
function renderClases(el) {
  var year = new Date().getFullYear();
  var P = {
    dia: { min: 1, max: 31, n: 'día (1 a 31)' },
    mes: { min: 1, max: 12, n: 'mes (1 a 12)' },
    anio: { min: 1900, max: year, n: 'año (1900 al actual, ' + year + ')' }
  };
  el.innerHTML =
    '<div class="row"><label>Parámetro <select id="cl-p"><option value="dia">día</option><option value="mes">mes</option><option value="anio">año</option></select></label><label>Valor <input type="number" id="cl-v" value="15" style="width:7rem"></label></div><div class="fb" id="cl-fb" aria-live="polite"></div>';
  function draw() {
    var p = P[document.getElementById('cl-p').value],
      raw = document.getElementById('cl-v').value,
      v = parseInt(raw, 10),
      m;
    if (raw === '' || isNaN(v)) {
      document.getElementById('cl-fb').textContent = 'Escribe un número.';
      return;
    }
    if (v < p.min)
      m = '<b style="color:var(--bad)">Clase no válida (por debajo).</b> Rango válido: ' + p.n + '.';
    else if (v > p.max)
      m = '<b style="color:var(--bad)">Clase no válida (por encima).</b> Rango válido: ' + p.n + '.';
    else m = '<b style="color:var(--ok)">Clase válida.</b> Rango: ' + p.n + '.';
    if (v === p.min || v === p.max)
      m += ' Además es un <b>valor límite</b> (borde del rango): hay que probarlo.';
    else if (v === p.min - 1 || v === p.max + 1)
      m += ' Es el valor justo fuera del borde: también interesa probarlo.';
    document.getElementById('cl-fb').innerHTML = m;
  }
  el.querySelector('#cl-p').onchange = function () {
    var d = { dia: 15, mes: 6, anio: 2000 };
    document.getElementById('cl-v').value = d[this.value];
    draw();
  };
  el.querySelector('#cl-v').oninput = draw;
  draw();
}
