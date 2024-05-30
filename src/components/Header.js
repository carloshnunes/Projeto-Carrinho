import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ cart }) {
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="header">
      <h1>Minha Loja</h1>
      <nav>
        <Link to="/">Produtos</Link>
        <Link to="/cart">Carrinho</Link>
      </nav>
      <div className="cart-summary">
        <p>Total: R${calculateTotal().toFixed(2)}</p>
      </div>
      <input type="text" placeholder="Pesquisar..." />
    </div>
  );
}

export default Header;
