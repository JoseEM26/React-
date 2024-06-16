import React,{Component} from "react";

const elementos = ['Index', 'Tradiciones', 'Gastronomía', 'Plato Bandera', 'Selva', 'Contáctenos'];

class Menu extends Component{
    state = {
        item: []
    }

    constructor(props){
        super(props);
        this.state = {
            item: elementos.map((x) => <a className="item" href="/">{x}</a>)
        }
    }

    render(){
        return(
            <div className="bloque">
                {this.state.item}
            </div>
        )
    }


}

export default Menu;