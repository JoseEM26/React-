import React from "react";

const imgRedes = [
    "/img/twitter.jpg",
    "/img/face.jpg",
    "/img/instagram.jpg"
]


function Pie() {
    const handleMouseEnter = (event) => {
        event.target.style.transform = 'rotate(360deg)';
        event.target.style.transition = 'all 1s';
    }

    const handleMouseLeave = (event) => {
        event.target.style.transform = 'rotate(0)';
        event.target.style.transition = 'all 1s';
    }

    const redesSociales = imgRedes.map((ruta, index) => (
        <img
            key={index}
            className="img-rs"
            src={ruta}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            alt={`Red social ${index}`}
        />
    ))

    

    return(
        <footer>
            <article className="div-footer">
                <h3>Síguenos en:</h3>
                {redesSociales}
            </article>
        </footer>
    )

}

export default Pie;