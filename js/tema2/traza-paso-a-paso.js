/* ============================================================
   Traza paso a paso (motor y programas de 2.1 a 2.5)
   sim() y renderTracer(): muestran un programa línea a línea con sus variables.
   ============================================================ */
/* ---------- traza paso a paso ---------- */
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
var TRACERS = {
  secuencial: [
    {
      name: 'Suma de dos números',
      code: [
        'int a, b, suma;',
        'a = teclado.nextInt();   // el usuario teclea 3',
        'b = teclado.nextInt();   // el usuario teclea 4',
        'suma = a + b;',
        'System.out.println(suma);'
      ],
      run: function () {
        return sim({ a: null, b: null, suma: null }, function (v, o, log) {
          log(0, 'Se declaran las variables. Todavía no tienen valor.');
          v.a = 3;
          log(1, 'Se lee a: vale 3.');
          v.b = 4;
          log(2, 'Se lee b: vale 4.');
          v.suma = v.a + v.b;
          log(3, 'suma = 3 + 4 = 7.');
          o.push('7');
          log(4, 'Se muestra el resultado.');
        });
      }
    }
  ],
  bucles: [
    {
      name: 'while: contar hasta 5',
      code: [
        'int cont = 0;',
        'while (cont < 5) {',
        '    cont = cont + 1;',
        '    System.out.println(cont);',
        '}',
        'System.out.println("Fin");'
      ],
      run: function () {
        return sim({ cont: null }, function (v, o, log) {
          v.cont = 0;
          log(0, 'Se inicializa el contador a 0.');
          while (true) {
            var t = v.cont < 5;
            log(1, '¿cont < 5? (' + v.cont + ' < 5) → ' + (t ? 'verdadero, entra' : 'falso, sale del bucle'));
            if (!t) break;
            v.cont = v.cont + 1;
            log(2, 'Se incrementa cont.');
            o.push(String(v.cont));
            log(3, 'Se muestra ' + v.cont + '.');
          }
          o.push('Fin');
          log(5, 'El bucle terminó y el programa sigue.');
        });
      }
    },
    {
      name: 'while: la condición ya es falsa (n = 10)',
      code: [
        'int n = 10;',
        'while (n < 5) {',
        '    System.out.println(n);',
        '    n++;',
        '}',
        'System.out.println("Fin");'
      ],
      run: function () {
        return sim({ n: null }, function (v, o, log) {
          v.n = 10;
          log(0, 'n empieza en 10.');
          while (true) {
            var t = v.n < 5;
            log(
              1,
              '¿n < 5? (' + v.n + ' < 5) → ' + (t ? 'verdadero' : 'falso: el cuerpo no se ejecuta nunca')
            );
            if (!t) break;
            o.push(String(v.n));
            log(2);
            v.n++;
            log(3);
          }
          o.push('Fin');
          log(5, 'Solo se muestra Fin.');
        });
      }
    },
    {
      name: 'do-while: la misma condición (n = 10)',
      code: [
        'int n = 10;',
        'do {',
        '    System.out.println(n);',
        '    n++;',
        '} while (n < 5);',
        'System.out.println("Fin");'
      ],
      run: function () {
        return sim({ n: null }, function (v, o, log) {
          v.n = 10;
          log(0, 'n empieza en 10.');
          var t;
          do {
            o.push(String(v.n));
            log(2, 'El cuerpo se ejecuta antes de mirar la condición.');
            v.n++;
            log(3);
            t = v.n < 5;
            log(4, '¿n < 5? (' + v.n + ' < 5) → ' + (t ? 'verdadero, repite' : 'falso, sale'));
          } while (t);
          o.push('Fin');
          log(5, 'Se mostró 10 una vez: el do-while entra siempre al menos una vez.');
        });
      }
    },
    {
      name: 'for: impares del 1 al 9',
      code: [
        'for (int i = 1; i <= 9; i = i + 2) {',
        '    System.out.println(i);',
        '}',
        'System.out.println("Fin");'
      ],
      run: function () {
        return sim({ i: null }, function (v, o, log) {
          v.i = 1;
          log(0, 'Inicialización: i = 1.');
          while (true) {
            var t = v.i <= 9;
            log(0, 'Condición: ' + v.i + ' <= 9 → ' + (t ? 'verdadero' : 'falso, sale'));
            if (!t) break;
            o.push(String(v.i));
            log(1, 'Se muestra ' + v.i + '.');
            v.i += 2;
            log(0, 'Incremento: i = i + 2 → ' + v.i + '.');
          }
          o.push('Fin');
          log(3, 'Fin del bucle.');
        });
      }
    },
    {
      name: 'Acumulador: suma de 1 a 5',
      code: [
        'int suma = 0;',
        'for (int i = 1; i <= 5; i++) {',
        '    suma = suma + i;',
        '}',
        'System.out.println(suma);'
      ],
      run: function () {
        return sim({ suma: null, i: null }, function (v, o, log) {
          v.suma = 0;
          log(0, 'El acumulador se inicializa a 0.');
          v.i = 1;
          log(1, 'Inicialización: i = 1.');
          while (true) {
            var t = v.i <= 5;
            log(1, 'Condición: ' + v.i + ' <= 5 → ' + (t ? 'verdadero' : 'falso, sale'));
            if (!t) break;
            var a = v.suma;
            v.suma = v.suma + v.i;
            log(2, 'suma = ' + a + ' + ' + v.i + ' = ' + v.suma);
            v.i++;
            log(1, 'Incremento: i++ → ' + v.i);
          }
          o.push(String(v.suma));
          log(4, 'Se muestra el total acumulado.');
        });
      }
    },
    {
      name: 'Centinela: sumar hasta un negativo',
      code: [
        'int suma = 0, n;',
        'do {',
        '    n = leerEntero();   // el usuario teclea 4, 6 y -1',
        '    if (n >= 0) {',
        '        suma = suma + n;',
        '    }',
        '} while (n >= 0);',
        'System.out.println(suma);'
      ],
      run: function () {
        return sim({ suma: null, n: null }, function (v, o, log) {
          v.suma = 0;
          log(0, 'suma empieza en 0.');
          var inp = [4, 6, -1],
            k = 0,
            w;
          do {
            v.n = inp[k++];
            log(2, 'Se lee n = ' + v.n + '.');
            var c = v.n >= 0;
            log(3, '¿n >= 0? → ' + (c ? 'verdadero' : 'falso, no suma'));
            if (c) {
              v.suma += v.n;
              log(4, 'suma = ' + v.suma + '.');
            }
            w = v.n >= 0;
            log(6, '¿n >= 0? → ' + (w ? 'verdadero, repite' : 'falso, el centinela termina el bucle'));
          } while (w);
          o.push(String(v.suma));
          log(7, 'Se muestra la suma de los positivos.');
        });
      }
    }
  ],
  saltos: [
    {
      name: 'break y continue juntos',
      code: [
        'for (int i = 1; i <= 6; i++) {',
        '    if (i == 5) {',
        '        break;',
        '    }',
        '    if (i % 2 == 0) {',
        '        continue;',
        '    }',
        '    System.out.println(i);',
        '}',
        'System.out.println("Fin");'
      ],
      run: function () {
        return sim({ i: null }, function (v, o, log) {
          v.i = 1;
          log(0, 'i = 1.');
          while (true) {
            if (!(v.i <= 6)) {
              log(0, 'Condición: ' + v.i + ' <= 6 → falso, sale.');
              break;
            }
            log(0, 'Condición: ' + v.i + ' <= 6 → verdadero.');
            log(1, '¿i == 5? → ' + (v.i == 5 ? 'verdadero' : 'falso'));
            if (v.i == 5) {
              log(2, 'break: sale del bucle de golpe, sin ejecutar el incremento.');
              break;
            }
            log(4, '¿i % 2 == 0? → ' + (v.i % 2 == 0 ? 'verdadero (es par)' : 'falso (es impar)'));
            if (v.i % 2 == 0) {
              log(5, 'continue: salta el resto de esta vuelta.');
              v.i++;
              log(0, 'Incremento: i++ → ' + v.i + '.');
              continue;
            }
            o.push(String(v.i));
            log(7, 'Se muestra ' + v.i + '.');
            v.i++;
            log(0, 'Incremento: i++ → ' + v.i + '.');
          }
          o.push('Fin');
          log(9, 'Se sale del bucle y sigue el programa.');
        });
      }
    }
  ]
};
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
