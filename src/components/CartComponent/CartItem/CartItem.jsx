import React from "react";
import style from "./CartItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";

import prodImg from "../../../images/prod-img.jpg";
import { deleteCartItem } from "../../../api/user/Cart";
function CartItem({ cartitem, removeCartItem }) {
  const prod = cartitem.productDto;

  const deleteCartItemHandler = () => {
    // deleteCartItem(cartitem.id);
    removeCartItem(cartitem.id);
  };

  return (
    <>
      <section className="cart-item-home">
        <input type="checkbox" />
        <section className="cart-item">
          <img
            src={prod.listImages[0] != null ? prod.listImages[0] : prodImg}
            alt=""
          />
          <div className="order-item-card-content">
            <h1>{prod.name}</h1>
            <div className="qty-btn">
              <p>Size: S</p>
              <p>Qty: {cartitem.quantity}</p>
            </div>
            <div className="price-btn">
              <p>{prod.price} VND</p>
              <p>{prod.price} VND</p>
            </div>

            <div className="delete-btn" onClick={() => deleteCartItemHandler()}>
              <FontAwesomeIcon icon={faXmarkCircle} size="xm" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default CartItem;
