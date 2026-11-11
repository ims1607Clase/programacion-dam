/* ============================================================
   Explicaciones paso a paso
   Texto de ayuda que aparece en cada ejercicio de código (pistas, "no sé por dónde empezar", etc.).
   ============================================================ */
/* Explicaciones paso a paso de cada ejercicio de código (para principiantes) */
var EXPL = {
  k1: [
    'Todo programa Java empieza en <code>main</code>: es la puerta de entrada. Ya la tienes escrita, tú solo escribes <b>dentro</b> de sus llaves <code>{ }</code>, en el hueco vacío.',
    'Para mostrar texto en pantalla se usa <code>System.out.println(...)</code>. Piensa que <code>println</code> es «imprime y salta de línea».',
    'El texto va entre <b>comillas dobles</b>: <code>"Hola, mundo!"</code>. Lo que escribas entre las comillas es lo que saldrá en la terminal, igualito (mayúsculas, coma y signo de exclamación incluidos).',
    'Cada instrucción en Java termina con <b>punto y coma</b> <code>;</code>. Si se te olvida, te dará error de compilación.',
    'Pulsa ▶ Ejecutar y mira la terminal. Si sale <code>Hola, mundo!</code>, pulsa «Enviar respuesta».'
  ],
  k2: [
    'Necesitas <b>tres</b> líneas de salida, así que necesitas <b>tres</b> instrucciones <code>println</code>, una debajo de otra.',
    'Como <code>println</code> salta de línea al terminar, cada texto aparecerá en su propia línea.',
    'Escribe: <code>System.out.println("Hola");</code>, luego la misma instrucción con <code>"me llamo Java"</code> y otra con <code>"encantado"</code>.',
    'Ojo: el texto de dentro de las comillas tiene que ser exacto, sin espacios de más.'
  ],
  k3: [
    'Un <b>comentario</b> es texto que Java ignora; es para que los humanos entiendan el código.',
    'Comentario de una línea: empieza con <code>//</code> y llega hasta el final de la línea. Ej: <code>// muestra un saludo</code>.',
    'Comentario de bloque: empieza con <code>/*</code> y termina con <code>*/</code>, puede ocupar varias líneas. Ej: <code>/* Este programa saluda */</code>.',
    'Escribe un comentario de cada tipo y, además, un <code>System.out.println("Hola");</code>. Los comentarios no se ven en la terminal, solo el «Hola».'
  ],
  k4: [
    'Una <b>variable</b> es una caja con nombre donde guardas un valor. <code>int</code> significa «número entero». Se declara así: <code>int x;</code>',
    'Se pueden declarar varias a la vez: <code>int x, y, z;</code>. Aquí las tres ya vienen declaradas (<code>int x; int y; int z;</code>): tú solo asignas y muestras.',
    'Asignar es meter un valor: <code>x = 8;</code> (el <code>=</code> significa «guarda este valor en la caja», no «es igual»).',
    'Orden pedido: <code>x = 8;</code> <code>y = 2;</code> <code>z = x / y;</code> (z vale 4). Luego <code>x = 5;</code> y <code>y = x + z;</code> (5 + 4 = 9).',
    'Muestra cada variable con su <code>println</code>: primero x, luego y, luego z. Deben salir 5, 9 y 4.'
  ],
  k5: [
    'Una <b>constante</b> es una variable que no se puede cambiar. Se crea con la palabra <code>final</code>: <code>final double PI = 3.141592;</code>',
    '<code>double</code> es un número con decimales. Por costumbre las constantes se escriben en MAYÚSCULAS.',
    'Crea también <code>int radio = 2;</code>',
    'Calcula el área: <code>double area = PI * radio * radio;</code> (el <code>*</code> es multiplicar).',
    'Muéstrala con <code>System.out.println(area);</code>. Debe salir 12.566368.'
  ],
  k6: [
    'Imagina dos vasos, uno con agua (a) y otro con zumo (b). Para intercambiarlos necesitas un <b>tercer vaso vacío</b>. Ese es la variable auxiliar.',
    'Ya vienen escritos <code>int a = 3;</code> y <code>int b = 7;</code> y, al final, un <code>println</code> que muestra a y b. Tu trabajo está <b>en medio</b>.',
    'Paso 1: guarda a en el auxiliar: <code>int aux = a;</code>',
    'Paso 2: pon b en a: <code>a = b;</code>',
    'Paso 3: pon el auxiliar en b: <code>b = aux;</code>',
    'Con eso, el <code>System.out.println(a + " " + b);</code> que ya viene al final mostrará <code>7 3</code>.'
  ],
  k7: [
    'Con <code>var</code> no escribes el tipo: Java lo adivina por el valor. Como <code>8</code> es entero, <code>var x = 8;</code> es un <code>int</code>.',
    'Solo funciona si le das un valor en el mismo momento (<code>var x;</code> sin valor da error).',
    'Muestra el doble: <code>System.out.println(x * 2);</code> → 16.'
  ],
  k8: [
    'Aquí aprendes algo muy importante: <b>el tipo de los números decide el resultado</b>.',
    '<code>8 / 6</code>: los dos son enteros, así que Java da un entero y <b>tira los decimales</b> → 1.',
    '<code>8.0 / 6</code>: uno es <code>double</code>, así que el resultado tiene decimales → 1.3333333333333333.',
    '<code>8f / 6</code>: la <code>f</code> indica <code>float</code> (decimal con menos precisión) → 1.3333334.',
    'Escribe tres <code>println</code>, uno con cada operación. No hace falta ninguna variable.'
  ],
  k9: [
    '<code>byte</code> solo guarda números de -128 a 127. Si metes uno mayor, «da la vuelta», como un reloj.',
    'Un <b>casting</b> es forzar un cambio de tipo escribiendo el tipo nuevo entre paréntesis: <code>(byte) numInt</code>.',
    'Ya viene <code>int numInt = 130;</code>. Escribe debajo <code>byte numByte = (byte) numInt;</code> y muéstralo con println. Saldrá -126.',
    'Después cambia <code>numInt = 260;</code>, repite el casting a byte (reasigna <code>numByte</code>) y muéstralo. Saldrá 4.',
    'No hace falta calcularlo tú: Java lo hace solo al ejecutar.'
  ],
  k10: [
    "<code>char</code> guarda <b>un solo carácter</b> y va entre comillas <b>simples</b>: <code>char z = 'J';</code> (las dobles son para textos).",
    'Un <code>boolean</code> solo vale <code>true</code> o <code>false</code>. Las comparaciones dan boolean.',
    "Muestra cada una en su propio println: <code>5 &lt;= 5</code> (true), <code>'a' == 'c'</code> (false, son letras distintas) y <code>35 &gt; 9 &amp;&amp; 5 &lt; 2</code> (el <code>&amp;&amp;</code> exige que ambas sean ciertas; la segunda no lo es → false)."
  ],
  k11: [
    'Los operadores aritméticos son <code>+</code> suma, <code>-</code> resta, <code>*</code> multiplica, <code>/</code> divide y <code>%</code> resto de la división.',
    'Ya vienen <code>int a = 35;</code> y <code>int b = 9;</code>.',
    'Un <code>println</code> por operación: <code>a + b</code> (44), <code>a - b</code> (26), <code>a * b</code> (315), <code>a / b</code> (3, porque son enteros) y <code>a % b</code> (8, lo que sobra de 35 entre 9).'
  ],
  k12: [
    '<code>a++</code> sube a en 1. Si va <b>detrás</b> (post-incremento), primero usa el valor y luego sube. Si va <b>delante</b> (<code>++a</code>), sube primero y luego usa el valor.',
    'Ya viene <code>int a = 5;</code>. Haz <code>int b = a++;</code> → b recibe 5 (el valor de antes) y después a pasa a 6.',
    'Muestra <code>System.out.println(a + " " + b);</code> → <code>6 5</code>.',
    'Ahora <code>b = ++a;</code> → a sube a 7 y b recibe 7. Vuelve a mostrar → <code>7 7</code>.'
  ],
  k13: [
    'Los operadores compuestos son atajos: <code>x += 5;</code> es lo mismo que <code>x = x + 5;</code>.',
    'Ya viene <code>int x = 10;</code>.',
    'Haz <code>x += 5;</code> y muestra x (15). Luego <code>x -= 3;</code> y muestra (12). Luego <code>x *= 2;</code> (24). Luego <code>x /= 4;</code> (6).',
    'Son 4 operaciones y 4 println, intercalados (operación, println, operación, println…).'
  ],
  k14: [
    'Igual que en mates, Java resuelve primero <code>* / %</code> y después <code>+ -</code>. Los <b>paréntesis</b> se resuelven los primeros.',
    '<code>6 + 4 / 2</code> → primero 4/2 = 2, luego 6+2 = 8.',
    '<code>(6 + 4) / 2</code> → 10/2 = 5.',
    '<code>(33 + 3 * 4) / 5</code> → 3*4=12, 33+12=45, 45/5 = 9.',
    '<code>5 + 3 &lt; 2 + 9</code> → 8 &lt; 11 → true (primero se hacen las sumas, luego se compara).',
    'Escribe cada expresión dentro de su propio <code>println</code>.'
  ],
  k15: [
    '<code>Math</code> es una clase con funciones matemáticas ya hechas: las usas escribiendo <code>Math.</code> y el nombre.',
    '<code>Math.pow(2, 6)</code> = 2 elevado a 6 = 64. Devuelve <b>double</b>, por eso sale <code>64.0</code>.',
    '<code>Math.sqrt(64)</code> = raíz cuadrada = <code>8.0</code> (también double).',
    '<code>Math.abs(-5)</code> = valor absoluto = 5.',
    '<code>Math.round(5.7)</code> = redondea al entero más cercano = 6.',
    'Un <code>println</code> por cada una.'
  ],
  k16: [
    'Los operadores lógicos trabajan con booleanos. <code>&amp;&amp;</code> = «y», <code>||</code> = «o», <code>!</code> = «no», <code>^</code> = «uno u otro pero no ambos» (XOR).',
    'Ya vienen <code>boolean a = true;</code> y <code>boolean b = false;</code>.',
    '<code>a &amp;&amp; b</code> → false (b es falso). <code>a || b</code> → true (basta con uno). <code>!a</code> → false (lo contrario de true). <code>a ^ b</code> → true (son distintos).',
    'Un <code>println</code> por cada expresión.'
  ],
  k17: [
    'Ahora el programa <b>conversa</b> con el usuario. Para leer del teclado se usa <code>Scanner</code> (ya viene creado como <code>teclado</code>).',
    '<code>teclado.nextLine()</code> lee una línea entera de texto. Guárdala: <code>String nombre = teclado.nextLine();</code> (<code>String</code> = texto).',
    'Para juntar textos se usa <code>+</code>: <code>"Hola, " + nombre + "!"</code>.',
    'Muéstralo con <code>System.out.println("Hola, " + nombre + "!");</code>.',
    'En el cuadro «Lo que escribirá el usuario» puedes cambiar el nombre y probar con otros.'
  ],
  k18: [
    'Para leer un número entero: <code>teclado.nextInt()</code>. Guárdalo en una variable: <code>int a = teclado.nextInt();</code>',
    'Hazlo dos veces (a y b). Los dos números están en líneas distintas en el cuadro de entrada.',
    'Muestra la suma: <code>System.out.println(a + b);</code>. Con 4 y 9 sale 13.'
  ],
  k19: [
    'Hay que leer <b>tres</b> datos de tipos distintos, en este orden: producto → precio → cantidad.',
    '<code>String producto = teclado.nextLine();</code> <code>double precio = teclado.nextDouble();</code> <code>int cantidad = teclado.nextInt();</code>',
    'Calcula <code>double total = precio * cantidad;</code>',
    'Muestra dos líneas: <code>System.out.println("Producto: " + producto);</code> y <code>System.out.println("Total: " + total);</code>.',
    'Respeta el orden: si cambias el orden de lectura, los datos se leerán en la variable equivocada.'
  ],
  k20: [
    'Lee dos números con decimales: <code>double base = teclado.nextDouble();</code> y lo mismo para la altura.',
    'El área de un rectángulo es base × altura: <code>double area = base * altura;</code>',
    'Muéstrala con println. Con 3.5 y 2 sale 7.0.'
  ],
  k21: [
    'Lee tres notas enteras: <code>int a = teclado.nextInt();</code> (y b, c).',
    'La media es la suma entre 3. Pero <b>cuidado</b>: <code>(a + b + c) / 3</code> con enteros se queda sin decimales.',
    'Para conservar los decimales divide entre <code>3.0</code> (un double): <code>(a + b + c) / 3.0</code>',
    'Muestra el resultado. Con 7, 8, 8 debe salir 7.666666666666667.'
  ],
  c1: [
    'Lee dos enteros: <code>int a = teclado.nextInt();</code> y <code>int b = teclado.nextInt();</code>',
    'Muestra su suma: <code>System.out.println(a + b);</code>',
    'Prueba con otros números en el cuadro de entrada (un número por línea).'
  ],
  c2: [
    'Una <b>condición</b> es una pregunta con respuesta sí/no. El <code>if</code> ejecuta un bloque solo si es cierta; el <code>else</code> si no lo es.',
    'Lee la edad: <code>int edad = teclado.nextInt();</code>',
    'Escribe <code>if (edad &gt;= 18) { ... } else { ... }</code> (<code>&gt;=</code> = «mayor o igual»).',
    'Dentro del if: <code>System.out.println("Mayor de edad");</code>. Dentro del else: <code>System.out.println("Menor de edad");</code>.'
  ],
  c3: [
    'Hay tres caminos, así que se encadenan <code>if … else if … else</code>. Se comprueban en orden y se ejecuta el <b>primero</b> que sea cierto.',
    'Lee: <code>int n = teclado.nextInt();</code>',
    '<code>if (n &gt; 0)</code> → escribe positivo. <code>else if (n &lt; 0)</code> → escribe negativo. <code>else</code> → (solo queda el 0) escribe cero.',
    'Recuerda las llaves <code>{ }</code> de cada bloque y las comillas en el texto.'
  ],
  c4: [
    'Es un if encadenado con 6 caminos. El <b>orden importa</b>: los apuntes dicen que se comprueban <b>primero los casos de error</b> y luego se ordena de lo más restrictivo a lo más general.',
    'Lee <code>int nota = teclado.nextInt();</code> (ya está en el código).',
    '1) Error: <code>if (nota &lt; 0 || nota &gt; 10)</code> → <code>Nota incorrecta</code>.',
    '2) <code>else if (nota &lt; 5)</code> → Insuficiente. 3) <code>else if (nota &lt; 6)</code> → Suficiente (solo el 5). 4) <code>else if (nota &lt; 7)</code> → Bien (solo el 6). 5) <code>else if (nota &lt; 9)</code> → Notable (7 y 8). 6) <code>else</code> → Sobresaliente (9 y 10).',
    '¿Por qué no hace falta escribir «nota &gt;= 5» en el segundo? Porque si llegas a ese <code>else if</code> es que el anterior (<code>nota &lt; 5</code>) fue falso: ya sabes que nota es 5 o más.'
  ],
  c5: [
    '<code>switch</code> sirve cuando comparas una variable con muchos valores concretos.',
    'Lee <code>int dia = teclado.nextInt();</code> y escribe <code>switch (dia) { ... }</code>',
    'Dentro, un <code>case</code> por valor: <code>case 1: System.out.println("Lunes"); break;</code> y así hasta el 7.',
    'El <code>break;</code> es importante: sin él Java seguiría ejecutando los casos de abajo.',
    'Al final <code>default:</code> se ejecuta si no coincide ningún caso: escribe <code>Día no válido</code>.'
  ],
  c6: [
    'El operador ternario es un if-else comprimido: <code>condición ? valor_si_cierta : valor_si_falsa</code>',
    'Lee <code>int n = teclado.nextInt();</code>',
    'Un número es par si el resto de dividirlo entre 2 es 0: <code>n % 2 == 0</code> (ojo, dos signos igual para comparar).',
    '<code>String r = (n % 2 == 0) ? "par" : "impar";</code> y luego <code>System.out.println(r);</code>.'
  ],
  c7: [
    'Un <b>bucle while</b> repite mientras su condición sea cierta. Necesita: una variable contador, una condición y algo que cambie el contador.',
    'Ya tienes <code>int i = 1;</code> (el contador).',
    '<code>while (i &lt;= 5) { ... }</code>: dentro muestra <code>i</code> y después súmale 1 con <code>i++;</code>',
    'Si olvidas <code>i++;</code> el bucle no termina nunca (bucle infinito). El simulador se detendría con un aviso.'
  ],
  c8: [
    'El <code>for</code> junta en una línea: inicio; condición; paso. <code>for (int i = 5; i &gt;= 1; i--)</code>',
    'Se lee: «empieza con i = 5, repite mientras i sea ≥ 1, y en cada vuelta réstale 1 (<code>i--</code>)».',
    'Dentro de las llaves: <code>System.out.println(i);</code>',
    'Cuando termine el bucle (después de su llave de cierre) escribe <code>System.out.println("¡Despegue!");</code>'
  ],
  c9: [
    'Lee <code>int n = teclado.nextInt();</code>',
    'Haz un <code>for</code> con i de 1 a 10: <code>for (int i = 1; i &lt;= 10; i++)</code>',
    'En cada vuelta muestra la línea con el formato pedido, juntando trozos con <code>+</code>: <code>System.out.println(n + " x " + i + " = " + (n * i));</code>',
    'Fíjate en los espacios dentro de las comillas y en los paréntesis de <code>(n * i)</code>.'
  ],
  c10: [
    'Un <b>acumulador</b> es una variable que va guardando un total. Se crea fuera del bucle a 0: <code>int suma = 0;</code>',
    'Ya vienen leídos <code>n</code> y el acumulador <code>int suma = 0;</code>, y al final un <code>println(suma)</code>.',
    '<code>for (int i = 1; i &lt;= n; i++) { suma = suma + i; }</code> (en cada vuelta se añade i al total).',
    'Después del bucle muestra <code>suma</code>. Con n = 10 sale 55.'
  ],
  c11: [
    'El <code>do-while</code> ejecuta el bloque <b>al menos una vez</b> y luego comprueba la condición. Perfecto para «pedir hasta que sea válido».',
    'La variable <code>int nota;</code> ya está declarada <b>fuera</b> del bucle (así puedes usarla después de él).',
    '<code>do { nota = teclado.nextInt(); } while (nota &lt; 0 || nota &gt; 10);</code> (el <code>||</code> es «o»: repite si es menor que 0 <b>o</b> mayor que 10).',
    'Cuando por fin sea válida, escribe <code>System.out.println("Nota: " + nota);</code>',
    'En la entrada de ejemplo se escriben 15, -2 y 8: los dos primeros se rechazan.'
  ],
  c12: [
    'Un <b>centinela</b> es un valor especial (aquí el 0) que significa «terminé».',
    'Ya vienen <code>int total = 0;</code>, la lectura del primer número <code>int n</code> y el <code>println(total)</code> final.',
    '<code>while (n != 0) { total += n; n = teclado.nextInt(); }</code> (<code>!=</code> = «distinto de»). Dentro del bucle sumas y lees el siguiente.',
    'Al salir del bucle (llegó un 0) muestra <code>total</code>. El 0 no se suma porque el bucle ya no entra.'
  ],
  c13: [
    '<code>break</code> sale del bucle inmediatamente.',
    'El <code>for</code> (<code>i</code> de 1 a 100) ya viene escrito; tú rellenas el cuerpo.',
    'Dentro: <code>if (i % 7 == 0 &amp;&amp; i % 5 == 0) { ... }</code> → múltiplo de 7 <b>y</b> de 5 a la vez.',
    'En el if: muestra <code>i</code> y escribe <code>break;</code> para no seguir buscando. El primero es 35.'
  ],
  c14: [
    '<code>continue</code> salta lo que queda de esta vuelta y pasa a la siguiente.',
    'El <code>for</code> (<code>i</code> de 1 a 9) ya viene escrito; tú rellenas el cuerpo.',
    'Primero: <code>if (i % 2 == 0) { continue; }</code> → si es par, sáltatelo.',
    'Después (fuera del if) <code>System.out.println(i);</code>. Solo llegarán los impares.'
  ],
  c15: [
    'Una <b>excepción</b> es un error que ocurre mientras el programa corre. Con <code>try / catch</code> lo controlas para que no se rompa todo.',
    'Ya vienen leídos <code>a</code> y <code>b</code>. Escribe <code>try { System.out.println(a / b); }</code>',
    '<code>catch (ArithmeticException e) { System.out.println("No se puede dividir entre cero"); }</code> — se ejecuta si ocurre ese error (dividir enteros entre 0).',
    '<code>finally { System.out.println("Fin"); }</code> — se ejecuta <b>siempre</b>, haya error o no.',
    'Prueba con 10 y 0 en la entrada para ver el catch.'
  ],
  c16: [
    'Si el usuario escribe letras donde se espera un número, <code>nextInt()</code> lanza <code>InputMismatchException</code>.',
    'Pon <code>try { int n = teclado.nextInt(); System.out.println("Has escrito: " + n); }</code>',
    'Y <code>catch (InputMismatchException e) { System.out.println("Eso no es un número"); }</code>',
    'Prueba a escribir <code>hola</code> en el cuadro de entrada para ver el catch.'
  ],
  c17: [
    'Con <code>throw new ...</code> <b>tú</b> lanzas una excepción cuando algo no es válido.',
    'Dentro de un <code>try</code>: si <code>edad &lt; 0</code>, haz <code>throw new IllegalArgumentException("Edad negativa");</code>. Si no, escribe «Edad válida».',
    'El <code>catch (IllegalArgumentException e)</code> la captura. Con <code>e.getMessage()</code> obtienes el texto que pusiste entre paréntesis.',
    'Muéstralo: <code>System.out.println(e.getMessage());</code>.'
  ],
  c18: [
    'Un <code>assert</code> es una afirmación: «esto tiene que ser cierto». Si no lo es, el programa falla y te avisa.',
    'Mira el <code>main</code>: comprueba que <code>doble(4)</code> sea 8, etc. Tu trabajo está en el método <code>doble</code>.',
    'Cambia el cuerpo del método para que haga <code>return n * 2;</code> (devuelve el doble).',
    'Cuando devuelva bien los valores, las aserciones pasan y aparece «Todo OK».'
  ],
  c19: [
    'Programa con error: debe mostrar 5.5 pero muestra otra cosa. Ejecútalo y mira qué sale.',
    'Pista de detective: <code>(a + b) / 2</code> con dos enteros hace una <b>división entera</b> y descarta los decimales: 11 / 2 = 5.',
    'Arréglalo dividiendo entre <code>2.0</code> (un decimal) o con un casting <code>(double)</code> delante de la suma.',
    'Comprueba que ahora salga 5.5.'
  ],
  c20: [
    'Plan: repetir «pedir número → comparar» hasta acertar. Como se pide al menos una vez, usa <code>do-while</code>.',
    'Ya tienes las variables: <code>secreto</code> (7), <code>intentos</code> (empieza en 0) y <code>n</code> (lo que escribe el usuario).',
    'En el bucle: <code>n = teclado.nextInt();</code> y <code>intentos++;</code>. Si <code>n &lt; secreto</code> escribe Mayor (tienes que subir); si <code>n &gt; secreto</code> escribe Menor.',
    'La condición del while: <code>while (n != secreto);</code> (sigue mientras no aciertes).',
    'Al terminar: <code>System.out.println("¡Acertaste en " + intentos + " intentos!");</code>'
  ],
  final1: [
    'Antes de escribir: ¿qué datos entran (y de qué tipo) y qué cinco líneas salen? Apunta qué variable necesitas para cada dato.',
    'El nombre es un <code>String</code> y se lee con <code>nextLine()</code>; léelo <b>el primero</b> para evitar el problema del salto de línea tras <code>nextInt()</code>.',
    'El IVA no cambia nunca: es una constante (<code>final</code>). El precio y los importes tienen decimales: usa <code>double</code>.',
    'Haz primero los cálculos (subtotal, iva, total) guardándolos en variables y después las cinco instrucciones <code>println</code>.',
    'Al concatenar en el <code>println</code>, una operación aritmética va entre paréntesis o se calcula antes en una variable.'
  ],
  final2: [
    'Divide el problema en 4 trozos (validar, recorrer, acumular, calcular la media) y resuélvelos de uno en uno ejecutando entre medias.',
    'Validar «al menos una vez» es justo para lo que sirve el <code>do-while</code>. Declara <code>n</code> fuera del bucle para poder usarla después.',
    'En el <code>for</code> el orden de las condiciones importa: ¿qué debe comprobarse antes, el múltiplo de 15 o el de 3?',
    'Necesitas dos contadores que empiecen en 0: <code>suma3</code> y <code>cuenta3</code>. Se modifican solo cuando <code>i % 3 == 0</code>.',
    'La división entera entre 0 lanza <code>ArithmeticException</code>: pon <b>solo</b> esa división (con su println) dentro del <code>try</code>.'
  ]
};
var BASICS = {
  main: '<b><code>public class Main { … }</code></b>: la «caja» que contiene tu programa. <b><code>public static void main(String[] args) { … }</code></b>: el punto donde Java empieza a ejecutar. Tu código va <b>dentro de las llaves de main</b>.',
  scan: '<b><code>Scanner teclado = new Scanner(System.in);</code></b>: crea el «lector de teclado» llamado <code>teclado</code>. Con él lees lo que escribe el usuario: <code>nextInt()</code> (entero), <code>nextDouble()</code> (decimal), <code>nextLine()</code> (línea de texto).',
  imp: '<b><code>import java.util.Scanner;</code></b>: avisa a Java de que vas a usar la clase Scanner.'
};
function exampleBox(ex) {
  var t = (ex.tests || [])[0];
  if (!t) return '';
  var h = '<div class="exbox"><b>Ejemplo de lo que debe pasar</b>';
  if (t.input) h += '<div class="exio"><span>El usuario escribe:</span><pre>' + esc(t.input) + '</pre></div>';
  h +=
    '<div class="exio"><span>' +
    (t.input ? 'El programa muestra:' : 'La terminal debe mostrar:') +
    '</span><pre>' +
    esc(t.out) +
    '</pre></div></div>';
  return h;
}
function hintList(ex) {
  var p = (typeof EXPL !== 'undefined' && EXPL[ex.id]) || [];
  return p.concat(ex.hints || []);
}
function explainBox(ex) {
  var h = exampleBox(ex),
    st = ex.starter || '',
    b = [];
  if (/import java\.util\.Scanner/.test(st)) b.push(BASICS.imp);
  if (/public class Main/.test(st)) b.push(BASICS.main);
  if (/new Scanner/.test(st)) b.push(BASICS.scan);
  if (b.length)
    h +=
      '<details class="basics"><summary>¿Qué es el código que ya está escrito?</summary>' +
      b
        .map(function (x) {
          return '<p>' + x + '</p>';
        })
        .join('') +
      '</details>';
  h +=
    '<details class="basics"><summary>⌨ Atajos del editor (como en NetBeans)</summary><table class="keys"><tr><td><kbd>F6</kbd></td><td>Ejecutar</td></tr><tr><td><kbd>Ctrl</kbd>+<kbd>Espacio</kbd> (o <kbd>Alt</kbd>+<kbd>Espacio</kbd>)</td><td>Sugerencias de código</td></tr><tr><td>sout, psvm, fori, if… + <kbd>Tab</kbd></td><td>Plantillas de código</td></tr><tr><td><kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>↓</kbd> / <kbd>↑</kbd></td><td>Duplicar la línea</td></tr><tr><td><kbd>Alt</kbd>+<kbd>Mayús</kbd>+<kbd>↓</kbd> / <kbd>↑</kbd></td><td>Mover la línea</td></tr><tr><td><kbd>Ctrl</kbd>+<kbd>E</kbd></td><td>Borrar la línea</td></tr><tr><td><kbd>Ctrl</kbd>+<kbd>/</kbd></td><td>Comentar / descomentar</td></tr><tr><td><kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>F</kbd></td><td>Formatear el código</td></tr><tr><td><kbd>Tab</kbd> / <kbd>Mayús</kbd>+<kbd>Tab</kbd></td><td>Sangrar / quitar sangría (varias líneas)</td></tr><tr><td><kbd>Ctrl</kbd>+<kbd>Z</kbd> / <kbd>Ctrl</kbd>+<kbd>Y</kbd></td><td>Deshacer / rehacer</td></tr></table></details>';
  h +=
    '<p class="muted tryfirst">💪 Inténtalo tú primero. Si te atascas, pulsa <b>Pista</b>: te las da poco a poco, de la más suave a la más concreta.</p>';
  return h;
}
