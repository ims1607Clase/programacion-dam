/* ============================================================
   Simulador: ciclo de vida del software y línea del tiempo de paradigmas
   
   ============================================================ */
/* ---------- ciclo de vida ---------- */
function renderLife(el) {
  var P = [
    {
      n: 'Análisis',
      q: '¿QUÉ problema hay que resolver?',
      d: 'Se comprende el problema y lo que le rodea. Se define qué información maneja el programa y cómo, en el <b>documento de requisitos</b>, para evitar conflictos con el cliente.',
      ex: 'Carrito de la compra online: ¿quién puede añadir productos?, ¿hay límite?, ¿qué pasa con los productos si el usuario sale sin comprar?'
    },
    {
      n: 'Diseño',
      q: '¿CÓMO se resuelve el problema?',
      d: 'Se usa <b>divide y vencerás (top-down)</b>: el problema grande se divide en subproblemas más sencillos. También se decide el <b>lenguaje de programación</b>.',
      ex: 'Carrito: un módulo para productos, otro para el pago, otro para usuarios…'
    },
    {
      n: 'Codificación',
      q: '¿Cómo se escribe?',
      d: 'Se especifican las clases (en POO, con diagramas <b>UML</b>) y se convierten en <b>código fuente</b>. Coloquialmente, «picar código».',
      ex: 'Escribir en Java las clases Producto, Carrito, Usuario…'
    },
    {
      n: 'Pruebas',
      q: '¿Funciona de verdad?',
      d: 'Imprescindibles. Errores básicos de <b>sintaxis</b> los ve el programador; los demás los buscan <b>testers</b> (el programador tiene una visión sesgada). Tipos: unitarias, de integración, funcionales y de aceptación.',
      ex: 'Probar qué pasa si añado 0 productos o un número negativo.'
    },
    {
      n: 'Mantenimiento',
      q: '¿Y cuando ya está en uso?',
      d: '<b>Correctivo:</b> corrige errores no detectados. <b>Perfectivo:</b> mejora rendimiento o añade funciones. <b>Adaptativo:</b> adapta a otros entornos.',
      ex: 'Añadir pago con móvil (perfectivo) o hacer que funcione también en tablets (adaptativo).'
    }
  ];
  el.innerHTML = '<div class="phases"></div><div class="panel life-d"></div>';
  var ph = el.querySelector('.phases'),
    d = el.querySelector('.life-d');
  P.forEach(function (p, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'phase';
    b.innerHTML = '<small>' + (i + 1) + '</small>' + p.n;
    b.onclick = function () {
      sel(i);
    };
    ph.appendChild(b);
  });
  function sel(i) {
    [].forEach.call(ph.children, function (b, k) {
      b.classList.toggle('on', k === i);
    });
    d.innerHTML =
      '<h4>' +
      P[i].n +
      ': ' +
      P[i].q +
      '</h4><p>' +
      P[i].d +
      '</p><p class="muted"><b>Ejemplo:</b> ' +
      P[i].ex +
      '</p>';
  }
  sel(0);
}
function renderTimeline(el) {
  var T = [
    {
      y: '1950–1970',
      n: 'Desestructurada',
      d: 'Mezcla bucles y saltos hasta que funciona. Código <b>spaghetti</b>.',
      l: 'Fortran, Cobol, Simula, Basic'
    },
    {
      y: '1970–1990',
      n: 'Estructurada',
      d: 'Tres estructuras: secuencial, alternativa e iterativa. Propuesta por Dijkstra.',
      l: 'C, Pascal, Modula-2'
    },
    {
      y: '1970–1990',
      n: 'Modular',
      d: 'Dividir en módulos independientes que cooperan. Mide cohesión y acoplamiento. Convive con la estructurada.',
      l: '(compatible con la estructurada)'
    },
    {
      y: 'Desde los 90',
      n: 'Orientada a objetos',
      d: 'Datos y operaciones juntos en objetos creados a partir de clases. El más extendido.',
      l: 'C++, C#, Java, Python, Ruby, PHP, JavaScript, Visual Basic, Delphi, Rust, Go…'
    },
    {
      y: 'Desde ~2000',
      n: 'Dirigida por eventos',
      d: 'El programa reacciona a eventos. Convive con la orientada a objetos.',
      l: ''
    },
    {
      y: 'Después de la POO',
      n: 'Otros paradigmas',
      d: 'Declarativa, orientada a aspectos (AOP), funcional (funciones matemáticas) y lógica.',
      l: ''
    }
  ];
  el.innerHTML = '<div class="tl"></div><div class="panel tl-d"></div>';
  var tl = el.querySelector('.tl'),
    d = el.querySelector('.tl-d');
  T.forEach(function (t, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'tlb';
    b.innerHTML = '<small>' + t.y + '</small>' + t.n;
    b.onclick = function () {
      sel(i);
    };
    tl.appendChild(b);
  });
  function sel(i) {
    [].forEach.call(tl.children, function (b, k) {
      b.classList.toggle('on', k === i);
    });
    d.innerHTML =
      '<h4>' +
      T[i].n +
      ' <small>(' +
      T[i].y +
      ')</small></h4><p>' +
      T[i].d +
      '</p>' +
      (T[i].l ? '<p class="muted"><b>Lenguajes:</b> ' + T[i].l + '</p>' : '');
  }
  sel(0);
}
