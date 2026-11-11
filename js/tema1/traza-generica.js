/* ============================================================
   Traza paso a paso (motor genérico)
   Función sim() y renderTracer(): muestran un programa línea a línea con sus variables.
   ============================================================ */
function sim(init, body) {
  var vars = Object.assign({}, init),
    out = [],
    steps = [];
  function log(l, note) {
    steps.push({ l: l, note: note || '', vars: Object.assign({}, vars), out: out.slice() });
  }
  body(vars, out, log);
  return steps;
}

var TRACERS = {};
function renderTracer(el, key) {
  var progs = TRACERS[key],
    cur = 0,
    steps = progs[0].run(),
    idx = -1,
    timer = null;
  el.innerHTML =
    '<div class="row"><label>Programa <select aria-label="Programa"></select></label>' +
    '<button class="btn" data-a="prev" type="button">Anterior</button><button class="btn primary" data-a="next" type="button">Siguiente</button>' +
    '<button class="btn" data-a="play" type="button">Reproducir</button><button class="btn" data-a="reset" type="button">Reiniciar</button></div>' +
    '<div class="tgrid"><pre class="code tcode"></pre><div><div class="panel"><h4>Variables</h4><div class="vars"></div></div><div class="panel"><h4>Pantalla</h4><div class="outp"></div></div><div class="panel"><h4>Qué pasa</h4><div class="note" aria-live="polite"></div></div></div></div>';
  var sel = el.querySelector('select'),
    codeEl = el.querySelector('.tcode'),
    varsEl = el.querySelector('.vars'),
    outEl = el.querySelector('.outp'),
    noteEl = el.querySelector('.note');
  if (progs.length < 2) sel.closest('label').style.display = 'none';
  progs.forEach(function (p, i) {
    var o = document.createElement('option');
    o.value = i;
    o.textContent = p.name;
    sel.appendChild(o);
  });
  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
      el.querySelector('[data-a=play]').textContent = 'Reproducir';
    }
  }
  function draw() {
    var s = idx >= 0 ? steps[idx] : null,
      prev = idx > 0 ? steps[idx - 1] : null;
    codeEl.innerHTML = progs[cur].code
      .map(function (ln, i) {
        return (
          '<div class="ln' + (s && s.l === i ? ' on' : '') + '"><i>' + (i + 1) + '</i>' + hl(ln) + '</div>'
        );
      })
      .join('');
    var names = Object.keys(steps[0].vars);
    varsEl.innerHTML = names
      .map(function (n) {
        var val = s ? s.vars[n] : null,
          pv = prev ? prev.vars[n] : null;
        var ch = s && (!prev ? val !== null : val !== pv);
        return (
          '<span class="' +
          (ch ? 'ch' : '') +
          '">' +
          n +
          ' = ' +
          (val === null || val === undefined ? '?' : val) +
          '</span>'
        );
      })
      .join('');
    outEl.textContent = s ? s.out.join('\n') || ' ' : ' ';
    noteEl.textContent = s ? s.note : 'Pulsa "Siguiente" para ejecutar la primera línea.';
    el.querySelector('[data-a=prev]').disabled = idx < 0;
    el.querySelector('[data-a=next]').disabled = idx >= steps.length - 1;
    if (idx >= steps.length - 1) stop();
  }
  function load(i) {
    stop();
    cur = i;
    steps = progs[i].run();
    idx = -1;
    draw();
  }
  sel.onchange = function () {
    load(+sel.value);
  };
  el.querySelector('[data-a=next]').onclick = function () {
    if (idx < steps.length - 1) {
      idx++;
      draw();
    }
  };
  el.querySelector('[data-a=prev]').onclick = function () {
    if (idx >= 0) {
      idx--;
      draw();
    }
  };
  el.querySelector('[data-a=reset]').onclick = function () {
    stop();
    idx = -1;
    draw();
  };
  el.querySelector('[data-a=play]').onclick = function () {
    if (timer) {
      stop();
      return;
    }
    if (idx >= steps.length - 1) idx = -1;
    this.textContent = 'Pausar';
    timer = setInterval(function () {
      if (idx < steps.length - 1) {
        idx++;
        draw();
      } else stop();
    }, 1000);
  };
  draw();
}
