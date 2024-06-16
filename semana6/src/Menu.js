import React, { useState } from "react";

const itemsData = [
    { name: 'Index', link: 'https://www.google.com' },
    { name: 'Tradiciones', link: 'https://www.google.com' },
    { name: 'Gastronomía', link: 'https://www.google.com' },
    { name: 'Plato Bandera', link: 'https://www.google.com' },
    { name: 'Contáctenos', link: 'https://www.google.com' },
    { name: 'Google', link: 'https://www.google.com' }
]

//componente funcional
const Menu = () => {
    //usamos el hook useState para manejar los estados
    const [items, setItems] = useState([]);

    useState(() => {
        const menuItems = itemsData.map((item, index) => (
            <a
                key={index}
                href={item.link}
                className="item"
                target="_blank"
            >
                {item.name}
            </a>
        )

        )
        //establecemos los elementos del menú
        setItems(menuItems);

    }, []);

    return(
        <div className="bloque">
            {items}
        </div>
    )
}
