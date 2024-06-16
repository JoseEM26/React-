import React from "react";
import ImagenPie from './img/pie.jpg';

function ImgPie(){
    return(
        <img alt="Pie de página" src={ImagenPie}/>
    );
}

function Pie(){
    return(
        <div>
            <ImgPie/>
        </div>
    )
}

export default Pie;