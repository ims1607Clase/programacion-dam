/* ============================================================
   Mini-juego: nombres de clases, variables y constantes (2.6)
   
   ============================================================ */
/* clasificador de identificadores */
function renderIds(el) {
  var items = [
    { n: 'Persona', a: 'c', why: 'Es una clase: UpperCamelCase.' },
    { n: 'MAX_INTENTOS', a: 'k', why: 'Es una constante: MAYÚSCULAS.' },
    { n: 'edadEmpleado', a: 'v', why: 'Variable: lowerCamelCase.' },
    { n: 'AdivinaNumero', a: 'c', why: 'Es una clase: UpperCamelCase.' },
    { n: 'calcularEdad', a: 'v', why: 'Un método: lowerCamelCase.' },
    { n: 'PI', a: 'k', why: 'Una constante: MAYÚSCULAS.' },
    { n: 'contador', a: 'v', why: 'Variable: lowerCamelCase.' },
    { n: 'Scanner', a: 'c', why: 'Es una clase: UpperCamelCase.' }
  ];
  el.innerHTML =
    '<p style="margin-top:0">Pulsa lo que crees que es cada nombre según la convención de Java.</p>';
  items.forEach(function (it) {
    var r = document.createElement('div');
    r.className = 'row';
    r.style.margin = '.35rem 0';
    r.innerHTML =
      '<code style="min-width:9.5rem;font-size:.95rem">' +
      it.n +
      '</code><button class="btn" type="button" data-v="c">Clase</button><button class="btn" type="button" data-v="k">Constante</button><button class="btn" type="button" data-v="v">Variable o método</button><span class="idfb"></span>';
    var fb = r.querySelector('.idfb');
    r.querySelectorAll('button').forEach(function (b) {
      b.onclick = function () {
        if (b.dataset.v === it.a) {
          fb.innerHTML = '<b style="color:var(--ok)">Correcto.</b> ' + it.why;
          r.querySelectorAll('button').forEach(function (x) {
            x.disabled = true;
          });
        } else fb.innerHTML = '<b style="color:var(--bad)">No.</b> Prueba otra.';
      };
    });
    el.appendChild(r);
  });
}
