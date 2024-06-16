import React,{Component} from "react";

const Variables=[
    {imgan:'/imagense/1.png',nombre:'Protector de Pantalla (Vidrio Templado)',precio:"S/.10.00"},
    {imgan:'/imagense/2.png',nombre:'Case Transparente',precio:"S/.15.00"},
    {imgan:'/imagense/3.png',nombre:'Silicona Case',precio:"S/.15.00"},
    {imgan:'/imagense/4.png',nombre:'Power Adapter',precio:"S/.20.00"},
    {imgan:'/imagense/5.png',nombre:'Lightning Cable',precio:"S/.20.00"},
    {imgan:'/imagense/6.png',nombre:'Cable Carga Rapida(USB-CA Lightinh)',precio:"S/.30.00"},
    {imgan:'/imagense/7.png',nombre:'Cable de Apple Watch',precio:"S/.30.00"},
    {imgan:'/imagense/8.png',nombre:'Cargador de Carga Rapida(USB-C)',precio:"S/.40.00"},
    {imgan:'/imagense/09.png',nombre:'EARPHONES lightning',precio:"S/.89.00"},
   
]

class Servicio extends Component{
    state={
     RespuestosPro:null
    }

    constructor(props){
        super(props);
        this.state={
            RespuestosPro:Variables.map((x)=>
            <div className="ContenedorNieto">
                <img  className="Celularessss" src={x.imgan} alt={x.nombre}></img>
                <div className="ContenedorTituloss">
                <h2 className="NombreDes">{x.nombre}</h2>
                </div>
                <h3 className="PrecioDesc"> {x.precio}</h3>
                <button className="ButonDesc">¡Lo Quiero!</button>
            </div>
            ) 
        }
    }

    render(){
        return(
            <div className="ContenedorPadre">
                <div>
                    <h1 className="ContenedorTitule">
                        Repuestos
                    </h1>
                </div>
               <div className="ContenedorHijo">
               {this.state.RespuestosPro}
               </div>
            </div>
        )
    }



}
export default Servicio;