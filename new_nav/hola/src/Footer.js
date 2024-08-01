import React from 'react';

const footerData = [
  
  {
    title: 'Cuenta',
    content: (
      <div>
        <a href="https://appleid.apple.com" target="_blank" rel="noopener noreferrer">- Administrar tu Apple ID</a>
        <a href="https://appleid.apple.com" target="_blank" rel="noopener noreferrer">- iCloud.com</a>
      </div>
    ),
  },
  {
    title: 'Entretenimiento',
    content: (
      <div>
        <a href="https://www.apple.com/la/apple-one/" target="_blank" rel="noopener noreferrer">- Apple One</a>
        <a href="https://www.apple.com/la/apple-one/" target="_blank" rel="noopener noreferrer">- Apple TV+</a>
        <a href="https://www.apple.com/la/apple-one/" target="_blank" rel="noopener noreferrer">- Apple Music</a>
        <a href="https://www.apple.com/la/apple-one/" target="_blank" rel="noopener noreferrer">- Apple Arcade</a>
        <a href="https://www.apple.com/la/apple-one/" target="_blank" rel="noopener noreferrer">- Apple Podcasts</a>
        <a href="https://www.apple.com/la/apple-one/" target="_blank" rel="noopener noreferrer">- Apple Books</a>
      </div>
    ),
  },
  {
    title: 'Redes Sociales',
    content: (
      <div>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook"></i> Facebook
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-twitter"></i> Twitter
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i> Instagram
        </a>
      </div>
    ),
  },
  {
    title: 'Valores de Apple',
    content: (
      <div>
        <a href="https://www.apple.com/la/accessibility/" target="_blank" rel="noopener noreferrer">Accesibilidad</a>
        <a href="https://www.apple.com/la/accessibility/" target="_blank" rel="noopener noreferrer">Medio ambiente</a>
        <a href="https://www.apple.com/la/accessibility/" target="_blank" rel="noopener noreferrer">Privacidad</a>
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
        <ul>
          <li>La duración de la batería depende de la configuración de la red y de muchos otros factores; los resultados reales varían. La batería tiene ciclos de carga limitados y eventualmente necesitará ser reemplazada. La duración de la batería y el número de ciclos de carga varían según el uso y la configuración. Para obtener más información, visita apple.com/la/batteries y apple.com/la/iphone/battery.html.</li>
          <li>Los accesorios se venden por separado.</li>
          <li>El cable de carga USB-C es compatible con los AirPods Pro (2.ª generación) con estuche de carga MagSafe (USB‑C).</li>
          <li>El iPhone 15, iPhone 15 Plus, iPhone 15 Pro y iPhone 15 Pro Max son resistentes a las salpicaduras, al agua y al polvo, y fueron probados en condiciones de laboratorio controladas, con una clasificación IP68 según la norma IEC 60529 (hasta 30 minutos a una profundidad máxima de 6 metros). La resistencia a las salpicaduras, al agua y al polvo no es una condición permanente, y podría disminuir como consecuencia del uso normal. No intentes cargar un iPhone mojado; consulta el manual del usuario para ver las instrucciones de limpieza y secado. La garantía no cubre daños producidos por líquidos.</li>
          <li>El iPhone 15 y el iPhone 15 Pro pueden detectar si sufres un accidente de auto grave y pedir ayuda. Requiere conexión celular o llamadas por Wi‑Fi.</li>
          <li>Para usar Apple Pay necesitas una tarjeta de un emisor participante. Para saber si tu tarjeta es compatible con Apple Pay, contacta al emisor. Apple Pay no está disponible en todos los países. Consulta los países y regiones donde puedes usar Apple Pay.</li>
          <li>Calculado usando un método de balance de masa.</li>
          <li>Información basada en el desglose por peso de los empaques de productos vendidos en Estados Unidos. Los adhesivos, tintas y recubrimientos están excluidos de nuestros cálculos de contenido de plástico y peso del empaque.</li>
          <li>La obtención responsable de fibra de madera se define en la Especificación de Fibras de Fuentes Responsables de Apple. Incluimos el bambú como fibra de madera.</li>
          <li>Requiere un iPhone y un Apple Watch con un chip de banda ultraancha de segunda generación. La disponibilidad de la banda ultraancha varía según la región.</li>
        </ul>
        <p>
          Los productos podrían no estar disponibles en todas las áreas. Consulta la disponibilidad con los distribuidores locales.
          Los servicios podrían no estar disponibles en todas las áreas.
          Los modelos de iPhone 14 y de iPhone 15 (números A2650, A2651, A2649, A2632, A2846, A2847, A2848 y A2849) que ofrece Apple para EE.UU. y Puerto Rico se activan exclusivamente con una eSIM y no son compatibles con tarjetas SIM físicas. El uso de la eSIM requiere un plan de servicio móvil (que puede incluir restricciones sobre el cambio de proveedor de servicio y roaming, incluso una vez vencido el contrato). No todos los operadores admiten la eSIM. El uso de la eSIM puede estar desactivado en los iPhone comprados a través de algunos operadores. Consulta los detalles con tu operador. Para obtener más información, visita apple.com/la/esim.
          Las funcionalidades están sujetas a cambios. Algunas funcionalidades, aplicaciones y servicios podrían no estar disponibles en todas las regiones o idiomas.
          Algunas funcionalidades requieren hardware y software específicos. Para obtener más información, consulta la disponibilidad de funcionalidades.
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
