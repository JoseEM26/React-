import React, { useState } from "react";
import Menu from "./Menu";
import Login from "./Login";
import Registro from "./Registro";
import Busqueda from './Busqueda';
import { Link } from 'react-router-dom';

  function Header({ onSearch }) {
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isRegisterOpen, setRegisterOpen] = useState(false);
    const [users, setUsers] = useState([]);

    const openLogin = () => {
      setLoginOpen(true);
    };

    const closeLogin = () => {
      setLoginOpen(false);
    };

    const openRegister = () => {
      setRegisterOpen(true);
    };

    const closeRegister = () => {
      setRegisterOpen(false);
    };

    return (
      <header id="header">
        <ul className="encabezado">
          <li>
              <Link to="/">
              <img height="100px" width="120px" src="imgs/Logo-apple.png" className="Manzanita" alt="logo" />
              </Link>
           
          </li>
          <li>
            <a className="sobre" href="/">
              Conocenos <br />
              más
            </a>
          </li>
          <li>
            <a className="sobre" href="/">
              Encuentranos en <br />
              nuestras sedes
            </a>
          </li>
          <li>
            <div id="telf1">
              <img height="30px" width="30px" src="imgs/telef.png" alt="" />
            </div>
            <div className="sobre" id="telf2">
              Delivery
            </div>
            <div className="sobre" id="telf3">(01)111-0058</div>
          </li>
          <div className="busquedas">
          <Busqueda onSearch={onSearch} />
          </div>
          <li className="sobre" id="circ">
            <div id="car1">
              <img
                height="23px"
                width="23px"
                src="/imgs/carritocompras.png"
                alt=""
              />
            </div>
          </li>
          <li className="sobre" id="circ">
            <div id="car1">
              <img
                height="23px"
                width="23px"
                src="/imgs/usuario.png"
                alt=""
                onClick={openLogin}
              />
            </div>
          </li>
        </ul>

        <Menu />

        {isLoginOpen && (
          
          <div className="modal-container">
            <div className="modal-content">
              <span className="close" onClick={closeLogin}>
                &times;
              </span>
              <Login onClose={closeLogin} users={users} setUsers={setUsers} onSwitchToRegister={openRegister} />
            </div>
          </div>
        )}

  {isRegisterOpen && (
    
          <div className="modal-container">
            <div className="modal-content">
              <span className="close" onClick={closeRegister}>
                &times;
              </span>
              <Registro users={users} setUsers={setUsers} onClose={closeRegister} />
            </div>
          </div>
        )}
      </header>
    );
  }


  export default Header;