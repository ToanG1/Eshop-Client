import React from "react";
import style from "./OrderItemCard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

import prodImg from "../../../images/prod-img.jpg";

function OrderItemCard({ cartItem }) {
  const prod = cartItem.productDto;
  let now = new Date();
  now.setDate(now.getDate() + 7);
  return (
    <>
      <section className="order-item-card-home">
        <img
          src={prod.listImages[0] !== undefined ? prod.listImages[0] : prodImg}
          alt=""
        />
        <div className="order-item-card-content">
          <h1>{prod.name}</h1>
          <div className="qty-btn">
            <p>Size: S</p>
            <p>Qty: {cartItem.quantity}</p>
          </div>
          <div className="price-btn">
            <p>{prod.price} VND</p>
            <p>{prod.price} VND</p>
          </div>
          <div className="footer">
            <i>
              <FontAwesomeIcon icon={faCircleCheck} size="xm" />
            </i>
            Deliveried by {now.toDateString()}
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderItemCard;
