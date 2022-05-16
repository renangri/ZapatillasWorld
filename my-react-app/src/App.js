import React  from 'react';
import './App.css';
import Navbar1 from './componentes/Navbar';//Me traigo el componente Navbar
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"; //Me traigo el componente ItemListContainer
//Me traigo el componente contador
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <React.Fragment>
    <div className="App">
      <h1 className=" bg-dark text-white">ZapatillasWorld</h1>
      <Navbar1/>

      <ItemListContainer/>
     
      <h1>Contador</h1>  
    
    </div>
    
    </React.Fragment>
   
  );
}



export default App;

