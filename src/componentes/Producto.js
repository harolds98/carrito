import React from "react";
import "./estilos.css";

const producto = ({ producto, carrito, agregaElimina, productos }) => {
  const { nombre, precio, id, imagen } = producto;

  const seleccionproducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    agregaElimina([...carrito, producto]);
  };
  //para elimar los productos del carrito
  const eliminarP = (id) => {
    const productos = carrito.filter((producto) => producto.id !== id);
    //colocar productos en el state
    agregaElimina(productos);
  };

  return (
    <div className="producto">
      <h3>{nombre}</h3>
      {imagen}
      <p>${precio}</p>
      {productos ? (
        <button type="button" onClick={() => seleccionproducto(id)}>
          comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarP(id)}>
          eliminar
        </button>
      )}
    </div>
  );
};

export default producto;
