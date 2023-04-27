import React, { useState, useEffect } from "react";
import style from "./Cart.scss";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft, faCircle } from "@fortawesome/free-solid-svg-icons";

import CartBox from "../../components/CartComponent/CartBox/CartBox";

import Voucher from "../../components/CartComponent/MiniVoucher/MiniVoucher";

import { findCart, deleteCartItem, deleteCartBox } from "../../api/user/Cart";

function Cart({ voucher, changeStep, setChosenList }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      findCart().then((res) => {
        setCart(res.data.cartBoxDtoList);
      });
    };
    fetchData();
  }, []);

  const removeCartBox = (id) => {
    setCart(cart.filter((cartbox) => cartbox.id !== id));
    deleteCartBox(id);
  };

  const removeCartItem = (cartBoxId, cartItemId) => {
    setCart(
      cart.map((cartbox) => {
        if (cartbox.id === cartBoxId) {
          const res = {
            ...cartbox,
            cartItemDtoList: cartbox.cartItemDtoList.filter(
              (cartitem) => cartitem.id !== cartItemId
            ),
          };
          return res;
        } else {
          return cartbox;
        }
      })
    );
    deleteCartItem(cartItemId);
  };

  const updateCartItem = (cartBoxId, cartItemId, quantity) => {
    setCart(
      cart.map((box) => {
        if (box.id === cartBoxId) {
          return {
            ...box,
            cartItemDtoList: box.cartItemDtoList.map((cartitem) => {
              if (cartitem.id === cartItemId)
                return {
                  ...cartitem,
                  quantity: quantity,
                };
              else return cartitem;
            }),
          };
        } else return box;
      })
    );
  };

  // crud for cartitem for order
  const [cart4Order, setCart4Order] = useState([]);
  const submitHandler = () => {
    if (cart4Order.length > 0) {
      setChosenList(cart4Order);
      changeStep(1);
    } else alert("Please select item to order");
  };

  const addCartBoxToOrder = (cartBox) => {
    setCart4Order(cart4Order.concat(cartBox));
  };
  const addCartItemToOrder = (cartBoxId, cartItem) => {
    if (cart4Order.find((cartbox) => cartbox.id === cartBoxId) === undefined) {
      addCartBoxToOrder({
        ...cart.find((cartbox) => cartbox.id === cartBoxId),
        cartItemDtoList: [cartItem],
      });
    } else
      setCart4Order(
        cart4Order.map((box) => {
          if (box.id === cartBoxId) {
            return {
              ...box,
              cartItemDtoList: box.cartItemDtoList.concat(cartItem),
            };
          } else return box;
        })
      );
  };

  const removeCartBoxFromOrder = (id) => {
    setCart4Order(cart4Order.filter((cartbox) => cartbox.id !== id));
  };

  const removeCartItemFromOrder = (cartBoxId, cartItemId) => {
    if (
      cart4Order.find((cartbox) => cartbox.id === cartBoxId).cartItemDtoList
        .length === 1
    )
      removeCartBoxFromOrder(cartBoxId);
    else
      setCart4Order(
        cart4Order.map((box) => {
          if (box.id === cartBoxId) {
            return {
              ...box,
              cartItemDtoList: box.cartItemDtoList.filter(
                (cartitem) => cartitem.id !== cartItemId
              ),
            };
          } else return box;
        })
      );
  };

  return (
    <>
      <section className="cart-home">
        <div className="left-box">
          <div className="title">
            <Link to="">
              <FontAwesomeIcon icon={faArrowLeft} size="xm" />
            </Link>
            <h1>Cart</h1>
            <span>
              <FontAwesomeIcon icon={faCircle} size="2xs" /> {total} items
            </span>
          </div>
          <div className="order-items">
            {cart.map((cartbox) => (
              <CartBox
                cartbox={cartbox}
                cartbox4Order={cart4Order.find((box) => box.id === cartbox.id)}
                removeCartBox={removeCartBox}
                removeCartItem={removeCartItem}
                addCartBoxToOrder={addCartBoxToOrder}
                addCartItemToOrder={addCartItemToOrder}
                removeCartBoxFromOrder={removeCartBoxFromOrder}
                removeCartItemFromOrder={removeCartItemFromOrder}
                updateCartItem={updateCartItem}
                key={cartbox.id}
              />
            ))}
          </div>
        </div>
        <div className="v-ruler"></div>
        <div className="right-box">
          <h2>New voucher</h2>
          <div className="top-block voucher-block">
            {voucher.map((item) => (
              <Voucher voucher={item} />
            ))}
          </div>
          <div className="middle-block">
            <div className="search-voucher">
              <input type={Text} placeholder="Enter your voucher code" />
              <button>Apply</button>
            </div>
          </div>

          <button className="order-summary-btn" onClick={() => submitHandler()}>
            Order Summary
          </button>
        </div>
      </section>
    </>
  );
}
export default Cart;
