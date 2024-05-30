import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import "./App.css";
import productsData from "./data/products.json";
import initialCart from "./data/shoppingCart.json";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : initialCart;
  });

  const [products, setProducts] = useState(productsData);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <Router>
      <Header cart={cart} />
      <Switch>
        <Route path="/" exact>
          <ProductListPage products={products} addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <CartPage cart={cart} removeFromCart={removeFromCart} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
