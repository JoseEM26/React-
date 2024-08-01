import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { text: 'Iphone', to: "/productos#Especialidades" },
  { text: 'MackBook', to: "/productos#Milkshakes" },
  { text: 'Repuestos', to: "/productos#Frapps" },
  { text: 'Accesorios', to: "/productos#Cafe" },
  { text: 'Descuentos', to: "/productos#Frozen" },
];

function MenuItem({ text, to, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    // Extraer el hash de la ruta
    const hash = to.split('#')[1];
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <li>
      <Link to={to} className="menu-item" onClick={handleClick}>
        {text}
      </Link>
    </li>
  );
}

function Menu() {
  return (
    <nav id="navegacion" className="navegacion">
      <ul className="menu">
        {menuItems.map((item, index) => (
          <MenuItem key={index} text={item.text} to={item.to} />
        ))}
      </ul>
    </nav>
  );
}

export default Menu;








