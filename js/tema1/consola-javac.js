/* ============================================================
   Simulador: consola con javac / java / jdb
   
   ============================================================ */
/* ---------- consola simulada javac / java ---------- */
function renderConsole(el) {
  el.innerHTML =
    '<div class="term" aria-live="polite"></div><div class="row"><span class="prompt">$</span><input type="text" id="cs-i" autocomplete="off" spellcheck="false" aria-label="Comando" placeholder="escribe un comando y pulsa Enter" style="flex:1"></div><div class="row" style="margin-top:.4rem"><button class="btn" type="button" data-c="ls">ls</button><button class="btn" type="button" data-c="cat HolaMundo.java">cat HolaMundo.java</button><button class="btn" type="button" data-c="javac HolaMundo.java">javac HolaMundo.java</button><button class="btn" type="button" data-c="java HolaMundo">java HolaMundo</button><button class="btn" type="button" data-c="reset">reiniciar</button></div><p class="muted">Simulador: el fichero <code>HolaMundo.java</code> ya existe. Prueba los comandos de los apuntes, y también a equivocarte (ejecutar sin compilar, escribir mal el nombre…) para ver qué dice Java.</p>';
  var term = el.querySelector('.term'),
    inp = el.querySelector('#cs-i'),
    hasClass = false,
    SRC =
      'public class HolaMundo {\n    public static void main(String[] args) {\n        System.out.println("Hola, mundo!");\n    }\n}';
  function out(t, cls) {
    var d = document.createElement('div');
    if (cls) d.className = cls;
    d.textContent = t;
    term.appendChild(d);
    term.scrollTop = term.scrollHeight;
  }
  function run(cmd) {
    cmd = cmd.trim();
    out('$ ' + cmd, 'cmd');
    if (!cmd) return;
    var p = cmd.split(/\s+/);
    if (cmd === 'reset') {
      hasClass = false;
      term.innerHTML = '';
      return;
    }
    if (p[0] === 'ls') {
      out('HolaMundo.java' + (hasClass ? '  HolaMundo.class' : ''));
      return;
    }
    if (p[0] === 'cat' && p[1] === 'HolaMundo.java') {
      out(SRC);
      return;
    }
    if (p[0] === 'javac') {
      if (!p[1]) {
        out('Usage: javac <options> <source files>', 'err');
        return;
      }
      if (p[1] === 'HolaMundo.java') {
        hasClass = true;
        out('(sin mensajes: se ha creado HolaMundo.class con el bytecode)', 'ok');
        return;
      }
      if (/^holamundo\.java$/i.test(p[1]))
        out(
          'error: file not found: ' +
            p[1] +
            '  (en el disco el fichero se llama HolaMundo.java: las mayúsculas importan)',
          'err'
        );
      else out('error: file not found: ' + p[1], 'err');
      return;
    }
    if (p[0] === 'java') {
      if (!p[1]) {
        out('Usage: java [options] <mainclass> [args...]', 'err');
        return;
      }
      if (p[1] === 'HolaMundo.java') {
        out(
          'Hola, mundo!  (¡ojo! esto solo funciona en versiones modernas de java que compilan al vuelo; lo habitual es compilar con javac y ejecutar con «java HolaMundo»)',
          'ok'
        );
        return;
      }
      if (p[1] === 'HolaMundo' || p[1] === 'HolaMundo.class') {
        if (p[1] === 'HolaMundo.class') {
          out(
            'Error: Could not find or load main class HolaMundo.class\nCaused by: java.lang.ClassNotFoundException: HolaMundo.class  (se pone el nombre de la clase, sin la extensión)',
            'err'
          );
          return;
        }
        if (!hasClass) {
          out(
            'Error: Could not find or load main class HolaMundo  (primero hay que compilar con javac)',
            'err'
          );
          return;
        }
        out('Hola, mundo!', 'ok');
        return;
      }
      out('Error: Could not find or load main class ' + p[1], 'err');
      return;
    }
    out(p[0] + ': comando no soportado en este simulador (prueba ls, cat, javac, java)', 'err');
  }
  inp.onkeydown = function (e) {
    if (e.key === 'Enter') {
      run(inp.value);
      inp.value = '';
    }
  };
  el.querySelectorAll('[data-c]').forEach(function (b) {
    b.onclick = function () {
      run(b.dataset.c);
    };
  });
  out('Bienvenido. Escribe un comando.');
}
