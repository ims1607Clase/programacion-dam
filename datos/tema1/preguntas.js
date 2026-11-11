/* ============================================================
   Banco de preguntas del Tema 1
   La PRIMERA opción de cada pregunta es la correcta; la web las baraja al mostrarlas. Se usan en el examen de preguntas.
   ============================================================ */
var QUIZ = [
  {
    id: 'a1',
    s: 'intro',
    q: '¿Qué es un <b>programa</b>?',
    o: [
      'Un conjunto de instrucciones ordenadas que el ordenador entiende, junto con los datos que usan',
      'Cualquier archivo guardado en el disco',
      'Un dibujo que representa los pasos de un problema',
      'El conjunto de componentes físicos del ordenador'
    ],
    e: 'Instrucciones ordenadas + datos que se usan, para obtener un resultado.'
  },
  {
    id: 'a2',
    s: 'intro',
    q: '¿Cómo se llama cada valor 0 o 1 con el que trabaja el ordenador?',
    o: ['Bit', 'Byte', 'Pixel', 'Bucle'],
    e: 'Un bit es un 0 o un 1. El ordenador es electrónico: hay señal (1) o no la hay (0).'
  },
  {
    id: 'a3',
    s: 'intro',
    q: '¿Cuál NO es una característica de un algoritmo?',
    o: ['Depender del lenguaje de programación', 'Ser preciso', 'Ser finito', 'Ser definido'],
    e: 'Un algoritmo es <b>independiente</b> del lenguaje: preciso, definido, finito e independiente.'
  },
  {
    id: 'a4',
    s: 'intro',
    q: 'Un algoritmo es <b>definido</b> cuando…',
    o: [
      'Si lo sigues dos veces con los mismos datos, da siempre el mismo resultado',
      'Tiene un número determinado de pasos',
      'Indica el orden en que se hacen los pasos',
      'No depende del lenguaje'
    ],
    e: '«Definido» = mismo dato de entrada, mismo resultado.'
  },
  {
    id: 'a5',
    s: 'intro',
    q: 'Un algoritmo es <b>finito</b> cuando…',
    o: [
      'Tiene un número determinado de pasos y termina',
      'Siempre da el mismo resultado',
      'Solo tiene una instrucción',
      'Se escribe en binario'
    ],
    e: 'Si no terminara nunca, no resolvería el problema en un tiempo finito.'
  },
  {
    id: 'a6',
    s: 'intro',
    q: '¿Qué se obtiene al implementar un algoritmo en un lenguaje de programación?',
    o: ['Un programa', 'Un bit', 'Un compilador', 'Un requisito'],
    e: 'Algoritmo (la idea) → implementación → programa.'
  },
  {
    id: 'b1',
    s: 'codif',
    q: '¿Cuántos símbolos tiene el sistema binario?',
    o: ['2 (0 y 1)', '8', '10', '16'],
    e: 'Base 2: solo 0 y 1.'
  },
  {
    id: 'b2',
    s: 'codif',
    q: '¿Cuánto vale <code>10011</code> en decimal?',
    o: ['19', '10', '11', '21'],
    e: '16 + 0 + 0 + 2 + 1 = 19.'
  },
  {
    id: 'b3',
    s: 'codif',
    q: '¿Cómo se escribe 20 en binario?',
    o: ['10100', '10010', '11000', '10101'],
    e: '16 + 4 = 20 → 10100.'
  },
  {
    id: 'b4',
    s: 'codif',
    q: 'Para pasar de decimal a binario se divide entre 2 repetidamente. ¿Cómo se forma el número?',
    o: [
      'Con el último cociente y los restos, del último al primero',
      'Con los restos, del primero al último',
      'Solo con los cocientes',
      'Sumando los restos'
    ],
    e: 'Se toma el último cociente y luego los restos en orden inverso.'
  },
  {
    id: 'b5',
    s: 'codif',
    q: '¿Qué símbolos usa el sistema octal?',
    o: ['0 a 7', '0 a 9', '0 y 1', '0 a 9 y A a F'],
    e: 'Base 8: 0,1,2,3,4,5,6,7.'
  },
  {
    id: 'b6',
    s: 'codif',
    q: 'En hexadecimal, ¿qué valor decimal tiene la letra <b>F</b>?',
    o: ['15', '16', '14', '10'],
    e: 'A=10, B=11, C=12, D=13, E=14, F=15.'
  },
  {
    id: 'b7',
    s: 'codif',
    q: '¿Cuántos bits usa cada carácter en el código ASCII de los apuntes?',
    o: ['8', '7 por defecto y 16 en Java', '16', '32'],
    e: 'En los apuntes: cada carácter usa 8 bits (A = 01000001).'
  },
  {
    id: 'b8',
    s: 'codif',
    q: '¿Qué letra representa <code>01000001</code> en ASCII?',
    o: ['A', 'a', 'B', 'H'],
    e: '01000001 es 65, la letra A mayúscula (la a minúscula es 01100001).'
  },
  {
    id: 'b9',
    s: 'codif',
    q: '¿Por qué se inventaron el octal y el hexadecimal?',
    o: [
      'Porque el binario resulta difícil de manejar para las personas con números grandes',
      'Porque el ordenador no entiende binario',
      'Porque son más rápidos que el binario',
      'Porque el decimal no existe en informática'
    ],
    e: 'Son formas más compactas de escribir lo mismo que en binario.'
  },
  {
    id: 'c1',
    s: 'resol',
    q: 'La fase de <b>análisis</b> responde a la pregunta…',
    o: ['¿QUÉ problema hay que resolver?', '¿CÓMO se resuelve?', '¿Funciona bien?', '¿Cuánto cuesta?'],
    e: 'Análisis = qué. Diseño = cómo.'
  },
  {
    id: 'c2',
    s: 'resol',
    q: '¿En qué fase se decide el lenguaje de programación?',
    o: ['Diseño', 'Análisis', 'Pruebas', 'Mantenimiento'],
    e: 'Una vez definido el «cómo», se decide el lenguaje más adecuado.'
  },
  {
    id: 'c3',
    s: 'resol',
    q: 'El modelo <b>divide y vencerás (top-down)</b> consiste en…',
    o: [
      'Dividir el problema principal en subproblemas más sencillos',
      'Probar el programa a trozos',
      'Escribir primero el final',
      'Repartir el trabajo entre testers'
    ],
    e: 'Se parte el problema grande en problemas pequeños.'
  },
  {
    id: 'c4',
    s: 'resol',
    q: '¿Qué documento se genera en el análisis para evitar conflictos con el cliente?',
    o: [
      'El documento de requisitos',
      'El código fuente',
      'El diagrama UML de clases',
      'El manual de usuario'
    ],
    e: 'Recoge qué información maneja el programa y cómo.'
  },
  {
    id: 'c5',
    s: 'resol',
    q: '¿Por qué no basta con que el programador pruebe su propio código?',
    o: [
      'Tiene una visión sesgada de su programa y no se pone en la piel del usuario',
      'Porque no sabe compilar',
      'Porque las pruebas son opcionales',
      'Porque solo hay errores de sintaxis'
    ],
    e: 'Por eso hacen falta testers que sigan el análisis y el diseño.'
  },
  {
    id: 'c6',
    s: 'resol',
    q: 'Mantenimiento <b>correctivo</b> es el que…',
    o: [
      'Corrige errores no detectados en las pruebas',
      'Mejora el rendimiento o añade funciones',
      'Adapta el programa a otro entorno',
      'Cambia el lenguaje'
    ],
    e: 'Perfectivo mejora/añade; adaptativo cambia de entorno.'
  },
  {
    id: 'c7',
    s: 'resol',
    q: 'Cambiar un programa para que funcione en otro sistema operativo es mantenimiento…',
    o: ['Adaptativo', 'Correctivo', 'Perfectivo', 'Preventivo'],
    e: 'Adaptar a otros entornos = adaptativo.'
  },
  {
    id: 'c8',
    s: 'resol',
    q: '¿Qué provocó el nacimiento de la ingeniería del software?',
    o: ['La crisis del software', 'El invento del bit', 'La aparición de Java', 'El teorema de Pitágoras'],
    e: 'Sin reglas, los programas crecían y eran imposibles de mantener.'
  },
  {
    id: 'c9',
    s: 'resol',
    q: '¿Qué tipo de error detecta el programador mientras escribe, como una instrucción mal escrita?',
    o: ['Errores de sintaxis', 'Errores de requisitos', 'Errores de análisis', 'Errores de mantenimiento'],
    e: 'La sintaxis la detecta y corrige el propio programador al programar.'
  },
  {
    id: 'd1',
    s: 'paradig',
    q: '¿Qué es el código <b>spaghetti</b>?',
    o: [
      'Programación desestructurada que mezcla bucles y saltos y se vuelve confusa',
      'Un programa con muchos módulos',
      'Código muy bien organizado',
      'Un programa orientado a objetos'
    ],
    e: 'Característico de la programación desestructurada.'
  },
  {
    id: 'd2',
    s: 'paradig',
    q: '¿Qué tres estructuras básicas de control usa la programación estructurada?',
    o: [
      'Secuencial, alternativa e iterativa',
      'Secuencial, saltos y objetos',
      'Alternativa, módulos y clases',
      'Iterativa, eventos y saltos'
    ],
    e: 'Secuencial, alternativa (condicionales) e iterativa (bucles).'
  },
  {
    id: 'd3',
    s: 'paradig',
    q: '¿Quién advirtió en 1968 del problema de los saltos GOTO?',
    o: ['Edsger W. Dijkstra', 'James Gosling', 'Robert C. Martin', 'George Boole'],
    e: 'Su carta: «GoTo Statement Considered Harmful».'
  },
  {
    id: 'd4',
    s: 'paradig',
    q: 'En programación modular, una <b>alta cohesión</b> significa…',
    o: [
      'Los elementos de un módulo están muy relacionados (una única tarea)',
      'Los módulos dependen mucho unos de otros',
      'El módulo es muy grande',
      'El módulo no tiene interfaz'
    ],
    e: 'La cohesión se refiere al interior del módulo; interesa alta.'
  },
  {
    id: 'd5',
    s: 'paradig',
    q: 'En programación modular interesa que el <b>acoplamiento</b> sea…',
    o: [
      'Bajo, para evitar que un fallo se propague entre módulos',
      'Alto, para que cooperen más',
      'Siempre total',
      'Da igual'
    ],
    e: 'El acoplamiento es la dependencia entre módulos. El efecto onda propaga fallos.'
  },
  {
    id: 'd6',
    s: 'paradig',
    q: 'En la programación orientada a objetos, los datos y las operaciones sobre ellos…',
    o: [
      'Se encapsulan juntos en un objeto',
      'Se separan en ficheros distintos',
      'Solo se usan con saltos',
      'No existen'
    ],
    e: 'Ejemplo: una Persona con nombre, edad y la operación «es mayor de edad».'
  },
  {
    id: 'd7',
    s: 'paradig',
    q: '¿De qué se crean los objetos en la POO?',
    o: ['De clases', 'De módulos', 'De saltos GOTO', 'De bits'],
    e: 'Las clases son las «plantillas» y los objetos se crean a partir de ellas.'
  },
  {
    id: 'd8',
    s: 'paradig',
    q: '¿Cuál de estos lenguajes es representativo de la programación estructurada?',
    o: ['C', 'Java', 'Python', 'Ruby'],
    e: 'C, Pascal y Modula-2. Los otros son orientados a objetos.'
  },
  {
    id: 'd9',
    s: 'paradig',
    q: '¿Qué paradigma trata partes del código como funciones matemáticas?',
    o: ['Funcional', 'Desestructurado', 'Modular', 'Lógico'],
    e: 'El funcional es de los más asentados tras la POO.'
  },
  {
    id: 'e1',
    s: 'lenguajes',
    q: '¿En qué lenguaje se escribe directamente en binario?',
    o: ['Lenguaje máquina', 'Ensamblador', 'Java', 'JavaScript'],
    e: 'Es el de más bajo nivel que existe.'
  },
  {
    id: 'e2',
    s: 'lenguajes',
    q: '¿Qué hace un <b>ensamblador</b>?',
    o: [
      'Traduce código ensamblador a binario',
      'Traduce Java a bytecode',
      'Ejecuta línea a línea código de alto nivel',
      'Emula un ordenador'
    ],
    e: 'Traduce ensamblador → binario. Es relativamente sencillo.'
  },
  {
    id: 'e3',
    s: 'lenguajes',
    q: '¿Cómo se llama el programa en alto nivel que escribimos, antes de traducirlo?',
    o: ['Código fuente', 'Código objeto', 'Bytecode', 'Binario'],
    e: 'Fuente = lo que escribimos. Objeto = el binario traducido.'
  },
  {
    id: 'e4',
    s: 'lenguajes',
    q: 'Un <b>compilador</b>…',
    o: [
      'Traduce todo el programa a código objeto antes de ejecutarlo',
      'Traduce y ejecuta línea a línea',
      'Es lo mismo que una máquina virtual',
      'Solo funciona con ensamblador'
    ],
    e: 'El intérprete es el que traduce línea a línea al ejecutar.'
  },
  {
    id: 'e5',
    s: 'lenguajes',
    q: '¿Qué ventaja tiene un lenguaje <b>interpretado</b> frente a uno compilado?',
    o: [
      'Es más portable: corre en cualquier plataforma con el intérprete',
      'Es más rápido',
      'No necesita código fuente',
      'Ocupa menos memoria'
    ],
    e: 'Pero es más lento porque traduce en cada ejecución.'
  },
  {
    id: 'e6',
    s: 'lenguajes',
    q: '¿Qué es el <b>bytecode</b> de Java?',
    o: [
      'Un binario para una máquina virtual, no para una CPU real',
      'El código fuente .java',
      'Un comentario especial',
      'El resultado de javadoc'
    ],
    e: 'Es lo que genera <code>javac</code> (ficheros .class).'
  },
  {
    id: 'e7',
    s: 'lenguajes',
    q: '¿Quién traduce el bytecode al binario de la máquina real al ejecutar un programa Java?',
    o: ['La JVM', 'El editor de texto', 'javac', 'Maven'],
    e: 'La JVM (Java Virtual Machine).'
  },
  {
    id: 'e8',
    s: 'lenguajes',
    q: 'La JVM es una máquina virtual de…',
    o: ['Proceso', 'Sistema', 'Hardware', 'Red'],
    e: 'Ejecuta un único proceso y oculta los detalles de la plataforma. VirtualBox es de sistema.'
  },
  {
    id: 'e9',
    s: 'lenguajes',
    q: '¿Cómo se llama el software que permite dividir una máquina física en varias virtuales de sistema?',
    o: ['Hipervisor (monitor de máquina virtual)', 'Compilador', 'Ensamblador', 'Depurador'],
    e: 'Puede ejecutarse directamente en el hardware o sobre un sistema operativo.'
  },
  {
    id: 'f1',
    s: 'herram',
    q: '¿Qué relación hay entre JDK y JRE?',
    o: ['JDK = JRE + biblioteca de clases', 'JRE = JDK + editor', 'Son lo mismo', 'JDK = compilador solo'],
    e: 'El JDK es el paquete completo para desarrollar.'
  },
  {
    id: 'f2',
    s: 'herram',
    q: '¿Qué herramienta del JDK compila el código fuente?',
    o: ['javac', 'java', 'javadoc', 'jdb'],
    e: '<code>java</code> ejecuta, <code>javadoc</code> documenta, <code>jdb</code> depura.'
  },
  {
    id: 'f3',
    s: 'herram',
    q: '¿Qué hace <code>javadoc</code>?',
    o: ['Genera documentación automática', 'Depura el código', 'Compila', 'Ejecuta la JVM'],
    e: 'Genera documentación HTML a partir de los comentarios Javadoc.'
  },
  {
    id: 'f4',
    s: 'herram',
    q: '¿Qué es un IDE?',
    o: [
      'Un entorno que reúne edición, compilación, depuración y ejecución',
      'Un compilador de línea de comandos',
      'Un tipo de máquina virtual',
      'Un lenguaje de programación'
    ],
    e: 'Por debajo llama a las herramientas del JDK. En el curso: Apache NetBeans.'
  },
  {
    id: 'f5',
    s: 'herram',
    q: '¿Qué herramienta de construcción usa el curso y qué fichero la configura?',
    o: ['Maven, pom.xml', 'Ant, build.xml', 'Gradle, build.gradle', 'Make, Makefile'],
    e: 'Maven es la opción por defecto de NetBeans.'
  },
  {
    id: 'f6',
    s: 'herram',
    q: 'En un proyecto Maven, ¿dónde va el código fuente?',
    o: ['src/main/java', 'target', 'src/test/java', 'resources'],
    e: '<code>src/test/java</code> es para las pruebas y <code>target</code> se genera al compilar.'
  },
  {
    id: 'f7',
    s: 'herram',
    q: '¿Para qué sirve la carpeta <code>target</code> de Maven?',
    o: [
      'Guarda lo generado al compilar (.class y .jar) y se puede borrar',
      'Contiene el código fuente',
      'Contiene las imágenes',
      'Contiene el pom.xml'
    ],
    e: 'No se crea a mano: Maven la regenera al compilar.'
  },
  {
    id: 'f8',
    s: 'herram',
    q: '¿Qué tres datos identifican un proyecto en el <code>pom.xml</code>?',
    o: ['groupId, artifactId y version', 'nombre, edad y clase', 'JDK, JRE y JVM', 'src, test y target'],
    e: 'groupId (dominio al revés), artifactId (nombre) y version.'
  },
  {
    id: 'f9',
    s: 'herram',
    q: 'Para trabajar con un proyecto NetBeans recibido, lo correcto es…',
    o: [
      'Descomprimirlo y usar File → Open Project',
      'Copiar los .java sueltos a otro proyecto',
      'Renombrar el pom.xml',
      'Borrar la carpeta src'
    ],
    e: 'Abrir no es importar: se reconoce por su pom.xml.'
  },
  {
    id: 'g1',
    s: 'java',
    q: '¿Quién creó Java y en qué empresa?',
    o: [
      'James Gosling, en Sun Microsystems',
      'Dennis Ritchie, en Bell Labs',
      'Bill Gates, en Microsoft',
      'Linus Torvalds, en Linux'
    ],
    e: 'En 1991; la primera versión pública salió en 1996.'
  },
  {
    id: 'g2',
    s: 'java',
    q: '¿Qué significa <b>WORA</b>?',
    o: [
      'Write once, run anywhere (escribe una vez, ejecuta en cualquier sitio)',
      'Write only, read anywhere',
      'Work once, run always',
      'Web Oriented Run Application'
    ],
    e: 'Es la portabilidad de Java gracias al bytecode y la máquina virtual.'
  },
  {
    id: 'g3',
    s: 'java',
    q: '¿Qué hace el <b>recolector de basura</b> (garbage collection)?',
    o: [
      'Libera automáticamente la memoria de los objetos que ya no se usan',
      'Borra el código fuente viejo',
      'Comprime los .class',
      'Elimina los comentarios'
    ],
    e: 'El programador no gestiona la memoria a mano, a diferencia de C/C++.'
  },
  {
    id: 'g4',
    s: 'java',
    q: 'La edición <b>SE</b> de Java es la…',
    o: ['Estándar', 'Empresarial', 'Micro', 'Segura'],
    e: 'EE = Enterprise (empresarial). ME = Micro (dispositivos limitados).'
  },
  {
    id: 'g5',
    s: 'java',
    q: '¿Qué trajo Java 8 como novedad destacada?',
    o: [
      'Programación funcional (lambdas y Stream API)',
      'El recolector de basura',
      'Los applets',
      'El primer main'
    ],
    e: 'Una de las versiones más importantes.'
  },
  {
    id: 'g6',
    s: 'java',
    q: 'Desde 2018, ¿cada cuánto saca Oracle una versión nueva de Java?',
    o: ['Cada 6 meses', 'Cada 10 años', 'Cada mes', 'Cada 2 años'],
    e: 'Antes podían pasar años entre versiones.'
  },
  {
    id: 'g7',
    s: 'java',
    q: '¿De qué lenguajes se inspiró la sintaxis de Java?',
    o: ['C y C++', 'Python y Ruby', 'JavaScript', 'Pascal y Basic'],
    e: 'La sintaxis se parece, pero las similitudes terminan ahí.'
  },
  {
    id: 'h1',
    s: 'primeros',
    q: '¿Cómo se llama el método donde empieza a ejecutarse un programa Java?',
    o: ['main', 'start', 'init', 'run'],
    e: 'Es público, estático y <code>void</code>.'
  },
  {
    id: 'h2',
    s: 'primeros',
    q: '¿Qué comentario sirve para generar documentación con <code>javadoc</code>?',
    o: ['/** texto */', '// texto', '/* texto */', '# texto'],
    e: 'Los comentarios Javadoc empiezan por <code>/**</code>.'
  },
  {
    id: 'h3',
    s: 'primeros',
    q: '¿Qué ocurre con los comentarios de bloque <b>anidados</b> <code>/* /* */ */</code>?',
    o: [
      'No compilan: el primero termina en el primer */',
      'Funcionan siempre',
      'Se ignoran todos',
      'Solo funcionan en NetBeans'
    ],
    e: 'Un /* termina en el primer */ que encuentre.'
  },
  {
    id: 'h4',
    s: 'primeros',
    q: '¿Qué comando <b>compila</b> HolaMundo.java?',
    o: ['javac HolaMundo.java', 'java HolaMundo', 'javadoc HolaMundo', 'jdb HolaMundo'],
    e: 'Genera HolaMundo.class.'
  },
  {
    id: 'h5',
    s: 'primeros',
    q: '¿Qué comando <b>ejecuta</b> el programa ya compilado HolaMundo?',
    o: ['java HolaMundo', 'javac HolaMundo.java', 'java HolaMundo.java.class', 'run HolaMundo'],
    e: 'Se pone el nombre de la clase, sin extensión.'
  },
  {
    id: 'h6',
    s: 'primeros',
    q: 'Si la clase se llama <code>HolaMundo</code>, el fichero debe llamarse…',
    o: ['HolaMundo.java (con las mismas mayúsculas)', 'holamundo.java', 'Main.java', 'Cualquier nombre'],
    e: 'El nombre debe coincidir exactamente con el de la clase.'
  },
  {
    id: 'h7',
    s: 'primeros',
    q: '¿Qué opción de javac incluye información para poder depurar?',
    o: ['-g', '-d', '-cp', '-nowarn'],
    e: '<code>-d</code> es el directorio de destino, <code>-cp</code> el classpath.'
  },
  {
    id: 'h8',
    s: 'primeros',
    q: 'Según las buenas prácticas, un comentario debe explicar…',
    o: [
      'El porqué del código, no el qué',
      'Cada operación que hace',
      'Solo la fecha',
      'Nada, los comentarios son malos'
    ],
    e: 'Y mantenerse actualizado; un comentario desfasado confunde.'
  },
  {
    id: 'i1',
    s: 'tipos',
    q: '¿Qué significa que Java sea de tipado <b>estático</b>?',
    o: [
      'Una variable mantiene su tipo una vez asignado',
      'Una variable puede cambiar de tipo',
      'No hay tipos',
      'Solo hay números'
    ],
    e: 'Java es de tipado estático y fuerte.'
  },
  {
    id: 'i2',
    s: 'tipos',
    q: '¿Cuántos bits ocupa un <code>int</code>?',
    o: ['32', '8', '16', '64'],
    e: 'byte 8, short 16, int 32, long 64.'
  },
  {
    id: 'i3',
    s: 'tipos',
    q: '¿Cuál es el rango de un <code>byte</code>?',
    o: ['-128 a 127', '0 a 255', '-32768 a 32767', '-100 a 100'],
    e: '8 bits con signo.'
  },
  {
    id: 'i4',
    s: 'tipos',
    q: "¿Qué tipo se usa para guardar <b>un solo carácter</b> como <code>'J'</code>?",
    o: ['char', 'String', 'byte', 'boolean'],
    e: 'Los char van entre comillas simples.'
  },
  {
    id: 'i5',
    s: 'tipos',
    q: "¿Qué diferencia hay entre <code>3</code> y <code>'3'</code>?",
    o: [
      'El primero es un entero y el segundo un carácter',
      'Ninguna',
      'El primero es un String',
      'El segundo es un boolean'
    ],
    e: 'Son tipos distintos con representaciones distintas.'
  },
  {
    id: 'i6',
    s: 'tipos',
    q: '¿Cuántos bits ocupa un <code>char</code> en Java?',
    o: ['16 (Unicode)', '8', '32', '1'],
    e: 'Los 127 valores del ASCII clásico están dentro de ese conjunto.'
  },
  {
    id: 'i7',
    s: 'tipos',
    q: '¿Qué valores puede tener un <code>boolean</code>?',
    o: ['true o false', '0 o 1', 'yes o no', 'Cualquier número'],
    e: 'El nombre honra a George Boole.'
  },
  {
    id: 'i8',
    s: 'tipos',
    q: '¿Qué diferencia a <code>float</code> de <code>double</code>?',
    o: ['float usa 32 bits y double 64 bits', 'float es entero', 'double usa 32 bits', 'No hay diferencia'],
    e: 'Ambos son reales en coma flotante; double tiene más precisión.'
  },
  {
    id: 'i9',
    s: 'tipos',
    q: '¿Qué conversión es <b>implícita</b> (automática) en Java?',
    o: ['int a long', 'long a int', 'double a int', 'double a float'],
    e: 'Solo si la variable receptora tiene más precisión.'
  },
  {
    id: 'i10',
    s: 'tipos',
    q: '¿Qué resultado da <code>(byte) 130</code>?',
    o: ['-126', '130', '126', '-130'],
    e: 'El rango del byte es cíclico: tras 127 viene -128; 130 es -126.'
  },
  {
    id: 'i11',
    s: 'tipos',
    q: '<code>int n = 260; byte b = (byte) n;</code> ¿cuánto vale b?',
    o: ['4', '260', '-4', '0'],
    e: '260 = 256 × 1 + 4: el resto es 4.'
  },
  {
    id: 'j1',
    s: 'operadores',
    q: '¿Qué valor tiene <code>35 / 9</code> con enteros?',
    o: ['3', '3.88', '4', '3.9'],
    e: 'División entera: da el cociente, sin decimales.'
  },
  {
    id: 'j2',
    s: 'operadores',
    q: '¿Qué valor tiene <code>35 % 9</code>?',
    o: ['8', '3', '4', '26'],
    e: '35 = 9 × 3 + 8.'
  },
  {
    id: 'j3',
    s: 'operadores',
    q: '¿De qué tipo es el resultado de <code>8.0 / 6</code>?',
    o: ['double', 'int', 'float', 'long'],
    e: 'Gana el operando de mayor precisión.'
  },
  {
    id: 'j4',
    s: 'operadores',
    q: '¿Qué muestra <code>System.out.println(8 / 6);</code>?',
    o: ['1', '1.3333333333333333', '1.33', '2'],
    e: 'Dos int: resultado int, sin decimales.'
  },
  {
    id: 'j5',
    s: 'operadores',
    q: '<code>int a = 5; int b = a++;</code> ¿Cuánto valen a y b?',
    o: ['a = 6, b = 5', 'a = 6, b = 6', 'a = 5, b = 6', 'a = 5, b = 5'],
    e: 'Post-incremento: usa el valor y luego incrementa.'
  },
  {
    id: 'j6',
    s: 'operadores',
    q: '<code>int a = 5; int b = ++a;</code> ¿Cuánto valen a y b?',
    o: ['a = 6, b = 6', 'a = 6, b = 5', 'a = 5, b = 6', 'a = 7, b = 7'],
    e: 'Pre-incremento: incrementa y luego usa.'
  },
  {
    id: 'j7',
    s: 'operadores',
    q: '<code>x += 4</code> equivale a…',
    o: ['x = x + 4', 'x = 4', 'x = x * 4', 'x + x = 4'],
    e: 'Asignación compuesta.'
  },
  {
    id: 'j8',
    s: 'operadores',
    q: '¿Qué da <code>6 + 4 / 2</code>?',
    o: ['8', '5', '10', '2'],
    e: 'Primero la división (2), luego la suma.'
  },
  {
    id: 'j9',
    s: 'operadores',
    q: '¿Qué da <code>(33 + 3 * 4) / 5</code>?',
    o: ['9', '15', '8', '7'],
    e: '3 * 4 = 12; 33 + 12 = 45; 45 / 5 = 9.'
  },
  {
    id: 'j10',
    s: 'operadores',
    q: '¿Cuándo es verdadero <code>a &amp;&amp; b</code>?',
    o: ['Solo si ambos son verdaderos', 'Si alguno lo es', 'Si son distintos', 'Siempre'],
    e: '<code>||</code> es verdadero si alguno lo es.'
  },
  {
    id: 'j11',
    s: 'operadores',
    q: '¿Qué hace el operador <code>^</code> en Java con dos booleanos?',
    o: [
      'XOR: verdadero solo si son distintos',
      'Eleva a una potencia',
      'Es la conjunción &&',
      'Niega el valor'
    ],
    e: 'En Java <b>no</b> es la potencia: para eso se usa <code>Math.pow</code>.'
  },
  {
    id: 'j12',
    s: 'operadores',
    q: '¿Qué operador tiene mayor prioridad: <code>*</code> o <code>+</code>?',
    o: ['*', '+', 'Igual prioridad', 'Depende del tipo'],
    e: '<code>* / %</code> antes que <code>+ -</code>.'
  },
  {
    id: 'j13',
    s: 'operadores',
    q: '¿Qué devuelve <code>Math.pow(2, 6)</code>?',
    o: ['Dos elevado a 6 (64)', '12', '26', 'Un número aleatorio'],
    e: 'Math.pow(base, exponente).'
  },
  {
    id: 'j14',
    s: 'operadores',
    q: '¿Qué hace <code>Math.sqrt(64)</code>?',
    o: ['La raíz cuadrada (8)', 'El cuadrado (4096)', 'El valor absoluto', 'Redondea'],
    e: 'Raíz cuadrada.'
  },
  {
    id: 'k1',
    s: 'variables',
    q: '¿Qué es una <b>constante</b>?',
    o: [
      'Un dato cuyo valor no cambia durante la ejecución',
      'Una variable que cambia mucho',
      'Un comentario',
      'Un tipo de dato'
    ],
    e: 'En Java se declara con <code>final</code>.'
  },
  {
    id: 'k2',
    s: 'variables',
    q: '¿Qué modificador convierte una variable en constante?',
    o: ['final', 'static', 'const', 'var'],
    e: '<code>final double PI = 3.141592;</code>'
  },
  {
    id: 'k3',
    s: 'variables',
    q: '¿Cómo se escriben las constantes por convención?',
    o: [
      'En MAYÚSCULAS (UPPER_SNAKE_CASE)',
      'En lowerCamelCase',
      'Con la primera en mayúscula',
      'Todo da igual'
    ],
    e: 'Ejemplo: <code>MAX_INTENTOS</code>.'
  },
  {
    id: 'k4',
    s: 'variables',
    q: '¿Cuál es un identificador de variable <b>válido y recomendable</b>?',
    o: ['precioConIva', '5x', 'class', 'precio-total'],
    e: '<code>5x</code> empieza por número, <code>class</code> es reservada y <code>-</code> es un operador.'
  },
  {
    id: 'k5',
    s: 'variables',
    q: '¿Qué estilo se recomienda para los nombres de variables?',
    o: ['lowerCamelCase', 'snake_case', 'UPPER_CASE', 'Cualquiera'],
    e: 'Ejemplo: <code>edadEmpleado</code>.'
  },
  {
    id: 'k6',
    s: 'variables',
    q: '<code>salario</code>, <code>Salario</code> y <code>SALARIO</code> son…',
    o: ['Tres identificadores distintos', 'El mismo identificador', 'Error de compilación', 'Constantes'],
    e: 'Java distingue mayúsculas de minúsculas.'
  },
  {
    id: 'k7',
    s: 'variables',
    q: '¿Qué ocurre con <code>var x;</code> (sin valor)?',
    o: ['Error: Java no puede inferir el tipo', 'Se crea un int', 'Se crea un String', 'Vale null'],
    e: '<code>var</code> necesita un valor en la misma línea: <code>var x = 8;</code>'
  },
  {
    id: 'k8',
    s: 'variables',
    q: 'Una variable local declarada dentro de un bloque <code>{ }</code>…',
    o: [
      'Solo existe dentro de ese bloque',
      'Existe en todo el programa',
      'Puede ser static',
      'Se guarda en el disco'
    ],
    e: 'Se destruye al terminar el bloque.'
  },
  {
    id: 'k9',
    s: 'variables',
    q: '¿Por qué es mala idea llamar <code>edadInt</code> a una variable?',
    o: [
      'Porque incluye el tipo en el nombre (redundancia)',
      'Porque Java lo prohíbe',
      'Porque es demasiado largo',
      'Porque empieza por minúscula'
    ],
    e: 'Las normas piden no incluir el tipo en el nombre.'
  },
  {
    id: 'l1',
    s: 'es',
    q: '¿Qué clase se usa para leer del teclado con el «método ganador»?',
    o: ['Scanner', 'Printer', 'Reader2', 'Keyboard'],
    e: 'Hay que importar <code>java.util.Scanner</code>.'
  },
  {
    id: 'l2',
    s: 'es',
    q: '¿Qué método de Scanner lee una línea completa de texto?',
    o: ['nextLine()', 'nextInt()', 'nextDouble()', 'next()'],
    e: '<code>next()</code> lee una palabra; nextInt un entero; nextDouble un decimal.'
  },
  {
    id: 'l3',
    s: 'es',
    q: '¿Qué objeto representa el teclado?',
    o: ['System.in', 'System.out', 'System.err', 'System.key'],
    e: 'out = pantalla, err = errores.'
  },
  {
    id: 'l4',
    s: 'es',
    q: '¿Hace falta <code>import</code> para usar <code>System.out.println</code>?',
    o: [
      'No, System está en java.lang, que se carga solo',
      'Sí, java.util.*',
      'Sí, java.io.*',
      'Solo en NetBeans'
    ],
    e: 'Por eso funciona el «Hola, mundo» sin importar nada.'
  },
  {
    id: 'l5',
    s: 'es',
    q: '¿Para qué sirve <code>teclado.close()</code>?',
    o: [
      'Cierra el objeto Scanner (se recomienda hacerlo)',
      'Cierra el programa',
      'Borra la variable',
      'Limpia la pantalla'
    ],
    e: 'Los apuntes lo recomiendan encarecidamente.'
  },
  {
    id: 'l6',
    s: 'es',
    q: '¿Qué método de Scanner lee un número con decimales?',
    o: ['nextDouble()', 'nextInt()', 'nextLine()', 'nextDecimal()'],
    e: 'nextInt() solo enteros.'
  },
  {
    id: 'n1',
    s: 'intro',
    q: '¿Por qué se dice que el ordenador es una <b>máquina síncrona</b>?',
    o: [
      'Porque sincroniza sus operaciones con un reloj interno que envía pulsos',
      'Porque solo ejecuta un programa a la vez',
      'Porque está siempre conectado a Internet',
      'Porque usa el sistema decimal'
    ],
    e: 'Un reloj interno envía pulsos que sincronizan las operaciones y los componentes.'
  },
  {
    id: 'n2',
    s: 'herram',
    q: '¿Qué variable de entorno debe apuntar al directorio <code>bin</code> del JDK?',
    o: ['PATH', 'CLASSPATH', 'JAVA_HOME_BIN', 'JRE'],
    e: 'Si no, hay que compilar siempre desde ese directorio. CLASSPATH solo hace falta en versiones antiguas.'
  },
  {
    id: 'n3',
    s: 'herram',
    q: '¿Cuál de estas es una distribución gratuita y de confianza del JDK citada en los apuntes?',
    o: ['Eclipse Adoptium (Temurin)', 'Cualquier JDK de una web desconocida', 'Microsoft Word', 'Notepad++'],
    e: 'También Oracle, OpenJDK, el OpenJDK de Microsoft y Amazon Corretto.'
  },
  {
    id: 'n4',
    s: 'herram',
    q: 'En NetBeans, ¿qué atajo ejecuta el proyecto?',
    o: ['F6', 'F11', 'Shift + F11', 'Ctrl + F8'],
    e: 'F6 = Run Project; Shift+F6 = solo el fichero; F11 = compilar; Shift+F11 = Clean and Build.'
  },
  {
    id: 'n5',
    s: 'herram',
    q: '¿Qué es lo correcto para trabajar con un proyecto Maven recibido?',
    o: [
      'Descomprimirlo y abrirlo con File → Open Project',
      'Copiar los .java sueltos a otro proyecto',
      'Borrar el pom.xml',
      'Importar solo la carpeta target'
    ],
    e: 'Abrir no es importar: NetBeans lo reconoce por el pom.xml.'
  },
  {
    id: 'n6',
    s: 'java',
    q: 'A partir de qué versión se unieron el JRE y el JDK en un único paquete?',
    o: ['Java 11', 'Java 1.4', 'Java 8', 'Java 26'],
    e: 'Desde Java 11 el JRE viene incluido en el JDK.'
  },
  {
    id: 'n7',
    s: 'java',
    q: '¿Qué hace el <b>recolector de basura</b> de Java?',
    o: [
      'La máquina virtual libera la memoria de los objetos que ya no se usan',
      'Borra los ficheros temporales del disco',
      'Elimina los comentarios',
      'Corrige errores de sintaxis'
    ],
    e: 'En C/C++ eso lo hace el programador a mano.'
  },
  {
    id: 'n8',
    s: 'primeros',
    q: '¿Qué comando genera documentación HTML a partir de los comentarios Javadoc?',
    o: ['javadoc -d doc Rectangulo.java', 'javac -d doc Rectangulo.java', 'java -jar doc', 'jdb doc'],
    e: '<code>-d</code> indica la carpeta de destino (aquí <code>doc</code>).'
  },
  {
    id: 'n9',
    s: 'tipos',
    q: 'Java es un lenguaje…',
    o: [
      'De tipado estático y fuerte',
      'De tipado dinámico y débil',
      'De tipado dinámico y fuerte',
      'De tipado estático y débil'
    ],
    e: 'Estático: la variable mantiene su tipo. Fuerte: se comprueba que cada tipo se use como debe.'
  },
  {
    id: 'n10',
    s: 'operadores',
    q: '¿Qué hace <code>Math.log10(x)</code>?',
    o: ['Logaritmo decimal', 'Logaritmo neperiano', 'Raíz cuadrada', 'Número aleatorio'],
    e: '<code>Math.log</code> es el neperiano; <code>Math.log10</code>, el decimal.'
  }
];
