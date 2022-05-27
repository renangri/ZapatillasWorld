// Imports
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";

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
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

function NotFound() {
  return (
    <>
      {" "}
      <br></br>
      <h1>La página no existe</h1>
    </>
  );
}

export default App;
