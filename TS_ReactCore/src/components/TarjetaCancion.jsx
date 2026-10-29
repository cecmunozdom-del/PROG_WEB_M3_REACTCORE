export default function Tarjeta({cancion}){ //recibe un objeto de tipo canción
    return(
        <div className="tarjetaCancion">
            <img src={cancion.cover}
                alt="${cancion.titulo}" 
                className="coverImg" 
                loading="lazy"/>
            <h2 class="tituloCancion">{cancion.titulo}</h2>
            <p class="albumCancion">💿 {cancion.album}</p>
            <p class="duracionCancion">⏱️ ${cancion.duracion}</p>
            {cancion.preview ? (<audio controls src="${cancion.preview}"></audio>) : (<p class="sin-audio">Sin vista previa</p>)}
        </div>  
    );
}