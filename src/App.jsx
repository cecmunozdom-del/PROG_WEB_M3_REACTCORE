{/*App.jsx -> componente raíz del proyecto*/}

import { useState } from 'react'

{/*import de componentes*/}
import Header from "./components/Header"
import Buscador from "./components/Buscador"
import BotonCache from './components/BotonCache'
import TarjetaCancion from './components/TarjetaCancion'
import Estado from './components/Estado'

{/*import de la función de hook personalizada, y la función de filtrado*/}
import { useCanciones} from './hooks/useCanciones'
import { filtrandoCanciones } from './logica'

export default function App() {
  
  {/*posibles estados de la app*/}
  const { canciones, cargando, error, recargar } = useCanciones(); {/* este objeto con variables lo recibimos del hook useCanciones() */}
  const [busqueda, setBusqueda] = useState(''); {/* estado de la búsqueda, comenzará como un string vacío */}

  {/*valor derivado -> no hace falta hacer otro useState para canciones filtradas*/}
  {/*con la función de filtrandoCanciones() se actualiza con cada búsqueda en cada render*/}
  const cancionesFiltradas = filtrandoCanciones(canciones, busqueda);

  {/*para borrar caché*/}
  const manejarLimpiarCache = () => {
    recargar();
    window.alert("Caché eliminada con éxito.");
  };

  {/*se devuelve la estructura de HTML*/}
  return (
    <div id="app">
      <Header />

      <main>
        <div className="contenedor">
          {/*le pasamos props al buscador -> valor de la búsqueda, la función para actualizar el texto*/}

          <div className="controles">
            <Buscador
              textoBusqueda={busqueda}
              onCambioBusqueda={setBusqueda}
            />
            {/*separación del buscador y el botón de limpiar caché*/}
            <BotonCache 
              onLimpiarCache={manejarLimpiarCache}
            />
          </div>
          

          {/*cambios del estado de las búsquedas (cargando - error - vacío/sin resultados) */}
          {/*&& -> si la condición izquierda es verdadera, se evalúa y se hace lo de la derecha*/}
          {cargando && <Estado tipo="cargando" />}
          
          {error && <Estado tipo="error" mensaje={error} />}

          {!cargando && !error && cancionesFiltradas.length === 0 && (
            <Estado tipo="vacio" />
          )}

          {/*ahora en caso de que SÍ se muestren canciones: */}
          {!cargando && !error && cancionesFiltradas.length > 0 && (
            <div id="contenedorCanciones">
              {/* por cada canción de las filtrdas, se devuelve su componente TarjetaCancion */}
              {/*grid de tarjetas, podemos usar key ya que trackId es único y estable*/}
              {cancionesFiltradas.map((cancion) => (
                <TarjetaCancion key={cancion.id} cancion={cancion} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}