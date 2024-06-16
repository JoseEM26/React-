import React, {useState, useEffect} from "react";

const Imagenes = [
    "/img/ban1.jpg",
    "/img/ban2.jpg",
    "/img/ban3.jpg",
    "/img/ban4.jpg",
    "/img/ban5.jpg"
]

const Cabecera = () => {
    //declaro los estados iniciales utilizando el hook useState
    const [titulo, setTitulo] = useState('Consúltanos');
    const [imgcab, setImgcab] = useState('/img/ban1.jpg');
    //const [c, setC] = useState(0);

    useEffect(()=> {
        const intervalo = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * Imagenes.length);
            //actualizamos el estado del {indice}
            //setC(randomIndex);
            //Actualizamos el estado de la imagen 
            setImgcab(Imagenes[randomIndex]);
            setTitulo('Tradiciones');
        }, 1000);

        //Limpiamos el intervalo cuando el componente se desmonta para evitar los problemas en memoria
        return() => clearInterval(intervalo);
    }, []);

    return(
        <div className="bloque">
            <h1 className="h1cab">{titulo}</h1>
            <img className="imgcab" src={imgcab} alt={titulo} />
        </div>
    )

}

export default Cabecera