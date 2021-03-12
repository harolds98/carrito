import React from "react";
import "./estilos.css";
import Producto from "./Producto";

const Carrito = ({ carrito, agregaElimina }) => (
  <div className="carrito">
    <h2>Carrito</h2>
    {carrito.length === 0 ? (
      <p>aun nada agregado</p>
    ) : (
      carrito.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          agregaElimina={agregaElimina}
        />
      ))
    )}
  </div>
);
export default Carrito;
