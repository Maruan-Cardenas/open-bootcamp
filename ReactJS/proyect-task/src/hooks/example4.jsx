/**
 * Ejemplo para entender el uso de props.children
 */

import React from 'react';

const Example4 = (props) => {
    return (
        <div>
            <h1>*** Ejemplo de CHildren Props ***</h1>
            <h2>
                Nombre: { props.nombre }
            </h2>
            {/* props.children pintará por defecto aquello que se encuentre en tre las etiquetas de paertura y cierre de este componente desde el compnente de orde superior */}
            {props.children}
        </div>
    );
}

export default Example4;
