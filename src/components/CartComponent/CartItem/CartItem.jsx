import React, { useState, useEffect } from "react";
import style from "./CartItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";

import prodImg from "../../../images/prod-img.jpg";

import { updateQuantity } from "../../../api/user/Cart";
function CartItem({
  cartitem,
  isChecked,
  removeCartItemHandler,
  addCartItemToOrderHandler,
  removeCartItemFromOrderHandler,
  updateCartItemHandler,
}) {
  const prod = cartitem.productDto;
  const [quantity, setQuantity] = useState(cartitem.quantity);

  const deleteCartItemHandler = () => {
    removeCartItemHandler(cartitem.id);
  };

  const updateQuantityHandler = (value) => {
    setQuantity(value);
    updateQuantity(cartitem.id, value);
    updateCartItemHandler(cartitem.id, value);
  };

  const addCartItemToOrder = () => {
    addCartItemToOrderHandler(cartitem);
  };

  const removeCartItemFromOrder = () => {
    removeCartItemFromOrderHandler(cartitem.id);
  };

  return (
    <>
      <section className="cart-item-home">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) =>
            e.target.checked ? addCartItemToOrder() : removeCartItemFromOrder()
          }
        />
        <section className="cart-item">
          <img
            src={prod.listImages[0] != null ? prod.listImages[0] : prodImg}
            alt=""
          />
          <div className="order-item-card-content">
            <h1>{prod.name}</h1>
            <div className="qty-btn">
              <p>Size: S</p>
              <p>
                Qty:{" "}
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => updateQuantityHandler(e.target.value)}
                  max={prod.quantity}
                  min={1}
                />
              </p>
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
