import React, { useState } from "react";
import style from "./CartBox.scss";
import CartItem from "../CartItem/CartItem";
import img from "../../../images/prod-img.jpg";
function CartBox({
  cartbox,
  cartbox4Order,
  removeCartBox,
  removeCartItem,
  addCartBoxToOrder,
  addCartItemToOrder,
  removeCartBoxFromOrder,
  removeCartItemFromOrder,
  updateCartItem,
}) {
  const store = cartbox.store;
  const removeCartBoxHandler = () => {
    removeCartBox(cartbox.id);
  };
  const removeCartItemHandler = (id) => {
    removeCartItem(cartbox.id, id);
  };

  // crud cart item for order
  const addCartBoxToOrderHandler = () => {
    addCartBoxToOrder(cartbox);
  };
  const addCartItemToOrderHandler = (cartItem) => {
    addCartItemToOrder(cartbox.id, cartItem);
  };
  const removeCartBoxFromOrderHandler = () => {
    removeCartBoxFromOrder(cartbox.id);
  };
  const removeCartItemFromOrderHandler = (id) => {
    removeCartItemFromOrder(cartbox.id, id);
  };

  const updateCartItemHandler = (id, quantity) => {
    updateCartItem(cartbox.id, id, quantity);
  };

  return (
    <>
      <section className="cart-box-home">
        {cartbox.cartItemDtoList.length > 0 ? (
          <>
            <div className="store-label">
              <input
                type="checkbox"
                onChange={(e) =>
                  e.target.checked
                    ? addCartBoxToOrderHandler()
                    : removeCartBoxFromOrderHandler()
                }
              />
              <img src={store.avatar != null ? store.avatar : img} alt="" />
              <span>{store.name != null ? store.name : "store"}</span>
              <button onClick={() => removeCartBoxHandler()}>Remove</button>
            </div>
            {cartbox.cartItemDtoList.map((cartitem) => (
              <CartItem
                cartitem={cartitem}
                isChecked={
                  cartbox4Order !== undefined
                    ? cartbox4Order.cartItemDtoList.find(
                        (item) => item.id === cartitem.id
                      ) !== undefined
                      ? true
                      : false
                    : false
                }
                removeCartItemHandler={removeCartItemHandler}
                addCartItemToOrderHandler={addCartItemToOrderHandler}
                removeCartItemFromOrderHandler={removeCartItemFromOrderHandler}
                updateCartItemHandler={updateCartItemHandler}
                key={cartitem.id}
              />
            ))}
          </>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default CartBox;
