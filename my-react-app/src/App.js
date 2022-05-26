<<<<<<< HEAD
// Imports
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";

//Views
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";

//Context
import { CartProvider } from "./Context/CartContext/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header />
          {/*  navbar */}
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
=======
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
   
>>>>>>> a6bf0c42967bfe67d3d933b960fe1883a4a06389
  );
}

export default App;
