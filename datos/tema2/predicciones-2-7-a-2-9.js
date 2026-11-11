/* ============================================================
   "Predice la salida" de los apartados 2.7 a 2.9
   Se añaden a las predicciones del Tema 2.
   ============================================================ */
PRED = PRED.concat([
  {
    id: 'p11',
    s: 'excepciones',
    p: '¿Qué muestra? (separa con espacios)',
    code: 'try {\n    System.out.println("A");\n    int r = 10 / 0;\n    System.out.println("B");\n} catch (ArithmeticException e) {\n    System.out.println("C");\n} finally {\n    System.out.println("D");\n}\nSystem.out.println("E");',
    a: 'A C D E',
    h: 'En cuanto falla la división, el resto del try se salta.',
    e: 'Muestra A, la división falla y salta al catch (C). El B nunca se ejecuta. El finally (D) se ejecuta siempre y después el programa continúa con E.'
  },
  {
    id: 'p12',
    s: 'excepciones',
    p: '¿Qué muestra?',
    code: 'try {\n    System.out.println("1");\n    int n = 10 / 0;\n    System.out.println("2");\n} catch (ArithmeticException e) {\n    System.out.println("3");\n} finally {\n    System.out.println("4");\n}\nSystem.out.println("5");',
    a: '1 3 4 5',
    h: 'Dividir entre 0 lanza una excepción. El finally se ejecuta siempre.',
    e: 'Muestra 1, la división falla y salta al catch (3). El 2 se salta. El finally (4) se ejecuta siempre y luego sigue el programa con el 5.'
  },
  {
    id: 'p13',
    s: 'pruebas',
    p: 'Con <code>-ea</code> activado, ¿qué error salta? (escribe su nombre)',
    code: 'int edad = -3;\nassert edad >= 0 : "La edad no puede ser negativa";\nSystem.out.println("OK");',
    a: 'AssertionError',
    h: 'El error se llama como la instrucción, más la palabra Error.',
    e: 'La condición edad >= 0 es falsa, así que el programa se detiene con un AssertionError y el mensaje. No llega a mostrar OK.'
  },
  {
    id: 'p14',
    s: 'pruebas',
    p: 'Con <code>-ea</code> activado, ¿qué muestra?',
    code: 'int edad = 25;\nassert edad >= 0 : "La edad no puede ser negativa";\nSystem.out.println("OK");',
    a: 'OK',
    h: '¿Se cumple la condición del assert?',
    e: '25 >= 0 es verdadero, la aserción se cumple y el programa continúa.'
  },
  {
    id: 'p15',
    s: 'depuracion',
    p: '¿Qué muestra?',
    code: 'int suma = 11;\nint contador = 2;\ndouble media = suma / contador;\nSystem.out.println(media);',
    a: '5.0',
    h: 'Los dos son int. Primero se divide, después se guarda en el double.',
    e: '11 / 2 es una división entera y da 5. Luego se convierte a double y queda 5.0.'
  },
  {
    id: 'p16',
    s: 'depuracion',
    p: '¿Qué muestra?',
    code: 'int suma = 11;\nint contador = 2;\ndouble media = (double) suma / contador;\nSystem.out.println(media);',
    a: '5.5',
    h: 'Ahora uno de los operandos es double antes de dividir.',
    e: 'Con (double) suma la división es con decimales: 11.0 / 2 = 5.5.'
  }
]);
