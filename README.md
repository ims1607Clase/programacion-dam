# Programación 1º DAM · Estudio interactivo (Java)

Web de estudio para la asignatura de **Programación (Java)** de 1º de DAM. Reúne la teoría de los Temas 1 y 2, ejercicios de código con editor y corrección automática, y la relación de ejercicios que manda el profesor.

> **Material de estudio no oficial**, hecho por un alumno. No sustituye a los apuntes ni a las indicaciones del profesor.

---

## 🤖 Hecho con inteligencia artificial

Este proyecto se ha creado con ayuda de una IA (**Claude**, de Anthropic). La IA ha generado el código de la web, ha redactado las explicaciones, los ejercicios, las pistas y las soluciones, y ha construido el editor y el intérprete que ejecuta el código en el navegador. El alumno ha dirigido el proyecto: ha decidido qué contenido incluir, cómo debía verse y cómo debía funcionar, y ha ido revisando y pidiendo cambios.

**Qué significa esto en la práctica:**

- Puede haber **errores o imprecisiones** en las explicaciones, en las soluciones o en los enunciados.
- Ante cualquier duda, **manda lo que dicen los apuntes y el profesor**, no esta web.
- Las soluciones de los ejercicios son *una* forma posible de resolverlos, no la única ni necesariamente la que espera el profesor.

---

## 📚 De dónde sale el contenido

- **Los apuntes de la asignatura**, publicados en
  [apuntesdamdaw.vercel.app](https://apuntesdamdaw.vercel.app/libros/programacion-1-dam-1-daw/).
  La teoría, el orden y los ejemplos se han basado en esos apuntes y se han adaptado a un formato interactivo.
- **Los ejercicios del profesor** (PDFs de las carpetas de Tema 1 y Tema 2). Los enunciados se han trasladado a la web y cada uno lleva su corrección desplegable.
- Algunos ejercicios de práctica (predecir la salida, corregir un código, hacer un código) son **material propio generado con IA** a partir de lo que cuentan los apuntes.

Los apuntes y los ejercicios originales pertenecen a su autor. Esta web solo los usa como base de estudio.

---

## ✨ Qué incluye

### Temas 1 y 2
Cada apartado se estudia en una sola pantalla, al estilo de [Codédex](https://www.codedex.io/):

- **Panel izquierdo:** la teoría del apartado (explicación, presentación, simuladores) y, más abajo, las **Instrucciones** con los ejercicios.
- **Panel derecho:** un **editor de código** con terminal para ejecutar el programa.

Los ejercicios de cada apartado son de tres tipos:

| Tipo | Qué hay que hacer |
|---|---|
| 🔮 **Predice la salida** | Leer un código e indicar qué mostrará por pantalla. |
| 🔧 **Corrige el código** | Un solo ejercicio por apartado: un programa con un fallo que hay que encontrar y arreglar. |
| ✍️ **Hacer un código** | Escribir un programa que cumpla lo que pide el enunciado. |

Además: **pistas progresivas** (nunca dan la solución a la primera), botón de **ver solución**, ejecución con entrada de datos desde la terminal, un **reto final** en cada tema y **exámenes de práctica**.

### Relación de ejercicios del profesor
Los ejercicios que manda el profesor aparecen aparte, agrupados por bloque. **Se hacen en NetBeans**, no en la web: cada uno tiene su enunciado, un ejemplo de ejecución cuando lo hay, una casilla **Hecho** y un desplegable **Ver corrección** para comparar después.

### Editor
- Atajos al estilo de **NetBeans**: duplicar y mover líneas, comentar, formatear, plantillas (`sout`, `psvm`, `fori`…).
- Sugerencias de código con `Ctrl + Espacio`.
- Resaltado de sintaxis y ejecución con `F6`.

---

## 🗂️ Estructura del proyecto

No hace falta instalar nada ni compilar: son archivos HTML, CSS y JavaScript normales.

```
index.html                Portada con los dos temas y tu progreso
tema1.html                Tema 1 (aquí está la TEORÍA de cada apartado, en HTML)
tema2.html                Tema 2 (ídem)
vercel.json               Configuración para publicarla en Vercel

css/
  base.css                Colores (variables :root), tipografía, tarjetas, tablas, simuladores
  laboratorio.css         Editor de código y terminal
  reproductor.css         Pantalla del curso: panel izquierdo, barra inferior, menú
  tema1.css               Estilos propios de las presentaciones del Tema 1

js/motor/                 El "motor" común a los dos temas (no hace falta tocarlo)
  interprete-java.js      Intérprete: ejecuta el Java del curso dentro del navegador
  autocompletado.js       Sugerencias del editor
  laboratorio.js          Editor, terminal y corrección de ejercicios
  explicaciones.js        Textos de ayuda de los ejercicios
  reproductor.js          Pantalla estilo Codédex, barra, menú y progreso
js/tema1/  js/tema2/      Simuladores y pantallas propias de cada tema
                          (navegacion.js define el orden de los apartados)

datos/tema1/  datos/tema2/   El CONTENIDO que se edita:
  ejercicios.js           Ejercicios "Hacer un código"
  ejercicios-corrige.js   Ejercicios "Corrige el código"
  ejercicios-profe.js     Relación de ejercicios del profesor (con su corrección)
  preguntas.js            Preguntas del examen de preguntas
  predicciones.js         Ejercicios "Predice la salida"
  (y presentaciones.js en el Tema 1; ejercicios-metodos.js en el Tema 2)

docs/GUIA-PARA-EDITAR.md  Cómo modificar textos, ejercicios, preguntas y el orden del curso
```

Cada archivo empieza con un comentario que explica qué contiene.
**Si quieres cambiar algo, empieza por [`docs/GUIA-PARA-EDITAR.md`](docs/GUIA-PARA-EDITAR.md).**

---

## ⚠️ Limitaciones

- El código **no se ejecuta con Java real**, sino con un **intérprete propio, escrito en JavaScript, que entiende un subconjunto de Java**. Puede diferir de un Java real en detalles (mensajes de error, formato de decimales con `printf`, etc.).
- **No hay arrays** (todavía no se han visto en los temas). Los ejercicios del profe que los necesitan no están incluidos.
- Algunos ejercicios que usan **la fecha del sistema** (por ejemplo, la edad) piden escribir la fecha de hoy en vez de leerla del ordenador.
- Los ejercicios con **números aleatorios** (ruleta, dados, tragaperras) solo se comprueban por su estructura, no por un resultado fijo.
- No se incluye el ejercicio *SorteoPrimitiva* (requiere archivos adicionales) ni los retos «para valientes».
- El progreso se guarda **en el navegador** de cada persona (y por dirección web). Si cambias de navegador o de dirección, empieza de cero.

---

## 🚀 Cómo publicarla

Es una web estática, sin servidor.

1. Sube estos archivos a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com), **Add New → Project**, elige el repositorio y pulsa **Deploy**. No hace falta cambiar ningún ajuste.

También funciona abriendo `index.html` en cualquier navegador (solo se necesita conexión para las tipografías de Google Fonts; sin ella se ven con la letra del sistema).

---

## 👤 Autoría

Proyecto de un alumno de 1º de DAM, desarrollado con **Claude (Anthropic)**.
Basado en los apuntes de la asignatura y en los ejercicios del profesor.
