import { Component } from "react";
import React from "react";



const Variables=[
{imagen:'/img/imagen1.png', 
 flecha:"/img/fecha1.png" ,
 texto:"Origen: Nuestros Celulares son importados de distribuidoras alrededor de mundo de acopian celulares principales de operaciones moviles u tiemdas oficiales del extranjero."      
},
{imagen:'/img/imagen2.png', 
flecha:"/img/fecha1.png" ,
texto:"Regulacion: Muestros celulares se encuentran homologados por parte del Ministerio de Transporte y Comunicaciones, lo cual es fiscalizado por aduanas al ingresar al país."      
},
{imagen:'/img/imagen3.png', 
flecha:"/img/fecha1.png" ,
texto:"Recepción y Revisión Tecnica: !LLegamos al Perú¡ Nuestros celulares pasan por un riguroso proceso de revisión técnica para asegurar su optimo rendimiento, lo que nos permite ofrecer 1 año de garantía."      
}
]




class Cuerpo extends Component{
    state={
       parrafo:null
    }

    constructor(props){
        super(props);
        this.state={
          parrafo:Variables.map((x)=>
          <div className="contenedorUnitario">
              <img className="ImagenPersona" src={x.imagen} alt="imagen"></img>
              <img className="ImagenFlecfa" src={x.flecha} alt="flecha"></img>
              <p className="parrafo">{x.texto}</p>
          </div>)
        }
    }
 
    render(){
        return(
            <div className="ContenedorMenu">
         {this.state.parrafo}
            </div>
        )
    }



}
export default Cuerpo;


