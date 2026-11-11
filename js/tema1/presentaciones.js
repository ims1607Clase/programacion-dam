/* ============================================================
   Visor de presentaciones
   renderDeck: pinta las diapositivas de DECKS con botones anterior/siguiente.
   ============================================================ */
/* ---------- presentaciones (decks) ---------- */
function renderDeck(el, key) {
  var sl = DECKS[key],
    i = 0;
  el.innerHTML =
    '<div class="deck-top"><span class="deck-n"></span><span class="deck-hint">Usa las flechas ← → o los botones</span></div><div class="slide" aria-live="polite"></div><div class="deck-nav"><button class="btn" data-a="p" type="button">← Anterior</button><span class="dots"></span><button class="btn primary" data-a="n" type="button">Siguiente →</button></div>';
  var box = el.querySelector('.slide'),
    dots = el.querySelector('.dots'),
    nEl = el.querySelector('.deck-n');
  sl.forEach(function (s, k) {
    var d = document.createElement('button');
    d.type = 'button';
    d.className = 'dot';
    d.setAttribute('aria-label', 'Diapositiva ' + (k + 1));
    d.onclick = function () {
      i = k;
      draw();
    };
    dots.appendChild(d);
  });
  function draw() {
    box.innerHTML = '<h3>' + sl[i].h + '</h3>' + sl[i].b;
    box.querySelectorAll('pre[data-hl]').forEach(function (p) {
      p.innerHTML = hl(p.textContent);
    });
    nEl.textContent = 'Diapositiva ' + (i + 1) + ' de ' + sl.length;
    [].forEach.call(dots.children, function (d, k) {
      d.classList.toggle('on', k === i);
    });
    el.querySelector('[data-a=p]').disabled = i === 0;
    el.querySelector('[data-a=n]').disabled = i === sl.length - 1;
  }
  el.querySelector('[data-a=p]').onclick = function () {
    if (i > 0) {
      i--;
      draw();
    }
  };
  el.querySelector('[data-a=n]').onclick = function () {
    if (i < sl.length - 1) {
      i++;
      draw();
    }
  };
  el.tabIndex = 0;
  el.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight') {
      el.querySelector('[data-a=n]').click();
      e.preventDefault();
    }
    if (e.key === 'ArrowLeft') {
      el.querySelector('[data-a=p]').click();
      e.preventDefault();
    }
  });
  draw();
}
