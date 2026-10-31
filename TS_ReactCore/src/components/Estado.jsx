export default function Estado({ tipo, mensaje }){ {/* llega el tipo de estado, devuelve el mensaje de error */} 

    if(tipo == 'cargando'){
        return(
            <div className="cajaEstado">
                <div className="spinner"></div>
                <p>Cargando discografía de Taylor Swift...</p>
            </div>
        );
    }

    if(estado == 'vacio'){
        return(
            <div className="cajaEstado">
                <p>🔍 No se han encontrado canciones que coincidan con la búsqueda. </p>
            </div>
        );
    }
    
    if(estado == 'error'){
        return(
            <div className="cajaEstado error">
                <p>⚠️<b>¡Ups! Algo salió mal: </b> {mensaje}</p>
            </div> 
        );
    }

    {/* si no fuera ninguno de los 3 estados se devuelve null */} 
}
