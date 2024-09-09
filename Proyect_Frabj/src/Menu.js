import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { text: 'Especialidades', url: 'Especialidades' },
  { text: 'Milkshakes', url: 'Milkshakes' },
  { text: 'Fraps Tentaciones de Verano', url: 'Frapps' },
  { text: 'Cafes', url: 'Cafe' },
  { text: 'Frozen', url: 'Frozen' },
];

function MenuItem({ text, url }) {
  const handleClick = () => {
    const element = document.getElementById(url);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <li>
      <Link to={`#${url}`} className="menu-item" onClick={handleClick}>
        {text}
      </Link>
    </li>
  );
}



function Menu() {
  return (
    <nav id='navegacion' className="navegacion">
      <ul className="menu">
        {menuItems.map((item, index) => (
          <MenuItem
          key={index}
          text={item.text}
          url={item.href}
         
        />
        ))}
      </ul>
    </nav>
  );
}

export default Menu;