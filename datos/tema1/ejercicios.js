/* ============================================================
   Ejercicios de código del Tema 1 (los del curso)
   Cada ejercicio: título, enunciado (task), código inicial (starter), solución, pruebas (tests) y pistas (hints).
   ============================================================ */
var HDR =
  'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n';
var FTR = '    }\n}\n';
var CODEX = [
  {
    id: 'k1',
    s: 'primeros',
    title: 'Tu primer programa: Hola, mundo',
    concept:
      'Todo programa Java vive dentro de una <b>clase</b> y empieza en el método <code>main</code>. <code>System.out.println(...)</code> escribe un texto en la pantalla.',
    task: 'Escribe el programa clásico: dentro de <code>main</code>, muestra exactamente <code>Hola, mundo!</code>',
    starter:
      'public class HolaMundo {\n    public static void main(String[] args) {\n        // escribe aquí tu instrucción\n\n    }\n}\n',
    tests: [{ out: 'Hola, mundo!' }],
    hints: [
      'La instrucción es <code>System.out.println("Hola, mundo!");</code>',
      'No olvides el punto y coma <code>;</code> al final.'
    ],
    solution:
      'public class HolaMundo {\n    public static void main(String[] args) {\n        System.out.println("Hola, mundo!");\n    }\n}\n'
  },
  {
    id: 'k2',
    s: 'primeros',
    title: 'Tres líneas con println',
    concept: 'Cada <code>println</code> escribe y salta de línea. <code>print</code> escribe sin saltar.',
    task: 'Muestra tres líneas: <code>Hola</code>, <code>me llamo Java</code> y <code>encantado</code>.',
    starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
    tests: [{ out: 'Hola\nme llamo Java\nencantado' }],
    hints: ['Tres instrucciones <code>System.out.println("...");</code>, una por línea.'],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hola");\n        System.out.println("me llamo Java");\n        System.out.println("encantado");\n    }\n}\n'
  },
  {
    id: 'k3',
    s: 'primeros',
    title: 'Los tres tipos de comentarios',
    concept:
      'Los comentarios los ignora el compilador: <code>// una línea</code>, <code>/* bloque */</code> y <code>/** Javadoc */</code>.',
    task: 'Haz que el programa muestre <code>Hola</code> y escribe en el código <b>un comentario de línea</b> (<code>//</code>) y <b>un comentario de bloque</b> (<code>/* ... */</code>) que explique para qué sirve el programa.',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hola");\n    }\n}\n',
    rules: [
      { re: /\/\/[^\n]+/, raw: true, msg: 'Tiene un comentario de línea //' },
      { re: /\/\*[\s\S]*?\*\//, raw: true, msg: 'Tiene un comentario de bloque /* */' }
    ],
    tests: [{ out: 'Hola' }],
    hints: [
      '<code>// esto es un comentario</code> y <code>/* esto es otro\nque ocupa varias líneas */</code>'
    ],
    solution:
      '/* Programa de prueba:\n   muestra un saludo */\npublic class Main {\n    public static void main(String[] args) {\n        // Muestra el saludo\n        System.out.println("Hola");\n    }\n}\n'
  },
  {
    id: 'k4',
    s: 'variables',
    title: 'Declarar y asignar variables',
    concept:
      'Una variable es una caja con nombre y tipo. Se <b>declara</b> (<code>int x;</code>) y se <b>asigna</b> (<code>x = 8;</code>).',
    task: 'Reproduce el ejemplo de los apuntes: declara <code>x</code>, <code>y</code>, <code>z</code> (int). Haz <code>x = 8</code>, <code>y = 2</code>, <code>z = x / y</code>, luego <code>x = 5</code> e <code>y = x + z</code>. Muestra x, y y z, cada uno en su línea.',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        int x;\n        int y;\n        int z;\n\n    }\n}\n',
    tests: [{ out: '5\n9\n4' }],
    hints: [
      '<code>x = 8;</code> <code>y = 2;</code> <code>z = x / y;</code> (z vale 4)',
      'Después <code>x = 5;</code> y <code>y = x + z;</code> (y vale 9).'
    ],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        int x;\n        int y;\n        int z;\n        x = 8;\n        y = 2;\n        z = x / y;\n        x = 5;\n        y = x + z;\n        System.out.println(x);\n        System.out.println(y);\n        System.out.println(z);\n    }\n}\n'
  },
  {
    id: 'k5',
    s: 'variables',
    title: 'Una constante con final',
    concept:
      '<code>final</code> convierte una variable en <b>constante</b>: se asigna una sola vez y no puede cambiar. Se escriben en MAYÚSCULAS.',
    task: 'Declara <code>final double PI = 3.141592;</code> y un <code>int radio = 2;</code>. Calcula el área (<code>PI * radio * radio</code>) y muéstrala.',
    starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
    rules: [{ re: /\bfinal\s+double\s+PI\b/, msg: 'Declara la constante con final double PI' }],
    tests: [{ out: '12.566368' }],
    hints: ['<code>final double PI = 3.141592;</code>', '<code>double area = PI * radio * radio;</code>'],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        final double PI = 3.141592;\n        int radio = 2;\n        double area = PI * radio * radio;\n        System.out.println(area);\n    }\n}\n'
  },
  {
    id: 'k6',
    s: 'variables',
    title: 'Intercambia dos variables',
    concept:
      'Para intercambiar dos cajas necesitas una tercera auxiliar, como cuando cambias el agua de dos vasos.',
    task: 'Tienes <code>a = 3</code> y <code>b = 7</code>. Intercámbialos usando una variable auxiliar y muestra <code>a b</code> separados por un espacio (debe salir <code>7 3</code>).',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = 7;\n\n        System.out.println(a + " " + b);\n    }\n}\n',
    tests: [{ out: '7 3' }],
    hints: ['<code>int aux = a;</code> guarda a. Luego <code>a = b;</code> y <code>b = aux;</code>.'],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = 7;\n        int aux = a;\n        a = b;\n        b = aux;\n        System.out.println(a + " " + b);\n    }\n}\n'
  },
  {
    id: 'k7',
    s: 'variables',
    title: 'var: que Java deduzca el tipo',
    concept:
      'Con <code>var</code> Java deduce el tipo a partir del valor. Obliga a dar un valor en la misma línea.',
    task: 'Declara <code>var</code> llamada <code>x</code> con valor 8 y muestra <code>x * 2</code>.',
    starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
    rules: [{ re: /\bvar\s+x\s*=\s*8\s*;/, msg: 'Usa var x = 8;' }],
    tests: [{ out: '16' }],
    hints: ['<code>var x = 8;</code> y luego <code>System.out.println(x * 2);</code>'],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        var x = 8;\n        System.out.println(x * 2);\n    }\n}\n'
  },
  {
    id: 'k8',
    s: 'tipos',
    title: 'Divide con y sin decimales',
    concept:
      'Dos <code>int</code> dan un <code>int</code> (sin decimales). Si un operando es <code>double</code> o <code>float</code>, el resultado tiene decimales.',
    task: 'Muestra, cada uno en su línea: <code>8 / 6</code>, <code>8.0 / 6</code> y <code>8f / 6</code>.',
    starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
    tests: [{ out: '1\n1.3333333333333333\n1.3333334' }],
    hints: [
      '<code>System.out.println(8 / 6);</code> y lo mismo con <code>8.0 / 6</code> y <code>8f / 6</code>.'
    ],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        System.out.println(8 / 6);\n        System.out.println(8.0 / 6);\n        System.out.println(8f / 6);\n    }\n}\n'
  },
  {
    id: 'k9',
    s: 'tipos',
    title: 'Casting a byte: la vuelta del rango',
    concept:
      'Un <code>byte</code> solo llega a 127. Al forzar un número mayor con <code>(byte)</code> el valor «da la vuelta».',
    task: 'Con <code>int numInt = 130;</code> haz <code>byte numByte = (byte) numInt;</code> y muéstralo. Después haz lo mismo con 260 (<code>numInt = 260;</code>) y muéstralo.',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        int numInt = 130;\n\n    }\n}\n',
    tests: [{ out: '-126\n4' }],
    hints: [
      '<code>byte numByte = (byte) numInt;</code>',
      'Para el segundo, reasigna <code>numInt = 260;</code> y vuelve a hacer el casting.'
    ],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        int numInt = 130;\n        byte numByte = (byte) numInt;\n        System.out.println(numByte);\n        numInt = 260;\n        numByte = (byte) numInt;\n        System.out.println(numByte);\n    }\n}\n'
  },
  {
    id: 'k10',
    s: 'tipos',
    title: 'char y boolean',
    concept:
      '<code>char</code> guarda <b>un</b> carácter entre comillas simples. <code>boolean</code> solo vale <code>true</code> o <code>false</code>.',
    task: "Declara <code>char z = 'J';</code> y muéstralo. Después muestra el resultado de <code>5 &lt;= 5</code>, de <code>'a' == 'c'</code> y de <code>35 &gt; 9 &amp;&amp; 5 &lt; 2</code>, cada uno en su línea.",
    starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
    tests: [{ out: 'J\ntrue\nfalse\nfalse' }],
    hints: ["<code>char z = 'J';</code> con comillas simples.", '<code>System.out.println(5 <= 5);</code>'],
    solution:
      "public class Main {\n    public static void main(String[] args) {\n        char z = 'J';\n        System.out.println(z);\n        System.out.println(5 <= 5);\n        System.out.println('a' == 'c');\n        System.out.println(35 > 9 && 5 < 2);\n    }\n}\n"
  },
  {
    id: 'k11',
    s: 'operadores',
    title: 'Las cinco operaciones',
    concept: '<code>+ - * / %</code>. Con enteros, <code>/</code> da el cociente y <code>%</code> el resto.',
    task: 'Con 35 y 9, muestra en líneas distintas: suma, resta, multiplicación, división y módulo.',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        int a = 35;\n        int b = 9;\n\n    }\n}\n',
    tests: [{ out: '44\n26\n315\n3\n8' }],
    hints: [
      '<code>System.out.println(a + b);</code>, luego <code>a - b</code>, <code>a * b</code>, <code>a / b</code>, <code>a % b</code>.'
    ],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        int a = 35;\n        int b = 9;\n        System.out.println(a + b);\n        System.out.println(a - b);\n        System.out.println(a * b);\n        System.out.println(a / b);\n        System.out.println(a % b);\n    }\n}\n'
  },
  {
    id: 'k12',
    s: 'operadores',
    title: 'Pre y post incremento',
    concept:
      '<code>b = a++</code>: primero copia a en b y <b>luego</b> incrementa. <code>b = ++a</code>: <b>primero</b> incrementa y luego copia.',
    task: 'Con <code>int a = 5;</code> haz <code>int b = a++;</code> y muestra <code>a b</code> (con un espacio). Después haz <code>b = ++a;</code> y vuelve a mostrar <code>a b</code>.',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n\n    }\n}\n',
    tests: [{ out: '6 5\n7 7' }],
    hints: ['<code>int b = a++;</code> deja a=6 y b=5.', 'Después <code>b = ++a;</code> deja a=7 y b=7.'],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = a++;\n        System.out.println(a + " " + b);\n        b = ++a;\n        System.out.println(a + " " + b);\n    }\n}\n'
  },
  {
    id: 'k13',
    s: 'operadores',
    title: 'Asignación compuesta',
    concept:
      '<code>x += n</code> es lo mismo que <code>x = x + n</code>. Igual con <code>-=</code>, <code>*=</code>, <code>/=</code>.',
    task: 'Con <code>int x = 10;</code> aplica en orden <code>+= 5</code>, <code>-= 3</code>, <code>*= 2</code> y <code>/= 4</code>, mostrando x tras cada operación (4 líneas).',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n\n    }\n}\n',
    tests: [{ out: '15\n12\n24\n6' }],
    hints: ['<code>x += 5;</code> <code>System.out.println(x);</code> y así con cada una.'],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        x += 5;\n        System.out.println(x);\n        x -= 3;\n        System.out.println(x);\n        x *= 2;\n        System.out.println(x);\n        x /= 4;\n        System.out.println(x);\n    }\n}\n'
  },
  {
    id: 'k14',
    s: 'operadores',
    title: 'Prioridad y paréntesis',
    concept:
      'Primero <code>* / %</code>, luego <code>+ -</code>, luego comparaciones. Los paréntesis mandan sobre todo.',
    task: 'Muestra en líneas distintas: <code>6 + 4 / 2</code>, <code>(6 + 4) / 2</code>, <code>(33 + 3 * 4) / 5</code> y <code>5 + 3 &lt; 2 + 9</code>.',
    starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
    tests: [{ out: '8\n5\n9\ntrue' }],
    hints: ['Escribe cada expresión dentro de un <code>println</code>.'],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        System.out.println(6 + 4 / 2);\n        System.out.println((6 + 4) / 2);\n        System.out.println((33 + 3 * 4) / 5);\n        System.out.println(5 + 3 < 2 + 9);\n    }\n}\n'
  },
  {
    id: 'k15',
    s: 'operadores',
    title: 'La clase Math',
    concept:
      '<code>Math.pow</code>, <code>Math.sqrt</code>, <code>Math.abs</code>, <code>Math.round</code>… son operaciones avanzadas ya hechas.',
    task: 'Muestra en líneas distintas: <code>Math.pow(2, 6)</code>, <code>Math.sqrt(64)</code>, <code>Math.abs(-5)</code> y <code>Math.round(5.7)</code>. Fíjate en cómo los escribe Java.',
    starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
    tests: [{ out: '64.0\n8.0\n5\n6' }],
    hints: [
      '<code>Math.pow</code> y <code>Math.sqrt</code> devuelven <code>double</code>, por eso salen con <code>.0</code>.'
    ],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        System.out.println(Math.pow(2, 6));\n        System.out.println(Math.sqrt(64));\n        System.out.println(Math.abs(-5));\n        System.out.println(Math.round(5.7));\n    }\n}\n'
  },
  {
    id: 'k16',
    s: 'operadores',
    title: 'Operadores lógicos',
    concept:
      '<code>&&</code> (y), <code>||</code> (o), <code>!</code> (no) y <code>^</code> (XOR: cierto si son distintos).',
    task: 'Con <code>boolean a = true;</code> y <code>boolean b = false;</code> muestra: <code>a &amp;&amp; b</code>, <code>a || b</code>, <code>!a</code> y <code>a ^ b</code>.',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        boolean a = true;\n        boolean b = false;\n\n    }\n}\n',
    tests: [{ out: 'false\ntrue\nfalse\ntrue' }],
    hints: ['<code>&&</code> es cierto solo si ambos lo son; <code>^</code> es cierto si son distintos.'],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        boolean a = true;\n        boolean b = false;\n        System.out.println(a && b);\n        System.out.println(a || b);\n        System.out.println(!a);\n        System.out.println(a ^ b);\n    }\n}\n'
  },
  {
    id: 'k17',
    s: 'es',
    title: 'Saluda al usuario (Scanner)',
    concept:
      'Para leer del teclado: <code>import java.util.Scanner;</code>, <code>new Scanner(System.in)</code> y <code>nextLine()</code> para leer una línea de texto.',
    task: 'Lee un nombre con <code>nextLine()</code> y muestra <code>Hola, </code> + nombre + <code>!</code> (por ejemplo <code>Hola, Ana!</code>).',
    stdin: 'Ana',
    starter: HDR + '\n' + FTR,
    tests: [
      { input: 'Ana', out: 'Hola, Ana!' },
      { input: 'Luis Pérez', out: 'Hola, Luis Pérez!' }
    ],
    hints: [
      '<code>String nombre = teclado.nextLine();</code>',
      '<code>System.out.println("Hola, " + nombre + "!");</code>'
    ],
    solution:
      HDR +
      '        String nombre = teclado.nextLine();\n        System.out.println("Hola, " + nombre + "!");\n' +
      FTR
  },
  {
    id: 'k18',
    s: 'es',
    title: 'Suma dos enteros',
    concept: '<code>nextInt()</code> lee un entero. Cada valor va separado por Enter (o espacio).',
    task: 'Lee dos enteros y muestra su suma.',
    stdin: '4\n9',
    starter: HDR + '\n' + FTR,
    tests: [
      { input: '4\n9', out: '13' },
      { input: '-3\n10', out: '7' }
    ],
    hints: ['<code>int a = teclado.nextInt();</code> y lo mismo para b.'],
    solution:
      HDR +
      '        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        System.out.println(a + b);\n' +
      FTR
  },
  {
    id: 'k19',
    s: 'es',
    title: 'El ticket de compra',
    concept:
      'El ejemplo de los apuntes: producto con <code>nextLine()</code>, precio con <code>nextDouble()</code> y cantidad con <code>nextInt()</code>.',
    task: 'Lee en este orden: producto (nextLine), precio (nextDouble), cantidad (nextInt). Muestra dos líneas: <code>Producto: ...</code> y <code>Total: ...</code> (precio × cantidad).',
    stdin: 'Cafe\n1.5\n4',
    starter: HDR + '\n' + FTR,
    tests: [
      { input: 'Cafe\n1.5\n4', out: 'Producto: Cafe\nTotal: 6.0' },
      { input: 'Pan\n0.8\n5', out: 'Producto: Pan\nTotal: 4.0' }
    ],
    hints: [
      'Respeta el orden de lectura: nextLine, nextDouble, nextInt.',
      '<code>double total = precio * cantidad;</code>'
    ],
    solution:
      HDR +
      '        String producto = teclado.nextLine();\n        double precio = teclado.nextDouble();\n        int cantidad = teclado.nextInt();\n        double total = precio * cantidad;\n        System.out.println("Producto: " + producto);\n        System.out.println("Total: " + total);\n' +
      FTR
  },
  {
    id: 'k20',
    s: 'es',
    title: 'Área de un rectángulo',
    concept: 'Con <code>nextDouble()</code> se leen números con decimales.',
    task: 'Lee base y altura (double) y muestra el área.',
    stdin: '3.5\n2',
    starter: HDR + '\n' + FTR,
    tests: [
      { input: '3.5\n2', out: '7.0' },
      { input: '4\n2.5', out: '10.0' }
    ],
    hints: ['<code>double area = base * altura;</code>'],
    solution:
      HDR +
      '        double base = teclado.nextDouble();\n        double altura = teclado.nextDouble();\n        System.out.println(base * altura);\n' +
      FTR
  },
  {
    id: 'k21',
    s: 'es',
    title: 'Media de tres notas',
    concept:
      'Cuidado: dividir entre enteros pierde los decimales. Un <code>double</code> en la operación lo evita.',
    task: 'Lee tres enteros (notas) y muestra su media con decimales. Por ejemplo 7, 8, 8 → <code>7.666666666666667</code>.',
    stdin: '7\n8\n8',
    starter: HDR + '\n' + FTR,
    tests: [
      { input: '7\n8\n8', out: '7.666666666666667' },
      { input: '5\n5\n5', out: '5.0' },
      { input: '10\n9\n10', out: '9.666666666666666' }
    ],
    hints: ['<code>(a + b + c) / 3</code> con enteros pierde decimales. Divide entre <code>3.0</code>.'],
    solution:
      HDR +
      '        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        int c = teclado.nextInt();\n        double media = (a + b + c) / 3.0;\n        System.out.println(media);\n' +
      FTR
  }
];
var CODEEXAM = [
  {
    id: 'y1',
    s: 'operadores',
    task: 'Lee una temperatura en grados Fahrenheit (double) y muestra su valor en Celsius: <code>(F - 32) * 5 / 9</code>.',
    stdin: '212',
    starter: HDR + '\n' + FTR,
    tests: [
      { input: '212', out: '100.0' },
      { input: '32', out: '0.0' },
      { input: '50', out: '10.0' }
    ],
    solution:
      HDR +
      '        double f = teclado.nextDouble();\n        double c = (f - 32) * 5 / 9;\n        System.out.println(c);\n' +
      FTR
  },
  {
    id: 'y2',
    s: 'variables',
    task: 'Declara <code>final double PI = 3.141592;</code>. Lee el radio (int) y muestra la longitud de la circunferencia: <code>2 * PI * radio</code>.',
    stdin: '2',
    starter: HDR + '\n' + FTR,
    rules: [{ re: /\bfinal\b/, msg: 'Usa una constante final' }],
    tests: [
      { input: '2', out: '12.566368' },
      { input: '5', out: '31.41592' },
      { input: '1', out: '6.283184' }
    ],
    solution:
      HDR +
      '        final double PI = 3.141592;\n        int radio = teclado.nextInt();\n        System.out.println(2 * PI * radio);\n' +
      FTR
  },
  {
    id: 'y3',
    s: 'variables',
    task: 'Lee dos enteros a y b. Intercámbialos con una variable auxiliar y muestra <code>a b</code> separados por un espacio.',
    stdin: '3\n7',
    starter: HDR + '\n' + FTR,
    tests: [
      { input: '3\n7', out: '7 3' },
      { input: '-1\n20', out: '20 -1' }
    ],
    solution:
      HDR +
      '        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        int aux = a;\n        a = b;\n        b = aux;\n        System.out.println(a + " " + b);\n' +
      FTR
  },
  {
    id: 'y4',
    s: 'operadores',
    task: 'Lee dos enteros. Muestra en dos líneas el cociente (<code>Cociente: ...</code>) y el resto (<code>Resto: ...</code>) de dividir el primero entre el segundo.',
    stdin: '35\n9',
    starter: HDR + '\n' + FTR,
    tests: [
      { input: '35\n9', out: 'Cociente: 3\nResto: 8' },
      { input: '20\n5', out: 'Cociente: 4\nResto: 0' }
    ],
    solution:
      HDR +
      '        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        System.out.println("Cociente: " + a / b);\n        System.out.println("Resto: " + a % b);\n' +
      FTR
  },
  {
    id: 'y5',
    s: 'tipos',
    task: 'Lee un número entero y muestra el resultado de convertirlo a <code>byte</code> con un casting.',
    stdin: '130',
    starter: HDR + '\n' + FTR,
    tests: [
      { input: '130', out: '-126' },
      { input: '260', out: '4' },
      { input: '100', out: '100' },
      { input: '128', out: '-128' }
    ],
    solution:
      HDR +
      '        int n = teclado.nextInt();\n        byte b = (byte) n;\n        System.out.println(b);\n' +
      FTR
  },
  {
    id: 'y6',
    s: 'operadores',
    task: 'Lee un total de segundos (int) y muestra el tiempo en el formato <code>H h M m S s</code> (por ejemplo, 3725 → <code>1 h 2 m 5 s</code>).',
    stdin: '3725',
    starter: HDR + '\n' + FTR,
    tests: [
      { input: '3725', out: '1 h 2 m 5 s' },
      { input: '59', out: '0 h 0 m 59 s' },
      { input: '7200', out: '2 h 0 m 0 s' }
    ],
    solution:
      HDR +
      '        int total = teclado.nextInt();\n        int h = total / 3600;\n        int m = total % 3600 / 60;\n        int s = total % 60;\n        System.out.println(h + " h " + m + " m " + s + " s");\n' +
      FTR
  },
  {
    id: 'y7',
    s: 'operadores',
    task: 'Lee un número de dos cifras (10 a 99) y muestra la suma de sus cifras (por ejemplo 47 → 11). Pista: usa <code>/ 10</code> y <code>% 10</code>.',
    stdin: '47',
    starter: HDR + '\n' + FTR,
    tests: [
      { input: '47', out: '11' },
      { input: '10', out: '1' },
      { input: '99', out: '18' }
    ],
    solution: HDR + '        int n = teclado.nextInt();\n        System.out.println(n / 10 + n % 10);\n' + FTR
  },
  {
    id: 'y8',
    s: 'es',
    task: 'Lee el precio de un producto (double) y el IVA como porcentaje entero (int). Muestra el precio final: <code>precio + precio * iva / 100</code>.',
    stdin: '100\n21',
    starter: HDR + '\n' + FTR,
    tests: [
      { input: '100\n21', out: '121.0' },
      { input: '50\n10', out: '55.0' },
      { input: '200\n0', out: '200.0' }
    ],
    solution:
      HDR +
      '        double precio = teclado.nextDouble();\n        int iva = teclado.nextInt();\n        System.out.println(precio + precio * iva / 100);\n' +
      FTR
  },
  {
    id: 'y9',
    s: 'operadores',
    task: 'Lee tres enteros y muestra el mayor de los tres usando <code>Math.max</code>.',
    stdin: '4\n9\n2',
    starter: HDR + '\n' + FTR,
    tests: [
      { input: '4\n9\n2', out: '9' },
      { input: '-5\n-2\n-9', out: '-2' },
      { input: '7\n7\n7', out: '7' }
    ],
    solution:
      HDR +
      '        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        int c = teclado.nextInt();\n        System.out.println(Math.max(a, Math.max(b, c)));\n' +
      FTR
  },
  {
    id: 'y10',
    s: 'operadores',
    task: 'Lee un entero y muestra <code>true</code> si es múltiplo de 5 y mayor que 10, y <code>false</code> en caso contrario (una sola expresión booleana).',
    stdin: '15',
    starter: HDR + '\n' + FTR,
    tests: [
      { input: '15', out: 'true' },
      { input: '10', out: 'false' },
      { input: '7', out: 'false' },
      { input: '20', out: 'true' }
    ],
    solution:
      HDR + '        int n = teclado.nextInt();\n        System.out.println(n % 5 == 0 && n > 10);\n' + FTR
  }
];
CODEX.push({
  id: 'final1',
  s: 'final',
  title: 'Reto final: la factura de la tienda',
  concept:
    'Último ejercicio del Tema 1. Es como una pregunta de examen: no te digo qué instrucciones usar, tienes que combinar lo que has visto: <b>variables y tipos</b>, <b>constantes</b>, <b>operadores</b>, <b>Math</b>, <b>Scanner</b> y <b>println</b>.',
  task: 'Haz un programa que lea, <b>en este orden</b>: el nombre del cliente (<code>String</code>, con <code>nextLine()</code>), las unidades compradas (<code>int</code>), el precio por unidad (<code>double</code>) y el número de personas que pagan a medias (<code>int</code>).<br>El IVA es una <b>constante</b> del 21 (declárala con <code>final</code>).<br>Muestra exactamente estas cinco líneas:<pre>Cliente: &lt;nombre&gt;\nSubtotal: &lt;unidades * precio&gt;\nIVA (21%): &lt;subtotal * IVA / 100&gt;\nTotal: &lt;subtotal + IVA&gt;\nCada persona paga: &lt;total / personas&gt;</pre>Los números se escriben tal cual los calcula Java (por ejemplo <code>25.0</code>).',
  stdin: 'Ana\n5\n5.0\n2',
  starter: HDR + '        // Reto final: escribe aquí tu programa\n\n' + FTR,
  rules: [
    { re: /\bfinal\s+(int|double)\s+\w+\s*=/, msg: 'Declara el IVA como constante con final' },
    { re: /\.nextLine\s*\(\s*\)/, msg: 'Lee el nombre con nextLine()' },
    { re: /\.nextDouble\s*\(\s*\)/, msg: 'Lee el precio con nextDouble()' },
    { re: /\bdouble\b/, msg: 'Usa variables double para los importes' },
    { re: /"Cliente: "\s*\+/, msg: 'Escribe «Cliente: » concatenado con el nombre' }
  ],
  tests: [
    {
      input: 'Ana\n5\n5.0\n2',
      out: 'Cliente: Ana\nSubtotal: 25.0\nIVA (21%): 5.25\nTotal: 30.25\nCada persona paga: 15.125'
    },
    {
      input: 'Luis\n4\n2.5\n4',
      out: 'Cliente: Luis\nSubtotal: 10.0\nIVA (21%): 2.1\nTotal: 12.1\nCada persona paga: 3.025'
    },
    {
      input: 'Marta\n10\n10.0\n1',
      out: 'Cliente: Marta\nSubtotal: 100.0\nIVA (21%): 21.0\nTotal: 121.0\nCada persona paga: 121.0'
    }
  ],
  hints: [],
  solution:
    HDR +
    '        final int IVA = 21;\n        String nombre = teclado.nextLine();\n        int unidades = teclado.nextInt();\n        double precio = teclado.nextDouble();\n        int personas = teclado.nextInt();\n        double subtotal = unidades * precio;\n        double iva = subtotal * IVA / 100;\n        double total = subtotal + iva;\n        System.out.println("Cliente: " + nombre);\n        System.out.println("Subtotal: " + subtotal);\n        System.out.println("IVA (21%): " + iva);\n        System.out.println("Total: " + total);\n        System.out.println("Cada persona paga: " + total / personas);\n' +
    FTR
});
if (false && typeof module !== 'undefined') module.exports = { CODEX: CODEX, CODEEXAM: CODEEXAM };
