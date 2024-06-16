import React,{useState,useEffect} from "react";

const imgRedes = [
"/imgAnime/logo.jpeg", 
"/imgAnime/logo.png",
"/imgAnime/logo.webp"];

const Pie = () => {
  const [img, setScales] = useState(Array(imgRedes.length).fill(1));

  const Agrandar = (index) => {
    const nuevaimg = [...img];
    nuevaimg[index] = 1.2;
    setScales(nuevaimg);
  };

  const Reducir = (index) => {
    const nuevaimg = [...img];
    nuevaimg[index] = 1;
    setScales(nuevaimg);
  };

  const redesSociales = imgRedes.map((ruta, index) => (
    <img
      key={index}
      className="imgggggg"
      src={ruta}
      style={{ transform: `scale(${img[index]})`, transition: "all 0.5s" }}
      onMouseEnter={() => Agrandar(index)}
      onMouseLeave={() => Reducir(index)}
      alt={`Red social ${index}`}
    />
  ));

  return (
    <footer className="conteFo">
      <article className="divfott">
        {redesSociales}
      </article>
    </footer>
  );
};

export default Pie;
