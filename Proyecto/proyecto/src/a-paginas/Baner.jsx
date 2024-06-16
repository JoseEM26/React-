import React from "react";
import banner from "../img/Baner1.png"

function Imagen(){
    return(
       <div>
        <img src={banner} alt="banerr" className="Baner" useMap="#mapitaaaa"></img>
          
          <map name="mapitaaaa">
             <area shape="circle" coords="504,464,78"   href="/"  alt="boton"></area>
          </map>
       </div>
        
    )
}

function Baner(){
   return(
    <Imagen></Imagen>
   )

}



export default Baner;
