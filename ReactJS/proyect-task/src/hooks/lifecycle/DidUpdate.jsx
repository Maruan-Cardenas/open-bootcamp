/**
 * Ejemplo de uso de método ComponentDidUpdate en componente clase
 * y el hook en componente funcional
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recibe nuevas props o cambioe en su estado privado')
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        )
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevas props o cambioe en su estado privado')
        //No ponemos los corchetes [] de esta forma se ejecuta cada vez que haya un cambio, así conseguimos el didUpdate
    })

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    )
}
