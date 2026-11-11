/* ============================================================
   Simulador de assert con y sin -ea (2.8)
   
   ============================================================ */
/* assert con y sin -ea */
function renderAssert(el) {
  el.innerHTML =
    '<label><input type="checkbox" id="as-ea"> Ejecutar con <code>-ea</code> (aserciones activadas)</label>' +
    '<pre class="code" id="as-code"></pre><div class="panel"><h4>Pantalla</h4><div class="outp" id="as-out"></div></div><div class="fb" id="as-fb" aria-live="polite"></div>';
  document.getElementById('as-code').innerHTML = hl(
    'double precio = 100;\ndouble precioFinal = precio + precio * 0.10;   // ¡error! debería restar\nassert precioFinal <= precio : "El precio final no puede ser mayor que el original";\nSystem.out.println(precioFinal);'
  );
  function draw() {
    var ea = document.getElementById('as-ea').checked;
    document.getElementById('as-out').textContent = ea
      ? 'Exception in thread "main" java.lang.AssertionError: El precio final no puede ser mayor que el original'
      : '110.0';
    document.getElementById('as-fb').innerHTML = ea
      ? 'Con <code>-ea</code> el programa se detiene en la aserción: el fallo está en tu código y lo ves enseguida.'
      : 'Sin <code>-ea</code> Java no evalúa el assert: el error de lógica pasa desapercibido y se muestra un precio mal calculado.';
  }
  el.querySelector('#as-ea').onchange = draw;
  draw();
}
