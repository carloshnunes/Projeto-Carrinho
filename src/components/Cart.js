import React from "react";
import "./Cart.css";

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        cart.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Preço: R${product.price}</p>
            <button onClick={() => removeFromCart(product.id)}>Remover</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
