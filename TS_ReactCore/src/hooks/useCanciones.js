import { useState, useEffect } from 'react';
import { fetchCanciones } from '../api.js';
import { transformCanciones } from '../logica.js';

export function useCanciones() {
    const [canciones, setCanciones] = useState([]); {/*estado de canciones que comienza como array vacío*/}
    const [cargando, setCargando] = useState(true); {/*estado para carga, empieza en true porque al abrir app ya está esperando datos*/}
    const [error, setError] = useState(null); {/*estado para error, empieza en null porque no hay fallos al inicio
                                                cuando los haya guardará su string correspondiente*/}

    {/* useEffect() -> se ejecutará este código cuando el componente aparezca en pantalla*/}
    useEffect(() => { 

        async function cargandoDatos(){
            try{
                {/*cambio en los estados (cargando sin error)*/}
                setCargando(true);
                setError(null);

                //datos en bruto usando api.js
                //es necesario hacer await aquí porque fetchCanciones devuelve una promesa
                const datosBruto = await fetchCanciones(); 

                //se limpian con logica.js
                const datosLimpios = transformCanciones(datosBruto);

                //se guardan en el estado
                setCanciones(datosLimpios);

            }catch(error){
                setError(error.message || "Error al cargar las canciones"); //se guarda el mensaje del error
            }finally{
                setCargando(false); {/*cambio en los estados al finalizar la carga (esto se hará siempre)*/}
            }
        }

        cargandoDatos();
    }, []); {/*[] se asegura de que solo se ejcute una única vez (al montar el componente)*/}

    return { canciones, cargando, error };  {/*este hook devuelve un objeto con las variables de estado
        */}

}