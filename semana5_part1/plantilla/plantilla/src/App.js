import './App.css';
import Cabecera from './Cabecera';
import Cuerpo from './Cuerpo';
import Menu from './Menu';

function App() {
  return (
    <div className="container">
        <Menu/>
        <Cabecera/>
        <Cuerpo/>
    </div>
  );
}

export default App;
