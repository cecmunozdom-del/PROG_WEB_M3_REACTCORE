export default function Tarjeta({titulo, album, duracion, preview}){
    return(
        <div className='TarjetaCancion'>
            <h1>Título: {titulo}</h1>
            <p>Álbum: {album}</p>
            <p>Duracion: {duracion}</p>
            <audio> {preview} </audio>
        </div>
        
    )
}