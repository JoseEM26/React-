import React from 'react';

const footerData = [
  {
    title: '',
    content: <img src="/imgs/frostylog.jpg" alt="" />,
  },
  {
    title: 'Reclamos Llamar al:',
    content: (
      <div>
        <a href="https://web.whatsapp.com/" target="_blank">- 959688142</a>
        <a href="https://web.whatsapp.com/" target="_blank">- 970579950</a>
        <br />
        <img height="80px" width="120px" src="/imgs/libro.jpg" alt="" />
      </div>
    ),
  },
  {
    title: 'Compañía:',
    content: (
      <div>
        <a href="https://pe.computrabajo.com" target="_blank">- Acerca de Trabajo</a>
        <a href="https://pe.computrabajo.com" target="_blank">- Servicio</a>
      </div>
    ),
  },
  {
    title: 'Redes Sociales',
    content: (
      <div>
        <a href="https://www.facebook.com" target="_blank">
          <i className="fa-brands fa-facebook"></i>Facebook
        </a>
        <a href="https://twitter.com/" target="_blank">
          <i className="fa-brands fa-twitter"></i> Twitter
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <i className="fa-brands fa-instagram"></i>Instagram
        </a>
      </div>
    ),
  },
];

function Footer() {
  return (
    <footer>
      <div className="container__footer">
        {footerData.map((item, index) => (
          <FooterBox key={index} title={item.title} content={item.content} />
        ))}
      </div>
      <div className="box__copyright">
        <hr />
        <p>
          Todos los derechos reservados Copyright
        </p>
      </div>
    </footer>
  );
}

function FooterBox({ title, content }) {
  return (
    <div className="box__footer">
      <h2>{title}</h2>
      {content}
    </div>
  );
}

export default Footer;