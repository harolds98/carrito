import React, { Fragment, useState } from "react";
import Footer from "./componentes/Footer";
import Producto from "./componentes/Producto";
import Carrito from "./componentes/Carrito";
import imagenes from "./componentes/imagenes";

function App() {
  //lista de productos
  const [productos] = useState([
    {
      id: 1,
      nombre: "Sueter REACT.JS",
      precio: 50,
    },
    {
      id: 2,
      nombre: "Sueter VUE.JS",
      precio: 100,
    },
    {
      id: 3,
      nombre: "Sueter NODE.JS",
      precio: 150,
    },
    {
      id: 4,
      nombre: "Sueter HTML",
      precio: 80,
    },
  ]);

  //state para un carrito
  const [carrito, agregaElimina] = useState([]);

  //muestra el año en que estamos
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <h1 class="titulo">TIENDA VIRTUAL</h1>
      <h3 class="titulo2">LISTA DE PRODUCTOS</h3>
      <img src={imagenes[0].img} class="img" />
      <img src={imagenes[1].img} class="img" />
      <img src={imagenes[2].img} class="img" />
      <img src={imagenes[3].img} class="img" />

      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          agregaElimina={agregaElimina}
        />
      ))}
      <Carrito carrito={carrito} agregaElimina={agregaElimina} />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
