import React from "react";
import Cart from "../components/Cart";

function CartPage({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default CartPage;
