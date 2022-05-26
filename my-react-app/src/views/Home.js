import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
// import ItemDetailContainer from "../components/ItemDetailContainer";

function Home() {
  return (
    <div>
      <main className="listaProductos">
        {/* le entrego un texto por prop a ItemListContainer */}
        <h1>Bienvenidos a FootShop</h1>
        <ItemListContainer></ItemListContainer>
      </main>
    </div>
  );
}

export default Home;
