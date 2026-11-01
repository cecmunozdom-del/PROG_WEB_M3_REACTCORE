import { useState, useEffect } from 'react';
import { fetchCanciones } from '../api.js';
import { transformCanciones } from '../logica.js';

export function useCanciones() {
    {/* MEMORIA (ESTADOS) */}
    const [canciones, setCanciones] = useState([]); {/*estado de canciones que comienza como array vacío*/}
    const [cargando, setCargando] = useState(true); {/*estado para carga, empieza en true porque al abrir app ya está esperando datos*/}
    const [error, setError] = useState(null); {/*estado para error, empieza en null porque no hay fallos al inicio
                                                cuando los haya guardará su string correspondiente*/}

    {/* ACCIÓN (COGER CANCIONES) */}
    {/*recibe el valor de la flag ignore (false si se llama desde recargar)*/}
    async function cargandoDatos(ignore = false){
        try{
            {/*cambio en los estados (cargando sin error)*/}
            {/* setCargando(true) -> redundante porque ya empieza en true*/}
            setError(null);

            {/*datos en bruto usando api.js*/}
            {/*es necesario hacer await aquí porque fetchCanciones devuelve una promesa*/}
            const datosBruto = await fetchCanciones(); 

            {/*se limpian con logica.js*/}
            const datosLimpios = transformCanciones(datosBruto);

            {/*se guardan en el estado (solo si el componente NO se ha desmontado)*/}
            if(!ignore){
                setCanciones(datosLimpios);
            }
            

        }catch(error){
            if(!ignore){
                setError(error.message || "Error al cargar las canciones"); {/*se guarda el mensaje del error*/}
            }
        }finally{
            if(!ignore){
                setCargando(false); {/*cambio en los estados al finalizar la carga (esto se hará siempre)*/}
            }
        }
    }

    { /* DISPARADOR INICIAL useEffect() -> se ejecutará este código cuando el componente aparezca en pantalla*/}
    useEffect(() => { 
        let ignore = false; {/*se inicia la carga inicial con la flag ignore como false */}
        cargandoDatos(ignore);

        {/* CLEANUP -> se ejecutará sólo si el componente se desmonta o re-renderiza*/}
        return () => ignore = true;
    }, []); {/*[] se asegura de que solo se ejecute una única vez (al montar el componente)*/}

    {/* DISPARADOR MANUAL (se "reiniciará" todo al limpiar la caché) */}
    const recargar = () => {
        {/*Para recargar la caché: */}
        {/* Borramos solo la clave de nuestra app */}
        localStorage.removeItem('taylorSongsCache');
        {/* Se vuelven a pedir datos (esto genera otra vez 'cargando' -> 'fetch' -> 'render') */}
        cargandoDatos();
    };
    {/* SALIDA (datos que devuelve a App.jsx */}
    return { canciones, cargando, error, recargar };  {/*este hook devuelve un objeto con las variables de estado*/}

}