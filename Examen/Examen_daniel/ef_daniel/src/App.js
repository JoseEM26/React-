import './App.css';
import TituloCabezera from './Titulo';
import CarruselChina from './Banercito';
import Pie from './Pie';
import For from './Formulario';
import FechaHoraa from './Tiempo';
function App() {
  return (
    <div className="App">
       <TituloCabezera></TituloCabezera>
       <CarruselChina ></CarruselChina>
       <FechaHoraa ></FechaHoraa>
       <For ></For>
       <Pie ></Pie>
    </div>
  );
}

export default App;
