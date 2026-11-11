/* ============================================================
   Ejercicios de código del Tema 2 (los del curso)
   Cada ejercicio: título, enunciado (task), código inicial (starter), solución, pruebas (tests) y pistas (hints).
   ============================================================ */
var CODEX = [
  {
    id: 'c1',
    s: 'secuencial',
    title: 'Suma de dos números',
    concept:
      'Un programa <b>secuencial</b> hace las instrucciones una detrás de otra. Con <code>Scanner</code> se lee lo que escribe el usuario.',
    task: 'Lee dos números enteros con <code>nextInt()</code> y escribe su suma con <code>println</code>.',
    stdin: '4\n9',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        // lee a y b, y escribe la suma\n\n    }\n}\n',
    tests: [
      { input: '4\n9', out: '13' },
      { input: '-3\n10', out: '7' }
    ],
    hints: [
      'Declara <code>int a = teclado.nextInt();</code> y lo mismo para b.',
      'Escribe <code>System.out.println(a + b);</code>'
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        System.out.println(a + b);\n    }\n}\n'
  },
  {
    id: 'c2',
    s: 'selectiva',
    title: '¿Mayor de edad?',
    concept: '<code>if / else</code> elige entre dos caminos según una condición booleana.',
    task: 'Lee una edad (int). Si es 18 o más escribe <code>Mayor de edad</code>; si no, <code>Menor de edad</code>.',
    stdin: '20',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int edad = teclado.nextInt();\n\n    }\n}\n',
    tests: [
      { input: '20', out: 'Mayor de edad' },
      { input: '18', out: 'Mayor de edad' },
      { input: '17', out: 'Menor de edad' }
    ],
    hints: ['La condición es <code>edad >= 18</code>.', 'if (...) { println } else { println }'],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int edad = teclado.nextInt();\n        if (edad >= 18) {\n            System.out.println("Mayor de edad");\n        } else {\n            System.out.println("Menor de edad");\n        }\n    }\n}\n'
  },
  {
    id: 'c3',
    s: 'selectiva',
    title: 'Positivo, negativo o cero',
    concept:
      'Para más de dos caminos se encadena <code>else if</code>. El orden importa: se ejecuta el primero que sea verdadero.',
    task: 'Lee un entero y escribe <code>positivo</code>, <code>negativo</code> o <code>cero</code>.',
    stdin: '-5',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n\n    }\n}\n',
    tests: [
      { input: '5', out: 'positivo' },
      { input: '-2', out: 'negativo' },
      { input: '0', out: 'cero' }
    ],
    hints: [
      'Primero <code>if (n > 0)</code>, luego <code>else if (n < 0)</code>, y el resto es <code>else</code>.'
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        if (n > 0) {\n            System.out.println("positivo");\n        } else if (n < 0) {\n            System.out.println("negativo");\n        } else {\n            System.out.println("cero");\n        }\n    }\n}\n'
  },
  {
    id: 'c4',
    s: 'selectiva',
    title: 'La nota con letras (como en los apuntes)',
    concept:
      'Como en los apuntes: primero se comprueba el caso de error y después se ordena de menor a mayor. Cada <code>else if</code> no necesita repetir la cota de abajo, porque si llegas ahí es que las anteriores fueron falsas.',
    task: 'Lee una nota (int). Si no está entre 0 y 10, escribe <code>Nota incorrecta</code>. Si no: menos de 5 → <code>Insuficiente</code>; 5 → <code>Suficiente</code>; 6 → <code>Bien</code>; 7 u 8 → <code>Notable</code>; 9 o 10 → <code>Sobresaliente</code>.',
    stdin: '6',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int nota = teclado.nextInt();\n\n    }\n}\n',
    tests: [
      { input: '10', out: 'Sobresaliente' },
      { input: '9', out: 'Sobresaliente' },
      { input: '8', out: 'Notable' },
      { input: '7', out: 'Notable' },
      { input: '6', out: 'Bien' },
      { input: '5', out: 'Suficiente' },
      { input: '4', out: 'Insuficiente' },
      { input: '0', out: 'Insuficiente' },
      { input: '11', out: 'Nota incorrecta' },
      { input: '-2', out: 'Nota incorrecta' }
    ],
    hints: [
      'Primero el error: <code>if (nota < 0 || nota > 10)</code>. Después <code>nota < 5</code>, <code>nota < 6</code>, <code>nota < 7</code>, <code>nota < 9</code> y por último un <code>else</code>.'
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int nota = teclado.nextInt();\n        if (nota < 0 || nota > 10) {\n            System.out.println("Nota incorrecta");\n        } else if (nota < 5) {\n            System.out.println("Insuficiente");\n        } else if (nota < 6) {\n            System.out.println("Suficiente");\n        } else if (nota < 7) {\n            System.out.println("Bien");\n        } else if (nota < 9) {\n            System.out.println("Notable");\n        } else {\n            System.out.println("Sobresaliente");\n        }\n    }\n}\n'
  },
  {
    id: 'c5',
    s: 'selectiva',
    title: 'Día de la semana con switch',
    concept:
      '<code>switch</code> compara una variable con varios valores. No olvides <code>break</code> o se ejecutan también los casos siguientes.',
    task: 'Lee un número del 1 al 7 y escribe <code>Lunes</code>…<code>Domingo</code>. Para cualquier otro número, <code>Día no válido</code>. Usa <code>switch</code>.',
    stdin: '3',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int dia = teclado.nextInt();\n\n    }\n}\n',
    rules: [{ re: /\bswitch\s*\(/, msg: 'Usa la instrucción switch' }],
    tests: [
      { input: '1', out: 'Lunes' },
      { input: '3', out: 'Miércoles' },
      { input: '7', out: 'Domingo' },
      { input: '9', out: 'Día no válido' }
    ],
    hints: [
      'switch (dia) { case 1: ...; break; ... default: ... }',
      'Los días: Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo.'
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int dia = teclado.nextInt();\n        switch (dia) {\n            case 1:\n                System.out.println("Lunes");\n                break;\n            case 2:\n                System.out.println("Martes");\n                break;\n            case 3:\n                System.out.println("Miércoles");\n                break;\n            case 4:\n                System.out.println("Jueves");\n                break;\n            case 5:\n                System.out.println("Viernes");\n                break;\n            case 6:\n                System.out.println("Sábado");\n                break;\n            case 7:\n                System.out.println("Domingo");\n                break;\n            default:\n                System.out.println("Día no válido");\n        }\n    }\n}\n'
  },
  {
    id: 'c6',
    s: 'selectiva',
    title: 'Operador ternario',
    concept: '<code>condicion ? valorSiCierta : valorSiFalsa</code> es un if/else dentro de una expresión.',
    task: 'Lee un entero y escribe <code>par</code> o <code>impar</code> usando el operador ternario <code>? :</code>.',
    stdin: '8',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n\n    }\n}\n',
    rules: [{ re: /\?[^:]*:/, msg: 'Usa el operador ternario ? :' }],
    tests: [
      { input: '8', out: 'par' },
      { input: '7', out: 'impar' },
      { input: '0', out: 'par' }
    ],
    hints: [
      'Un número es par si <code>n % 2 == 0</code>.',
      '<code>String r = (n % 2 == 0) ? "par" : "impar";</code>'
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        String r = (n % 2 == 0) ? "par" : "impar";\n        System.out.println(r);\n    }\n}\n'
  },
  {
    id: 'c7',
    s: 'bucles',
    title: 'Contar con while',
    concept:
      '<code>while</code> repite mientras la condición sea cierta. Si la variable de la condición nunca cambia, el bucle no acaba.',
    task: 'Escribe los números del 1 al 5, cada uno en su línea, usando un <code>while</code>.',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        int i = 1;\n\n    }\n}\n',
    rules: [{ re: /\bwhile\s*\(/, msg: 'Usa un bucle while' }],
    tests: [{ out: '1\n2\n3\n4\n5' }],
    hints: ['while (i <= 5) { println(i); i++; }', 'No te olvides de <code>i++</code>.'],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        int i = 1;\n        while (i <= 5) {\n            System.out.println(i);\n            i++;\n        }\n    }\n}\n'
  },
  {
    id: 'c8',
    s: 'bucles',
    title: 'Cuenta atrás con for',
    concept: '<code>for (inicio; condición; paso)</code> junta las tres partes del bucle en una línea.',
    task: 'Escribe de 5 a 1 (cada uno en su línea) y después <code>¡Despegue!</code>. Usa <code>for</code>.',
    starter: 'public class Main {\n    public static void main(String[] args) {\n\n    }\n}\n',
    rules: [{ re: /\bfor\s*\(/, msg: 'Usa un bucle for' }],
    tests: [{ out: '5\n4\n3\n2\n1\n¡Despegue!' }],
    hints: ['for (int i = 5; i >= 1; i--) { ... }'],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        for (int i = 5; i >= 1; i--) {\n            System.out.println(i);\n        }\n        System.out.println("¡Despegue!");\n    }\n}\n'
  },
  {
    id: 'c9',
    s: 'bucles',
    title: 'Tabla de multiplicar',
    concept:
      'Un bucle <code>for</code> con una variable que cambia en cada vuelta sirve para generar tablas.',
    task: 'Lee un número n y escribe su tabla del 1 al 10 con el formato <code>n x i = resultado</code>. Ejemplo con 3: <code>3 x 1 = 3</code>.',
    stdin: '3',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n\n    }\n}\n',
    tests: [
      {
        input: '3',
        out: '3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30'
      },
      {
        input: '7',
        out: '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70'
      }
    ],
    hints: ['Dentro del for: <code>System.out.println(n + " x " + i + " = " + (n * i));</code>'],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(n + " x " + i + " = " + (n * i));\n        }\n    }\n}\n'
  },
  {
    id: 'c10',
    s: 'bucles',
    title: 'Acumulador: suma del 1 al n',
    concept: 'Un <b>acumulador</b> es una variable que empieza en 0 y va sumando valores en cada vuelta.',
    task: 'Lee n y escribe la suma 1 + 2 + … + n.',
    stdin: '10',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        int suma = 0;\n\n        System.out.println(suma);\n    }\n}\n',
    tests: [
      { input: '10', out: '55' },
      { input: '1', out: '1' },
      { input: '100', out: '5050' }
    ],
    hints: ['for (int i = 1; i <= n; i++) { suma = suma + i; }'],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        int suma = 0;\n        for (int i = 1; i <= n; i++) {\n            suma += i;\n        }\n        System.out.println(suma);\n    }\n}\n'
  },
  {
    id: 'c11',
    s: 'bucles',
    title: 'Valida la nota con do-while',
    concept:
      '<code>do-while</code> ejecuta el cuerpo <b>al menos una vez</b> y comprueba la condición al final: ideal para pedir un dato hasta que sea válido.',
    task: 'Pide una nota con <code>nextInt()</code> y repite mientras no esté entre 0 y 10. Cuando sea válida, escribe <code>Nota: </code> seguido del valor.',
    stdin: '15\n-2\n8',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int nota;\n\n    }\n}\n',
    rules: [{ re: /\bdo\s*\{/, msg: 'Usa un bucle do-while' }],
    tests: [
      { input: '15\n-2\n8', out: 'Nota: 8' },
      { input: '5', out: 'Nota: 5' }
    ],
    hints: ['do { nota = teclado.nextInt(); } while (nota < 0 || nota > 10);'],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int nota;\n        do {\n            nota = teclado.nextInt();\n        } while (nota < 0 || nota > 10);\n        System.out.println("Nota: " + nota);\n    }\n}\n'
  },
  {
    id: 'c12',
    s: 'bucles',
    title: 'Centinela: suma hasta 0',
    concept: 'Un <b>valor centinela</b> es un valor especial que significa «ya no hay más datos».',
    task: 'Lee números enteros y súmalos hasta que el usuario escriba 0. Escribe el total (el 0 no suma).',
    stdin: '5\n3\n10\n0',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int total = 0;\n        int n = teclado.nextInt();\n\n        System.out.println(total);\n    }\n}\n',
    tests: [
      { input: '5\n3\n10\n0', out: '18' },
      { input: '0', out: '0' },
      { input: '-4\n4\n7\n0', out: '7' }
    ],
    hints: ['while (n != 0) { total += n; n = teclado.nextInt(); }'],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int total = 0;\n        int n = teclado.nextInt();\n        while (n != 0) {\n            total += n;\n            n = teclado.nextInt();\n        }\n        System.out.println(total);\n    }\n}\n'
  },
  {
    id: 'c13',
    s: 'saltos',
    title: 'break: primer múltiplo',
    concept: '<code>break</code> sale del bucle inmediatamente.',
    task: 'Recorre i desde 1 hasta 100 y escribe el primer número que sea múltiplo de 7 y de 5 a la vez. Después sal del bucle con <code>break</code>.',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 100; i++) {\n\n        }\n    }\n}\n',
    rules: [{ re: /\bbreak\s*;/, msg: 'Usa break' }],
    tests: [{ out: '35' }],
    hints: ['if (i % 7 == 0 && i % 5 == 0) { println(i); break; }'],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 100; i++) {\n            if (i % 7 == 0 && i % 5 == 0) {\n                System.out.println(i);\n                break;\n            }\n        }\n    }\n}\n'
  },
  {
    id: 'c14',
    s: 'saltos',
    title: 'continue: solo impares',
    concept: '<code>continue</code> se salta el resto de la vuelta actual y pasa a la siguiente.',
    task: 'Escribe los números impares del 1 al 9, cada uno en su línea, usando <code>continue</code> para saltar los pares.',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 9; i++) {\n\n        }\n    }\n}\n',
    rules: [{ re: /\bcontinue\s*;/, msg: 'Usa continue' }],
    tests: [{ out: '1\n3\n5\n7\n9' }],
    hints: ['if (i % 2 == 0) { continue; }  y luego el println.'],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 9; i++) {\n            if (i % 2 == 0) {\n                continue;\n            }\n            System.out.println(i);\n        }\n    }\n}\n'
  },
  {
    id: 'c15',
    s: 'excepciones',
    title: 'try / catch: división',
    concept:
      'Si dentro de <code>try</code> ocurre un error, Java salta al <code>catch</code> en vez de romper el programa. <code>finally</code> se ejecuta siempre.',
    task: 'Lee dos enteros a y b. Dentro de un <code>try</code> escribe a / b. Si b es 0, captura <code>ArithmeticException</code> y escribe <code>No se puede dividir entre cero</code>. En <code>finally</code> escribe <code>Fin</code>.',
    stdin: '10\n0',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n\n    }\n}\n',
    rules: [
      { re: /\btry\s*\{/, msg: 'Usa try' },
      { re: /\bcatch\s*\(\s*ArithmeticException/, msg: 'Captura ArithmeticException' },
      { re: /\bfinally\s*\{/, msg: 'Usa finally' }
    ],
    tests: [
      { input: '10\n2', out: '5\nFin' },
      { input: '10\n0', out: 'No se puede dividir entre cero\nFin' }
    ],
    hints: ['try { println(a / b); } catch (ArithmeticException e) { ... } finally { ... }'],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        try {\n            System.out.println(a / b);\n        } catch (ArithmeticException e) {\n            System.out.println("No se puede dividir entre cero");\n        } finally {\n            System.out.println("Fin");\n        }\n    }\n}\n'
  },
  {
    id: 'c16',
    s: 'excepciones',
    title: 'Número válido o no (InputMismatchException)',
    concept:
      'Si pides un número con <code>nextInt()</code> y el usuario escribe letras, salta <code>InputMismatchException</code>.',
    task: 'Intenta leer un entero con <code>nextInt()</code> y escribe <code>Has escrito: </code> y el número. Si salta <code>InputMismatchException</code>, escribe <code>Eso no es un número</code>.',
    stdin: 'hola',
    starter:
      'import java.util.Scanner;\nimport java.util.InputMismatchException;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n\n    }\n}\n',
    rules: [{ re: /\bcatch\s*\(\s*InputMismatchException/, msg: 'Captura InputMismatchException' }],
    tests: [
      { input: '42', out: 'Has escrito: 42' },
      { input: 'hola', out: 'Eso no es un número' }
    ],
    hints: [
      'try { int n = teclado.nextInt(); println("Has escrito: " + n); } catch (InputMismatchException e) { ... }'
    ],
    solution:
      'import java.util.Scanner;\nimport java.util.InputMismatchException;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        try {\n            int n = teclado.nextInt();\n            System.out.println("Has escrito: " + n);\n        } catch (InputMismatchException e) {\n            System.out.println("Eso no es un número");\n        }\n    }\n}\n'
  },
  {
    id: 'c17',
    s: 'excepciones',
    title: 'Lanzar tu propia excepción',
    concept: 'Con <code>throw new ...</code> tú decides lanzar un error cuando algo no cumple las reglas.',
    task: 'Lee una edad. Si es negativa, lanza <code>new IllegalArgumentException("Edad negativa")</code>. Captúrala con un <code>catch</code> y escribe su mensaje con <code>e.getMessage()</code>. Si es correcta, escribe <code>Edad válida</code>.',
    stdin: '-3',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int edad = teclado.nextInt();\n\n    }\n}\n',
    rules: [{ re: /\bthrow\s+new\b/, msg: 'Usa throw new ...' }],
    tests: [
      { input: '-3', out: 'Edad negativa' },
      { input: '20', out: 'Edad válida' }
    ],
    hints: [
      'try { if (edad < 0) { throw new IllegalArgumentException("Edad negativa"); } println("Edad válida"); } catch (IllegalArgumentException e) { println(e.getMessage()); }'
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int edad = teclado.nextInt();\n        try {\n            if (edad < 0) {\n                throw new IllegalArgumentException("Edad negativa");\n            }\n            System.out.println("Edad válida");\n        } catch (IllegalArgumentException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}\n'
  },
  {
    id: 'c18',
    s: 'pruebas',
    title: 'Aserciones con assert',
    concept:
      '<code>assert condicion;</code> comprueba algo que debe ser verdad. Solo funciona si se ejecuta con <code>-ea</code> (aquí ya está activado).',
    task: 'Completa el método <code>doble</code> para que devuelva el doble de n. Las dos aserciones del main deben cumplirse. Después de ellas, el programa escribe <code>Todo OK</code>.',
    starter:
      'public class Main {\n    static int doble(int n) {\n        return 0; // arréglalo\n    }\n\n    public static void main(String[] args) {\n        assert doble(4) == 8 : "doble(4) debe ser 8";\n        assert doble(-3) == -6 : "doble(-3) debe ser -6";\n        System.out.println("Todo OK");\n    }\n}\n',
    tests: [{ out: 'Todo OK', ea: true }],
    hints: ['El doble es <code>n * 2</code>.'],
    solution:
      'public class Main {\n    static int doble(int n) {\n        return n * 2;\n    }\n\n    public static void main(String[] args) {\n        assert doble(4) == 8 : "doble(4) debe ser 8";\n        assert doble(-3) == -6 : "doble(-3) debe ser -6";\n        System.out.println("Todo OK");\n    }\n}\n'
  },
  {
    id: 'c19',
    s: 'depuracion',
    title: 'Arregla los dos errores de la media',
    concept:
      'Depurar es encontrar por qué un programa no hace lo esperado. Pista: mira los tipos y las comprobaciones.',
    task: 'Este programa debería escribir la media de 5 y 6, que es <code>5.5</code>, pero escribe otra cosa. Encuentra y arregla el error.',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 6;\n        double media = (a + b) / 2;\n        System.out.println(media);\n    }\n}\n',
    tests: [{ out: '5.5' }],
    hints: [
      '<code>(a + b) / 2</code> es una división entre enteros: da 5.',
      'Divide entre <code>2.0</code> o haz un casting <code>(double)</code>.'
    ],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 6;\n        double media = (a + b) / 2.0;\n        System.out.println(media);\n    }\n}\n'
  },
  {
    id: 'c20',
    s: 'integrador',
    title: 'Adivina el número (versión sencilla)',
    concept: 'Junta todo: bucle, if/else, Scanner y control de errores.',
    task: 'El número secreto es 7. Lee intentos con <code>nextInt()</code> hasta acertar. Si es menor escribe <code>Mayor</code>, si es mayor escribe <code>Menor</code>. Al acertar escribe <code>¡Acertaste en N intentos!</code> con el número de intentos.',
    stdin: '3\n10\n7',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int secreto = 7;\n        int intentos = 0;\n        int n;\n\n    }\n}\n',
    tests: [
      { input: '3\n10\n7', out: 'Mayor\nMenor\n¡Acertaste en 3 intentos!' },
      { input: '7', out: '¡Acertaste en 1 intentos!' }
    ],
    hints: [
      'do { n = teclado.nextInt(); intentos++; if (n < secreto) {...} else if (n > secreto) {...} } while (n != secreto);'
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int secreto = 7;\n        int intentos = 0;\n        int n;\n        do {\n            n = teclado.nextInt();\n            intentos++;\n            if (n < secreto) {\n                System.out.println("Mayor");\n            } else if (n > secreto) {\n                System.out.println("Menor");\n            }\n        } while (n != secreto);\n        System.out.println("¡Acertaste en " + intentos + " intentos!");\n    }\n}\n'
  }
];
var CODEEXAM = [
  {
    id: 'x1',
    s: 'selectiva',
    title: '',
    task: 'Lee un entero y escribe <code>divisible</code> si es múltiplo de 3 y de 4 a la vez; si no, <code>no divisible</code>.',
    stdin: '12',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n\n    }\n}\n',
    tests: [
      { input: '12', out: 'divisible' },
      { input: '6', out: 'no divisible' },
      { input: '24', out: 'divisible' },
      { input: '8', out: 'no divisible' }
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        if (n % 3 == 0 && n % 4 == 0) {\n            System.out.println("divisible");\n        } else {\n            System.out.println("no divisible");\n        }\n    }\n}\n'
  },
  {
    id: 'x2',
    s: 'bucles',
    title: '',
    task: 'Lee n y escribe los n primeros números pares (2, 4, 6…), cada uno en una línea.',
    stdin: '4',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n\n    }\n}\n',
    tests: [
      { input: '4', out: '2\n4\n6\n8' },
      { input: '1', out: '2' },
      { input: '0', out: '' }
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        for (int i = 1; i <= n; i++) {\n            System.out.println(i * 2);\n        }\n    }\n}\n'
  },
  {
    id: 'x3',
    s: 'bucles',
    title: '',
    task: 'Lee números hasta que se escriba -1 (centinela). Escribe cuántos números positivos se han introducido (sin contar el -1).',
    stdin: '4\n-3\n8\n-1',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n\n    }\n}\n',
    tests: [
      { input: '4\n-3\n8\n-1', out: '2' },
      { input: '-1', out: '0' },
      { input: '1\n2\n3\n-1', out: '3' }
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int cuenta = 0;\n        int n = teclado.nextInt();\n        while (n != -1) {\n            if (n > 0) {\n                cuenta++;\n            }\n            n = teclado.nextInt();\n        }\n        System.out.println(cuenta);\n    }\n}\n'
  },
  {
    id: 'x4',
    s: 'saltos',
    title: '',
    task: 'Escribe los números del 1 al 20 que NO sean múltiplos de 3, uno por línea, y detente (break) cuando llegues a un número mayor que 10.',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 20; i++) {\n\n        }\n    }\n}\n',
    tests: [{ out: '1\n2\n4\n5\n7\n8\n10' }],
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 20; i++) {\n            if (i > 10) {\n                break;\n            }\n            if (i % 3 == 0) {\n                continue;\n            }\n            System.out.println(i);\n        }\n    }\n}\n'
  },
  {
    id: 'x5',
    s: 'excepciones',
    title: '',
    task: 'Lee un entero con <code>nextInt()</code>. Si es válido escribe su cuadrado. Si salta <code>InputMismatchException</code> escribe <code>Dato incorrecto</code>. En <code>finally</code> escribe <code>Adiós</code>.',
    stdin: 'abc',
    starter:
      'import java.util.Scanner;\nimport java.util.InputMismatchException;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n\n    }\n}\n',
    tests: [
      { input: '5', out: '25\nAdiós' },
      { input: 'abc', out: 'Dato incorrecto\nAdiós' }
    ],
    solution:
      'import java.util.Scanner;\nimport java.util.InputMismatchException;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        try {\n            int n = teclado.nextInt();\n            System.out.println(n * n);\n        } catch (InputMismatchException e) {\n            System.out.println("Dato incorrecto");\n        } finally {\n            System.out.println("Adiós");\n        }\n    }\n}\n'
  },
  {
    id: 'x6',
    s: 'selectiva',
    title: '',
    task: 'Lee el número de un mes (1-12) y escribe los días que tiene (suponiendo año no bisiesto: febrero 28). Si el mes no es válido escribe <code>Mes no válido</code>. Usa switch.',
    stdin: '2',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n\n    }\n}\n',
    tests: [
      { input: '2', out: '28' },
      { input: '4', out: '30' },
      { input: '12', out: '31' },
      { input: '13', out: 'Mes no válido' }
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int mes = teclado.nextInt();\n        switch (mes) {\n            case 1: case 3: case 5: case 7: case 8: case 10: case 12:\n                System.out.println(31);\n                break;\n            case 4: case 6: case 9: case 11:\n                System.out.println(30);\n                break;\n            case 2:\n                System.out.println(28);\n                break;\n            default:\n                System.out.println("Mes no válido");\n        }\n    }\n}\n'
  },
  {
    id: 'x7',
    s: 'bucles',
    title: '',
    task: 'Lee n y escribe su factorial (n! = 1·2·…·n). Usa <code>long</code>. El factorial de 0 es 1.',
    stdin: '5',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n\n    }\n}\n',
    tests: [
      { input: '5', out: '120' },
      { input: '0', out: '1' },
      { input: '10', out: '3628800' }
    ],
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        long f = 1;\n        for (int i = 2; i <= n; i++) {\n            f *= i;\n        }\n        System.out.println(f);\n    }\n}\n'
  },
  {
    id: 'x8',
    s: 'pruebas',
    title: '',
    task: 'Completa el método <code>esPar</code> (devuelve boolean) para que las aserciones pasen. El programa debe escribir <code>Todo OK</code>.',
    starter:
      'public class Main {\n    static boolean esPar(int n) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        assert esPar(4) : "4 es par";\n        assert !esPar(7) : "7 no es par";\n        assert esPar(0) : "0 es par";\n        System.out.println("Todo OK");\n    }\n}\n',
    tests: [{ out: 'Todo OK', ea: true }],
    solution:
      'public class Main {\n    static boolean esPar(int n) {\n        return n % 2 == 0;\n    }\n\n    public static void main(String[] args) {\n        assert esPar(4) : "4 es par";\n        assert !esPar(7) : "7 no es par";\n        assert esPar(0) : "0 es par";\n        System.out.println("Todo OK");\n    }\n}\n'
  }
];
CODEX.push({
  id: 'final2',
  s: 'final',
  title: 'Reto final: FizzBuzz con validación',
  concept:
    'Último ejercicio del Tema 2. Es como una pregunta de examen: combina lo que has visto: <b>bucle do-while</b> para validar, <b>bucle for</b>, <b>if / else if / else</b>, <b>continue</b> y <b>try / catch</b>.',
  task: '<b>1.</b> Lee un entero <code>n</code>. Si no está entre 1 y 20, escribe <code>Número no válido</code> y vuelve a leer, hasta que sea correcto (do-while).<br><b>2.</b> Recorre con un <code>for</code> los números del 1 al <code>n</code> y escribe cada uno en su línea: <code>FizzBuzz</code> si es múltiplo de 3 y de 5, <code>Fizz</code> si lo es de 3, <code>Buzz</code> si lo es de 5, y el propio número en otro caso.<br><b>3.</b> Mientras recorres, suma los múltiplos de 3 (<code>suma3</code>) y cuéntalos (<code>cuenta3</code>).<br><b>4.</b> Al terminar escribe <code>Media de múltiplos de 3: X</code> con <code>suma3 / cuenta3</code> (división entera). Si no hay ninguno (n &lt; 3) esa división lanza <code>ArithmeticException</code>: captúrala con try/catch y escribe <code>No hay múltiplos de 3</code>.',
  stdin: '6',
  starter:
    'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        // Reto final: escribe aquí tu programa\n\n    }\n}\n',
  rules: [
    { re: /\bdo\s*\{/, msg: 'Usa un bucle do-while para validar' },
    { re: /\bfor\s*\(/, msg: 'Usa un bucle for' },
    { re: /\belse\s+if\b/, msg: 'Usa if / else if / else' },
    { re: /\btry\s*\{/, msg: 'Usa try' },
    { re: /\bcatch\s*\(\s*ArithmeticException/, msg: 'Captura ArithmeticException' }
  ],
  tests: [
    { input: '6', out: '1\n2\nFizz\n4\nBuzz\nFizz\nMedia de múltiplos de 3: 4' },
    { input: '2', out: '1\n2\nNo hay múltiplos de 3' },
    { input: '0\n25\n3', out: 'Número no válido\nNúmero no válido\n1\n2\nFizz\nMedia de múltiplos de 3: 3' },
    {
      input: '15',
      out: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\nMedia de múltiplos de 3: 9'
    }
  ],
  hints: [],
  solution:
    'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n;\n        do {\n            n = teclado.nextInt();\n            if (n < 1 || n > 20) {\n                System.out.println("Número no válido");\n            }\n        } while (n < 1 || n > 20);\n        int suma3 = 0;\n        int cuenta3 = 0;\n        for (int i = 1; i <= n; i++) {\n            if (i % 3 == 0) {\n                suma3 += i;\n                cuenta3++;\n            }\n            if (i % 15 == 0) {\n                System.out.println("FizzBuzz");\n            } else if (i % 3 == 0) {\n                System.out.println("Fizz");\n            } else if (i % 5 == 0) {\n                System.out.println("Buzz");\n            } else {\n                System.out.println(i);\n            }\n        }\n        try {\n            System.out.println("Media de múltiplos de 3: " + suma3 / cuenta3);\n        } catch (ArithmeticException e) {\n            System.out.println("No hay múltiplos de 3");\n        }\n    }\n}\n'
});
if (false && typeof module !== 'undefined') module.exports = { CODEX: CODEX, CODEEXAM: CODEEXAM };
