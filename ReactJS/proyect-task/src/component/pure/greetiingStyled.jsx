import React, { useState } from 'react'

// Definiendo estilos en constantes

// ? Estilo para usuario logueado
const loggedStyle = {
    color: 'cyan',
    fontWeight: 'bold'
}

// ? Estilo para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold',
}


const GreetingStyled = (props) => {

    //Generamos un estado para el Componenete
    // y así controlar si el usuario está o no logueado
    const [logged, setLogged] = useState(false)

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            <p>Hola, {props.name}</p>
            <button onClick={() => setLogged(!logged)}>
                {logged ? 'logout' : 'login'}
            </button>
        </div>
    )
}

export default GreetingStyled