
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
        title="Descuentos"
        imgSrcArray={[
          '/imgs/Iphonee (15).png',
          '/imgs/Iphonee (17).png',
          '/imgs/Iphonee (16).png',
        ]}
        id=""
      />

      <ComidaCategoria
        title="Iphone"
        imgSrcArray={[
          '/imgs/Iphonee (1).png',
          '/imgs/Iphonee (2).png',
          '/imgs/Iphonee (3).png',
        ]}
        id="Milkshakes"
      />

      <ComidaCategoria
        title="Mackbooks"
        imgSrcArray={[
          '/imgs/MacBookAir.webp',
          '/imgs/MacBookPro.webp',
          '/imgs/MacBookAir.webp',
                ]}
        id="FRAPPS VERANO"
      />

      <ComidaCategoria
        title="Accesorios"
        imgSrcArray={[
          '/imgs/1.png',
          '/imgs/2.png',
          '/imgs/3.png',
        ]}
        id="Frozen"
      />

<div className="ojito">
  <a href="/">
    <video  className='video' width="90%" height="" autoPlay loop muted>
      <source src='/imgs/video.mp4' type="video/mp4" />
    </video>
  </a>
</div>

      
    </main>
    </div>
  );
}

export default Cuerpo;

