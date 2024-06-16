import React, { useState } from "react";

const For = () => {
  const [usuarioPersona, setUsuario] = useState("");
  const [nombres, setNombres] = useState("");
  const [correo, setCorreo] = useState("");
  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");
  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !usuarioPersona ||
      !nombres ||
      !correo ||
      !dni ||
      !telefono ||
      !aceptarTerminos
    ) {
      alert("Conpletar Bien Todas las CAsillas");
      return;
    }
    if (!/^\d.*j$/i.test(usuarioPersona) || usuarioPersona.length > 4) {
      alert(
        "debe comenzar con números y terminar con la letra j, máximo 4 caracteres"
      );
      return;
    }
    if (
      nombres.length < 1 ||
      nombres.length > 200 ||
      nombres !== nombres.toUpperCase()
    ) {
      alert(
        "El nombre de tener Mínimo 1 carácter, máximo 200, solo en mayúsculas"
      );
      return;
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(correo)) {
      alert(
        "El Correo debe cumplir con el formato de correo electrónico básico"
      );
      return;
    }
    if (!/^\d{8}$/.test(dni)) {
      alert("El DNI debe tener exactamente 8 dígitos.");
      return;
    }
    if (
      !(
        (telefono.length === 7 && /^[2-5]/.test(telefono)) ||
        (telefono.length === 9 && /^[9]/.test(telefono))
      )
    ) {
      alert(
        "El teléfono debe tener de 7 u 9 dígitos, en caso de 7 dígitos debe comenzar con 2, 3, 4 o 5, en caso de 9, comenzar con 9. "
      );
      return;
    }
    alert("Se Registro Bien");
    setEnviado(true);
  };
  if (enviado) {
    return;
  }

  return (
    <div className="ContenedorPadree">
      <form onSubmit={handleSubmit} className="contenedorSecundatio">
        <div className="contenedorDivc">
          <label className="etexx">
            Usuario:
            <input
              type="text"
              value={usuarioPersona}
              onChange={(e) => setUsuario(e.target.value)}
              required
              className="nombres"
            />
          </label>
        </div>
        <div className="contenedorDivc">
          <label className="etexx">
            Nombres:
            <input
              type="text"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
              required
              className="nombres"
            />
          </label>
        </div>
        <div className="contenedorDivc">
          <label className="etexx">
            Correo electrónico:
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              className="nombres"
            />
          </label>
        </div>
        <div className="contenedorDivc">
          <label className="etexx">
            DNI:
            <input
              type="text"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              required
              className="nombres"
            />
          </label>
        </div>
        <div className="contenedorDivc">
          <label className="etexx">
            TELEFONO:
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
              className="nombres"
            />
          </label>
        </div>
        <div className="contenedorDivc">
          <label className="">
            <input
              type="checkbox"
              checked={aceptarTerminos}
              onChange={(e) => setAceptarTerminos(e.target.checked)}
              required
              className=""
            />
            Aceptar términos y condiciones
          </label>
        </div>
        <div className="buton">
          {" "}
          <button type="submit" className="ddd">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default For;
