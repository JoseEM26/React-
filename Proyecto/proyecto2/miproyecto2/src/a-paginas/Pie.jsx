import React from "react";

function Sobre(){
    return(
        <div className="Parrafo">
            <h2 className="Titulo">
                Sobre AppleEssence:
            </h2>
            <ul className="Columna" >
                <li>Estado Iphone</li>
                <li>Garantía</li>
                <li>Filosofía</li>
                <li>Quiero Comprar</li>
            </ul>
        </div>
    )
}

function Ayuda(){
    return(
        <div className="Parrafo">
            <h2 className="Titulo">
                Ayuda
            </h2>
            <ul className="Columna" >
                <li>Preguntas Frecuentes</li>
                <li>Libro de Reclamos</li>
                <li>Términos y COndiciones</li>
                <li>Comprobante Electrónicos</li>
                <li>Trabaja con Nosotros</li>
            </ul>
        </div>
    )
}

function Contactos(){
    return(
        <div className="Parrafo">
            <h2 className="Titulo">
                Contáctanos
            </h2>
            <ul className="Columna" >
                <li>Envios</li>
                <li>Contactos</li>
            </ul>
        </div>
    )
}

function Pie(){
    return(
        <div className="ContenedorPie">
            <Sobre></Sobre>
            <Ayuda></Ayuda>
            <Contactos></Contactos>
        </div>
    )
}

export default Pie;