/* ============================================================
   Ejercicios "Corrige el código" del Tema 1
   Uno por apartado: el código inicial tiene un fallo que hay que arreglar.
   ============================================================ */
/* generado por dam/gen/fix.js */
var FIX1 = [
  {
    id: 'fx-primeros',
    s: 'primeros',
    title: '🔧 Corrige: Hola mundo',
    concept:
      'Cada instrucción termina en <code>;</code> y los nombres de los métodos se escriben exactamente igual: <code>println</code>.',
    task: '<b>Este código tiene un fallo.</b> Debe mostrar <code>Hola, mundo</code> y debajo <code>Soy un programa en Java</code>. Pulsa <b>Ejecutar</b>, mira qué sale, encuentra el error y corrígelo. No lo reescribas entero: arregla solo lo que falla.',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        System.out.printn("Hola, mundo")\n        System.out.println("Soy un programa en Java");\n    }\n}\n',
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hola, mundo");\n        System.out.println("Soy un programa en Java");\n    }\n}\n',
    hints: [
      'El compilador te señala dos líneas con problemas. Empieza por la primera que marca.',
      'Una de las líneas no acaba como debe acabar una instrucción de Java.',
      'El método se llama <code>println</code> (con <b>l</b>) y la línea necesita su punto y coma.'
    ],
    notes:
      '<p>Dos fallos típicos: el nombre del método mal escrito (<code>printn</code>) y el <code>;</code> que falta al final. Java distingue cada letra.</p>',
    kind: 'code',
    tests: [{ input: '', out: 'Hola, mundo\nSoy un programa en Java' }],
    stdin: ''
  },
  {
    id: 'fx-tipos',
    s: 'tipos',
    title: '🔧 Corrige: Media de dos notas',
    concept:
      'Dos <code>int</code> dan un <code>int</code> al dividir: se pierden los decimales aunque guardes el resultado en un <code>double</code>.',
    task: '<b>Este código tiene un fallo.</b> Lee dos notas enteras y muestra su media. Con 7 y 2 debe mostrar <code>4.5</code>, pero muestra <code>4.0</code>. Pulsa <b>Ejecutar</b>, mira qué sale, encuentra el error y corrígelo. No lo reescribas entero: arregla solo lo que falla.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        double media = (a + b) / 2;\n        System.out.println(media);\n    }\n}\n',
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        double media = (a + b) / 2.0;\n        System.out.println(media);\n    }\n}\n',
    hints: [
      'Mira de qué tipo son los dos números que se dividen.',
      'La división se hace <b>antes</b> de guardarla en el <code>double</code>.',
      'Si uno de los operandos es <code>double</code> (por ejemplo <code>2.0</code>), el resultado también lo es.'
    ],
    notes:
      '<p><code>(a + b) / 2</code> es una división entre dos <code>int</code>: el resultado ya no tiene decimales. Con <code>2.0</code> la división es decimal.</p>',
    kind: 'code',
    tests: [
      { input: '7\n2', out: '4.5' },
      { input: '10\n4', out: '7.0' },
      { input: '3\n3', out: '3.0' }
    ],
    stdin: '7\n2'
  },
  {
    id: 'fx-operadores',
    s: 'operadores',
    title: '🔧 Corrige: Media de tres números',
    concept: 'La división y la multiplicación se hacen antes que la suma. Los paréntesis cambian el orden.',
    task: '<b>Este código tiene un fallo.</b> Lee tres enteros y muestra su media. Con 6, 9 y 12 debe mostrar <code>9.0</code>. Pulsa <b>Ejecutar</b>, mira qué sale, encuentra el error y corrígelo. No lo reescribas entero: arregla solo lo que falla.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        int c = teclado.nextInt();\n        double media = a + b + c / 3.0;\n        System.out.println(media);\n    }\n}\n',
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        int c = teclado.nextInt();\n        double media = (a + b + c) / 3.0;\n        System.out.println(media);\n    }\n}\n',
    hints: [
      'Calcula a mano qué hace Java con <code>a + b + c / 3.0</code> usando 6, 9 y 12.',
      '¿Qué operación se hace primero, la suma o la división?',
      'Necesitas que la suma de los tres se haga antes de dividir.'
    ],
    notes:
      '<p>La precedencia hace <code>c / 3.0</code> primero y después suma <code>a + b</code>. Con <code>(a + b + c) / 3.0</code> sumas los tres y luego divides.</p>',
    kind: 'code',
    tests: [
      { input: '6\n9\n12', out: '9.0' },
      { input: '1\n2\n2', out: '1.6666666666666667' },
      { input: '10\n10\n10', out: '10.0' }
    ],
    stdin: '6\n9\n12'
  },
  {
    id: 'fx-variables',
    s: 'variables',
    title: '🔧 Corrige: Intercambiar dos variables',
    concept:
      'Una asignación <b>borra</b> el valor anterior de la variable. Para intercambiar dos valores necesitas guardar uno aparte.',
    task: '<b>Este código tiene un fallo.</b> Lee <code>a</code> y <code>b</code> e intercámbialos. Con 3 y 5 debe mostrar <code>a=5 b=3</code>. Pulsa <b>Ejecutar</b>, mira qué sale, encuentra el error y corrígelo. No lo reescribas entero: arregla solo lo que falla.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        a = b;\n        b = a;\n        System.out.println("a=" + a + " b=" + b);\n    }\n}\n',
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        int aux = a;\n        a = b;\n        b = aux;\n        System.out.println("a=" + a + " b=" + b);\n    }\n}\n',
    hints: [
      'Después de <code>a = b;</code>, ¿cuánto vale <code>a</code>? ¿Y el valor original de <code>a</code>?',
      'Se pierde el valor original de <code>a</code> al sobrescribirlo.',
      'Guarda <code>a</code> en una variable auxiliar antes de cambiarlo.'
    ],
    notes:
      '<p>Con <code>a = b; b = a;</code> las dos acaban valiendo lo mismo. Con una variable auxiliar (<code>aux</code>) conservas el valor original.</p>',
    kind: 'code',
    tests: [
      { input: '3\n5', out: 'a=5 b=3' },
      { input: '10\n-2', out: 'a=-2 b=10' },
      { input: '7\n7', out: 'a=7 b=7' }
    ],
    stdin: '3\n5'
  },
  {
    id: 'fx-es',
    s: 'es',
    title: '🔧 Corrige: Edad el año que viene',
    concept:
      'En una concatenación con <code>+</code>, Java va de izquierda a derecha: una vez que hay un texto, lo que sigue se pega como texto.',
    task: '<b>Este código tiene un fallo.</b> Lee un nombre y una edad y muestra <code>Hola Ana, el año que viene tendrás 21 años</code>. Con 20 muestra <code>201</code> en vez de <code>21</code>. Pulsa <b>Ejecutar</b>, mira qué sale, encuentra el error y corrígelo. No lo reescribas entero: arregla solo lo que falla.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        String nombre = teclado.next();\n        int edad = teclado.nextInt();\n        System.out.println("Hola " + nombre + ", el año que viene tendrás " + edad + 1 + " años");\n    }\n}\n',
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        String nombre = teclado.next();\n        int edad = teclado.nextInt();\n        System.out.println("Hola " + nombre + ", el año que viene tendrás " + (edad + 1) + " años");\n    }\n}\n',
    hints: [
      'Fíjate en qué se pega primero: <code>edad</code> y luego <code>1</code>… ¿como números o como texto?',
      'Ya hay un texto a la izquierda, así que <code>+ edad + 1</code> pega «20» y después «1».',
      'Pon la suma entre paréntesis para que se haga antes de pegarla al texto.'
    ],
    notes:
      '<p>Sin paréntesis, <code>"…" + edad + 1</code> concatena dos veces: «…20» y luego «1». Con <code>(edad + 1)</code> se suma primero.</p>',
    kind: 'code',
    tests: [
      { input: 'Ana\n20', out: 'Hola Ana, el año que viene tendrás 21 años' },
      { input: 'Luis\n17', out: 'Hola Luis, el año que viene tendrás 18 años' },
      { input: 'Marta\n0', out: 'Hola Marta, el año que viene tendrás 1 años' }
    ],
    stdin: 'Ana\n20'
  }
];
FIX1.forEach(function (f) {
  CODEX.push(f);
});
