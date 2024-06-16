import React, { Component } from "react";

import Grupo from './GrupoTradicion';

class Cuerpo extends Component {
    state = {
        imgs: null
    }

    constructor(props) {
        super(props);
        this.state = {
            imgs: Grupo.map((x) =>
                <article className="art-tradicion">
                    <img className="img-tradicion" alt={x.titulo} src={x.imagen} />
                    <h3 className="h3cab">{x.titulo}</h3>
                </article>
            )
        }
    }
    render(){
        return(
        <div>
            {this.state.imgs}
        </div>)
    }
}

export default Cuerpo;