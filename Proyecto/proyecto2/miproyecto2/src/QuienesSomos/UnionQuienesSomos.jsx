import React from "react";
import Cuerpo from "./Cuerpo";
import Mensajes from "./Mensaje";
import Pie from "../a-paginas/Pie";

function UnionQuienesSomos(){
    return(
        <div>
           <Mensajes></Mensajes>
           <Cuerpo></Cuerpo>
           <Pie></Pie>

        </div>
    )
}
export default UnionQuienesSomos;