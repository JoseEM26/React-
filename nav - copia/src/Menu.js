import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { text: 'Iphone', to: "/productos#IPHONE" },
  { text: 'MackBook', to: "/productos#MACKBOOK" },
  { text: 'Repuestos', to: "/productos#REPUESTOS" },
  { text: 'Accesorios', to: "/productos#ACCESORIOS" },
  { text: 'Descuentos', to: "/productos#DESCUENTOS" },
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








