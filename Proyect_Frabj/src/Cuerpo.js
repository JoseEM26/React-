
import React from 'react';
import Banner from './Banner';


function Cuerpo() {
  const ComidaCategoria = ({ title, imgSrcArray, id }) => (
    <div id={id} className="helados">
      <h1>{title}</h1>
      <br />
      <ul>
        {imgSrcArray.map((imgSrc, index) => (
          <li key={index}>
            <a href={`#${id}`}>
              <img className="opciones" src={imgSrc} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
  <Banner/>
 
    <main>
      <ComidaCategoria
        title="ESPECIALIDADES"
        imgSrcArray={[
          '/imgs/helado1.jpg',
          '/imgs/helado2.jpg',
          '/imgs/helado3.jpg',
        ]}
        id=""
      />

      <ComidaCategoria
        title="MILKSHAKES"
        imgSrcArray={[
          '/imgs/milk1.jpg',
          '/imgs/milk2.jpg',
          '/imgs/milk3.jpg',
        ]}
        id="Milkshakes"
      />

      <ComidaCategoria
        title="FRAPPS VERANO"
        imgSrcArray={[
          '/imgs/frape1.jpg',
          '/imgs/frape2.jpg',
          '/imgs/frape3.jpg',
        ]}
        id="FRAPPS VERANO"
      />

      <ComidaCategoria
        title="FROZEN"
        imgSrcArray={[
          '/imgs/frozen1.jpg',
          '/imgs/frozen2.jpg',
          '/imgs/frozen3.png',
        ]}
        id="Frozen"
      />

      <div className="ojito">
        <a href="/">
          <img height="500px" width="70%" src="/imgs/slogan.png" id="slogan" />
        </a>
      </div>
      
    </main>
    </div>
  );
}

export default Cuerpo;

