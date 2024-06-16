import React,{useState} from "react";

const Variable=[
    {  name:'index' ,   url:'/'},
    {  name:'index' ,   url:'/'},
    {  name:'index' ,   url:'/'},
    {  name:'index' ,   url:'/'},
    {  name:'index' ,   url:'/'},
    {  name:'index' ,   url:'/'}
]

const Menu=()=>{
    const[item,setItem]=useState([]);

    useState(()=>{
        const menuItems=Variable.map((x,y)=>(
            <a href={x.url} key={y} className="item">
                  {x.name}
            </a>
        ))
        setItem(menuItems)
    },[])

    return(
        <div className="bloque"> 
            {item}
        </div>
    )
}

export default Menu;