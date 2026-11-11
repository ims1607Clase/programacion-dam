/* ============================================================
   Utilidades del Tema 1
   Guardado del progreso (localStorage, clave dam-prog-t1), escapado de HTML, resaltado de código, etc.
   ============================================================ */
/* ---------- utilidades ---------- */
var LS = 'dam-prog-t1',
  prog = {};
try {
  prog = JSON.parse(localStorage.getItem(LS) || '{}');
} catch (e) {
  prog = {};
}
function save() {
  try {
    localStorage.setItem(LS, JSON.stringify(prog));
  } catch (e) {}
  updateProgress();
}
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function hl(code) {
  return esc(code).replace(
    /(\/\/.*$)|("(?:[^"\\\n]|\\.)*")|\b(if|else|switch|case|default|break|continue|return|for|while|do|int|double|boolean|String|final|public|class|static|void|new|true|false|try|catch)\b|\b(\d+(?:\.\d+)?)\b/gm,
    function (m, c, s, k, n) {
      return c
        ? '<span class="c">' + c + '</span>'
        : s
          ? '<span class="s">' + s + '</span>'
          : k
            ? '<span class="k">' + k + '</span>'
            : '<span class="n">' + n + '</span>';
    }
  );
}
function shuffle(a) {
  a = a.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
  return a;
}
function norm(s) {
  return String(s)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\-\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .join(' ');
}
