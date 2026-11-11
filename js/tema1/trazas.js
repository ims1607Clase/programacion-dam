/* ============================================================
   Trazas paso a paso del Tema 1
   Los programas que se ejecutan línea a línea en los apartados de operadores y variables.
   ============================================================ */
/* ---------- trazas del tema 1 ---------- */
TRACERS.vars = [
  {
    name: 'El ejemplo de los apuntes (x, y, z)',
    code: ['int x;', 'int y;', 'int z;', 'x = 8;', 'y = 2;', 'z = x / y;', 'x = 5;', 'y = x + z;'],
    run: function () {
      return sim({ x: null, y: null, z: null }, function (v, o, log) {
        log(0, 'Se declara x: se reserva una caja de tipo int, vacía.');
        log(1, 'Se declara y.');
        log(2, 'Se declara z.');
        v.x = 8;
        log(3, 'x = 8: la caja x guarda un 8.');
        v.y = 2;
        log(4, 'y = 2.');
        v.z = v.x / v.y;
        log(5, 'z = x / y = 8 / 2 = 4.');
        v.x = 5;
        log(6, 'x = 5: se machaca el 8 anterior. Ahora x vale 5.');
        v.y = v.x + v.z;
        log(7, 'y = x + z = 5 + 4 = 9. Final: x=5, y=9, z=4.');
      });
    }
  }
];
TRACERS.incr = [
  {
    name: 'Post-incremento: b = a++',
    code: ['int a = 5;', 'int b = a++;', 'System.out.println(a);', 'System.out.println(b);'],
    run: function () {
      return sim({ a: null, b: null }, function (v, o, log) {
        v.a = 5;
        log(0, 'a vale 5.');
        v.b = v.a;
        log(1, 'a++ (POST): primero se usa el valor actual (5) y se copia en b.');
        v.a = v.a + 1;
        log(1, '...y DESPUÉS a se incrementa a 6.');
        o.push('6');
        log(2, 'Se muestra a = 6.');
        o.push('5');
        log(3, 'Se muestra b = 5.');
      });
    }
  },
  {
    name: 'Pre-incremento: b = ++a',
    code: ['int a = 5;', 'int b = ++a;', 'System.out.println(a);', 'System.out.println(b);'],
    run: function () {
      return sim({ a: null, b: null }, function (v, o, log) {
        v.a = 5;
        log(0, 'a vale 5.');
        v.a = v.a + 1;
        log(1, '++a (PRE): primero a se incrementa a 6...');
        v.b = v.a;
        log(1, '...y DESPUÉS se usa ese valor (6) y se copia en b.');
        o.push('6');
        log(2, 'Se muestra a = 6.');
        o.push('6');
        log(3, 'Se muestra b = 6.');
      });
    }
  },
  {
    name: 'Asignaciones compuestas',
    code: ['int x = 10;', 'x += 5;', 'x -= 3;', 'x *= 2;', 'x /= 4;'],
    run: function () {
      return sim({ x: null }, function (v, o, log) {
        v.x = 10;
        log(0, 'x = 10.');
        v.x += 5;
        log(1, 'x += 5 es x = x + 5 → 15.');
        v.x -= 3;
        log(2, 'x -= 3 es x = x - 3 → 12.');
        v.x *= 2;
        log(3, 'x *= 2 es x = x * 2 → 24.');
        v.x = Math.trunc(v.x / 4);
        log(4, 'x /= 4 es x = x / 4 → 6 (división entera).');
      });
    }
  }
];
TRACERS.prec = [
  {
    name: '(33 + 3 * 4) / 5',
    code: ['(33 + 3 * 4) / 5', '  = (33 + 12) / 5', '  = 45 / 5', '  = 9'],
    run: function () {
      return sim({}, function (v, o, log) {
        log(0, 'Hay paréntesis: se resuelve primero lo de dentro.');
        log(1, 'Dentro del paréntesis, la multiplicación manda sobre la suma: 3 * 4 = 12.');
        log(2, '33 + 12 = 45.');
        o.push('9');
        log(3, '45 / 5 = 9.');
      });
    }
  },
  {
    name: '6 + 4 / 2  frente a  (6 + 4) / 2',
    code: ['6 + 4 / 2', '  = 6 + 2', '  = 8', '(6 + 4) / 2', '  = 10 / 2', '  = 5'],
    run: function () {
      return sim({}, function (v, o, log) {
        log(0, 'Sin paréntesis: la división va antes que la suma.');
        log(1, '4 / 2 = 2.');
        o.push('8');
        log(2, '6 + 2 = 8.');
        log(3, 'Con paréntesis: se hace primero 6 + 4.');
        log(4, '10 / 2.');
        o.push('5');
        log(5, '= 5. ¡Los paréntesis cambian el resultado!');
      });
    }
  }
];
