/* ============================================================
   Simulador: explorar un proyecto Maven
   
   ============================================================ */
/* ---------- Maven ---------- */
function renderMaven(el) {
  var N = [
    {
      p: 'HolaNetBeans/',
      d: 'La carpeta del proyecto. Todo proyecto Maven tiene siempre la misma estructura.',
      i: 0
    },
    {
      p: 'pom.xml',
      d: '<b>Project Object Model</b>: configuración. Identifica el proyecto con <b>groupId</b> (dominio al revés), <b>artifactId</b> (nombre) y <b>version</b>; indica la versión de Java y las dependencias.',
      i: 1
    },
    { p: 'src/', d: 'Todo lo que escribes tú.', i: 1 },
    { p: 'src/main/', d: 'El código de la aplicación (no de las pruebas).', i: 2 },
    {
      p: 'src/main/java/',
      d: 'Código fuente (<code>.java</code>), organizado en <b>paquetes</b> (carpetas como <code>com/miempresa/holanetbeans</code>).',
      i: 3
    },
    { p: 'src/main/resources/', d: 'Recursos: imágenes, ficheros de configuración…', i: 3 },
    { p: 'src/test/java/', d: 'El código de las <b>pruebas</b>.', i: 2 },
    {
      p: 'target/',
      d: 'No se crea a mano: la <b>genera Maven al compilar</b>. Se puede borrar sin problema (por eso no se entrega).',
      i: 1
    },
    {
      p: 'target/classes/',
      d: 'Los ficheros <code>.class</code> (bytecode) y el <code>.jar</code> resultante. Es lo que antes hacía <code>javac</code> desde la consola.',
      i: 2
    }
  ];
  el.innerHTML =
    '<div class="tree"></div><div class="panel mv-d">Pulsa una carpeta o fichero para ver para qué sirve.</div>';
  var tr = el.querySelector('.tree'),
    d = el.querySelector('.mv-d');
  N.forEach(function (n) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'tnode';
    b.style.paddingLeft = 0.6 + n.i * 1.3 + 'rem';
    b.textContent = (/\/$/.test(n.p) ? '📁 ' : '📄 ') + n.p.replace(/.*\/(?=.)/, '');
    b.onclick = function () {
      [].forEach.call(tr.children, function (x) {
        x.classList.remove('on');
      });
      b.classList.add('on');
      d.innerHTML = '<h4>' + n.p + '</h4><p>' + n.d + '</p>';
    };
    tr.appendChild(b);
  });
}
