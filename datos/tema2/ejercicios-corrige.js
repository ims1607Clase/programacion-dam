/* ============================================================
   Ejercicios "Corrige el código" del Tema 2
   Uno por apartado: el código inicial tiene un fallo que hay que arreglar.
   ============================================================ */
/* generado por dam/gen/fix.js */
var FIX2 = [
  {
    id: 'fx-secuencial',
    s: 'secuencial',
    title: '🔧 Corrige: Perímetro del rectángulo',
    concept: 'En una fórmula, cada operación se aplica solo a lo que tiene al lado. Los paréntesis agrupan.',
    task: '<b>Este código tiene un fallo.</b> Lee la base y la altura de un rectángulo y muestra el perímetro. Con 3 y 4 debe mostrar <code>14</code>. Pulsa <b>Ejecutar</b>, mira qué sale, encuentra el error y corrígelo. No lo reescribas entero: arregla solo lo que falla.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int base = teclado.nextInt();\n        int altura = teclado.nextInt();\n        int perimetro = 2 * base + altura;\n        System.out.println(perimetro);\n    }\n}\n',
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int base = teclado.nextInt();\n        int altura = teclado.nextInt();\n        int perimetro = 2 * (base + altura);\n        System.out.println(perimetro);\n    }\n}\n',
    hints: [
      'Calcula a mano el perímetro de un rectángulo de 3 por 4 y compáralo con lo que sale.',
      'El 2 debería multiplicar a los <b>dos</b> lados.',
      'Usa paréntesis para sumar base y altura antes de multiplicar.'
    ],
    notes:
      '<p><code>2 * base + altura</code> duplica solo la base. El perímetro es <code>2 * (base + altura)</code>.</p>',
    kind: 'code',
    tests: [
      { input: '3\n4', out: '14' },
      { input: '10\n1', out: '22' },
      { input: '5\n5', out: '20' }
    ],
    stdin: '3\n4'
  },
  {
    id: 'fx-selectiva',
    s: 'selectiva',
    title: '🔧 Corrige: Nota con letras',
    concept:
      'En una cadena de <code>else if</code> gana la <b>primera</b> condición que se cumple: el orden importa.',
    task: '<b>Este código tiene un fallo.</b> Lee una nota y muestra <code>Sobresaliente</code> (9 o más), <code>Notable</code> (7 o más), <code>Aprobado</code> (5 o más) o <code>Suspenso</code>. Con 9 muestra <code>Aprobado</code>. Pulsa <b>Ejecutar</b>, mira qué sale, encuentra el error y corrígelo. No lo reescribas entero: arregla solo lo que falla.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int nota = teclado.nextInt();\n        if (nota >= 5) {\n            System.out.println("Aprobado");\n        } else if (nota >= 7) {\n            System.out.println("Notable");\n        } else if (nota >= 9) {\n            System.out.println("Sobresaliente");\n        } else {\n            System.out.println("Suspenso");\n        }\n    }\n}\n',
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int nota = teclado.nextInt();\n        if (nota >= 9) {\n            System.out.println("Sobresaliente");\n        } else if (nota >= 7) {\n            System.out.println("Notable");\n        } else if (nota >= 5) {\n            System.out.println("Aprobado");\n        } else {\n            System.out.println("Suspenso");\n        }\n    }\n}\n',
    hints: [
      'Prueba con un 9: ¿qué condición es la primera que se cumple?',
      'Todas las notas altas cumplen también <code>nota &gt;= 5</code>.',
      'Empieza por la condición más exigente y baja de ahí.'
    ],
    notes:
      '<p>Un 9 cumple <code>&gt;= 5</code>, y como esa es la primera, las demás ni se miran. Ordena de la más restrictiva a la menos.</p>',
    kind: 'code',
    tests: [
      { input: '9', out: 'Sobresaliente' },
      { input: '7', out: 'Notable' },
      { input: '5', out: 'Aprobado' },
      { input: '3', out: 'Suspenso' },
      { input: '10', out: 'Sobresaliente' }
    ],
    stdin: '9'
  },
  {
    id: 'fx-bucles',
    s: 'bucles',
    title: '🔧 Corrige: Suma hasta N',
    concept: '<code>i &lt; n</code> deja fuera a <code>n</code>; <code>i &lt;= n</code> lo incluye.',
    task: '<b>Este código tiene un fallo.</b> Lee N y muestra la suma de los números de 1 a N (los dos incluidos). Con 5 debe mostrar <code>15</code>. Pulsa <b>Ejecutar</b>, mira qué sale, encuentra el error y corrígelo. No lo reescribas entero: arregla solo lo que falla.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        int suma = 0;\n        for (int i = 1; i < n; i++) {\n            suma += i;\n        }\n        System.out.println(suma);\n    }\n}\n',
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        int suma = 0;\n        for (int i = 1; i <= n; i++) {\n            suma += i;\n        }\n        System.out.println(suma);\n    }\n}\n',
    hints: [
      'Haz la traza con N = 5: ¿qué valores toma <code>i</code>?',
      'El bucle se para un número antes de lo que debería.',
      'Revisa el operador de la condición del <code>for</code>.'
    ],
    notes:
      '<p>Es el clásico fallo «de uno»: con <code>i &lt; n</code> el último valor no se suma. Con <code>i &lt;= n</code> sí.</p>',
    kind: 'code',
    tests: [
      { input: '5', out: '15' },
      { input: '1', out: '1' },
      { input: '10', out: '55' },
      { input: '0', out: '0' }
    ],
    stdin: '5'
  },
  {
    id: 'fx-saltos',
    s: 'saltos',
    title: '🔧 Corrige: Saltarse el 5',
    concept:
      '<code>break</code> <b>termina</b> el bucle; <code>continue</code> salta solo a la siguiente vuelta.',
    task: '<b>Este código tiene un fallo.</b> Muestra los números del 1 al 10 (uno por línea) <b>saltándote el 5</b>. Ahora se para en el 4. Pulsa <b>Ejecutar</b>, mira qué sale, encuentra el error y corrígelo. No lo reescribas entero: arregla solo lo que falla.',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i++) {\n            if (i == 5) {\n                break;\n            }\n            System.out.println(i);\n        }\n    }\n}\n',
    solution:
      'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i++) {\n            if (i == 5) {\n                continue;\n            }\n            System.out.println(i);\n        }\n    }\n}\n',
    hints: [
      '¿Qué hace exactamente la instrucción que hay dentro del <code>if</code>?',
      'Esa instrucción corta el bucle entero, no solo esa vuelta.',
      'Necesitas la instrucción que salta solo a la siguiente vuelta.'
    ],
    notes:
      '<p><code>break</code> sale del bucle; <code>continue</code> se salta el resto de esa vuelta y sigue con la siguiente.</p>',
    kind: 'code',
    tests: [{ input: '', out: '1\n2\n3\n4\n6\n7\n8\n9\n10' }],
    stdin: ''
  },
  {
    id: 'fx-excepciones',
    s: 'excepciones',
    title: '🔧 Corrige: División entre cero',
    concept:
      'Un <code>catch</code> solo recoge el tipo de excepción que indica. Si el tipo no coincide, la excepción sigue su camino.',
    task: '<b>Este código tiene un fallo.</b> Lee dos enteros y muestra la división. Si el divisor es 0 debe mostrar <code>No se puede dividir entre cero</code>, pero ahora el programa se rompe. Pulsa <b>Ejecutar</b>, mira qué sale, encuentra el error y corrígelo. No lo reescribas entero: arregla solo lo que falla.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        try {\n            System.out.println(a / b);\n        } catch (NullPointerException e) {\n            System.out.println("No se puede dividir entre cero");\n        }\n    }\n}\n',
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int a = teclado.nextInt();\n        int b = teclado.nextInt();\n        try {\n            System.out.println(a / b);\n        } catch (ArithmeticException e) {\n            System.out.println("No se puede dividir entre cero");\n        }\n    }\n}\n',
    hints: [
      'Ejecuta con 7 y 0 y lee el nombre de la excepción que aparece en rojo.',
      'El <code>catch</code> espera una excepción distinta de la que se lanza.',
      'Cambia el tipo del <code>catch</code> por el de la excepción que viste.'
    ],
    notes:
      '<p>Dividir un entero entre 0 lanza <code>ArithmeticException</code>. El <code>catch</code> original esperaba otra, así que no la recogía.</p>',
    kind: 'code',
    tests: [
      { input: '10\n2', out: '5' },
      { input: '7\n0', out: 'No se puede dividir entre cero' },
      { input: '0\n5', out: '0' }
    ],
    stdin: '10\n2'
  },
  {
    id: 'fx-pruebas',
    s: 'pruebas',
    title: '🔧 Corrige: Año bisiesto',
    concept: 'Una buena prueba usa los casos límite: 2000, 1900, 2024, 2023…',
    task: '<b>Este código tiene un fallo.</b> Lee un año y muestra <code>Bisiesto</code> o <code>No bisiesto</code> (divisible entre 4, salvo los divisibles entre 100 que no lo sean entre 400). El 2024 sale mal. Pulsa <b>Ejecutar</b>, mira qué sale, encuentra el error y corrígelo. No lo reescribas entero: arregla solo lo que falla.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int anio = teclado.nextInt();\n        if (anio % 4 == 0 && (anio % 100 != 0 && anio % 400 == 0)) {\n            System.out.println("Bisiesto");\n        } else {\n            System.out.println("No bisiesto");\n        }\n    }\n}\n',
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int anio = teclado.nextInt();\n        if (anio % 4 == 0 && (anio % 100 != 0 || anio % 400 == 0)) {\n            System.out.println("Bisiesto");\n        } else {\n            System.out.println("No bisiesto");\n        }\n    }\n}\n',
    hints: [
      'Prueba los cuatro casos: 2024, 2000, 1900, 2023 y mira cuáles fallan.',
      'Los años como 2024 deberían cumplir una <b>de las dos</b> condiciones del paréntesis, no las dos.',
      'Cambia el operador que une las dos condiciones del paréntesis.'
    ],
    notes:
      '<p>Es bisiesto si no es divisible entre 100 <b>o</b> sí lo es entre 400. Con <code>&amp;&amp;</code> casi ningún año lo cumplía. Probar casos límite lo habría revelado.</p>',
    kind: 'code',
    tests: [
      { input: '2024', out: 'Bisiesto' },
      { input: '2000', out: 'Bisiesto' },
      { input: '1900', out: 'No bisiesto' },
      { input: '2023', out: 'No bisiesto' }
    ],
    stdin: '2024'
  },
  {
    id: 'fx-depuracion',
    s: 'depuracion',
    title: '🔧 Corrige: Factorial',
    concept: 'Un acumulador que se multiplica debe empezar en 1: el 0 anula todo producto.',
    task: '<b>Este código tiene un fallo.</b> Lee N y muestra N!. Con 5 debe mostrar <code>120</code>, pero muestra <code>0</code>. Pulsa <b>Ejecutar</b>, mira qué sale, encuentra el error y corrígelo. No lo reescribas entero: arregla solo lo que falla.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        int resultado = 0;\n        for (int i = 1; i <= n; i++) {\n            resultado *= i;\n        }\n        System.out.println(resultado);\n    }\n}\n',
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        int resultado = 1;\n        for (int i = 1; i <= n; i++) {\n            resultado *= i;\n        }\n        System.out.println(resultado);\n    }\n}\n',
    hints: [
      'Si pones un punto de parada y miras <code>resultado</code> en cada vuelta, ¿qué ves?',
      'Cualquier número multiplicado por 0 es 0.',
      'Cambia el valor inicial del acumulador.'
    ],
    notes:
      '<p>Los acumuladores de suma empiezan en 0; los de producto, en 1 (el elemento neutro de la multiplicación).</p>',
    kind: 'code',
    tests: [
      { input: '5', out: '120' },
      { input: '1', out: '1' },
      { input: '6', out: '720' }
    ],
    stdin: '5'
  },
  {
    id: 'fx-integrador',
    s: 'integrador',
    title: '🔧 Corrige: Contar números hasta el 0',
    concept: 'En un <code>do-while</code> el cuerpo se ejecuta siempre, también con el valor de parada.',
    task: '<b>Este código tiene un fallo.</b> Lee números hasta que se escriba 0 y muestra <code>Has escrito 3 números que suman 12</code> (sin contar el 0). Con 4, 6, 2, 0 dice 4 números. Pulsa <b>Ejecutar</b>, mira qué sale, encuentra el error y corrígelo. No lo reescribas entero: arregla solo lo que falla.',
    starter:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n;\n        int suma = 0;\n        int cuenta = 0;\n        do {\n            n = teclado.nextInt();\n            suma += n;\n            cuenta++;\n        } while (n != 0);\n        System.out.println("Has escrito " + cuenta + " números que suman " + suma);\n    }\n}\n',
    solution:
      'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner teclado = new Scanner(System.in);\n        int n = teclado.nextInt();\n        int suma = 0;\n        int cuenta = 0;\n        while (n != 0) {\n            suma += n;\n            cuenta++;\n            n = teclado.nextInt();\n        }\n        System.out.println("Has escrito " + cuenta + " números que suman " + suma);\n    }\n}\n',
    hints: [
      'Haz la traza con 4, 6, 2, 0: ¿cuántas veces suma el contador?',
      'El 0 de parada también se cuenta como número.',
      'Comprueba el valor <b>antes</b> de contarlo, por ejemplo con un <code>while</code> que lea al final de cada vuelta.'
    ],
    notes:
      '<p>El 0 de parada entraba en el recuento. Leyendo antes del bucle y de nuevo al final de cada vuelta, el 0 se detecta sin contarlo.</p>',
    kind: 'code',
    tests: [
      { input: '4\n6\n2\n0', out: 'Has escrito 3 números que suman 12' },
      { input: '5\n0', out: 'Has escrito 1 números que suman 5' },
      { input: '0', out: 'Has escrito 0 números que suman 0' }
    ],
    stdin: '4\n6\n2\n0'
  }
];
FIX2.forEach(function (f) {
  CODEX.push(f);
});
