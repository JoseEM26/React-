import React from "react";

function Comentario(){
    return(
        <div className="ContenedorComentario">
            <h2 className="h2">
            ¿Selfies increible o rendimiento para juegos?
        </h2>
        <p className="p">
            Encuentranos en IPhone que se adapta mas a tu estilo de vida.  
            <a className="enlaceParrafo" href="/">   Vamos....</a>
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