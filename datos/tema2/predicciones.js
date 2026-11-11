/* ============================================================
   Ejercicios "Predice la salida" del Tema 2 (apartados 2.2 a 2.5 y 2.11)
   Cada uno tiene un código (code), la salida correcta y una explicación.
   ============================================================ */
/* ---------- ejercicios de predecir la salida ---------- */
var PRED = [
  {
    id: 'p1',
    s: 'secuencial',
    p: '¿Qué muestra por pantalla? (separa las líneas con espacios)',
    code: 'int a = 3;\nint b = a * 2;\na = b + 1;\nSystem.out.println(a + " " + b);',
    a: '7 6',
    h: 'Ve línea a línea. Cuando se calcula b, a vale 3. Después a cambia.',
    e: 'b = 3*2 = 6 y luego a = 6+1 = 7. Se muestra "7 6".'
  },
  {
    id: 'p2',
    s: 'selectiva',
    p: '¿Qué muestra? (una palabra por línea; sepáralas con espacios)',
    code: 'int x = 15;\nif (x > 10) { System.out.println("A"); }\nif (x > 5) { System.out.println("B"); }\nelse if (x > 0) { System.out.println("C"); }\nelse { System.out.println("D"); }',
    a: 'A B',
    h: 'El primer if es independiente del segundo. El else if y el else pertenecen al segundo.',
    e: 'El primer if es verdadero y muestra A. El segundo if también y muestra B; su else if y su else se saltan.'
  },
  {
    id: 'p3',
    s: 'selectiva',
    p: '¿Qué muestra?',
    code: 'int dia = 3;\nswitch (dia) {\n    case 3:\n        System.out.println("miércoles");\n    case 4:\n        System.out.println("jueves");\n        break;\n    case 5:\n        System.out.println("viernes");\n        break;\n    default:\n        System.out.println("otro");\n}',
    a: 'miércoles jueves',
    h: 'El case 3 no tiene break.',
    e: 'Entra en case 3, sigue al case 4 (sin break), y ahí el break lo corta. No llega al 5.'
  },
  {
    id: 'p4',
    s: 'selectiva',
    p: '¿Qué muestra?',
    code: 'int edad = 17;\nString m = (edad >= 18) ? "adulto" : "menor";\nSystem.out.println(m);',
    a: 'menor',
    h: '¿Es 17 >= 18?',
    e: 'La condición es falsa, así que el ternario devuelve el segundo valor.'
  },
  {
    id: 'p5',
    s: 'bucles',
    p: '¿Qué muestra?',
    code: 'int n = 10;\ndo {\n    System.out.println(n);\n    n++;\n} while (n < 5);\nSystem.out.println("Fin");',
    a: '10 Fin',
    h: 'En el do-while la condición se mira al final.',
    e: 'El cuerpo se ejecuta una vez (muestra 10), n pasa a 11 y 11 < 5 es falso. Luego Fin. Con while no habría mostrado el 10.'
  },
  {
    id: 'p6',
    s: 'bucles',
    p: '¿Qué muestra? (separa con espacios)',
    code: 'for (int i = 1; i <= 10; i = i + 3) {\n    System.out.println(i);\n}',
    a: '1 4 7 10',
    h: 'Cuenta de 3 en 3 empezando en 1. ¿Entra el 10?',
    e: 'i vale 1, 4, 7 y 10 (10 <= 10 es verdadero). Después 13 corta el bucle.'
  },
  {
    id: 'p7',
    s: 'bucles',
    p: '¿Qué muestra? (los dos números van en la misma línea)',
    code: 'int suma = 0;\nint cont = 0;\nfor (int i = 2; i <= 8; i = i + 2) {\n    suma = suma + i;\n    cont++;\n}\nSystem.out.println(suma + " " + cont);',
    a: '20 4',
    h: 'i toma los valores 2, 4, 6, 8.',
    e: 'suma acumula 2+4+6+8 = 20 y cont cuenta 4 vueltas.'
  },
  {
    id: 'p8',
    s: 'bucles',
    p: 'El usuario teclea 4, 6, 2 y -1. ¿Qué muestra?',
    code: 'int suma = 0, n;\ndo {\n    n = leerEntero();   // teclea: 4, 6, 2, -1\n    if (n >= 0) {\n        suma = suma + n;\n    }\n} while (n >= 0);\nSystem.out.println(suma);',
    a: '12',
    h: 'El -1 es el valor centinela. ¿Se llega a sumar?',
    e: 'Suma 4+6+2 = 12. Con el -1, el if es falso (no suma) y el while termina.'
  },
  {
    id: 'p9',
    s: 'saltos',
    p: '¿Qué muestra? (separa con espacios)',
    code: 'for (int i = 1; i <= 6; i++) {\n    if (i == 5) {\n        break;\n    }\n    if (i % 2 == 0) {\n        continue;\n    }\n    System.out.println(i);\n}\nSystem.out.println("Fin");',
    a: '1 3 Fin',
    h: 'Pares: continue. En el 5: break.',
    e: '1 se muestra, 2 se salta, 3 se muestra, 4 se salta, en 5 sale del bucle. Después Fin.'
  },
  {
    id: 'p10',
    s: 'saltos',
    p: 'Esto está en el main. ¿Qué muestra?',
    code: 'int edad = -5;\nif (edad < 0) {\n    System.out.println("Edad no válida");\n    return;\n}\nSystem.out.println("Dentro de 10 años: " + (edad + 10));',
    a: 'Edad no válida',
    h: '¿Qué hace return dentro del main?',
    e: 'El return termina el main: la última línea nunca se ejecuta.'
  },
  {
    id: 'p20',
    s: 'metodos',
    p: '¿Qué muestra?',
    code: 'static int cuadrado(int n) { return n * n; }\n// en main:\nSystem.out.println(cuadrado(4));',
    a: '16',
    h: 'El método devuelve n por n y main lo muestra.',
    e: 'cuadrado(4) devuelve 16 y println lo muestra.'
  },
  {
    id: 'p21',
    s: 'metodos',
    p: '¿Qué muestra?',
    code: 'static int cuadrado(int n) { return n * n; }\n// en main:\nint t = cuadrado(cuadrado(2));\nSystem.out.println(t);',
    a: '16',
    h: 'Primero se resuelve el método de dentro.',
    e: 'cuadrado(2) es 4 y cuadrado(4) es 16.'
  },
  {
    id: 'p22',
    s: 'metodos',
    p: '¿Qué muestra? (separa con un espacio)',
    code: 'static int triple(int n) {\n    n = n * 3;\n    return n;\n}\n// en main:\nint x = 2;\nint y = triple(x);\nSystem.out.println(x + " " + y);',
    a: '2 6',
    h: 'El método trabaja con una copia de x.',
    e: 'Los argumentos se pasan por valor: x sigue valiendo 2 y y recibe 6.'
  },
  {
    id: 'p23',
    s: 'metodos',
    p: '¿Qué muestra?',
    code: 'static void incrementar(int n) {\n    n++;\n}\n// en main:\nint x = 5;\nincrementar(x);\nSystem.out.println(x);',
    a: '5',
    h: '¿Cambia incrementar la variable x del main?',
    e: 'n es una copia: se incrementa la copia y x sigue valiendo 5.'
  },
  {
    id: 'p24',
    s: 'metodos',
    p: '¿Qué muestra?',
    code: 'static int mayor(int a, int b) { return a > b ? a : b; }\nstatic int mayor(int a, int b, int c) { return mayor(mayor(a, b), c); }\n// en main:\nSystem.out.println(mayor(3, 9, 4));',
    a: '9',
    h: 'Java elige el método según el número de argumentos.',
    e: 'Con tres argumentos se usa el de tres, que reutiliza el de dos: mayor(3, 9) = 9 y mayor(9, 4) = 9.'
  },
  {
    id: 'p25',
    s: 'metodos',
    p: '¿Qué muestra? (separa con un espacio)',
    code: 'static void cuadradoV(int n) {\n    System.out.println(n * n);\n}\n// en main:\ncuadradoV(3);\nSystem.out.println("fin");',
    a: '9 fin',
    h: 'El método muestra, no devuelve.',
    e: 'cuadradoV(3) imprime 9 y después main imprime fin.'
  }
];
