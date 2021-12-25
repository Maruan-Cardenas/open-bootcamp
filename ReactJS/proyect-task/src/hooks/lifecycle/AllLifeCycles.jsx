import React, { useEffect } from 'react';

const AllLifeCycles = () => {

    useEffect(() => {
        console.log('Componente creado')

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('actualización del componente')
        }, 1000)

        return () => {
            console.log('Componenete va a desaparecer')
            document.title = 'El tiempo se ha detenido'
            clearInterval(intervalID)
        }
    }, [])
 
    return (
        <div>
            
        </div>
    );
}

export default AllLifeCycles;
