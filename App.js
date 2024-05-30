import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList'; // Corrigido o nome do componente
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <div className="App">
      <h1>Loja</h1>
      <ProductList addToCart={addToCart} />{' '}
      {/* Corrigido o nome do componente */}
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
