

import './App.css';
import Navbar1 from './componentes/Navbar';//Me traigo el componente Navbar
import ItemListContainer from "./componentes/ItemListContainer"; //Me traigo el componente ItemListContainer

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     

      <h1 className=" bg-dark text-white"  >ZapatillasWorld</h1>
     
      
      <Navbar1/>
        
      <ItemListContainer greeting="Hola!" />
      
 
    </div>
  );
}



export default App;

