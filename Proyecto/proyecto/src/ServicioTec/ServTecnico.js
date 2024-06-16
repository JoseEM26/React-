import React, { Component } from "react";
import Pie from "../a-paginas/Pie";

const VarSevTec = [
    {
        ImgServTec : '/img/Repuesto (1).png',
        Nom : 'DISPLAY LCD REPUESTO',
        Prec : 'S/. 200.00'
    },
    {
        ImgServTec : '/img/Repuesto (2).png',
        Nom : 'BATERIA IPHONE 13',
        Prec : 'S/. 300.00'
    },
    {
        ImgServTec : '/img/Repuesto (3).png',
        Nom : 'CAMARA IPHONE 14',
        Prec : 'S/. 500.00'
    },
    {
        ImgServTec : '/img/Repuesto (4).png',
        Nom : 'CAMARA IPHONE 13 PRO',
        Prec : 'S/. 480.00'
    }
]

class Iphone extends Component{
    state={
     RespuestosPro:null
    }

    constructor(props){
        super(props);
        this.state={
            RespuestosPro:VarSevTec.map((x)=>
            <div className="ContenedorNietoosTecnicio">
                <img  className="Celularessss" src={x.ImgServTec} alt={x.Nom}></img>
                     <div className="negrito">
                     <div className="ContenedorTituloss">
                     <h2 className="NombreDes">{x.Nom}</h2>
                     </div>
                     <h3 className="PrecioDesc"> {x.Prec}</h3>
                     <button className="Boton">!Lo compro¡</button>
                     </div>
            </div>
            ) 
        }
    }

    render(){
        return(
            <div>
                  <div className="ContenedorPadreesTecnico">
                
                <h1 className="DescccServicio"> Servicio Tecnico</h1>
            
           <div className="ContenedorHijooss">
           {this.state.RespuestosPro}
           
           </div>
           
        </div>
        <Pie/>
            </div>
        )
    }



}
export default Iphone;