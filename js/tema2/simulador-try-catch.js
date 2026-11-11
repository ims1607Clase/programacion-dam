/* ============================================================
   Simulador de try / catch / finally (2.7)
   
   ============================================================ */
/* simulador try/catch/finally */
function renderTry(el) {
  var CODE = [
    'try {',
    '    int a = teclado.nextInt();',
    '    int b = teclado.nextInt();',
    '    System.out.println("Resultado: " + (a / b));',
    '} catch (ArithmeticException e) {',
    '    System.out.println("No se puede dividir entre cero.");',
    '} catch (InputMismatchException e) {',
    '    System.out.println("Debes escribir números enteros.");',
    '} finally {',
    '    System.out.println("Fin de la operación.");',
    '}',
    'System.out.println("El programa continúa.");'
  ];
  el.innerHTML =
    '<div class="row"><label>a = <input type="text" id="try-a" value="10" size="6"></label><label>b = <input type="text" id="try-b" value="0" size="6"></label></div>' +
    '<div class="tgrid"><pre class="code tcode" id="try-code"></pre><div><div class="panel"><h4>Pantalla</h4><div class="outp" id="try-out"></div></div><div class="panel"><h4>Qué pasa</h4><div class="note" id="try-note" aria-live="polite"></div></div></div></div>';
  function isInt(s) {
    return /^-?\d+$/.test(s.trim());
  }
  function draw() {
    var a = document.getElementById('try-a').value,
      b = document.getElementById('try-b').value,
      on = [],
      out = [],
      note = '';
    if (!isInt(a)) {
      on = [0, 1, 6, 7, 8, 9, 10, 11];
      out = ['Debes escribir números enteros.'];
      note = '"' + a + '" no es un entero: nextInt() lanza InputMismatchException y salta a su catch.';
    } else if (!isInt(b)) {
      on = [0, 1, 2, 6, 7, 8, 9, 10, 11];
      out = ['Debes escribir números enteros.'];
      note = '"' + b + '" no es un entero: nextInt() lanza InputMismatchException y salta a su catch.';
    } else if (parseInt(b, 10) === 0) {
      on = [0, 1, 2, 3, 4, 5, 8, 9, 10, 11];
      out = ['No se puede dividir entre cero.'];
      note = 'a / 0 con enteros lanza ArithmeticException. Se ejecuta ese catch, no el otro.';
    } else {
      on = [0, 1, 2, 3, 8, 9, 10, 11];
      out = ['Resultado: ' + Math.trunc(parseInt(a, 10) / parseInt(b, 10))];
      note = 'No hubo ningún error: se ejecuta el try entero y se saltan los catch.';
    }
    out.push(on.indexOf(9) >= 0 ? 'Fin de la operación.' : '');
    out.push('El programa continúa.');
    note += ' El finally se ejecuta siempre y después el programa sigue.';
    document.getElementById('try-code').innerHTML = CODE.map(function (ln, i) {
      return (
        '<div class="ln' + (on.indexOf(i) >= 0 ? ' on' : '') + '"><i>' + (i + 1) + '</i>' + hl(ln) + '</div>'
      );
    }).join('');
    document.getElementById('try-out').textContent = out.filter(Boolean).join('\n');
    document.getElementById('try-note').textContent = note;
  }
  el.querySelector('#try-a').oninput = draw;
  el.querySelector('#try-b').oninput = draw;
  draw();
}
