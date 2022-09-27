import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props);
  return (
    <div>
      <div className="cart-container">
        <h2 style={{ textAlign: "center" }}>product summary</h2>
        <p style={{ textAlign: "center" }}> Items: {props.cart}</p>
      </div>
    </div>
  );
};

export default Cart;
