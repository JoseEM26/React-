import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Cabecera from './Cabecera';
import Pie from './Pie';
import Login from './Login';

function App() {
  return (
    <div className="container">
      <Menu/>
      <Cabecera/>
      <Login/>
      <Pie/>
    </div>
  );
}

export default App;
