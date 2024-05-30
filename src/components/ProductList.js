import React from "react";
import Product from "./Product";
import "./ProductList.css";

const products = [
  { id: 1, name: "Produto 1", price: 100 },
  { id: 2, name: "Produto 2", price: 100 },
  { id: 3, name: "Produto 3", price: 100 },
];

function ProductList({ addtoCart }) {
  return (
    <div>
      <h2>Lista de produtos</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addtoCart} />
      ))}
    </div>
  );
}
