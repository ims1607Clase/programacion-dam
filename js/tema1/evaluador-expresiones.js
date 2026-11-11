/* ============================================================
   Calculadora Java y tabla de verdad
   Usa el intérprete para evaluar expresiones.
   ============================================================ */
/* ---------- evaluador de expresiones (usa el motor Java) ---------- */
function renderExpr(el, presets) {
  el.innerHTML =
    '<div class="row"><input type="text" id="ex-i" style="flex:1 1 320px" spellcheck="false" aria-label="Expresión Java" value="(33 + 3 * 4) / 5"><button class="btn primary" type="button" id="ex-b">Evaluar</button></div><div class="row" id="ex-p" style="margin:.4rem 0"></div><div class="panel"><h4>Resultado</h4><div class="outp" id="ex-o"></div></div>';
  var inp = el.querySelector('#ex-i');
  function ev() {
    var r = JavaI.evalExpr(inp.value);
    el.querySelector('#ex-o').innerHTML = r.error
      ? '<span style="color:var(--bad)">Error: ' + esc(r.error) + '</span>'
      : '<b>' + esc(r.quoted) + '</b>  <span class="muted">(tipo ' + esc(r.type) + ')</span>';
  }
  presets.forEach(function (x) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'btn';
    b.textContent = x;
    b.onclick = function () {
      inp.value = x;
      ev();
    };
    el.querySelector('#ex-p').appendChild(b);
  });
  el.querySelector('#ex-b').onclick = ev;
  inp.onkeydown = function (e) {
    if (e.key === 'Enter') ev();
  };
  ev();
}
function renderTruth(el) {
  el.innerHTML =
    '<div class="row"><label><input type="checkbox" id="tt-a" checked> a = <b>true</b></label><label><input type="checkbox" id="tt-b"> b = <b>false</b></label></div><div class="tw"><table class="t"><thead><tr><th>Operación</th><th>Se lee</th><th>Resultado</th></tr></thead><tbody></tbody></table></div><div class="tw"><table class="t"><thead><tr><th>a</th><th>b</th><th>a &amp;&amp; b</th><th>a || b</th><th>a ^ b</th></tr></thead><tbody id="tt-all"></tbody></table></div>';
  function draw() {
    var a = el.querySelector('#tt-a').checked,
      b = el.querySelector('#tt-b').checked;
    el.querySelector('label:nth-child(1) b').textContent = a;
    el.querySelector('label:nth-child(2) b').textContent = b;
    var rows = [
      ['a && b', 'y: cierto solo si los dos son ciertos', a && b],
      ['a || b', 'o: cierto si al menos uno lo es', a || b],
      ['!a', 'no: lo contrario de a', !a],
      ['a ^ b', 'XOR: cierto solo si son distintos', a !== b]
    ];
    el.querySelector('tbody').innerHTML = rows
      .map(function (r) {
        return (
          '<tr><td><code>' +
          r[0] +
          '</code></td><td>' +
          r[1] +
          '</td><td><b style="color:var(--' +
          (r[2] ? 'ok' : 'bad') +
          ')">' +
          r[2] +
          '</b></td></tr>'
        );
      })
      .join('');
    var all = '';
    [true, false].forEach(function (x) {
      [true, false].forEach(function (y) {
        var cur = x === a && y === b;
        all +=
          '<tr' +
          (cur ? ' style="background:color-mix(in srgb,var(--accent) 15%,var(--surface))"' : '') +
          '><td>' +
          x +
          '</td><td>' +
          y +
          '</td><td>' +
          (x && y) +
          '</td><td>' +
          (x || y) +
          '</td><td>' +
          (x !== y) +
          '</td></tr>';
      });
    });
    el.querySelector('#tt-all').innerHTML = all;
  }
  el.querySelector('#tt-a').onchange = draw;
  el.querySelector('#tt-b').onchange = draw;
  draw();
}
