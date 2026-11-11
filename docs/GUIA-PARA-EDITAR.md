# Guía para editar la web

Esta guía es para quien quiera modificar el contenido (por ejemplo, el profesor) sin conocer el motor interno.
**No hay que instalar nada ni compilar.** Se edita el archivo, se guarda y se recarga la página en el navegador
(con `Ctrl + F5` para saltarse la copia guardada).

> Consejo: abre la carpeta entera en un editor de código (VS Code, NetBeans…). Para probar en local basta con abrir
> `index.html` con doble clic. Para publicar, sube los cambios a GitHub y Vercel se actualiza solo.

---

## 1. Dónde está cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| La **teoría** de un apartado (textos, ejemplos, tablas) | `tema1.html` o `tema2.html` → busca el apartado por su comentario `<!-- ================= p-selectiva ================= -->` |
| Un ejercicio **«Hacer un código»** | `datos/temaN/ejercicios.js` |
| El ejercicio **«Corrige el código»** de un apartado | `datos/temaN/ejercicios-corrige.js` |
| Un ejercicio **«Predice la salida»** | `datos/temaN/predicciones.js` (y `predicciones-2-7-a-2-9.js` en el Tema 2) |
| Las **preguntas** del examen de preguntas | `datos/temaN/preguntas.js` (y `preguntas-2-6-a-2-10.js` en el Tema 2) |
| La **relación de ejercicios del profesor** | `datos/temaN/ejercicios-profe.js` |
| Las **diapositivas** del Tema 1 | `datos/tema1/presentaciones.js` |
| El **orden** de los apartados y de los pasos | `js/temaN/navegacion.js` |
| Los **colores** | `css/base.css`, variables al principio (`--accent`, `--bg`…) |
| Un **simulador** (traza, try/catch, switch…) | `js/temaN/simulador-….js`, `traza-….js` |

`N` es 1 o 2 según el tema. Todos los archivos de datos empiezan con un comentario que explica su formato.

---

## 2. Cambiar la teoría de un apartado

Está en HTML normal dentro de `tema1.html` / `tema2.html`. Cada apartado es un bloque así:

```html
<!-- ================= p-selectiva ================= -->
<section class="pane" id="p-selectiva">
  <span class="tag">Apartado 2.3</span>
  <h2>Estructura selectiva (condicional)</h2>
  <p class="lead">Ejecuta uno de varios bloques según una condición…</p>
  …
</section>
```

- El `id` (`p-selectiva`) **no se debe cambiar**: lo usa el resto de la web.
- Los fragmentos de código se escriben dentro de `<pre class="code" data-hl> … </pre>`
  (`data-hl` activa el resaltado de colores). Dentro, `<` se escribe `&lt;` y `>` se escribe `&gt;`.
- Para destacar una idea hay recuadros: `<div class="callout"><p>…</p></div>`;
  `<div class="callout warn">` para un aviso.
- El bloque «En cristiano» es `<div class="eli"><span class="l">En cristiano</span><p>…</p></div>`.
  Se puede borrar sin problema.

---

## 3. Preguntas del examen (`preguntas.js`)

```js
{
  id: 'q1',                 // único
  s: 'estructurada',        // apartado al que pertenece (id de SECS)
  q: 'Pregunta…',           // se admite HTML, por ejemplo <code>…</code>
  o: [                      // opciones: LA PRIMERA ES LA CORRECTA (la web las baraja)
    'Opción correcta',
    'Opción 2',
    'Opción 3',
    'Opción 4'
  ],
  e: 'Explicación que se muestra al responder.'
}
```

## 4. «Predice la salida» (`predicciones.js`)

```js
{
  id: 'p1',
  s: 'secuencial',                               // apartado
  p: '¿Qué muestra por pantalla?',               // enunciado
  code: 'int a = 3;\nSystem.out.println(a);',    // el código (\n = salto de línea)
  a: '3',                                        // respuesta correcta (varias líneas, separadas por espacios)
  h: 'Pista opcional.',
  e: 'Explicación opcional.'
}
```

## 5. Ejercicio «Hacer un código» (`ejercicios.js`)

```js
{
  id: 'c1',
  s: 'secuencial',                 // apartado
  title: 'Suma de dos números',
  concept: 'Texto breve de teoría (HTML).',
  task: 'Enunciado (HTML).',
  stdin: '4\n9',                   // lo que se escribe por defecto en el teclado de la terminal
  starter: 'código inicial…',     // lo que aparece en el editor al empezar
  solution: 'solución completa…', // se muestra con «Ver solución»
  tests: [                         // pruebas: se ejecuta la solución del alumno con cada entrada
    { input: '4\n9',  out: '13' },
    { input: '-3\n10', out: '7' }
  ],
  rules: [                         // OPCIONAL: comprobaciones sobre el código (expresión regular)
    { re: /\bswitch\s*\(/, msg: 'Usa la instrucción switch' }
  ],
  hints: ['Pista 1', 'Pista 2']   // se van mostrando de una en una
}
```

