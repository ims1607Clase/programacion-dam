/* ============================================================
   Relación de ejercicios del profesor (Tema 2)
   Enunciado, solución y corrección de cada ejercicio de la relación. Se hacen en NetBeans; aquí solo se muestra la corrección.
   ============================================================ */
/* generado por dam/gen */
var PROF2 = [
  {
    id: 'q1',
    t: '1. Estructuras de selección',
    items: [
      {
        id: 't2-1-1',
        title: 'Positivo y negativo',
        src: '1. Estructuras de selección · Ejercicio 1 · RA 3 · CE a)',
        task: 'Lee un entero y di si es positivo o negativo. Salida: <code>El número -7 es negativo</code> / <code>El número 7 es positivo</code>. Si es 0, trátalo aparte: <code>El número 0 es cero</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        if (n > 0) {\n            System.out.println("El número " + n + " es positivo");\n        } else if (n < 0) {\n            System.out.println("El número " + n + " es negativo");\n        } else {\n            System.out.println("El número 0 es cero");\n        }\n    }\n}\n',
        notes:
          '<p>Con un <code>if / else</code> doble el 0 saldría como «negativo» (o «positivo»): hay que tratarlo aparte con un tercer camino (<code>else if</code>).</p>',
        s: 'prof',
        tests: [
          {
            input: '7',
            out: 'El número 7 es positivo'
          },
          {
            input: '-7',
            out: 'El número -7 es negativo'
          },
          {
            input: '0',
            out: 'El número 0 es cero'
          }
        ],
        stdin: '7',
        kind: 'code'
      },
      {
        id: 't2-1-2',
        title: 'Raíz cuadrada',
        src: '1. Estructuras de selección · Ejercicio 2 · RA 3 · CE a)',
        task: 'Calcula la raíz cuadrada de un número real (<code>double</code>). Antes comprueba que no sea negativo: si lo es, muestra <code>No se puede calcular la raíz de un número negativo</code>; si no, <code>La raíz cuadrada de 16.0 es 4.0</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double n = teclado.nextDouble();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double n = teclado.nextDouble();\n        if (n < 0) {\n            System.out.println("No se puede calcular la raíz de un número negativo");\n        } else {\n            System.out.println("La raíz cuadrada de " + n + " es " + Math.sqrt(n));\n        }\n    }\n}\n',
        notes:
          '<p>Si pasas un número negativo a <code>Math.sqrt</code> el resultado es <code>NaN</code> (no es un número); por eso se comprueba antes con un <code>if</code>.</p>',
        s: 'prof',
        tests: [
          {
            input: '16',
            out: 'La raíz cuadrada de 16.0 es 4.0'
          },
          {
            input: '-4',
            out: 'No se puede calcular la raíz de un número negativo'
          },
          {
            input: '2',
            out: 'La raíz cuadrada de 2.0 es 1.4142135623730951'
          },
          {
            input: '0',
            out: 'La raíz cuadrada de 0.0 es 0.0'
          }
        ],
        stdin: '16',
        kind: 'code'
      },
      {
        id: 't2-1-3',
        title: 'Restar',
        src: '1. Estructuras de selección · Ejercicio 3 · RA 3 · CE a)',
        task: 'Lee dos enteros A y B y muestra la resta del <b>mayor menos el menor</b> (solo el número). Si A = 8 y B = 3 → <code>5</code>; si A = 4 y B = 7 → <code>3</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        if (a > b) {\n            System.out.println(a - b);\n        } else {\n            System.out.println(b - a);\n        }\n    }\n}\n',
        notes:
          '<p>Es una condicional doble: si A es mayor, restas <code>a - b</code>; si no, <code>b - a</code>. (Con A = B sale 0 por cualquiera de los dos caminos.)</p>',
        s: 'prof',
        tests: [
          {
            input: '8\n3',
            out: '5'
          },
          {
            input: '4\n7',
            out: '3'
          },
          {
            input: '5\n5',
            out: '0'
          }
        ],
        stdin: '8\n3',
        kind: 'code'
      },
      {
        id: 't2-1-4',
        title: 'Año bisiesto',
        src: '1. Estructuras de selección · Ejercicio 4 · RA 3 · CE a)',
        task: 'Determina si un año es bisiesto: divisible entre 4, salvo que lo sea entre 100, aunque si lo es entre 400, sí. Muestra <code>El año 2024 es bisiesto</code> o <code>El año 2023 no es bisiesto</code>. Pruébalo con 2024, 2023, 1900 y 2000.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int anio = teclado.nextInt();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int anio = teclado.nextInt();\n        if ((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) {\n            System.out.println("El año " + anio + " es bisiesto");\n        } else {\n            System.out.println("El año " + anio + " no es bisiesto");\n        }\n    }\n}\n',
        notes:
          '<p>La condición en una sola línea: es bisiesto si <b>(divisible entre 4 y NO entre 100) O divisible entre 400</b>. Cuidado con los paréntesis: <code>&amp;&amp;</code> se evalúa antes que <code>||</code>, pero conviene dejarlo explícito.</p>',
        s: 'prof',
        tests: [
          {
            input: '2024',
            out: 'El año 2024 es bisiesto'
          },
          {
            input: '2023',
            out: 'El año 2023 no es bisiesto'
          },
          {
            input: '1900',
            out: 'El año 1900 no es bisiesto'
          },
          {
            input: '2000',
            out: 'El año 2000 es bisiesto'
          }
        ],
        stdin: '2024',
        kind: 'code'
      },
      {
        id: 't2-1-5',
        title: 'Parte decimal',
        src: '1. Estructuras de selección · Ejercicio 5 · RA 3 · CE a)',
        task: 'Averigua si un número real tiene parte decimal. Puedes usar <code>Math.round()</code>. Muestra <code>Tiene parte decimal</code> o <code>No tiene parte decimal</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double n = teclado.nextDouble();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double n = teclado.nextDouble();\n        if (n != Math.round(n)) {\n            System.out.println("Tiene parte decimal");\n        } else {\n            System.out.println("No tiene parte decimal");\n        }\n    }\n}\n',
        notes:
          '<p><code>Math.round(n)</code> redondea al entero más cercano. Si el número ya era entero (como 4.0), redondearlo no lo cambia; si tenía decimales, sí cambia.</p>',
        s: 'prof',
        tests: [
          {
            input: '3.5',
            out: 'Tiene parte decimal'
          },
          {
            input: '4.0',
            out: 'No tiene parte decimal'
          },
          {
            input: '-2.25',
            out: 'Tiene parte decimal'
          },
          {
            input: '7',
            out: 'No tiene parte decimal'
          },
          {
            input: '0.1',
            out: 'Tiene parte decimal'
          }
        ],
        stdin: '3.5',
        kind: 'code'
      },
      {
        id: 't2-1-6',
        title: 'Números ordenados',
        src: '1. Estructuras de selección · Ejercicio 6 · RA 3 · CE a)',
        task: 'Lee tres enteros X, Y, Z y di si están ordenados de menor a mayor (estrictamente, <code>X &lt; Y &lt; Z</code>): <code>Están ordenados</code> / <code>No están ordenados</code>. Si lo están, añade una segunda línea: <code>Son consecutivos</code> (como 4, 5, 6) o <code>No son consecutivos</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int x = teclado.nextInt();\n        int y = teclado.nextInt();\n        int z = teclado.nextInt();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int x = teclado.nextInt();\n        int y = teclado.nextInt();\n        int z = teclado.nextInt();\n        if (x < y && y < z) {\n            System.out.println("Están ordenados");\n            if (y == x + 1 && z == y + 1) {\n                System.out.println("Son consecutivos");\n            } else {\n                System.out.println("No son consecutivos");\n            }\n        } else {\n            System.out.println("No están ordenados");\n        }\n    }\n}\n',
        notes:
          '<p>Un <code>if</code> dentro de otro: la pregunta de los consecutivos solo tiene sentido si ya están ordenados.</p>',
        s: 'prof',
        tests: [
          {
            input: '4\n5\n6',
            out: 'Están ordenados\nSon consecutivos'
          },
          {
            input: '1\n3\n8',
            out: 'Están ordenados\nNo son consecutivos'
          },
          {
            input: '9\n2\n5',
            out: 'No están ordenados'
          },
          {
            input: '5\n5\n7',
            out: 'No están ordenados'
          }
        ],
        stdin: '4\n5\n6',
        kind: 'code'
      },
      {
        id: 't2-1-7',
        title: 'Contar cifras',
        src: '1. Estructuras de selección · Ejercicio 7 · RA 3 · CE a)',
        task: 'Cuántas cifras tiene un entero de hasta 5 cifras, que puede ser negativo (5342 → 4, −250 → 3). Sin bucles, solo condiciones. Muestra solo el número de cifras. El 0 tiene 1 cifra.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = Math.abs(teclado.nextInt());\n        int cifras;\n        if (n < 10) {\n            cifras = 1;\n        } else if (n < 100) {\n            cifras = 2;\n        } else if (n < 1000) {\n            cifras = 3;\n        } else if (n < 10000) {\n            cifras = 4;\n        } else {\n            cifras = 5;\n        }\n        System.out.println(cifras);\n    }\n}\n',
        rules: [
          {
            re: /Math\.abs|-\s*n|n\s*\*\s*-1/,
            msg: 'Trata los negativos (por ejemplo con Math.abs)'
          }
        ],
        notes:
          '<p>Para que los negativos no estorben, trabaja con el valor absoluto (<code>Math.abs</code>). Después, una cadena de <code>else if</code> por rangos: &lt;10, &lt;100, &lt;1000…</p>',
        s: 'prof',
        tests: [
          {
            input: '5342',
            out: '4'
          },
          {
            input: '-250',
            out: '3'
          },
          {
            input: '7',
            out: '1'
          },
          {
            input: '0',
            out: '1'
          },
          {
            input: '99999',
            out: '5'
          },
          {
            input: '-12345',
            out: '5'
          },
          {
            input: '100',
            out: '3'
          },
          {
            input: '-9',
            out: '1'
          }
        ],
        stdin: '5342',
        kind: 'code'
      },
      {
        id: 't2-1-8',
        title: 'Mayor, menor y mediano',
        src: '1. Estructuras de selección · Ejercicio 8 · RA 3 · CE a)',
        task: 'Dados tres enteros A, B y C, muestra cuál es el mayor, el menor y el mediano, en tres líneas: <code>Mayor: 9</code>, <code>Menor: 2</code>, <code>Mediano: 5</code>. Sin bucles ni arrays.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        int c = teclado.nextInt();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        int c = teclado.nextInt();\n        int mayor = Math.max(a, Math.max(b, c));\n        int menor = Math.min(a, Math.min(b, c));\n        int mediano = a + b + c - mayor - menor;\n        System.out.println("Mayor: " + mayor);\n        System.out.println("Menor: " + menor);\n        System.out.println("Mediano: " + mediano);\n    }\n}\n',
        notes:
          '<p>Truco: el mediano es lo que sobra al quitar el mayor y el menor de la suma de los tres. Si hay repetidos (7, 7, 3) también funciona.</p>',
        s: 'prof',
        tests: [
          {
            input: '5\n9\n2',
            out: 'Mayor: 9\nMenor: 2\nMediano: 5'
          },
          {
            input: '1\n2\n3',
            out: 'Mayor: 3\nMenor: 1\nMediano: 2'
          },
          {
            input: '7\n7\n3',
            out: 'Mayor: 7\nMenor: 3\nMediano: 7'
          },
          {
            input: '-1\n-5\n-3',
            out: 'Mayor: -1\nMenor: -5\nMediano: -3'
          },
          {
            input: '4\n4\n4',
            out: 'Mayor: 4\nMenor: 4\nMediano: 4'
          }
        ],
        stdin: '5\n9\n2',
        kind: 'code'
      },
      {
        id: 't2-1-9a',
        title: 'Calculadora sencilla (if-else)',
        src: '1. Estructuras de selección · Ejercicio 9.1 y 9.3 · RA 3 · CE a)',
        task: 'Lee dos números reales A y B y un operador (<code>+ - * /</code>, un <code>char</code>), en ese orden. Muestra el resultado. Resuélvelo con <b>if-else encadenados</b>. Si el operador no es válido muestra <code>Operador no válido</code>; si divides entre 0, <code>No se puede dividir entre cero</code>. (El operador se lee con <code>teclado.next().charAt(0)</code>.)',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double a = teclado.nextDouble();\n        double b = teclado.nextDouble();\n        char op = teclado.next().charAt(0);\n\n    }\n}\n',
        rules: [
          {
            re: /else\s+if/,
            msg: 'Usa if-else encadenados'
          },
          {
            re: /\bswitch\b/,
            not: true,
            msg: 'No uses switch en esta versión'
          }
        ],
        solution:
          "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double a = teclado.nextDouble();\n        double b = teclado.nextDouble();\n        char op = teclado.next().charAt(0);\n        if (op == '+') {\n            System.out.println(a + b);\n        } else if (op == '-') {\n            System.out.println(a - b);\n        } else if (op == '*') {\n            System.out.println(a * b);\n        } else if (op == '/') {\n            if (b == 0) {\n                System.out.println(\"No se puede dividir entre cero\");\n            } else {\n                System.out.println(a / b);\n            }\n        } else {\n            System.out.println(\"Operador no válido\");\n        }\n    }\n}\n",
        notes:
          '<p>Los operadores se comparan con <code>==</code> porque son <code>char</code>. La división entre 0 se controla con un <code>if</code> dentro de la rama de <code>/</code>.</p>',
        s: 'prof',
        tests: [
          {
            input: '5\n2\n+',
            out: '7.0'
          },
          {
            input: '5\n2\n-',
            out: '3.0'
          },
          {
            input: '5\n2\n*',
            out: '10.0'
          },
          {
            input: '5\n2\n/',
            out: '2.5'
          },
          {
            input: '5\n0\n/',
            out: 'No se puede dividir entre cero'
          },
          {
            input: '5\n2\n%',
            out: 'Operador no válido'
          }
        ],
        stdin: '5\n2\n+',
        kind: 'code'
      },
      {
        id: 't2-1-9b',
        title: 'Calculadora sencilla (switch)',
        src: '1. Estructuras de selección · Ejercicio 9.2 y 9.3 · RA 3 · CE a)',
        task: 'La misma calculadora, ahora con <b>switch</b> sobre el operador (mismas entradas y mismos mensajes). Sin olvidar los <code>break</code> ni el <code>default</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double a = teclado.nextDouble();\n        double b = teclado.nextDouble();\n        char op = teclado.next().charAt(0);\n\n    }\n}\n',
        rules: [
          {
            re: /\bswitch\s*\(/,
            msg: 'Usa switch'
          },
          {
            re: /\bdefault\s*:/,
            msg: 'Tiene default'
          }
        ],
        solution:
          "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double a = teclado.nextDouble();\n        double b = teclado.nextDouble();\n        char op = teclado.next().charAt(0);\n        switch (op) {\n            case '+':\n                System.out.println(a + b);\n                break;\n            case '-':\n                System.out.println(a - b);\n                break;\n            case '*':\n                System.out.println(a * b);\n                break;\n            case '/':\n                if (b == 0) {\n                    System.out.println(\"No se puede dividir entre cero\");\n                } else {\n                    System.out.println(a / b);\n                }\n                break;\n            default:\n                System.out.println(\"Operador no válido\");\n        }\n    }\n}\n",
        notes:
          '<p>Sin <code>break</code> el <code>switch</code> sigue ejecutando los <code>case</code> siguientes. El <code>default</code> recoge los operadores no válidos.</p>',
        s: 'prof',
        tests: [
          {
            input: '5\n2\n+',
            out: '7.0'
          },
          {
            input: '5\n2\n-',
            out: '3.0'
          },
          {
            input: '5\n2\n*',
            out: '10.0'
          },
          {
            input: '5\n2\n/',
            out: '2.5'
          },
          {
            input: '5\n0\n/',
            out: 'No se puede dividir entre cero'
          },
          {
            input: '5\n2\n%',
            out: 'Operador no válido'
          }
        ],
        stdin: '5\n2\n+',
        kind: 'code'
      }
    ]
  },
  {
    id: 'q2',
    t: '2. Estructuras de repetición',
    items: [
      {
        id: 't2-2-1',
        title: 'Pares',
        src: '2. Estructuras de repetición · Ejercicio 1 · RA 3 · CE b)',
        task: 'Muestra todos los números <b>pares entre A y B</b> (ambos incluidos), dos números introducidos por teclado, uno por línea. A debe ser menor que B; si no lo es, muestra <code>A tiene que ser menor que B, ¡inténtalo otra vez!</code>. Usa un <code>while</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n\n    }\n}\n',
        rules: [
          {
            re: /\bwhile\s*\(/,
            msg: 'Usa un bucle while'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        if (a >= b) {\n            System.out.println("A tiene que ser menor que B, ¡inténtalo otra vez!");\n        } else {\n            int i = a;\n            while (i <= b) {\n                if (i % 2 == 0) {\n                    System.out.println(i);\n                }\n                i++;\n            }\n        }\n    }\n}\n',
        notes:
          '<p>Un contador <code>i</code> que empieza en A y sube de uno en uno mientras <code>i &lt;= b</code>; dentro, un <code>if</code> filtra los pares con <code>i % 2 == 0</code>. No olvides el <code>i++</code> o el bucle sería infinito.</p>',
        s: 'prof',
        tests: [
          {
            input: '3\n10',
            out: '4\n6\n8\n10'
          },
          {
            input: '2\n7',
            out: '2\n4\n6'
          },
          {
            input: '10\n3',
            out: 'A tiene que ser menor que B, ¡inténtalo otra vez!'
          },
          {
            input: '4\n4',
            out: 'A tiene que ser menor que B, ¡inténtalo otra vez!'
          },
          {
            input: '-3\n3',
            out: '-2\n0\n2'
          }
        ],
        stdin: '3\n10',
        kind: 'code'
      },
      {
        id: 't2-2-2',
        title: 'Impares',
        src: '2. Estructuras de repetición · Ejercicio 2 · RA 3 · CE a), b)',
        task: 'Muestra todos los números <b>impares entre A y B</b> (ambos incluidos). Cualquiera de los dos puede ser el mayor: averigua cuál es el menor para empezar por él. Salida: de menor a mayor, uno por línea. Usa <code>while</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n\n    }\n}\n',
        rules: [
          {
            re: /\bwhile\s*\(/,
            msg: 'Usa un bucle while'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        int menor = Math.min(a, b);\n        int mayor = Math.max(a, b);\n        int i = menor;\n        while (i <= mayor) {\n            if (i % 2 != 0) {\n                System.out.println(i);\n            }\n            i++;\n        }\n    }\n}\n',
        notes:
          '<p><code>Math.min</code> y <code>Math.max</code> resuelven la duda de cuál es el menor. Ojo con los negativos: <code>-3 % 2</code> vale <code>-1</code>, por eso se pregunta <code>!= 0</code> y no <code>== 1</code>.</p>',
        s: 'prof',
        tests: [
          {
            input: '2\n9',
            out: '3\n5\n7\n9'
          },
          {
            input: '9\n2',
            out: '3\n5\n7\n9'
          },
          {
            input: '4\n4',
            out: ''
          },
          {
            input: '3\n3',
            out: '3'
          },
          {
            input: '-4\n4',
            out: '-3\n-1\n1\n3'
          }
        ],
        stdin: '2\n9',
        kind: 'code'
      },
      {
        id: 't2-2-3',
        title: 'Pares o nones',
        src: '2. Estructuras de repetición · Ejercicio 3 · RA 3 · CE a), b)',
        task: 'Primero se lee una letra: <code>p</code> (pares) o <code>i</code> (impares); después A y B (cualquiera puede ser el mayor). Muestra los pares o impares entre A y B, de menor a mayor, uno por línea. Reutiliza el código de los dos anteriores.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        char opcion = teclado.next().charAt(0);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n\n    }\n}\n',
        solution:
          "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        char opcion = teclado.next().charAt(0);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        int i = Math.min(a, b);\n        int fin = Math.max(a, b);\n        int resto = 1;\n        if (opcion == 'p') {\n            resto = 0;\n        }\n        while (i <= fin) {\n            if (Math.abs(i % 2) == resto) {\n                System.out.println(i);\n            }\n            i++;\n        }\n    }\n}\n",
        notes:
          '<p>Truco para reutilizar: en vez de dos bucles, guarda en una variable (<code>resto</code>) qué resto buscas (0 para pares, 1 para impares) y haz un solo bucle. <code>Math.abs(i % 2)</code> evita el −1 de los negativos.</p>',
        s: 'prof',
        tests: [
          {
            input: 'p\n3\n10',
            out: '4\n6\n8\n10'
          },
          {
            input: 'i\n10\n3',
            out: '3\n5\n7\n9'
          },
          {
            input: 'p\n-2\n2',
            out: '-2\n0\n2'
          },
          {
            input: 'i\n-3\n3',
            out: '-3\n-1\n1\n3'
          }
        ],
        stdin: 'p\n3\n10',
        kind: 'code'
      },
      {
        id: 't2-2-4',
        title: 'Tabla de multiplicar',
        src: '2. Estructuras de repetición · Ejercicio 4 · RA 3 · CE b)',
        task: 'El usuario teclea un número y se muestra su tabla de multiplicar del 1 al 10, bien presentada: <code>8 x 1 = 8</code>, <code>8 x 2 = 16</code>… Usa un <code>for</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n\n    }\n}\n',
        rules: [
          {
            re: /\bfor\s*\(/,
            msg: 'Usa un bucle for'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(n + " x " + i + " = " + n * i);\n        }\n    }\n}\n',
        notes:
          '<p>El <code>for</code> es ideal cuando sabes cuántas veces repetir (10). Cuidado al concatenar: <code>n * i</code> funciona porque <code>*</code> tiene más prioridad que <code>+</code>, pero una suma habría que ponerla entre paréntesis.</p>',
        s: 'prof',
        tests: [
          {
            input: '8',
            out: '8 x 1 = 8\n8 x 2 = 16\n8 x 3 = 24\n8 x 4 = 32\n8 x 5 = 40\n8 x 6 = 48\n8 x 7 = 56\n8 x 8 = 64\n8 x 9 = 72\n8 x 10 = 80'
          },
          {
            input: '3',
            out: '3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30'
          },
          {
            input: '0',
            out: '0 x 1 = 0\n0 x 2 = 0\n0 x 3 = 0\n0 x 4 = 0\n0 x 5 = 0\n0 x 6 = 0\n0 x 7 = 0\n0 x 8 = 0\n0 x 9 = 0\n0 x 10 = 0'
          }
        ],
        stdin: '8',
        kind: 'code'
      },
      {
        id: 't2-2-5a',
        title: 'Dibujando con asteriscos (1): pirámide',
        src: '2. Estructuras de repetición · Ejercicio 5 · RA 3 · CE b)',
        task: 'Dibuja esta pirámide con bucles (nada de escribir las líneas a mano):<pre>   *\n  ***\n *****\n*******</pre>',
        starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
        rules: [
          {
            re: /\bfor\s*\(/,
            msg: 'Usa un bucle for'
          }
        ],
        tests: [
          {
            input: '',
            out: '   *\n  ***\n *****\n*******'
          }
        ],
        solution:
          'public class Main {\n    public static void main(String[] args) {\n        for (int fila = 1; fila <= 4; fila++) {\n            for (int e = 0; e < 4 - fila; e++) {\n                System.out.print(" ");\n            }\n            for (int s = 0; s < 2 * fila - 1; s++) {\n                System.out.print("*");\n            }\n            System.out.println();\n        }\n    }\n}\n',
        notes:
          '<p>Dos bucles dentro de uno (<b>bucles anidados</b>): el de fuera recorre las filas; los de dentro escriben primero los <b>espacios</b> (4 − fila) y después los <b>asteriscos</b> (2·fila − 1). El <code>println()</code> final cambia de línea.</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't2-2-5b',
        title: 'Dibujando con asteriscos (2): rombo',
        src: '2. Estructuras de repetición · Ejercicio 5 · RA 3 · CE b)',
        task: 'Dibuja este rombo con bucles:<pre>   *\n  ***\n *****\n*******\n *****\n  ***\n   *</pre>',
        starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
        rules: [
          {
            re: /\bfor\s*\(/,
            msg: 'Usa un bucle for'
          }
        ],
        tests: [
          {
            input: '',
            out: '   *\n  ***\n *****\n*******\n *****\n  ***\n   *'
          }
        ],
        solution:
          'public class Main {\n    public static void main(String[] args) {\n        for (int fila = 1; fila <= 4; fila++) {\n            for (int e = 0; e < 4 - fila; e++) {\n                System.out.print(" ");\n            }\n            for (int s = 0; s < 2 * fila - 1; s++) {\n                System.out.print("*");\n            }\n            System.out.println();\n        }\n        for (int fila = 3; fila >= 1; fila--) {\n            for (int e = 0; e < 4 - fila; e++) {\n                System.out.print(" ");\n            }\n            for (int s = 0; s < 2 * fila - 1; s++) {\n                System.out.print("*");\n            }\n            System.out.println();\n        }\n    }\n}\n',
        notes:
          '<p>Es la pirámide anterior seguida de la misma pirámide <b>al revés</b> (filas 3, 2, 1), sin repetir la fila más ancha.</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't2-2-5c',
        title: 'Dibujando con asteriscos (3): árbol de Navidad',
        src: '2. Estructuras de repetición · Ejercicio 5 · RA 3 · CE b)',
        task: 'Dibuja el árbol de Navidad (tres pisos y el tronco) con bucles:<pre>    *\n   ***\n    *\n   ***\n  *****\n *******\n    *\n   ***\n  *****\n *******\n*********\n   ***\n   ***</pre>',
        starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
        rules: [
          {
            re: /\bfor\s*\(/,
            msg: 'Usa un bucle for'
          }
        ],
        tests: [
          {
            input: '',
            out: '    *\n   ***\n    *\n   ***\n  *****\n *******\n    *\n   ***\n  *****\n *******\n*********\n   ***\n   ***'
          }
        ],
        solution:
          'public class Main {\n    public static void main(String[] args) {\n        for (int piso = 1; piso <= 3; piso++) {\n            int filas = 5;\n            if (piso == 1) {\n                filas = 2;\n            } else if (piso == 2) {\n                filas = 4;\n            }\n            for (int fila = 1; fila <= filas; fila++) {\n                for (int e = 0; e < 5 - fila; e++) {\n                    System.out.print(" ");\n                }\n                for (int s = 0; s < 2 * fila - 1; s++) {\n                    System.out.print("*");\n                }\n                System.out.println();\n            }\n        }\n        for (int t = 0; t < 2; t++) {\n            System.out.println("   ***");\n        }\n    }\n}\n',
        notes:
          '<p>Cada <b>piso</b> es una pirámide que empieza otra vez desde 1 asterisco: tiene 2, 4 y 5 filas. Un bucle exterior recorre los pisos y dentro se dibuja cada pirámide. Después, el tronco: dos veces la misma línea.</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't2-2-6',
        title: 'Acumulador simple',
        src: '2. Estructuras de repetición · Ejercicio 6 · RA 3 · CE b)',
        task: 'Calcula la suma de todos los números pares entre 1 y 1000 (2 + 4 + 6 + … + 1000) y muéstrala (solo el número).',
        starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
        rules: [
          {
            re: /\b(for|while)\s*\(/,
            msg: 'Usa un bucle'
          }
        ],
        tests: [
          {
            input: '',
            out: '250500'
          }
        ],
        solution:
          'public class Main {\n    public static void main(String[] args) {\n        int suma = 0;\n        for (int i = 2; i <= 1000; i += 2) {\n            suma += i;\n        }\n        System.out.println(suma);\n    }\n}\n',
        notes:
          '<p><code>suma</code> es un <b>acumulador</b>: empieza en 0 y en cada vuelta se le añade el número. El <code>i += 2</code> salta de dos en dos, así que solo pasa por pares.</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't2-2-7',
        title: 'Acumulador interactivo: la media',
        src: '2. Estructuras de repetición · Ejercicio 7 · RA 3 · CE b)',
        task: 'Calcula la media de una serie de enteros positivos. El usuario escribe números hasta teclear uno <b>negativo</b> (que no cuenta). Muestra <code>La media es 6.0</code>. Si el primero ya es negativo, muestra <code>No has introducido ningún número</code> (no se puede dividir entre 0). Usa <code>do-while</code> o <code>while</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n;\n        int suma = 0;\n        int cuenta = 0;\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int suma = 0;\n        int cuenta = 0;\n        int n = teclado.nextInt();\n        while (n >= 0) {\n            suma += n;\n            cuenta++;\n            n = teclado.nextInt();\n        }\n        if (cuenta == 0) {\n            System.out.println("No has introducido ningún número");\n        } else {\n            System.out.println("La media es " + (double) suma / cuenta);\n        }\n    }\n}\n',
        notes:
          '<p>Dos variables: <code>suma</code> y <code>cuenta</code> (un <b>acumulador</b> y un <b>contador</b>). El valor negativo es el <b>centinela</b>: marca el fin y no se suma. Hay que comprobar <code>cuenta == 0</code> antes de dividir. <code>(double) suma / cuenta</code> evita la división entera.</p>',
        s: 'prof',
        tests: [
          {
            input: '4\n6\n8\n-1',
            out: 'La media es 6.0'
          },
          {
            input: '-5',
            out: 'No has introducido ningún número'
          },
          {
            input: '3\n4\n-1',
            out: 'La media es 3.5'
          },
          {
            input: '10\n0\n-2',
            out: 'La media es 5.0'
          }
        ],
        stdin: '4\n6\n8\n-1',
        kind: 'code'
      },
      {
        id: 't2-2-8',
        title: 'Estadística básica',
        src: '2. Estructuras de repetición · Ejercicio 8 · RA 3 · CE b)',
        task: 'Lee 10 enteros y muestra el mayor, el menor y la media, en tres líneas: <code>Mayor: 9</code>, <code>Menor: 1</code>, <code>Media: 4.5</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        int mayor = n;\n        int menor = n;\n        int suma = n;\n        // quedan 9 números por leer\n\n    }\n}\n',
        rules: [
          {
            re: /\b(for|while)\s*\(/,
            msg: 'Usa un bucle'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        int mayor = n;\n        int menor = n;\n        int suma = n;\n        for (int i = 2; i <= 10; i++) {\n            n = teclado.nextInt();\n            if (n > mayor) {\n                mayor = n;\n            }\n            if (n < menor) {\n                menor = n;\n            }\n            suma += n;\n        }\n        System.out.println("Mayor: " + mayor);\n        System.out.println("Menor: " + menor);\n        System.out.println("Media: " + suma / 10.0);\n    }\n}\n',
        notes:
          '<p>Truco: inicializa <code>mayor</code> y <code>menor</code> con el <b>primer número leído</b> (no con 0: si todos son negativos fallaría). Luego compara cada nuevo número con ellos.</p>',
        s: 'prof',
        tests: [
          {
            input: '3\n9\n1\n4\n5\n2\n8\n7\n6\n0',
            out: 'Mayor: 9\nMenor: 0\nMedia: 4.5'
          },
          {
            input: '5\n5\n5\n5\n5\n5\n5\n5\n5\n5',
            out: 'Mayor: 5\nMenor: 5\nMedia: 5.0'
          },
          {
            input: '-3\n-9\n-1\n-4\n-5\n-2\n-8\n-7\n-6\n-10',
            out: 'Mayor: -1\nMenor: -10\nMedia: -5.5'
          }
        ],
        stdin: '3\n9\n1\n4\n5\n2\n8\n7\n6\n0',
        kind: 'code'
      },
      {
        id: 't2-2-9',
        title: 'Notas de clase',
        src: '2. Estructuras de repetición · Ejercicio 9 · RA 3 · CE a), b)',
        task: 'Se introducen, una a una, las notas de 30 alumnos. Muestra cuántos <b>aprobados</b> (nota ≥ 5) y cuántos <b>suspensos</b>. Las notas van de 1 a 10: si se teclea otra cosa, rechaza el valor (muestra <code>Nota no válida</code>) y vuelve a pedirlo. Salida: <code>Aprobados: 20</code> y <code>Suspensos: 10</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int aprobados = 0;\n        int suspensos = 0;\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int aprobados = 0;\n        int suspensos = 0;\n        for (int alumno = 1; alumno <= 30; alumno++) {\n            int nota;\n            do {\n                nota = teclado.nextInt();\n                if (nota < 1 || nota > 10) {\n                    System.out.println("Nota no válida");\n                }\n            } while (nota < 1 || nota > 10);\n            if (nota >= 5) {\n                aprobados++;\n            } else {\n                suspensos++;\n            }\n        }\n        System.out.println("Aprobados: " + aprobados);\n        System.out.println("Suspensos: " + suspensos);\n    }\n}\n',
        notes:
          '<p>Un <code>for</code> exterior cuenta los 30 alumnos y un <code>do-while</code> interior repite la petición mientras la nota sea inválida (hay que pedir al menos una vez: por eso <code>do-while</code>).</p>',
        s: 'prof',
        tests: [
          {
            input:
              '1\n8\n5\n2\n9\n6\n3\n10\n7\n4\n1\n8\n5\n2\n9\n6\n3\n10\n7\n4\n1\n8\n5\n2\n9\n6\n3\n10\n7\n4',
            out: 'Aprobados: 18\nSuspensos: 12'
          },
          {
            input:
              '0\n11\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5\n5',
            out: 'Nota no válida\nNota no válida\nAprobados: 30\nSuspensos: 0'
          },
          {
            input: '4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4\n4',
            out: 'Aprobados: 0\nSuspensos: 30'
          }
        ],
        stdin: '1\n8\n5\n2\n9\n6\n3\n10\n7\n4\n1\n8\n5\n2\n9\n6\n3\n10\n7\n4\n1\n8\n5\n2\n9\n6\n3\n10\n7\n4',
        kind: 'code'
      },
      {
        id: 't2-2-10',
        title: 'Factorial',
        src: '2. Estructuras de repetición · Ejercicio 10 · RA 3 · CE b)',
        task: 'Calcula el factorial de un entero N (5! = 5·4·3·2·1 = 120). Usa <code>long</code> para el resultado y muestra <code>El factorial de 5 es 120</code>. Prueba con 20, 21, 30… ¿qué ocurre? (Mira la nota de la corrección.) El factorial de 0 es 1.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        long factorial = 1;\n        for (int i = 2; i <= n; i++) {\n            factorial *= i;\n        }\n        System.out.println("El factorial de " + n + " es " + factorial);\n    }\n}\n',
        notes:
          '<p>Un <code>long</code> llega hasta unos 9,2·10¹⁸. 20! = 2 432 902 008 176 640 000 aún cabe, pero <b>21! ya no</b>: se produce <b>desbordamiento</b> y Java no avisa, el valor «da la vuelta» y sale un número absurdo (incluso negativo). Con <code>int</code> el problema aparece ya en 13!.</p>',
        s: 'prof',
        tests: [
          {
            input: '5',
            out: 'El factorial de 5 es 120'
          },
          {
            input: '0',
            out: 'El factorial de 0 es 1'
          },
          {
            input: '10',
            out: 'El factorial de 10 es 3628800'
          },
          {
            input: '20',
            out: 'El factorial de 20 es 2432902008176640000'
          },
          {
            input: '21',
            out: 'El factorial de 21 es -4249290049419214848'
          },
          {
            input: '25',
            out: 'El factorial de 25 es 7034535277573963776'
          }
        ],
        stdin: '5',
        kind: 'code'
      },
      {
        id: 't2-2-11',
        title: 'Sucesión de Fibonacci',
        src: '2. Estructuras de repetición · Ejercicio 11 · RA 3 · CE b)',
        task: 'Muestra los N primeros términos de la sucesión de Fibonacci (0, 1, 1, 2, 3, 5, 8…), N introducido por el usuario, <b>uno por línea</b>. Cada término es la suma de los dos anteriores; los dos primeros son 0 y 1.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n\n    }\n}\n',
        rules: [
          {
            re: /\bfor\s*\(/,
            msg: 'Usa un bucle for'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        long anterior = 0;\n        long actual = 1;\n        for (int i = 1; i <= n; i++) {\n            System.out.println(anterior);\n            long siguiente = anterior + actual;\n            anterior = actual;\n            actual = siguiente;\n        }\n    }\n}\n',
        notes:
          '<p>Mantienes dos variables (<code>anterior</code> y <code>actual</code>) y en cada vuelta escribes una, calculas la siguiente y «desplazas» los valores. Es el intercambio de variables del Tema 1.</p>',
        s: 'prof',
        tests: [
          {
            input: '1',
            out: '0'
          },
          {
            input: '2',
            out: '0\n1'
          },
          {
            input: '10',
            out: '0\n1\n1\n2\n3\n5\n8\n13\n21\n34'
          },
          {
            input: '0',
            out: ''
          },
          {
            input: '15',
            out: '0\n1\n1\n2\n3\n5\n8\n13\n21\n34\n55\n89\n144\n233\n377'
          }
        ],
        stdin: '1',
        kind: 'code'
      },
      {
        id: 't2-2-12',
        title: 'Número de la suerte',
        src: '2. Estructuras de repetición · Ejercicio 12 · RA 3 · CE b)',
        task: 'Lee día, mes y año de nacimiento (tres enteros). Suma los tres números, después suma las cifras del resultado y repite hasta quedarte con una sola cifra. Ej. 15-10-1974: 1999 → 28 → 10 → 1. Muestra <code>Tu número de la suerte es 1</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int dia = teclado.nextInt();\n        int mes = teclado.nextInt();\n        int anio = teclado.nextInt();\n\n    }\n}\n',
        rules: [
          {
            re: /\bwhile\s*\(/,
            msg: 'Usa un bucle while'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int dia = teclado.nextInt();\n        int mes = teclado.nextInt();\n        int anio = teclado.nextInt();\n        int numero = dia + mes + anio;\n        while (numero > 9) {\n            int suma = 0;\n            while (numero > 0) {\n                suma += numero % 10;\n                numero /= 10;\n            }\n            numero = suma;\n        }\n        System.out.println("Tu número de la suerte es " + numero);\n    }\n}\n',
        notes:
          '<p>Bucle exterior: mientras el número tenga más de una cifra (&gt; 9). Bucle interior: separa las cifras con <code>% 10</code> (la última cifra) y <code>/ 10</code> (la quita).</p>',
        s: 'prof',
        tests: [
          {
            input: '15\n10\n1974',
            out: 'Tu número de la suerte es 1'
          },
          {
            input: '1\n1\n2000',
            out: 'Tu número de la suerte es 4'
          },
          {
            input: '31\n12\n1999',
            out: 'Tu número de la suerte es 8'
          },
          {
            input: '9\n9\n9',
            out: 'Tu número de la suerte es 9'
          }
        ],
        stdin: '15\n10\n1974',
        kind: 'code'
      },
      {
        id: 't2-2-13',
        title: 'Primo',
        src: '2. Estructuras de repetición · Ejercicio 13 · RA 3 · CE b)',
        task: 'Determina si un número N es primo (solo divisible por sí mismo y por 1). Muestra <code>7 es primo</code> o <code>9 no es primo</code>. El 1 no es primo.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        boolean primo = n > 1;\n        for (int d = 2; d * d <= n; d++) {\n            if (n % d == 0) {\n                primo = false;\n            }\n        }\n        if (primo) {\n            System.out.println(n + " es primo");\n        } else {\n            System.out.println(n + " no es primo");\n        }\n    }\n}\n',
        notes:
          '<p>Se usa un <b>conmutador</b> (<code>boolean primo</code>): empieza en true y pasa a false en cuanto encuentra un divisor. Basta probar divisores hasta la raíz cuadrada (<code>d * d &lt;= n</code>).</p>',
        s: 'prof',
        tests: [
          {
            input: '2',
            out: '2 es primo'
          },
          {
            input: '7',
            out: '7 es primo'
          },
          {
            input: '9',
            out: '9 no es primo'
          },
          {
            input: '1',
            out: '1 no es primo'
          },
          {
            input: '97',
            out: '97 es primo'
          },
          {
            input: '100',
            out: '100 no es primo'
          },
          {
            input: '0',
            out: '0 no es primo'
          }
        ],
        stdin: '2',
        kind: 'code'
      },
      {
        id: 't2-2-14',
        title: 'Primos hasta 1000',
        src: '2. Estructuras de repetición · Ejercicio 14 · RA 3 · CE b)',
        task: 'Muestra todos los primos entre 2 y 1000, en <b>una sola línea separados por espacios</b> (<code>2 3 5 7 11 …</code>). Necesitas bucles anidados.',
        starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
        rules: [
          {
            re: /\bfor\s*\(/,
            msg: 'Usa bucles for'
          }
        ],
        tests: [
          {
            input: '',
            out: '2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 101 103 107 109 113 127 131 137 139 149 151 157 163 167 173 179 181 191 193 197 199 211 223 227 229 233 239 241 251 257 263 269 271 277 281 283 293 307 311 313 317 331 337 347 349 353 359 367 373 379 383 389 397 401 409 419 421 431 433 439 443 449 457 461 463 467 479 487 491 499 503 509 521 523 541 547 557 563 569 571 577 587 593 599 601 607 613 617 619 631 641 643 647 653 659 661 673 677 683 691 701 709 719 727 733 739 743 751 757 761 769 773 787 797 809 811 821 823 827 829 839 853 857 859 863 877 881 883 887 907 911 919 929 937 941 947 953 967 971 977 983 991 997'
          }
        ],
        solution:
          'public class Main {\n    public static void main(String[] args) {\n        String lista = "";\n        for (int n = 2; n <= 1000; n++) {\n            boolean primo = true;\n            for (int d = 2; d * d <= n; d++) {\n                if (n % d == 0) {\n                    primo = false;\n                }\n            }\n            if (primo) {\n                lista = lista + n + " ";\n            }\n        }\n        System.out.println(lista);\n    }\n}\n',
        notes:
          '<p>Es el ejercicio anterior metido dentro de un <code>for</code> que recorre todos los números de 2 a 1000. En el 2.º bucle el conmutador se reinicia a <code>true</code> para cada número. Los espacios se acumulan en un <code>String</code> para escribirlo todo en una línea (también vale <code>System.out.print(n + " ")</code>).</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't2-2-15a',
        title: 'Omirps (1): ¿es omirp?',
        src: '2. Estructuras de repetición · Ejercicio 15.1 · RA 3 · CE b)',
        task: 'Un <b>omirp</b> es un número primo que, al invertir sus cifras, sigue siendo primo (7951 y 1597). Di si el número que se introduce es omirp: <code>7951 es omirp</code> o <code>23 no es omirp</code>. (Siguiendo la definición del enunciado, un primo capicúa como 11 también cuenta.)',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    static boolean esPrimo(int n) {\n        if (n < 2) {\n            return false;\n        }\n        for (int d = 2; d * d <= n; d++) {\n            if (n % d == 0) {\n                return false;\n            }\n        }\n        return true;\n    }\n\n    static int invertir(int n) {\n        int inv = 0;\n        while (n > 0) {\n            inv = inv * 10 + n % 10;\n            n /= 10;\n        }\n        return inv;\n    }\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        if (esPrimo(n) && esPrimo(invertir(n))) {\n            System.out.println(n + " es omirp");\n        } else {\n            System.out.println(n + " no es omirp");\n        }\n    }\n}\n',
        notes:
          '<p>Aquí se usan dos <b>métodos</b> auxiliares (<code>esPrimo</code> e <code>invertir</code>) para no repetir código; si todavía no los has visto, puedes copiar su cuerpo dentro del <code>main</code>. Invertir un número: se va sacando la última cifra (<code>% 10</code>) y se construye <code>inv * 10 + cifra</code>.</p>',
        s: 'prof',
        tests: [
          {
            input: '7951',
            out: '7951 es omirp'
          },
          {
            input: '23',
            out: '23 no es omirp'
          },
          {
            input: '13',
            out: '13 es omirp'
          },
          {
            input: '2',
            out: '2 es omirp'
          },
          {
            input: '100',
            out: '100 no es omirp'
          },
          {
            input: '11',
            out: '11 es omirp'
          }
        ],
        stdin: '7951',
        kind: 'code'
      },
      {
        id: 't2-2-15b',
        title: 'Omirps (2): todos hasta N',
        src: '2. Estructuras de repetición · Ejercicio 15.2 · RA 3 · CE b)',
        task: 'Muestra todos los omirps entre 0 y N (N lo introduce el usuario), en una sola línea separados por espacios (con la misma definición que antes).',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int tope = teclado.nextInt();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    static boolean esPrimo(int n) {\n        if (n < 2) {\n            return false;\n        }\n        for (int d = 2; d * d <= n; d++) {\n            if (n % d == 0) {\n                return false;\n            }\n        }\n        return true;\n    }\n\n    static int invertir(int n) {\n        int inv = 0;\n        while (n > 0) {\n            inv = inv * 10 + n % 10;\n            n /= 10;\n        }\n        return inv;\n    }\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int tope = teclado.nextInt();\n        String lista = "";\n        for (int n = 0; n <= tope; n++) {\n            if (esPrimo(n) && esPrimo(invertir(n))) {\n                lista = lista + n + " ";\n            }\n        }\n        System.out.println(lista);\n    }\n}\n',
        notes: '<p>Reutilizas lo del apartado 1 dentro de un <code>for</code> que recorre de 0 a N.</p>',
        s: 'prof',
        tests: [
          {
            input: '100',
            out: '2 3 5 7 11 13 17 31 37 71 73 79 97'
          },
          {
            input: '10',
            out: '2 3 5 7'
          },
          {
            input: '200',
            out: '2 3 5 7 11 13 17 31 37 71 73 79 97 101 107 113 131 149 151 157 167 179 181 191 199'
          }
        ],
        stdin: '100',
        kind: 'code'
      },
      {
        id: 't2-2-16',
        title: 'Contar cifras pares e impares',
        src: '2. Estructuras de repetición · Ejercicio 16 · RA 3 · CE a), b)',
        task: 'Pide un entero y di cuántas de sus cifras son pares y cuántas impares. Para 78532: <code>Ese número tiene 3 cifras impares y 2 cifras pares</code>. (El 0 cuenta como cifra par.)',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = Math.abs(teclado.nextInt());\n\n    }\n}\n',
        rules: [
          {
            re: /\b(for|while|do)\b/,
            msg: 'Usa un bucle'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = Math.abs(teclado.nextInt());\n        int pares = 0;\n        int impares = 0;\n        do {\n            int cifra = n % 10;\n            if (cifra % 2 == 0) {\n                pares++;\n            } else {\n                impares++;\n            }\n            n /= 10;\n        } while (n > 0);\n        System.out.println("Ese número tiene " + impares + " cifras impares y " + pares + " cifras pares");\n    }\n}\n',
        notes:
          '<p>Con <code>do-while</code> el 0 también se procesa una vez (tiene una cifra par). Cada vuelta mira la última cifra (<code>n % 10</code>) y la elimina (<code>n /= 10</code>).</p>',
        s: 'prof',
        tests: [
          {
            input: '78532',
            out: 'Ese número tiene 3 cifras impares y 2 cifras pares'
          },
          {
            input: '2468',
            out: 'Ese número tiene 0 cifras impares y 4 cifras pares'
          },
          {
            input: '13579',
            out: 'Ese número tiene 5 cifras impares y 0 cifras pares'
          },
          {
            input: '0',
            out: 'Ese número tiene 0 cifras impares y 1 cifras pares'
          },
          {
            input: '-505',
            out: 'Ese número tiene 2 cifras impares y 1 cifras pares'
          }
        ],
        stdin: '78532',
        kind: 'code'
      },
      {
        id: 't2-2-17',
        title: 'Lotería primitiva',
        src: '2. Estructuras de repetición · Ejercicio 17 · RA 3 · CE b)',
        task: 'Genera al azar una combinación de la primitiva: 6 números entre 1 y 49 (puede repetirse alguno) con <code>Math.random()</code>. Muéstralos en una línea separados por espacios.',
        starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
        rules: [
          {
            re: /Math\.random/,
            msg: 'Usa Math.random()'
          },
          {
            re: /\bfor\s*\(/,
            msg: 'Usa un bucle for'
          }
        ],
        tests: [
          {
            re: '^([1-9]|[1-4][0-9])( ([1-9]|[1-4][0-9])){5}$',
            rep: 300,
            name: 'Seis números entre 1 y 49 separados por espacios (300 ejecuciones)'
          }
        ],
        solution:
          'public class Main {\n    public static void main(String[] args) {\n        String combinacion = "";\n        for (int i = 0; i < 6; i++) {\n            int numero = (int) (Math.random() * 49) + 1;\n            combinacion = combinacion + numero;\n            if (i < 5) {\n                combinacion = combinacion + " ";\n            }\n        }\n        System.out.println(combinacion);\n    }\n}\n',
        notes:
          '<p>Fórmula del Tema 1: <code>(int) (Math.random() * (49 - 1 + 1)) + 1</code>. Un <code>for</code> la repite 6 veces.</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't2-2-18',
        title: 'Quiniela',
        src: '2. Estructuras de repetición · Ejercicio 18 · RA 3 · CE a), b)',
        task: 'Genera al azar una quiniela de 14 resultados (<code>1</code>, <code>X</code> o <code>2</code>) en una línea separados por <code> - </code>: <code>1 - X - X - 2 - …</code>',
        starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
        rules: [
          {
            re: /Math\.random/,
            msg: 'Usa Math.random()'
          },
          {
            re: /\bfor\s*\(/,
            msg: 'Usa un bucle for'
          }
        ],
        tests: [
          {
            re: '^[1X2]( - [1X2]){13}$',
            rep: 300,
            seen: [],
            name: '14 resultados 1, X o 2 separados por « - » (300 ejecuciones)'
          }
        ],
        solution:
          'public class Main {\n    public static void main(String[] args) {\n        String quiniela = "";\n        for (int i = 1; i <= 14; i++) {\n            int n = (int) (Math.random() * 3);\n            if (n == 0) {\n                quiniela = quiniela + "1";\n            } else if (n == 1) {\n                quiniela = quiniela + "X";\n            } else {\n                quiniela = quiniela + "2";\n            }\n            if (i < 14) {\n                quiniela = quiniela + " - ";\n            }\n        }\n        System.out.println(quiniela);\n    }\n}\n',
        notes:
          '<p>Un número aleatorio 0, 1 o 2 se traduce con un <code>if / else if / else</code> (o <code>switch</code>) a <code>1</code>, <code>X</code> o <code>2</code>. El separador solo se añade entre resultados, no después del último.</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't2-2-19',
        title: 'Calculadora repetitiva',
        src: '2. Estructuras de repetición · Ejercicio 19 · RA 3 · CE a), b)',
        task: 'Amplía la calculadora para que no termine: en cada vuelta lee <b>primero el operador</b> (<code>+ - * /</code>); si es <code>q</code> (valor centinela) termina; si no, lee A y B (reales) y muestra el resultado. Operador no válido → <code>Operador no válido</code>; dividir entre 0 → <code>No se puede dividir entre cero</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        char op = teclado.next().charAt(0);\n\n    }\n}\n',
        rules: [
          {
            re: /\b(while|do)\b/,
            msg: 'Usa un bucle while o do-while'
          }
        ],
        solution:
          "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        char op = teclado.next().charAt(0);\n        while (op != 'q') {\n            double a = teclado.nextDouble();\n            double b = teclado.nextDouble();\n            switch (op) {\n                case '+':\n                    System.out.println(a + b);\n                    break;\n                case '-':\n                    System.out.println(a - b);\n                    break;\n                case '*':\n                    System.out.println(a * b);\n                    break;\n                case '/':\n                    if (b == 0) {\n                        System.out.println(\"No se puede dividir entre cero\");\n                    } else {\n                        System.out.println(a / b);\n                    }\n                    break;\n                default:\n                    System.out.println(\"Operador no válido\");\n            }\n            op = teclado.next().charAt(0);\n        }\n    }\n}\n",
        notes:
          "<p>El patrón del <b>valor centinela</b>: lees el primer operador antes del bucle y vuelves a leer al final de cada vuelta; el bucle <code>while (op != 'q')</code> termina cuando el usuario teclea q.</p>",
        s: 'prof',
        tests: [
          {
            input: 'q',
            out: ''
          },
          {
            input: '+\n5\n2\nq',
            out: '7.0'
          },
          {
            input: '+\n5\n2\n/\n7\n0\n%\n1\n1\n/\n9\n2\nq',
            out: '7.0\nNo se puede dividir entre cero\nOperador no válido\n4.5'
          }
        ],
        stdin: 'q',
        kind: 'code'
      },
      {
        id: 't2-2-20',
        title: 'Juego del número secreto',
        src: '2. Estructuras de repetición · Ejercicio 20 · RA 3 · CE a), b)',
        task: 'El ordenador elige un número al azar entre 1 y 100. El usuario va tecleando números y se le dice <code>Mi número es mayor</code> o <code>Mi número es menor</code> hasta que acierta. Al final: <code>¡Acertaste en 7 intentos!</code>. (Para corregirlo se prueba con la secuencia 1, 2, 3 … 100.)',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int secreto = (int) (Math.random() * 100) + 1;\n\n    }\n}\n',
        stdin:
          '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35\n36\n37\n38\n39\n40\n41\n42\n43\n44\n45\n46\n47\n48\n49\n50\n51\n52\n53\n54\n55\n56\n57\n58\n59\n60\n61\n62\n63\n64\n65\n66\n67\n68\n69\n70\n71\n72\n73\n74\n75\n76\n77\n78\n79\n80\n81\n82\n83\n84\n85\n86\n87\n88\n89\n90\n91\n92\n93\n94\n95\n96\n97\n98\n99\n100',
        rules: [
          {
            re: /\bdo\s*\{/,
            msg: 'Usa un bucle do-while'
          }
        ],
        tests: [
          {
            input:
              '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35\n36\n37\n38\n39\n40\n41\n42\n43\n44\n45\n46\n47\n48\n49\n50\n51\n52\n53\n54\n55\n56\n57\n58\n59\n60\n61\n62\n63\n64\n65\n66\n67\n68\n69\n70\n71\n72\n73\n74\n75\n76\n77\n78\n79\n80\n81\n82\n83\n84\n85\n86\n87\n88\n89\n90\n91\n92\n93\n94\n95\n96\n97\n98\n99\n100',
            re: '^(Mi número es mayor\\n)*¡Acertaste en [1-9][0-9]* intentos!$',
            rep: 80,
            name: 'Acaba con «¡Acertaste en N intentos!» tras pistas «Mi número es mayor» (80 partidas)'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int secreto = (int) (Math.random() * 100) + 1;\n        int intentos = 0;\n        int n;\n        do {\n            n = teclado.nextInt();\n            intentos++;\n            if (n < secreto) {\n                System.out.println("Mi número es mayor");\n            } else if (n > secreto) {\n                System.out.println("Mi número es menor");\n            }\n        } while (n != secreto);\n        System.out.println("¡Acertaste en " + intentos + " intentos!");\n    }\n}\n',
        notes:
          '<p>Como se pide número al menos una vez, <code>do-while</code>. <code>intentos</code> es un contador. La pista se da solo si no ha acertado; la felicitación va fuera del bucle.</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't2-2-21a',
        title: 'Vocales (con break)',
        src: '2. Estructuras de repetición · Ejercicio 21 · RA 3 · CE a), b), c), e)',
        task: 'Genera letras <b>mayúsculas</b> al azar, una por línea, hasta que salga una <b>vocal</b> (que también se muestra y termina el programa). Letras A–Z: códigos ASCII 65 a 90. Versión <b>con instrucciones de salto</b> (<code>break</code>).',
        starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
        rules: [
          {
            re: /\bbreak\s*;/,
            msg: 'Usa break'
          },
          {
            re: /Math\.random/,
            msg: 'Usa Math.random()'
          }
        ],
        tests: [
          {
            re: '^([B-DF-HJ-NP-TV-Z]\\n)*[AEIOU]$',
            rep: 400,
            name: 'Letras mayúsculas hasta una vocal (400 ejecuciones)'
          }
        ],
        solution:
          "public class Main {\n    public static void main(String[] args) {\n        while (true) {\n            char letra = (char) ((int) (Math.random() * 26) + 65);\n            System.out.println(letra);\n            if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U') {\n                break;\n            }\n        }\n    }\n}\n",
        notes:
          '<p><code>while (true)</code> es un bucle infinito que se rompe con <code>break</code> cuando sale una vocal. El <code>(char)</code> convierte el código ASCII (65 a 90) en letra.</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't2-2-21b',
        title: 'Vocales (sin break)',
        src: '2. Estructuras de repetición · Ejercicio 21 · RA 3 · CE a), b), c), e)',
        task: 'El mismo programa <b>sin instrucciones de salto</b> (nada de <code>break</code>): usa una condición en el bucle.',
        starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
        rules: [
          {
            re: /\bbreak\b/,
            not: true,
            msg: 'No usa break'
          },
          {
            re: /Math\.random/,
            msg: 'Usa Math.random()'
          }
        ],
        tests: [
          {
            re: '^([B-DF-HJ-NP-TV-Z]\\n)*[AEIOU]$',
            rep: 400,
            name: 'Letras mayúsculas hasta una vocal (400 ejecuciones)'
          }
        ],
        solution:
          "public class Main {\n    public static void main(String[] args) {\n        boolean vocal;\n        do {\n            char letra = (char) ((int) (Math.random() * 26) + 65);\n            System.out.println(letra);\n            vocal = letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U';\n        } while (!vocal);\n    }\n}\n",
        notes:
          '<p>La condición de parada pasa al <code>while</code>: una variable booleana <code>vocal</code> se actualiza en cada vuelta y el bucle continúa mientras <code>!vocal</code>. Es la alternativa a <code>break</code>.</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't2-2-22',
        title: 'Conversor de mayúsculas a minúsculas y viceversa',
        src: '2. Estructuras de repetición · Ejercicio 22 · RA 3 · CE a), b), c), e)',
        task: 'Pide un carácter. Si es mayúscula, muestra su minúscula; si es minúscula, su mayúscula; si no es una letra, lo muestra igual. Mayúsculas: ASCII 65–90; minúsculas: 97–122 (diferencia 32). Se lee con <code>teclado.next().charAt(0)</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        char c = teclado.next().charAt(0);\n\n    }\n}\n',
        solution:
          "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        char c = teclado.next().charAt(0);\n        if (c >= 'A' && c <= 'Z') {\n            System.out.println((char) (c + 32));\n        } else if (c >= 'a' && c <= 'z') {\n            System.out.println((char) (c - 32));\n        } else {\n            System.out.println(c);\n        }\n    }\n}\n",
        notes:
          '<p>Una letra mayúscula y su minúscula difieren en 32 en la tabla ASCII. Sumar o restar 32 a un <code>char</code> da un <code>int</code>, así que hay que hacer casting <code>(char)</code> para mostrar la letra.</p>',
        s: 'prof',
        tests: [
          {
            input: 'A',
            out: 'a'
          },
          {
            input: 'z',
            out: 'Z'
          },
          {
            input: 'M',
            out: 'm'
          },
          {
            input: 'b',
            out: 'B'
          },
          {
            input: '5',
            out: '5'
          },
          {
            input: 'Z',
            out: 'z'
          },
          {
            input: 'a',
            out: 'A'
          }
        ],
        stdin: 'A',
        kind: 'code'
      }
    ]
  },
  {
    id: 'q3',
    t: '3. Programas completos',
    items: [
      {
        id: 't2-3-1',
        title: 'Nóminas',
        src: '3. Programas completos · Ejercicio 1 · RA 3 · CE a), e)',
        task: 'Lee las horas trabajadas en una semana (<code>int</code>) y lo que se cobra por hora (<code>double</code>). Calcula y muestra, en 4 líneas:<br><b>1.</b> <code>Salario semanal:</code> las horas que pasan de 40 son extra y se pagan a 1,5 veces la tarifa.<br><b>2.</b> <code>Salario bruto mensual:</code> 4 semanas iguales, pero ahora las <b>5 primeras</b> horas extra de cada semana se pagan a 1,5 veces y las demás al doble.<br><b>3.</b> <code>Impuestos:</code> 10 % del bruto mensual si es menor de 1000 €, y 15 % en otro caso.<br><b>4.</b> <code>Salario neto:</code> bruto menos impuestos.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int horas = teclado.nextInt();\n        double tarifa = teclado.nextDouble();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int horas = teclado.nextInt();\n        double tarifa = teclado.nextDouble();\n        int extra = 0;\n        if (horas > 40) {\n            extra = horas - 40;\n        }\n        int normales = horas - extra;\n        double semanal = normales * tarifa + extra * tarifa * 1.5;\n        int extra15 = Math.min(extra, 5);\n        int extra2 = extra - extra15;\n        double semanaMes = normales * tarifa + extra15 * tarifa * 1.5 + extra2 * tarifa * 2;\n        double bruto = semanaMes * 4;\n        double impuestos;\n        if (bruto < 1000) {\n            impuestos = bruto * 10 / 100;\n        } else {\n            impuestos = bruto * 15 / 100;\n        }\n        double neto = bruto - impuestos;\n        System.out.println("Salario semanal: " + semanal);\n        System.out.println("Salario bruto mensual: " + bruto);\n        System.out.println("Impuestos: " + impuestos);\n        System.out.println("Salario neto: " + neto);\n    }\n}\n',
        notes:
          '<p>Separa las horas en <b>normales</b> y <b>extra</b>. En el apartado 2, las extra se dividen en dos tramos: las primeras 5 (×1,5) y el resto (×2) — <code>Math.min(extra, 5)</code> saca las del primer tramo. Los impuestos dependen del bruto mensual: una condicional doble.</p>',
        s: 'prof',
        tests: [
          {
            input: '35\n10',
            out: 'Salario semanal: 350.0\nSalario bruto mensual: 1400.0\nImpuestos: 210.0\nSalario neto: 1190.0'
          },
          {
            input: '45\n10',
            out: 'Salario semanal: 475.0\nSalario bruto mensual: 1900.0\nImpuestos: 285.0\nSalario neto: 1615.0'
          },
          {
            input: '50\n10',
            out: 'Salario semanal: 550.0\nSalario bruto mensual: 2300.0\nImpuestos: 345.0\nSalario neto: 1955.0'
          },
          {
            input: '20\n10',
            out: 'Salario semanal: 200.0\nSalario bruto mensual: 800.0\nImpuestos: 80.0\nSalario neto: 720.0'
          },
          {
            input: '40\n20',
            out: 'Salario semanal: 800.0\nSalario bruto mensual: 3200.0\nImpuestos: 480.0\nSalario neto: 2720.0'
          }
        ],
        stdin: '35\n10',
        kind: 'code'
      },
      {
        id: 't2-3-2',
        title: 'Polígonos',
        src: '3. Programas completos · Ejercicio 2 · RA 3 · CE a), e)',
        task: 'Lee número de lados (<code>int</code>), longitud del lado y apotema (<code>double</code>). Calcula perímetro = lados·lado y área = lados·lado·apotema/2, y muestra el nombre del polígono regular (de 3 a 12 lados: triángulo, cuadrado, pentágono, hexágono, heptágono, octógono, eneágono, decágono, endecágono, dodecágono). Salida: <code>Polígono: pentágono</code>, <code>Perímetro: 20.0</code>, <code>Área: 27.5</code>. Si el número de lados no está entre 3 y 12: <code>Polígono no soportado</code> (una sola línea). Usa <code>switch</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int lados = teclado.nextInt();\n        double lado = teclado.nextDouble();\n        double apotema = teclado.nextDouble();\n\n    }\n}\n',
        rules: [
          {
            re: /\bswitch\s*\(/,
            msg: 'Usa switch'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int lados = teclado.nextInt();\n        double lado = teclado.nextDouble();\n        double apotema = teclado.nextDouble();\n        String nombre;\n        switch (lados) {\n            case 3:\n                nombre = "triángulo";\n                break;\n            case 4:\n                nombre = "cuadrado";\n                break;\n            case 5:\n                nombre = "pentágono";\n                break;\n            case 6:\n                nombre = "hexágono";\n                break;\n            case 7:\n                nombre = "heptágono";\n                break;\n            case 8:\n                nombre = "octógono";\n                break;\n            case 9:\n                nombre = "eneágono";\n                break;\n            case 10:\n                nombre = "decágono";\n                break;\n            case 11:\n                nombre = "endecágono";\n                break;\n            case 12:\n                nombre = "dodecágono";\n                break;\n            default:\n                nombre = "";\n        }\n        if (nombre.equals("")) {\n            System.out.println("Polígono no soportado");\n        } else {\n            double perimetro = lados * lado;\n            double area = perimetro * apotema / 2;\n            System.out.println("Polígono: " + nombre);\n            System.out.println("Perímetro: " + perimetro);\n            System.out.println("Área: " + area);\n        }\n    }\n}\n',
        notes:
          '<p>El <code>switch</code> sobre el número de lados asigna el nombre; el <code>default</code> marca «no soportado». Después solo se calcula el área y el perímetro si el polígono es válido.</p>',
        s: 'prof',
        tests: [
          {
            input: '5\n4\n2.75',
            out: 'Polígono: pentágono\nPerímetro: 20.0\nÁrea: 27.5'
          },
          {
            input: '3\n6\n3',
            out: 'Polígono: triángulo\nPerímetro: 18.0\nÁrea: 27.0'
          },
          {
            input: '4\n2\n1',
            out: 'Polígono: cuadrado\nPerímetro: 8.0\nÁrea: 4.0'
          },
          {
            input: '12\n1\n1.5',
            out: 'Polígono: dodecágono\nPerímetro: 12.0\nÁrea: 9.0'
          },
          {
            input: '13\n1\n1',
            out: 'Polígono no soportado'
          },
          {
            input: '2\n1\n1',
            out: 'Polígono no soportado'
          }
        ],
        stdin: '5\n4\n2.75',
        kind: 'code'
      },
      {
        id: 't2-3-3',
        title: 'Máquina expendedora',
        src: '3. Programas completos · Ejercicio 3 · RA 3 · CE b), e)',
        task: 'Lee una cantidad en euros (<code>double</code>, p. ej. 1.45) y calcula qué monedas devolver usando siempre las de mayor valor posible (2 €, 1 €, 50, 20, 10, 5, 2 y 1 céntimos). Muestra una línea por tipo de moneda usada, de mayor a menor, con este formato: <code>1 moneda(s) de 1 €</code>, <code>2 moneda(s) de 20 cent</code>… (los valores son: 2 €, 1 €, 50 cent, 20 cent, 10 cent, 5 cent, 2 cent, 1 cent). Trabaja en céntimos con un <code>int</code>: <code>(int) Math.round(euros * 100)</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double euros = teclado.nextDouble();\n        int centimos = (int) Math.round(euros * 100);\n\n    }\n}\n',
        rules: [
          {
            re: /\bwhile\s*\(/,
            msg: 'Usa un bucle while'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double euros = teclado.nextDouble();\n        int centimos = (int) Math.round(euros * 100);\n        int m200 = 0;\n        while (centimos >= 200) {\n            centimos -= 200;\n            m200++;\n        }\n        if (m200 > 0) {\n            System.out.println(m200 + " moneda(s) de 2 €");\n        }\n        int m100 = 0;\n        while (centimos >= 100) {\n            centimos -= 100;\n            m100++;\n        }\n        if (m100 > 0) {\n            System.out.println(m100 + " moneda(s) de 1 €");\n        }\n        int m50 = 0;\n        while (centimos >= 50) {\n            centimos -= 50;\n            m50++;\n        }\n        if (m50 > 0) {\n            System.out.println(m50 + " moneda(s) de 50 cent");\n        }\n        int m20 = 0;\n        while (centimos >= 20) {\n            centimos -= 20;\n            m20++;\n        }\n        if (m20 > 0) {\n            System.out.println(m20 + " moneda(s) de 20 cent");\n        }\n        int m10 = 0;\n        while (centimos >= 10) {\n            centimos -= 10;\n            m10++;\n        }\n        if (m10 > 0) {\n            System.out.println(m10 + " moneda(s) de 10 cent");\n        }\n        int m5 = 0;\n        while (centimos >= 5) {\n            centimos -= 5;\n            m5++;\n        }\n        if (m5 > 0) {\n            System.out.println(m5 + " moneda(s) de 5 cent");\n        }\n        int m2 = 0;\n        while (centimos >= 2) {\n            centimos -= 2;\n            m2++;\n        }\n        if (m2 > 0) {\n            System.out.println(m2 + " moneda(s) de 2 cent");\n        }\n        int m1 = 0;\n        while (centimos >= 1) {\n            centimos -= 1;\n            m1++;\n        }\n        if (m1 > 0) {\n            System.out.println(m1 + " moneda(s) de 1 cent");\n        }\n    }\n}\n',
        notes:
          '<p>Se trabaja en <b>céntimos enteros</b> porque los <code>double</code> no representan exactamente decimales como 1,45 y pueden dar errores de redondeo (<code>Math.round</code> lo corrige). Para cada moneda, de mayor a menor: mientras la cantidad restante sea ≥ al valor, se resta y se cuenta una moneda.</p>',
        s: 'prof',
        tests: [
          {
            input: '1.45',
            out: '1 moneda(s) de 1 €\n2 moneda(s) de 20 cent\n1 moneda(s) de 5 cent'
          },
          {
            input: '0.99',
            out: '1 moneda(s) de 50 cent\n2 moneda(s) de 20 cent\n1 moneda(s) de 5 cent\n2 moneda(s) de 2 cent'
          },
          {
            input: '2',
            out: '1 moneda(s) de 2 €'
          },
          {
            input: '3.88',
            out: '1 moneda(s) de 2 €\n1 moneda(s) de 1 €\n1 moneda(s) de 50 cent\n1 moneda(s) de 20 cent\n1 moneda(s) de 10 cent\n1 moneda(s) de 5 cent\n1 moneda(s) de 2 cent\n1 moneda(s) de 1 cent'
          },
          {
            input: '0.05',
            out: '1 moneda(s) de 5 cent'
          }
        ],
        stdin: '1.45',
        kind: 'code'
      },
      {
        id: 't2-3-4',
        title: 'Predicción meteorológica',
        src: '3. Programas completos · Ejercicio 4 · RA 3 · CE a), e)',
        task: 'El usuario escribe la <b>presión</b> y la <b>humedad</b> (cada una: <code>alta</code>, <code>media</code> o <code>baja</code>, en minúsculas, en ese orden). Muestra la probabilidad de lluvia, sol y frío, en tres líneas: <code>Lluvia: Muy alta</code>, <code>Sol: Baja</code>, <code>Frío: Alta</code>.<br><b>Lluvia:</b> (baja, alta) → Muy alta; (baja, media) → Alta; (baja, baja) → Media; (media, media) → Media; cualquier otro → Baja.<br><b>Sol:</b> (baja, alta) → Baja; (baja, media) → Media; (baja, baja) → Media; (media, media) → Media; otro → Alta.<br><b>Frío:</b> (baja, alta) → Alta; (baja, media) → Alta; (media, alta) → Alta; (media, media) → Media; otro → Baja.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        String presion = teclado.next();\n        String humedad = teclado.next();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        String presion = teclado.next();\n        String humedad = teclado.next();\n        String lluvia = "Baja";\n        String sol = "Alta";\n        String frio = "Baja";\n        if (presion.equals("baja")) {\n            if (humedad.equals("alta")) {\n                lluvia = "Muy alta";\n                sol = "Baja";\n                frio = "Alta";\n            } else if (humedad.equals("media")) {\n                lluvia = "Alta";\n                sol = "Media";\n                frio = "Alta";\n            } else if (humedad.equals("baja")) {\n                lluvia = "Media";\n                sol = "Media";\n            }\n        } else if (presion.equals("media")) {\n            if (humedad.equals("media")) {\n                lluvia = "Media";\n                sol = "Media";\n                frio = "Media";\n            } else if (humedad.equals("alta")) {\n                frio = "Alta";\n            }\n        }\n        System.out.println("Lluvia: " + lluvia);\n        System.out.println("Sol: " + sol);\n        System.out.println("Frío: " + frio);\n    }\n}\n',
        notes:
          '<p>Cada tabla tiene un caso «cualquier otro»: se pone como <b>valor por defecto</b> al declarar las tres variables y los <code>if</code> anidados (primero presión, luego humedad) solo lo cambian en los casos especiales. Los textos se comparan con <code>equals</code>, nunca con <code>==</code>.</p>',
        s: 'prof',
        tests: [
          {
            input: 'baja\nalta',
            out: 'Lluvia: Muy alta\nSol: Baja\nFrío: Alta'
          },
          {
            input: 'baja\nmedia',
            out: 'Lluvia: Alta\nSol: Media\nFrío: Alta'
          },
          {
            input: 'baja\nbaja',
            out: 'Lluvia: Media\nSol: Media\nFrío: Baja'
          },
          {
            input: 'media\nmedia',
            out: 'Lluvia: Media\nSol: Media\nFrío: Media'
          },
          {
            input: 'media\nalta',
            out: 'Lluvia: Baja\nSol: Alta\nFrío: Alta'
          },
          {
            input: 'media\nbaja',
            out: 'Lluvia: Baja\nSol: Alta\nFrío: Baja'
          },
          {
            input: 'alta\nalta',
            out: 'Lluvia: Baja\nSol: Alta\nFrío: Baja'
          },
          {
            input: 'alta\nmedia',
            out: 'Lluvia: Baja\nSol: Alta\nFrío: Baja'
          },
          {
            input: 'alta\nbaja',
            out: 'Lluvia: Baja\nSol: Alta\nFrío: Baja'
          }
        ],
        stdin: 'baja\nalta',
        kind: 'code'
      },
      {
        id: 't2-3-5',
        title: 'Calculadora de edad',
        src: '3. Programas completos · Ejercicio 5 · RA 3 · CE a), e)',
        task: 'Lee la fecha de nacimiento (día, mes, año) y la fecha de hoy (día, mes, año): seis enteros en ese orden. Calcula la edad en años: no es solo restar los años, hay que ver si ya se ha cumplido este año. Muestra <code>Edad: 33 años</code>. (La parte «para valientes», en años, meses y días, queda como reto tuyo.)',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int diaNac = teclado.nextInt();\n        int mesNac = teclado.nextInt();\n        int anioNac = teclado.nextInt();\n        int diaHoy = teclado.nextInt();\n        int mesHoy = teclado.nextInt();\n        int anioHoy = teclado.nextInt();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int diaNac = teclado.nextInt();\n        int mesNac = teclado.nextInt();\n        int anioNac = teclado.nextInt();\n        int diaHoy = teclado.nextInt();\n        int mesHoy = teclado.nextInt();\n        int anioHoy = teclado.nextInt();\n        int edad = anioHoy - anioNac;\n        if (mesHoy < mesNac || (mesHoy == mesNac && diaHoy < diaNac)) {\n            edad--;\n        }\n        System.out.println("Edad: " + edad + " años");\n    }\n}\n',
        notes:
          '<p>Primero se restan los años. Si el cumpleaños de este año <b>aún no ha llegado</b> (mes de hoy menor, o mismo mes pero día menor) se resta 1. Esa condición combina <code>||</code> y <code>&amp;&amp;</code>.</p>',
        s: 'prof',
        tests: [
          {
            input: '15\n10\n1990\n14\n10\n2024',
            out: 'Edad: 33 años'
          },
          {
            input: '15\n10\n1990\n15\n10\n2024',
            out: 'Edad: 34 años'
          },
          {
            input: '15\n10\n1990\n20\n12\n2024',
            out: 'Edad: 34 años'
          },
          {
            input: '15\n10\n1990\n1\n3\n2024',
            out: 'Edad: 33 años'
          },
          {
            input: '29\n2\n2000\n28\n2\n2023',
            out: 'Edad: 22 años'
          },
          {
            input: '1\n1\n2000\n31\n12\n2023',
            out: 'Edad: 23 años'
          }
        ],
        stdin: '15\n10\n1990\n14\n10\n2024',
        kind: 'code'
      },
      {
        id: 't2-3-6',
        title: 'Contar días',
        src: '3. Programas completos · Ejercicio 6 · RA 3 · CE a), b), e)',
        task: 'Lee la fecha de hoy (día, mes, año). Calcula cuántos días han pasado desde el 1 de enero hasta hoy (incluido) y cuántos faltan desde mañana hasta el 31 de diciembre, teniendo en cuenta si el año es bisiesto. Salida: <code>Han pasado 75 días desde el 1 de enero (hoy incluido)</code> y <code>Faltan 291 días hasta el 31 de diciembre</code>. (Como esta web no puede leer la fecha del sistema, la fecha de hoy se teclea.)',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int dia = teclado.nextInt();\n        int mes = teclado.nextInt();\n        int anio = teclado.nextInt();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int dia = teclado.nextInt();\n        int mes = teclado.nextInt();\n        int anio = teclado.nextInt();\n        boolean bisiesto = (anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0;\n        int pasados = dia;\n        for (int m = 1; m < mes; m++) {\n            switch (m) {\n                case 2:\n                    if (bisiesto) {\n                        pasados += 29;\n                    } else {\n                        pasados += 28;\n                    }\n                    break;\n                case 4: case 6: case 9: case 11:\n                    pasados += 30;\n                    break;\n                default:\n                    pasados += 31;\n            }\n        }\n        int total = 365;\n        if (bisiesto) {\n            total = 366;\n        }\n        System.out.println("Han pasado " + pasados + " días desde el 1 de enero (hoy incluido)");\n        System.out.println("Faltan " + (total - pasados) + " días hasta el 31 de diciembre");\n    }\n}\n',
        notes:
          '<p>Se suman los días de los meses completos anteriores (un <code>for</code> con un <code>switch</code> por mes: febrero 28 o 29, abril/junio/septiembre/noviembre 30, resto 31) y los días del mes actual. Lo que falta es el total del año (365 o 366) menos lo que ha pasado.</p>',
        s: 'prof',
        tests: [
          {
            input: '1\n1\n2024',
            out: 'Han pasado 1 días desde el 1 de enero (hoy incluido)\nFaltan 365 días hasta el 31 de diciembre'
          },
          {
            input: '31\n12\n2023',
            out: 'Han pasado 365 días desde el 1 de enero (hoy incluido)\nFaltan 0 días hasta el 31 de diciembre'
          },
          {
            input: '15\n3\n2024',
            out: 'Han pasado 75 días desde el 1 de enero (hoy incluido)\nFaltan 291 días hasta el 31 de diciembre'
          },
          {
            input: '1\n3\n2023',
            out: 'Han pasado 60 días desde el 1 de enero (hoy incluido)\nFaltan 305 días hasta el 31 de diciembre'
          },
          {
            input: '31\n12\n2024',
            out: 'Han pasado 366 días desde el 1 de enero (hoy incluido)\nFaltan 0 días hasta el 31 de diciembre'
          }
        ],
        stdin: '1\n1\n2024',
        kind: 'code'
      },
      {
        id: 't2-3-7',
        title: 'TPV ultramegasimplificado',
        src: '3. Programas completos · Ejercicio 7 · RA 3 · CE a), b), e)',
        task: 'Una tienda aplica un 15 % de descuento a mayores de 65 años y un 10 % a menores de 25. Primero se teclea la fecha de hoy (día, mes, año). Después, para cada venta: el precio (<code>double</code>) y, si no es negativo, la fecha de nacimiento del cliente (día, mes, año). Se muestra <code>Precio final: 85.0</code>. El programa se repite hasta que se introduce un precio negativo.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int diaHoy = teclado.nextInt();\n        int mesHoy = teclado.nextInt();\n        int anioHoy = teclado.nextInt();\n\n    }\n}\n',
        rules: [
          {
            re: /\b(while|do)\b/,
            msg: 'Usa un bucle'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int diaHoy = teclado.nextInt();\n        int mesHoy = teclado.nextInt();\n        int anioHoy = teclado.nextInt();\n        double precio = teclado.nextDouble();\n        while (precio >= 0) {\n            int dia = teclado.nextInt();\n            int mes = teclado.nextInt();\n            int anio = teclado.nextInt();\n            int edad = anioHoy - anio;\n            if (mesHoy < mes || (mesHoy == mes && diaHoy < dia)) {\n                edad--;\n            }\n            double descuento = 0;\n            if (edad > 65) {\n                descuento = 15;\n            } else if (edad < 25) {\n                descuento = 10;\n            }\n            System.out.println("Precio final: " + (precio - precio * descuento / 100));\n            precio = teclado.nextDouble();\n        }\n    }\n}\n',
        notes:
          '<p>Es un bucle con <b>centinela</b> (precio negativo). La edad se calcula como en el ejercicio 5 y decide el descuento. Fíjate en el caso de 65 años justos: el enunciado dice «mayores de 65», es decir, <code>edad &gt; 65</code>.</p>',
        s: 'prof',
        tests: [
          {
            input: '1\n6\n2024\n100\n1\n1\n1950\n50\n1\n1\n2005\n80\n1\n1\n1990\n-1',
            out: 'Precio final: 85.0\nPrecio final: 45.0\nPrecio final: 80.0'
          },
          {
            input: '1\n6\n2024\n-1',
            out: ''
          },
          {
            input: '1\n6\n2024\n200\n2\n6\n1959\n200\n1\n6\n1959\n-3',
            out: 'Precio final: 200.0\nPrecio final: 200.0'
          }
        ],
        stdin: '1\n6\n2024\n100\n1\n1\n1950\n50\n1\n1\n2005\n80\n1\n1\n1990\n-1',
        kind: 'code'
      },
      {
        id: 't2-3-8',
        title: 'Número a letra',
        src: '3. Programas completos · Ejercicio 8 · RA 3 · CE a), e), f)',
        task: 'Lee un número de hasta 5 cifras (0 a 99999) y escríbelo con letra: 1980 → <code>mil novecientos ochenta</code>. Si está fuera de rango: <code>Número fuera de rango</code>. Escribe 21000 como «veintiún mil» y 100 como «cien» (101 → «ciento uno»). Después diseña tus casos de prueba por <b>clases de equivalencia</b> y prueba tu programa: seguro que encuentras errores. Reto grande: te conviene dividirlo en métodos (unidades, decenas, centenas, miles).',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    static String hasta29(int n) {\n        switch (n) {\n            case 0:\n                return "cero";\n            case 1:\n                return "uno";\n            case 2:\n                return "dos";\n            case 3:\n                return "tres";\n            case 4:\n                return "cuatro";\n            case 5:\n                return "cinco";\n            case 6:\n                return "seis";\n            case 7:\n                return "siete";\n            case 8:\n                return "ocho";\n            case 9:\n                return "nueve";\n            case 10:\n                return "diez";\n            case 11:\n                return "once";\n            case 12:\n                return "doce";\n            case 13:\n                return "trece";\n            case 14:\n                return "catorce";\n            case 15:\n                return "quince";\n            case 16:\n                return "dieciséis";\n            case 17:\n                return "diecisiete";\n            case 18:\n                return "dieciocho";\n            case 19:\n                return "diecinueve";\n            case 20:\n                return "veinte";\n            case 21:\n                return "veintiuno";\n            case 22:\n                return "veintidós";\n            case 23:\n                return "veintitrés";\n            case 24:\n                return "veinticuatro";\n            case 25:\n                return "veinticinco";\n            case 26:\n                return "veintiséis";\n            case 27:\n                return "veintisiete";\n            case 28:\n                return "veintiocho";\n            default:\n                return "veintinueve";\n        }\n    }\n\n    static String decena(int d) {\n        switch (d) {\n            case 3:\n                return "treinta";\n            case 4:\n                return "cuarenta";\n            case 5:\n                return "cincuenta";\n            case 6:\n                return "sesenta";\n            case 7:\n                return "setenta";\n            case 8:\n                return "ochenta";\n            default:\n                return "noventa";\n        }\n    }\n\n    static String hasta99(int n) {\n        if (n < 30) {\n            return hasta29(n);\n        }\n        String texto = decena(n / 10);\n        if (n % 10 > 0) {\n            texto = texto + " y " + hasta29(n % 10);\n        }\n        return texto;\n    }\n\n    static String centena(int c) {\n        switch (c) {\n            case 1:\n                return "ciento";\n            case 2:\n                return "doscientos";\n            case 3:\n                return "trescientos";\n            case 4:\n                return "cuatrocientos";\n            case 5:\n                return "quinientos";\n            case 6:\n                return "seiscientos";\n            case 7:\n                return "setecientos";\n            case 8:\n                return "ochocientos";\n            default:\n                return "novecientos";\n        }\n    }\n\n    static String hasta999(int n) {\n        if (n < 100) {\n            return hasta99(n);\n        }\n        if (n == 100) {\n            return "cien";\n        }\n        String texto = centena(n / 100);\n        if (n % 100 > 0) {\n            texto = texto + " " + hasta99(n % 100);\n        }\n        return texto;\n    }\n\n    static String enLetras(int n) {\n        if (n < 1000) {\n            return hasta999(n);\n        }\n        int miles = n / 1000;\n        int resto = n % 1000;\n        String texto;\n        if (miles == 1) {\n            texto = "mil";\n        } else {\n            texto = hasta999(miles);\n            if (miles % 100 == 21) {\n                texto = texto.substring(0, texto.length() - 3) + "ún";\n            } else if (miles % 10 == 1 && miles % 100 != 11) {\n                texto = texto.substring(0, texto.length() - 1);\n            }\n            texto = texto + " mil";\n        }\n        if (resto > 0) {\n            texto = texto + " " + hasta999(resto);\n        }\n        return texto;\n    }\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        if (n < 0 || n > 99999) {\n            System.out.println("Número fuera de rango");\n        } else {\n            System.out.println(enLetras(n));\n        }\n    }\n}\n',
        notes:
          '<p>Se divide el problema: <code>hasta29</code> (palabras sueltas, incluidas veintiuno…), <code>decena</code>, <code>hasta99</code> (con «y»), <code>hasta999</code> (con «cien» / «ciento») y <code>enLetras</code> (miles). <b>Casos difíciles que seguro te fallan</b>: 0, 10, 20, 21, 30, 100, 101, 1000, 1001, 21000 (veintiún mil), 31000 (treinta y un mil), 11000 (once mil) y los límites 99999 / 100000 / −1. Clases de equivalencia: negativos, 0, 1–29, decenas redondas, decenas con unidad, 100, 101–999, 1000, miles…, y fuera de rango.</p>',
        s: 'prof',
        tests: [
          {
            input: '0',
            out: 'cero'
          },
          {
            input: '7',
            out: 'siete'
          },
          {
            input: '15',
            out: 'quince'
          },
          {
            input: '21',
            out: 'veintiuno'
          },
          {
            input: '30',
            out: 'treinta'
          },
          {
            input: '31',
            out: 'treinta y uno'
          },
          {
            input: '99',
            out: 'noventa y nueve'
          },
          {
            input: '100',
            out: 'cien'
          },
          {
            input: '101',
            out: 'ciento uno'
          },
          {
            input: '115',
            out: 'ciento quince'
          },
          {
            input: '200',
            out: 'doscientos'
          },
          {
            input: '521',
            out: 'quinientos veintiuno'
          },
          {
            input: '999',
            out: 'novecientos noventa y nueve'
          },
          {
            input: '1000',
            out: 'mil'
          },
          {
            input: '1001',
            out: 'mil uno'
          },
          {
            input: '1980',
            out: 'mil novecientos ochenta'
          },
          {
            input: '2000',
            out: 'dos mil'
          },
          {
            input: '2021',
            out: 'dos mil veintiuno'
          },
          {
            input: '10000',
            out: 'diez mil'
          },
          {
            input: '21000',
            out: 'veintiún mil'
          },
          {
            input: '31001',
            out: 'treinta y un mil uno'
          },
          {
            input: '45678',
            out: 'cuarenta y cinco mil seiscientos setenta y ocho'
          },
          {
            input: '99999',
            out: 'noventa y nueve mil novecientos noventa y nueve'
          },
          {
            input: '100000',
            out: 'Número fuera de rango'
          },
          {
            input: '-5',
            out: 'Número fuera de rango'
          }
        ],
        stdin: '0',
        kind: 'code'
      },
      {
        id: 't2-3-9',
        title: 'Atracción gravitatoria',
        src: '3. Programas completos · Ejercicio 9 · RA 3 · CE b), e)',
        task: 'A una altura h (en metros) la gravedad es <code>g(h) = 9,8 · R² / (R + h)²</code>, con R = 6 370 000 m. Lee la altitud máxima en km (múltiplo de 100) y muestra una línea cada 100 km, desde 0 hasta esa altitud, con el formato <code>altitud gravedad</code> y <b>2 decimales</b> (usa <code>printf("%d %.2f%n", ...)</code>): <code>100 9,50</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int maximo = teclado.nextInt();\n        double radio = 6370000;\n\n    }\n}\n',
        rules: [
          {
            re: /\bfor\s*\(/,
            msg: 'Usa un bucle for'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int maximo = teclado.nextInt();\n        double radio = 6370000;\n        for (int km = 0; km <= maximo; km += 100) {\n            double h = km * 1000;\n            double g = 9.8 * radio * radio / ((radio + h) * (radio + h));\n            System.out.printf("%d %.2f%n", km, g);\n        }\n    }\n}\n',
        notes:
          '<p>Un <code>for</code> con paso 100 (<code>km += 100</code>). La fórmula usa <code>(radio + h) * (radio + h)</code> para elevar al cuadrado (o <code>Math.pow(x, 2)</code>); los kilómetros se pasan a metros multiplicando por 1000.</p>',
        s: 'prof',
        tests: [
          {
            input: '400',
            out: '0 9,80\n100 9,50\n200 9,21\n300 8,94\n400 8,68'
          },
          {
            input: '0',
            out: '0 9,80'
          },
          {
            input: '1000',
            out: '0 9,80\n100 9,50\n200 9,21\n300 8,94\n400 8,68\n500 8,43\n600 8,19\n700 7,96\n800 7,74\n900 7,52\n1000 7,32'
          }
        ],
        stdin: '400',
        kind: 'code'
      },
      {
        id: 't2-3-10',
        title: 'Conjetura de Goldbach',
        src: '3. Programas completos · Ejercicio 10 · RA 3 · CE b), e)',
        task: 'Lee un número N par mayor que 4 y muestra dos primos impares que sumados den N, con este formato: <code>20 = 13 + 7</code>. Para que haya una única respuesta, busca desde N/2 hacia arriba el primer primo p tal que N − p también sea primo, y muestra <code>N = p + (N-p)</code> (20 → 13 + 7; 8 → 5 + 3; 14 → 7 + 7). Si N no es par o no es mayor que 4: <code>Introduce un número par mayor que 4</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n\n    }\n}\n',
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    static boolean esPrimo(int n) {\n        if (n < 2) {\n            return false;\n        }\n        for (int d = 2; d * d <= n; d++) {\n            if (n % d == 0) {\n                return false;\n            }\n        }\n        return true;\n    }\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        if (n <= 4 || n % 2 != 0) {\n            System.out.println("Introduce un número par mayor que 4");\n        } else {\n            int p = n / 2;\n            while (!(esPrimo(p) && esPrimo(n - p))) {\n                p++;\n            }\n            System.out.println(n + " = " + p + " + " + (n - p));\n        }\n    }\n}\n',
        notes:
          '<p>Se reutiliza el test de primo (aquí como método <code>esPrimo</code>). El bucle <code>while</code> avanza <code>p</code> hasta que <b>p y N−p</b> sean primos a la vez. Si no has visto métodos aún, copia la comprobación de primo dentro del bucle.</p>',
        s: 'prof',
        tests: [
          {
            input: '20',
            out: '20 = 13 + 7'
          },
          {
            input: '8',
            out: '8 = 5 + 3'
          },
          {
            input: '14',
            out: '14 = 7 + 7'
          },
          {
            input: '100',
            out: '100 = 53 + 47'
          },
          {
            input: '6',
            out: '6 = 3 + 3'
          },
          {
            input: '4',
            out: 'Introduce un número par mayor que 4'
          },
          {
            input: '7',
            out: 'Introduce un número par mayor que 4'
          },
          {
            input: '1000',
            out: '1000 = 509 + 491'
          }
        ],
        stdin: '20',
        kind: 'code'
      },
      {
        id: 't2-3-11',
        title: 'Ruleta',
        src: '3. Programas completos · Ejercicio 11 · RA 3 · CE a), b), e)',
        task: 'Juega a la ruleta contra el ordenador (40 casillas, números 0–39; los pares son <b>rojos</b> y los impares <b>negros</b>). Se lee el dinero inicial (<code>int</code>). En cada jugada se lee la apuesta (<code>int</code>): si es <b>0</b>, el jugador se retira. Si apuesta más de lo que tiene: <code>No puedes apostar más de lo que tienes</code> y se vuelve a pedir. Si no, se lee el número elegido (int) y el color (<code>R</code> o <code>N</code>). El ordenador gira con <code>Math.random()</code>; si coinciden número <b>y</b> color, gana 10 veces lo apostado; si no, pierde lo apostado (muestra <code>Has ganado</code> / <code>Has perdido</code> con la cantidad). Termina al retirarse: <code>Te retiras con 100 €</code>, o al quedarse sin dinero: <code>Te has quedado sin dinero</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int dinero = teclado.nextInt();\n\n    }\n}\n',
        rules: [
          {
            re: /Math\.random/,
            msg: 'Usa Math.random()'
          },
          {
            re: /\b(while|do)\b/,
            msg: 'Usa un bucle'
          }
        ],
        stdin: '100\n0',
        tests: [
          {
            input: '100\n0',
            re: '(^|\\n)Te retiras con 100 €$',
            rep: 5,
            name: 'Si apuesta 0 se retira: «Te retiras con 100 €»'
          },
          {
            input: '100\n500\n0',
            re: 'No puedes apostar más de lo que tienes[\\s\\S]*Te retiras con 100 €$',
            rep: 5,
            name: 'Rechaza apostar más de lo que tiene'
          },
          {
            input: '100\n100\n0\nN',
            re: 'Has perdido[\\s\\S]*Te has quedado sin dinero$',
            rep: 20,
            name: 'Con una apuesta imposible (casilla 0 es roja, apuesta a negro) pierde todo y se queda sin dinero'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int dinero = teclado.nextInt();\n        boolean sigue = true;\n        while (sigue && dinero > 0) {\n            int apuesta = teclado.nextInt();\n            if (apuesta == 0) {\n                sigue = false;\n            } else if (apuesta > dinero) {\n                System.out.println("No puedes apostar más de lo que tienes");\n            } else {\n                int numero = teclado.nextInt();\n                char color = teclado.next().charAt(0);\n                int salida = (int) (Math.random() * 40);\n                char colorSalida = \'N\';\n                if (salida % 2 == 0) {\n                    colorSalida = \'R\';\n                }\n                System.out.println("Ha salido el " + salida + " " + colorSalida);\n                if (numero == salida && color == colorSalida) {\n                    dinero += apuesta * 10;\n                    System.out.println("Has ganado " + apuesta * 10);\n                } else {\n                    dinero -= apuesta;\n                    System.out.println("Has perdido " + apuesta);\n                }\n            }\n        }\n        if (dinero == 0) {\n            System.out.println("Te has quedado sin dinero");\n        } else {\n            System.out.println("Te retiras con " + dinero + " €");\n        }\n    }\n}\n',
        notes:
          '<p>Una variable booleana (<code>sigue</code>) controla el bucle junto con el dinero. Ganar exige acertar <b>número y color</b> (<code>&amp;&amp;</code>). Como es un juego con azar, esta web comprueba la <b>estructura</b> (retirada, apuesta excesiva, quedarse sin dinero), no el resultado de cada tirada.</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't2-3-12',
        title: 'Dados',
        src: '3. Programas completos · Ejercicio 12 · RA 3 · CE a), b), e)',
        task: 'Juega a los dados contra el ordenador. Se lee el dinero inicial (int). En cada jugada se lee la apuesta (int): <b>0</b> = retirarse; mayor que el dinero → <code>No puedes apostar más de lo que tienes</code> y se repite. Se tiran tres dados (<code>Math.random()</code>, 1–6) y se muestran en una línea (<code>Dados: 3 3 5</code>). Tres iguales: apuesta ×5 si son seises, ×3 en otro caso; dos iguales: ×2; en otro caso se pierde lo apostado. (Se gana la apuesta multiplicada, perdiendo la apuesta original.) Muestra <code>Has ganado X</code> o <code>Has perdido X</code>. Final: <code>Te retiras con X €</code> o <code>Te has quedado sin dinero</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int dinero = teclado.nextInt();\n\n    }\n}\n',
        rules: [
          {
            re: /Math\.random/,
            msg: 'Usa Math.random()'
          },
          {
            re: /\b(while|do)\b/,
            msg: 'Usa un bucle'
          }
        ],
        stdin: '50\n0',
        tests: [
          {
            input: '50\n0',
            re: '(^|\\n)Te retiras con 50 €$',
            rep: 5,
            name: 'Si apuesta 0 se retira: «Te retiras con 50 €»'
          },
          {
            input: '50\n80\n0',
            re: 'No puedes apostar más de lo que tienes[\\s\\S]*Te retiras con 50 €$',
            rep: 5,
            name: 'Rechaza apostar más de lo que tiene'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int dinero = teclado.nextInt();\n        boolean sigue = true;\n        while (sigue && dinero > 0) {\n            int apuesta = teclado.nextInt();\n            if (apuesta == 0) {\n                sigue = false;\n            } else if (apuesta > dinero) {\n                System.out.println("No puedes apostar más de lo que tienes");\n            } else {\n                int d1 = (int) (Math.random() * 6) + 1;\n                int d2 = (int) (Math.random() * 6) + 1;\n                int d3 = (int) (Math.random() * 6) + 1;\n                System.out.println("Dados: " + d1 + " " + d2 + " " + d3);\n                int premio = 0;\n                if (d1 == d2 && d2 == d3) {\n                    if (d1 == 6) {\n                        premio = apuesta * 5;\n                    } else {\n                        premio = apuesta * 3;\n                    }\n                } else if (d1 == d2 || d1 == d3 || d2 == d3) {\n                    premio = apuesta * 2;\n                }\n                if (premio > 0) {\n                    dinero += premio - apuesta;\n                    System.out.println("Has ganado " + premio);\n                } else {\n                    dinero -= apuesta;\n                    System.out.println("Has perdido " + apuesta);\n                }\n            }\n        }\n        if (dinero == 0) {\n            System.out.println("Te has quedado sin dinero");\n        } else {\n            System.out.println("Te retiras con " + dinero + " €");\n        }\n    }\n}\n',
        notes:
          '<p>Ojo con el orden de las condiciones: primero <b>tres iguales</b> (que incluye también «dos iguales») y después «dos iguales», si no el segundo caso se comería al primero. Al ganar, el dinero sube <code>premio − apuesta</code> (la apuesta no se pierde).</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't2-3-13',
        title: 'Tragaperras',
        src: '3. Programas completos · Ejercicio 13 · RA 3 · CE a), b), e)',
        task: 'Simula una tragaperras. Primero escribe <code>*** BIENVENIDO AL JUEGO DE LA TRAGAPERRAS ***</code> y pregunta con cuánto dinero se quiere jugar (entre 1 y 50 €; si no, <code>Cantidad incorrecta</code> y se repite). Cada jugada cuesta 0,50 €. Salen tres frutas al azar entre seis (MANZANA, NARANJA, FRESA, CEREZA, LIMÓN, SANDÍA) separadas por « - ». Premios: tres cerezas 30 €, tres sandías 20, tres fresas 10, otras tres iguales 5; dos cerezas 3, dos sandías 2, otras dos iguales 1; tres distintas, nada. Tras cada jugada muestra la combinación, el premio y <code>Su saldo actual es de X euros.</code>, y pregunta <code>¿Desea jugar otra vez (S/N)?</code> (se lee una letra). Si el saldo no llega para otra jugada, termina sin preguntar. Al terminar: <code>¡Hasta la próxima!</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        System.out.println("*** BIENVENIDO AL JUEGO DE LA TRAGAPERRAS ***");\n\n    }\n}\n',
        rules: [
          {
            re: /Math\.random/,
            msg: 'Usa Math.random()'
          },
          {
            re: /\b(while|do)\b/,
            msg: 'Usa un bucle'
          }
        ],
        stdin: '60\n20\nN',
        tests: [
          {
            input: '60\n20\nN',
            re: '^\\*\\*\\* BIENVENIDO AL JUEGO DE LA TRAGAPERRAS \\*\\*\\*[\\s\\S]*Cantidad incorrecta[\\s\\S]*Su saldo actual es de[\\s\\S]*¡Hasta la próxima!$',
            rep: 30,
            name: 'Bienvenida, rechaza 60, juega con 20 y termina con «¡Hasta la próxima!»'
          },
          {
            input: '0\n51\n1\nN',
            re: 'Cantidad incorrecta[\\s\\S]*Cantidad incorrecta[\\s\\S]*¡Hasta la próxima!$',
            rep: 10,
            name: 'Repite la petición mientras la cantidad no esté entre 1 y 50'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    static String fruta(int n) {\n        switch (n) {\n            case 0:\n                return "MANZANA";\n            case 1:\n                return "NARANJA";\n            case 2:\n                return "FRESA";\n            case 3:\n                return "CEREZA";\n            case 4:\n                return "LIMÓN";\n            default:\n                return "SANDÍA";\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        System.out.println("*** BIENVENIDO AL JUEGO DE LA TRAGAPERRAS ***");\n        double saldo;\n        do {\n            System.out.print("¿Con cuánto dinero desea empezar (de 1 a 50 euros)? ");\n            saldo = teclado.nextDouble();\n            if (saldo < 1 || saldo > 50) {\n                System.out.println("Cantidad incorrecta");\n            }\n        } while (saldo < 1 || saldo > 50);\n        System.out.println("COMIENZA EL JUEGO...");\n        char otra = \'S\';\n        while (otra == \'S\' && saldo >= 0.5) {\n            saldo -= 0.5;\n            int f1 = (int) (Math.random() * 6);\n            int f2 = (int) (Math.random() * 6);\n            int f3 = (int) (Math.random() * 6);\n            System.out.println("La combinación de esta jugada es: " + fruta(f1) + " - " + fruta(f2) + " - " + fruta(f3));\n            double premio = 0;\n            if (f1 == f2 && f2 == f3) {\n                if (f1 == 3) {\n                    premio = 30;\n                } else if (f1 == 5) {\n                    premio = 20;\n                } else if (f1 == 2) {\n                    premio = 10;\n                } else {\n                    premio = 5;\n                }\n            } else if (f1 == f2 || f1 == f3 || f2 == f3) {\n                int igual = f1;\n                if (f1 != f2 && f1 != f3) {\n                    igual = f2;\n                }\n                if (igual == 3) {\n                    premio = 3;\n                } else if (igual == 5) {\n                    premio = 2;\n                } else {\n                    premio = 1;\n                }\n            }\n            saldo += premio;\n            if (premio > 0) {\n                System.out.println("¡Enhorabuena! Ha ganado " + premio + " euros.");\n            } else {\n                System.out.println("Lo siento, no ha obtenido ningún premio");\n            }\n            System.out.println("Su saldo actual es de " + saldo + " euros.");\n            if (saldo >= 0.5) {\n                System.out.print("¿Desea jugar otra vez (S/N)? ");\n                otra = Character.toUpperCase(teclado.next().charAt(0));\n            }\n        }\n        System.out.println("¡Hasta la próxima!");\n    }\n}\n',
        notes:
          '<p>Cada fruta es un número 0–5 (0 manzana, 1 naranja, 2 fresa, 3 cereza, 4 limón, 5 sandía), y un método las convierte en texto. Primero se comprueban las <b>tres iguales</b> y luego las <b>dos iguales</b>. El bucle sigue mientras el jugador quiera <b>y</b> el saldo llegue.</p>',
        s: 'prof',
        kind: 'code'
      }
    ]
  },
  {
    id: 'q4',
    t: '4. Sentencias de salto',
    items: [
      {
        id: 't2-4-1',
        title: '¿Qué muestra?',
        src: '4. Sentencias de salto · Ejercicio 1 · RA 3 · CE c)',
        task: 'Sin ejecutarlos, escribe qué muestra cada fragmento. Después compruébalo y explica las diferencias.<pre>// a)\nfor (int i = 1; i &lt;= 10; i++) {\n    if (i == 5) {\n        break;\n    }\n    System.out.print(i + " ");\n}\n\n// b)\nfor (int i = 1; i &lt;= 10; i++) {\n    if (i % 3 == 0) {\n        continue;\n    }\n    System.out.print(i + " ");\n}\n\n// c)\nfor (int i = 1; i &lt;= 3; i++) {\n    for (int j = 1; j &lt;= 3; j++) {\n        if (j == 2) {\n            break;\n        }\n        System.out.print(i + "-" + j + " ");\n    }\n}</pre>En c), ¿de qué bucle sale el <code>break</code>?',
        ph: 'a) …\nb) …\nc) …',
        ans: '<ul><li><b>a)</b> <code>1 2 3 4</code> — cuando <code>i</code> vale 5 el <code>break</code> <b>termina el bucle</b>; el 5 no se llega a mostrar.</li><li><b>b)</b> <code>1 2 4 5 7 8 10</code> — con <code>continue</code> solo se <b>salta esa vuelta</b> (los múltiplos de 3), pero el bucle sigue.</li><li><b>c)</b> <code>1-1 2-1 3-1</code> — el <code>break</code> sale solo del bucle <b>interior</b> (el de <code>j</code>) en cuanto <code>j == 2</code>; el exterior sigue para <code>i = 2</code> y <code>i = 3</code>.</li></ul><p><b>Diferencia:</b> <code>break</code> abandona el bucle entero; <code>continue</code> abandona solo la vuelta actual. Y en bucles anidados, <code>break</code> solo afecta al bucle más cercano.</p>',
        kind: 'qa'
      },
      {
        id: 't2-4-2a',
        title: 'Primer múltiplo de 7 (con break)',
        src: '4. Sentencias de salto · Ejercicio 2 · RA 3 · CE b), c)',
        task: 'Lee dos enteros A y B (con A ≤ B) y muestra el primer múltiplo de 7 que haya entre ellos (incluidos). En cuanto lo encuentres, deja de buscar con <code>break</code>. Salida: <code>El primer múltiplo de 7 es 14</code>; si no hay ninguno: <code>No hay ningún múltiplo de 7 entre 8 y 13</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n\n    }\n}\n',
        rules: [
          {
            re: /\bbreak\s*;/,
            msg: 'Usa break'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        int encontrado = -1;\n        for (int i = a; i <= b; i++) {\n            if (i % 7 == 0) {\n                encontrado = i;\n                break;\n            }\n        }\n        if (encontrado == -1) {\n            System.out.println("No hay ningún múltiplo de 7 entre " + a + " y " + b);\n        } else {\n            System.out.println("El primer múltiplo de 7 es " + encontrado);\n        }\n    }\n}\n',
        notes:
          '<p>El <code>break</code> corta el bucle en cuanto se encuentra el primero. Se usa <code>-1</code> como valor «no encontrado» (sirve mientras los números sean positivos; con negativos habría que usar un booleano).</p>',
        s: 'prof',
        tests: [
          {
            input: '1\n20',
            out: 'El primer múltiplo de 7 es 7'
          },
          {
            input: '8\n13',
            out: 'No hay ningún múltiplo de 7 entre 8 y 13'
          },
          {
            input: '14\n30',
            out: 'El primer múltiplo de 7 es 14'
          },
          {
            input: '15\n20',
            out: 'No hay ningún múltiplo de 7 entre 15 y 20'
          },
          {
            input: '7\n7',
            out: 'El primer múltiplo de 7 es 7'
          },
          {
            input: '5\n5',
            out: 'No hay ningún múltiplo de 7 entre 5 y 5'
          }
        ],
        stdin: '1\n20',
        kind: 'code'
      },
      {
        id: 't2-4-2b',
        title: 'Primer múltiplo de 7 (sin break)',
        src: '4. Sentencias de salto · Ejercicio 2 · RA 3 · CE b), c)',
        task: 'Lo mismo (misma entrada y salida) pero <b>sin <code>break</code></b>: usa una variable booleana en la condición del bucle. ¿Qué versión te parece más clara?',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n\n    }\n}\n',
        rules: [
          {
            re: /\bbreak\b/,
            not: true,
            msg: 'No usa break'
          },
          {
            re: /boolean/,
            msg: 'Usa una variable boolean'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        boolean encontrado = false;\n        int i = a;\n        while (i <= b && !encontrado) {\n            if (i % 7 == 0) {\n                encontrado = true;\n            } else {\n                i++;\n            }\n        }\n        if (encontrado) {\n            System.out.println("El primer múltiplo de 7 es " + i);\n        } else {\n            System.out.println("No hay ningún múltiplo de 7 entre " + a + " y " + b);\n        }\n    }\n}\n',
        notes:
          '<p>La condición del bucle incluye el booleano: <code>i &lt;= b &amp;&amp; !encontrado</code>. Cuando se encuentra, <b>no se incrementa i</b> y así <code>i</code> conserva el múltiplo. Es más largo, pero la condición de parada se ve de un vistazo en la cabecera del bucle.</p>',
        s: 'prof',
        tests: [
          {
            input: '1\n20',
            out: 'El primer múltiplo de 7 es 7'
          },
          {
            input: '8\n13',
            out: 'No hay ningún múltiplo de 7 entre 8 y 13'
          },
          {
            input: '14\n30',
            out: 'El primer múltiplo de 7 es 14'
          },
          {
            input: '15\n20',
            out: 'No hay ningún múltiplo de 7 entre 15 y 20'
          },
          {
            input: '7\n7',
            out: 'El primer múltiplo de 7 es 7'
          },
          {
            input: '5\n5',
            out: 'No hay ningún múltiplo de 7 entre 5 y 5'
          }
        ],
        stdin: '1\n20',
        kind: 'code'
      },
      {
        id: 't2-4-3a',
        title: 'Suma de positivos (con continue)',
        src: '4. Sentencias de salto · Ejercicio 3 · RA 3 · CE b), c)',
        task: 'Pide 10 números enteros y suma solo los positivos. Usa <code>continue</code> para saltarte los negativos y el cero. Salida: <code>La suma de los positivos es 18</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int suma = 0;\n\n    }\n}\n',
        rules: [
          {
            re: /\bcontinue\s*;/,
            msg: 'Usa continue'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int suma = 0;\n        for (int i = 1; i <= 10; i++) {\n            int n = teclado.nextInt();\n            if (n <= 0) {\n                continue;\n            }\n            suma += n;\n        }\n        System.out.println("La suma de los positivos es " + suma);\n    }\n}\n',
        notes:
          '<p>Aunque no se sume, <b>hay que leer</b> los 10 números: el <code>continue</code> salta solo la suma, no la lectura (que está antes).</p>',
        s: 'prof',
        tests: [
          {
            input: '5\n-3\n0\n7\n-1\n2\n4\n-8\n0\n0',
            out: 'La suma de los positivos es 18'
          },
          {
            input: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10',
            out: 'La suma de los positivos es 55'
          },
          {
            input: '-1\n-2\n-3\n-4\n-5\n-6\n-7\n-8\n-9\n-10',
            out: 'La suma de los positivos es 0'
          }
        ],
        stdin: '5\n-3\n0\n7\n-1\n2\n4\n-8\n0\n0',
        kind: 'code'
      },
      {
        id: 't2-4-3b',
        title: 'Suma de positivos (sin continue)',
        src: '4. Sentencias de salto · Ejercicio 3 · RA 3 · CE b), c)',
        task: 'Reescríbelo sin <code>continue</code>. ¿Qué cambia?',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int suma = 0;\n\n    }\n}\n',
        rules: [
          {
            re: /\bcontinue\b/,
            not: true,
            msg: 'No usa continue'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int suma = 0;\n        for (int i = 1; i <= 10; i++) {\n            int n = teclado.nextInt();\n            if (n > 0) {\n                suma += n;\n            }\n        }\n        System.out.println("La suma de los positivos es " + suma);\n    }\n}\n',
        notes:
          '<p>Cambia la condición: en vez de «si no es positivo, salta», se dice «si es positivo, suma». Queda más corto y claro; el <code>continue</code> aquí no hacía falta.</p>',
        s: 'prof',
        tests: [
          {
            input: '5\n-3\n0\n7\n-1\n2\n4\n-8\n0\n0',
            out: 'La suma de los positivos es 18'
          },
          {
            input: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10',
            out: 'La suma de los positivos es 55'
          },
          {
            input: '-1\n-2\n-3\n-4\n-5\n-6\n-7\n-8\n-9\n-10',
            out: 'La suma de los positivos es 0'
          }
        ],
        stdin: '5\n-3\n0\n7\n-1\n2\n4\n-8\n0\n0',
        kind: 'code'
      },
      {
        id: 't2-4-4',
        title: 'Menú',
        src: '4. Sentencias de salto · Ejercicio 4 · RA 3 · CE b), c)',
        task: 'Muestra este menú una y otra vez hasta que el usuario elija salir:<pre>1. Saludar\n2. Mostrar la hora del sistema\n3. Salir\nElige una opción:</pre>Lee la opción (int). Usa un <code>switch</code>: la 1 muestra <code>¡Hola!</code>; la 2 muestra la hora con <code>java.time.LocalTime.now()</code>; la 3 sale. Responde: ¿qué hace el <code>break</code> de cada <code>case</code>? ¿Puedes salir del bucle con el <code>break</code> del <code>case 3</code>?',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int opcion;\n\n    }\n}\n',
        rules: [
          {
            re: /\bswitch\s*\(/,
            msg: 'Usa switch'
          },
          {
            re: /\b(while|do)\b/,
            msg: 'Usa un bucle'
          }
        ],
        stdin: '1\n3',
        tests: [
          {
            input: '1\n1\n3',
            re: '¡Hola![\\s\\S]*¡Hola![\\s\\S]*Salir',
            name: 'La opción 1 saluda cada vez que se elige y el menú se repite'
          },
          {
            input: '3',
            re: '^1\\. Saludar\\n2\\. Mostrar la hora del sistema\\n3\\. Salir\\nElige una opción:\\s*$',
            name: 'Con la opción 3 sale tras mostrar el menú una vez'
          },
          {
            input: '2\n3',
            re: '[0-9]{2}:[0-9]{2}:[0-9]{2}',
            name: 'La opción 2 muestra la hora (hh:mm:ss…)'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int opcion;\n        do {\n            System.out.println("1. Saludar");\n            System.out.println("2. Mostrar la hora del sistema");\n            System.out.println("3. Salir");\n            System.out.println("Elige una opción:");\n            opcion = teclado.nextInt();\n            switch (opcion) {\n                case 1:\n                    System.out.println("¡Hola!");\n                    break;\n                case 2:\n                    System.out.println(java.time.LocalTime.now());\n                    break;\n                case 3:\n                    break;\n                default:\n                    System.out.println("Opción no válida");\n            }\n        } while (opcion != 3);\n    }\n}\n',
        notes:
          '<p><b>1)</b> El <code>break</code> de cada <code>case</code> evita que Java siga ejecutando los <code>case</code> siguientes (que se «caiga» al de abajo). Si lo quitas del 1, al elegir 1 saldría también la hora.</p><p><b>2)</b> El <code>break</code> del <code>case 3</code> solo sale del <b>switch</b>, no del bucle. Por eso se resuelve con la condición del bucle (<code>while (opcion != 3)</code>) o con una variable booleana.</p>',
        s: 'prof',
        kind: 'code'
      }
    ]
  },
  {
    id: 'q5',
    t: '5. Excepciones',
    items: [
      {
        id: 't2-5-1',
        title: 'División segura',
        src: '5. Excepciones · Ejercicio 1 · RA 3 · CE d)',
        task: 'Pide dos enteros y divide el primero entre el segundo. Captura: si el segundo es 0 (<code>ArithmeticException</code>), muestra <code>No se puede dividir entre cero</code>; si el usuario escribe algo que no es un entero (<code>InputMismatchException</code>), muestra <code>Eso no es un número entero</code>. En ambos casos el programa termina sin traza de error. Si todo va bien: <code>Resultado: 5</code>.',
        starter:
          'import java.util.Scanner;\nimport java.util.InputMismatchException;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n\n    }\n}\n',
        rules: [
          {
            re: /\btry\s*\{/,
            msg: 'Usa try'
          },
          {
            re: /catch\s*\(\s*ArithmeticException/,
            msg: 'Captura ArithmeticException'
          },
          {
            re: /catch\s*\(\s*InputMismatchException/,
            msg: 'Captura InputMismatchException'
          }
        ],
        solution:
          'import java.util.Scanner;\nimport java.util.InputMismatchException;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        try {\n            int a = teclado.nextInt();\n            int b = teclado.nextInt();\n            System.out.println("Resultado: " + a / b);\n        } catch (ArithmeticException e) {\n            System.out.println("No se puede dividir entre cero");\n        } catch (InputMismatchException e) {\n            System.out.println("Eso no es un número entero");\n        }\n    }\n}\n',
        notes:
          '<p>Dos <code>catch</code> para dos tipos de error. El de <code>ArithmeticException</code> salta con <code>a / b</code> cuando b = 0 (solo en enteros). El de <code>InputMismatchException</code> salta en <code>nextInt()</code> si lo escrito no es un entero (texto, decimal…).</p>',
        s: 'prof',
        tests: [
          {
            input: '10\n2',
            out: 'Resultado: 5'
          },
          {
            input: '10\n0',
            out: 'No se puede dividir entre cero'
          },
          {
            input: 'hola',
            out: 'Eso no es un número entero'
          },
          {
            input: '10\n3.5',
            out: 'Eso no es un número entero'
          },
          {
            input: '7\n-2',
            out: 'Resultado: -3'
          }
        ],
        stdin: '10\n2',
        kind: 'code'
      },
      {
        id: 't2-5-2',
        title: 'Pedir un entero hasta que sea válido',
        src: '5. Excepciones · Ejercicio 2 · RA 3 · CE b), d)',
        task: 'Pide un entero. Si el usuario escribe algo que no es un entero, avísale con <code>Introduce un número entero</code> y vuelve a pedirlo, las veces que haga falta. Cuando lo consigas, muestra <code>El número 42 es par</code> o <code>El número 7 es impar</code>. <b>Pista:</b> si <code>nextInt()</code> falla, el texto incorrecto sigue en el Scanner: hay que retirarlo con <code>teclado.next()</code> antes de volver a leer, o el bucle será infinito.',
        starter:
          'import java.util.Scanner;\nimport java.util.InputMismatchException;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n\n    }\n}\n',
        rules: [
          {
            re: /\btry\s*\{/,
            msg: 'Usa try'
          },
          {
            re: /catch\s*\(\s*InputMismatchException/,
            msg: 'Captura InputMismatchException'
          },
          {
            re: /\b(while|do)\b/,
            msg: 'Usa un bucle'
          }
        ],
        solution:
          'import java.util.Scanner;\nimport java.util.InputMismatchException;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = 0;\n        boolean valido = false;\n        do {\n            try {\n                n = teclado.nextInt();\n                valido = true;\n            } catch (InputMismatchException e) {\n                System.out.println("Introduce un número entero");\n                teclado.next();\n            }\n        } while (!valido);\n        if (n % 2 == 0) {\n            System.out.println("El número " + n + " es par");\n        } else {\n            System.out.println("El número " + n + " es impar");\n        }\n    }\n}\n',
        notes:
          '<p>Patrón clásico: un booleano <code>valido</code> que solo pasa a true si <code>nextInt()</code> funciona (esa línea va justo después de la lectura, dentro del <code>try</code>). En el <code>catch</code> se retira el texto malo con <code>teclado.next()</code>: si no, <code>nextInt()</code> volvería a fallar con el mismo texto una y otra vez.</p>',
        s: 'prof',
        tests: [
          {
            input: '42',
            out: 'El número 42 es par'
          },
          {
            input: '7',
            out: 'El número 7 es impar'
          },
          {
            input: 'abc\n7.5\n42',
            out: 'Introduce un número entero\nIntroduce un número entero\nEl número 42 es par'
          },
          {
            input: 'hola\n-3',
            out: 'Introduce un número entero\nEl número -3 es impar'
          },
          {
            input: '0',
            out: 'El número 0 es par'
          }
        ],
        stdin: '42',
        kind: 'code'
      },
      {
        id: 't2-5-3',
        title: 'Notas con excepción propia',
        src: '5. Excepciones · Ejercicio 3 · RA 3 · CE d), h)',
        task: '<b>1.</b> Crea la excepción <code>NotaInvalidaException</code> (clase aparte que extiende de <code>Exception</code>, con constructor que recibe el mensaje y llama a <code>super</code>). <b>2.</b> Escribe <code>static void comprobarNota(double nota)</code> que lance esa excepción, con un mensaje que incluya la nota, si no está entre 0 y 10 (<code>La nota 11.0 no es válida</code>). <b>3.</b> En <code>main</code>, pide notas (<code>nextDouble</code>) hasta que el usuario introduzca un número negativo; para cada una llama a <code>comprobarNota</code> y muestra <code>Nota correcta</code> o el mensaje de la excepción.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n\n    }\n}\n',
        rules: [
          {
            re: /class\s+NotaInvalidaException\s+extends\s+Exception/,
            msg: 'Crea NotaInvalidaException que extiende de Exception'
          },
          {
            re: /throws\s+NotaInvalidaException/,
            msg: 'comprobarNota declara throws NotaInvalidaException'
          },
          {
            re: /throw\s+new\s+NotaInvalidaException/,
            msg: 'Lanza la excepción con throw new'
          }
        ],
        solution:
          'import java.util.Scanner;\n\nclass NotaInvalidaException extends Exception {\n    public NotaInvalidaException(String mensaje) {\n        super(mensaje);\n    }\n}\n\npublic class Main {\n    static void comprobarNota(double nota) throws NotaInvalidaException {\n        if (nota < 0 || nota > 10) {\n            throw new NotaInvalidaException("La nota " + nota + " no es válida");\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        double nota = teclado.nextDouble();\n        while (nota >= 0) {\n            try {\n                comprobarNota(nota);\n                System.out.println("Nota correcta");\n            } catch (NotaInvalidaException e) {\n                System.out.println(e.getMessage());\n            }\n            nota = teclado.nextDouble();\n        }\n    }\n}\n',
        notes:
          '<p>Una excepción propia es una clase que <b>extiende de Exception</b> y pasa el mensaje a <code>super</code>. El método avisa con <code>throws</code> y lanza con <code>throw new …</code>; quien lo llama debe usar <code>try / catch</code>.</p><p><b>Preguntas:</b> (1) Si quitas <code>throws NotaInvalidaException</code> de la cabecera de <code>comprobarNota</code>, <b>no compila</b>: <code>Exception</code> es una excepción <i>comprobada</i> y Java obliga a declararla o capturarla. (2) Si <code>NotaInvalidaException</code> extendiera de <code>RuntimeException</code>, ya <b>no haría falta</b> el <code>throws</code> ni capturarla (es no comprobada): compilaría igual, pero el programa podría romperse en ejecución si nadie la captura.</p><p class="muted">Con el idioma del sistema en español, el <code>nextDouble()</code> de Java real espera coma decimal (7,5); este laboratorio acepta punto y coma.</p>',
        s: 'prof',
        tests: [
          {
            input: '7.5\n11\n10\n-1',
            out: 'Nota correcta\nLa nota 11.0 no es válida\nNota correcta'
          },
          {
            input: '-5',
            out: ''
          },
          {
            input: '0\n10.5\n3\n-0.5',
            out: 'Nota correcta\nLa nota 10.5 no es válida\nNota correcta'
          }
        ],
        stdin: '7.5\n11\n10\n-1',
        kind: 'code'
      }
    ]
  },
  {
    id: 'q6',
    t: '6. Documentación, pruebas y depuración',
    items: [
      {
        id: 't2-6-1',
        title: 'Encuentra el error con el depurador',
        src: '6. Documentación, pruebas y depuración · Ejercicio 1 · RA 3 · CE f)',
        task: 'Este programa debería contar los números pares entre 1 y N y sumarlos. Para N = 10 tendría que mostrar <code>Hay 5 pares y suman 30</code>, pero muestra <code>Hay 5 pares y suman 9</code>. Pulsa <b>Ejecutar</b> y comprueba el fallo. Hay <b>dos errores</b>: encuéntralos, corrígelos y explica cada uno. (Con el depurador de NetBeans, un breakpoint dentro del <code>if</code> y F5 te dejaría ver <code>i</code>, <code>suma</code> y <code>contador</code> en cada parada.)',
        starter:
          'import java.util.Scanner;\n\npublic class Pares {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print("N: ");\n        int n = sc.nextInt();\n        int suma = 0;\n        int contador = 0;\n        for (int i = 1; i <= n; i++) {\n            if (i % 2 == 1) {\n                suma = i;\n                contador++;\n            }\n        }\n        System.out.println("Hay " + contador + " pares y suman " + suma);\n    }\n}\n',
        stdin: '10',
        solution:
          'import java.util.Scanner;\n\npublic class Pares {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print("N: ");\n        int n = sc.nextInt();\n        int suma = 0;\n        int contador = 0;\n        for (int i = 1; i <= n; i++) {\n            if (i % 2 == 0) {\n                suma += i;\n                contador++;\n            }\n        }\n        System.out.println("Hay " + contador + " pares y suman " + suma);\n    }\n}\n',
        notes:
          '<p><b>Tabla del depurador (N = 10, con el programa original):</b></p><table class="keys"><tr><td><b>i</b></td><td><b>suma</b></td><td><b>contador</b></td></tr><tr><td>1</td><td>1</td><td>1</td></tr><tr><td>3</td><td>3</td><td>2</td></tr><tr><td>5</td><td>5</td><td>3</td></tr><tr><td>7</td><td>7</td><td>4</td></tr><tr><td>9</td><td>9</td><td>5</td></tr></table><p><b>¿Por qué <code>contador</code> sale bien?</b> Porque entre 1 y 10 hay 5 impares y 5 pares: el programa cuenta los impares, pero para N = 10 el número coincide por casualidad.</p><p><b>Error 1:</b> <code>i % 2 == 1</code> selecciona los <b>impares</b>; para los pares es <code>i % 2 == 0</code>. <b>Error 2:</b> <code>suma = i</code> <b>sustituye</b> el valor en vez de acumularlo: debe ser <code>suma += i</code>.</p>',
        s: 'prof',
        tests: [
          {
            input: '10',
            out: 'N: Hay 5 pares y suman 30'
          },
          {
            input: '5',
            out: 'N: Hay 2 pares y suman 6'
          },
          {
            input: '1',
            out: 'N: Hay 0 pares y suman 0'
          },
          {
            input: '8',
            out: 'N: Hay 4 pares y suman 20'
          },
          {
            input: '0',
            out: 'N: Hay 0 pares y suman 0'
          }
        ],
        kind: 'code'
      },
      {
        id: 't2-6-2',
        title: 'Pruebas de caja negra (año bisiesto)',
        src: '6. Documentación, pruebas y depuración · Ejercicio 2 · RA 3 · CE f)',
        task: 'Elige el ejercicio del año bisiesto. 1) Diseña sus <b>clases de equivalencia</b> (válidas y no válidas). 2) Escribe una tabla de casos de prueba, con al menos uno por clase y los valores límite (nº, entrada, resultado esperado, resultado obtenido, ¿correcto?). 3) Ejecútalas y completa la tabla.',
        ans: '<p><b>Clases de equivalencia (año bisiesto):</b></p><ul><li><b>Válidas:</b> (A) divisible entre 400 → bisiesto; (B) divisible entre 4 pero no entre 100 → bisiesto; (C) divisible entre 100 pero no entre 400 → <b>no</b> bisiesto; (D) no divisible entre 4 → no bisiesto.</li><li><b>No válidas</b> (según lo que decida tu programa): 0 o negativo; texto o decimal en vez de entero.</li></ul><table class="keys"><tr><td><b>Nº</b></td><td><b>Entrada</b></td><td><b>Esperado</b></td><td><b>Clase / límite</b></td></tr><tr><td>1</td><td>2000</td><td>bisiesto</td><td>A (÷400)</td></tr><tr><td>2</td><td>2024</td><td>bisiesto</td><td>B</td></tr><tr><td>3</td><td>1900</td><td>no bisiesto</td><td>C (÷100, no ÷400)</td></tr><tr><td>4</td><td>2023</td><td>no bisiesto</td><td>D</td></tr><tr><td>5</td><td>4</td><td>bisiesto</td><td>límite (primer múltiplo de 4)</td></tr><tr><td>6</td><td>100</td><td>no bisiesto</td><td>límite</td></tr><tr><td>7</td><td>400</td><td>bisiesto</td><td>límite</td></tr><tr><td>8</td><td>1</td><td>no bisiesto</td><td>límite inferior</td></tr><tr><td>9</td><td>0 / -4</td><td>decisión tuya (no válido)</td><td>no válida</td></tr><tr><td>10</td><td>abc</td><td>error de entrada</td><td>no válida</td></tr></table><p>«Resultado obtenido» y «¿Correcto?» los rellenas al ejecutarlo en tu programa (esta web te deja ejecutar el ejercicio <i>Año bisiesto</i> del tema).</p>',
        kind: 'qa'
      },
      {
        id: 't2-6-3',
        title: 'Aserciones: preguntas',
        src: '6. Documentación, pruebas y depuración · Ejercicio 3 · RA 3 · CE i)',
        task: 'Activa las aserciones (<code>-ea</code>) y comprueba con <code>assert false : "Las aserciones están activas";</code>. En el factorial añade una aserción antes (N no negativo) y otra después (resultado &gt; 0). Pruébalo con N = −3 y N = 17 (con <code>int</code>): ¿qué aserción falla y qué error descubre la segunda? Con N = 13 ninguna falla pero el resultado es incorrecto (13! = 6 227 020 800): ¿por qué no lo detecta? Desactiva las aserciones y repite: ¿qué cambia?',
        ans: '<ul><li><b>-ea</b>: en NetBeans, <i>Run → Set Project Configuration → Customize → Run → VM Options: <code>-ea</code></i>. Con ella, <code>assert false : "..."</code> lanza un <code>AssertionError</code>.</li><li><b>N = −3</b> falla la <b>primera</b> (<code>assert n &gt;= 0</code>).</li><li><b>N = 17</b> falla la <b>segunda</b> (<code>assert resultado &gt; 0</code>): 17! no cabe en un <code>int</code>, hay <b>desbordamiento</b> y el valor se vuelve negativo.</li><li><b>N = 13</b>: 13! también desborda (1 932 053 504 en vez de 6 227 020 800) pero sigue siendo <b>positivo</b>, así que la aserción <code>&gt; 0</code> no lo detecta. Las aserciones solo comprueban lo que tú les pides: <b>no demuestran que el programa sea correcto</b>.</li><li><b>Sin -ea</b> las aserciones se ignoran: con N = −3 el programa sigue y con 17 muestra un número negativo sin avisar. Por eso <b>no sustituyen a la validación de los datos del usuario</b>: esa debe funcionar siempre.</li></ul><p>Haz el ejercicio práctico siguiente para verlo en acción.</p>',
        kind: 'qa'
      },
      {
        id: 't2-6-3b',
        title: 'Factorial con aserciones',
        src: '6. Documentación, pruebas y depuración · Ejercicio 3 · RA 3 · CE i)',
        task: 'Haz el factorial con <code>int</code> (lee N). Añade <b>antes</b> del cálculo <code>assert n &gt;= 0 : "n debe ser mayor o igual que 0";</code> y <b>después</b> <code>assert resultado &gt; 0 : "el resultado debe ser mayor que 0";</code>. Muestra el resultado. (Las pruebas se ejecutan con las aserciones activadas.)',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n\n    }\n}\n',
        rules: [
          {
            re: /assert\s+n\s*>=\s*0\s*:/,
            msg: 'Aserción antes: n >= 0 con mensaje'
          },
          {
            re: /assert\s+resultado\s*>\s*0\s*:/,
            msg: 'Aserción después: resultado > 0 con mensaje'
          }
        ],
        tests: [
          {
            input: '5',
            ea: true,
            out: '120'
          },
          {
            input: '-3',
            ea: true,
            exc: 'java.lang.AssertionError: n debe ser mayor o igual que 0',
            out: '',
            name: 'N = -3 falla la primera aserción'
          },
          {
            input: '17',
            ea: true,
            exc: 'java.lang.AssertionError: el resultado debe ser mayor que 0',
            out: '',
            name: 'N = 17 falla la segunda (desbordamiento)'
          },
          {
            input: '13',
            ea: true,
            out: '1932053504',
            name: 'N = 13: no falla ninguna aserción, pero el resultado es incorrecto (desbordamiento)'
          }
        ],
        stdin: '5',
        ea: false,
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        assert n >= 0 : "n debe ser mayor o igual que 0";\n        int resultado = 1;\n        for (int i = 2; i <= n; i++) {\n            resultado *= i;\n        }\n        assert resultado > 0 : "el resultado debe ser mayor que 0";\n        System.out.println(resultado);\n    }\n}\n',
        notes:
          '<p>Una aserción comprueba una condición que el programador cree que <b>siempre</b> se cumple. La primera falla con datos erróneos y la segunda detecta un problema de <b>desbordamiento</b>. Pero con 13 el valor desbordado sigue siendo positivo y pasa desapercibido: las aserciones solo cazan lo que les preguntas.</p>',
        s: 'prof',
        kind: 'code'
      },
      {
        id: 't2-6-4',
        title: 'Documenta tu código',
        src: '6. Documentación, pruebas y depuración · Ejercicio 4 · RA 3 · CE g)',
        task: 'Elige un programa de «3. Programas completos». 1) Revisa el estilo (sangrías, llaves, una instrucción por línea, espacios, nombres). 2) Añade un Javadoc a la clase (descripción, <code>@author</code>, <code>@version</code>) y comentarios en las partes difíciles: comenta <b>por qué</b> haces las cosas, no <b>qué</b> hace cada línea. 3) Genera la documentación (<i>Run → Generate Javadoc</i>) y adjunta una captura.',
        ans: '<p>Ejemplo con el programa de la <b>Tragaperras</b> (o cualquiera):</p><pre data-hl>/**\n * Simula una máquina tragaperras con tres frutas.\n * El jugador empieza con un saldo y cada jugada cuesta 0,50 euros.\n *\n * @author Tu nombre\n * @version 1.0\n */\npublic class Main {\n    public static void main(String[] args) {\n        // El saldo es double porque cada jugada cuesta 0,5 euros\n        double saldo;\n        ...\n        // Se comprueba primero "tres iguales", porque incluye también "dos iguales"\n        if (f1 == f2 &amp;&amp; f2 == f3) {\n    ...</pre><ul><li><b>Estilo</b>: sangría de 4 espacios, llave de apertura en la misma línea, una instrucción por línea, espacios alrededor de operadores, variables en <code>camelCase</code> y clases en <code>PascalCase</code>, nombres que se entienden.</li><li><b>Comentarios buenos</b>: explican decisiones y partes difíciles. Mal: <code>// suma 1 a i</code> junto a <code>i++</code>.</li><li><b>Javadoc</b> (<code>/** ... */</code>) sobre la clase y los métodos; NetBeans lo convierte en páginas HTML (<i>Run → Generate Javadoc</i>); la captura debe mostrar la página generada.</li></ul>',
        kind: 'qa'
      },
      {
        id: 't2-6-5',
        title: '¿Aserción o excepción?',
        src: '6. Documentación, pruebas y depuración · Ejercicio 5 · RA 3 · CE i)',
        task: 'Para cada situación, di si usarías <b>assert</b> o <b>control de errores</b> (un <code>if</code> que avisa o una excepción) y justifica en una frase: <b>1)</b> El usuario escribe una nota de 12 cuando el rango es 0–10. <b>2)</b> Tras ordenar un array con tu algoritmo, cada elemento debe ser ≤ al siguiente. <b>3)</b> El fichero de configuración que necesita el programa no existe. <b>4)</b> En un método, <code>int medio = (inicio + fin) / 2;</code> debe quedar entre inicio y fin. <b>5)</b> Tras aplicar un descuento, el precio final nunca puede ser mayor que el original. <b>6)</b> El usuario escribe «hola» cuando se le pide un número. <b>7)</b> En un bucle de intentos, el contador nunca debe superar el máximo. <b>8)</b> El servidor del que se descargan los datos no responde.',
        ans: '<table class="keys"><tr><td><b>1</b></td><td><b>Control de errores</b> (if/excepción): es un dato del usuario, puede pasar siempre y hay que gestionarlo.</td></tr><tr><td><b>2</b></td><td><b>assert</b>: es una comprobación de que <i>tu algoritmo</i> es correcto (un invariante interno).</td></tr><tr><td><b>3</b></td><td><b>Control de errores</b> (excepción): depende del entorno externo, no es un fallo de programación.</td></tr><tr><td><b>4</b></td><td><b>assert</b>: es una propiedad matemática que debe cumplirse si el código está bien.</td></tr><tr><td><b>5</b></td><td><b>assert</b>: una condición lógica interna; si falla es un error de programación.</td></tr><tr><td><b>6</b></td><td><b>Control de errores</b> (<code>InputMismatchException</code>): entrada del usuario.</td></tr><tr><td><b>7</b></td><td><b>assert</b>: invariante del propio bucle; si falla, hay un bug en tu código.</td></tr><tr><td><b>8</b></td><td><b>Control de errores</b>: fallo externo (red) que puede ocurrir con el código perfecto.</td></tr></table><p><b>Regla:</b> <code>assert</code> para cosas que «no pueden pasar» si el programa está bien hecho (errores del programador); <b>excepciones/if</b> para cosas que <b>sí pueden pasar</b> por los datos o el entorno, porque los <code>assert</code> pueden estar desactivados.</p>',
        kind: 'qa'
      },
      {
        id: 't2-6-6',
        title: 'Una aserción dentro del bucle (a mano)',
        src: '6. Documentación, pruebas y depuración · Ejercicio 6 · RA 3 · CE i)',
        task: 'Programa de una cuenta que empieza en 0 €. Positivos = ingresos, negativos = gastos; un gasto solo se aplica si hay saldo suficiente.<pre>int[] movimientos = {100, -30, -50, 20, -60, -40, 10};\nint saldo = 0;\nint rechazados = 0;\nfor (int i = 0; i &lt; movimientos.length; i++) {\n    int movimiento = movimientos[i];\n    if (movimiento &gt; 0 || saldo &gt;= movimiento) {\n        saldo += movimiento;\n    } else {\n        rechazados++;\n    }\n}\nSystem.out.println("Saldo final: " + saldo + " €. Movimientos rechazados: " + rechazados);</pre>1) Calcula a mano el saldo y los rechazados que <b>debería</b> mostrar. 2) ¿Qué muestra el programa? 3) ¿Qué condición debe cumplirse siempre tras cada movimiento? Añade una aserción. 4) ¿En qué movimiento falla? Corrígelo. 5) ¿Por qué aquí es adecuado un assert y no un if que avise al usuario?',
        ans: '<ol><li><b>Debería mostrar</b> <code>Saldo final: 10 €. Movimientos rechazados: 1</code>: 100 → 70 → 20 → 40; el −60 se <b>rechaza</b> (40 − 60 &lt; 0); −40 → 0; +10 → 10.</li><li><b>Muestra</b> <code>Saldo final: -50 €. Movimientos rechazados: 0</code>: la condición <code>saldo &gt;= movimiento</code> compara el saldo con un número negativo (siempre es cierto), y deja pasar gastos aunque el saldo se quede en negativo.</li><li><b>Condición:</b> el saldo nunca debe ser negativo. Aserción dentro del bucle, al final de cada vuelta: <pre data-hl>assert saldo >= 0 : "Movimiento nº " + (i + 1) + ", saldo = " + saldo;</pre></li><li>Con <code>-ea</code> falla en el <b>movimiento nº 5</b> (el de −60: saldo = −20). Corrección: <code>if (movimiento &gt; 0 || saldo + movimiento &gt;= 0)</code>.</li><li>Porque el saldo negativo no depende de lo que escriba el usuario: es un <b>error de programación</b> (un bug en la condición). Un assert lo destapa al probar; un <code>if</code> para el usuario no tiene sentido porque no es un dato suyo.</li></ol>',
        kind: 'qa'
      },
      {
        id: 't2-6-6b',
        title: 'Cuenta con aserción (versión sin arrays)',
        src: '6. Documentación, pruebas y depuración · Ejercicio 6 · RA 3 · CE i)',
        task: 'Versión del ejercicio anterior sin arrays (todavía no se han visto): el programa lee 7 movimientos (enteros). Pulsa Ejecutar con «100 -30 -50 20 -60 -40 10» (uno por línea) y verás un saldo incorrecto. Añade dentro del bucle <code>assert saldo &gt;= 0 : "Movimiento nº " + i + ", saldo = " + saldo;</code> y corrige el error. Salida: <code>Saldo final: 10 €. Movimientos rechazados: 1</code>.',
        starter:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int saldo = 0;\n        int rechazados = 0;\n        for (int i = 1; i <= 7; i++) {\n            int movimiento = teclado.nextInt();\n            if (movimiento > 0 || saldo >= movimiento) {\n                saldo += movimiento;\n            } else {\n                rechazados++;\n            }\n        }\n        System.out.println("Saldo final: " + saldo + " €. Movimientos rechazados: " + rechazados);\n    }\n}\n',
        ea: true,
        stdin: '100\n-30\n-50\n20\n-60\n-40\n10',
        rules: [
          {
            re: /assert\s+saldo\s*>=\s*0/,
            msg: 'Tiene la aserción saldo >= 0'
          },
          {
            re: /saldo\s*\+\s*movimiento\s*>=\s*0|saldo\s*>=\s*-\s*movimiento|saldo\s*\+\s*movimiento\s*>\s*-1/,
            msg: 'Comprueba que saldo + movimiento no sea negativo'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int saldo = 0;\n        int rechazados = 0;\n        for (int i = 1; i <= 7; i++) {\n            int movimiento = teclado.nextInt();\n            if (movimiento > 0 || saldo + movimiento >= 0) {\n                saldo += movimiento;\n            } else {\n                rechazados++;\n            }\n            assert saldo >= 0 : "Movimiento nº " + i + ", saldo = " + saldo;\n        }\n        System.out.println("Saldo final: " + saldo + " €. Movimientos rechazados: " + rechazados);\n    }\n}\n',
        notes:
          '<p>El fallo está en <code>saldo &gt;= movimiento</code>: con un gasto (negativo) esa condición casi siempre es cierta. Lo correcto es comprobar que <b>el saldo resultante</b> no sea negativo: <code>saldo + movimiento &gt;= 0</code>. La aserción <code>saldo &gt;= 0</code> de cada vuelta es la red de seguridad que detecta el error si vuelve a aparecer.</p>',
        s: 'prof',
        tests: [
          {
            input: '100\n-30\n-50\n20\n-60\n-40\n10',
            out: 'Saldo final: 10 €. Movimientos rechazados: 1',
            ea: true
          },
          {
            input: '5\n-10\n-3\n2\n2\n-20\n1',
            out: 'Saldo final: 7 €. Movimientos rechazados: 2',
            ea: true
          },
          {
            input: '1\n1\n1\n1\n1\n1\n1',
            out: 'Saldo final: 7 €. Movimientos rechazados: 0',
            ea: true
          },
          {
            input: '-5\n-5\n-5\n-5\n-5\n-5\n-5',
            out: 'Saldo final: 0 €. Movimientos rechazados: 7',
            ea: true
          }
        ],
        kind: 'code'
      }
    ]
  },
  {
    id: 'q7',
    t: 'Cálculo del volumen de un silo (clase)',
    items: [
      {
        id: 't2-7-1',
        title: 'Volumen de un silo',
        src: 'ud03 · Ejercicio de clase · Volumen de un silo',
        task: 'Programa (clase <code>Silo</code>) que calcula el volumen de un silo: un <b>cilindro</b> (abajo) y un <b>cono</b> (arriba). Requisitos: el radio del cono y del cilindro es el mismo; la altura del cilindro debe ser <b>estrictamente mayor</b> que la del cono.<ol><li><code>static double pedirMedida(String mensaje)</code>: muestra el mensaje (con <code>println</code>), lee un <code>double</code> y lo devuelve.</li><li><code>static double calcularVolumenCono(double radioCono, double alturaCono)</code>: <code>(1/3)·π·radio²·altura</code>.</li><li><code>static double calcularVolumenCilindro(double radioCilindro, double alturaCilindro)</code>: <code>π·radio²·altura</code>.</li><li>En <code>main</code>: pide con <code>pedirMedida</code> <code>Introduzca el radio del cono:</code>, <code>Introduzca la altura del cono:</code> y <code>Introduzca la altura del cilindro:</code> (si no es mayor que la del cono, muestra <code>La altura del cilindro debe ser mayor que la del cono</code> y vuelve a pedirla). Usa <code>Math.PI</code> y <code>Math.pow</code> para el cuadrado.</li></ol>Salida final con dos decimales:<pre>El volumen del cono es XXX\nEl volumen del cilindro es YYY\nEl volumen del silo es XXX + YYY = ZZZ</pre>',
        starter:
          'import java.util.Scanner;\n\npublic class Silo {\n    static Scanner teclado = new Scanner(System.in);\n\n    public static void main(String[] args) {\n\n    }\n}\n',
        rules: [
          {
            re: /static\s+double\s+pedirMedida\s*\(\s*String\s+mensaje\s*\)/,
            msg: 'Método pedirMedida(String mensaje) que devuelve double'
          },
          {
            re: /static\s+double\s+calcularVolumenCono\s*\(\s*double\s+radioCono\s*,\s*double\s+alturaCono\s*\)/,
            msg: 'Método calcularVolumenCono(double radioCono, double alturaCono)'
          },
          {
            re: /static\s+double\s+calcularVolumenCilindro\s*\(\s*double\s+radioCilindro\s*,\s*double\s+alturaCilindro\s*\)/,
            msg: 'Método calcularVolumenCilindro(double radioCilindro, double alturaCilindro)'
          },
          {
            re: /Math\.PI/,
            msg: 'Usa Math.PI'
          },
          {
            re: /Math\.pow/,
            msg: 'Usa Math.pow para el cuadrado'
          }
        ],
        solution:
          'import java.util.Scanner;\n\npublic class Silo {\n    static Scanner teclado = new Scanner(System.in);\n\n    static double pedirMedida(String mensaje) {\n        System.out.println(mensaje);\n        return teclado.nextDouble();\n    }\n\n    static double calcularVolumenCono(double radioCono, double alturaCono) {\n        return Math.PI * Math.pow(radioCono, 2) * alturaCono / 3;\n    }\n\n    static double calcularVolumenCilindro(double radioCilindro, double alturaCilindro) {\n        return Math.PI * Math.pow(radioCilindro, 2) * alturaCilindro;\n    }\n\n    public static void main(String[] args) {\n        double radio = pedirMedida("Introduzca el radio del cono:");\n        double alturaCono = pedirMedida("Introduzca la altura del cono:");\n        double alturaCilindro = pedirMedida("Introduzca la altura del cilindro:");\n        while (alturaCilindro <= alturaCono) {\n            System.out.println("La altura del cilindro debe ser mayor que la del cono");\n            alturaCilindro = pedirMedida("Introduzca la altura del cilindro:");\n        }\n        double volumenCono = calcularVolumenCono(radio, alturaCono);\n        double volumenCilindro = calcularVolumenCilindro(radio, alturaCilindro);\n        System.out.printf("El volumen del cono es %.2f%n", volumenCono);\n        System.out.printf("El volumen del cilindro es %.2f%n", volumenCilindro);\n        System.out.printf("El volumen del silo es %.2f + %.2f = %.2f%n", volumenCono, volumenCilindro, volumenCono + volumenCilindro);\n    }\n}\n',
        notes:
          '<p>Cada método hace <b>una sola cosa</b>: <code>pedirMedida</code> reutiliza el mismo código de lectura tres veces; los otros dos aplican las fórmulas. En <code>main</code> el radio se pide <b>una sola vez</b> y se usa para el cono y el cilindro (así son iguales). La altura del cilindro se vuelve a pedir con un <code>while</code> mientras no sea estrictamente mayor. <code>printf("%.2f")</code> muestra dos decimales (con coma en español).</p>',
        s: 'prof',
        tests: [
          {
            input: '2\n3\n5',
            out: 'Introduzca el radio del cono:\nIntroduzca la altura del cono:\nIntroduzca la altura del cilindro:\nEl volumen del cono es 12,57\nEl volumen del cilindro es 62,83\nEl volumen del silo es 12,57 + 62,83 = 75,40'
          },
          {
            input: '1\n4\n3\n6',
            out: 'Introduzca el radio del cono:\nIntroduzca la altura del cono:\nIntroduzca la altura del cilindro:\nLa altura del cilindro debe ser mayor que la del cono\nIntroduzca la altura del cilindro:\nEl volumen del cono es 4,19\nEl volumen del cilindro es 18,85\nEl volumen del silo es 4,19 + 18,85 = 23,04'
          },
          {
            input: '1.5\n2\n2\n4.5',
            out: 'Introduzca el radio del cono:\nIntroduzca la altura del cono:\nIntroduzca la altura del cilindro:\nLa altura del cilindro debe ser mayor que la del cono\nIntroduzca la altura del cilindro:\nEl volumen del cono es 4,71\nEl volumen del cilindro es 31,81\nEl volumen del silo es 4,71 + 31,81 = 36,52'
          }
        ],
        stdin: '2\n3\n5',
        kind: 'code'
      }
    ]
  }
];
if (false && typeof module !== 'undefined')
  module.exports = {
    CODEX: [].concat.apply(
      [],
      PROF2.map(function (c) {
        return c.items.filter(function (i) {
          return i.kind === 'code';
        });
      })
    )
  };

var PROFX = PROF2;
