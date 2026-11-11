/* ============================================================
   Preguntas de los apartados 2.6 a 2.10
   Se añaden al banco de preguntas del Tema 2.
   ============================================================ */
/* ---------- módulo 2: preguntas, ejercicios y trazas de 2.6 a 2.10 ---------- */
QUIZ = QUIZ.concat([
  {
    id: 'q29',
    s: 'estilo',
    q: 'Un algoritmo debería tener tres partes. ¿Cuáles?',
    o: [
      'Cabecera, declaraciones y acciones',
      'Entrada, proceso y salida',
      'Inicio, bucle y fin',
      'Comentarios, código y pruebas'
    ],
    e: 'La cabecera (nombre, parámetros y tipo devuelto) es obligatoria en Java.'
  },
  {
    id: 'q30',
    s: 'estilo',
    q: '¿Qué son los comentarios (documentación interna)?',
    o: [
      'Líneas que la ejecución ignora y que explican el código',
      'Manuales para el usuario final',
      'Diagramas UML',
      'Errores que muestra el compilador'
    ],
    e: 'En Java: <code>//</code> para una línea y <code>/* ... */</code> para varias.'
  },
  {
    id: 'q31',
    s: 'estilo',
    q: '¿Qué diferencia hay entre documentación interna y externa?',
    o: [
      'La interna explica cómo está hecho el código; la externa qué debe hacer, cómo se organiza y cómo se usa',
      'La interna es el manual de usuario',
      'No hay diferencia',
      'La externa son los comentarios con //'
    ],
    e: 'Externa: requisitos, diagramas, API, guía de instalación, manual de usuario.'
  },
  {
    id: 'q32',
    s: 'estilo',
    q: '¿Cómo se escribe un comentario Javadoc?',
    o: [
      'Con /** ... */ justo antes de la clase, atributo o método',
      'Con // al final de la línea',
      'Con (* ... *)',
      'Con # al principio'
    ],
    e: '<code>(* ... *)</code> son los comentarios de Pascal.'
  },
  {
    id: 'q33',
    s: 'estilo',
    q: '¿Cuándo NO se usa la etiqueta <code>@return</code>?',
    o: [
      'En constructores y en métodos void',
      'En métodos que devuelven un int',
      'Nunca se usa',
      'En las clases'
    ],
    e: 'Describe lo que devuelve, así que no tiene sentido si no devuelve nada.'
  },
  {
    id: 'q34',
    s: 'estilo',
    q: '¿Para qué sirve <code>@param</code>?',
    o: [
      'Describir cada parámetro del método (obligatorio para todos)',
      'Indicar el autor',
      'Marcar un método como obsoleto',
      'Enlazar con otra clase'
    ],
    e: '<code>@author</code> es el autor, <code>@deprecated</code> el obsoleto y <code>@see</code> el enlace.'
  },
  {
    id: 'q35',
    s: 'estilo',
    q: 'Respecto a la sangría, las instrucciones dentro de un bloque deben tener...',
    o: [
      'Más sangría que la instrucción que abre el bloque',
      'La misma sangría que la que lo abre',
      'Menos sangría',
      'Da igual'
    ],
    e: 'Es especialmente importante con bloques anidados.'
  },
  {
    id: 'q36',
    s: 'estilo',
    q: '¿Cuántas instrucciones se escriben por línea?',
    o: [
      'Una, con excepciones justificadas como declarar varias variables juntas',
      'Todas las que quepan',
      'Siempre dos',
      'Da igual'
    ],
    e: 'Sin abusar de las excepciones.'
  },
  {
    id: 'q37',
    s: 'estilo',
    q: 'En Java, ¿cómo se escribe por convención una constante?',
    o: [
      'EN MAYÚSCULAS, como MAX_INTENTOS',
      'lowerCamelCase',
      'UpperCamelCase',
      'En minúsculas con guiones bajos'
    ],
    e: 'Clases: UpperCamelCase. Constantes: MAYÚSCULAS. El resto: lowerCamelCase.'
  },
  {
    id: 'q38',
    s: 'estilo',
    q: 'En Java, ¿cómo se escribe por convención el nombre de una clase?',
    o: ['UpperCamelCase, como AdivinaNumero', 'MAYÚSCULAS', 'snake_case', 'lowerCamelCase'],
    e: 'Los apuntes lo indican también para los paquetes.'
  },
  {
    id: 'q39',
    s: 'estilo',
    q: 'En Java, <code>edad</code>, <code>Edad</code> y <code>EDAD</code> son...',
    o: [
      'Tres identificadores distintos',
      'El mismo identificador',
      'Un error de compilación',
      'Válidos solo si son constantes'
    ],
    e: 'Java distingue entre mayúsculas y minúsculas.'
  },
  {
    id: 'q40',
    s: 'estilo',
    q: '¿Cuál de estos es el mejor identificador?',
    o: ['edadEmpleado', 'X', 'cosa', 'ed_em'],
    e: 'Debe ser significativo y lo más corto posible sin perder claridad. Evita abreviaturas ilegibles.'
  },
  {
    id: 'q41',
    s: 'estilo',
    q: 'Sobre dónde poner la llave de apertura, ¿qué es lo importante?',
    o: [
      'Ser consistente con el estilo elegido',
      'Ponerla siempre en una línea nueva',
      'No poner nunca llaves',
      'Ponerla solo en los bucles'
    ],
    e: 'En Java se usa más la llave en la misma línea, pero lo importante es la consistencia.'
  },

  {
    id: 'q42',
    s: 'excepciones',
    q: '¿Qué es una excepción?',
    o: [
      'Un suceso inesperado durante la ejecución que interrumpe el programa',
      'Un error que detecta el compilador antes de ejecutar',
      'Un tipo de bucle',
      'Un comentario especial'
    ],
    e: 'Por ejemplo dividir entre cero o abrir un fichero que no existe.'
  },
  {
    id: 'q43',
    s: 'excepciones',
    q: 'El bloque <code>finally</code>...',
    o: [
      'Se ejecuta siempre, haya error o no',
      'Solo se ejecuta si hay error',
      'Solo se ejecuta si no hay error',
      'No se ejecuta nunca'
    ],
    e: 'Es opcional.'
  },
  {
    id: 'q44',
    s: 'excepciones',
    q: 'Si quieres capturar <code>ArithmeticException</code> y <code>Exception</code>, ¿en qué orden pones los catch?',
    o: [
      'Primero ArithmeticException (lo específico) y después Exception',
      'Primero Exception y después ArithmeticException',
      'Da igual el orden',
      'No se pueden poner los dos'
    ],
    e: 'De lo más específico a lo más genérico.'
  },
  {
    id: 'q45',
    s: 'excepciones',
    q: 'Al dividir un entero entre cero, ¿qué excepción se lanza?',
    o: ['ArithmeticException', 'InputMismatchException', 'NullPointerException', 'IllegalArgumentException'],
    e: 'Es el ejemplo típico de los apuntes.'
  },
  {
    id: 'q46',
    s: 'excepciones',
    q: '¿Qué ocurre con <code>nextInt()</code> si el usuario escribe "hola"?',
    o: [
      'Lanza InputMismatchException, por eso se encierra en un try-catch',
      'Devuelve 0',
      'Devuelve null',
      'Ignora la entrada'
    ],
    e: 'La entrada de datos es la parte más propensa a fallos.'
  },
  {
    id: 'q47',
    s: 'excepciones',
    q: '¿Qué hacemos con <code>printStackTrace()</code>?',
    o: [
      'Sirve para depurar, pero hay que quitarlo en la versión final',
      'Se deja siempre en el código final',
      'Captura la excepción',
      'Crea una excepción nueva'
    ],
    e: 'Para no confundir al usuario con mensajes técnicos.'
  },
  {
    id: 'q48',
    s: 'excepciones',
    q: '¿Cómo lanzas una excepción existente con tu propio mensaje?',
    o: [
      'throw new IllegalArgumentException("mensaje")',
      'try new IllegalArgumentException("mensaje")',
      'catch IllegalArgumentException("mensaje")',
      'return new IllegalArgumentException("mensaje")'
    ],
    e: '<code>throw</code> con <code>new</code>.'
  },
  {
    id: 'q49',
    s: 'excepciones',
    q: 'Una clase de excepción propia debe...',
    o: [
      'Extender de Exception y su nombre acabar en Exception',
      'Extender de Scanner',
      'Llamarse siempre Error',
      'No tener constructor'
    ],
    e: 'Su constructor recibe el mensaje y lo pasa a la clase padre con <code>super(mensaje)</code>.'
  },
  {
    id: 'q50',
    s: 'excepciones',
    q: 'Si tu excepción extiende de <code>Exception</code> (comprobada), ¿qué obliga el compilador?',
    o: [
      'Declararla con throws o capturarla, o no compila',
      'Nada',
      'Usar siempre finally',
      'Ponerla en el main'
    ],
    e: 'Quien llama al método debe capturarla o declararla también.'
  },
  {
    id: 'q51',
    s: 'excepciones',
    q: '¿Qué excepciones son no comprobadas?',
    o: [
      'Las que extienden de RuntimeException, como IllegalArgumentException',
      'Las que extienden de Exception',
      'Todas',
      'Ninguna'
    ],
    e: 'El compilador no obliga a declararlas.'
  },
  {
    id: 'q52',
    s: 'excepciones',
    q: '¿Cuál es una mala práctica con excepciones?',
    o: [
      'Usarlas para situaciones normales, como salir de un bucle al teclear una letra',
      'Capturar la división entre cero',
      'Usar finally',
      'Lanzar excepciones con mensaje propio'
    ],
    e: 'Es un error de diseño, son costosas y el código queda menos claro que con un while bien planteado.'
  },
  {
    id: 'q53',
    s: 'excepciones',
    q: 'Si se captura una excepción con un catch, después del bloque try-catch-finally...',
    o: [
      'El programa continúa con normalidad',
      'El programa termina',
      'Vuelve a ejecutarse el try',
      'El programa se reinicia'
    ],
    e: 'Esa es la gracia: el programa se recupera del error.'
  },

  {
    id: 'q54',
    s: 'pruebas',
    q: '¿Qué comprueba la validación?',
    o: [
      'Que el producto cumple los requisitos del cliente',
      'Que no hay errores de ejecución',
      'Que el código está bien sangrado',
      'Que compila'
    ],
    e: 'Verificación: ¿bien construido? Validación: ¿es el producto correcto?'
  },
  {
    id: 'q55',
    s: 'pruebas',
    q: '¿Qué comprueba la verificación?',
    o: [
      'Que el producto está bien construido, sin errores de ejecución',
      'Que cumple los requisitos del cliente',
      'Que el cliente está contento',
      'Que se ha documentado'
    ],
    e: 'Es la pregunta "¿estamos construyendo bien el producto?".'
  },
  {
    id: 'q56',
    s: 'pruebas',
    q: 'Una prueba unitaria prueba...',
    o: [
      'Un componente aislado (un método o una clase)',
      'Todo el programa',
      'Varios componentes juntos',
      'Si el cliente da su visto bueno'
    ],
    e: 'Se hace al terminar el componente.'
  },
  {
    id: 'q57',
    s: 'pruebas',
    q: '¿Qué detecta una prueba de carga?',
    o: [
      'Fallos o lentitud con un volumen de datos real',
      'Errores de sangría',
      'Errores de compilación',
      'Si el cliente acepta el producto'
    ],
    e: 'Un programa que va bien con 20 registros puede fallar con 200 000.'
  },
  {
    id: 'q58',
    s: 'pruebas',
    q: 'En las pruebas de caja negra...',
    o: [
      'Se prueban entradas y salidas sin mirar el código',
      'Se estudia el código para recorrer todos los caminos',
      'Solo prueba el cliente',
      'Se usa siempre el depurador'
    ],
    e: 'La caja blanca sí mira el código.'
  },
  {
    id: 'q59',
    s: 'pruebas',
    q: '¿Qué es una clase de equivalencia?',
    o: [
      'Un grupo de datos que el programa trata igual, del que se prueba un valor',
      'La lista de todos los valores posibles',
      'Una clase de Java',
      'Un tipo de bucle'
    ],
    e: 'No se pueden probar todos los valores, así que se prueba uno de cada grupo.'
  },
  {
    id: 'q60',
    s: 'pruebas',
    q: '¿Qué son los valores límite?',
    o: [
      'Los bordes de cada clase de equivalencia, como 1 y 31 para un día',
      'Valores imposibles como texto en vez de número',
      'Números aleatorios',
      'Solo los negativos'
    ],
    e: 'Los errores suelen esconderse en los bordes.'
  },
  {
    id: 'q61',
    s: 'pruebas',
    q: 'En caja blanca, ¿con cuántas vueltas se prueba un bucle?',
    o: ['Con 0, 1 y varias', 'Solo con 1', 'Solo con 100', 'Con infinitas'],
    e: 'Y cada condición debe probarse verdadera y falsa.'
  },
  {
    id: 'q62',
    s: 'pruebas',
    q: '¿Qué versión está completa pero inestable y la prueba un grupo reducido?',
    o: ['Alfa', 'Beta', 'Release candidate', 'Final'],
    e: 'Beta: más estable y con muchos usuarios. RC: terminada a falta de correcciones.'
  },
  {
    id: 'q63',
    s: 'pruebas',
    q: '¿Quién debería hacer las pruebas?',
    o: [
      'Alguien que no haya programado el código',
      'Quien lo programó',
      'Nadie, si compila',
      'Solo el cliente'
    ],
    e: 'Quien escribe el código tiende a probar solo lo que sabe que funciona.'
  },
  {
    id: 'q64',
    s: 'pruebas',
    q: 'Si las pruebas no encuentran ningún error...',
    o: [
      'Hay que desconfiar de la calidad de las pruebas',
      'El programa está libre de errores',
      'Se puede publicar sin más',
      'Se borran las pruebas'
    ],
    e: 'Las pruebas no demuestran que no haya errores, solo que no se han encontrado.'
  },
  {
    id: 'q65',
    s: 'pruebas',
    q: '¿Cómo se activan las aserciones en Java?',
    o: [
      'Con el argumento de la máquina virtual -ea',
      'Con un import',
      'Con el argumento -debug',
      'Están siempre activas'
    ],
    e: 'Para comprobarlo se pone un <code>assert false</code> en el main y se mira si salta <code>AssertionError</code>.'
  },
  {
    id: 'q66',
    s: 'pruebas',
    q: '¿Cuál es la sintaxis recomendada de una aserción?',
    o: [
      'assert condicion : "mensaje de error";',
      'assert(condicion) => mensaje;',
      'if assert condicion;',
      'assert mensaje;'
    ],
    e: 'La condición, dos puntos y el mensaje.'
  },
  {
    id: 'q67',
    s: 'pruebas',
    q: '¿Dónde NO se deben usar aserciones?',
    o: [
      'Para validar datos del usuario o errores de integración',
      'En pruebas unitarias',
      'Para comprobar invariantes',
      'En programación defensiva'
    ],
    e: 'En producción -ea está desactivado y el error pasaría desapercibido. Ahí se usan condicionales y excepciones.'
  },
  {
    id: 'q68',
    s: 'pruebas',
    q: 'Sin <code>-ea</code> (producción normal), las aserciones...',
    o: [
      'No se evalúan y apenas cuestan rendimiento',
      'Se evalúan siempre',
      'Rompen el programa',
      'Se convierten en excepciones'
    ],
    e: 'Por eso se pueden dejar en el código.'
  },

  {
    id: 'q69',
    s: 'depuracion',
    q: '¿Qué tipo de error es olvidar un <code>;</code> al final de una instrucción?',
    o: ['De compilación', 'De ejecución', 'Lógico', 'No es un error'],
    e: 'Lo detecta el compilador y el IDE lo subraya.'
  },
  {
    id: 'q70',
    s: 'depuracion',
    q: '¿Qué tipo de error es dividir un entero entre cero?',
    o: ['De ejecución', 'De compilación', 'Lógico', 'De estilo'],
    e: 'El programa arranca y la JVM lanza una excepción al llegar ahí.'
  },
  {
    id: 'q71',
    s: 'depuracion',
    q: 'El programa funciona, no da error, pero el resultado es incorrecto. Es un error...',
    o: ['Lógico', 'De compilación', 'De ejecución', 'De sangría'],
    e: 'Nadie los detecta automáticamente. Por ejemplo, un bucle que da una vuelta de menos.'
  },
  {
    id: 'q72',
    s: 'depuracion',
    q: '¿Qué diferencia hay entre probar y depurar?',
    o: [
      'Probar detecta que hay un error; depurar averigua dónde está y por qué',
      'Son lo mismo',
      'Depurar es escribir comentarios',
      'Probar corrige los errores solo'
    ],
    e: 'Primero pruebas, y cuando algo falla, depuras.'
  },
  {
    id: 'q73',
    s: 'depuracion',
    q: '¿Qué es un punto de ruptura (breakpoint)?',
    o: [
      'Una línea donde el programa se detiene antes de ejecutarla',
      'Un error de compilación',
      'El final del programa',
      'Una excepción'
    ],
    e: 'Solo tiene efecto en modo depuración.'
  },
  {
    id: 'q74',
    s: 'depuracion',
    q: '¿Qué diferencia hay entre Step Over y Step Into?',
    o: [
      'Step Over ejecuta la línea sin entrar en los métodos; Step Into entra en el método llamado',
      'Step Over entra en los métodos y Step Into no',
      'Son iguales',
      'Step Over cierra el programa'
    ],
    e: 'Step Out termina el método actual y vuelve al que lo llamó.'
  },
  {
    id: 'q75',
    s: 'depuracion',
    q: '¿Para qué sirve la pila de llamadas (Call Stack)?',
    o: [
      'Para ver la cadena de métodos que llevó hasta la línea actual',
      'Para ver los valores de las variables',
      'Para compilar',
      'Para cambiar el breakpoint'
    ],
    e: 'Es la misma información que la traza de una excepción.'
  },
  {
    id: 'q76',
    s: 'depuracion',
    q: '¿Cuándo es útil un punto de ruptura condicional?',
    o: [
      'Cuando el error aparece en una vuelta muy avanzada de un bucle',
      'Para compilar más rápido',
      'Para ignorar excepciones',
      'Nunca'
    ],
    e: 'Solo detiene el programa si se cumple la condición, por ejemplo <code>b == 0</code>.'
  },
  {
    id: 'q77',
    s: 'depuracion',
    q: 'Los breakpoints solo funcionan...',
    o: ['En modo depuración (Debug)', 'En ejecución normal', 'Solo con -ea', 'Solo dentro del main'],
    e: 'En ejecución normal se ignoran.'
  },
  {
    id: 'q78',
    s: 'depuracion',
    q: '¿Cuál es una buena práctica al depurar?',
    o: [
      'Corregir un error cada vez y volver a probar',
      'Cambiar muchas cosas a la vez',
      'No intentar reproducir el error',
      'Quitar los breakpoints'
    ],
    e: 'Y añadir una prueba o una aserción para que no reaparezca.'
  },
  {
    id: 'q79',
    s: 'depuracion',
    q: 'En el ejemplo de la media, ¿por qué el segundo error quedaba oculto por el primero?',
    o: [
      'Porque con el bucle mal la media salía justo 5, que parecía un resultado razonable',
      'Porque el depurador no lo mostraba',
      'Porque el compilador lo corregía',
      'Porque solo ocurría con -ea'
    ],
    e: 'Por eso hay que comprobar cada variable y no solo el resultado final.'
  },

  {
    id: 'q80',
    s: 'integrador',
    q: 'En el juego, ¿para qué sirve el <code>teclado.nextLine()</code> dentro del <code>catch (InputMismatchException e)</code>?',
    o: [
      'Para limpiar el texto inválido que se quedó en el búfer; si no, el error se repetiría sin dejar escribir',
      'Para pedir la respuesta s/n',
      'Para terminar el bucle',
      'Para contar el intento'
    ],
    e: 'Cuando nextInt() falla, lo escrito se queda sin leer. Con nextLine() se descarta y el siguiente intento empieza limpio.'
  },
  {
    id: 'q81',
    s: 'integrador',
    q: '¿Qué estructura repite las partidas (al menos una)?',
    o: ['do-while', 'while', 'for', 'switch'],
    e: 'Siempre se juega al menos una partida, y luego se pregunta si quieres otra.'
  },
  {
    id: 'q82',
    s: 'integrador',
    q: '¿Por qué el bucle de intentos no necesita <code>break</code>?',
    o: [
      'Porque termina por su propia condición gracias al conmutador acertado',
      'Porque Java añade el break solo',
      'Porque es un for',
      'Porque usa return'
    ],
    e: 'La condición es <code>!acertado &amp;&amp; intentos &lt; MAX_INTENTOS</code>.'
  },
  {
    id: 'q83',
    s: 'integrador',
    q: 'Si el usuario escribe "hola" en un intento, ¿se descuenta el intento?',
    o: [
      'No: el intento solo se cuenta tras leer bien el número',
      'Sí',
      'Se pierde la partida',
      'Se reinicia el contador'
    ],
    e: 'El <code>intentos++</code> está después del <code>nextInt()</code>, y si este falla, salta al catch.'
  },
  {
    id: 'q84',
    s: 'integrador',
    q: '¿Por qué se usa la constante <code>MAX_INTENTOS</code> en vez de escribir 7?',
    o: [
      'Para evitar un "número mágico" y poder cambiarlo en un solo sitio',
      'Porque Java lo exige',
      'Porque va más rápido',
      'Para poder usar Javadoc'
    ],
    e: 'Además, el nombre explica qué significa el 7.'
  },
  {
    id: 'q85',
    s: 'integrador',
    q: '¿Qué estructura decide entre "mayor", "menor" y "acierto"?',
    o: ['Condicional múltiple con if-else if-else', 'Un bucle for', 'Un try-catch', 'Un switch con break'],
    e: 'Tres casos excluyentes: la primera condición verdadera gana.'
  }
]);
