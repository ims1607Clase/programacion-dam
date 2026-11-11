/* ============================================================
   Relación de ejercicios del profesor (Tema 1)
   Enunciado, solución y corrección de cada ejercicio de la relación. Se hacen en NetBeans; aquí solo se muestra la corrección.
   ============================================================ */
/* generado por dam/gen */
var PROF1 = [
  {
    id: 'p0',
    t: '0. Entorno y primer programa',
    items: [
      {
        id: 't1-0-1',
        title: 'Instalación del JDK',
        src: '0. Entorno y primer programa · Ejercicio 1 · RA 1 · CE c)',
        task: 'Descarga e instala el JDK (Oracle o Adoptium). Comprueba el <code>PATH</code> (y <code>JAVA_HOME</code> si hace falta) y la versión con <code>java -version</code>. Explica el proceso con pantallazos.',
        ph: 'Escribe aquí los pasos que has seguido…',
        ans: '<p>Esto no se puede corregir con código: lo entregas en un documento con pantallazos. Una respuesta completa debe tener estas partes:</p><ol><li><b>Descarga e instalación</b> del JDK (web de Oracle o de Adoptium) y el instalador siguiendo los pasos.</li><li><b>Variable PATH</b>: debe incluir la carpeta <code>bin</code> del JDK (donde están <code>java</code> y <code>javac</code>). Si hace falta, <code>JAVA_HOME</code> apunta a la carpeta del JDK.</li><li><b>Comprobación</b>: en la consola escribes <code>java -version</code> y debe salir la versión instalada. Haz también <code>javac -version</code> para ver que el compilador está.</li><li><b>Pantallazos</b> de cada paso, donde se vea que eres tú (por ejemplo, con Moodle abierto detrás).</li></ol>',
        kind: 'qa'
      },
      {
        id: 't1-0-2',
        title: 'Hola, mundo',
        src: '0. Entorno y primer programa · Ejercicio 2 · RA 1 · CE a), i)',
        task: 'Teclea el programa «Hola, mundo» con la clase <code>Holamundo</code>, con un comentario de línea <code>// Programa holamundo</code> y un comentario de bloque que explique que solo muestra un saludo. Debe mostrar <code>Hola, mundo!</code>.<br>Después, en tu ordenador: guárdalo como <code>Holamundo.java</code>, compílalo con <code>javac Holamundo.java</code> (¿qué ha aparecido en la carpeta?) y ejecútalo con <code>java Holamundo</code>.',
        starter: 'public class Holamundo {\n\n}\n',
        rules: [
          {
            re: /public\s+class\s+Holamundo/,
            msg: 'La clase se llama Holamundo'
          },
          {
            re: /\/\/[^\n]+/,
            raw: true,
            msg: 'Tiene un comentario de línea //'
          },
          {
            re: /\/\*[\s\S]*?\*\//,
            raw: true,
            msg: 'Tiene un comentario de bloque /* */'
          }
        ],
        solution:
          'public class Holamundo {\n    // Programa holamundo\n    public static void main(String[] args) {\n        /*\n        Lo único que hace este programa es mostrar un\n        saludo por la pantalla\n        */\n        System.out.println("Hola, mundo!");\n    }\n}\n',
        notes:
          '<p>Tras compilar con <code>javac</code> aparece un fichero nuevo, <code>Holamundo.class</code>: es el <b>bytecode</b> que ejecuta la máquina virtual con <code>java Holamundo</code>. Si da error, desde Java 11 puedes hacer <code>java Holamundo.java</code>, que compila en memoria y ejecuta sin crear el .class.</p><p>Tipos de comentario: <code>//</code> es de una línea; <code>/* ... */</code> es de bloque; <code>/** ... */</code> es de documentación (Javadoc).</p>',
        s: 'prof',
        tests: [
          {
            input: '',
            out: 'Hola, mundo!'
          }
        ],
        kind: 'code'
      },
      {
        id: 't1-0-3',
        title: 'Comenta tu código',
        src: '0. Entorno y primer programa · Ejercicio 3 · RA 1 · CE i)',
        task: '1) En Holamundo, ¿qué tipo es cada comentario? 2) Añade antes de la clase un comentario Javadoc con <code>@author</code> y <code>@version</code>. 3) Genera la documentación con <code>javadoc -d doc Holamundo.java</code>: ¿dónde aparece tu comentario? 5) Mejora estos comentarios:<pre>int edad = 17;      // declara edad y le asigna 17\nint mayoria = 18;   // declara mayoria y le asigna 18\nint faltan = mayoria - edad;   // resta</pre>',
        ans: '<ol><li><code>// Programa holamundo</code> → de <b>una línea</b>. El bloque <code>/* ... */</code> → de <b>bloque</b>. No hay ninguno de documentación en el original.</li><li>Javadoc (empieza por <code>/**</code>):<pre data-hl>/**\n * Programa que muestra un saludo por pantalla.\n * @author Tu nombre\n * @version 1.0\n */\npublic class Holamundo {</pre></li><li>En <code>doc/index.html</code> tu comentario aparece como <b>descripción de la clase Holamundo</b>, con autor y versión (según las opciones del javadoc).</li><li>(Está en el siguiente ejercicio.)</li><li>Los comentarios que solo repiten el código no aportan. Mejor explicar el <b>porqué</b>:<pre data-hl>int edad = 17;\nint mayoria = 18;   // edad legal en España para votar y conducir\nint faltan = mayoria - edad;   // años que quedan para ser mayor de edad</pre></li></ol>',
        kind: 'qa'
      },
      {
        id: 't1-0-4',
        title: '¿Compila este comentario?',
        src: '0. Entorno y primer programa · Ejercicio 3.4 · RA 1 · CE i)',
        task: '¿Compila este programa? Pulsa Ejecutar y lee el error. Corrígelo para que muestre <code>Hola</code>. (Pista de teoría: los comentarios de bloque <b>no se pueden anidar</b>.)',
        starter:
          'public class Saludo {\n    /* Este programa saluda\n        /* (versión de prueba) */\n        al usuario */\n    public static void main(String[] args) {\n        System.out.println("Hola"); // saludo inicial\n    }\n}\n',
        solution:
          'public class Saludo {\n    /* Este programa saluda\n       (versión de prueba)\n       al usuario */\n    public static void main(String[] args) {\n        System.out.println("Hola"); // saludo inicial\n    }\n}\n',
        notes:
          '<p>El comentario de bloque termina en el <b>primer</b> <code>*/</code> que encuentra, no en el que tú crees. Así, <code>al usuario */</code> queda fuera del comentario y el compilador lo ve como código mal escrito. Solución: no anidar comentarios de bloque (quita el interior o usa <code>//</code>).</p>',
        s: 'prof',
        tests: [
          {
            input: '',
            out: 'Hola'
          }
        ],
        kind: 'code'
      }
    ]
  },
  {
    id: 'p1',
    t: '1. Tipos de datos',
    items: [
      {
        id: 't1-1-1',
        title: '¿A qué tipo pertenece cada dato?',
        src: '1. Tipos de datos · Ejercicio 1 · RA 1 · CE d), f)',
        task: '¿A qué tipo pertenecen los siguientes datos? <b>1)</b> <code>0</code> <b>2)</b> <code>-90.234</code> <b>3)</b> <code>-90</code> <b>4)</b> <code>-90.0</code> <b>5)</b> <code>\'A\'</code> <b>6)</b> <code>"Almería"</code> <b>7)</b> <code>falso</code> <b>8)</b> <code>"falso"</code> <b>9)</b> <code>"-90"</code>',
        ph: '1) …\n2) …',
        ans: '<table class="keys"><tr><td>1) <code>0</code></td><td><b>int</b> (entero)</td></tr><tr><td>2) <code>-90.234</code></td><td><b>double</b> (real)</td></tr><tr><td>3) <code>-90</code></td><td><b>int</b></td></tr><tr><td>4) <code>-90.0</code></td><td><b>double</b> (lleva punto decimal, aunque sea .0)</td></tr><tr><td>5) <code>\'A\'</code></td><td><b>char</b> (un carácter entre comillas simples)</td></tr><tr><td>6) <code>"Almería"</code></td><td><b>String</b> (texto entre comillas dobles)</td></tr><tr><td>7) <code>falso</code></td><td>No es un dato válido de Java: sin comillas sería un identificador. El literal lógico es <code>false</code>, de tipo <b>boolean</b>.</td></tr><tr><td>8) <code>"falso"</code></td><td><b>String</b> (está entre comillas)</td></tr><tr><td>9) <code>"-90"</code></td><td><b>String</b> (aunque parezca un número, está entre comillas)</td></tr></table>',
        kind: 'qa'
      },
      {
        id: 't1-1-2',
        title: 'Identificadores de variable',
        src: '1. Tipos de datos · Ejercicio 2 · RA 1 · CE d), e)',
        task: "¿Cuáles de estos identificadores no son correctos y por qué? <b>1)</b> <code>XYZ</code> <b>2)</b> <code>_xyz</code> <b>3)</b> <code>'valor'</code> <b>4)</b> <code>56vértice</code> <b>5)</b> <code>indice28</code> <b>6)</b> <code>año</code> <b>7)</b> <code>año&amp;actual</code> <b>8)</b> <code>año_actual</code> <b>9)</b> <code>ZZZZ</code>",
        ans: "<p><b>Incorrectos:</b></p><ul><li><b>3) <code>'valor'</code></b>: las comillas no son válidas en un identificador.</li><li><b>4) <code>56vértice</code></b>: no puede empezar por un número.</li><li><b>7) <code>año&amp;actual</code></b>: el símbolo <code>&amp;</code> no está permitido (solo letras, dígitos, <code>_</code> y <code>$</code>).</li></ul><p><b>Correctos:</b> 1, 2 (puede empezar por <code>_</code>), 5 (los números pueden ir después), 8 y 9. El 6 (<code>año</code>) Java lo admite porque la <code>ñ</code> es una letra, pero conviene evitar ñ y tildes en los nombres.</p>",
        kind: 'qa'
      },
      {
        id: 't1-1-3',
        title: 'Intercambio de valores',
        src: '1. Tipos de datos · Ejercicio 3 · RA 1 · CE e)',
        task: 'Tienes dos variables <code>a</code> y <code>b</code>. Escribe las asignaciones necesarias para <b>intercambiar sus valores</b>, sean cuales sean. El programa lee <code>a</code> y <code>b</code>, las intercambia y muestra <code>a</code> y después <code>b</code>, cada una en su línea.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        // intercambia aquí a y b\n\n        System.out.println(a);\n        System.out.println(b);\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        int aux = a;\n        a = b;\n        b = aux;\n        System.out.println(a);\n        System.out.println(b);\n    }\n}\n',
        notes:
          '<p>Si haces <code>a = b; b = a;</code> pierdes el valor original de <code>a</code>. Hace falta una variable auxiliar (<code>aux</code>) que guarde uno de los valores mientras lo sobrescribes.</p>',
        s: 'prof',
        tests: [
          {
            input: '3\n8',
            out: '8\n3'
          },
          {
            input: '-5\n5',
            out: '5\n-5'
          },
          {
            input: '7\n7',
            out: '7\n7'
          }
        ],
        stdin: '3\n8',
        kind: 'code'
      },
      {
        id: 't1-1-4',
        title: 'Intercambio a tres bandas',
        src: '1. Tipos de datos · Ejercicio 4 · RA 1 · CE e)',
        task: 'Con tres variables <code>a</code>, <code>b</code> y <code>c</code>, haz las asignaciones para que <b>b tome el valor de a</b>, <b>c el de b</b> y <b>a el de c</b>. El programa lee a, b y c, hace el intercambio y muestra a, b y c, cada una en su línea.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        int c = teclado.nextInt();\n        // reparte los valores aquí\n\n        System.out.println(a);\n        System.out.println(b);\n        System.out.println(c);\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        int c = teclado.nextInt();\n        int aux = c;\n        c = b;\n        b = a;\n        a = aux;\n        System.out.println(a);\n        System.out.println(b);\n        System.out.println(c);\n    }\n}\n',
        notes:
          '<p>Con 1, 2, 3 el resultado es a = 3, b = 1, c = 2. Guardamos el valor de <code>c</code> en <code>aux</code> (porque <code>a</code> lo necesitará al final), y vamos copiando en orden inverso: primero <code>c = b</code>, luego <code>b = a</code> y por último <code>a = aux</code>.</p>',
        s: 'prof',
        tests: [
          {
            input: '1\n2\n3',
            out: '3\n1\n2'
          },
          {
            input: '10\n20\n30',
            out: '30\n10\n20'
          }
        ],
        stdin: '1\n2\n3',
        kind: 'code'
      }
    ]
  },
  {
    id: 'p2',
    t: '2. Operadores y expresiones',
    items: [
      {
        id: 't1-2-1',
        title: 'Calcular expresiones',
        src: '2. Operadores y expresiones · Ejercicio 1 · RA 1 · CE g)',
        task: 'Calcula el valor de estas expresiones sabiendo que <code>a = 2</code>, <code>b = 5</code> y <code>c = 8</code>:<br><b>1)</b> <code>4 / 2 * 3 / 6 + 6 / 2 / 1 / 4 * 2</code><br><b>2)</b> <code>3 * a - 4 * b / Math.pow(c, 2)</code><br><b>3)</b> <code>b * a - Math.pow(b, 2 * 4 / c)</code><br><b>4)</b> <code>(((b + c) / 2 * a + 10) * 3 * b) - 6</code><br><b>5)</b> <code>7 / 2 * v</code><br><b>6)</b> <code>7 % 2</code> <b>7)</b> <code>0 % 5</code><br><b>8)</b> <code>7 * 10 - 50 % 3 * 4 + 9</code><br><b>9)</b> <code>(7 * (10 - 5) % 3) * 4 + 9</code><br><b>10)</b> <code>7 % 5 % 3</code><br><b>11)</b> <code>Math.sqrt(Math.pow(b,2))</code> <b>12)</b> <code>Math.sqrt(b*b)</code><br><b>13)</b> <code>Math.round(81.4) + Math.round(81.6)</code><br><b>14)</b> <code>Math.round(Math.sqrt(c)) &gt; Math.abs(-(a^2))</code>',
        ph: '1) …\n2) …\n(una respuesta por línea)',
        ans: '<table class="keys"><tr><td>1)</td><td><b>1</b> → <code>4/2=2</code>, <code>2*3=6</code>, <code>6/6=1</code>; y <code>6/2=3</code>, <code>3/1=3</code>, <code>3/4=0</code> (división entera), <code>0*2=0</code>. Suma: 1.</td></tr><tr><td>2)</td><td><b>5.6875</b> → <code>6 - 20/64.0</code> (<code>Math.pow</code> devuelve double, así que <code>20 / 64.0 = 0.3125</code>)</td></tr><tr><td>3)</td><td><b>5.0</b> → <code>2*4/8 = 1</code> (enteros), <code>Math.pow(5,1)=5.0</code>, <code>10 - 5.0</code></td></tr><tr><td>4)</td><td><b>324</b> → <code>(13/2=6)*2=12</code>, <code>+10=22</code>, <code>*3*5=330</code>, <code>-6</code></td></tr><tr><td>5)</td><td><b>No compila</b>: la variable <code>v</code> no existe (seguramente quería decir <code>a</code>; con <code>a</code> sería <code>7/2*2 = 6</code>)</td></tr><tr><td>6)</td><td><b>1</b></td></tr><tr><td>7)</td><td><b>0</b></td></tr><tr><td>8)</td><td><b>71</b> → <code>50%3=2</code>, <code>2*4=8</code>; <code>70 - 8 + 9</code></td></tr><tr><td>9)</td><td><b>17</b> → <code>7*5=35</code>, <code>35%3=2</code>; <code>2*4+9</code></td></tr><tr><td>10)</td><td><b>2</b> → <code>(7%5)%3 = 2%3</code></td></tr><tr><td>11)</td><td><b>5.0</b></td></tr><tr><td>12)</td><td><b>5.0</b></td></tr><tr><td>13)</td><td><b>163</b> → <code>81 + 82</code> (el <code>round</code> redondea al más cercano)</td></tr><tr><td>14)</td><td><b>true</b> → <code>Math.round(Math.sqrt(8)) = 3</code>; en Java <code>^</code> es el <b>XOR</b> de bits (no la potencia): <code>2^2 = 0</code>, <code>abs(-0) = 0</code>; <code>3 &gt; 0</code></td></tr></table>',
        kind: 'qa'
      },
      {
        id: 't1-2-2a',
        title: 'Convertir expresión 1: M/N + P',
        src: '2. Operadores y expresiones · Ejercicio 2.1 · RA 1 · CE g)',
        task: 'Convierte a Java la expresión algebraica  <b>M / N + P</b> (la fracción M entre N, más P). El programa lee tres números reales <code>M</code>, <code>N</code> y <code>P</code> (en ese orden) y muestra el resultado.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double M = teclado.nextDouble();\n        double N = teclado.nextDouble();\n        double P = teclado.nextDouble();\n        // escribe la expresión en Java\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double M = teclado.nextDouble();\n        double N = teclado.nextDouble();\n        double P = teclado.nextDouble();\n        System.out.println(M / N + P);\n    }\n}\n',
        notes:
          '<p>La división tiene más prioridad que la suma, así que no hacen falta paréntesis: <code>M / N + P</code>.</p>',
        s: 'prof',
        tests: [
          {
            input: '6\n3\n1',
            out: '3.0'
          },
          {
            input: '10\n4\n0.5',
            out: '3.0'
          },
          {
            input: '1\n8\n2',
            out: '2.125'
          }
        ],
        stdin: '6\n3\n1',
        kind: 'code'
      },
      {
        id: 't1-2-2b',
        title: 'Convertir expresión 2: M + N/(P−Q) + P',
        src: '2. Operadores y expresiones · Ejercicio 2.2 · RA 1 · CE g)',
        task: 'Convierte a Java:  <b>M + N / (P − Q) + P</b>  (N dividido entre la resta P − Q). Lee <code>M</code>, <code>N</code>, <code>P</code> y <code>Q</code> como double y muestra el resultado.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double M = teclado.nextDouble();\n        double N = teclado.nextDouble();\n        double P = teclado.nextDouble();\n        double Q = teclado.nextDouble();\n        // escribe la expresión en Java\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double M = teclado.nextDouble();\n        double N = teclado.nextDouble();\n        double P = teclado.nextDouble();\n        double Q = teclado.nextDouble();\n        System.out.println(M + N / (P - Q) + P);\n    }\n}\n',
        notes:
          '<p>El denominador es una <b>resta</b>, y la resta tiene menos prioridad que la división: por eso <code>(P - Q)</code> va entre paréntesis. Si los quitas, Java hace <code>N / P</code> y luego resta <code>Q</code>.</p>',
        s: 'prof',
        tests: [
          {
            input: '1\n6\n5\n3',
            out: '9.0'
          },
          {
            input: '2\n9\n7\n4',
            out: '12.0'
          }
        ],
        stdin: '1\n6\n5\n3',
        kind: 'code'
      },
      {
        id: 't1-2-2c',
        title: 'Convertir expresión 3: (x+y)/(a−b)',
        src: '2. Operadores y expresiones · Ejercicio 2.3 · RA 1 · CE g)',
        task: 'Convierte a Java:  <b>(x + y) / (a − b)</b>. Lee <code>x</code>, <code>y</code>, <code>a</code> y <code>b</code> como double y muestra el resultado.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double x = teclado.nextDouble();\n        double y = teclado.nextDouble();\n        double a = teclado.nextDouble();\n        double b = teclado.nextDouble();\n        // escribe la expresión en Java\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double x = teclado.nextDouble();\n        double y = teclado.nextDouble();\n        double a = teclado.nextDouble();\n        double b = teclado.nextDouble();\n        System.out.println((x + y) / (a - b));\n    }\n}\n',
        notes:
          '<p>Numerador y denominador son sumas/restas: los dos van entre paréntesis para que se calculen <b>antes</b> de dividir.</p>',
        s: 'prof',
        tests: [
          {
            input: '3\n5\n9\n5',
            out: '2.0'
          },
          {
            input: '1\n1\n2\n4',
            out: '-1.0'
          }
        ],
        stdin: '3\n5\n9\n5',
        kind: 'code'
      },
      {
        id: 't1-2-2d',
        title: 'Convertir expresión 4: 2·(sen x + cos x)/tan x',
        src: '2. Operadores y expresiones · Ejercicio 2.4 · RA 1 · CE g)',
        task: 'Convierte a Java:  <b>2 · (sen(x) + cos(x)) / tan(x)</b>. Lee <code>x</code> (double, en radianes) y muestra el resultado. Usa <code>Math.sin</code>, <code>Math.cos</code> y <code>Math.tan</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double x = teclado.nextDouble();\n        // escribe la expresión en Java\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double x = teclado.nextDouble();\n        System.out.println(2 * (Math.sin(x) + Math.cos(x)) / Math.tan(x));\n    }\n}\n',
        rules: [
          {
            re: /Math\.sin/,
            msg: 'Usa Math.sin'
          },
          {
            re: /Math\.cos/,
            msg: 'Usa Math.cos'
          },
          {
            re: /Math\.tan/,
            msg: 'Usa Math.tan'
          }
        ],
        notes:
          '<p>Las funciones trigonométricas son métodos de <code>Math</code> (<code>Math.sin(x)</code>, …) y trabajan en radianes. La suma va entre paréntesis para multiplicarla por 2 y dividirla entre la tangente entera.</p>',
        s: 'prof',
        tests: [
          {
            input: '1',
            out: '1.7744528536767288'
          },
          {
            input: '0.5',
            out: '4.967973332439316'
          }
        ],
        stdin: '1',
        kind: 'code'
      },
      {
        id: 't1-2-2e',
        title: 'Convertir expresión 5: (m + n/p) / (q − r/s)',
        src: '2. Operadores y expresiones · Ejercicio 2.5 · RA 1 · CE g)',
        task: 'Convierte a Java la fracción con fracciones dentro:  <b>(m + n/p) / (q − r/s)</b>. Lee <code>m</code>, <code>n</code>, <code>p</code>, <code>q</code>, <code>r</code> y <code>s</code> como double y muestra el resultado.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double m = teclado.nextDouble();\n        double n = teclado.nextDouble();\n        double p = teclado.nextDouble();\n        double q = teclado.nextDouble();\n        double r = teclado.nextDouble();\n        double s = teclado.nextDouble();\n        // escribe la expresión en Java\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double m = teclado.nextDouble();\n        double n = teclado.nextDouble();\n        double p = teclado.nextDouble();\n        double q = teclado.nextDouble();\n        double r = teclado.nextDouble();\n        double s = teclado.nextDouble();\n        System.out.println((m + n / p) / (q - r / s));\n    }\n}\n',
        notes:
          '<p>La barra grande de la fracción es la división de <b>todo el numerador</b> entre <b>todo el denominador</b>, por eso ambos van entre paréntesis. Dentro, <code>n / p</code> y <code>r / s</code> se hacen antes de sumar o restar.</p>',
        s: 'prof',
        tests: [
          {
            input: '1\n6\n3\n5\n8\n4',
            out: '1.0'
          },
          {
            input: '2\n9\n3\n10\n6\n2',
            out: '0.7142857142857143'
          }
        ],
        stdin: '1\n6\n3\n5\n8\n4',
        kind: 'code'
      },
      {
        id: 't1-2-2f',
        title: 'Convertir expresión 6: la fórmula de la ecuación de 2º grado',
        src: '2. Operadores y expresiones · Ejercicio 2.6 · RA 1 · CE g)',
        task: 'Convierte a Java:  <b>(−b + √(b² − 4ac)) / (2a)</b>. Lee <code>a</code>, <code>b</code> y <code>c</code> como double y muestra el resultado. Usa <code>Math.sqrt</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double a = teclado.nextDouble();\n        double b = teclado.nextDouble();\n        double c = teclado.nextDouble();\n        // escribe la expresión en Java\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double a = teclado.nextDouble();\n        double b = teclado.nextDouble();\n        double c = teclado.nextDouble();\n        System.out.println((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a));\n    }\n}\n',
        rules: [
          {
            re: /Math\.sqrt/,
            msg: 'Usa Math.sqrt'
          }
        ],
        notes:
          '<p><code>b²</code> se puede escribir <code>b * b</code> o <code>Math.pow(b, 2)</code>. <b>No uses</b> <code>b^2</code>: en Java <code>^</code> es el XOR. El denominador <code>2a</code> debe ir entre paréntesis: <code>/ (2 * a)</code>; si escribes <code>/ 2 * a</code> divides entre 2 y multiplicas por a.</p>',
        s: 'prof',
        tests: [
          {
            input: '1\n-3\n2',
            out: '2.0'
          },
          {
            input: '1\n-5\n6',
            out: '3.0'
          },
          {
            input: '2\n-8\n6',
            out: '3.0'
          }
        ],
        stdin: '1\n-3\n2',
        kind: 'code'
      },
      {
        id: 't1-2-3',
        title: 'Ejecuta de cabeza',
        src: '2. Operadores y expresiones · Ejercicio 3 · RA 1 · CE g)',
        task: '¿Qué salida por pantalla produce este programa antes de ejecutarlo? (Pista: busca qué significan <code>+=</code> y <code>%=</code>)<pre>class Adivinanza {\n    public static void main (String[] args) {\n        int num = 5;\n        num += num - 1 * 4 + 1;\n        System.out.println(num);\n        num = 4; num %= 7 * num % 3 * 7;\n        System.out.println(num);\n    }\n}</pre>',
        exp: ['7\n4', '7 4', '7,4'],
        ph: 'primera línea…\nsegunda línea…',
        ans: '<p>Salida:</p><pre>7\n4</pre><p><b>Primera:</b> <code>num += X</code> equivale a <code>num = num + X</code>. Con X = <code>5 - 1*4 + 1 = 2</code> → <code>num = 5 + 2 = 7</code>.</p><p><b>Segunda:</b> <code>num %= Y</code> equivale a <code>num = num % Y</code>. Y = <code>7 * 4 % 3 * 7</code>, que va de izquierda a derecha: <code>7*4 = 28</code>, <code>28 % 3 = 1</code>, <code>1 * 7 = 7</code>. Entonces <code>num = 4 % 7 = 4</code>.</p>',
        kind: 'qa'
      }
    ]
  },
  {
    id: 'p3',
    t: '3. Conversiones de tipo',
    items: [
      {
        id: 't1-3-1',
        title: 'Asignaciones sospechosas',
        src: '3. Conversiones de tipo · Ejercicio 1 · RA 1 · CE e), h)',
        task: "Variables: <code>a</code> y <code>b</code> de tipo entero; <code>c</code> y <code>d</code> reales (double); <code>e</code> y <code>f</code> de tipo carácter; <code>g</code> lógica (boolean). ¿Cuáles de estas asignaciones no son válidas y por qué?<br><b>1)</b> <code>a = 20;</code> <b>2)</b> <code>b = 12;</code> <b>3)</b> <code>f = '0';</code> <b>4)</b> <code>b = 5500;</code> <b>5)</b> <code>c = 0;</code> <b>6)</b> <code>d = c;</code> <b>7)</b> <code>e = 'f';</code> <b>8)</b> <code>e = f;</code> <b>9)</b> <code>a = 12.56;</code> <b>10)</b> <code>g = verdadero;</code> <b>11)</b> <code>g = 'falso';</code> <b>12)</b> <code>f = g;</code>",
        ph: 'No válidas: …',
        exp: ['9,10,11,12', '9 10 11 12', '9, 10, 11, 12'],
        ans: "<p><b>No válidas: 9, 10, 11 y 12.</b></p><ul><li><b>9) <code>a = 12.56;</code></b>: 12.56 es un double y <code>a</code> es int: se perdería la parte decimal, Java no lo permite sin casting.</li><li><b>10) <code>g = verdadero;</code></b>: el literal lógico en Java es <code>true</code> / <code>false</code>; <code>verdadero</code> sería una variable que no existe.</li><li><b>11) <code>g = 'falso';</code></b>: las comillas simples son para <b>un</b> carácter, no para varios, y además un boolean no puede recibir un char.</li><li><b>12) <code>f = g;</code></b>: no se puede asignar un boolean a un char (tipos incompatibles).</li></ul><p><b>Válidas:</b> 1, 2, 3, 4 (5500 cabe en un int), 5 (el entero 0 se convierte solo a double), 6, 7 y 8.</p>",
        kind: 'qa'
      },
      {
        id: 't1-3-2',
        title: 'Asignaciones liosas',
        src: '3. Conversiones de tipo · Ejercicio 2 · RA 1 · CE e), g), h)',
        task: '¿Cuál es la salida de cada secuencia?<br><b>1)</b><pre>int a, b, c;\na = 3;\nb = 4;\nc = a + 2 * b;\nc = c + b;\nb = c - a;\na = b * c;\nSystem.out.println(a + b + c);</pre><b>2)</b><pre>float x;\nx = 2.0;\nx = Math.pow((x + x), 2);\nx = Math.sqrt(x + Math.sqrt(x) + 5);\nSystem.out.println(x);</pre><b>3)</b><pre>int x, y;\nboolean z;\nx = 5;\ny = x - 2;\nx = y * y + 1;\nz = (x > (y + 5));\nSystem.out.println(x + y + z);</pre><b>4)</b><pre>int a, b;\na = 10;\nb = 5;\na = b;\nb = a;\nSystem.out.println(a + b);</pre>',
        ph: '1) …\n2) …\n3) …\n4) …',
        ans: '<ol><li><b>207</b>. <code>c = 3 + 8 = 11</code>; <code>c = 11 + 4 = 15</code>; <code>b = 15 - 3 = 12</code>; <code>a = 12 * 15 = 180</code>; <code>180 + 12 + 15 = 207</code>.</li><li><b>No compila</b>: <code>x = 2.0;</code> asigna un double a un float (haría falta <code>2.0f</code>), y <code>Math.pow</code> y <code>Math.sqrt</code> devuelven double, que no cabe en un float sin casting. Si <code>x</code> fuese double mostraría <b>5.0</b> (<code>pow(4,2) = 16.0</code>, <code>sqrt(16 + 4 + 5) = 5.0</code>).</li><li><b>No compila</b>: <code>x + y + z</code> intenta sumar enteros con un boolean (<code>13 + true</code>), que no tiene sentido. (Con <code>"" + x + y + z</code> mostraría <code>103true</code>.)</li><li><b>10</b>: <code>a = b</code> deja a = 5; <code>b = a</code> deja b = 5; <code>5 + 5 = 10</code>. El valor original de <code>a</code> (10) se perdió: no es un intercambio.</li></ol>',
        kind: 'qa'
      },
      {
        id: 't1-3-3',
        title: 'Generador de letras',
        src: '3. Conversiones de tipo · Ejercicio 3 · RA 1 · CE a), h)',
        task: "Teclea el programa de la clase <code>GeneraLetras</code>: un método <code>getLetra()</code> que devuelve <code>(char) (Math.random() * 26 + 'a')</code> y un <code>main</code> que lo llama 4 veces con <code>println</code>. ¿Qué caracteres salen? Debe mostrar 4 letras minúsculas, una por línea.",
        starter: 'class GeneraLetras {\n\n}\n',
        rules: [
          {
            re: /\(\s*char\s*\)/,
            msg: 'Usa un casting (char)'
          },
          {
            re: /Math\.random\s*\(\s*\)\s*\*\s*26/,
            msg: 'Multiplica Math.random() por 26'
          }
        ],
        tests: [
          {
            re: '^[a-z]\\n[a-z]\\n[a-z]\\n[a-z]$',
            rep: 300,
            name: 'Salen 4 letras minúsculas (300 ejecuciones)',
            seen: []
          }
        ],
        solution:
          "class GeneraLetras {\n    public static char getLetra() {\n        return (char) (Math.random() * 26 + 'a');\n    }\n\n    public static void main(String[] args) {\n        System.out.println(getLetra());\n        System.out.println(getLetra());\n        System.out.println(getLetra());\n        System.out.println(getLetra());\n    }\n}\n",
        notes:
          "<p>Cada ejecución sale distinta porque <code>Math.random()</code> da un double entre 0 y 1 (sin llegar a 1). Se multiplica por 26 (rango 0–25,99…) y se suma <code>'a'</code>, cuyo código es 97. El resultado va de 97 a 122,99…; el <code>(char)</code> trunca los decimales y lo convierte en la letra con ese código: de <code>a</code> a <code>z</code>. Lo que aparece en la consola son <b>letras minúsculas al azar</b>.</p>",
        s: 'prof',
        kind: 'code'
      }
    ]
  },
  {
    id: 'p4',
    t: '4. La clase Math',
    items: [
      {
        id: 't1-4-1a',
        title: 'Aleatorio entre 0 y 49',
        src: '4. La clase Math · Ejercicio 1 (a) · RA 1 · CE g), h)',
        task: 'Escribe un programa que genere e imprima un número entero aleatorio entre 0 (incluido) y 50 (excluido): el más alto posible es 49. Fórmula del profe: <code>(int) (Math.random() * (max - min + 1)) + min</code>.',
        starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
        rules: [
          {
            re: /Math\.random\s*\(\s*\)/,
            msg: 'Usa Math.random()'
          },
          {
            re: /\(\s*int\s*\)/,
            msg: 'Usa un casting (int)'
          }
        ],
        tests: [
          {
            re: '^([0-9]|[1-4][0-9])$',
            rep: 2500,
            seen: ['0', '49'],
            name: 'Siempre entre 0 y 49, y salen el 0 y el 49 (2500 ejecuciones)'
          }
        ],
        solution:
          'public class Main {\n    public static void main(String[] args) {\n        int numero = (int) (Math.random() * 50);\n        System.out.println(numero);\n    }\n}\n',
        notes:
          '<p><code>Math.random()</code> da de 0.0 a 0.99…; multiplicado por 50 da de 0 a 49.99…; el <code>(int)</code> trunca y queda de 0 a 49. Con la fórmula general: min = 0, max = 49 → <code>* (49 - 0 + 1) + 0</code>.</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't1-4-1b',
        title: 'Aleatorio entre 0 y 50 (ambos incluidos)',
        src: '4. La clase Math · Ejercicio 1 (b) · RA 1 · CE g), h)',
        task: 'Lo mismo, pero incluyendo tanto el 0 como el 50.',
        starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
        rules: [
          {
            re: /Math\.random\s*\(\s*\)/,
            msg: 'Usa Math.random()'
          },
          {
            re: /\(\s*int\s*\)/,
            msg: 'Usa un casting (int)'
          }
        ],
        tests: [
          {
            re: '^([0-9]|[1-4][0-9]|50)$',
            rep: 2500,
            seen: ['0', '50'],
            name: 'Siempre entre 0 y 50, y salen el 0 y el 50 (2500 ejecuciones)'
          }
        ],
        solution:
          'public class Main {\n    public static void main(String[] args) {\n        int numero = (int) (Math.random() * 51);\n        System.out.println(numero);\n    }\n}\n',
        notes:
          '<p>Ahora hay 51 posibles valores (0, 1, …, 50): <code>(int) (Math.random() * 51)</code>. Con la fórmula: <code>(max - min + 1) = 50 - 0 + 1 = 51</code>.</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't1-4-2',
        title: 'Lanza los dados',
        src: '4. La clase Math · Ejercicio 2 · RA 1 · CE g), h)',
        task: 'Simula el lanzamiento de un dado de 6 caras: genera e imprime un número entero aleatorio entre 1 y 6 (ambos incluidos).',
        starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
        rules: [
          {
            re: /Math\.random\s*\(\s*\)/,
            msg: 'Usa Math.random()'
          },
          {
            re: /\(\s*int\s*\)/,
            msg: 'Usa un casting (int)'
          }
        ],
        tests: [
          {
            re: '^[1-6]$',
            rep: 600,
            seen: ['1', '2', '3', '4', '5', '6'],
            name: 'Siempre entre 1 y 6 y salen las seis caras (600 ejecuciones)'
          }
        ],
        solution:
          'public class Main {\n    public static void main(String[] args) {\n        int dado = (int) (Math.random() * 6) + 1;\n        System.out.println(dado);\n    }\n}\n',
        notes:
          '<p>Fórmula: <code>(int) (Math.random() * (max - min + 1)) + min</code> con min = 1 y max = 6: <code>(int) (Math.random() * 6) + 1</code>. El <code>* 6</code> da 0–5 y el <code>+ 1</code> lo desplaza a 1–6.</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't1-4-3',
        title: 'Canal de televisión',
        src: '4. La clase Math · Ejercicio 3 · RA 1 · CE g), h)',
        task: 'Simula la selección de un canal de televisión: genera e imprime un número de canal aleatorio entre 10 (inclusive) y 99 (inclusive).',
        starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
        rules: [
          {
            re: /Math\.random\s*\(\s*\)/,
            msg: 'Usa Math.random()'
          },
          {
            re: /\(\s*int\s*\)/,
            msg: 'Usa un casting (int)'
          }
        ],
        tests: [
          {
            re: '^[1-9][0-9]$',
            rep: 4000,
            seen: ['10', '99'],
            name: 'Siempre entre 10 y 99 y salen el 10 y el 99 (4000 ejecuciones)'
          }
        ],
        solution:
          'public class Main {\n    public static void main(String[] args) {\n        int canal = (int) (Math.random() * (99 - 10 + 1)) + 10;\n        System.out.println(canal);\n    }\n}\n',
        notes:
          '<p>min = 10, max = 99: hay <code>99 - 10 + 1 = 90</code> valores. <code>Math.random() * 90</code> da 0–89,99…; el <code>(int)</code> da 0–89; sumar 10 lo deja en 10–99.</p>',
        s: 'prof',
        kind: 'code'
      }
    ]
  },
  {
    id: 'p5',
    t: '5. Programas completos y depuración',
    items: [
      {
        id: 't1-5-1',
        title: '¿Funciona o no funciona?',
        src: '5. Programas completos y depuración · Ejercicio 1 · RA 1 · CE f), g), h)',
        task: "Para cada fragmento, averigua sin probarlo si funcionaría; si no, explica por qué; si sí, di qué sale por consola.<br><b>1)</b> <code>int a = 'a'; System.out.println(a);</code><br><b>2)</b> <code>int pi = 3.14; System.out.println(pi);</code><br><b>3)</b> <code>double pi = 3,14; System.out.println(pi);</code><br><b>4)</b> <code>boolean adivina = (1 == 4); System.out.println(adivina);</code><br><b>5)</b> <code>boolean adivina = (1 == 'a' == 1);</code><br><b>6)</b> <code>boolean adivina = (97 == 'a' == 97);</code><br><b>7)</b> <code>boolean adivina = ((97 == 'a') &amp;&amp; true);</code><br><b>8)</b> <code>int a = 1; int b == a &gt; 1; System.out.println(b);</code><br><b>9)</b> <code>byte a = 200; System.out.println(a);</code>",
        ph: '1) …\n2) …',
        ans: "<ol><li><b>Funciona, muestra 97</b>: un char se convierte solo a int y <code>'a'</code> vale 97 en la tabla ASCII.</li><li><b>No compila</b>: 3.14 es double y no cabe en un int sin casting (<code>int pi = (int) 3.14</code> daría 3).</li><li><b>No compila</b>: el decimal se escribe con punto, <code>3.14</code>. La coma separa declaraciones.</li><li><b>Funciona, muestra false</b> (1 no es igual a 4).</li><li><b>No compila</b>: <code>1 == 'a'</code> da false, y luego <code>false == 1</code> compara un boolean con un int.</li><li><b>No compila</b>: <code>97 == 'a'</code> es true, y luego <code>true == 97</code> compara un boolean con un int.</li><li><b>Funciona, muestra true</b>: <code>97 == 'a'</code> es true y <code>true &amp;&amp; true</code> es true.</li><li><b>No compila</b>: en la declaración se usa <code>=</code>, no <code>==</code>; además <code>a &gt; 1</code> es boolean y <code>b</code> es int.</li><li><b>No compila</b>: un <code>byte</code> va de −128 a 127 y 200 no cabe.</li></ol>",
        kind: 'qa'
      },
      {
        id: 't1-5-2',
        title: 'Programa misterioso',
        src: '5. Programas completos y depuración · Ejercicio 2 · RA 1 · CE f), g)',
        task: '¿Qué mostrará este programa y por qué? (Pista: busca qué significa el prefijo <code>0x</code> y para qué sirve <code>&gt;&gt;&gt;</code>.)<pre>public class Incognita {\n    public static void main(String[] args) {\n        int i = 0x100;\n        i = i &gt;&gt;&gt; 1;\n        System.out.println(i);\n    }\n}</pre>',
        exp: ['128'],
        ph: 'Sale… porque…',
        ans: '<p>Muestra <b>128</b>.</p><ul><li><code>0x100</code> es el número <b>256</b> escrito en hexadecimal (base 16): 1·16² + 0·16 + 0 = 256.</li><li><code>&gt;&gt;&gt;</code> desplaza los bits a la derecha, rellenando con ceros por la izquierda. Desplazar 1 posición equivale a <b>dividir entre 2</b> (para positivos): 256 / 2 = 128.</li></ul>',
        kind: 'qa'
      },
      {
        id: 't1-5-3a',
        title: 'Corrige los errores (1): Suma',
        src: '5. Programas completos y depuración · Ejercicio 3.1 · RA 1 · CE a), e)',
        task: 'El programa no compila. Ejecútalo, lee el error y corrígelo hasta que funcione. Debe mostrar primero <code>La suma es: 80</code> y después otro número (la suma con n3).',
        starter:
          'class Suma {\n    static int n1 = 50;\n    public static void main (String[] args) {\n        int n2 = 30, suma = 0, n3;\n        suma = n1 + n2;\n        System.out.println("La suma es: " + suma);\n        suma = suma + n3;\n        System.out.println(suma);\n    }\n}\n',
        tests: [
          {
            re: '^La suma es: 80\\n-?[0-9]+$',
            name: 'Muestra «La suma es: 80» y después otro número entero'
          }
        ],
        solution:
          'class Suma {\n    static int n1 = 50;\n    public static void main (String[] args) {\n        int n2 = 30, suma = 0, n3 = 20;\n        suma = n1 + n2;\n        System.out.println("La suma es: " + suma);\n        suma = suma + n3;\n        System.out.println(suma);\n    }\n}\n',
        notes:
          '<p>Error: <code>n3</code> no está <b>inicializada</b>: una variable local debe tener valor antes de usarla. La solución es darle un valor al declararla (aquí <code>n3 = 20</code>, así sale 100).</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't1-5-3b',
        title: 'Corrige los errores (2): Suma con boolean',
        src: '5. Programas completos y depuración · Ejercicio 3.2 · RA 1 · CE a), e)',
        task: 'Corrige los errores para que muestre <code>La suma es = 11</code>.',
        starter:
          'class Suma {\n    public static void main (String[] args) {\n        int n1 = 5, n2 = 6;\n        boolean suma = 0;\n        suma = n1 + n2;\n        System.out.println(La suma es = suma);\n    }\n}\n',
        solution:
          'class Suma {\n    public static void main (String[] args) {\n        int n1 = 5, n2 = 6;\n        int suma = 0;\n        suma = n1 + n2;\n        System.out.println("La suma es = " + suma);\n    }\n}\n',
        notes:
          '<p>Dos errores: (1) <code>suma</code> es <code>boolean</code> pero guarda números: debe ser <code>int</code>. (2) El texto debe ir entre comillas y concatenarse con <code>+</code>: <code>"La suma es = " + suma</code>.</p>',
        s: 'prof',
        tests: [
          {
            input: '',
            out: 'La suma es = 11'
          }
        ],
        kind: 'code'
      },
      {
        id: 't1-5-3c',
        title: 'Corrige los errores (3): Cuadrado',
        src: '5. Programas completos y depuración · Ejercicio 3.3 · RA 1 · CE a), e)',
        task: 'Corrige los errores para que muestre <code>El cuadrado de 8 es: 64</code>.',
        starter:
          'class Cuadrado {\n    public static void main (String[] args) {\n        int n = 8;\n        cuad = n * n;\n        System.out.println("El cuadrado de " + N + " es: " + cuad);\n    }\n}\n',
        solution:
          'class Cuadrado {\n    public static void main (String[] args) {\n        int n = 8;\n        int cuad = n * n;\n        System.out.println("El cuadrado de " + n + " es: " + cuad);\n    }\n}\n',
        notes:
          '<p>(1) <code>cuad</code> no está declarada: falta el tipo (<code>int cuad = n * n;</code>). (2) <code>N</code> (mayúscula) no existe: Java distingue mayúsculas y minúsculas, la variable es <code>n</code>.</p>',
        s: 'prof',
        tests: [
          {
            input: '',
            out: 'El cuadrado de 8 es: 64'
          }
        ],
        kind: 'code'
      },
      {
        id: 't1-5-4',
        title: 'Mi primer programa (de verdad): círculo',
        src: '5. Programas completos y depuración · Ejercicio 4 · RA 1 · CE e), f), g)',
        task: 'Programa que calcule la <b>circunferencia</b> y el <b>área</b> de un círculo de radio entero <code>r</code>. Lee <code>r</code> con Scanner y muestra, con dos decimales (usa <code>printf</code> con <code>%.2f</code>; con el idioma en español sale la coma decimal):<pre>Radio: 5\nLongitud de circunferencia: 31,42\nÁrea de círculo: 78,54</pre>Fórmulas: longitud = 2·π·r; área = π·r². Usa <code>Math.PI</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int r = teclado.nextInt();\n        // calcula y muestra\n\n    }\n}\n',
        rules: [
          {
            re: /Math\.PI/,
            msg: 'Usa Math.PI'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int r = teclado.nextInt();\n        double longitud = 2 * Math.PI * r;\n        double area = Math.PI * r * r;\n        System.out.println("Radio: " + r);\n        System.out.printf("Longitud de circunferencia: %.2f%n", longitud);\n        System.out.printf("Área de círculo: %.2f%n", area);\n    }\n}\n',
        notes:
          '<p><code>%.2f</code> muestra un double con 2 decimales y <code>%n</code> es el salto de línea. El programa funciona para cualquier <code>r</code> porque todo depende de la variable.</p>',
        s: 'prof',
        tests: [
          {
            input: '5',
            out: 'Radio: 5\nLongitud de circunferencia: 31,42\nÁrea de círculo: 78,54'
          },
          {
            input: '1',
            out: 'Radio: 1\nLongitud de circunferencia: 6,28\nÁrea de círculo: 3,14'
          },
          {
            input: '10',
            out: 'Radio: 10\nLongitud de circunferencia: 62,83\nÁrea de círculo: 314,16'
          }
        ],
        stdin: '5',
        kind: 'code'
      },
      {
        id: 't1-5-5a',
        title: 'Cinco caracteres al azar',
        src: '5. Programas completos y depuración · Ejercicio 5 (a) · RA 1 · CE g), h)',
        task: 'Programa que genere <b>cinco letras minúsculas al azar</b> (de la <code>a</code> a la <code>z</code>), una por línea.',
        starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
        rules: [
          {
            re: /\(\s*char\s*\)/,
            msg: 'Usa un casting (char)'
          },
          {
            re: /Math\.random/,
            msg: 'Usa Math.random()'
          }
        ],
        tests: [
          {
            re: '^[a-z]\\n[a-z]\\n[a-z]\\n[a-z]\\n[a-z]$',
            rep: 300,
            name: 'Salen 5 letras minúsculas (300 ejecuciones)'
          }
        ],
        solution:
          "public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 5; i++) {\n            char letra = (char) (Math.random() * 26 + 'a');\n            System.out.println(letra);\n        }\n    }\n}\n",
        notes:
          "<p>Si todavía no has visto el <code>for</code> (Tema 2), repite cinco veces el bloque <code>char letra = (char) (Math.random() * 26 + 'a'); System.out.println(letra);</code> usando distintas variables o llamadas.</p>",
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't1-5-5b',
        title: 'Cinco vocales al azar',
        src: '5. Programas completos y depuración · Ejercicio 5 (b) · RA 1 · CE g), h)',
        task: 'Modifícalo para que genere <b>únicamente vocales</b> (a, e, i, o, u) al azar, cinco líneas. Pista: genera un número aleatorio del 0 al 4 y escribe la vocal correspondiente (con <code>if / else if</code> o un <code>switch</code>).',
        starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
        tests: [
          {
            re: '^[aeiou]\\n[aeiou]\\n[aeiou]\\n[aeiou]\\n[aeiou]$',
            rep: 300,
            name: 'Solo salen vocales (300 ejecuciones)'
          }
        ],
        solution:
          "public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 5; i++) {\n            int n = (int) (Math.random() * 5);\n            char vocal;\n            switch (n) {\n                case 0:\n                    vocal = 'a';\n                    break;\n                case 1:\n                    vocal = 'e';\n                    break;\n                case 2:\n                    vocal = 'i';\n                    break;\n                case 3:\n                    vocal = 'o';\n                    break;\n                default:\n                    vocal = 'u';\n                    break;\n            }\n            System.out.println(vocal);\n        }\n    }\n}\n",
        notes:
          '<p>Este ejercicio usa <code>switch</code> y <code>for</code>, que se ven en el Tema 2. Otra forma: tener el texto <code>"aeiou"</code> y coger la letra con <code>charAt(n)</code>.</p>',
        s: 'prof',
        kind: 'code'
      }
    ]
  },
  {
    id: 'p6',
    t: '6. Configuración del entorno y uso del IDE',
    items: [
      {
        id: 't1-6-1',
        title: 'Instalación de NetBeans y mi primer proyecto',
        src: '6. Configuración del entorno y uso del IDE · Ejercicios 1 y 2',
        task: 'Instala Apache NetBeans (comprueba en <i>Tools → Java Platforms</i> que reconoce el JDK) y crea un proyecto Maven <code>HolaNetBeans</code> (<i>File → New Project → Java with Maven → Java Application</i>) que muestre <code>Hola, NetBeans!</code>. Responde: ¿para qué sirven <code>src/main/java</code> y <code>pom.xml</code>? ¿Dónde aparece la salida al ejecutar con F6? ¿Qué carpeta nueva aparece en el disco y qué contiene?',
        ans: '<ul><li><b><code>src/main/java</code></b>: carpeta donde va el <b>código fuente</b> (.java) del proyecto, organizado en paquetes.</li><li><b><code>pom.xml</code></b>: fichero de configuración de Maven: nombre, versión, groupId, versión de Java y dependencias del proyecto.</li><li><b>Salida</b>: en la ventana <b>Output</b> de NetBeans (abajo).</li><li><b>Carpeta nueva</b>: <code>target</code>, que contiene el código compilado (<code>target/classes</code> con los <code>.class</code>). Es lo mismo que pasaba al compilar con <code>javac</code> en el terminal: se generan los <code>.class</code>; ahora lo hace NetBeans por ti.</li></ul><pre data-hl>public static void main(String[] args) {\n    System.out.println("Hola, NetBeans!");\n}</pre>',
        kind: 'qa'
      },
      {
        id: 't1-6-3',
        title: 'El editor trabaja para ti',
        src: '6. Configuración del entorno y uso del IDE · Ejercicio 3',
        task: 'Crea una clase <code>Ayudas</code> y prueba estas ayudas del editor; describe qué hace cada una: 1) escribe <code>main</code> y pulsa Tab; 2) en main, <code>sout</code> + Tab; 3) <code>System.out.</code> + Ctrl+Espacio; 4) borra un punto y coma, ¿qué indica el editor?; 5) <code>int numero = "cinco";</code>, ¿qué error muestra?; 6) selecciona todo y Alt+Shift+F. ¿En qué se diferencia Run File (Shift+F6) de Run Project?',
        ans: '<ol><li><code>main</code> + Tab: escribe el método <code>public static void main(String[] args) {}</code> completo (plantilla).</li><li><code>sout</code> + Tab: escribe <code>System.out.println("");</code>.</li><li><code>System.out.</code> + Ctrl+Espacio: muestra la lista de métodos disponibles (<code>println</code>, <code>print</code>…).</li><li>Sin el <code>;</code> el editor marca la línea con un <b>subrayado rojo</b> y un icono de error antes de compilar; al pasar el ratón dice «; expected» (se esperaba punto y coma).</li><li>Error de tipos: <i>incompatible types: String cannot be converted to int</i>. Se corrige con un entero: <code>int numero = 5;</code>.</li><li>Alt+Shift+F <b>formatea</b> el código: sangrías y espacios correctos.</li><li><b>Run File</b> ejecuta solo el fichero abierto; <b>Run Project</b> ejecuta la clase principal del proyecto.</li></ol><p>Estos atajos (sout, main, Ctrl+Espacio…) también funcionan en el editor de esta web.</p>',
        kind: 'qa'
      },
      {
        id: 't1-6-5',
        title: 'Primer contacto con el depurador (opcional)',
        src: '6. Configuración del entorno y uso del IDE · Ejercicio 5',
        task: 'En <code>main</code> escribe <code>int a = 3; int b = 4; int c = a + 2 * b; System.out.println(c);</code>. Pon un breakpoint en la primera línea, ejecuta con <i>Debug File</i> (Ctrl+Shift+F5) y avanza con Step Over (F8). ¿Cómo cambian los valores en la ventana Variables?',
        exp: ['11'],
        ph: 'Valor final de c…',
        ans: '<p>Los valores van apareciendo línea a línea: tras la 1.ª, <code>a = 3</code>; tras la 2.ª, <code>b = 4</code>; tras la 3.ª, <code>c = 11</code> (<code>3 + 2·4</code>); y al ejecutar el <code>println</code> aparece <b>11</b> en Output. El depurador te deja ver el estado del programa en cada paso.</p><p class="muted">Nota: el ejercicio «Importar un proyecto existente» (SorteoPrimitiva.zip) no está aquí porque necesita ese fichero.</p>',
        kind: 'qa'
      }
    ]
  }
];
if (false && typeof module !== 'undefined')
  module.exports = {
    CODEX: [].concat.apply(
      [],
      PROF1.map(function (c) {
        return c.items.filter(function (i) {
          return i.kind === 'code';
        });
      })
    )
  };

var PROFX = PROF1;
