import React from "react";
import logo from "./imagenes/icono1.png"


const Variables=[
    { texto:"Conócenos", url:"/"},
    { texto:"Productos", url:"/"},
    { texto:"Contáctanos", url:"/"},
    { texto:"Servicio Técnico", url:"/"},
    { texto:"Descuentos", url:"/"}
]

function ItemMenu({texto,url}){
    return(
        <a className="Nav" href={url}>{texto}</a>
    )

}
function Logo(){
    return(
       <a href="/"><img className="logo" src={logo} alt="logoManzana"></img></a>
    );
}

function Menu(){
   return(
    <div className="bloque">
        <Logo></Logo>
        
        {Variables.map((x)=> <ItemMenu texto={x.texto} url={x.url}></ItemMenu>
        )}
    </div>);

}


export default Menu;