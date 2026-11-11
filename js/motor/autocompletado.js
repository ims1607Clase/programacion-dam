/* ============================================================
   Autocompletado y snippets del editor
   Sugerencias que aparecen al escribir en el editor (solo lo que se ve en los apuntes).
   ============================================================ */
/* Autocompletado y snippets para el editor (solo lo que se ve en los apuntes) */
var SNIPS = [
  ['sout', 'System.out.println(…)', 'System.out.println($1);$0'],
  ['print', 'System.out.print(…)', 'System.out.print($1);$0'],
  ['psvm', 'método main', 'public static void main(String[] args) {\n    $0\n}'],
  ['main', 'método main', 'public static void main(String[] args) {\n    $0\n}'],
  ['class', 'public class Main', 'public class Main {\n    $0\n}'],
  ['fori', 'for (int i…)', 'for (int i = 0; i < $1; i++) {\n    $0\n}'],
  ['for', 'for', 'for (int i = 0; i < $1; i++) {\n    $0\n}'],
  ['while', 'while', 'while ($1) {\n    $0\n}'],
  ['dowhile', 'do … while', 'do {\n    $0\n} while ($1);'],
  ['if', 'if', 'if ($1) {\n    $0\n}'],
  ['ifelse', 'if … else', 'if ($1) {\n    $2\n} else {\n    $0\n}'],
  ['elseif', 'else if', 'else if ($1) {\n    $0\n}'],
  ['else', 'else', 'else {\n    $0\n}'],
  [
    'switch',
    'switch',
    'switch ($1) {\n    case $2:\n        $0\n        break;\n    default:\n        break;\n}'
  ],
  ['case', 'case … break', 'case $1:\n    $0\n    break;'],
  [
    'try',
    'try … catch',
    'try {\n    $0\n} catch (Exception e) {\n    System.out.println(e.getMessage());\n}'
  ],
  [
    'tryf',
    'try … catch … finally',
    'try {\n    $0\n} catch (Exception e) {\n    System.out.println(e.getMessage());\n} finally {\n    \n}'
  ],
  ['throw', 'throw new …', 'throw new $1(\"$2\");$0'],
  ['scan', 'Scanner sc', 'Scanner sc = new Scanner(System.in);$0'],
  ['scanner', 'Scanner sc', 'Scanner sc = new Scanner(System.in);$0'],
  ['import', 'import java.util.Scanner', 'import java.util.Scanner;$0'],
  ['nextint', 'int = sc.nextInt()', 'int $1 = sc.nextInt();$0'],
  ['nextdouble', 'double = sc.nextDouble()', 'double $1 = sc.nextDouble();$0'],
  ['nextline', 'String = sc.nextLine()', 'String $1 = sc.nextLine();$0']
];
var MEMBERS = {
  Math: [
    ['abs', 'abs(x) · valor absoluto', 'abs($1)$0'],
    ['pow', 'pow(base, exp) · potencia', 'pow($1, $2)$0'],
    ['sqrt', 'sqrt(x) · raíz cuadrada', 'sqrt($1)$0'],
    ['round', 'round(x) · redondea', 'round($1)$0'],
    ['floor', 'floor(x)', 'floor($1)$0'],
    ['ceil', 'ceil(x)', 'ceil($1)$0'],
    ['max', 'max(a, b)', 'max($1, $2)$0'],
    ['min', 'min(a, b)', 'min($1, $2)$0'],
    ['random', 'random() · entre 0 y 1', 'random()$0'],
    ['sin', 'sin(x) · radianes', 'sin($1)$0'],
    ['cos', 'cos(x) · radianes', 'cos($1)$0'],
    ['exp', 'exp(x) · e elevado a x', 'exp($1)$0'],
    ['log', 'log(x) · neperiano', 'log($1)$0'],
    ['log10', 'log10(x) · decimal', 'log10($1)$0'],
    ['PI', 'PI', 'PI$0'],
    ['E', 'E', 'E$0']
  ],
  'System.out': [
    ['println', 'println(…) · escribe y salta de línea', 'println($1);$0'],
    ['print', 'print(…) · escribe sin saltar', 'print($1);$0']
  ],
  Scanner: [
    ['nextInt', 'nextInt() · lee un entero', 'nextInt()$0'],
    ['nextDouble', 'nextDouble() · lee un decimal', 'nextDouble()$0'],
    ['nextLine', 'nextLine() · lee una línea', 'nextLine()$0'],
    ['next', 'next() · lee una palabra', 'next()$0'],
    ['nextLong', 'nextLong()', 'nextLong()$0'],
    ['nextBoolean', 'nextBoolean()', 'nextBoolean()$0'],
    ['hasNext', 'hasNext()', 'hasNext()$0'],
    ['hasNextInt', 'hasNextInt()', 'hasNextInt()$0'],
    ['hasNextLine', 'hasNextLine()', 'hasNextLine()$0'],
    ['close', 'close() · cierra el Scanner', 'close();$0']
  ]
};
var AC = (function () {
  var box = null;
  function ensure() {
    if (box) return box;
    box = document.createElement('div');
    box.className = 'ac-box';
    box.style.display = 'none';
    document.body.appendChild(box);
    return box;
  }
  function parse(tpl) {
    // devuelve {text, stops:[offsets en orden 1,2,...,0]}
    var text = '',
      pos = {},
      i = 0;
    while (i < tpl.length) {
      var m = /^\$(\d)/.exec(tpl.slice(i));
      if (m) {
        pos[m[1]] = text.length;
        i += 2;
      } else {
        text += tpl[i++];
      }
    }
    var order = [],
      k;
    for (k = 1; k <= 9; k++) if (pos[k] != null) order.push(pos[k]);
    order.push(pos[0] != null ? pos[0] : text.length);
    return { text: text, stops: order };
  }
  function attach(ta, host, redraw) {
    var sel = 0,
      list = [],
      word = '',
      stops = [],
      open = false,
      cw = 0,
      last = ta.value.length;
    function measure() {
      var s = document.createElement('span'),
        cs = getComputedStyle(ta);
      s.style.cssText = 'position:absolute;visibility:hidden;white-space:pre;font:' + cs.font;
      s.textContent = 'MMMMMMMMMM';
      document.body.appendChild(s);
      cw = s.getBoundingClientRect().width / 10;
      document.body.removeChild(s);
    }
    function close() {
      open = false;
      ensure().style.display = 'none';
    }
    function wordAt() {
      var s = ta.selectionStart,
        m = /[A-Za-z]+$/.exec(ta.value.slice(0, s));
      if (!m) return '';
      var b = ta.value[s - m[0].length - 1];
      if (b === '.') return '';
      return m[0];
    }
    function memberCtx() {
      var s = ta.selectionStart,
        m = /([A-Za-z_][\w.]*)\.([A-Za-z0-9]*)$/.exec(ta.value.slice(0, s));
      if (!m) return null;
      var obj = m[1],
        key = null;
      if (MEMBERS[obj]) key = obj;
      else {
        var sc = new RegExp('Scanner\\s+' + obj.replace(/[^\w]/g, '') + '\\b').test(ta.value);
        if (sc && obj.indexOf('.') < 0) key = 'Scanner';
      }
      return key ? { key: key, part: m[2] } : null;
    }
    function show(forced) {
      if (ta.selectionStart !== ta.selectionEnd) {
        close();
        return;
      }
      var mc = memberCtx();
      if (mc) {
        word = mc.part;
        var pl = mc.part.toLowerCase();
        list = MEMBERS[mc.key]
          .filter(function (x) {
            return x[0].toLowerCase().indexOf(pl) === 0 && x[0].toLowerCase() !== pl;
          })
          .slice(0, 8);
        if (!list.length) {
          close();
          return;
        }
        if (sel >= list.length) sel = 0;
        open = true;
        render();
        place();
        return;
      }
      word = wordAt();
      if (word.length < (forced ? 0 : 2)) {
        close();
        return;
      }
      var w = word.toLowerCase();
      list = SNIPS.filter(function (x) {
        return x[0].toLowerCase().indexOf(w) === 0 && (forced || x[0] !== word);
      });
      if (!list.length)
        list = SNIPS.filter(function (x) {
          return x[0] === word;
        });
      list = list.slice(0, forced ? 10 : 6);
      if (!list.length) {
        close();
        return;
      }
      if (sel >= list.length) sel = 0;
      open = true;
      render();
      place();
    }
    function render() {
      var b = ensure();
      b.innerHTML =
        list
          .map(function (x, i) {
            return (
              '<div class="ac-it' +
              (i === sel ? ' on' : '') +
              '" data-i="' +
              i +
              '"><b>' +
              x[0] +
              '</b><span>' +
              x[1].replace(/&/g, '&amp;').replace(/</g, '&lt;') +
              '</span></div>'
            );
          })
          .join('') +
        '<div class="ac-foot">Enter o Tab para insertar · Esc para cerrar · Ctrl+Espacio (o Alt+Espacio) abre las sugerencias</div>';
      b.style.display = 'block';
    }
    function place() {
      if (!cw) measure();
      var cs = getComputedStyle(ta),
        lh = parseFloat(cs.lineHeight) || 20,
        pt = parseFloat(cs.paddingTop),
        pl = parseFloat(cs.paddingLeft);
      var s = ta.selectionStart,
        before = ta.value.slice(0, s),
        ln = before.split('\n').length - 1,
        col = before.length - before.lastIndexOf('\n') - 1;
      var r = ta.getBoundingClientRect(),
        b = ensure();
      var x = r.left + pl + (col - word.length) * cw - ta.scrollLeft,
        y = r.top + pt + (ln + 1) * lh - ta.scrollTop;
      var bw = b.offsetWidth,
        bh = b.offsetHeight;
      if (x + bw > window.innerWidth - 8) x = window.innerWidth - bw - 8;
      if (y + bh > window.innerHeight - 8) y = r.top + pt + ln * lh - ta.scrollTop - bh;
      b.style.left = Math.max(4, x) + 'px';
      b.style.top = Math.max(4, y) + 'px';
    }
    function indentOf(v, s) {
      var ls = v.lastIndexOf('\n', s - 1) + 1;
      return /^[ \t]*/.exec(v.slice(ls, s))[0];
    }
    function expand(sn) {
      var s = ta.selectionStart,
        v = ta.value,
        start = s - word.length,
        ind = indentOf(v, start);
      var p = parse(sn[2].replace(/\n/g, '\n' + ind));
      if (ta._rt) ta._rt(p.text, start, s);
      else ta.setRangeText(p.text, start, s, 'end');
      stops = p.stops.map(function (o) {
        return start + o;
      });
      var first = stops.shift();
      ta.selectionStart = ta.selectionEnd = first;
      last = ta.value.length;
      close();
      redraw();
    }
    ta.addEventListener('input', function () {
      var d = ta.value.length - last;
      last = ta.value.length;
      if (stops.length) {
        var c = ta.selectionStart;
        stops = stops.map(function (o) {
          return o >= c - d ? o + d : o;
        });
        if (stops.length && d !== 0 && Math.abs(d) > 40) stops = [];
      }
      sel = 0;
      show();
    });
    ta.addEventListener(
      'keydown',
      function (e) {
        if (
          ((e.ctrlKey || e.metaKey) && (e.code === 'Space' || e.key === ' ' || e.key === 'Spacebar')) ||
          (e.altKey && !e.shiftKey && e.code === 'Space') ||
          (e.ctrlKey && e.key === '.')
        ) {
          e.preventDefault();
          show(true);
          return;
        }
        if (open) {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            e.stopImmediatePropagation();
            sel = (sel + 1) % list.length;
            render();
            place();
            return;
          }
          if (e.key === 'ArrowUp') {
            e.preventDefault();
            e.stopImmediatePropagation();
            sel = (sel + list.length - 1) % list.length;
            render();
            place();
            return;
          }
          if (e.key === 'Tab' || e.key === 'Enter') {
            e.preventDefault();
            e.stopImmediatePropagation();
            expand(list[sel]);
            return;
          }
          if (e.key === 'Escape') {
            e.preventDefault();
            close();
            return;
          }
        }
        if (e.key === 'Tab' && !e.shiftKey && stops.length) {
          e.preventDefault();
          e.stopImmediatePropagation();
          var o = stops.shift();
          ta.selectionStart = ta.selectionEnd = Math.min(o, ta.value.length);
          return;
        }
        if (e.key === 'Escape') {
          stops = [];
        }
      },
      true
    );
    ta.addEventListener('blur', function () {
      setTimeout(close, 120);
    });
    ta.addEventListener('scroll', function () {
      if (open) place();
    });
    ensure().addEventListener('mousedown', function (e) {
      var it = e.target.closest('.ac-it');
      if (!it || !open) return;
      e.preventDefault();
      expand(list[+it.dataset.i]);
      ta.focus();
    });
    ta.addEventListener('mousedown', function () {
      close();
    });
  }
  return { attach: attach, SNIPS: SNIPS };
})();
