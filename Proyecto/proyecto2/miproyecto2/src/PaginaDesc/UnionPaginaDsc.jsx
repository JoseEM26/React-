import React, { Component } from "react";
import Pie from "../a-paginas/Pie";

const VarDesc = [

    {
        Imagenes: 'img/ProDesc (1).jpg',
        Nombre: 'IPhone SE 2020',
        Color: 'Naranja',
        Precio: 'S/. 799.00',
        PrecAnte: 'S/. 1,399.00'
    },
    {
        Imagenes: 'img/ProDesc (2).jpg',
        Nombre: 'IPhone SE 2022',
        Color: 'Negro',
        Precio: 'S/. 949.00',
        PrecAnte: 'S/. 999.00'
    },
    {
        Imagenes: 'img/ProDesc (3).jpg',
        Nombre: 'IPhone 13 Mini',
        Color: 'Celeste',
        Precio: 'S/. 1,449.00',
        PrecAnte: 'S/. 3,199.00'
    },
    {
        Imagenes: 'img/ProDesc (4).jpg',
        Nombre: 'IPhone SE 2020',
        Color: 'Blanco',
        Precio: 'S/. 579.00',
        PrecAnte: 'S/. 799.00'
    },
    {
        Imagenes: 'img/ProDesc (5).jpg',
        Nombre: 'IPhone 12 Mini',
        Color: 'Rojo',
        Precio: 'S/. 949.00',
        PrecAnte: 'S/. 1,899.00'
    },
    {
        Imagenes: 'img/ProDesc (6).jpg',
        Nombre: 'IPhone 12',
        Color: 'Verde Claro',
        Precio: 'S/. 1,399.00',
        PrecAnte: 'S/. 2,299.00'
    }
]


class ListaDesc extends Component {
    state = {
        Celulares:null
    }

    constructor(props) {
        super(props);
        this.state = {
            Celulares: VarDesc.map((x) =>
                <div className="BloqDesc">
                    <img className="ProducDesc" src={x.Imagenes}></img>
                    <div className="BloqInfo">
                    <h3 className="NomProduc">{x.Nombre}</h3>
                    <h3 className="ColorProduc">{x.Color}</h3>
                    <h2 className="PrecDesc">{x.Precio}</h2>
                    <p className="PrecSinDesc">{x.PrecAnte}</p>
                    <button className="btnPagDesc">¡Lo Compro!</button>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="ContenedorPadre" >
                
                <h1 className="Desccc"> Descuentos: </h1>
                
                <div className="ConteListDesc">
                    
                {this.state.Celulares}

                </div>
                <div>
                    <Pie></Pie>
                </div>
            </div>
        )
    }
}





export default ListaDesc;