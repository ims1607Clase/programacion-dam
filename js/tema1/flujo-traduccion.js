/* ============================================================
   Simulador: camino del código hasta ejecutarse
   
   ============================================================ */
/* ---------- flujo de traducción ---------- */
function renderPipeline(el) {
  var M = {
    comp: {
      t: 'Compilado (como C/C++)',
      s: [
        ['Código fuente', 'tú lo escribes (alto nivel)'],
        ['Compilador', 'traduce TODO el programa de una vez'],
        ['Código objeto', 'binario de ESA máquina'],
        ['Se ejecuta', 'rápido, sin traducir otra vez']
      ],
      n: 'Si cambias de sistema operativo o de hardware, hay que volver a compilar desde el código fuente.'
    },
    inte: {
      t: 'Interpretado (como JavaScript)',
      s: [
        ['Código fuente', 'tú lo escribes (alto nivel)'],
        ['Intérprete', 'traduce y ejecuta línea a línea'],
        ['Resultado', 'se ve mientras se ejecuta']
      ],
      n: 'Más lento (traduce cada vez que corre) pero portable: funciona en cualquier sitio que tenga el intérprete.'
    },
    java: {
      t: 'Semicompilado (Java)',
      s: [
        ['Código fuente .java', 'tú lo escribes'],
        ['Compilador javac', 'traduce a bytecode (una vez)'],
        ['Bytecode .class', 'binario para una máquina VIRTUAL'],
        ['JVM', 'traduce el bytecode al binario real al ejecutar'],
        ['Se ejecuta', 'en cualquier sistema con JVM']
      ],
      n: 'Mezcla lo mejor de los dos: portable como un interpretado y eficiente como un compilado.'
    }
  };
  el.innerHTML =
    '<div class="row"><label>Ver el camino de un lenguaje <select id="pl-k"><option value="comp">Compilado</option><option value="inte">Interpretado</option><option value="java">Java (semicompilado)</option></select></label><button class="btn primary" type="button" id="pl-n">Siguiente paso</button><button class="btn" type="button" id="pl-r">Reiniciar</button></div><div class="pipe"></div><div class="note" id="pl-note"></div>';
  var sel = el.querySelector('#pl-k'),
    pipe = el.querySelector('.pipe'),
    step = 0;
  function draw() {
    var m = M[sel.value];
    pipe.innerHTML = '';
    m.s.forEach(function (x, i) {
      var b = document.createElement('div');
      b.className = 'pbox' + (i <= step ? ' on' : '');
      b.innerHTML = '<b>' + x[0] + '</b><span>' + x[1] + '</span>';
      pipe.appendChild(b);
      if (i < m.s.length - 1) {
        var a = document.createElement('div');
        a.className = 'parr';
        a.textContent = '→';
        pipe.appendChild(a);
      }
    });
    el.querySelector('#pl-note').innerHTML =
      step >= m.s.length - 1 ? '<b>' + m.t + ':</b> ' + m.n : '<b>' + m.t + '</b>';
    el.querySelector('#pl-n').disabled = step >= m.s.length - 1;
  }
  el.querySelector('#pl-n').onclick = function () {
    step++;
    draw();
  };
  el.querySelector('#pl-r').onclick = function () {
    step = 0;
    draw();
  };
  sel.onchange = function () {
    step = 0;
    draw();
  };
  draw();
}
