/* ============================================================
   Capítulos, pasos, progreso e inicio del Tema 1
   Aquí se define el ORDEN del curso (buildChapters), la pantalla de inicio y el examen.
   ============================================================ */
var SECS = [
  { id: 'inicio', t: 'Inicio' },
  { id: 'intro', t: '1 Introducción' },
  { id: 'codif', t: '2 Codificación' },
  { id: 'resol', t: '3 Resolución' },
  { id: 'paradig', t: '4 Paradigmas' },
  { id: 'lenguajes', t: '5 Lenguajes' },
  { id: 'herram', t: '6 Herramientas' },
  { id: 'java', t: '7 Qué es Java' },
  { id: 'primeros', t: '8 Primeros pasos' },
  { id: 'tipos', t: '9 Tipos de datos' },
  { id: 'operadores', t: '9 Operadores' },
  { id: 'variables', t: '9 Variables' },
  { id: 'es', t: '10 Consola' },
  { id: 'programar', t: 'Programar' },
  { id: 'examen', t: 'Examen' },
  { id: 'cexamen', t: 'Examen de código' }
];
var ORDER = [
  'intro',
  'codif',
  'resol',
  'paradig',
  'lenguajes',
  'herram',
  'java',
  'primeros',
  'tipos',
  'operadores',
  'variables',
  'es'
];
var HASB = {
  intro: false,
  codif: true,
  resol: true,
  paradig: true,
  lenguajes: true,
  herram: true,
  java: true,
  primeros: true,
  tipos: true,
  operadores: true,
  variables: true,
  es: true
};
var CHAPS = [];
function buildChapters() {
  CHAPS = [
    {
      id: 'inicio',
      t: 'Inicio',
      steps: [{ id: 'inicio', t: 'Bienvenida y mapa del tema', type: 'read', pane: 'inicio' }]
    }
  ];
  SECS.slice(1, 13).forEach(function (s) {
    var exs = CODEX.filter(function (c) {
        return c.s === s.id;
      }),
      pn = [s.id].concat(HASB[s.id] ? [s.id + '-b'] : [], [s.id + '-c']);
    CHAPS.push({
      id: s.id,
      t: s.t,
      steps: [
        exs.length
          ? { id: s.id, t: s.t + ' · teoría y práctica', type: 'lesson', pane: s.id, panes: pn, exs: exs }
          : { id: s.id, t: s.t + ' · teoría', type: 'read', pane: s.id, panes: pn }
      ]
    });
  });
  CHAPS.push({
    id: 'final',
    t: '🏁 Reto final',
    steps: CODEX.filter(function (c) {
      return c.s === 'final';
    }).map(function (c) {
      return { id: c.id, t: c.title, type: 'code', ex: c };
    })
  });
  CHAPS.push({
    id: 'rel',
    t: '📋 Relación de ejercicios del profe (NetBeans)',
    steps: PROFX.map(function (c) {
      return { id: c.id, t: c.t, type: 'rel', items: c.items };
    })
  });
  CHAPS.push({
    id: 'ex',
    t: 'Exámenes',
    steps: [
      { id: 'examen', t: 'Examen de preguntas', type: 'read', pane: 'examen' },
      { id: 'cexamen', t: 'Examen de código', type: 'read', pane: 'cexamen' }
    ]
  });
}
function updateProgress() {
  var host = document.getElementById('home-cards');
  if (!host || !CHAPS.length) return;
  var h2 = document.getElementById('home-prof');
  if (!h2) {
    h2 = document.createElement('div');
    h2.id = 'home-prof';
    h2.innerHTML =
      '<h3 style="margin-top:1.4rem">📋 Relación de ejercicios del profe</h3><p class="lead" style="margin:.2rem 0 .8rem">Se hacen en <b>NetBeans</b>. Cada ejercicio tiene su corrección desplegable para comparar después.</p><div class="grid" id="home-prof-cards"></div>';
    host.parentNode.insertBefore(h2, host.nextSibling);
  }
  var h3 = document.getElementById('home-prof-cards');
  host.innerHTML = '';
  h3.innerHTML = '';
  var hc = document.getElementById('home-cont');
  if (!hc) {
    hc = document.createElement('div');
    hc.id = 'home-cont';
    host.parentNode.insertBefore(hc, host.previousElementSibling);
  }
  var nx = PL.steps.findIndex(function (s) {
    return !PL.done[s.id] && s.id !== 'inicio' && s.type !== 'rel';
  });
  hc.innerHTML =
    nx < 0
      ? ''
      : '<button class="btn primary" id="go-cont" type="button" style="margin:.4rem 0 1rem">▶ Continuar: ' +
        PL.steps[nx].t.replace(/</g, '&lt;') +
        '</button>';
  var gb = document.getElementById('go-cont');
  if (gb)
    gb.onclick = function () {
      goStep(nx);
    };
  function card(parent, id, tag, title, d, t, unit) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'card sec-card';
    b.setAttribute('data-go', id);
    b.innerHTML =
      '<span class="tag">' +
      tag +
      '</span><h3>' +
      title +
      '</h3><div class="bar"><i style="width:' +
      Math.round((100 * d) / t) +
      '%"></i></div><small>' +
      d +
      ' de ' +
      t +
      ' ' +
      unit +
      '</small>';
    parent.appendChild(b);
  }
  CHAPS.slice(1).forEach(function (ch) {
    var s = ch.steps[0];
    if (ch.id === 'final' || ch.id === 'ex') return;
    if (ch.id === 'rel') {
      ch.steps.forEach(function (r) {
        card(
          h3,
          r.id,
          'Profe',
          r.t,
          r.items.filter(function (x) {
            return PL.done[x.id];
          }).length,
          r.items.length,
          'ejercicios hechos'
        );
      });
      return;
    }
    var nm = ch.t.split(' ');
    if (s.type === 'lesson')
      card(
        host,
        s.id,
        nm[0],
        nm.slice(1).join(' '),
        s.exs.filter(function (e) {
          return PL.done[e.id];
        }).length,
        s.exs.length,
        'ejercicios hechos'
      );
    else card(host, s.id, nm[0], nm.slice(1).join(' '), PL.done[s.id] ? 1 : 0, 1, 'lección vista');
  });
}
hl = hlJ;
(function init() {
  document.querySelectorAll('pre[data-hl]').forEach(function (p) {
    p.innerHTML = hl(p.textContent);
  });
  document.querySelectorAll('.deck').forEach(function (el) {
    renderDeck(el, el.dataset.deck);
  });
  document.querySelectorAll('.quiz[data-sec]').forEach(function (q) {
    var h = q.previousElementSibling;
    if (h && h.tagName === 'H3') h.remove();
    q.remove();
  });
  document.querySelectorAll('.preds').forEach(function (el) {
    PRED.filter(function (p) {
      return p.s === el.dataset.sec;
    }).forEach(function (p) {
      renderPred(el, p);
    });
  });
  document.querySelectorAll('.tracer').forEach(function (el) {
    renderTracer(el, el.dataset.tracer);
  });
  function $(id) {
    return document.getElementById(id);
  }
  renderBaseConv($('w-baseconv'));
  renderDrill($('w-drill'));
  renderAscii($('w-ascii'));
  renderLife($('w-life'));
  renderTimeline($('w-timeline'));
  renderPipeline($('w-pipe'));
  renderMaven($('w-maven'));
  renderConsole($('w-console'));
  renderRanges($('w-ranges'));
  renderExpr($('w-expr'), [
    '(33 + 3 * 4) / 5',
    '8 / 6',
    '8.0 / 6',
    '8f / 6',
    '35 % 9',
    '(byte) 130',
    '(byte) 260',
    '5 + 3 < 2 + 9',
    "'a' <= 'c'",
    'true ^ true',
    '2 ^ 3',
    'Math.pow(2, 6)',
    'Math.round(5.7)',
    '(int) 3.99',
    '7 / 2 * 2.0'
  ]);
  renderTruth($('w-truth'));
  renderLab($('w-err'), ERRX);
  Object.keys(SORTS).forEach(function (k) {
    var el = $('w-' + k);
    if (el) renderSort(el, SORTS[k], CATS[k], k);
  });
  var tb = '';
  for (var n = 0; n < 16; n++)
    tb +=
      '<tr><td>' +
      n +
      '</td><td>' +
      ('0000' + n.toString(2)).slice(-4) +
      '</td><td>' +
      ('0' + n.toString(8)).slice(-2) +
      '</td><td>' +
      n.toString(16).toUpperCase() +
      '</td></tr>';
  $('tbl-bases').innerHTML =
    '<thead><tr><th>Decimal</th><th>Binario</th><th>Octal</th><th>Hex</th></tr></thead><tbody>' +
    tb +
    '</tbody>';
  function cex() {
    renderCodeExam($('cexam'), CODEEXAM, 3);
  }
  $('new-cexam').onclick = cex;
  cex();
  var sel = $('exam-sec');
  sel.innerHTML =
    '<option value="todo">Todo el tema 1</option>' +
    SECS.slice(1, 13)
      .map(function (s) {
        return '<option value="' + s.id + '">' + s.t + '</option>';
      })
      .join('');
  function exam() {
    var sec = sel.value,
      pool =
        sec === 'todo'
          ? QUIZ
          : QUIZ.filter(function (q) {
              return q.s === sec;
            }),
      qs = shuffle(pool)
        .slice(0, 10)
        .map(function (q) {
          return Object.assign({}, q, { id: 'x' + q.id });
        });
    $('exam-score').textContent = '';
    renderQuiz($('exam'), qs, function (g, n) {
      $('exam-score').textContent =
        'Has acertado ' +
        g +
        ' de ' +
        n +
        '. ' +
        (g === n
          ? 'Perfecto.'
          : g >= 7
            ? 'Bien, repasa los fallos y repite.'
            : 'Vuelve a los apartados donde fallaste y prueba otra vez.');
    });
  }
  $('new-exam').onclick = exam;
  sel.onchange = exam;
  exam();
  buildChapters();
  initPlayer({ key: 't1', title: 'Tema 1', chapters: CHAPS });
  updateProgress();
})();
