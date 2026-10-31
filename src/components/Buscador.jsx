export default function Buscador({ textoBusqueda, onCambioBusqueda, onLimpiarCache}){
    return(
        <div className="controles">
            {/* Eventos llamados desde los propios componentes */}
            <input type="text" id="buscador" 
                placeholder="Buscar canción (ej: love, red, story)..."
                value={textoBusqueda}
                onChange={(event) => onCambioBusqueda(event.target.value)}/>
            <button id="botonCache" className="boton" onClick={onLimpiarCache}>Limpiar caché</button>
          </div>
    );
}
