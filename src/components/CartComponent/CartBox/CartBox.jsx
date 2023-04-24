import React, { useState } from "react";
import style from "./CartBox.scss";
import CartItem from "../CartItem/CartItem";
import img from "../../../images/prod-img.jpg";
function CartBox({ cartbox, cart, setCart }) {
  const store = cartbox.store;
  const [cartItems, setCartItems] = useState(cartbox.cartItemDtoList);
  const removeCartBoxHandler = () => {
    setCart(cart.filter((box) => box.id !== cartbox.id));
  };

  const removeCartItem = (id) => {
    setCartItems(cartItems.filter((cartitem) => cartitem.id !== id));
  };

  return (
    <>
      <section className="cart-box-home">
        {cartItems.length > 0 ? (
          <>
            <div className="store-label">
              <input type="checkbox" />
              <img src={store.avatar != null ? store.avatar : cartbox.img} />
              <span>{store.name != null ? store.name : "store"}</span>
              <button onClick={() => removeCartBoxHandler()}>Remove</button>
            </div>
            {cartItems.map((cartitem) => (
              <CartItem
                cartitem={cartitem}
                removeCartItem={removeCartItem}
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
