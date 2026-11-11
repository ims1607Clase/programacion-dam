/* ============================================================
   Laboratorio de código
   Editor con números de línea, terminal, ejecución con el intérprete y corrección de ejercicios (gradeEx).
   ============================================================ */
/* Laboratorio de código: editor + ejecución con JavaI + tests. Usa globals: esc, shuffle, prog, save */
var JKW =
  /(\/\/.*$)|("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)')|\b(if|else|switch|case|default|break|continue|return|for|while|do|int|double|float|long|short|byte|char|boolean|final|public|private|protected|class|static|void|new|true|false|null|try|catch|finally|throw|throws|extends|super|this|assert|var|import)\b|\b(\d+(?:\.\d+)?[LlFfDd]?)\b/gm;
function hlJ(code) {
  return esc(code).replace(JKW, function (m, c, s, ch, k, n) {
    return c
      ? '<span class="c">' + c + '</span>'
      : s || ch
        ? '<span class="s">' + (s || ch) + '</span>'
        : k
          ? '<span class="k">' + k + '</span>'
          : '<span class="n">' + n + '</span>';
  });
}
function makeEditor(host, init, onchange) {
  host.className = 'ed';
  host.innerHTML =
    '<pre class="gut" aria-hidden="true"></pre><pre class="hlp" aria-hidden="true"></pre><textarea spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Editor de código Java"></textarea>';
  var pre = host.querySelector('.hlp'),
    gut = host.querySelector('.gut'),
    ta = host.querySelector('textarea');
  function draw() {
    pre.innerHTML = hlJ(ta.value) + '\n';
    var n = ta.value.split('\n').length,
      g = '';
    for (var i = 1; i <= n; i++) g += i + '\n';
    gut.textContent = g;
    pre.scrollTop = ta.scrollTop;
    pre.scrollLeft = ta.scrollLeft;
    gut.scrollTop = ta.scrollTop;
    if (onchange) onchange(ta.value);
  }
  function setRT(txt, a, b, mode) {
    ta.focus();
    ta.setSelectionRange(a, b);
    var ok = false;
    try {
      ok = document.execCommand('insertText', false, txt);
    } catch (e) {}
    if (!ok) ta.setRangeText(txt, a, b, mode || 'end');
  }
  ta._rt = setRT;
  ta.value = init;
  draw();
  ta.addEventListener('input', draw);
  ta.addEventListener('scroll', function () {
    pre.scrollTop = ta.scrollTop;
    pre.scrollLeft = ta.scrollLeft;
    gut.scrollTop = ta.scrollTop;
  });
  if (window.AC) AC.attach(ta, host, draw);
  ta.addEventListener(
    'keydown',
    function (e) {
      var v = ta.value,
        s = ta.selectionStart,
        en = ta.selectionEnd,
        k = e.key,
        ctrl = e.ctrlKey || e.metaKey;
      function bounds() {
        var end = en > s && v[en - 1] === '\n' ? en - 1 : en,
          ls = v.lastIndexOf('\n', s - 1) + 1,
          le = v.indexOf('\n', end);
        if (le < 0) le = v.length;
        return [ls, le];
      }
      function sel(a, b) {
        ta.selectionStart = a;
        ta.selectionEnd = b;
        draw();
      }
      if (ctrl && e.shiftKey && !e.altKey && (k === 'ArrowDown' || k === 'ArrowUp')) {
        // duplicar línea (Ctrl+Mayús+↑/↓)
        e.preventDefault();
        var bd = bounds(),
          blk = v.slice(bd[0], bd[1]);
        if (k === 'ArrowDown') {
          setRT('\n' + blk, bd[1], bd[1]);
          sel(s + blk.length + 1, en + blk.length + 1);
        } else {
          setRT(blk + '\n', bd[0], bd[0]);
          sel(s, en);
        }
        return;
      }
      if (e.altKey && e.shiftKey && !ctrl && (k === 'ArrowDown' || k === 'ArrowUp')) {
        // mover línea (Alt+Mayús+↑/↓)
        e.preventDefault();
        var b2 = bounds(),
          blk2 = v.slice(b2[0], b2[1]);
        if (k === 'ArrowDown') {
          if (b2[1] >= v.length) return;
          var nl = v.indexOf('\n', b2[1] + 1);
          if (nl < 0) nl = v.length;
          var nxt = v.slice(b2[1] + 1, nl);
          setRT(nxt + '\n' + blk2, b2[0], nl);
          sel(s + nxt.length + 1, en + nxt.length + 1);
        } else {
          if (b2[0] === 0) return;
          var ps = v.lastIndexOf('\n', b2[0] - 2) + 1,
            prv = v.slice(ps, b2[0] - 1);
          setRT(blk2 + '\n' + prv, ps, b2[1]);
          sel(s - prv.length - 1, en - prv.length - 1);
        }
        return;
      }
      if (ctrl && !e.shiftKey && !e.altKey && (k === 'e' || k === 'E')) {
        // borrar línea (Ctrl+E)
        e.preventDefault();
        var b3 = bounds(),
          from = b3[0],
          to = b3[1] + 1;
        if (b3[1] >= v.length && from > 0) {
          from -= 1;
          to = v.length;
        }
        setRT('', from, Math.min(to, v.length));
        sel(
          Math.min(from + (from < b3[0] ? 1 : 0), ta.value.length),
          Math.min(from + (from < b3[0] ? 1 : 0), ta.value.length)
        );
        return;
      }
      if (ctrl && !e.altKey && (k === '/' || (e.shiftKey && (k === 'c' || k === 'C')))) {
        // comentar / descomentar (Ctrl+/ o Ctrl+Mayús+C)
        e.preventDefault();
        var b4 = bounds(),
          seg = v.slice(b4[0], b4[1]),
          ls4 = seg.split('\n');
        var all = ls4.every(function (x) {
          return !x.trim() || /^\s*\/\//.test(x);
        });
        var minInd = Math.min.apply(
          null,
          ls4
            .filter(function (x) {
              return x.trim();
            })
            .map(function (x) {
              return /^\s*/.exec(x)[0].length;
            })
            .concat([999])
        );
        if (minInd === 999) minInd = 0;
        var out = ls4
          .map(function (x) {
            if (!x.trim()) return x;
            return all ? x.replace(/^(\s*)\/\/ ?/, '$1') : x.slice(0, minInd) + '// ' + x.slice(minInd);
          })
          .join('\n');
        setRT(out, b4[0], b4[1]);
        sel(b4[0], b4[0] + out.length);
        return;
      }
      if (ctrl && e.shiftKey && (k === 'f' || k === 'F')) {
        // formatear (Ctrl+Mayús+F)
        e.preventDefault();
        var depth = 0,
          ln = v.split('\n'),
          f = ln
            .map(function (x) {
              var t = x.trim();
              if (!t) return '';
              var cl = /^[}\])]/.test(t) ? 1 : 0,
                d = Math.max(0, depth - cl),
                clean = t.replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\/\/.*$/g, '');
              var op = (clean.match(/[{(]/g) || []).length,
                cls = (clean.match(/[})]/g) || []).length;
              depth = Math.max(0, depth + op - cls);
              if (/^(case\b|default\b)/.test(t)) {
                /* mantiene la sangría del switch */
              }
              return '    '.repeat(d) + t;
            })
            .join('\n');
        var lineNo = v.slice(0, s).split('\n').length - 1;
        setRT(f, 0, v.length);
        var pos = 0,
          fl = f.split('\n');
        for (var q = 0; q < lineNo && q < fl.length; q++) pos += fl[q].length + 1;
        sel(Math.min(pos + fl[lineNo].length, f.length), Math.min(pos + fl[lineNo].length, f.length));
        return;
      }
      if (k === 'Tab' && (e.shiftKey || (s !== en && v.slice(s, en).indexOf('\n') >= 0))) {
        // sangrar / quitar sangría varias líneas
        e.preventDefault();
        e.stopImmediatePropagation();
        var b5 = bounds(),
          l5 = v.slice(b5[0], b5[1]).split('\n'),
          delta = 0,
          out5 = l5
            .map(function (x) {
              if (e.shiftKey) {
                var m = /^( {1,4}|\t)/.exec(x);
                if (m) {
                  delta -= m[0].length;
                  return x.slice(m[0].length);
                }
                return x;
              }
              delta += 4;
              return '    ' + x;
            })
            .join('\n');
        setRT(out5, b5[0], b5[1]);
        sel(b5[0], b5[0] + out5.length);
        return;
      }
    },
    true
  );

  ta.addEventListener('keydown', function (e) {
    if (e.key === 'F6') {
      e.preventDefault();
      var root = host.closest('.cs-right,.lab-r');
      var rb = root && root.querySelector('[data-a="run"]');
      if (rb) rb.click();
    }
  });
  ta.addEventListener('keydown', function (e) {
    var s = ta.selectionStart,
      v = ta.value,
      PAIRS = { '(': ')', '[': ']', '"': '"', "'": "'" },
      CL = ')]"\'';
    if (!e.ctrlKey && !e.metaKey && !e.altKey && e.key.length === 1) {
      var nx = v[s];
      if (e.key === '{' && (!nx || /[\s)\]};,]/.test(nx)) && s === ta.selectionEnd) {
        e.preventDefault();
        setRT('{}', s, s, 'preserve');
        ta.selectionStart = ta.selectionEnd = s + 1;
        draw();
        return;
      }
      if (CL.indexOf(e.key) >= 0 && nx === e.key && s === ta.selectionEnd) {
        e.preventDefault();
        ta.selectionStart = ta.selectionEnd = s + 1;
        return;
      }
      if (
        e.key === '}' &&
        nx === '}' &&
        s === ta.selectionEnd &&
        /^[ \t]*$/.test(v.slice(v.lastIndexOf('\n', s - 1) + 1, s))
      ) {
        /* deja escribir normal */
      }
      if (
        PAIRS[e.key] &&
        (!nx || /[\s)\]};,]/.test(nx)) &&
        !(/[A-Za-z0-9]$/.test(v.slice(0, s)) && (e.key === '"' || e.key === "'"))
      ) {
        e.preventDefault();
        var a = ta.selectionStart,
          b = ta.selectionEnd,
          mid = v.slice(a, b);
        setRT(e.key + mid + PAIRS[e.key], a, b, 'preserve');
        ta.selectionStart = a + 1;
        ta.selectionEnd = a + 1 + mid.length;
        draw();
        return;
      }
    }
    if (e.key === 'Backspace' && s === ta.selectionEnd && s > 0 && PAIRS[v[s - 1]] === v[s]) {
      e.preventDefault();
      setRT('', s - 1, s + 1, 'end');
      draw();
      return;
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      setRT('    ', s, ta.selectionEnd, 'end');
      draw();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      var ls = v.lastIndexOf('\n', s - 1) + 1,
        ind = /^[ \t]*/.exec(v.slice(ls, s))[0];
      var opens = /\{\s*$/.test(v.slice(ls, s));
      if (opens && v[s] === '}') {
        setRT('\n' + ind + '    \n' + ind, s, ta.selectionEnd, 'preserve');
        ta.selectionStart = ta.selectionEnd = s + 1 + ind.length + 4;
        draw();
        return;
      }
      if (opens) ind += '    ';
      setRT('\n' + ind, s, ta.selectionEnd, 'end');
      draw();
    }
  });
  return {
    get: function () {
      return ta.value;
    },
    set: function (x) {
      ta.value = x;
      draw();
    }
  };
}

