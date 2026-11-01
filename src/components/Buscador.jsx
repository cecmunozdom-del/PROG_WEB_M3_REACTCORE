export default function Buscador({ textoBusqueda, onCambioBusqueda }){
    return(
        <input type="text" id="buscador" 
            placeholder="Buscar canción (ej: love, red, story)..."
            value={textoBusqueda}
            onChange={(event) => onCambioBusqueda(event.target.value)}
        />    
    );
}
