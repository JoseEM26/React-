import React from "react";

function Comentario(){
    return(
        <div className="ContenedorComentario">
            <h2 className="h2">
            ¿Selfies increíbles o rendimiento para juegos?
        </h2>
        <p className="p">
            Encuentranos un IPhone que se adapte a tu estilo de vida.  
            <a className="enlaceParrafo" href="/">   Vamos...</a>
        </p>
        </div>
    )
}
function Publicidad(){
    return(
        <Comentario></Comentario>
    )
}

export default Publicidad;