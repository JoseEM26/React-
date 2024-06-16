import { Component } from "react";
import React from "react";



const Variables=[
{imagen:'/imagense/imagen1.png', 
 flecha:"/imagense/fecha1.png" ,
 texto:"Origen Nuestros Celulares son importados de distribuidoras alrededor de mundo de acopian celulares principales de operaciones moviles u tiemdas oficiales del extranjero"      
},
{imagen:'/imagense/imagen2.png', 
flecha:"/imagense/fecha1.png" ,
texto:"Origen Nuestros Celulares son importados de distribuidoras alrededor de mundo de acopian celulares principales de operaciones moviles u tiemdas oficiales del extranjero"      
},
{imagen:'/imagense/imagen3.png', 
flecha:"/imagense/fecha1.png" ,
texto:"Origen Nuestros Celulares son importados de distribuidoras alrededor de mundo de acopian celulares principales de operaciones moviles u tiemdas oficiales del extranjero"      
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




