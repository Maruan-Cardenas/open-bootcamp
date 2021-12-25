/**
 * Ejemplo de uso de método ComponentWillUnmount en componente clase
 * y el hook en componente funcional
 * (cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export class DidUnmount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca')
    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        )
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
            // Todo lo que haya en el return se ejecuta antes de terminar el ciclo de vida del componente
        }
    }, [])

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    )
}