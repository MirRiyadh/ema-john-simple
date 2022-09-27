import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({ elements, addCart }) => {
  // const { elements, addCart } = props;
  const { img, name, price, seller, ratings } = elements;
  return (
    <div className="product">
      <img src={img} alt="images" />
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <h4>Price: ${price}</h4>
        <p>Seller: {seller}</p>
        <p>Ratings: {ratings} star</p>
      </div>

      <button className="btn-cart" onClick={() => addCart(elements)}>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        <p>Add to cart</p>
      </button>
    </div>
  );
};

export default Product;
