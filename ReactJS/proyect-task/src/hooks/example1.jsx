import React, { useState } from 'react'

const Example1 = () => {
    const valorInicial = 0
    const personaInicial = {
        nombre: 'Maruan',
        email: 'maruan@gmail.com'
    }
    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1)
    }

    /**
     * funcion para actualizaar el estado de persona en el componente  
     */
    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Marwan',
                email: 'marwan@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la persona</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            <div>
                <button onClick={incrementarContador}> +1 </button>
                <button onClick={actualizarPersona}> Actualizar datos </button>
            </div>
        </div>
    )
}

export default Example1
