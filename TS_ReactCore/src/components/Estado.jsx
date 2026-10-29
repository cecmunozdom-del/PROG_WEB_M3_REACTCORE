export default function Estado({tipo, mensaje}){
    if(tipo === "cargando"){
        return(
            <div className="cajaEstado">
                <div className="spinner"></div>
                <p>Cargando discografía de Taylor Swift</p>
            </div>
        );
    }

    if(tipo === "vacío"){
        return(
            <div className="cajaEstado">
                <p>🔍 No se han encontrado canciones que coincidan con la búsqueda. </p>
            </div>
        );
    }

    if(tipo === 'error'){
        return(
            <div className="cajaEstado">
                <p>⚠️<b>¡Ups! Algo salió mal: </b>{mensaje}</p>
            </div>
        );
    }

    return null; //esto aquí??
}