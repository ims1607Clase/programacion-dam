/* ============================================================
   Capítulos, pasos, progreso e inicio del Tema 2
   Aquí se define el ORDEN del curso (buildChapters), la pantalla de inicio y el examen.
   ============================================================ */
/* ---------- navegación y progreso ---------- */
var SECS = [
  { id: 'inicio', t: 'Inicio' },
  { id: 'estructurada', t: '2.1 Estructurada' },
  { id: 'secuencial', t: '2.2 Secuencial' },
  { id: 'selectiva', t: '2.3 Selectiva' },
  { id: 'bucles', t: '2.4 Bucles' },
  { id: 'saltos', t: '2.5 Saltos' },
  { id: 'estilo', t: '2.6 Estilo' },
  { id: 'excepciones', t: '2.7 Excepciones' },
  { id: 'pruebas', t: '2.8 Pruebas' },
  { id: 'depuracion', t: '2.9 Depuración' },
  { id: 'integrador', t: '2.10 Integrador' },
  { id: 'metodos', t: '2.11 Funciones (métodos)' }
];
var CHAPS = [];
function buildChapters() {
  CHAPS = [
    {
      id: 'inicio',
      t: 'Inicio',
      steps: [{ id: 'inicio', t: 'Bienvenida y mapa del tema', type: 'read', pane: 'inicio' }]
    }
  ];
  SECS.slice(1).forEach(function (s) {
    var exs = CODEX.filter(function (c) {
      return c.s === s.id;
    });
    CHAPS.push({
      id: s.id,
      t: s.t,
      steps: [
        exs.length
          ? { id: s.id, t: s.t + ' · teoría y práctica', type: 'lesson', pane: s.id, panes: [s.id], exs: exs }
          : { id: s.id, t: s.t + ' · teoría', type: 'read', pane: s.id }
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
  renderNota(document.getElementById('sim-nota'));
  renderSwitch(document.getElementById('sim-switch'));
  renderIds(document.getElementById('sim-ids'));
  renderTry(document.getElementById('sim-try'));
  renderClases(document.getElementById('sim-clases'));
  renderAssert(document.getElementById('sim-assert'));
  function exam() {
    var sec = document.getElementById('exam-sec').value;
    var pool =
      sec === 'todo'
        ? QUIZ
        : QUIZ.filter(function (q) {
            return q.s === sec;
          });
    var qs = shuffle(pool)
      .slice(0, 10)
      .map(function (q) {
        return Object.assign({}, q, { id: 'x' + q.id });
      });
    document.getElementById('exam-score').textContent = '';
    renderQuiz(document.getElementById('exam'), qs, function (g, n) {
      document.getElementById('exam-score').textContent =
        'Has acertado ' +
        g +
        ' de ' +
        n +
        '. ' +
        (g === n
          ? 'Perfecto.'
          : g >= 7
            ? 'Bien, repasa los fallos y repite.'
            : 'Vuelve a las secciones donde fallaste y prueba otra vez.');
    });
  }
  document.getElementById('new-exam').onclick = exam;
  document.getElementById('exam-sec').onchange = exam;
  exam();
  function cex() {
    renderCodeExam(document.getElementById('cexam'), CODEEXAM, 3);
  }
  document.getElementById('new-cexam').onclick = cex;
  cex();
  buildChapters();
  initPlayer({ key: 't2', title: 'Tema 2', chapters: CHAPS });
  updateProgress();
})();
