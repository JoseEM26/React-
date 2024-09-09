import React, { useState } from "react";
import Registro from "./Registro";

const Login = ({ onClose, users, onSwitchToRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = users.find((user) => user.username === username);
    if (foundUser && foundUser.password === password) {
      setLoggedIn(true);
      setLoginMessage(
        `¡Bienvenido, ${username}! Has iniciado sesión con éxito.`
      );
      console.log("Inicio de sesión exitoso");
    } else {
      setLoggedIn(false);
      setLoginMessage("Nombre de usuario o contraseña incorrectos");
      console.log("Nombre de usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="modal">
    <div className="login-container">
      <h2 className="sesion">Iniciar sesión</h2>
      {loginMessage && <p>{loginMessage}</p>}
      {!isLoggedIn && (
        <div>
          <form onSubmit={handleSubmit} className="login-form">
            <div>
              <h3 className="name" htmlFor="username">Nombre de usuario: </h3>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
               <h3 className="name" htmlFor="password">Contraseña:</h3>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button-container">
              <button type="submit">Iniciar sesión</button>
              <button onClick={onSwitchToRegister}>Registrarse</button>
            </div>
          </form>
          <button onClick={onClose}>Cerrar</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Login;
