import './App.css';
import React from 'react';
import UnicionPrincipal from './a-paginas/UnionInicio';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UnionQuienesSomos from './QuienesSomos/UnionQuienesSomos';
import Mapa from './Conocenos/Mapa';
import ListaDesc from './PaginaDesc/UnionPaginaDsc'
import Accesorios from './Accesorios/Accesorios';
import ServicioTec from './ServicioTec/ServTecnico';
import Iphone from './Iphone/Iphone';

const App = () => {
  return (
    <Router>
      <div className='ContenedorPadre'>
        <nav>
          <ul className='contenedorli'>
            <li className='enlaces'>
              <Link to='/' className='letra'>Inicio</Link>
            </li>
            <li className='enlaces'>
              <Link to='/Quienes Somos?' className='letra'>¿Quiénes Somos?</Link>
            </li>
            <li className='enlaces'>
              <Link to='/Conocenos' className='letra'>Conócenos</Link>
            </li>
            <li className='enlaces'>
              <Link to='/Descuentos' className='letra'>Descuentos</Link>
            </li>
            <li className='enlaces'>
              <Link to='/Accesorios' className='letra'>Accesorios</Link>
            </li>
            <li className='enlaces'>
              <Link to='/ServicioTex' className='letra'> Servicio Técnico</Link>
            </li>
            <li className='enlaces'>
              <Link to='/Iphone' className='letra'> Iphone</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' exact element={<UnicionPrincipal></UnicionPrincipal>}></Route>
          <Route path='/Quienes Somos?' element={<UnionQuienesSomos></UnionQuienesSomos>}></Route>
          <Route path='/Conocenos' element={<Mapa></Mapa>}></Route>
          <Route path='/Descuentos' element={<ListaDesc></ListaDesc>}></Route>
          <Route path='/Accesorios' element={<Accesorios></Accesorios>}></Route>
          <Route path='/ServicioTex' element={<ServicioTec></ServicioTec>}></Route>
          <Route path='/Iphone' element={<Iphone></Iphone>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
