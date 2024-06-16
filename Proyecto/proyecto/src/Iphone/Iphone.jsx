import React, { Component } from "react";
import Pie from "../a-paginas/Pie";

const Variables = [
  {
    imgan: "/img/Iphonee (1).png",
    nombre: "iPhone 13 Pro Max",
    precio: "S/.3,299.00",
  },
  {
    imgan: "/img/Iphonee (2).png",
    nombre: "iPhone 13 Pro",
    precio: "S/.2,999.00",
  },
  {
    imgan: "/img/Iphonee (3).png",
    nombre: "iPhone 14 Plus",
    precio: "S/.2,999.00",
  },
  { imgan: "/img/Iphonee (4).png", nombre: "iPhone 14", precio: "S/.2,449.00" },
  {
    imgan: "/img/Iphonee (5).png",
    nombre: "iPhone 12 Pro Max",
    precio: "S/.2,299.00",
  },
  {
    imgan: "/img/Iphonee (6).png",
    nombre: "iPhone 11 Pro Max",
    precio: "S/.2,249.00",
  },
  { imgan: "/img/Iphonee (7).png", nombre: "iPhone 13", precio: "S/.1,999.00" },
  {
    imgan: "/img/Iphonee (8).png",
    nombre: "iPhone 12 Pro",
    precio: "S/.1,699.00",
  },
  {
    imgan: "/img/Iphonee (9).png",
    nombre: "iPhone 13 Mini",
    precio: "S/.1,699.00",
  },
  {
    imgan: "/img/Iphonee (10).png",
    nombre: "iPhone 12",
    precio: "S/.1,549.00",
  },
  {
    imgan: "/img/Iphonee (11).png",
    nombre: "iPhone 11 Pro",
    precio: "S/.1,499.00",
  },
  {
    imgan: "/img/Iphonee (12).png",
    nombre: "iPhone SE 2022",
    precio: "S/.999.00",
  },
  {
    imgan: "/img/Iphonee (13).png",
    nombre: "iPhone 11",
    precio: "S/.1,049.00",
  },
  {
    imgan: "/img/Iphonee (14).png",
    nombre: "iPhone 12 Mini",
    precio: "S/.1,099.00",
  },
  {
    imgan: "/img/Iphonee (15).png",
    nombre: "iPhone Xr",
    precio: "S/.1,099.00",
  },
  { imgan: "/img/Iphonee (16).png", nombre: "iPhone XS", precio: "S/.849.00" },
  {
    imgan: "/img/Iphonee (17).png",
    nombre: "iPhone SE 2020",
    precio: "S/.799.00",
  },
];

class Iphone extends Component {
  state = {
    RespuestosPro: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      RespuestosPro: Variables.map((x) => (
        <div className="ContenedorNietoos">
          <img className="Celularessss" src={x.imgan} alt={x.nombre}></img>
          <div className="negrito">
            <div className="ContenedorTituloss">
              <h2 className="NombreDes">{x.nombre}</h2>
            </div>
            <h3 className="PrecioDesc"> {x.precio}</h3>
            <a href="/" className="cccc">
            <button className="Boton">!Lo compro¡</button>

            </a>
          </div>
        </div>
      )),
    };
  }

  render() {
    return (
      <div>
        <div className="ContenedorPadrees">
          <h1 className="DescccIphone"> Iphone</h1>

          <div className="ContenedorHijoos">{this.state.RespuestosPro}</div>
        </div>
        <Pie />
      </div>
    );
  }
}
export default Iphone;
