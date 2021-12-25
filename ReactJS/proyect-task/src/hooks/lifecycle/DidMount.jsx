/**
 * Ejemplo de uso del método de ciclo de vida en componente clase
 * y el hook en ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (antes de que se renderice)')
    }

    render() {
        return (
            <div>
            <h1>DidMount</h1>
        </div>
        )
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (antes de que se renderice)')
        //ponemos los corchetes [] y los dejamos vacios, de esta forma solo se ejecuta una vez y conseguimos el didMount
    }, [])

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    )
}

