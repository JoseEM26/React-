import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import React from 'react';
import './estilos.css';
import './index.css';
import Header from './Header';
import Productos from './Productos';
import Cuerpo from './Cuerpo';
import Footer from './Footer';
import Fechahora from './fechahora'
import Mapa from './Conocenos/Mapa';

function App() {
  return (
    <div >
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Cuerpo/>}/>
      <Route path='/productos' element={<Productos/>}/>
      <Route path='/Conocenos' element={<Mapa/>}/>
    </Routes>
    <Footer />
    <Fechahora />
    </Router>

    </div>
  );
}

export default App;
