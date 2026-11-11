/* ============================================================
   Traza de depuración: la media con dos errores
   
   ============================================================ */
/* trazas de depuración */
function mediaProg(incl, cast, name) {
  var code = [
    'int suma = 0;',
    'int contador = 0;',
    'for (int i = 1; i ' + (incl ? '<= 10' : '< 10') + '; i++) {',
    '    suma += i;',
    '    contador++;',
    '}',
    cast ? 'double media = (double) suma / contador;' : 'double media = suma / contador;',
    'System.out.println("La media es " + media);'
  ];
  function f(x) {
    return Number.isInteger(x) ? x.toFixed(1) : String(x);
  }
  return {
    name: name,
    code: code,
    run: function () {
      return sim({ suma: null, contador: null, i: null, media: null }, function (v, o, log) {
        v.suma = 0;
        log(0, 'suma empieza en 0.');
        v.contador = 0;
        log(1, 'contador empieza en 0.');
        v.i = 1;
        log(2, 'Inicialización: i = 1.');
        while (true) {
          var t = incl ? v.i <= 10 : v.i < 10;
          log(
            2,
            'Condición: ' +
              v.i +
              (incl ? ' <= 10' : ' < 10') +
              ' → ' +
              (t ? 'verdadero' : 'falso, sale del bucle' + (incl ? '' : '. ¡Ojo! Nunca se sumó el 10.'))
          );
          if (!t) break;
          v.suma += v.i;
          log(3, 'suma = ' + v.suma + '.');
          v.contador++;
          log(4, 'contador = ' + v.contador + '.');
          v.i++;
          log(2, 'Incremento: i++ → ' + v.i + '.');
        }
        var real = v.suma / v.contador,
          val = cast ? real : Math.trunc(real);
        v.media = val;
        log(
          6,
          cast
            ? 'Con (double), la división lleva decimales: ' +
                v.suma +
                ' / ' +
                v.contador +
                ' = ' +
                f(real) +
                '.'
            : 'Son dos int: división entera, ' +
                v.suma +
                ' / ' +
                v.contador +
                ' = ' +
                Math.trunc(real) +
                ' (se pierden los decimales). Luego se pasa a double: ' +
                f(val) +
                '.'
        );
        o.push('La media es ' + f(val));
        log(7, 'Se muestra la media.');
      });
    }
  };
}
TRACERS.depuracion = [
  mediaProg(false, false, 'Con los dos errores (muestra 5.0)'),
  mediaProg(true, false, 'Arreglado solo el bucle (sigue 5.0)'),
  mediaProg(true, true, 'Todo arreglado (muestra 5.5)')
];
