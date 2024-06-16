import './App.css';
import Cabecera from './Cabecera';
import FechaHora from './FechaHora';
import Cuerpo from './Cuerpo';
import Pie from './Pie';
import Menu from "./Menu";


function App(){
  return(
    <div className='container'>
      <Menu/>
      <Cabecera/>
      <FechaHora/>
      <Cuerpo/>
      <Pie/>
      
    </div>
  );
}

export default App;