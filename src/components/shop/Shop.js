import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (productElements) => {
    const newCart = [...cart, productElements];
    setCart(newCart);
    console.log(newCart);
  };

  return (
    <div className="shop-conatiner">
      <div className="products-conatiner">
        {products.map((product) => (
          <Product
            elements={product}
            key={product.id}
            addCart={addToCart}
          ></Product>
        ))}
      </div>
      <Cart cart={cart.length}></Cart>
    </div>
  );
};

export default Shop;
