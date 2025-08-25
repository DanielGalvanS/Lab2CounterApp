import React, { useState } from "react";

export const CounterApp = ({value}) =>{

    const [valor, setValor] = useState(value);
    const ClickBoton = () =>{
        setValor(valor + 1);
    }

    return(
        <div>
            <h1>CounterApp</h1>
            <h2>{valor}</h2>
            <button onClick={ClickBoton}>
                Contador
            </button>
        </div>
    );
}