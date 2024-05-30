import React from "react";
import "./Product.css";

function Product({ product, addToCart }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Preço: R${product.price}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default Product;
