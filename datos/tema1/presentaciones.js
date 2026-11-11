/* ============================================================
   Presentaciones (diapositivas) del Tema 1
   Una por apartado. Cada diapositiva es un objeto con título y contenido HTML.
   ============================================================ */
var DECKS = {
  intro: [
    {
      h: '¿Qué hace un ordenador?',
      b: '<p>Un ordenador es <b>tonto pero muy obediente</b>: hace exactamente lo que le dicen, instrucción a instrucción, y no se cansa. Esa lista de instrucciones se llama <b>programa</b>.</p><p class="an">Como una receta de cocina: el cocinero (ordenador) no inventa nada, solo sigue los pasos.</p>'
    },
    {
      h: 'Solo entiende 0 y 1',
      b: '<p>Por dentro es electrónico: o pasa corriente (<b>1</b>) o no pasa (<b>0</b>). Cada 0 o 1 se llama <b>bit</b>.</p><p>Todo lo que ves (fotos, canciones, textos, programas) está guardado como una montaña de ceros y unos. Por eso hay que <b>convertir todo a binario</b> (lo veremos en el apartado 2).</p>'
    },
    {
      h: 'Programa = instrucciones + datos',
      b: '<p>Un <b>programa</b> es un conjunto de instrucciones <b>ordenadas</b> que el ordenador entiende, más los <b>datos</b> que esas instrucciones usan, para que al ejecutarlo dé un resultado.</p><p>Cada programa resuelve un problema: calcular nóminas, navegar por Internet (Chrome, Firefox…), mandar correo (Thunderbird, Outlook)…</p>'
    },
    {
      h: 'Algoritmo: el plan antes del programa',
      b: '<p>Un <b>algoritmo</b> es un conjunto <b>ordenado y finito</b> de operaciones que permite hallar la solución a un problema. Al implementarlo en un lenguaje, sale un programa.</p><p class="an">Algoritmo = la receta escrita en papel. Programa = la receta traducida a un idioma que entiende la máquina.</p>'
    },
    {
      h: 'Las 4 características del algoritmo',
      b: '<ul><li><b>Preciso:</b> dice el orden exacto de los pasos.</li><li><b>Definido:</b> si lo sigues dos veces con los mismos datos, sale lo mismo.</li><li><b>Finito:</b> tiene un número determinado de pasos (¡termina!).</li><li><b>Independiente</b> del lenguaje en el que se programe luego.</li></ul><p>Ejemplo de los apuntes: pedir un número N (edad); si N ≥ 18 es adulto; si N &lt; 18 es menor.</p>'
    },
    {
      h: 'El ordenador es una máquina síncrona',
      b: '<p>Los ordenadores se hacen para realizar tareas siguiendo un conjunto de <b>instrucciones finitas</b> (un programa). Esas tareas se cargan en la <b>memoria principal</b>, a la que accede directamente la <b>CPU</b> para tomar las instrucciones y los datos.</p><p>El ordenador trabaja <b>sincronizando</b> sus operaciones con un <b>reloj interno</b> que envía pulsos. Por eso se dice que es una <b>máquina síncrona</b>.</p><p class="an">El reloj es como el director de una orquesta: marca el ritmo para que todos los componentes vayan a la vez.</p>'
    }
  ],
  codif: [
    {
      h: 'Sistemas de numeración posicionales',
      b: '<p>El decimal (el nuestro) y el binario (el del ordenador) son <b>posicionales</b>: tienen unos <b>símbolos</b> (su número es la <b>base</b>), unas <b>reglas</b> y el valor de cada símbolo depende de su <b>posición</b>.</p><p class="an">Con los dígitos 1 y 3 haces 31 y 13: mismos símbolos, distinta posición, distinto valor.</p>'
    },
    {
      h: 'Binario: base 2',
      b: '<p>Solo dos símbolos: <b>0 y 1</b>. Se cuenta como en decimal: cuando se acaban los símbolos, se añade un dígito a la izquierda.</p><p><code>0, 1, 10, 11, 100, 101…</code> y así, el 20 decimal es <code>10100</code>.</p><p class="an">Como un cuentakilómetros que solo tiene los números 0 y 1 en cada rueda.</p>'
    },
    {
      h: 'Binario → decimal',
      b: '<p>1) Numera las posiciones desde <b>0 por la derecha</b>. 2) Multiplica cada dígito por 2<sup>posición</sup>. 3) Suma.</p><p><code>10011</code> = 1·16 + 0·8 + 0·4 + 1·2 + 1·1 → 16 + 0 + 0 + 2 + 1 = <b>19</b></p><p class="an">Las ruedas valen 1, 2, 4, 8, 16, 32… Suma las que están a 1.</p>'
    },
    {
      h: 'Decimal → binario',
      b: '<p>Divide entre 2 una y otra vez. Cada <b>resto</b> es un dígito. Al final lees del <b>último cociente hacia el primer resto</b>.</p><p>19 ÷ 2 = 9 resto <b>1</b> · 9 ÷ 2 = 4 resto <b>1</b> · 4 ÷ 2 = 2 resto <b>0</b> · 2 ÷ 2 = 1 resto <b>0</b> · último cociente <b>1</b> → <code>10011</code></p>'
    },
    {
      h: 'Octal y hexadecimal',
      b: '<p>El binario es larguísimo para las personas, así que se inventaron dos «atajos»: <b>octal</b> (base 8, símbolos 0-7) y <b>hexadecimal</b> (base 16, símbolos 0-9 y A-F donde A=10, B=11, C=12, D=13, E=14, F=15).</p><p>La conversión con el decimal se hace igual que en binario, pero con base 8 o 16.</p>'
    },
    {
      h: 'Código ASCII: las letras también son números',
      b: '<p>Las letras se guardan en binario con una tabla llamada <b>ASCII</b>: cada carácter usa <b>8 bits</b>.</p><p><code>A</code> = 01000001 (65) · <code>a</code> = 01100001</p><p>«Hola» = <code>01001000 01101111 01101100 01100001</code></p>'
    }
  ],
  resol: [
    {
      h: 'Programar no es solo escribir código',
      b: '<p>Saber un lenguaje no es lo esencial. Un programador es alguien capaz de <b>encontrar soluciones a problemas</b> diseñando e implementando programas.</p>'
    },
    {
      h: 'Ingeniería del software',
      b: '<p>Antes se programaba sin reglas. Los programas crecían, y se volvían difíciles de entender, reparar y mantener: fue la <b>crisis del software</b>. De ahí nace la <b>ingeniería del software</b>: modelos y paradigmas con normas de organización.</p>'
    },
    {
      h: 'Ciclo de vida: las fases',
      b: '<p>Como en otras ingenierías, el desarrollo se divide en fases (<b>ciclo de vida</b>):</p><p><b>Análisis → Diseño → Codificación → Pruebas → Mantenimiento</b></p><p class="an">Construir una casa: primero entiendes qué quiere el cliente, luego haces los planos, luego construyes, luego compruebas que no hay fugas y después reparas lo que falle.</p>'
    },
    {
      h: 'Análisis y diseño',
      b: '<p><b>Análisis:</b> ¿<b>QUÉ</b> problema hay que resolver? Se entiende el problema y se escribe un <b>documento de requisitos</b>.</p><p><b>Diseño:</b> ¿<b>CÓMO</b> se resuelve? Se usa <b>divide y vencerás</b> (<b>top-down</b>): partir el problema grande en subproblemas pequeños. Aquí también se elige el <b>lenguaje</b>.</p>'
    },
    {
      h: 'Codificación y pruebas',
      b: '<p><b>Codificación:</b> las clases se convierten en <b>código fuente</b> («picar código»). En este curso, con clases en Java; en POO se usan diagramas <b>UML</b>.</p><p><b>Pruebas:</b> imprescindibles. Los errores básicos son de <b>sintaxis</b>. Probar tú solo no basta (ves tu programa con ojos sesgados): hacen falta <b>testers</b>. Tipos: unitarias, de integración, funcionales y de aceptación.</p>'
    },
    {
      h: 'Mantenimiento y papel del programador',
      b: '<p><b>Correctivo:</b> arregla errores que se escaparon. <b>Perfectivo:</b> mejora rendimiento o añade funciones. <b>Adaptativo:</b> adapta el programa a otros entornos.</p><p>El programador codifica según las especificaciones, pero en la práctica «sirve para un roto y un descosido»: hace un poco de todo.</p>'
    }
  ],
  paradig: [
    {
      h: '¿Por qué hacen falta estilos?',
      b: '<p>Al principio cada programador escribía a su manera, con bucles, condicionales y saltos (<code>GOTO</code>) por todas partes. Al crecer, el código era un caos. Eso, junto a errores de planificación, provocó la <b>crisis del software de los años 70</b>.</p><p>Dijkstra lo denunció en 1968 con la carta «GoTo Statement Considered Harmful».</p>'
    },
    {
      h: 'Desestructurada (1950–1970)',
      b: '<p>Mezcla bucles y saltos hasta que funciona. Farragosa y propensa a errores. Se llama <b>código spaghetti</b>.</p><p>Lenguajes: Fortran, Cobol, Simula, Basic. Hoy es una <b>mala práctica</b>.</p><p class="an">Un plato de espaguetis: no hay manera de encontrar dónde empieza y dónde acaba cada hilo.</p>'
    },
    {
      h: 'Estructurada (1970–1990)',
      b: '<p>Propuesta por Dijkstra. Se basa en tres <b>estructuras básicas de control</b>: <b>secuencial</b>, <b>alternativa</b> e <b>iterativa</b>. También se llaman lenguajes imperativos o de tercera generación.</p><p>Lenguajes: C, Pascal, Modula-2.</p>'
    },
    {
      h: 'Modular (1970–1990, a la vez)',
      b: '<p>Dividir un programa complejo en <b>módulos</b> más simples, independientes pero que cooperan. Cada módulo: <b>finalidad</b> clara, <b>límites</b> y <b>interfaz</b> sencilla.</p><p><b>Cohesión:</b> relación entre los elementos de un módulo (interesa <b>alta</b>). <b>Acoplamiento:</b> dependencia entre módulos (interesa <b>bajo</b>, para evitar el efecto onda).</p>'
    },
    {
      h: 'Orientada a objetos (desde los 90)',
      b: '<p>Los datos y las operaciones sobre ellos van <b>juntos en un objeto</b> (encapsulación). Ejemplo: nombre y edad de una persona + comprobar si es mayor de edad → objeto <code>Persona</code>.</p><p>Se escribe en <b>clases</b> y de ellas salen los <b>objetos</b>. Es el paradigma más extendido. <b>Java</b> es orientado a objetos: no se puede programar solo estructurado y modular.</p>'
    },
    {
      h: 'Y más paradigmas',
      b: '<p>Dirigida por eventos (desde ~2000, convive con la POO), declarativa, orientada a aspectos (AOP), <b>funcional</b> (partes del código como funciones matemáticas) y lógica.</p><p>Los paradigmas <b>no son excluyentes</b>: uno puede usar principios de otros.</p>'
    }
  ],
  lenguajes: [
    {
      h: 'Un lenguaje de programación',
      b: '<p>Es un conjunto de símbolos que se combinan con una <b>sintaxis estricta</b> para mandar instrucciones a la CPU. Se clasifican por <b>nivel de abstracción</b> (alto/bajo) y por <b>cómo se traducen</b> (interpretado, compilado, ensamblado).</p>'
    },
    {
      h: 'Bajo nivel: cerca de la máquina',
      b: '<p><b>Lenguaje máquina:</b> directamente en binario (<code>110100100101…</code>). Casi imposible para humanos.</p><p><b>Ensamblador:</b> las mismas instrucciones con palabras (<code>ADD D1, D2</code>). Depende del <b>hardware</b>: un programa para un Intel Core i5 no corre en un iMac ni en una tablet Android sin cambios grandes.</p>'
    },
    {
      h: 'Alto nivel: cerca de las personas',
      b: '<p>Se parecen al lenguaje natural, pero con sintaxis y semántica estrictas. El ordenador no los entiende directamente: hay que <b>traducirlos</b> a binario.</p><p class="an">Tú hablas español, la máquina «binario». El traductor es el ensamblador, el compilador o el intérprete.</p>'
    },
    {
      h: 'Ensamblador, compilador, intérprete',
      b: '<ul><li><b>Ensamblador:</b> traduce ensamblador → binario (sencillo).</li><li><b>Compilador:</b> traduce <b>todo</b> el código fuente a código objeto <b>antes</b> de ejecutar. Se compila una vez.</li><li><b>Intérprete:</b> traduce y ejecuta <b>línea a línea</b> mientras corre.</li></ul>'
    },
    {
      h: 'Compilado vs interpretado',
      b: '<p><b>Compilado (C/C++):</b> más rápido, pero hay que recompilar para cada hardware/sistema.</p><p><b>Interpretado (JavaScript):</b> más lento (traduce cada vez) pero más <b>portable</b>: corre donde haya intérprete.</p>'
    },
    {
      h: 'El caso de Java: semicompilación',
      b: '<p>Java quiere ser portable <b>y</b> eficiente. Así que: el código fuente <code>.java</code> se compila a <b>bytecode</b> (<code>.class</code>), un binario para una <b>máquina virtual</b>. La <b>JVM</b> traduce ese bytecode al binario de la máquina real al ejecutar.</p><p>Compilas una vez, y corre en cualquier sitio que tenga JVM.</p>'
    },
    {
      h: 'Máquinas virtuales',
      b: '<p>Un programa que <b>emula un ordenador</b>. Dos tipos:</p><p><b>De sistema</b> (VirtualBox, VMWare, VirtualPC): varios sistemas operativos en un mismo equipo; las gestiona un <b>hipervisor</b>.</p><p><b>De proceso:</b> ejecutan un solo proceso, como la <b>JVM</b> (y .NET).</p>'
    }
  ],
  herram: [
    {
      h: 'Lo que necesitas para programar en Java',
      b: '<p>Dos cosas: el <b>JDK</b> y un <b>IDE o editor</b>.</p>'
    },
    {
      h: 'El JDK',
      b: '<p><b>JDK = JRE + biblioteca de clases.</b> Incluye: biblioteca de clases, <b>JVM</b> (<code>java</code>), compilador <code>javac</code>, desensamblador <code>javap</code>, depurador <code>jdb</code> y generador de documentación <code>javadoc</code>.</p><p>No incluye editor de texto. Variable <b>PATH</b> → directorio <code>bin</code> del JDK.</p>'
    },
    {
      h: 'Editor de texto vs IDE',
      b: '<p><b>Editor:</b> texto plano, UTF-8 y resaltado de sintaxis (Notepad++, Sublime…). Word no sirve.</p><p><b>IDE:</b> edición + compilación + depuración + ejecución en una sola interfaz. Pesados: IntelliJ, Eclipse, NetBeans. Ligeros: BlueJ, Geany. <b>En el curso: Apache NetBeans.</b></p>'
    },
    {
      h: 'Proyectos y build tools',
      b: '<p>Un <b>proyecto</b> es una carpeta con estructura conocida: código, recursos, pruebas y un fichero de configuración.</p><p>Herramientas de construcción: <b>Ant</b> (<code>build.xml</code>), <b>Maven</b> (<code>pom.xml</code>, la del curso), <b>Gradle</b> (<code>build.gradle</code>, Android).</p>'
    },
    {
      h: 'Estructura de un proyecto Maven',
      b: '<p><code>pom.xml</code> (configuración) · <code>src/main/java</code> (código) · <code>src/main/resources</code> · <code>src/test/java</code> (pruebas) · <code>target</code> (lo genera Maven al compilar: <code>.class</code> y <code>.jar</code>; se puede borrar).</p><p>El <code>pom.xml</code> identifica el proyecto con <b>groupId</b>, <b>artifactId</b> y <b>version</b>.</p>'
    },
    {
      h: 'Dónde descargar el JDK',
      b: '<p>El <b>JRE</b> son los componentes para compilar y ejecutar (JVM, <code>javac</code>, <code>javap</code>, <code>jdb</code>, <code>javadoc</code>). El JRE <b>más</b> la biblioteca de clases es el <b>JDK</b>.</p><p>Descargas gratuitas y de confianza: el sitio web de <b>Oracle</b>, <b>OpenJDK</b> (open-source), <b>Eclipse Adoptium (Temurin)</b>, el <b>OpenJDK de Microsoft</b> (pensado para la nube, como Azure) y <b>Amazon Corretto</b> (mantenido por AWS). El resto de sitios conviene revisarlos con cautela.</p><p><b>PATH</b> debe apuntar al directorio <code>bin</code> del JDK (si no, hay que compilar siempre desde ese directorio). <b>CLASSPATH</b> solo hace falta en versiones antiguas.</p>'
    },
    {
      h: 'Crear un proyecto en NetBeans',
      b: '<p>1) <b>File → New Project</b>. 2) Categoría <b>Java with Maven</b>, proyecto <b>Java Application</b>, <b>Next</b>. 3) Pon el nombre (<i>Project Name</i>), la ubicación y revisa el <i>Group Id</i> y el paquete. <b>Finish</b>.</p><p>NetBeans crea la estructura de carpetas, el <code>pom.xml</code> y una clase principal con su <code>main</code>. Ventanas: <b>Projects</b> (vista lógica) y <b>Files</b> (carpetas reales del disco).</p><ul><li>Ejecutar el proyecto: <code>F6</code> (Run Project)</li><li>Ejecutar solo el fichero abierto: <code>Shift + F6</code></li><li>Compilar sin ejecutar: <code>F11</code> (Build Project)</li><li>Borrar lo compilado y recompilar: <code>Shift + F11</code> (Clean and Build)</li></ul><p><b>Abrir no es importar:</b> para usar un proyecto recibido, descomprímelo y ábrelo con <b>File → Open Project</b>; no copies los <code>.java</code> sueltos a otro proyecto.</p>'
    }
  ],
  java: [
    {
      h: 'Qué es Java',
      b: '<p>Un lenguaje de programación creado en <b>1991</b> por <b>James Gosling</b> en <b>Sun Microsystems</b> (primera versión pública en 1996). Se inspira en C y C++, pero solo se parecen en la sintaxis.</p>'
    },
    {
      h: 'Ediciones y versiones',
      b: '<p>Ediciones: <b>SE</b> (estándar), <b>EE</b> (empresarial), <b>ME</b> (micro, para dispositivos limitados). Del JDK 1.0 a J2SE y luego «Java SE 6, 7…».</p><p>2010: Oracle compra Sun. <b>Java 8</b> trajo programación funcional (lambdas y Stream API). <b>Java 9</b>, módulos (Jigsaw). Desde 2018, una versión nueva <b>cada 6 meses</b>.</p>'
    },
    {
      h: 'Características principales',
      b: '<ul><li>De propósito general, concurrente, <b>orientado a objetos</b>, basado en clases.</li><li><b>Portable (WORA):</b> «write once, run anywhere», gracias al bytecode y la máquina virtual.</li><li><b>Recolector de basura:</b> la máquina virtual libera la memoria de los objetos que ya no se usan.</li><li>Muy popular: aplicaciones web cliente-servidor, móviles, sistemas empotrados.</li></ul>'
    },
    {
      h: 'Más historia de Java',
      b: '<p>El nombre de Java no se sabe con certeza de dónde sale: según el propio Gosling, se eligió <b>al azar</b> de una lista de palabras. Gran parte del código tiene licencia <b>GNU/GPL</b>; existen alternativas como <b>GNU Classpath</b>, totalmente libre.</p><p>Desde <b>Java 11</b>, el JRE y el JDK, que antes se distribuían por separado, vienen en un único paquete: el JDK. El uso de <b>applets</b> (muy extendido en los 90) se descartó a partir de <b>Java 26</b> por problemas de compatibilidad y seguridad y por la popularidad de JavaScript.</p>'
    }
  ],
  primeros: [
    {
      h: 'La estructura mínima de un programa',
      b: '<p>Todo el código va dentro de una <b>clase</b>. Al menos una debe tener el método <code>main</code>, donde empieza la ejecución: <b>público</b>, <b>estático</b> y sin valor de retorno (<code>void</code>).</p><pre class="code" data-hl>public class HolaMundo {\n    public static void main(String[] args) {\n        System.out.println("Hola, mundo!");\n    }\n}</pre>'
    },
    {
      h: 'Los comentarios',
      b: '<p>El compilador los ignora. Sirven para explicar el código a las personas.</p><ul><li><code>// texto</code>: una línea.</li><li><code>/* texto */</code>: bloque (varias líneas). No se pueden anidar.</li><li><code>/** texto */</code>: Javadoc; con <code>@author</code>, <code>@version</code>, <code>@param</code>, <code>@return</code>.</li></ul><p>Buena práctica: explica el <b>porqué</b>, no el qué.</p>'
    },
    {
      h: 'Compilar y ejecutar a mano',
      b: '<p>1) Guarda el código en <code>HolaMundo.java</code> (el nombre = el de la clase, con las mismas mayúsculas).</p><p>2) <code>javac HolaMundo.java</code> → crea <code>HolaMundo.class</code> (bytecode).</p><p>3) <code>java HolaMundo</code> → muestra <code>Hola, mundo!</code></p>'
    },
    {
      h: 'Opciones de javac y jdb',
      b: '<p><code>javac [opciones] ficheros</code>: <code>-cp</code> (dónde buscar clases), <code>-d</code> (destino de los .class), <code>-g</code> (info de depuración), <code>-nowarn</code>, <code>-verbose</code>.</p><p>El depurador <code>jdb</code> necesita compilar con <code>-g</code>. Y para ejecutar: <code>java fichero.class</code> o <code>java -jar fichero.jar</code>.</p>'
    },
    {
      h: 'Javadoc y buenas prácticas con comentarios',
      b: '<p>Los comentarios <code>/** … */</code> se pueden convertir en documentación HTML con la herramienta <code>javadoc</code>: <code>javadoc -d doc Rectangulo.java</code> crea la carpeta <code>doc</code>. Etiquetas: <code>@author</code>, <code>@version</code>, <code>@param</code> (un parámetro) y <code>@return</code> (el valor devuelto).</p><p>En NetBeans, escribir <code>/**</code> encima de una clase o método y pulsar Intro genera el esqueleto, y <code>Ctrl + /</code> comenta o descomenta líneas con <code>//</code>.</p><ul><li>Explica el <b>porqué</b>, no el qué (<code>i = i + 1;</code> con un comentario «suma 1» no aporta nada).</li><li>Documenta cada clase con su propósito y autor.</li><li>Mantén los comentarios actualizados.</li><li>No dejes código comentado en la versión final.</li><li>Los comentarios de bloque <b>no se anidan</b>: terminan en el primer <code>*/</code>.</li></ul>'
    },
    {
      h: 'El depurador jdb (referencia)',
      b: '<p>Requiere compilar con <code>-g</code> y se lanza con <code>jdb nombreClase</code>. Casi nadie lo usa directamente: se usa a través del IDE. Comandos: <code>help</code>, <code>print</code>/<code>dump</code>, <code>locals</code>, <code>classes</code>, <code>methods</code>, <code>stop in</code>/<code>stop at</code> (puntos de ruptura), <code>clear</code>, <code>step</code>, <code>cont</code>, <code>catch</code>/<code>ignore</code>, <code>list</code>, <code>use</code>, <code>memory</code>, <code>load</code>, <code>run</code>, <code>!!</code> (repetir) y <code>exit</code>/<code>quit</code>.</p>'
    }
  ],
  tipos: [
    {
      h: 'Datos y tipos',
      b: '<p>Un <b>dato</b> es una representación simple de algo del mundo real. Un <b>tipo de datos</b> es el conjunto de valores que puede tomar. Java necesita conocer el tipo para <b>reservar memoria</b>.</p><p>Java es de tipado <b>estático</b> (una variable mantiene su tipo) y <b>fuerte</b> (comprueba que cada tipo se use como debe).</p>'
    },
    {
      h: 'Los 4 grupos de tipos primitivos',
      b: '<p><b>Enteros</b> (byte, short, int, long) · <b>Reales</b> (float, double) · <b>Caracteres</b> (char) · <b>Lógicos</b> (boolean).</p><p class="an">Como cajas de distinto tamaño: una caja de zapatos (byte) no admite lo que cabe en un contenedor (long).</p>'
    },
    {
      h: 'Enteros y reales',
      b: '<p><code>byte</code> 8 bits (−128 a 127) · <code>short</code> 16 bits · <code>int</code> 32 bits (≈ ±2000 millones) · <code>long</code> 64 bits.</p><p>Los reales usan <b>coma flotante</b> (mantisa y exponente): <code>float</code> 32 bits, <code>double</code> 64 bits.</p>'
    },
    {
      h: 'char y boolean',
      b: "<p><code>char</code>: <b>16 bits</b>, Unicode, <b>un solo</b> carácter entre <b>comillas simples</b>: <code>'3'</code> no es lo mismo que <code>3</code>. Las cadenas (<code>String</code>) se verán más adelante.</p><p><code>boolean</code>: solo <code>true</code> o <code>false</code>. Es el resultado de las operaciones relacionales y lógicas.</p>"
    },
    {
      h: 'Conversiones (casting)',
      b: '<p><b>Implícita:</b> automática, solo si la variable receptora tiene <b>más precisión</b> (int → long sí; long → int no).</p><p><b>Explícita (casting):</b> tú lo pides con <code>(tipo)</code>. Puede perder información.</p><p><code>(byte) 130</code> da <b>−126</b>: el rango es cíclico (127 → −128).</p>'
    },
    {
      h: 'Tipos de tipos: estático/dinámico, fuerte/débil',
      b: '<p><b>Tipado dinámico:</b> una variable puede cambiar de tipo durante la ejecución (JavaScript, PHP, Python, Perl, Lisp). <b>Tipado estático:</b> mantiene el tipo asignado (C, C++, Java, Basic, Pascal).</p><p><b>Débilmente tipado:</b> pocas comprobaciones; permite tratar un dato de un tipo como otro (por ejemplo, un carácter como número). <b>Fuertemente tipado:</b> comprueba que cada variable se use según su tipo; es más robusto pero menos eficiente.</p><p>Son categorías <b>complementarias</b>: C es estático y débil; Visual Basic es dinámico y fuerte. <b>Java es estático y fuerte.</b></p>'
    },
    {
      h: 'Enteros con y sin signo; reales por dentro',
      b: '<p>Con 8 bits: sin signo 0 a 255; con signo −128 a +127. Con 16 bits: 0 a 65535 / −32768 a 32767. Con 32 bits: 0 a más de 4 mil millones / unos ±2 mil millones. En Java los cuatro enteros (<code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>) son <b>con signo</b> e independientes de la plataforma.</p><p>Los reales usan coma flotante (mantisa y exponente): <code>float</code> 32 bits (1 de signo, 8 de exponente, 23 de mantisa) y <code>double</code> 64 bits (1, 11 y 52).</p><p>Los <code>char</code> usan ASCII (127 valores reservados) y Unicode para el resto. <code>boolean</code> viene del matemático George Boole.</p>'
    }
  ],
  operadores: [
    {
      h: 'Operando y operador',
      b: '<p>El <b>operador</b> es el símbolo (<code>+</code>) y los <b>operandos</b> son los datos sobre los que actúa (<code>3 + 4</code>: operandos 3 y 4).</p>'
    },
    {
      h: 'Aritméticos',
      b: '<p><code>+ - * / %</code>. Con enteros, <code>/</code> da el <b>cociente</b> y <code>%</code> el <b>resto</b>: 35 / 9 = 3; 35 % 9 = 8.</p><p>El tipo del resultado es el del operando de <b>mayor precisión</b>: <code>8 / 6</code> = 1, pero <code>8.0 / 6</code> = 1.3333333333333333.</p>'
    },
    {
      h: 'Incremento y asignación compuesta',
      b: '<p><code>x++</code> ≡ <code>x = x + 1</code>. <b>Pre</b> (<code>++x</code>): incrementa y <b>luego</b> usa. <b>Post</b> (<code>x++</code>): usa y <b>luego</b> incrementa.</p><p><code>x += n</code> ≡ <code>x = x + n</code>; igual con <code>-=</code>, <code>*=</code>, <code>/=</code>.</p>'
    },
    {
      h: 'Relacionales y lógicos',
      b: '<p><code>&lt; &gt; &lt;= &gt;= == !=</code> devuelven <code>true</code>/<code>false</code>.</p><p><code>&&</code> (y): cierto si ambos. <code>||</code> (o): cierto si alguno. <code>!</code> (no). <code>^</code> (XOR): cierto si son <b>distintos</b>.</p>'
    },
    {
      h: 'Prioridad y la clase Math',
      b: '<p>De mayor a menor: <code>! -- ++</code> → <code>* / %</code> → <code>+ -</code> → comparaciones → <code>== !=</code> → <code>&&</code> → <code>||</code> → <code>=</code>. A igual prioridad, de izquierda a derecha. ¡Usa paréntesis!</p><p><code>Math.abs, sqrt, pow, round, random…</code> hacen operaciones avanzadas.</p>'
    },
    {
      h: 'Otros operadores y el resto de Math',
      b: '<p><b>XOR (<code>^</code>)</b>: <code>true</code> solo si los operandos son distintos (por ejemplo, validar que el usuario elige solo un método de pago: efectivo o tarjeta). También existen el complemento a 1 (<code>~</code>) y los operadores a nivel de bits, aunque son minoritarios.</p><p>Clase <code>Math</code>: <code>abs</code>, <code>sin</code>/<code>cos</code> (radianes), <code>exp</code> (e<sup>x</sup>), <code>log</code> (neperiano), <code>log10</code> (decimal), <code>round</code>, <code>sqrt</code>, <code>pow(b, e)</code> y <code>random()</code> (entre 0 y 1). Ej.: <code>Math.round(5.7)</code> → 6; <code>Math.round(5.2)</code> → 5.</p>'
    }
  ],
  variables: [
    {
      h: 'Variable y constante',
      b: '<p>Una <b>variable</b> es un dato cuyo valor puede cambiar; una <b>constante</b>, no. Distingue siempre el <b>identificador</b> (el nombre) del <b>valor</b>.</p><p class="an">Una variable es una caja con etiqueta: la etiqueta (identificador) no cambia, lo que hay dentro (valor) sí.</p>'
    },
    {
      h: 'Declarar, asignar, inicializar',
      b: '<pre class="code" data-hl>int x;        // declarar\nx = 5;        // asignar\nint y = 8;    // declarar e inicializar</pre><p><code>var</code> (desde Java 10): Java deduce el tipo, pero hay que dar un valor en la misma línea.</p>'
    },
    {
      h: 'Reglas para los nombres',
      b: '<ul><li>Empiezan por una <b>letra</b>. Letras o dígitos después.</li><li>No pueden ser palabras reservadas (<code>class</code>, <code>true</code>…).</li><li>Estilo <b>lowerCamelCase</b>: <code>precioConIva</code>.</li><li>Descriptivos, sin el tipo en el nombre, sin abreviaturas confusas.</li><li>Java distingue mayúsculas: <code>salario</code> ≠ <code>Salario</code>.</li></ul>'
    },
    {
      h: 'Constantes con final',
      b: '<p>Se declaran con <b>final</b>, se asignan una sola vez, en la misma línea, y se escriben en <b>MAYÚSCULAS</b> (varias palabras: <code>UPPER_SNAKE_CASE</code>).</p><pre class="code" data-hl>final double PI = 3.141592;\nfinal int MAX_INTENTOS = 3;</pre>'
    },
    {
      h: 'static, vida y ámbito, expresiones',
      b: '<p><b>static:</b> el dato se crea una sola vez. Las variables <b>locales</b> viven solo en su bloque <code>{ }</code> y no pueden ser static.</p><p>Una <b>expresión</b> combina constantes, variables, operadores y métodos y da un valor: <code>y = (5 + x) / 2;</code></p>'
    }
  ],
  es: [
    {
      h: 'La clase System',
      b: '<p>Está en <code>java.lang</code> (no hace falta <code>import</code>). Tiene tres objetos: <code>System.out</code> (pantalla), <code>System.in</code> (teclado) y <code>System.err</code> (errores).</p><p>Salida: <code>System.out.println(...)</code>.</p>'
    },
    {
      h: 'Scanner: el método ganador',
      b: '<pre class="code" data-hl>import java.util.Scanner;\n\nScanner teclado = new Scanner(System.in);\nString nombre = teclado.nextLine();\ndouble precio = teclado.nextDouble();\nint cantidad = teclado.nextInt();\nteclado.close();</pre><p><code>nextLine()</code> lee una línea entera, <code>nextInt()</code> un entero, <code>nextDouble()</code> un decimal. Se recomienda cerrarlo con <code>close()</code>.</p>'
    },
    {
      h: 'Otras formas de leer',
      b: '<p><b>System.console().readLine():</b> muy simple, devuelve String; puede fallar en algunas consolas.</p><p><b>BufferedReader:</b> la forma «ortodoxa», robusta, pero más código y obliga a <code>try-catch</code>.</p><p>Para empezar, quédate con <b>Scanner</b>.</p>'
    }
  ]
};
