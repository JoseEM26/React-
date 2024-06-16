import React from "react";

import ImagenesTradicionales from "./Tradiciones";

// function Item(){
//     return(
//         <div>
//             {ImagenesTradicionales.map((sss) => 
//             <img className="imgseccion" alt={sss} src={sss}/>
//         )}
//         </div>
//     )
// }

// function Cuerpo(){
//     return(
//         <div className="divseccion">
//             <Item></Item>
//         </div>
//     );
// }

// export default Cuerpo;



function Imageneesss(){
    return(
        <div>
            {ImagenesTradicionales.map((x)=>
             <img className="imgseccion" alt={x} src={x}></img>
            )}
        </div>
    )
}

function Cuerpo(){
    return(
        <div>
            <Imageneesss></Imageneesss>
        </div>
    )
}


export default Cuerpo;























