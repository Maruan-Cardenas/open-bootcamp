/**
 * Ejemplo hooks
 * useState()
 * useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

const miContexto = React.createContext(null)

const Componente1 = () => {
    // Iniciamo un estado vacio que va a rellenarse con los
    // datos del contexto del padre
    const state = useContext(miContexto)
    return (
        <div>
            <h1>
                El Token es: {state.token}
            </h1>
            {/* Pintamos el componente 2 */}
            <Componente2 />
        </div>
    )
}

const Componente2 = () => {
    const state = useContext(miContexto)
    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    )
}

export default function MiComponenteConContexto () {

    const estadoInicial = {
        token: '3858302',
        sesion: 1
    }

    // Creamos el estado de este Componente
    const [sesionData, setSesionData] = useState(estadoInicial)

    function actualizarSesion() {
        setSesionData(
            {
                token: '9876743',
                sesion: sesionData.sesion + 1
            }
        )
    }

    return (
        <miContexto.Provider value={sesionData}>
            {/* Todo lo que este aquí dentro puede leer los datos de sesionData */}
            {/* Además, si se actualiza, los componentes de aquí, también se actualizan */}
            <h1>***Ejemplo de useState y useContext()***</h1>
            <Componente1 />
            <button onClick={actualizarSesion}>Actualizar Sesión</button>
        </miContexto.Provider>
    );
}


