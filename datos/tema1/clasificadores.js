/* ============================================================
   Datos de los mini-juegos de clasificar del Tema 1
   Listas de lenguajes, ejemplos de código por nivel, etc.
   ============================================================ */
var SORTS = {
  'sort-par': [
    { w: 'Fortran', c: 0, e: 'Desestructurada (1950–70). Luego evolucionó.' },
    { w: 'Pascal', c: 1, e: 'Estructurada: C, Pascal y Modula-2.' },
    { w: 'C', c: 1, e: 'Estructurada.' },
    { w: 'Java', c: 2, e: 'Orientado a objetos (y no se puede programar solo estructurado).' },
    { w: 'Basic', c: 0, e: 'Desestructurada.' },
    { w: 'Python', c: 2, e: 'Orientado a objetos.' },
    { w: 'Cobol', c: 0, e: 'Desestructurada (evolucionó, pero la permitía).' },
    { w: 'C++', c: 2, e: 'Orientado a objetos: la evolución de C.' }
  ],
  'sort-niv': [
    { w: '110100100101110010100010001', c: 0, e: 'Binario: lenguaje máquina.' },
    { w: 'ADD D1, D2', c: 1, e: 'Ensamblador: usa palabras en vez de bits, pero depende del hardware.' },
    { w: 'System.out.println("Hola");', c: 2, e: 'Alto nivel: se parece al lenguaje natural.' }
  ],
  'sort-tra': [
    { w: 'C / C++', c: 0, e: 'Compilado: rápido pero hay que recompilar para cada sistema.' },
    { w: 'JavaScript', c: 1, e: 'Interpretado: corre en cualquier navegador.' },
    { w: 'Java', c: 2, e: 'Semicompilado: javac a bytecode y la JVM lo ejecuta.' }
  ],
  'sort-jdk': [
    { w: 'javac', c: 0, e: 'Compila el código fuente a bytecode.' },
    { w: 'java', c: 1, e: 'Lanza la JVM para ejecutar el bytecode.' },
    { w: 'javadoc', c: 2, e: 'Genera la documentación.' },
    { w: 'jdb', c: 3, e: 'Es el depurador de consola.' }
  ],
  'sort-bld': [
    { w: 'build.xml', c: 0, e: 'Ant: la más antigua.' },
    { w: 'pom.xml', c: 1, e: 'Maven: la que se usa en el curso.' },
    { w: 'build.gradle', c: 2, e: 'Gradle: más flexible y rápida; la de Android.' }
  ],
  'sort-id': [
    { w: 'x', c: 1, e: 'Válido pero poco significativo.' },
    { w: '5x', c: 0, e: 'No empieza por letra.' },
    { w: 'x5', c: 1, e: 'Válido pero poco significativo.' },
    { w: 'nombre', c: 2, e: 'Válido y descriptivo.' },
    { w: 'class', c: 0, e: 'Palabra reservada.' },
    { w: 'precioConIva', c: 2, e: 'lowerCamelCase y descriptivo.' },
    { w: '_nombre', c: 1, e: 'Válido pero no se recomienda empezar por _ .' },
    { w: '1erApellido', c: 0, e: 'Empieza por número (usa primerApellido).' },
    { w: 'pepe_luis', c: 1, e: 'Válido pero es snake_case, no lowerCamelCase.' },
    { w: 'pepe!luis', c: 0, e: 'Carácter especial no permitido.' },
    { w: 'edadEmpleado', c: 2, e: 'Correcto.' },
    { w: 'true', c: 0, e: 'Es una constante lógica reservada.' },
    { w: 'saldoCuentaCorriente', c: 2, e: 'Correcto.' },
    { w: 'precio-total', c: 0, e: 'El - es un operador.' }
  ],
  'sort-const': [
    { w: 'LONGITUD', c: 2, e: 'MAYÚSCULAS y descriptivo.' },
    { w: 'RETENCIONPORDEFECTO', c: 1, e: 'Válido pero ilegible: usa RETENCION_POR_DEFECTO.' },
    { w: 'RETENCION_POR_DEFECTO', c: 2, e: 'UPPER_SNAKE_CASE.' },
    { w: 'retencionPorDefecto', c: 1, e: 'Válido, pero las constantes van en mayúsculas.' },
    { w: 'RETENCION.POR.DEFECTO', c: 0, e: 'No se pueden usar símbolos especiales.' },
    { w: 'X', c: 1, e: 'Válido pero poco significativo.' }
  ]
};
var CATS = {
  'sort-par': ['Desestructurada', 'Estructurada', 'Orientada a objetos'],
  'sort-niv': ['Lenguaje máquina', 'Ensamblador', 'Alto nivel'],
  'sort-tra': ['Compilado', 'Interpretado', 'Semicompilado'],
  'sort-jdk': ['Compila', 'Ejecuta', 'Documenta', 'Depura'],
  'sort-bld': ['Ant', 'Maven', 'Gradle'],
  'sort-id': ['No válido', 'Válido, no recomendable', 'Válido y recomendable'],
  'sort-const': ['No válido', 'Válido, no recomendable', 'Válido y recomendable']
};
var ERRX = [
  {
    id: 'z1',
    title: 'Desbordamiento de int',
    task: 'Ejecuta el programa: ¿qué sale? (Compruébalo para ver el resultado esperado).',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        int x = Integer.MAX_VALUE;\n        x = x + 1;\n        System.out.println(x);\n    }\n}\n',
    tests: [{ out: '-2147483648' }],
    hints: [],
    solution: '// Java no lanza ningún error: el valor da la vuelta y sale el mínimo.'
  },
  {
    id: 'z2',
    title: 'El símbolo ^ en Java',
    task: 'Ejecuta: ¿sale 8 (potencia)? Compruébalo.',
    starter:
      'public class Main {\n    public static void main(String[] args) {\n        System.out.println(2 ^ 3);\n        System.out.println(Math.pow(2, 3));\n    }\n}\n',
    tests: [{ out: '1\n8.0' }],
    hints: [],
    solution: '// 2 ^ 3 es XOR bit a bit (sale 1). La potencia es Math.pow.'
  }
];
