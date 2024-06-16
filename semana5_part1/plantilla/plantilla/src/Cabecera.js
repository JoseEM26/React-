import React, { Component } from "react";

const Imagenes = [
    '/img/ban1.jpg',
    '/img/ban2.jpg',
    '/img/ban3.jpg',
    '/img/ban4.jpg',
    '/img/ban5.jpg'
];

class Cabecera extends Component {
    state = {
        titulo: "",
        imgcab: "",
        c: 0
    }

    constructor(props) {
        super(props);
        this.state = {
            titulo: "Tradiciones",
            imgcab: "/img/ban1.jpg",
            c: 0
        }
    }

    render(){
        setTimeout(()=> this.setState({
            c: Math.floor(Math.random()*(Imagenes.length-1)),
            imgcab: Imagenes[this.state.c]
        }),1000)
        return(
            <div className="bloque">
                <h1 className="h1cab">{this.state.titulo}</h1>
                <img className="imgcab" src={this.state.imgcab} alt="Cabecera"/>
            </div>
        )
    }
}

export default Cabecera;