import React,{Component} from "react";

const Variables=[
  {imagenes:'img/imagenCel (1).png' ,
   nombre:'Iphone 12 Pro Max',
   precio:'S/. 2500.00',
   antes:'S/. 4000.00'},
   {imagenes:'img/imagenCel (2).png' ,
   nombre:'Iphone 11 "Purpura"',
   precio:'S/. 1500.00',
   antes:'S/. 4000.00'},
   {imagenes:'img/imagenCel (3).png ',
   nombre:'Iphone 12 "Verde"',
   precio:'S/. 2700.00',
   antes:'S/. 3700.00'},
   {imagenes:'img/imagenCel (4).png ',
   nombre:'Iphone 14 pro Max',
   precio:'S/. 3700.00',
   antes:'S/. 6700.00'}

]

class ListaCel extends Component{
  state={
    Celulares:null
  }

  constructor(props){
    super(props);
    this.state={
      Celulares:Variables.map((x)=>
        <div className="contenedorCelulares">
            <img className="celularrr" alt={x.nombre} src={x.imagenes}></img>
            <h2 className="Nombre">{x.nombre}</h2>
            <h3 className="precio">{x.precio}</h3>
            <h3 className="antes">{x.antes}</h3>
            <button className="Boton">Comprar</button>
        </div>
      
      )
    }
  }

render(){
    return(
      <div className="COntenedortto">
        {this.state.Celulares}
      </div>
    )
  }
}
export default ListaCel;

