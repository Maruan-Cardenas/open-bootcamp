import React, {useState, useEffect} from 'react'

const Clockjsx = () => {
    const data = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellidos: 'San José'
    }
    const [clockData, setClockData] = useState(data)

    useEffect(() => {
        const timerID = setInterval(()=>{
            setClockData({
                fecha: new Date(),
                edad: clockData.edad + 1,
                nombre: clockData.nombre,
                apellidos: clockData.apellidos
                })
        }, 1000)

        return () => {
            clearInterval(timerID);
        };
    }, [ clockData]);

    return (
        <div>
            <h2>
                Hora Actual:
                {clockData.fecha.toLocaleTimeString()}
            </h2>
            <h3>{clockData.nombre} {clockData.apellidos}</h3>
            <h1>Edad: {clockData.edad}</h1>
        </div>
        )
}

export default Clockjsx