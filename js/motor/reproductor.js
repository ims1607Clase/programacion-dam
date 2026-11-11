/* ============================================================
   Reproductor del curso
   Pantalla estilo Codédex: panel izquierdo con teoría e instrucciones, derecha editor y terminal, barra inferior y menú.
   ============================================================ */
/* Reproductor: pasos de lectura (paneles) y de código (editor + terminal) */
var PL = { steps: [], cur: 0, done: {}, key: '', chapters: [] };
function plSum() {
  var u = [];
  PL.steps.forEach(function (s) {
    if (s.type === 'lesson')
      s.exs.forEach(function (e) {
        u.push(e.id);
      });
    else if (s.type === 'rel')
      s.items.forEach(function (e) {
        u.push(e.id);
      });
    else if (s.id !== 'inicio') u.push(s.id);
  });
  var d = u.filter(function (x) {
    return PL.done[x];
  }).length;
  try {
    localStorage.setItem('dam-sum-' + PL.key, JSON.stringify({ d: d, t: u.length }));
  } catch (e) {}
  return { d: d, t: u.length };
}
function plSave() {
  try {
    localStorage.setItem('dam-steps-' + PL.key, JSON.stringify(PL.done));
  } catch (e) {}
  plSum();
}
function initPlayer(cfg) {
  PL.key = cfg.key;
  PL.chapters = cfg.chapters;
  PL.steps = [];
  PL.title = cfg.title;
  try {
    PL.done = JSON.parse(localStorage.getItem('dam-steps-' + PL.key) || '{}');
  } catch (e) {
    PL.done = {};
  }
  cfg.chapters.forEach(function (ch, ci) {
    ch.steps.forEach(function (s, si) {
      s.ch = ci;
      s.si = si;
      s.cn = ch.steps.length;
      PL.steps.push(s);
    });
  });
  var stage = document.getElementById('stage');
  var cv = document.createElement('div');
  cv.id = 'codeview';
  stage.appendChild(cv);
  var dr = document.createElement('div');
  dr.id = 'drawer';
  dr.innerHTML = '<div class="bk"></div><div class="pn"></div>';
  document.body.appendChild(dr);
  dr.querySelector('.bk').onclick = function () {
    dr.classList.remove('on');
  };
  document.getElementById('fb-menu').onclick = function () {
    buildDrawer();
    dr.classList.add('on');
  };
  document.getElementById('fb-back').onclick = function () {
    goStep(PL.cur - 1);
  };
  document.getElementById('fb-next').onclick = function () {
    var s = PL.steps[PL.cur];
    if (!isCd(s) && !isLs(s) && !isRel(s)) {
      PL.done[s.id] = 1;
      plSave();
    }
    goStep(PL.cur + 1);
  };
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-go]');
    if (t) {
      var id = t.getAttribute('data-go');
      var k = PL.steps.findIndex(function (s) {
        return s.id === id;
      });
      if (k >= 0) goStep(k);
    }
  });
  window.addEventListener('hashchange', function () {
    var k = idx(location.hash.slice(1));
    if (k >= 0 && k !== PL.cur) showStep(k);
  });
  plSum();
  var k0 = idx(location.hash.slice(1));
  showStep(k0 >= 0 ? k0 : 0);
}
function idx(id) {
  return PL.steps.findIndex(function (s) {
    return s.id === id;
  });
}
function goStep(i) {
  if (i < 0 || i >= PL.steps.length) return;
  location.hash = PL.steps[i].id;
  if (PL.cur !== i) showStep(i);
}
function stepDone(id) {
  PL.done[id] = 1;
  plSave();
  refreshBar();
  if (typeof updateProgress === 'function') updateProgress();
}
function buildDrawer() {
  var h = '<h2 style="margin:.2rem 0">' + PL.title + '</h2>';
  PL.chapters.forEach(function (ch) {
    h += '<h3>' + ch.t + '</h3>';
    ch.steps.forEach(function (s) {
      var k = idx(s.id);
      h +=
        '<button class="st' +
        (k === PL.cur ? ' cur' : '') +
        '" data-k="' +
        k +
        '"><span class="ck">' +
        (PL.done[s.id] ? '✔' : '') +
        '</span><span>' +
        (s.type === 'code'
          ? '⌨️ '
          : s.type === 'qa'
            ? '✍️ '
            : s.type === 'lesson'
              ? '🧩 '
              : s.type === 'rel'
                ? '📋 '
                : '📖 ') +
        s.t +
        '</span></button>';
    });
  });
  var pn = document.querySelector('#drawer .pn');
  pn.innerHTML = h;
  pn.onclick = function (e) {
    var b = e.target.closest('button.st');
    if (b) {
      document.getElementById('drawer').classList.remove('on');
      goStep(+b.dataset.k);
    }
  };
}
function refreshBar() {
  var s = PL.steps[PL.cur],
    sm = plSum(),
    pct = Math.round((100 * sm.d) / sm.t);
  document.getElementById('pl-bar').style.width = pct + '%';
  document.getElementById('pl-pct').textContent = pct + '%';
  var ch = PL.chapters[s.ch];
  document.getElementById('pl-crumb').innerHTML = PL.title + ' / <b>' + ch.t + '</b>';
  document.getElementById('fb-title').textContent = s.t;
  document.getElementById('fb-sub').textContent =
    (s.cx ? 'Ejercicio' : isCd(s) ? 'Ejercicio' : isLs(s) ? 'Lección' : isRel(s) ? 'Relación' : 'Paso') +
    ' ' +
    (s.lx ? s.si : s.si + 1) +
    ' / ' +
    (s.cx || s.cn) +
    ' · ' +
    ch.t;
  document.getElementById('fb-done').classList.toggle('on', !!PL.done[s.id]);
  document.getElementById('fb-back').disabled = PL.cur === 0;
  var nx = document.getElementById('fb-next');
  nx.disabled = PL.cur === PL.steps.length - 1;
  nx.classList.toggle('pulse', isCd(s) && !!PL.done[s.id]);
}
function isCd(s) {
  return s.type === 'code' || s.type === 'qa';
}
function isLs(s) {
  return s.type === 'lesson';
}
function isRel(s) {
  return s.type === 'rel';
}
function stashPanes() {
  var stage = document.getElementById('stage'),
    cv = document.getElementById('codeview');
  cv.querySelectorAll('section.pane').forEach(function (p) {
    stage.insertBefore(p, cv);
  });
}
function showStep(i) {
  PL.cur = i;
  var s = PL.steps[i],
    stage = document.getElementById('stage');
  stashPanes();
  var ids = (s.panes || [s.pane]).map(function (x) {
      return 'p-' + x;
    }),
    rd = !isCd(s) && !isLs(s) && !isRel(s);
  document.querySelectorAll('section.pane').forEach(function (p) {
    p.classList.toggle('on', rd && ids.indexOf(p.id) >= 0);
  });
  stage.classList.toggle('code', !rd);
  if (isLs(s)) renderLesson(s, 0);
  else if (isRel(s)) renderRel(s);
  else if (isCd(s)) renderCodeStep(s);
  else stage.scrollTop = 0;
  refreshBar();
  window.scrollTo(0, 0);
}
function lessonDone(s) {
  return s.exs.every(function (e) {
    return PL.done[e.id];
  });
}
function renderLesson(s, k, jump) {
  stashPanes();
  var cv = document.getElementById('codeview'),
    old = cv.querySelector('.cs-left.lesson'),
    keep = old ? old.scrollTop : 0,
    ex = s.exs[k];
  var es = { id: ex.id, type: 'code', t: ex.title, ex: ex, si: k, cn: s.exs.length, ch: s.ch };
  renderCodeStep(es);
  var left = cv.querySelector('.cs-left'),
    inner = left.innerHTML;
  var fxi = s.exs.findIndex(function (e) {
      return /^fx-/.test(e.id);
    }),
    tabs = '';
  s.exs.forEach(function (e, jj) {
    if (jj === fxi) return;
    tabs +=
      '<button class="lxt' +
      (jj === k ? ' on' : '') +
      (PL.done[e.id] ? ' ok' : '') +
      '" data-lx="' +
      jj +
      '" type="button" title="' +
      esc(e.title) +
      '">' +
      (PL.done[e.id] ? '✔' : jj + 1) +
      '</button>';
  });
  var fxb =
    fxi >= 0
      ? '<button class="lxt fxb' +
        (fxi === k ? ' on' : '') +
        (PL.done[s.exs[fxi].id] ? ' ok' : '') +
        '" data-lx="' +
        fxi +
        '" type="button">🔧 Corrige el código' +
        (PL.done[s.exs[fxi].id] ? ' ✔' : '') +
        '</button>'
      : '';
  left.className = 'cs-left lesson';
  left.innerHTML =
    '<div class="lx-content"></div><div class="lx-instr"><div class="lx-bar"><b>Instrucciones</b><span class="lxts">' +
    (fxi >= 0 ? 'Hacer un código ' : s.exs.length > 1 ? 'Ejercicio ' : '') +
    tabs +
    (fxb ? '<span class="lxsep"></span>' + fxb : '') +
    '</span></div><div class="lx-body">' +
    inner +
    '</div></div>';
  var lc = left.querySelector('.lx-content');
  (s.panes || [s.pane]).forEach(function (id) {
    var p = document.getElementById('p-' + id);
    if (p) {
      p.classList.remove('on');
      if (/-c$/.test(id)) {
        p.classList.add('after');
        left.appendChild(p);
      } else lc.appendChild(p);
    }
  });
  var fc = document.createElement('div');
  fc.className = 'fixcard';
  fc.innerHTML =
    '<h3>✍️ Ahora, a practicar</h3><p>Pon en práctica lo que acabas de ver. Los ejercicios están en <b>Instrucciones</b>, justo debajo.</p><div class="fx-row"><button class="btn primary" data-lx="0" data-jump="1" type="button">Hacer un código (' +
    nNorm +
    ')</button>' +
    (fxi >= 0
      ? '<button class="btn" data-lx="' +
        fxi +
        '" data-jump="1" type="button">🔧 Corrige el código (1)</button>'
      : '') +
    '</div>';
  lc.appendChild(fc);
  left.scrollTop = keep;
  if (jump) {
    var ins = left.querySelector('.lx-instr');
    left.scrollTop += ins.getBoundingClientRect().top - left.getBoundingClientRect().top - 56;
  }
  var isFx = k === fxi,
    nNorm = s.exs.length - (fxi >= 0 ? 1 : 0),
    nDone = s.exs.filter(function (e) {
      return PL.done[e.id];
    }).length;
  var tb = cv.querySelector('.cs-tabs');
  if (tb)
    tb.innerHTML =
      '<span class="cs-tab">Main.java</span><span class="cs-ctx">' +
      (isFx ? '🔧 Corrige el código' : 'Ejercicio ' + (k + 1) + ' de ' + nNorm + ' · ' + esc(ex.title)) +
      '</span><button class="cs-enun" data-nav="instr" type="button">Ver enunciado ↙</button>';
  if (isFx) {
    var nm = left.querySelector('.lx-body h2 .num');
    if (nm) nm.remove();
  }
  var bs = left.querySelectorAll('.lx-body details.basics');
  if (bs.length) {
    var hp = document.createElement('details');
    hp.className = 'basics';
    var inh = '<summary>ℹ️ Ayuda: código inicial y atajos del editor</summary>';
    bs.forEach(function (d) {
      var sm = d.querySelector('summary');
      inh += '<h5>' + sm.textContent + '</h5>';
      sm.remove();
      inh += d.innerHTML;
    });
    hp.innerHTML = inh;
    bs[0].parentNode.insertBefore(hp, bs[0]);
    bs.forEach(function (d) {
      d.remove();
    });
  }
  var hasPred = !!Array.prototype.find.call(left.querySelectorAll('h3'), function (h) {
    return /Predice/.test(h.textContent);
  });
  var nav = document.createElement('div');
  nav.className = 'lx-nav';
  nav.innerHTML =
    '<button data-nav="top" type="button">📖 Teoría</button>' +
    (hasPred ? '<button data-nav="pred" type="button">🔮 Predice la salida</button>' : '') +
    '<button data-nav="instr" type="button">✍️ Practica</button>' +
    (fxi >= 0 ? '<button data-nav="fix" type="button">🔧 Corrige</button>' : '') +
    '<span class="lx-cnt" title="Ejercicios hechos en este apartado">✔ ' +
    nDone +
    ' / ' +
    s.exs.length +
    '</span>';
  left.insertBefore(nav, left.firstChild);
  var prev = cv.onclick;
  cv.onclick = function (e) {
    var nv = e.target.closest('[data-nav]');
    if (nv) {
      var w = nv.dataset.nav,
        lf = cv.querySelector('.cs-left'),
        go = function (el) {
          if (el) lf.scrollTop += el.getBoundingClientRect().top - lf.getBoundingClientRect().top - 56;
        };
      if (w === 'top') lf.scrollTop = 0;
      else if (w === 'instr') go(lf.querySelector('.lx-instr'));
      else if (w === 'pred')
        go(
          Array.prototype.find.call(lf.querySelectorAll('h3'), function (h) {
            return /Predice/.test(h.textContent);
          })
        );
      else if (w === 'fix') renderLesson(s, fxi, true);
      return;
    }
    var t = e.target.closest('[data-lx]');
    if (t) {
      renderLesson(s, +t.dataset.lx, !!t.dataset.jump);
      return;
    }
    prev.call(cv, e);
    renderLessonTabs(s);
    if (lessonDone(s) && !PL.done[s.id]) stepDone(s.id);
  };
}
function renderLessonTabs(s) {
  document.querySelectorAll('#codeview .lxt').forEach(function (b) {
    var e = s.exs[+b.dataset.lx],
      d = !!PL.done[e.id];
    b.classList.toggle('ok', d);
    if (/^fx-/.test(e.id)) b.textContent = '🔧 Corrige el código' + (d ? ' ✔' : '');
    else b.textContent = d ? '✔' : +b.dataset.lx + 1;
  });
}
function renderRel(s) {
  var cv = document.getElementById('codeview'),
    its = s.items;
  var h =
    '<div class="cs-left rel"><h2>📋 ' +
    s.t +
    '</h2><div class="netb"><b>💻 Se hace en NetBeans.</b> Crea el proyecto, escribe el código tú, ejecútalo y pruébalo. Solo cuando lo tengas (o te atasques de verdad) abre la <b>corrección</b> y compárala con la tuya. Marca «Hecho» cuando lo tengas.</div>';
  its.forEach(function (ex, n) {
    var t0 = ex.tests && ex.tests[0],
      samp = '';
    if (ex.kind !== 'qa' && t0 && t0.out != null && !t0.re)
      samp =
        '<div class="samp"><div><b>Ejemplo de ejecución</b></div>' +
        (ex.stdin || t0.input ? '<pre>Entrada:\n' + esc(ex.stdin || t0.input) + '</pre>' : '') +
        '<pre>Salida:\n' +
        esc(t0.out) +
        '</pre></div>';
    h +=
      '<article class="rel-ex" id="rx-' +
      ex.id +
      '"><div class="rel-h"><span class="num">' +
      (n + 1) +
      '.</span><b>' +
      ex.title +
      '</b><label class="rel-ck"><input type="checkbox" data-rel="' +
      ex.id +
      '"' +
      (PL.done[ex.id] ? ' checked' : '') +
      '> Hecho</label></div>' +
      (ex.src ? '<p class="muted">' + ex.src + '</p>' : '') +
      '<div class="task">' +
      ex.task +
      '</div>' +
      samp +
      '<details class="rel-sol"><summary>Ver corrección</summary>' +
      (ex.kind === 'qa'
        ? '<div class="qa-corr">' + ex.ans + '</div>'
        : '<pre class="code">' +
          hlJ(ex.solution) +
          '</pre>' +
          (ex.notes ? '<div class="qa-corr">' + ex.notes + '</div>' : '')) +
      '</details></article>';
  });
  cv.innerHTML = h + '</div>';
  cv.onclick = null;
  cv.querySelectorAll('pre[data-hl]').forEach(function (p) {
    p.innerHTML = hlJ(p.textContent);
  });
  cv.onchange = function (e) {
    var c = e.target.closest('input[data-rel]');
    if (!c) return;
    if (c.checked) PL.done[c.dataset.rel] = 1;
    else delete PL.done[c.dataset.rel];
    var all = its.every(function (x) {
      return PL.done[x.id];
    });
    if (all) PL.done[s.id] = 1;
    else delete PL.done[s.id];
    plSave();
    refreshBar();
    if (typeof updateProgress === 'function') updateProgress();
  };
}
function renderQaStep(s) {
  var ex = s.ex,
    cv = document.getElementById('codeview'),
    key = 'dam-qa-' + ex.id,
    saved = '';
  try {
    saved = localStorage.getItem(key) || '';
  } catch (e) {}
  cv.innerHTML =
    '<div class="cs-left"><h2><span class="num">' +
    String(s.lx ? s.si : s.si + 1).padStart(2, '0') +
    '.</span>' +
    ex.title +
    '</h2>' +
    (ex.src ? '<p class="muted">' + ex.src + '</p>' : '') +
    '<h4># Enunciado del profe</h4><div class="task">' +
    ex.task +
    '</div>' +
    '<p class="muted tryfirst">💪 Escribe tu respuesta a la derecha antes de mirar la corrección: así es como se aprende.</p></div>' +
    '<div class="cs-right qa"><div class="cs-tabs"><span class="cs-tab">Mi respuesta</span></div><textarea class="qa-ta" spellcheck="false" placeholder="' +
    esc(ex.ph || 'Escribe aquí tu respuesta…') +
    '"></textarea>' +
    '<div class="cs-tools"><span class="sp"></span><button class="btn primary" data-a="corr" type="button">Ver corrección</button></div><div class="qa-res"></div></div>';
  var ta = cv.querySelector('.qa-ta');
  ta.value = saved;
  ta.oninput = function () {
    try {
      localStorage.setItem(key, ta.value);
    } catch (e) {}
  };
  cv.onclick = function (e) {
    var b = e.target.closest('button[data-a]');
    if (!b) return;
    var h = '';
    if (ex.exp != null) {
      var norm = function (x) {
          return String(x).toLowerCase().replace(/[\s]+/g, '');
        },
        mine = norm(ta.value),
        okk = [].concat(ex.exp).some(function (z) {
          return norm(z) === mine;
        });
      h += ta.value.trim()
        ? okk
          ? '<div class="okk">✔ Tu respuesta coincide con la corrección.</div>'
          : '<div class="wr">✘ Tu respuesta no coincide con la corrección. Léela con calma y mira dónde cambia.</div>'
        : '<div class="wr">No has escrito respuesta todavía; aun así, aquí tienes la corrección.</div>';
    } else h += '<div class="okk">Compara tu respuesta con la corrección:</div>';
    h += '<div class="qa-corr"><h4># Corrección</h4>' + ex.ans + '</div>';
    cv.querySelector('.qa-res').innerHTML = h;
    cv.querySelectorAll('.qa-res pre[data-hl]').forEach(function (q) {
      q.innerHTML = hlJ(q.textContent);
    });
    stepDone(s.id);
  };
  if (PL.done[s.id]) {
    /* ya vista */
  }
}
function lineDiff(a, b) {
  var A = a.replace(/\s+$/, '').split('\n'),
    B = b.replace(/\s+$/, '').split('\n'),
    n = A.length,
    m = B.length,
    i,
    j,
    L = [];
  for (i = 0; i <= n; i++) {
    L.push(new Array(m + 1).fill(0));
  }
  var na = function (x) {
    return x.trim().replace(/\s+/g, ' ');
  };
  for (i = n - 1; i >= 0; i--)
    for (j = m - 1; j >= 0; j--)
      L[i][j] = na(A[i]) === na(B[j]) ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  var ra = [],
    rb = [];
  i = 0;
  j = 0;
  while (i < n && j < m) {
    if (na(A[i]) === na(B[j])) {
      ra.push([A[i], 's']);
      rb.push([B[j], 's']);
      i++;
      j++;
    } else if (L[i + 1][j] >= L[i][j + 1]) {
      ra.push([A[i], 'd']);
      i++;
    } else {
      rb.push([B[j], 'd']);
      j++;
    }
  }
  while (i < n) ra.push([A[i++], 'd']);
  while (j < m) rb.push([B[j++], 'd']);
  return {
    a: ra,
    b: rb,
    same:
      ra.every(function (x) {
        return x[1] === 's';
      }) &&
      rb.every(function (x) {
        return x[1] === 's';
      })
  };
}
function diffCol(rows) {
  return (
    '<pre class="dcol">' +
    rows
      .map(function (r) {
        return '<span class="dl ' + r[1] + '">' + (esc(r[0]) || ' ') + '</span>';
      })
      .join('') +
    '</pre>'
  );
}
function renderCodeStep(s) {
  if (s.type === 'qa') return renderQaStep(s);
  var ex = s.ex,
    cv = document.getElementById('codeview'),
    hi = 0;
  if (ex.s === 'final') {
    var pend = [];
    PL.steps.forEach(function (x) {
      if (x.type === 'lesson')
        x.exs.forEach(function (e) {
          if (!PL.done[e.id]) pend.push({ id: x.id, t: e.title });
        });
      else if (x.type === 'code' && x.ex.s !== 'final' && x.ex.s !== 'prof' && !PL.done[x.id]) pend.push(x);
    });
    if (pend.length && !PL.done[s.id]) {
      cv.innerHTML =
        '<div class="cs-left" style="grid-column:1/-1;max-width:760px;margin:0 auto"><h2>🏁 ' +
        ex.title +
        '</h2><div class="task"><b>🔒 Todavía no.</b> El reto final se abre cuando termines <b>todos</b> los ejercicios de código de este tema. Te faltan <b>' +
        pend.length +
        '</b>:</div><div style="margin:.8rem 0;display:flex;flex-wrap:wrap;gap:.4rem">' +
        pend
          .map(function (x) {
            return '<a class="btn" data-go="' + x.id + '" href="#' + x.id + '">⌨️ ' + x.t + '</a>';
          })
          .join('') +
        '</div></div>';
      cv.onclick = null;
      return;
    }
  }
  cv.innerHTML =
    '<div class="cs-left"><h2><span class="num">' +
    String(s.lx ? s.si : s.si + 1).padStart(2, '0') +
    '.</span>' +
    ex.title +
    '</h2>' +
    (ex.concept ? '<h4># Lo que necesitas saber</h4><p>' + ex.concept + '</p>' : '') +
    (ex.example ? '<pre class="code" data-hl>' + esc(ex.example) + '</pre>' : '') +
    '<h4># Tu misión</h4><div class="task">' +
    ex.task +
    '</div>' +
    (typeof explainBox === 'function' ? explainBox(ex) : '') +
    '<div class="row"><button class="btn" data-a="hint" type="button">💡 Pista</button><button class="btn" data-a="sol" type="button">Ver solución</button>' +
    (ex.s === 'prof'
      ? '<button class="btn primary" data-a="cmp" type="button">🔍 Corregir y comparar con la solución</button>'
      : '') +
    '</div><div class="hints"></div><div class="sol"></div></div>' +
    '<div class="cs-right"><div class="cs-tabs"><span class="cs-tab">Main.java <i>×</i></span></div><div class="edhost"></div>' +
    '<div class="cs-tools"><span class="sp"></span><button class="btn" data-a="reset" type="button">Reiniciar</button><button class="btn run" data-a="run" type="button" title="Ejecutar (F6)">▶ Ejecutar <small>F6</small></button><button class="btn primary" data-a="sub" type="button">Enviar respuesta</button></div>' +
    '<div class="cs-term"><h5><span class="otab">Output - Main (run)</span></h5><div class="tbody"><div class="idle">Pulsa <b>Ejecutar</b> (o F6). Si el programa pide datos, escríbelos aquí y pulsa Enter.</div></div></div></div>';
  if (s.lx) {
    var lf = cv.querySelector('.cs-left'),
      inn = lf.innerHTML,
      mk = '<h4># Tu misión</h4>',
      ix = inn.indexOf(mk);
    if (ix >= 0) {
      lf.className = 'cs-left lesson';
      lf.innerHTML =
        '<div class="lx-content">' +
        inn.slice(0, ix) +
        '</div><div class="lx-instr"><div class="lx-bar"><b>Instrucciones</b></div><div class="lx-body">' +
        inn.slice(ix + mk.length) +
        '</div></div>';
    }
  }
  cv.querySelectorAll('pre[data-hl]').forEach(function (p) {
    p.innerHTML = hl(p.textContent);
  });
  var saved = null;
  try {
    saved = localStorage.getItem('dam-src-' + ex.id);
  } catch (e) {}
  var ed = makeEditor(cv.querySelector('.edhost'), saved != null ? saved : ex.starter, function (v) {
    try {
      localStorage.setItem('dam-src-' + ex.id, v);
    } catch (e) {}
  });
  var tb = cv.querySelector('.tbody'),
    hl2 = hintList(ex);
  var ea = !!(ex.tests && ex.tests[0] && ex.tests[0].ea);
  cv.onclick = function (e) {
    var b = e.target.closest('button[data-a]');
    if (!b) return;
    var a = b.dataset.a;
    if (a === 'run') {
      runConsole(tb, ed.get, ea);
    } else if (a === 'sub') {
      var g = gradeEx(ex, ed.get());
      tb.innerHTML =
        (g.ok
          ? '<div class="okk">✔ ¡Correcto! Has superado ' +
            g.pass +
            ' de ' +
            g.total +
            ' pruebas. Pulsa Siguiente.</div>'
          : '<div class="wr">' +
            g.pass +
            ' de ' +
            g.total +
            ' pruebas superadas. Casi: mira qué prueba falla.</div>') + resHTML(g, true);
      if (g.ok) {
        prog[ex.id] = 1;
        if (typeof save === 'function') save();
        stepDone(s.id);
      }
    } else if (a === 'cmp') {
      var mine = ed.get(),
        g = gradeEx(ex, mine),
        d = lineDiff(mine, ex.solution),
        strip = function (x) {
          return stripComments(x).replace(/\s+/g, '');
        };
      var same = strip(mine) === strip(ex.solution);
      var h = same
        ? '<div class="okk">✔ Tu código es <b>igual</b> que la solución (ignorando espacios y comentarios).</div>'
        : '<div class="' +
          (g.ok ? 'okk' : 'wr') +
          '">' +
          (g.ok
            ? '✔ Tu código es <b>distinto</b> de la solución, pero pasa todas las pruebas: ' +
              g.pass +
              ' de ' +
              g.total +
              '. Puede ser una solución igual de válida; compara abajo.'
            : '✘ Tu código es <b>distinto</b> y falla ' +
              (g.total - g.pass) +
              ' de ' +
              g.total +
              ' pruebas. Mira el detalle y la comparación.') +
          '</div>';
      h += resHTML(g, true);
      h +=
        '<h4>Tu código ⟷ Solución del ejercicio</h4><div class="dgrid"><div><b>Tu código</b>' +
        diffCol(d.a) +
        '</div><div><b>Solución</b>' +
        diffCol(d.b) +
        '</div></div><p class="muted">Las líneas marcadas son las que no coinciden (se comparan sin tener en cuenta los espacios).</p>';
      if (ex.notes) h += '<h4># Por qué se resuelve así</h4><div class="qa-corr">' + ex.notes + '</div>';
      cv.querySelector('.sol').innerHTML = h;
      cv.querySelector('.sol').scrollIntoView({ block: 'nearest' });
      if (g.ok) {
        prog[ex.id] = 1;
        if (typeof save === 'function') save();
        stepDone(s.id);
      }
    } else if (a === 'hint') {
      cv.querySelector('.hints').insertAdjacentHTML(
        'beforeend',
        '<div>' +
          (hi < hl2.length
            ? '💡 <b>Pista ' + (hi + 1) + ' de ' + hl2.length + ':</b> ' + hl2[hi++]
            : 'No hay más pistas. Si quieres, mira la solución, pero intenta entenderla y escríbela tú.') +
          '</div>'
      );
    } else if (a === 'sol') {
      cv.querySelector('.sol').innerHTML =
        '<h4># Una solución posible</h4><pre class="code">' + hlJ(ex.solution) + '</pre>';
    } else if (a === 'reset') {
      ed.set(ex.starter);
      tb.innerHTML = '<div class="idle">Código reiniciado</div>';
    }
  };
}
