import React from "react";
import { usuarios } from "../assets/data";

export const ArchivoImportacion = () => {
    return (
        <>
            <h2>Correos creados por él:</h2>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.email}</li>
                ))}
            </ul>
        </>
    );
}