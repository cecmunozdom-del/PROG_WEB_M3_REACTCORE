export default function Buscador({textBusqueda, onCambioBusqueda, onLimpiarCache}){
    return(
    <div className="controles">
        <input type="text" id="buscador" 
            placeholder="Busca por canción (ej: 'Love', 'Me') o por álbum (ej: 1989, Lover)..."
            onChange={(evento) => onCambioBusqueda (evento.target.value)} //esto supongo que será para recoger la query
        />

        <button id="botonCache" className="boton" onClick={onLimpiarCache}>
            Limpiar caché
        </button>
    </div> //ahora se llaman así a los eventos??

    );

}
