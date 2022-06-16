import React, { useState, useEffect } from "react";

export const ClockFunction = () => {

    const [date, setDate] = useState({
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    });

   function tick(){
        setDate((prevState) => {
            let edad = prevState.edad +1;
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        });
    }

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);


    return(
        <div>
            <h2>Hora Actual:{date.fecha.toLocaleTimeString()}</h2>
            <h3>{date.nombre} {date.apellidos}</h3>
            <h1>Edad: {date.edad}</h1>
        </div>
    )

   
}