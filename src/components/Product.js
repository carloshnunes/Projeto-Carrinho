import React from "react";
import "./Product.css";

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Preço: R${product.price}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default Product;