- Las **pruebas** comparan lo que muestra el programa con `out`. Si el programa del alumno funciona pero tiene otro
  formato (espacios, mayúsculas), la prueba falla: conviene ser claro en el enunciado.
- Para el ejercicio **«Corrige el código»**, `starter` es el programa con el fallo y `solution` el programa
  arreglado. El título empieza por `🔧 Corrige:` y el `id` por `fx-`.
- Los `\n` y las comillas dentro de los textos de JavaScript hay que respetarlos; si dudas, copia un ejercicio
  existente y cámbiale el contenido.

## 6. Relación de ejercicios del profesor (`ejercicios-profe.js`)

Está agrupada por bloques (capítulos). Cada ejercicio es de uno de estos dos tipos:

- `kind: 'qa'`: solo enunciado (`task`) y corrección desplegable (`ans`, en HTML). Es el caso normal: se hacen en NetBeans.
- `kind: 'code'`: además lleva `starter`, `solution` y `tests` como un ejercicio normal, por si se quiere ejecutar
  en la web.

Campos comunes: `id`, `title`, `src` (de dónde viene: «Unidad · ejercicio»), `task`, `notes` (comentario tras la
corrección, opcional).

---

## 7. Añadir un apartado nuevo

1. **Teoría:** copia un bloque `<section class="pane" id="p-…">` en `temaN.html` y cambia su `id` a `p-` + el nombre nuevo
   (por ejemplo `p-arrays`).
2. **Orden:** en `js/temaN/navegacion.js`, añade `{ id: 'arrays', t: '2.12 Arrays' }` a la lista `SECS`
   en el sitio donde quieras que aparezca. El `id` es el mismo que el de la sección, sin `p-`.
3. **Ejercicios, preguntas y predicciones:** añádelos en sus archivos con `s: 'arrays'`.
4. **Enlaces «Siguiente / Anterior»:** son botones `data-go="id"` al final de cada apartado.
5. **Mapa del tema** en el apartado «Inicio»: añade una línea en la lista.

Un apartado sin ejercicios se muestra solo como lectura; con ejercicios se muestra con la teoría a la izquierda y las
instrucciones debajo.

> **Tema 1:** además de `SECS` hay otras dos listas en `js/tema1/navegacion.js`: `ORDER` (orden de los apartados) y
> `HASB` (apartados que tienen la pantalla «Practica y simula» con simuladores). Si añades un apartado al Tema 1,
> hay que tocar las tres.

## 8. Cambiar el orden o quitar algo

- **Orden de los apartados:** el de la lista `SECS` en `js/temaN/navegacion.js`.
- **Quitar un ejercicio:** borra su bloque `{ … },` del archivo de datos (cuidado con las comas).
- **Quitar un apartado:** bórralo de `SECS` y, si quieres, su `<section>` en el HTML.

## 9. Cosas a tener en cuenta

- **El intérprete de Java** (`js/motor/interprete-java.js`) solo entiende el Java que se da en el curso: tipos
  simples, `String`, operadores, `if`, `switch`, bucles, métodos `static`, `Scanner`, `Math`, excepciones y `assert`.
  **No hay arrays ni objetos propios** (todavía). Si un ejercicio usa algo que no está, el editor mostrará un error de
  compilación.
- **El progreso** de cada alumno se guarda en el navegador (localStorage). Si cambias el `id` de un ejercicio o de un
  apartado, su progreso se pierde.
- Los **ids** (`c1`, `p1`, `q1`, `p-selectiva`…) deben ser **únicos** y no se pueden repetir.
- Después de cambiar un archivo de datos, **recarga con `Ctrl + F5`**. Si la página se queda en blanco, hay un error
  de sintaxis (una coma o comilla de más o de menos): abre la consola del navegador (`F12`) y mira el mensaje, que
  indica el archivo y la línea.

## 10. Estilo del código de los ejemplos

Los ejemplos de Java de la web siguen las reglas de estilo de los apuntes: una instrucción por línea, llaves siempre,
sangría de 4 espacios, `UpperCamelCase` para clases, `lowerCamelCase` para variables y métodos y `MAYÚSCULAS` para las
constantes. Conviene mantenerlo al añadir ejemplos nuevos.
