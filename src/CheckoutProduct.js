import React from "react";
import CurrencyFormat from "react-currency-format";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <CurrencyFormat
            renderText={(price) => (
              <>
                <p>
                  <strong>{price}</strong>
                </p>
              </>
            )}
            decimalScale={2}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rp "}
            suffix={",-"}
          />
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>

        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
