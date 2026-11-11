/* ============================================================
   Mini-juego genérico de clasificar
   
   ============================================================ */
/* ---------- clasificador genérico ---------- */
function renderSort(el, items, cats, id) {
  el.innerHTML = '';
  var done = 0;
  items.forEach(function (it, i) {
    var r = document.createElement('div');
    r.className = 'sortrow';
    r.innerHTML =
      '<span class="sw"><code>' +
      esc(it.w) +
      '</code></span><span class="sb"></span><span class="sf"></span>';
    var bs = r.querySelector('.sb');
    cats.forEach(function (c, k) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'btn';
      b.textContent = c;
      b.onclick = function () {
        if (r.dataset.done) return;
        r.dataset.done = 1;
        done++;
        [].forEach.call(bs.children, function (x, kk) {
          x.disabled = true;
          if (kk === it.c) x.classList.add('okb');
        });
        if (k !== it.c) b.classList.add('nob');
        r.querySelector('.sf').innerHTML =
          (k === it.c ? '<b class="ok">✔</b> ' : '<b class="no">✘</b> ') + (it.e || '');
        if (k === it.c) {
          prog[id + '-' + i] = 1;
          save();
        }
      };
      bs.appendChild(b);
    });
    el.appendChild(r);
  });
}
