import React from "react";
import style from "./OrderItemCard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";

import prodImg from "../../../images/prod-img.jpg";

function OrderItemCard() {
  return (
    <>
      <section className="order-item-card-home">
        <img src={prodImg} alt="" />
        <div className="order-item-card-content">
          <h1>Zara BackPack</h1>
          <p>Supper BackPack</p>
          <div className="qty-btn">
            <p>Size: S</p>
            <p>Qty: 1</p>
          </div>
          <div className="price-btn">
            <p>890.000D</p>
            <p>690.000D</p>
          </div>
          <div className="footer">
            <i>
              <FontAwesomeIcon icon={faCircleCheck} size="xm" />
            </i>
            Delivery by 12 Jun 2023
          </div>
          <div className="delete-btn">
            <FontAwesomeIcon icon={faXmarkCircle} size="xm" />
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderItemCard;
