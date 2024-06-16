import React from "react";

import imgCabecera from './img/header.jpg';

//Componente funcional llamado 'Titulo'
function Titulo() {
    return (
        <h1 className="h1cab">
            {/*Comentarios en llaves: Muestra el título 'Tradiciones' con la clase 'h1cab' */}
            Tradiciones
        </h1>
    );
}

function Imagen() {
    return (
        <img src={imgCabecera} className="imgcab" alt="cabecera"/>
    );
}

function Cabecera() {
    return(
        <div className="bloque">
            <Titulo/>
            <Imagen/>
        </div>
    )
}

export default Cabecera;

// import React from "react";
// import imagenBaner from "./img/header.jpg"

// function Imagemes(){
//   return(
//        <img src={imagenBaner} className="imgcab" alt="Imagencita"></img>);
// }

// function Titulo(){
//  return(
//     <h1 className="h1cab">Tradiciones</h1> )}

// function Cabecera(){
//   return(
//      <div className="bloque">
//         <Titulo></Titulo>
//         <Imagemes></Imagemes>
//      </div>

//   )


// }  

// export default Cabecera;