/* ============================================================
   Ejercicios del apartado 2.11 Funciones (métodos)
   Hacer un código (6) y Corrige el código (1).
   ============================================================ */
/* generado por dam/gen/metodos.js */
var EX2M = [
  {
    id: 'm1',
    title: 'Tu primer método: cuadrado',
    concept:
      'Un método recibe datos (<b>parámetros</b>) y devuelve un resultado con <code>return</code>. Se escribe dentro de la clase, <b>fuera</b> de <code>main</code>, y de momento con <code>public static</code> delante (todavía no sabemos por qué; se verá con objetos: tú ponlo siempre).',
    task: 'Escribe <code>static int cuadrado(int n)</code> que devuelva <code>n * n</code>. En <code>main</code>, lee un entero y muestra su cuadrado llamando al método.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    // escribe aquí tu método\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n\n    }\n}\n',
    rules: [
      { re: /static\s+int\s+cuadrado\s*\(\s*int\s+\w+\s*\)/, msg: 'Método static int cuadrado(int n)' },
      { re: /return\s+/, msg: 'Devuelve el resultado con return' }
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static int cuadrado(int n) {\n        return n * n;\n    }\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        System.out.println(cuadrado(n));\n    }\n}\n',
    hints: [
      'El método va dentro de la clase pero fuera de <code>main</code>.',
      'Su cabecera es <code>static int cuadrado(int n)</code>: devuelve un <code>int</code> y recibe un <code>int</code>.',
      'En <code>main</code> llama al método y muestra lo que devuelve: <code>System.out.println(cuadrado(n))</code>.'
    ],
    notes:
      '<p>El método <b>devuelve</b> el valor y es <code>main</code> quien lo muestra. Así el resultado se puede reutilizar en otros cálculos.</p>',
    kind: 'code',
    s: 'metodos',
    tests: [
      { input: '7', out: '49' },
      { input: '0', out: '0' },
      { input: '-3', out: '9' }
    ],
    stdin: '7'
  },
  {
    id: 'm2',
    title: 'Mostrar no es devolver: saludar',
    concept:
      'Si un método no devuelve nada, su tipo es <code>void</code> y no lleva <code>return</code> con valor. Hace algo (por ejemplo, mostrar un mensaje), pero no se puede usar en un cálculo.',
    task: 'Escribe <code>static void saludar(String nombre)</code> que muestre <code>Hola, </code> seguido del nombre. En <code>main</code> lee un nombre con <code>next()</code> y llama al método.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    // escribe aquí tu método\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n\n    }\n}\n',
    rules: [
      {
        re: /static\s+void\s+saludar\s*\(\s*String\s+\w+\s*\)/,
        msg: 'Método static void saludar(String nombre)'
      }
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void saludar(String nombre) {\n        System.out.println("Hola, " + nombre);\n    }\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        String nombre = teclado.next();\n        saludar(nombre);\n    }\n}\n',
    hints: [
      'Un método que solo muestra algo es de tipo <code>void</code>.',
      'El parámetro es un <code>String</code>: <code>static void saludar(String nombre)</code>.',
      'Dentro del método concatena: <code>"Hola, " + nombre</code>.'
    ],
    notes:
      '<p><code>saludar</code> es <code>void</code>: muestra el saludo pero no devuelve nada, así que no podrías escribir <code>saludar("Ana") + 1</code>.</p>',
    kind: 'code',
    s: 'metodos',
    tests: [
      { input: 'Ana', out: 'Hola, Ana' },
      { input: 'Luis', out: 'Hola, Luis' }
    ],
    stdin: 'Ana'
  },
  {
    id: 'm3',
    title: 'Un método booleano: esPar',
    concept:
      'Un método puede devolver un <code>boolean</code>. Su nombre suele ser una pregunta (<code>esPar</code>, <code>esPrimo</code>…) y se usa directamente dentro de un <code>if</code>.',
    task: 'Escribe <code>static boolean esPar(int n)</code>. En <code>main</code>, lee un entero y muestra <code>par</code> o <code>impar</code> usando el método en el <code>if</code>.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    // escribe aquí tu método\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n\n    }\n}\n',
    rules: [
      { re: /static\s+boolean\s+esPar\s*\(\s*int\s+\w+\s*\)/, msg: 'Método static boolean esPar(int n)' },
      { re: /if\s*\(\s*esPar\s*\(/, msg: 'Usa esPar(...) dentro del if' }
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static boolean esPar(int n) {\n        return n % 2 == 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        if (esPar(n)) {\n            System.out.println("par");\n        } else {\n            System.out.println("impar");\n        }\n    }\n}\n',
    hints: [
      'El método devuelve el resultado de una comparación: <code>n % 2 == 0</code>.',
      'Ya es un <code>boolean</code>: puedes devolverlo directamente con <code>return</code>.',
      'En el <code>if</code> basta con <code>if (esPar(n))</code>, sin <code>== true</code>.'
    ],
    notes:
      '<p><code>return n % 2 == 0;</code> ya devuelve <code>true</code> o <code>false</code>, no hace falta un <code>if</code> dentro del método.</p>',
    kind: 'code',
    s: 'metodos',
    tests: [
      { input: '4', out: 'par' },
      { input: '7', out: 'impar' },
      { input: '0', out: 'par' },
      { input: '-3', out: 'impar' }
    ],
    stdin: '4'
  },
  {
    id: 'm4',
    title: 'Sobrecarga: mayor de dos y de tres',
    concept:
      'Puedes tener varios métodos con el <b>mismo nombre</b> si sus parámetros son distintos (<b>sobrecarga</b>). Un método puede llamar a otro para reutilizar su trabajo.',
    task: 'Escribe <code>static int mayor(int a, int b)</code> y <code>static int mayor(int a, int b, int c)</code>; el de tres debe <b>reutilizar</b> el de dos. En <code>main</code>, lee tres enteros y muestra el mayor.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    // escribe aquí tu método\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n\n    }\n}\n',
    rules: [
      { re: /static\s+int\s+mayor\s*\(\s*int\s+\w+\s*,\s*int\s+\w+\s*\)/, msg: 'Método mayor(int a, int b)' },
      {
        re: /static\s+int\s+mayor\s*\(\s*int\s+\w+\s*,\s*int\s+\w+\s*,\s*int\s+\w+\s*\)/,
        msg: 'Método mayor(int a, int b, int c)'
      },
      { re: /mayor\s*\(\s*mayor\s*\(/, msg: 'El de tres reutiliza el de dos: mayor(mayor(a, b), c)' }
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static int mayor(int a, int b) {\n        if (a > b) {\n            return a;\n        }\n        return b;\n    }\n\n    public static int mayor(int a, int b, int c) {\n        return mayor(mayor(a, b), c);\n    }\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        int c = teclado.nextInt();\n        System.out.println(mayor(a, b, c));\n    }\n}\n',
    hints: [
      'Haz primero el de dos números; es un <code>if</code> con dos <code>return</code>.',
      'El de tres no necesita comparar nada por su cuenta: puede llamar al de dos.',
      'El mayor de tres es <code>mayor(mayor(a, b), c)</code>.'
    ],
    notes:
      '<p>Java elige cuál ejecutar por el <b>número y tipo de parámetros</b>. Reutilizar <code>mayor(a, b)</code> evita repetir la comparación.</p>',
    kind: 'code',
    s: 'metodos',
    tests: [
      { input: '3\n9\n4', out: '9' },
      { input: '10\n2\n7', out: '10' },
      { input: '5\n5\n5', out: '5' },
      { input: '-1\n-8\n-3', out: '-1' }
    ],
    stdin: '3\n9\n4'
  },
  {
    id: 'm5',
    title: 'esPrimo',
    concept:
      'Dentro de un método cabe todo lo que sabes: bucles, condiciones y varios <code>return</code>. En cuanto se ejecuta un <code>return</code>, el método termina.',
    task: 'Escribe <code>static boolean esPrimo(int n)</code> (los menores que 2 no son primos; prueba divisores desde 2 mientras <code>d * d &lt;= n</code>). En <code>main</code>, lee un entero y muestra <code>primo</code> o <code>no primo</code>.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    // escribe aquí tu método\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n\n    }\n}\n',
    rules: [
      { re: /static\s+boolean\s+esPrimo\s*\(\s*int\s+\w+\s*\)/, msg: 'Método static boolean esPrimo(int n)' },
      { re: /for\s*\(|while\s*\(/, msg: 'Usa un bucle para probar los divisores' }
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static boolean esPrimo(int n) {\n        if (n < 2) {\n            return false;\n        }\n        for (int d = 2; d * d <= n; d++) {\n            if (n % d == 0) {\n                return false;\n            }\n        }\n        return true;\n    }\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        if (esPrimo(n)) {\n            System.out.println("primo");\n        } else {\n            System.out.println("no primo");\n        }\n    }\n}\n',
    hints: [
      'Si <code>n</code> es menor que 2, devuelve <code>false</code> directamente.',
      'Si encuentras un divisor (<code>n % d == 0</code>), ya sabes que no es primo: <code>return false</code>.',
      'Si el bucle termina sin encontrar divisores, <code>return true</code> al final.'
    ],
    notes:
      '<p>Parar en <code>d * d &lt;= n</code> ahorra muchas vueltas: no hace falta probar más allá de la raíz de <code>n</code>. Y el <code>return false</code> sale en cuanto aparece un divisor.</p>',
    kind: 'code',
    s: 'metodos',
    tests: [
      { input: '13', out: 'primo' },
      { input: '1', out: 'no primo' },
      { input: '2', out: 'primo' },
      { input: '9', out: 'no primo' },
      { input: '97', out: 'primo' },
      { input: '100', out: 'no primo' }
    ],
    stdin: '13'
  },
  {
    id: 'm6',
    title: 'Refactoriza: descuento repetido',
    concept:
      'Si copias y pegas un bloque, probablemente querías un método: detecta qué cambia (parámetro), qué sale (valor devuelto) y llámalo cada vez.',
    task: 'En una tienda, si el precio supera 50 se aplica un 10&nbsp;% de descuento. Escribe <code>static double aplicarDescuento(double precio)</code>. En <code>main</code>, lee dos precios (<code>nextDouble()</code>) y muestra el precio final de cada uno, uno por línea, llamando dos veces al método.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    // escribe aquí tu método\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n\n    }\n}\n',
    rules: [
      {
        re: /static\s+double\s+aplicarDescuento\s*\(\s*double\s+\w+\s*\)/,
        msg: 'Método static double aplicarDescuento(double precio)'
      }
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static double aplicarDescuento(double precio) {\n        if (precio > 50) {\n            return precio * 0.9;\n        }\n        return precio;\n    }\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double precio1 = teclado.nextDouble();\n        double precio2 = teclado.nextDouble();\n        System.out.println(aplicarDescuento(precio1));\n        System.out.println(aplicarDescuento(precio2));\n    }\n}\n',
    hints: [
      'Lo que cambia entre las dos llamadas es el precio: será el parámetro.',
      'Lo que sale es el precio final: el método lo devuelve.',
      'Dentro: si el precio es mayor que 50, <code>return precio * 0.9</code>; si no, <code>return precio</code>.'
    ],
    notes:
      '<p>El mismo bloque, escrito una sola vez. Si mañana el descuento cambia al 15&nbsp;%, solo se modifica un sitio.</p>',
    kind: 'code',
    s: 'metodos',
    tests: [
      { input: '80\n30', out: '72.0\n30.0' },
      { input: '50\n51', out: '50.0\n45.9' },
      { input: '100\n10', out: '90.0\n10.0' }
    ],
    stdin: '80\n30'
  },
  {
    id: 'fx-metodos',
    title: '🔧 Corrige: Precio con IVA',
    concept:
      'Un método que calcula algo debe <b>devolver</b> el resultado correcto: mira exactamente qué expresión aparece tras <code>return</code>.',
    task: '<b>Este código tiene un fallo.</b> Lee un precio y muestra el precio con un 21&nbsp;% de IVA. Con 100 debe mostrar <code>121.0</code>, pero muestra <code>100.0</code>. Pulsa <b>Ejecutar</b>, mira qué sale, encuentra el error y corrígelo. No lo reescribas entero: arregla solo lo que falla.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static double conIva(double precio) {\n        double iva = precio * 0.21;\n        return precio;\n    }\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double p = teclado.nextDouble();\n        System.out.println(conIva(p));\n    }\n}\n',
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static double conIva(double precio) {\n        double iva = precio * 0.21;\n        return precio + iva;\n    }\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double p = teclado.nextDouble();\n        System.out.println(conIva(p));\n    }\n}\n',
    hints: [
      'El método calcula <code>iva</code>, pero ¿lo usa para algo?',
      'Fíjate en lo que hay después de <code>return</code>.',
      'Debe devolver el precio <b>más</b> el IVA.'
    ],
    notes:
      '<p>El IVA se calculaba y se descartaba: el <code>return</code> devolvía el precio sin tocar. Con <code>precio + iva</code> sale 121.0.</p>',
    kind: 'code',
    s: 'metodos',
    tests: [
      { input: '100', out: '121.0' },
      { input: '50', out: '60.5' },
      { input: '0', out: '0.0' }
    ],
    stdin: '100'
  }
];
EX2M.forEach(function (f) {
  CODEX.push(f);
});
