import React from 'react';

function ComidasItem({ imgSrc, description }) {
  return (
    <li>
      <a href="#">
        <img className="opciones" src={imgSrc} alt={description} />
      </a>
      <div className="descripcion-container">
        <p>{description}</p>
        <button onClick={() => alert('Compra realizada con éxito. Puede pasar a recoger su pedido')}>Comprar</button>
      </div>
    </li>
  );
}

function Comida({ title, items, id }) {
  return (
    <div id={id} className="helados">
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <ComidasItem key={index} imgSrc={item.imgSrc} description={item.description} />
        ))}
      </ul>
    </div>
  );
}

function Comidas() {
  const especialidadesItems = [
    { imgSrc: '/imgs/helado1.jpg', description: 'Banana split S/.12.9 ' },
    { imgSrc: '/imgs/helado2.jpg', description: 'Charlie Brownie S/.14.9' },
    { imgSrc: '/imgs/helado3.jpg', description: 'Sundae 1 sabor S/.16.9' },
    { imgSrc: '/imgs/helado4.jpg', description: 'Copa gelarti S/.13.9' },
    { imgSrc: '/imgs/helado5.jpg', description: 'Brownie con helado S/.18.9' },
  ];

  const milkshakesItems = [
    { imgSrc: '/imgs/milk1.jpg', description: 'Milkshake Cookies and Cream S/.12.9' },
    { imgSrc: '/imgs/milk2.jpg', description: 'Milkshake Milky Way S/.14.9' },
    { imgSrc: '/imgs/milk3.jpg', description: 'Milkshake Milky Way S/.16.9' },
    { imgSrc: '/imgs/milk4.jpg', description: 'Milkshake Snickers S/.13.9' },
    { imgSrc: '/imgs/milk5.jpg', description: 'Milkshake Fest Choco Belga S/.18.9' },
  ];

  const frapsItems = [
    { imgSrc: '/imgs/frape1.jpg', description: 'Frappé De Chocolate Negro S/.12.9 ' },
    { imgSrc: '/imgs/frape2.jpg', description: 'Frapp Cookies and Cream S/.14.9' },
    { imgSrc: '/imgs/frape3.jpg', description: 'Frapp de Limón 16 oz S/.16.9' },
    { imgSrc: '/imgs/frape4.jpg', description: 'Frapp Lucuma 16 oz S/.13.9' },
    { imgSrc: '/imgs/frape5.jpg', description: 'Frapp Vainilla 16 oz S/.18.9' },
  ];

  const cafeItems = [
    { imgSrc: '/imgs/cafe1.jpg', description: 'Capuccino Europea S/.12.9' },
    { imgSrc: '/imgs/cafe2.jpg', description: 'Cafe Negro America S/.14.9' },
    { imgSrc: '/imgs/cafe3.jpg', description: 'Cafe volcan 500gr. S/.16.9' },
    { imgSrc: '/imgs/cafe4.jpg', description: 'Cafe irlandes S/.13.9' },
    { imgSrc: '/imgs/cafe5.jpg', description: 'Café irlandés con crema batida S/.18.9' },
  ];

  const frozenItems = [
    { imgSrc: '/imgs/frozen1.jpg', description: 'Limonada Frozen S/.18.90' },
    { imgSrc: '/imgs/frozen2.jpg', description: 'Margarita de mango y fresa S/.19.90' },
    { imgSrc: '/imgs/frozen3.png', description: 'Vaso de Maracuya Frozen S/.15.90' },
  ];

  return (
    <main className='Lejos'>
      <Comida title="ESPECIALIDADES" items={especialidadesItems} id="Especialidades" />
      <Comida title="MILKSHAKES" items={milkshakesItems} id="Milkshakes" />
      <Comida title="FRAPPS VERANO" items={frapsItems} id="Frapps" />
      <Comida title="CAFE" items={cafeItems} id="Cafe" />
      <Comida title="FROZEN" items={frozenItems} id="Frozen" />
    </main>
  );
}

export default Comidas;
