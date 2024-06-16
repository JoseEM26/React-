import React,{useState,useEffect} from "react";


const ChinaFotos = [
    "/imgAnime/animeN (1).jpg",
    "/imgAnime/animeN (2).jpg",
    "/imgAnime/animeN (3).jpg",
    "/imgAnime/animeN (4).jpg",
    "/imgAnime/animeN (5).jpg",
    "/imgAnime/animeN (6).jpg"
]

const CarruselChina = () => {
    const [baner, setBaner] = useState('/imgAnime/animeN (1).jpg');

useEffect(()=> {const interval=setInterval(()=>{
    const randomIndex = Math.floor(Math.random()*ChinaFotos.length);
    setBaner(ChinaFotos[randomIndex]);}, 1000);
    return() => clearInterval(interval);}, []);

    return(
        <div className="contenedorBaner">
            <img className="bann" src={baner} alt='wwwwwwww' />
        </div>
    )

}

export default CarruselChina