import React, { useState } from "react";

const Registro = ({ users, setUsers, onClose }) => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPhoneNumber, setRegisterPhoneNumber] = useState("");
  const [registerGender, setRegisterGender] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Expresiones regulares para validación
    const usernameRegex = /^[a-zA-Z0-9_]{4,16}$/; // Letras, números y guión bajo, 4-16 caracteres
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // Al menos 8 caracteres, letras mayúsculas y minúsculas, números
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato de correo electrónico
    const phoneRegex = /^\d{10}$/; // Número de teléfono de 10 dígitos

    const userAlreadyExists = users.find((user) => user.username === registerUsername);

    if (userAlreadyExists) {
      setRegisterMessage("El nombre de usuario ya está registrado.");
    } else if (!usernameRegex.test(registerUsername)) {
      setRegisterMessage("El nombre de usuario debe tener entre 4 y 16 caracteres y puede contener letras, números y guiones bajos.");
    } else if (!passwordRegex.test(registerPassword)) {
      setRegisterMessage("La contraseña debe contener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y números.");
    } else if (!emailRegex.test(registerEmail)) {
      setRegisterMessage("Ingrese un correo electrónico válido.");
    } else if (!phoneRegex.test(registerPhoneNumber)) {
      setRegisterMessage("El número de teléfono debe contener exactamente 10 dígitos.");
    } else {
      setUsers([
        ...users,
        {
          username: registerUsername,
          password: registerPassword,
          email: registerEmail,
          phoneNumber: registerPhoneNumber,
          gender: registerGender,
        },
      ]);
      setRegisterMessage(`¡Bienvenido, ${registerUsername}! Te has registrado con éxito.`);
      console.log("Registro exitoso");
    }
  };

  return (
    <div className="modal register-modal">
      <div className="modal-container">
        <div className="modal-content register-box">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <div className="register-container">
            <p className="register-title">Registrarse</p>
            <form className="register-form" onSubmit={handleRegister}>
              <div>
                <label htmlFor="register-username">Nombre de usuario:</label>
                <input
                  type="text"
                  id="register-username"
                  value={registerUsername}
                  onChange={(e) => setRegisterUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="register-password">Contraseña:</label>
                <input
                  type="password"
                  id="register-password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="register-email">Correo electrónico:</label>
                <input
                  type="email"
                  id="register-email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="register-phone">Número de teléfono:</label>
                <input
                  type="tel"
                  id="register-phone"
                  value={registerPhoneNumber}
                  onChange={(e) => setRegisterPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="register-gender">Género:</label>
                <select
                  id="register-gender"
                  value={registerGender}
                  onChange={(e) => setRegisterGender(e.target.value)}
                  required
                >
                  <option value="">Seleccionar género</option>
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <div className="button-container">
                <button type="submit">Registrarse</button>
                <button type="button" onClick={onClose}>
                  Cerrar
                </button>
              </div>
              {registerMessage && <p>{registerMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
