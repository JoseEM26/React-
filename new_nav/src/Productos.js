
import React from 'react';
//Mapeo de estante de texto
function ComidasItem({ imgSrc, description, precio }) {
  return (
    <li>
      <a href="/">
        <img className="opciones" src={imgSrc} alt={description} />
      </a>
      <div className="descripcion-container">
        <p>{description}</p>
        <p>{precio}</p>
        <button className='botoncitooo'  onClick={() => alert('Compra realizada con éxito. Puede pasar a recoger su pedido')}>Comprar</button>
      </div>
    </li>
  );
}
//Mapeo de Estante de Productos Imagenes solamente
function Comida({ title, items, id }) {
  return (
    <div id={id} className="helados">
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <ComidasItem key={index} imgSrc={item.imgSrc} description={item.description} precio={item.precio} />
        ))}
      </ul>
    </div>
  );
}

function Comidas() {
  const especialidadesItems = [
    { imgSrc: '/imgs/Iphonee (1).png', description: 'iPhone 14 Pro Max', precio: "S/.3,399.00" },
    { imgSrc: '/imgs/Iphonee (2).png', description: 'iPhone 14 Pro', precio: "S/.3,049.00" },
    { imgSrc: '/imgs/Iphonee (3).png', description: 'iPhone 13 Pro Max', precio: "S/.2,949.00" },
    { imgSrc: '/imgs/Iphonee (4).png', description: 'iPhone 13 Pro', precio: "S/.2,199.00" },
    { imgSrc: '/imgs/Iphonee (5).png', description: 'iPhone 14 Plus', precio: "S/.2,149.00" },
    { imgSrc: '/imgs/Iphonee (6).png', description: 'iPhone 14', precio: "S/.2,099.00" },
    { imgSrc: '/imgs/Iphonee (7).png', description: 'iPhone 13', precio: "S/.1,899.00" },
    { imgSrc: '/imgs/Iphonee (8).png', description: 'iPhone 12 Pro Max', precio: "S/.1,899.00" },
    { imgSrc: '/imgs/Iphonee (9).png', description: 'iPhone 12 Pro', precio: "S/.1,699.00" },
    { imgSrc: '/imgs/Iphonee (10).png', description: 'iPhone 11 Pro Max', precio: "S/.1,449.00" },
    { imgSrc: '/imgs/Iphonee (11).png', description: 'iPhone 13 Mini', precio: "S/.1,399.00" },
    { imgSrc: '/imgs/Iphonee (12).png', description: 'iPhone 12', precio: "S/.1,249.00" },
  ];

  const milkshakesItems = [
    { imgSrc: '/imgs/MacBookAir.webp', description: 'mackbook XR', precio: "S/. 2,199.00" },
    { imgSrc: '/imgs/MacBookPro.webp', description: 'mackbook 95', precio: "S/. 1,699.00" },
    { imgSrc: '/imgs/MacBookAir.webp', description: 'mackbook', precio: "S/. 2,199.00" },
    { imgSrc: '/imgs/MacBookPro.webp', description: 'mackbook CL', precio: "S/. 1,699.00" },
    { imgSrc: '/imgs/MacBookAir.webp', description: 'mackbook ultimate', precio: "S/. 2,199.00" },
  ];

  const frapsItems = [
    { imgSrc: '/imgs/Repuesto (1).png', description: 'Pantalla XR', precio: "S/. 14" },
    { imgSrc: '/imgs/Repuesto (2).png', description: 'Bateria Iphone 12', precio: "S/. 100" },
    { imgSrc: '/imgs/Repuesto (3).png', description: 'Camara Frontal XS', precio: "S/.60" },
    { imgSrc: '/imgs/Repuesto (4).png', description: 'Camara Frontal Iphone 13', precio: "S/. 80" },
  ];

  const cafeItems = [
    { imgSrc: '/imgs/1.png', description: 'Pantalla Glass', precio: "S/. 10" },
    { imgSrc: '/imgs/2.png', description: 'Case Transparente', precio: "S/. 60" },
    { imgSrc: '/imgs/3.png', description: 'Case Negro', precio: "S/.50" },
    { imgSrc: '/imgs/4.png', description: 'Cabezal Cargador', precio: "S/. 50" },
    { imgSrc: '/imgs/5.png', description: 'Cable USB', precio: "S/. 20" },
    { imgSrc: '/imgs/6.png', description: 'Cable Life', precio: "S/. 20" },
    { imgSrc: '/imgs/7.png', description: 'Cargador inalambrico', precio: "S/. 20" },
    { imgSrc: '/imgs/8.png', description: 'Cabezal life', precio: "S/. 50" },
    { imgSrc: '/imgs/09.png', description: 'Audifonos', precio: "S/. 50" },
  ];

  const frozenItems = [
    { imgSrc: '/imgs/Iphonee (17).png', description: 'iPhone XS', precio: "S/. 679.00" },
    { imgSrc: '/imgs/Iphonee (16).png', description: 'iPhone Xr', precio: "S/. 699.00" },
    { imgSrc: '/imgs/Iphonee (15).png', description: 'iPhone SE 2022', precio: "S/. 749.00" },
    { imgSrc: '/imgs/Iphonee (14).png', description: 'iPhone 12 Mini', precio: "S/. 849.00" },
    { imgSrc: '/imgs/Iphonee (13).png', description: 'iPhone 11', precio: "S/. 899.00" },
    { imgSrc: '/imgs/Iphonee (12).png', description: 'iPhone 11 Pro', precio: "S/. 1,049.00" },
  ];

  return (
    <main className="Lejos">
      <Comida title="IPHONE" items={especialidadesItems} id="Especialidades" />
      <Comida title="MACKBOOK" items={milkshakesItems} id="Milkshakes" />
      <Comida title="REPUESTOS" items={frapsItems} id="Frapps" />
      <Comida title="ACCESORIOS" items={cafeItems} id="Cafe" />
      <Comida title="DESCUENTOS" items={frozenItems} id="Frozen" />
    </main>
  );

  
}

export default Comidas;