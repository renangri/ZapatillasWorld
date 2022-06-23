import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
// import ItemDetailContainer from "../components/ItemDetailContainer";


function Home() {
  return (
    <div>
      <h1 className="bienvenido">Bienvenidos a FootShop</h1>
      <div>
      <div>
      <main className="listaProductos">
        {/* le entrego un texto por prop a ItemListContainer */}
        
        <ItemListContainer></ItemListContainer>
        
      </main>
      </div>
    </div>
    </div>
    
  );
}

export default Home;
