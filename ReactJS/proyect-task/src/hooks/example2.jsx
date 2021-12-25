/**
 * Ejemplo de uso de:
 * useState()
 * useRef() identifica referencias dentro de la vista
 * useEffect()
 */

import React, {useState, useRef, useEffect} from 'react';

const Example2 = () => {
    //Vamos a crear dos contadores distintos
    //cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //vamos a crear una referencia con useRef() para asociar una variables
    //con un elemento del DOM del componente (vista HTML)
    const miRef = useRef()

    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    /**
     * Trabajando con useEffect 
     * */

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cadavez que haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro del useEffect
     */

    // useEffect(() =>{
    //     console.log('Cambio en el estado del componente')
    //     console.log('Mostrando referencia a elemento del DOM')
    //     console.log(miRef)
    // })

    /**
     * ? Caso 2: Ejecutar SOLO cuando cambie contador 1
     * Cadavez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * En caso de que cambie contador 2, no habrá ejecución
     */

    // useEffect(() =>{
    //     console.log('Cambio en el estado del contador 1')
    //     console.log('Mostrando referencia a elemento del DOM')
    //     console.log(miRef)
    // }, [contador1])

    /**
     * ? Caso 2: Ejecutar SOLO cuando cambie contador 1 o contador 2
     * Cadavez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * Cadavez que haya un cambio en contador 2, se ejecuta lo que diga el useEffect()
     */

    useEffect(() =>{
        console.log('Cambio en el estado del contador 1 / contador 2')
        console.log('Mostrando referencia a elemento del DOM')
        console.log(miRef)
    }, [contador1, contador2])

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef(), useEffect() ***</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>

            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            <div>
                <button onClick={incrementar1}>Contador 1</button>
                <button onClick={incrementar2}>Contador 2</button>
            </div>
        </div>
    );
}

export default Example2;
