import React, {useState} from "react";

const itemsData = [
    { nombre: 'Index', enlace: 'https://www.google.com.pe'},
    { nombre: 'Tradiciones', enlace: 'https://www.google.com.pe'},
    { nombre: 'Gastronomía', enlace: 'https://www.google.com.pe'},
    { nombre: 'Plato Bandera', enlace: 'https://www.google.com.pe'},
    { nombre: 'Contáctenos', enlace: 'https://www.google.com.pe'},
    { nombre: 'Los Jalados', enlace: 'https://www.google.com.pe'}
]

const Menu = () => {
    const [elementos, setElementos] = useState([]);

    useState(() => {
        const menuItems = itemsData.map((elemento, index) => (
            <a
                key={index}
                href={elemento.enlace}
                className="item"
                target="_blank"
            >
                {elemento.nombre}
            </a>
        ));
        //Establecemos los elementos de menú
        setElementos(menuItems);
    }, []); //el segundo argumento del useState ([]) asegura que el estado se configure una sola vez

    //Renderizamos
    return(
        <div className="bloque">
            {elementos}
        </div>
    )
}

export default Menu;