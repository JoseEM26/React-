import React,{Component} from "react";
import Pie from "../a-paginas/Pie";

const Variables=[
    {imgan:'/img/1.png',nombre:'Protector de Pantalla (Vidrio Templado)',precio:"S/.10.00"},
    {imgan:'/img/2.png',nombre:'Case Transparente',precio:"S/.15.00"},
    {imgan:'/img/3.png',nombre:'Silicona Case',precio:"S/.15.00"},
    {imgan:'/img/4.png',nombre:'Power Adapter',precio:"S/.20.00"},
    {imgan:'/img/5.png',nombre:'Lightning Cable',precio:"S/.20.00"},
    {imgan:'/img/6.png',nombre:'Cable Carga Rapida(USB-CA Lightinh)',precio:"S/.30.00"},
    {imgan:'/img/7.png',nombre:'Cable de Apple Watch',precio:"S/.30.00"},
    {imgan:'/img/8.png',nombre:'Cargador de Carga Rapida(USB-C)',precio:"S/.40.00"},
    {imgan:'/img/09.png',nombre:'EARPHONES lightning',precio:"S/.89.00"},
   
]

class Accesorios extends Component{
    state={
     RespuestosPro:null
    }

    constructor(props){
        super(props);
        this.state={
            RespuestosPro:Variables.map((x)=>
            <div className="ContenedorNietoos">
                <img  className="Celularessss" src={x.imgan} alt={x.nombre}></img>
                     <div className="negrito">
                     <div className="ContenedorTituloss">
                     <h2 className="NombreDes">{x.nombre}</h2>
                     </div>
                     <h3 className="PrecioDesc"> {x.precio}</h3>
                     <button className="ButonDesc">¡Lo Quiero!</button>
                     </div>
            </div>
            ) 
        }
    }

    render(){
        return(
            <div>
                  <div className="ContenedorPadrees">
                
                <h1 className="DescccIphone"> Repuestos</h1>
            
           <div className="ContenedorHijoos">
           {this.state.RespuestosPro}
           
           </div>
           
        </div>
        <Pie/>
            </div>
        )
    }



}
export default Accesorios;