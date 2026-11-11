/* ============================================================
   Simulador de switch y del olvido del break
   
   ============================================================ */
/* ---------- simulador de switch ---------- */
function renderSwitch(el) {
  var days = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'],
    brk = [true, true, false, false, true, true, true];
  var opts = '';
  for (var d = 0; d <= 8; d++)
    opts += '<option value="' + d + '"' + (d === 3 ? ' selected' : '') + '>' + d + '</option>';
  el.innerHTML =
    '<div class="row"><label>dia = <select id="sw-dia">' +
    opts +
    '</select></label></div><div class="cks" id="sw-cks"></div><pre class="code" id="sw-code"></pre><div class="panel"><h4>Pantalla</h4><div class="outp" id="sw-out"></div></div>';
  var cks = el.querySelector('#sw-cks');
  days.forEach(function (n, i) {
    var l = document.createElement('label');
    l.innerHTML =
      '<input type="checkbox" id="sw-b' + i + '"' + (brk[i] ? ' checked' : '') + '> break en case ' + (i + 1);
    cks.appendChild(l);
    l.firstChild.onchange = function () {
      brk[i] = this.checked;
      draw();
    };
  });
  function draw() {
    var dia = +el.querySelector('#sw-dia').value,
      code = 'switch (dia) {\n';
    days.forEach(function (n, i) {
      code += '    case ' + (i + 1) + ': System.out.println("' + n + '");' + (brk[i] ? ' break;' : '') + '\n';
    });
    code += '    default: System.out.println("Día incorrecto");\n}';
    el.querySelector('#sw-code').innerHTML = hl(code);
    var out = [];
    if (dia >= 1 && dia <= 7) {
      var j = dia - 1,
        stopped = false;
      for (; j < 7; j++) {
        out.push(days[j]);
        if (brk[j]) {
          stopped = true;
          break;
        }
      }
      if (!stopped) out.push('Día incorrecto');
    } else out.push('Día incorrecto');
    el.querySelector('#sw-out').textContent = out.join('\n');
  }
  el.querySelector('#sw-dia').onchange = draw;
  draw();
}
