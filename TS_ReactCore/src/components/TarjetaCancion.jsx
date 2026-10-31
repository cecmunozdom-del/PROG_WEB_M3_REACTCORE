export default function TarjetaCancion({cancion}){
    return(
        <div className="tarjetaCancion">
            <img src={cancion.cover} alt={cancion.titulo} className="coverImg" loading="lazy"/>
            <h2 className="tituloCancion">{cancion.titulo}</h2>
            <p className="albumCancion">💿 {cancion.album}</p>
            <p className="duracionCancion">⏱️ {cancion.duracion}</p>
                {/*control por si la canción carece de preview*/}
            {cancion.preview ? (<audio controls src={cancion.preview}></audio>) : (<p className="sin-audio">Sin vista previa</p>)}
            
        </div>
    );
}