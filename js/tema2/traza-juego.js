/* ============================================================
   Traza del juego "Adivina el número" (2.10)
   
   ============================================================ */
/* traza del juego */
function juego(inputs) {
  return sim({ secreto: null, intentos: null, acertado: null, numero: null }, function (v, o, log) {
    log(0, 'Constante: máximo 7 intentos.');
    v.secreto = 42;
    log(1, 'Se elige el secreto (aquí fijado a 42).');
    v.intentos = 0;
    log(2, 'El contador de intentos empieza en 0.');
    v.acertado = false;
    log(3, 'El conmutador acertado empieza en false.');
    var k = 0;
    while (true) {
      var c = !v.acertado && v.intentos < 7;
      log(4, '¿!acertado && intentos < 7? → ' + (c ? 'verdadero, otro intento' : 'falso, termina el bucle'));
      if (!c) break;
      var s = inputs[k++];
      log(5, 'Entra al try. El usuario escribe "' + s + '".');
      if (!/^-?\d+$/.test(s)) {
        log(6, 'teclado.nextInt() falla con "' + s + '" y lanza InputMismatchException. intentos NO sube.');
        log(15, 'Salta al catch.');
        o.push('Eso no es un número entero. Prueba otra vez.');
        log(16, 'Se avisa al usuario.');
        log(17, 'teclado.nextLine() limpia el texto inválido y se vuelve a pedir.');
        continue;
      }
      v.numero = Number(s);
      log(6, 'nextInt() lee el número ' + v.numero + '.');
      v.intentos++;
      log(7, 'Ahora sí: el intento cuenta. intentos = ' + v.intentos + '.');
      if (v.numero < v.secreto) {
        log(8, '¿' + v.numero + ' < 42? verdadero');
        o.push('El número secreto es MAYOR.');
        log(9, 'Se da la pista.');
      } else if (v.numero > v.secreto) {
        log(8, '¿' + v.numero + ' < 42? falso');
        log(10, '¿' + v.numero + ' > 42? verdadero');
        o.push('El número secreto es MENOR.');
        log(11, 'Se da la pista.');
      } else {
        log(8, '¿' + v.numero + ' < 42? falso');
        log(10, '¿' + v.numero + ' > 42? falso');
        log(12, 'else: es igual, ¡acertó!');
        v.acertado = true;
        log(13, 'acertado = true. El bucle terminará solo en la siguiente comprobación.');
      }
    }
    if (v.acertado) {
      log(20, '¿acertado? → verdadero');
      o.push('¡Enhorabuena! Lo has adivinado en ' + v.intentos + ' intentos.');
      log(21, 'Mensaje de victoria.');
    } else {
      log(20, '¿acertado? → falso');
      log(22, 'Va al else.');
      o.push('Se acabaron los intentos. El número era 42.');
      log(23, 'Mensaje de derrota.');
    }
  });
}
var GAME_CODE = [
  'final int MAX_INTENTOS = 7;',
  'int secreto = 42;   // en el programa real es aleatorio',
  'int intentos = 0;',
  'boolean acertado = false;',
  'while (!acertado && intentos < MAX_INTENTOS) {',
  '    try {',
  '        int numero = teclado.nextInt();',
  '        intentos++;',
  '        if (numero < secreto) {',
  '            System.out.println("El número secreto es MAYOR.");',
  '        } else if (numero > secreto) {',
  '            System.out.println("El número secreto es MENOR.");',
  '        } else {',
  '            acertado = true;',
  '        }',
  '    } catch (InputMismatchException e) {',
  '        System.out.println("Eso no es un número entero. Prueba otra vez.");',
  '        teclado.nextLine();   // limpia lo escrito',
  '    }',
  '}',
  'if (acertado) {',
  '    System.out.println("¡Enhorabuena! Lo has adivinado en " + intentos + " intentos.");',
  '} else {',
  '    System.out.println("Se acabaron los intentos. El número era " + secreto + ".");',
  '}'
];
TRACERS.integrador = [
  {
    name: 'Partida ganada con una entrada no válida (hola, 50, 30, 42)',
    code: GAME_CODE,
    run: function () {
      return juego(['hola', '50', '30', '42']);
    }
  },
  {
    name: 'Partida perdida (7 fallos)',
    code: GAME_CODE,
    run: function () {
      return juego(['10', '20', '30', '40', '50', '60', '70']);
    }
  },
  {
    name: 'El fallo del 0 y el 101 (cuentan como intento)',
    code: GAME_CODE,
    run: function () {
      return juego(['0', '101', '42']);
    }
  }
];
