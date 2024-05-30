import React from "react";
import ProductList from "../components/ProductList";

function ProductListPage({ products, addToCart }) {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default ProductListPage;
