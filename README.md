# PROG_WEB_M3_REACTCORE - Taylor Search

Misión M3 · React Core — Web Development I.

## Cómo probarlo
Lanza la app y usa el buscador para encontrar la canción (o canciones) de Taylor Swift que coincidan con tu búsqueda. Si no estás familiarizado con su discografía, prueba a escibir palabras genéricas en inglés, como 'Love', 'You', 'My'. La web devolverá todas las canciones cuyo título contenga lo que haya escrito el usuario. Además, si se busca el título de un álbum, devolverá todas las canciones posibles de éste.


## Uso de IA
Al comenzar a trabajar en el proyecto, el mayor uso de IA (Gemini) que he hecho ha sido para terminar de comprender bien el flujo de React y cómo funciona el paso de props, los hooks, etc... Es por esto que para hacer los archivos de los componentes no necesité apenas ayuda, pero para poder hacer el archivo de App.jsx y el hook personalizado de useCanciones sí que la utilicé bastante. A pesar de esto, me ha sido profundamente útil para terminar de entender de una vez por todas estos conceptos que no me quedaban claros, y poder ver en primer plano cómo realmente es el flujo de un programa en React. También me resolvió dudas sobre cómo comenzar a adaptar la app que tenía previamente, mostrándome ejemplos de pasos que podía ir siguiendo y archivos que no tenía porqué modificar (logica.js, api.js y el archivo de estilo css).

Dentro de los componentes individuales, usé Gemini para preguntarle dudas concretas de sintaxis, por ejemplo, cómo funcionaban ahora los eventos como onCambioBusqueda, onLimpiarCache del buscador y el botón, y cómo se llaman desde App.jsx y actualizan el valor del texto de búsqueda.

En concreto, dentro de App.jsx, utilicé Gemini como ayuda para manejar los estados y sus cambios, y me hizo entender porqué en este caso, sería conveniente crear useCanciones. A pesar de no ser obligatorio para el correcto funcionamiento de la app, me explicó que App.jsx quedaría como un componente con demasiadas responsabilidades, cuando solo debería organizarse de la vista y sus cambios. De esta manera, como dice en la unidad, podemos separar la lógica de traer las canciones desde la API, devolviendo las variables necesarias para que App.jsx las maneje.

También, ya corrigiendo errores que me había marcado WebArena, estaba intentando mejorar la lógica de limpiar la caché, pasándola dentro del hook personalizado de useCanciones, y de forma que solo eliminase la clave de mi API, ya que localStorage.clear() borra claves ajenas a la app. Además, estaba usando window.location.reload() del proyecto anterior, lo cual rompía la filosofía de React, ya que solo se recargaba la página sin reaccionar al estado. Le pedí ayuda para hacer el "cleanup", con el objetivo de evitar que se intentase actualizar el estado de un componente que ya no existe. En concreto, me explicó y me enseñó cómo y dónde debía utilizar la flag ignore, la cual se activa a true cuando React desmonta un componente antes de que una petición termine, saltándolo y evitando errores.
Gemini me ayudó a entender también que en la lista de canciones, puedo usar key no porque sea una lista estática, ya que se filtra, sino porque es estable, procedente del trackId que proporciona la API de iTunes.


Algunos ejemplos de prompts:
"Dime en una explicación detallada cómo funciona el flujo de un programa en React, y cómo funcionan en concreto los hooks como useState o useEffect"
"Hace falta usar un await cuando llamo a fetchCanciones cuando esa función ya tiene un await?" La respuesta es que sí, porque aunque dentro de la función se usa un await para esperar al fetch(), la función entera es async, y por ello devuelve una promesa, por lo tanto el programa debe esperar a que termine.
"Porqué la línea de audio dentro del componente de TarjetaCancion debe ir entre llaves?" Es porque es necesario para meter lenguaje JavaScript dentro de un archivo JSX.


## Autopsia
1. La primera decisión difícil fue, a la hora de manejar errores, si usar la flag ignore o AbortController. Ambas me las recomendó WebArena, pero tras compararlas con ayuda de Gemini, decidí utilizar el flag. Este tiene un funcionamiento sencillo, es un booleano que se activa a true sólo cuando React desmonta un componente cuando una petición que lo involucra sigue ejecutándose, por lo que "se salta" o ignora partes del código evitando posibles errores. Por otro lado, AbortController requiere que api.js emplee una 'signal' (algo que no se explica en la teoría de la unidad 3), y un uso un tanto complejo de AbortController (habría que lanzar uno nuevo en useEffect y pasar la señal a cargarDatos, y hacer un controller.abort() cuando el componente se desmontase). A pesar de parecer una solución más robusta y profesional, para este proyecto considero que es mejor el flag ignore, por su fácil entendimiento y fácil uso.

2. La segunda decisión difícil fue más que una decisión, una duda. No sabía si mostrar las canciones filtradas con un segundo useState, actualizado con un useEffect. Pero como dice en la teoría de la unidad, y en los requisitos de la práctica, si estos datos se pueden calcular durante el render, entonces utilizar un hook es innecesario y lo complica de más. Por ello, se maneja con lo que se conoce como un 'valor derivado', con esta línea: 'const cancionesFiltradas = filtrandoCanciones(canciones, busqueda);'.
