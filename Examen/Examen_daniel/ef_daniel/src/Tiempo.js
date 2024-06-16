import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const FechaHoraa = () => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  useEffect(() => { const intervalId = setInterval(() => {
const f = new Date();
const newFecha = `${f.getDate()}/${(f.getMonth() +1) }/${f.getFullYear()}`;
 const newHora = `${f.getHours()}:${f.getMinutes()}:${f.getSeconds()}`
 ;setFecha(newFecha);
 setHora(newHora);
    }, 1000);
 return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='FechayHoras'>
      <div className="fecha">Hora: {hora}</div>
      <div className="fecha">Fecha: {fecha}</div>
    </div>
  );
};

export default FechaHoraa;
