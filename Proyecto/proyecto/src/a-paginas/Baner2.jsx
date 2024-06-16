import baner2 from "../img/Baner2.png"
import React from "react"


function Imagencita(){
    return(
       
       <div>
      <img src={baner2} alt="NoSeEncuentra" className="Baner2" useMap="#mapit"/>

        <map name="mapit">
             <area shape="circle" coords="599,406,315"   href="/"  alt="boton"></area>
          </map>
       </div>
    )
   }
   
   
   function Baner2(){
     return(
      <Imagencita></Imagencita>
        )
   }

export default Baner2;