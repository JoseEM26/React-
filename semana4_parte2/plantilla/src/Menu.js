import React from "react";

//creamos un arreglo de objetos que contienen el nombre y la URL de cada elemento del menú.
const cubos = [
    {text: 'Index', url: '/'},
    {text: 'Tradiciones', url: '/App2'},
    {text: 'Gastronomía', url: '/gastronomia'},
    {text: 'Plato Bandera', url: '/plato-bander'},
    {text: 'Contáctenos', url: '/contactenos'},
    {text: 'Google', url: 'https://www.google.com.pe'}

];

//creamos componente funcional para un elemento del menú
function MenuItem({text, url}){
    return (
        <a href={url} className="item">
            {text}
        </a>
    );
}

//Crear un componente funcional para el menú
function Menu(){
    return (
     <div className="bloque">
     {cubos.map((item) => ( <MenuItem text={item.text} url={item.url}/>))}
     </div>
    );
}

export default Menu;


// import React from "react";

//   const cubos=[
//     {text:"index" ,url:"/"},
//     {text: 'Tradiciones', url: '/App2'},
//         {text: 'Gastronomía', url: '/gastronomia'},
//         {text: 'Plato Bandera', url: '/plato-bander'},
//         {text: 'Contáctenos', url: '/contactenos'},
//         {text: 'Google', url: 'https://www.google.com.pe'}
//   ];


//   function ItemMenu({text,url}){
//     return(
//         <div>
//             <a className="item" href={url}>{text}</a>
//        </div>
//     ) }

//     function Menu(){
//         return(
//             <div className="bloque">
//                 {cubos.map((item)=>(
//                     <ItemMenu text={item.text} url={item.url}></ItemMenu>
//                 )
                
//                 )}
//             </div>
//         )
//     }

//     export default Menu;






















































