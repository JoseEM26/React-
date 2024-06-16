import React,{useState,useEffect} from "react";


const TituloCabezera = () => {
    const [color, setColor] = useState('brown');
    const [fontSize, setFontSize] = useState(0);
  
    useEffect(() => {
    const interval = setInterval(() => {
     const r = Math.floor(Math.random() * 140 );
      const g = Math.floor(Math.random() * 140 );
    const b = Math.floor(Math.random() * 140 );
  setColor(`rgb(${r},${g},${b})`);
      setFontSize(Math.floor(Math.random() * 16) + 24); }, 1000);
  return () => clearInterval(interval);}, []);
  
    return (
      <h1 style={{ color: color, fontSize: `${fontSize}px` }}className='ttt'>
    Tokio 
      </h1>
    );
  };
  
  export default TituloCabezera;



