/* ============================================================
   Ejercicios "Predice la salida" del Tema 1
   Cada uno tiene un código (code), la salida correcta (a) y una explicación.
   ============================================================ */
var PRED = [
  {
    id: 'r1',
    s: 'operadores',
    p: '¿Qué muestra?',
    code: 'int a = 5;\nint b = a++;\nSystem.out.println(a + " " + b);',
    a: '6 5',
    h: 'Post-incremento: usa el valor y luego incrementa.',
    e: 'b recibe el 5 y después a sube a 6.'
  },
  {
    id: 'r2',
    s: 'operadores',
    p: '¿Qué muestra?',
    code: 'int a = 5;\nint b = ++a;\nSystem.out.println(a + " " + b);',
    a: '6 6',
    h: 'Pre-incremento: incrementa primero.',
    e: 'Primero a pasa a 6 y luego b recibe 6.'
  },
  {
    id: 'r3',
    s: 'operadores',
    p: '¿Qué muestra?',
    code: 'int x = 10;\nx += 5;\nx *= 2;\nSystem.out.println(x);',
    a: '30',
    h: 'Haz cada paso: 10 → 15 → …',
    e: '10 + 5 = 15; 15 · 2 = 30.'
  },
  {
    id: 'r4',
    s: 'operadores',
    p: '¿Qué muestra?',
    code: 'System.out.println(7 / 2);\nSystem.out.println(7 % 2);\nSystem.out.println(7 / 2.0);',
    a: '3 1 3.5',
    h: 'Escribe las tres líneas separadas por espacios. Entero entre entero no tiene decimales.',
    e: '7/2 = 3, 7%2 = 1 y 7/2.0 = 3.5.'
  },
  {
    id: 'r5',
    s: 'tipos',
    p: '¿Qué muestra?',
    code: 'int n = 130;\nbyte b = (byte) n;\nSystem.out.println(b);',
    a: '-126',
    h: 'El byte da la vuelta tras 127.',
    e: '128 → -128, 129 → -127, 130 → -126.'
  },
  {
    id: 'r6',
    s: 'tipos',
    p: '¿Qué muestra?',
    code: 'int n = 260;\nbyte b = (byte) n;\nSystem.out.println(b);',
    a: '4',
    h: 'Mira el resto de dividir 260 entre 256.',
    e: '260 = 256 · 1 + 4.'
  },
  {
    id: 'r7',
    s: 'operadores',
    p: '¿Qué muestra?',
    code: 'System.out.println(6 + 4 / 2);\nSystem.out.println((6 + 4) / 2);',
    a: '8 5',
    h: 'Primero los paréntesis, luego * / %, luego + -.',
    e: '4/2 = 2 → 6+2 = 8; (10)/2 = 5.'
  },
  {
    id: 'r8',
    s: 'operadores',
    p: '¿Qué muestra?',
    code: 'boolean a = true;\nboolean b = false;\nSystem.out.println(a && b);\nSystem.out.println(a || b);\nSystem.out.println(a ^ b);',
    a: 'false true true',
    h: 'XOR es verdadero si son distintos.',
    e: '&& necesita ambos; || basta uno; ^ distintos.'
  },
  {
    id: 'r9',
    s: 'variables',
    p: '¿Qué muestra?',
    code: 'int x = 8;\nint y = 2;\nint z = x / y;\nx = 5;\ny = x + z;\nSystem.out.println(x + " " + y + " " + z);',
    a: '5 9 4',
    h: 'Apunta el valor de cada variable tras cada línea.',
    e: 'z = 4; luego x = 5 e y = 5 + 4 = 9.'
  },
  {
    id: 'r10',
    s: 'tipos',
    p: '¿Qué muestra?',
    code: 'System.out.println(8 / 6);\nSystem.out.println(8.0 / 6);',
    a: '1 1.3333333333333333',
    h: 'Con un real en la operación, el resultado es real.',
    e: 'El primero es int; el segundo double.'
  },
  {
    id: 'r11',
    s: 'operadores',
    p: '¿Qué muestra?',
    code: 'System.out.println(Math.pow(2, 3));\nSystem.out.println(Math.abs(-7));',
    a: '8.0 7',
    h: 'Math.pow devuelve un número real (double).',
    e: 'Math.pow siempre devuelve double, por eso sale 8.0.'
  },
  {
    id: 'r12',
    s: 'operadores',
    p: '¿Qué muestra?',
    code: 'System.out.println(5 + 3 < 2 + 9);\nSystem.out.println(35 == 9);',
    a: 'true false',
    h: 'Primero las sumas, luego la comparación.',
    e: '8 < 11 es true; 35 == 9 es false.'
  }
];