function runConsole(el, getSrc, ea) {
  var inputs = [],
    seed = (Math.random() * 4294967296) >>> 0;
  function rnd() {
    seed = (seed + 0x6d2b79f5) >>> 0;
    var t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  var src = getSrc(),
    seed0 = seed;
  function render(focus) {
    seed = seed0;
    var r = JavaI.run(src, {
        input: inputs
          .map(function (x) {
            return x + '\n';
          })
          .join(''),
        interactive: true,
        ea: ea,
        random: rnd
      }),
      h = '';
    if (r.compile)
      h =
        '<span class="er">Error de compilación (línea ' +
        r.compile.line +
        '): ' +
        esc(r.compile.msg) +
        '</span>';
    else {
      (r.segs || []).forEach(function (g) {
        h += g.t === 'in' ? '<span class="in">' + esc(g.s) + '</span>' : esc(g.s);
      });
      if (r.err) h += '<span class="wr">' + esc(r.err) + '</span>';
      if (r.exception) h += '<span class="er">Exception in thread "main" ' + esc(r.exception) + '</span>\n';
      if (r.halted) h += '<span class="er">' + esc(r.halted) + '</span>\n';
      if (r.waiting)
        h +=
          '<input class="conin" type="text" spellcheck="false" autocomplete="off" autocapitalize="off" aria-label="Escribe aquí y pulsa Enter">';
      else if (!r.exception && !r.halted) h += '<span class="done">\n(El programa ha terminado)</span>';
    }
    el.innerHTML = h;
    var inp = el.querySelector('.conin');
    if (inp) {
      if (focus !== false)
        setTimeout(function () {
          try {
            inp.focus({ preventScroll: false });
          } catch (e) {}
        }, 0);
      inp.addEventListener('keydown', function (ev) {
        if (ev.key === 'Enter') {
          ev.preventDefault();
          inputs.push(inp.value);
          render();
        }
      });
    }
    el.scrollTop = el.scrollHeight;
  }
  el.onclick = function (ev) {
    var i = el.querySelector('.conin');
    if (i && ev.target !== i) i.focus();
  };
  render();
}
function stripComments(s) {
  return s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
}
function normOut(s) {
  return String(s)
    .replace(/\r/g, '')
    .split('\n')
    .map(function (l) {
      return l.replace(/\s+$/, '');
    })
    .join('\n')
    .replace(/\n+$/, '');
}
function showRun(outEl, r) {
  var h = '';
  if (r.compile)
    h =
      '<span class="er">Error de compilación (línea ' +
      r.compile.line +
      '): ' +
      esc(r.compile.msg) +
      '</span>';
  else {
    h = esc(r.out);
    if (r.err) h += '<span class="wr">' + esc(r.err) + '</span>';
    if (r.exception) h += '<span class="er">Exception: ' + esc(r.exception) + '</span>';
    if (r.halted) h += '<span class="er">' + esc(r.halted) + '</span>';
    if (!h) h = '<span class="wr">(el programa no ha escrito nada)</span>';
  }
  outEl.innerHTML = h;
}
function gradeEx(ex, src) {
  var res = [],
    pass = 0;
  (ex.rules || []).forEach(function (rl) {
    var ok = rl.re.test(rl.raw ? src : stripComments(src));
    if (rl.not) ok = !ok;
    res.push({ ok: ok, title: rl.msg, rule: true });
    if (ok) pass++;
  });
  (ex.tests || []).forEach(function (t, i) {
    if (t.re) {
      // prueba por patrón (programas con azar): se repite varias veces
      var reps = t.rep || 1,
        okp = true,
        bad = '',
        seen = {},
        rx = new RegExp(t.re);
      for (var q = 0; q < reps && okp; q++) {
        var rr = JavaI.run(src, { input: t.input || '', ea: !!t.ea });
        var oo = rr.compile
          ? 'Error de compilación (línea ' + rr.compile.line + '): ' + rr.compile.msg
          : normOut(
              rr.out +
                (rr.exception ? '\n[Excepción] ' + rr.exception : '') +
                (rr.halted ? '\n[Detenido: ' + rr.halted + ']' : '')
            );
        if (rr.compile || rr.exception || rr.halted || !rx.test(oo)) {
          okp = false;
          bad = oo;
        } else seen[oo] = 1;
      }
      if (okp && t.seen)
        t.seen.forEach(function (x) {
          if (!seen[x]) {
            okp = false;
            bad = 'Tras ' + reps + ' ejecuciones nunca ha salido «' + x + '»';
          }
        });
      res.push({
        ok: okp,
        title: t.name || 'Prueba ' + (i + 1),
        input: t.input,
        want:
          t.want || 'Todas las ejecuciones deben cumplir lo que pide el enunciado (' + (t.name || t.re) + ')',
        got: bad
      });
      if (okp) pass++;
      return;
    }
    var r = JavaI.run(src, { input: t.input || '', ea: !!t.ea }),
      got = r.compile
        ? 'Error de compilación (línea ' + r.compile.line + '): ' + r.compile.msg
        : normOut(
            r.out +
              (r.exception ? '\n[Exception: ' + r.exception + ']' : '') +
              (r.halted ? '\n[' + r.halted + ']' : '')
          );
    var ok = !r.compile && !r.halted && !r.exception && got === normOut(t.out);
    if (t.exc) ok = !r.compile && !r.halted && r.exception === t.exc && normOut(r.out) === normOut(t.out);
    res.push({ ok: ok, title: t.name || 'Prueba ' + (i + 1), input: t.input, want: t.out, got: got });
    if (ok) pass++;
  });
  return { res: res, pass: pass, total: res.length, ok: pass === res.length };
}
function resHTML(g, reveal) {
  return g.res
    .map(function (t) {
      var h = '<div class="t ' + (t.ok ? 'p' : 'f') + '"><b>' + (t.ok ? '✔ ' : '✘ ') + esc(t.title) + '</b>';
      if (!t.ok && !t.rule && reveal)
        h +=
          '<pre>' +
          (t.input ? 'Entrada: ' + esc(t.input).replace(/\n/g, '⏎ ') + '\n' : '') +
          'Debería salir:\n' +
          esc(t.want) +
          '\nSale:\n' +
          esc(t.got) +
          '</pre>';
      return h + '</div>';
    })
    .join('');
}
function exBody(ex, o) {
  return (
    '<div class="lab-grid"><div class="lab-l">' +
    (ex.concept && !o.exam ? '<p>' + ex.concept + '</p>' : '') +
    '<p class="task"><b>Tu misión:</b> ' +
    ex.task +
    '</p>' +
    (o.exam
      ? ''
      : '<div class="hints"></div><div class="btns-l lab-btns"><button class="btn" data-a="hint">Pista</button><button class="btn" data-a="sol">Ver solución</button></div><div class="sol"></div>') +
    '</div><div class="lab-r"><div class="edhost"></div>' +
    '<div class="lab-btns"><button class="btn primary" data-a="run">▶ Ejecutar</button>' +
    (o.exam
      ? ''
      : '<button class="btn" data-a="check">Comprobar</button><button class="btn" data-a="reset">Reiniciar</button>') +
    '</div>' +
    '<div class="lab-out" aria-live="polite"></div><div class="lab-res"></div></div></div>'
  );
}
function wireEx(card, ex, o) {
  var key = 'code:' + ex.id,
    ed;
  var saved = null;
  try {
    saved = localStorage.getItem('dam-src-' + ex.id);
  } catch (e) {}
  ed = makeEditor(card.querySelector('.edhost'), saved != null && !o.exam ? saved : ex.starter, function (v) {
    if (!o.exam) {
      try {
        localStorage.setItem('dam-src-' + ex.id, v);
      } catch (e) {}
    }
  });
  var out = card.querySelector('.lab-out'),
    resEl = card.querySelector('.lab-res'),
    hi = 0;
  card.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-a]');
    if (!b) return;
    var a = b.dataset.a;
    if (a === 'run') {
      runConsole(out, ed.get, !!ex.ea);
    } else if (a === 'check') {
      var g = gradeEx(ex, ed.get());
      resEl.innerHTML =
        '<p><b>' + g.pass + ' de ' + g.total + ' pruebas superadas.</b></p>' + resHTML(g, true);
      if (g.ok) {
        prog[ex.id] = 1;
        save();
        card.classList.add('done');
        resEl.insertAdjacentHTML(
          'afterbegin',
          '<p><b class="ok" style="color:var(--ok)">¡Ejercicio completado! 🎉</b></p>'
        );
      }
    } else if (a === 'hint') {
      var hs = ex.hints || [];
      if (hi < hs.length) {
        card.querySelector('.hints').insertAdjacentHTML('beforeend', '<div>💡 ' + hs[hi++] + '</div>');
      } else
        card
          .querySelector('.hints')
          .insertAdjacentHTML('beforeend', '<div>No hay más pistas. Puedes ver la solución.</div>');
    } else if (a === 'sol') {
      card.querySelector('.sol').innerHTML =
        '<p>Una solución posible (la tuya puede ser distinta y valer igual):</p><pre class="code">' +
        hlJ(ex.solution) +
        '</pre>';
    } else if (a === 'reset') {
      ed.set(ex.starter);
      out.innerHTML = '';
      resEl.innerHTML = '';
    }
  });
  if (prog[ex.id]) card.classList.add('done');
  return ed;
}
function renderLab(el, list) {
  el.innerHTML = '';
  list.forEach(function (ex, i) {
    var c = document.createElement('article');
    c.className = 'lab-ex';
    c.innerHTML =
      '<header><h4>' +
      (i + 1) +
      '. ' +
      ex.title +
      '</h4><span class="done-tag">✔ HECHO</span></header>' +
      exBody(ex, {});
    el.appendChild(c);
    wireEx(c, ex, {});
  });
}
function renderCodeExam(el, pool, n, label) {
  var picks = shuffle(pool).slice(0, n),
    t0 = Date.now(),
    timer,
    eds = [],
    done = false;
  el.innerHTML =
    '<div class="row"><span>Tiempo: <span class="lab-timer">00:00</span></span><span class="muted"> · ' +
    picks.length +
    ' problemas, sin pistas. Escribe, ejecuta para probar y pulsa "Entregar".</span></div><div class="cx"></div><div class="lab-btns"><button class="btn primary" data-a="deliver">Entregar examen</button></div><div class="score cx-score" aria-live="polite"></div><div class="cx-sol"></div>';
  var host = el.querySelector('.cx'),
    tm = el.querySelector('.lab-timer');
  timer = setInterval(function () {
    if (!el.isConnected || done) {
      clearInterval(timer);
      return;
    }
    var s = Math.floor((Date.now() - t0) / 1000);
    tm.textContent = ('0' + Math.floor(s / 60)).slice(-2) + ':' + ('0' + (s % 60)).slice(-2);
  }, 1000);
  picks.forEach(function (ex, i) {
    var c = document.createElement('article');
    c.className = 'lab-ex';
    c.innerHTML = '<header><h4>Problema ' + (i + 1) + '</h4></header>' + exBody(ex, { exam: true });
    host.appendChild(c);
    eds.push(wireEx(c, ex, { exam: true }));
  });
  el.querySelector('[data-a="deliver"]').onclick = function () {
    done = true;
    var tot = 0,
      ok = 0,
      html = '';
    picks.forEach(function (ex, i) {
      var g = gradeEx(ex, eds[i].get());
      tot += g.total;
      ok += g.pass;
      html +=
        '<h4>Problema ' +
        (i + 1) +
        ': ' +
        g.pass +
        '/' +
        g.total +
        '</h4>' +
        resHTML(g, true) +
        '<p>Solución de referencia:</p><pre class="code">' +
        hlJ(ex.solution) +
        '</pre>';
    });
    var pct = tot ? Math.round((100 * ok) / tot) : 0;
    el.querySelector('.cx-score').textContent =
      'Nota: ' + (pct / 10).toFixed(1) + ' / 10 (' + ok + ' de ' + tot + ' pruebas superadas).';
    el.querySelector('.cx-sol').innerHTML = html;
  };
}
