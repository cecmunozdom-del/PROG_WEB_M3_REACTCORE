export default function Buscador(){
    return(
    <div className="controles">
        <input 
        type="text" 
        id="buscador" 
        placeholder="Busca por canción (ej: 'Love', 'Me') o por álbum (ej: 1989, Lover)..."
        />
        <button id="botonCache" class="boton">Limpiar caché</button>
    </div>

    )

}
