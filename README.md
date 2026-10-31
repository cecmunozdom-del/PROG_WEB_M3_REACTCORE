# PROG_WEB_M3_REACTCORE - Taylor Search

Misión M3 · React Core — Web Development I.

## Cómo probarlo
Abre el proyecto en tu navegador y usa el buscador para encontrar la canción (o canciones) de Taylor Swift que coincidan con tu búsqueda. Si no estás familiarizado con su discografía, prueba a escibir palabras genéricas en inglés, como 'Love', 'You', 'My'. La web devolverá todas las canciones cuyo título contenga lo que haya escrito el usuario.

Posibles funcionalidades a futuro:
    - Escribir título de un albúm y que devuelve todas las canciones que contiene.
    - Escribir parte de una letra y que devuelva la canción que corresponde.


## Uso de IA
Al comenzar a trabajar en el proyecto, el mayor uso de IA (Gemini) que he hecho ha sido para terminar de comprender bien el flujo de React y cómo funciona el paso de props, los hooks, etc... Es por esto que para hacer los archivos de los componentes no necesité apenas ayuda, pero para poder hacer el archivo de App.jsx y el hook personalizado de useCanciones sí que la utilicé bastante. A pesar de esto, me ha sido profundamente útil para terminar de entender de una vez todos estos conceptos que no me quedaban claros de una vez por todas, y poder ver en primer plano cómo realmente es el flujo de un programa en React. También me resolvió dudas sobre cómo comenzar a adaptar la app que tenía previamente, mostrándome ejemplos de pasos que podía ir siguiendo y archivos que no tenía porqué modificar (logica.js, api.js y el archivo de estilo css).

Dentro de los componentes individuales, usé Gemini para preguntarle dudas concretas de sintaxis, por ejemplo, cómo funcionaban ahora los eventos como onCambioBusqueda, onLimpiarCache del buscador, y cómo se llaman desde App.jsx y actualizan el valor del texto de búsqueda.

En concreto, dentro de App.jsx, utilicé Gemini como ayuda para manejar los estados y sus cambios, y me hizo entender porqué en este caso, sería conveniente crear useCanciones. A pesar de no ser obligatorio para el correcto funcionamiento de la app, me explicó que App.jsx quedaría como un componente con demasiadas responsabilidades, cuando solo debería organizarse de la vista y sus cambios. De esta manera, como dice en la unidad, podemos separar la lógica de traer las canciones desde la API, devolviendo las variables necesarias para que App.jsx las maneje.


Algunos ejemplos de prompts:
"Dime en una explicación detallada cómo funciona el flujo de un programa en React, y cómo funcionan en concreto los hooks como useState o useEffect"
"Hace falta usar un await cuando llamo a fetchCanciones cuando esa función ya tiene un await?" La respuesta es que sí, porque aunque dentro de la función se usa un await para esperar al fetch(), la función entera es async, y por ello devuelve una promesa, por lo tanto el programa debe esperar a que termine.
"Porqué la línea de audio dentro del componente de TarjetaCancion debe ir entre llaves?" Es porque es necesario para meter lenguaje JavaScript dentro de un archivo JSX.


## Autopsia
1. La primera decisión difícil fue más que una decisión, una duda. No sabía si para mostrar las canciones filtradas debía usar un hook (useState o useEffect), pero como dice en la teoría de la unidad, y en los requisitos de la práctica, si estos datos se pueden modificar en el render, entonces utilizar un hook es innecesario y lo complica de más.

2. La segunda decisión difícil fue cómo hacer un hook personalizado dentro de este proyecto. Aunque es verdad que el código de obtener las canciones de la API no se repite entero como tal en varios componentes, su lógica sí. Por tanto, y gracias al consejo de Gemini, vi que la mejor manera era separando esta lógica en un hook personalizado para descargar, limpiar y guardar todas las canciones en un módulo separado. Además, gestiona la parte asíncrona del proyecto, y los cambios de estado de carga y error. De esta forma, App.jsx sólo se encarga de la parte visual (y del limpiado de caché).
