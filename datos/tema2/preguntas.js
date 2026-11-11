/* ============================================================
   Banco de preguntas del Tema 2 (apartados 2.1 a 2.5)
   La PRIMERA opción de cada pregunta es la correcta; la web las baraja al mostrarlas. Se usan en el examen de preguntas.
   ============================================================ */
/* ---------- banco de preguntas (la primera opción es la correcta; se baraja al mostrar) ---------- */
var QUIZ = [
  {
    id: 'q1',
    s: 'estructurada',
    q: 'Según el teorema de Böhm y Jacopini, ¿con qué estructuras de control se puede escribir cualquier programa propio?',
    o: [
      'Secuencial, selectiva y repetitiva',
      'Solo secuencial y repetitiva',
      'Secuencial, selectiva, repetitiva y saltos',
      'Selectiva, repetitiva y excepciones'
    ],
    e: 'Esas tres son las únicas permitidas en la programación estructurada.'
  },
  {
    id: 'q2',
    s: 'estructurada',
    q: '¿Cuál de estas NO es una característica de un programa propio?',
    o: [
      'Debe contener al menos un bucle',
      'Tiene un único punto de inicio y uno de fin',
      'Existe un camino que recorre todas sus partes',
      'No contiene bucles infinitos'
    ],
    e: 'Un programa propio puede no tener ningún bucle. Lo que no puede tener es bucles infinitos.'
  },
  {
    id: 'q3',
    s: 'estructurada',
    q: '¿Qué defendía Dijkstra para construir programas más potentes en menos tiempo?',
    o: [
      'Simplificar las herramientas',
      'Añadir más instrucciones al lenguaje',
      'Usar saltos para optimizar',
      'Escribir menos comentarios'
    ],
    e: 'Simplificar, no complicar. Eso, junto con la ingeniería del software, ayudó a superar la crisis del software.'
  },
  {
    id: 'q4',
    s: 'estructurada',
    q: '¿Qué relación tiene la POO con la programación estructurada?',
    o: [
      'Evoluciona de ella: los algoritmos dentro de las clases siguen siendo estructurados',
      'La sustituye: en las clases ya no hay estructuras de control',
      'No tienen relación',
      'Solo se parecen en los bucles'
    ],
    e: 'La POO encapsula datos y algoritmos en clases, pero los algoritmos internos usan las tres estructuras.'
  },

  {
    id: 'q5',
    s: 'secuencial',
    q: 'En una estructura secuencial, ¿cuándo empieza a ejecutarse una instrucción?',
    o: [
      'Cuando ha terminado la anterior',
      'A la vez que las demás',
      'Cuando una condición es verdadera',
      'Cuando se repite el bucle'
    ],
    e: 'Cada acción se ejecuta después de la anterior, en el orden en que se escribieron.'
  },
  {
    id: 'q6',
    s: 'secuencial',
    q: 'Un alumno escribe estas líneas en este orden. ¿Qué problema tiene?',
    code: 'suma = a + b;\na = teclado.nextInt();\nb = teclado.nextInt();\nSystem.out.println(suma);',
    o: [
      'Suma usa a y b antes de leerlos: el orden importa (y Java ni compila)',
      'Ninguno, Java reordena las instrucciones',
      'Solo es un problema de estilo',
      'Falta un bucle'
    ],
    e: 'En secuencial el orden lo es todo: primero leer, después calcular, al final mostrar.'
  },

  {
    id: 'q7',
    s: 'selectiva',
    q: 'Con tres <code>if</code> independientes (positivo, negativo, cero), cuando se cumple el primero...',
    o: [
      'Java sigue comprobando los otros dos aunque sea innecesario',
      'Java deja de comprobar los demás',
      'Da error de compilación',
      'Se ejecutan los tres bloques'
    ],
    e: 'Por eso es mejor <code>else if</code>: al cumplirse una condición, se salta el resto.'
  },
  {
    id: 'q8',
    s: 'selectiva',
    q: 'En una cadena de <code>else if</code>, cuando una condición es verdadera...',
    o: [
      'Se ejecuta su bloque y se sale de la estructura',
      'Se ejecutan también todos los bloques siguientes',
      'Se vuelve a evaluar desde arriba',
      'Se salta directamente al else'
    ],
    e: 'Las condiciones se evalúan de arriba abajo y solo se ejecuta el primer bloque verdadero.'
  },
  {
    id: 'q9',
    s: 'selectiva',
    q: '¿Para qué se recomienda el operador ternario <code>(condición) ? a : b</code>?',
    o: [
      'Para elegir entre dos valores, por ejemplo asignar un mensaje',
      'Para ejecutar bloques largos de acciones',
      'Para repetir instrucciones',
      'Para capturar errores'
    ],
    e: 'No debe usarse para ejecutar acciones complejas.'
  },
  {
    id: 'q10',
    s: 'selectiva',
    q: 'Al ordenar las condiciones de un <code>else if</code> (por ejemplo, notas), ¿qué orden recomiendan los apuntes?',
    o: [
      'De lo más restrictivo a lo más general, y primero los casos de error',
      'Da igual el orden',
      'De lo más general a lo más restrictivo',
      'Primero las condiciones más largas'
    ],
    e: 'Con el orden contrario, una nota de 5.5 podría mostrar "Notable". Compruébalo en el simulador de arriba.'
  },
  {
    id: 'q11',
    s: 'selectiva',
    q: '¿Qué pasa si olvidas el <code>break</code> en un <code>case</code> de un <code>switch</code> clásico?',
    o: [
      'La ejecución continúa con los case siguientes (fall-through)',
      'Error de compilación',
      'Se sale del switch igualmente',
      'Se repite el mismo case'
    ],
    e: 'Con el valor 3 y sin break en los case 3 y 4 se muestran miércoles, jueves y viernes.'
  },
  {
    id: 'q12',
    s: 'selectiva',
    q: '¿Cuándo conviene <code>else if</code> mejor que <code>switch</code>?',
    o: [
      'Para rangos o expresiones lógicas distintas',
      'Para comparar una misma expresión con valores concretos',
      'Nunca, switch siempre es mejor',
      'Solo con números reales'
    ],
    e: '<code>switch</code> es para comparar una expresión con valores concretos; <code>else if</code> para rangos o condiciones distintas.'
  },
  {
    id: 'q13',
    s: 'selectiva',
    q: 'Según los apuntes, ¿qué tipo suele tener la expresión de un <code>switch</code>?',
    o: [
      'Entero (también carácter); los reales normalmente no',
      'Solo números reales',
      'Cualquier expresión lógica',
      'Solo boolean'
    ],
    e: 'Los reales normalmente no se admiten en el switch.'
  },
  {
    id: 'q14',
    s: 'selectiva',
    q: '¿Qué ventaja tiene la sintaxis con flecha (<code>-&gt;</code>) en un <code>switch</code>?',
    o: [
      'No necesita break, así que evita el fall-through',
      'Permite usar reales',
      'Es más rápida',
      'Obliga a poner default'
    ],
    e: 'Además admite varios valores por caso: <code>case 1, 2, 3, 4, 5 -&gt; ...</code>.'
  },

  {
    id: 'q15',
    s: 'bucles',
    q: '¿Qué dos elementos tiene todo bucle?',
    o: ['Cuerpo y condición de salida', 'Contador y acumulador', 'Inicio y fin', 'Cabecera y declaraciones'],
    e: 'El cuerpo son las instrucciones repetidas; la condición de salida es la que detiene la repetición.'
  },
  {
    id: 'q16',
    s: 'bucles',
    q: '¿Qué ocurre con este código?',
    code: 'int cont = 0;\nwhile (cont < 10) {\n    System.out.println(cont);\n}',
    o: [
      'Bucle infinito: cont nunca se modifica',
      'Muestra del 0 al 9',
      'Muestra 10 veces el 0',
      'No muestra nada'
    ],
    e: 'La variable de la condición debe modificarse dentro del bucle. Aquí falta <code>cont++</code>.'
  },
  {
    id: 'q17',
    s: 'bucles',
    q: '¿Qué bucle ejecuta su cuerpo siempre al menos una vez?',
    o: ['do-while', 'while', 'for', 'Ninguno'],
    e: 'En el do-while la condición se evalúa al final.'
  },
  {
    id: 'q18',
    s: 'bucles',
    q: '¿Cuándo se usa <code>for</code> en lugar de <code>while</code>?',
    o: [
      'Cuando se conoce de antemano el número de repeticiones',
      'Cuando se quiere salir con un valor centinela',
      'Cuando se necesita ejecutar el cuerpo al menos una vez',
      'Solo cuando se trabaja con reales'
    ],
    e: 'El for gestiona el contador automáticamente: inicialización, condición e incremento.'
  },
  {
    id: 'q19',
    s: 'bucles',
    q: 'Un acumulador debe...',
    o: [
      'Inicializarse antes del bucle, normalmente a 0',
      'No inicializarse, Java lo pone a 0',
      'Tomar solo dos valores',
      'Llamarse siempre i'
    ],
    e: 'Una variable sin inicializar tiene un valor desconocido. Dentro del bucle se hace <code>acum = acum + n</code>.'
  },
  {
    id: 'q20',
    s: 'bucles',
    q: '¿Cómo se llama la variable que solo toma dos valores y controla la salida del bucle?',
    o: ['Conmutador', 'Acumulador', 'Contador', 'Constante'],
    e: 'Normalmente es booleana, como <code>terminar</code> o <code>acertado</code>.'
  },
  {
    id: 'q21',
    s: 'bucles',
    q: 'Si esa variable toma más de dos valores y uno de ellos termina el bucle, se llama...',
    o: ['Valor centinela', 'Conmutador', 'Acumulador', 'Contador'],
    e: 'Ejemplo: sumar números hasta que el usuario escribe uno negativo. El negativo es el centinela.'
  },
  {
    id: 'q22',
    s: 'bucles',
    q: '¿Cuáles son los tres pasos con un contador?',
    o: [
      'Inicializarlo, modificarlo en el cuerpo y usarlo en la condición de salida',
      'Declararlo, imprimirlo y borrarlo',
      'Solo inicializarlo',
      'Compararlo siempre con =='
    ],
    e: 'Con reales conviene evitar <code>==</code> en las condiciones.'
  },

  {
    id: 'q23',
    s: 'saltos',
    q: 'Según los apuntes, ¿cuál es el único uso habitual de <code>break</code>?',
    o: ['Dentro de un switch', 'Salir de cualquier if', 'Reiniciar un bucle', 'Terminar el main'],
    e: 'Fuera del switch, las instrucciones de salto están prohibidas salvo casos muy justificados.'
  },
  {
    id: 'q24',
    s: 'saltos',
    q: '¿Qué hace <code>continue</code> dentro de un bucle?',
    o: [
      'Salta el resto de la iteración actual y pasa a la siguiente',
      'Sale del bucle',
      'Termina el método',
      'Reinicia el programa'
    ],
    e: 'Si necesitas continue, probablemente el bucle está mal planteado.'
  },
  {
    id: 'q25',
    s: 'saltos',
    q: 'En un método <code>void</code>, <code>return</code>...',
    o: [
      'Se escribe sin valor y termina el método',
      'Debe devolver 0',
      'No se puede usar',
      'Obliga a usar throws'
    ],
    e: '<code>return 5;</code> en un void no compila. Si se invoca desde main, el programa termina.'
  },
  {
    id: 'q26',
    s: 'saltos',
    q: '¿Qué es una cláusula guardián?',
    o: [
      'Una comprobación al inicio de un método que descarta casos no válidos y sale con return',
      'Un bucle que vigila una variable',
      'Un bloque try-catch',
      'Un comentario Javadoc'
    ],
    e: 'Se colocan siempre al inicio del método.'
  },
  {
    id: 'q27',
    s: 'saltos',
    q: '¿Cuál es la principal ventaja de las cláusulas guardián?',
    o: [
      'Evitan el anidamiento excesivo y separan la validación de la lógica principal',
      'Hacen el programa más rápido',
      'Permiten usar goto',
      'Evitan declarar variables'
    ],
    e: 'Se acaba el llamado "código flecha" y cada error se trata junto a la condición que lo provoca.'
  },
  {
    id: 'q28',
    s: 'saltos',
    q: '¿Qué ocurre con este código dentro de un método?',
    code: 'return;\nSystem.out.println("hola");',
    o: [
      'Error de compilación: código inalcanzable',
      'Muestra hola',
      'Muestra hola dos veces',
      'Compila con un aviso'
    ],
    e: 'El código situado después de un return en el mismo bloque es inalcanzable y Java no lo compila.'
  }
];
