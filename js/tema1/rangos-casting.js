/* ============================================================
   Simulador: rangos de los tipos y casting
   
   ============================================================ */
/* ---------- rangos y casting ---------- */
function renderRanges(el) {
  var T = [
    ['byte', 8],
    ['short', 16],
    ['int', 32],
    ['long', 64]
  ];
  el.innerHTML =
    '<div class="tw"><table class="t"><thead><tr><th>Tipo</th><th>Bits</th><th>Valores distintos (2<sup>bits</sup>)</th><th>Mínimo</th><th>Máximo</th></tr></thead><tbody></tbody></table></div><p class="muted">Con signo, la mitad de los valores son negativos: de −2<sup>bits−1</sup> a 2<sup>bits−1</sup> − 1.</p>' +
    '<h4>Casting a byte: ¿qué pasa con un número que no cabe?</h4><div class="row"><label>int numInt = <input type="number" id="rg-n" value="130" style="width:7rem"></label><span>→ <code>(byte) numInt</code> = <b id="rg-r"></b></span></div><div class="panel"><div class="outp" id="rg-e"></div></div><div class="bytering" id="rg-ring"></div>';
  var tb = el.querySelector('tbody');
  T.forEach(function (t) {
    var b = BigInt(t[1]);
    var tot = 2n ** b,
      mx = tot / 2n - 1n,
      mn = -(tot / 2n);
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td><code>' +
      t[0] +
      '</code></td><td>' +
      t[1] +
      '</td><td>' +
      tot.toLocaleString('es-ES') +
      '</td><td>' +
      mn.toLocaleString('es-ES') +
      '</td><td>' +
      mx.toLocaleString('es-ES') +
      '</td>';
    tb.appendChild(tr);
  });
  var inp = el.querySelector('#rg-n');
  function draw() {
    var n = parseInt(inp.value, 10);
    if (isNaN(n)) n = 0;
    var r = (n << 24) >> 24,
      q = Math.floor(n / 256),
      rest = n - q * 256;
    el.querySelector('#rg-r').textContent = r;
    var s =
      n >= -128 && n <= 127
        ? n + ' cabe en un byte (−128 a 127): no cambia.'
        : n +
          ' no cabe en un byte. El rango es cíclico (tras 127 viene −128).\n' +
          n +
          ' = 256 × ' +
          q +
          ' + ' +
          rest +
          ' → da ' +
          q +
          ' vuelta(s) completa(s) y cae en la posición ' +
          rest +
          (rest > 127 ? ', que equivale a ' + (rest - 256) + '.' : '.');
    el.querySelector('#rg-e').textContent = s;
    var pts = [-128, -127, '…', 126, 127];
    el.querySelector('#rg-ring').innerHTML =
      '…→ <b>125</b> → <b>126</b> → <b>127</b> ⟲ <b>−128</b> → <b>−127</b> → <b>−126</b> → … (130 es −126)';
  }
  inp.oninput = draw;
  draw();
}
