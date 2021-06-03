import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>TITLE</p>

        <p className="product__price">
          <small>$</small>
          <strong>100</strong>
        </p>

        <div className="product__rating">*****</div>

        <img src="" alt="" />

        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
