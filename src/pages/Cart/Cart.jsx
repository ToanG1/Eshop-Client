import React, { useState, useEffect } from "react";
import style from "./Cart.scss";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft, faCircle } from "@fortawesome/free-solid-svg-icons";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import CartBox from "../../components/CartComponent/CartBox/CartBox";

import Voucher from "../../components/CartComponent/MiniVoucher/MiniVoucher";

import { findCart } from "../../api/user/Cart";

function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      findCart().then((res) => {
        setCart(res.data.cartBoxDtoList);
      });
    };
    fetchData();
  }, []);
  const [total, setTotal] = useState(0);

  return (
    <>
      <Nav />
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
                cart={cart}
                setCart={setCart}
                key={cartbox.id}
              />
            ))}
          </div>
        </div>
        <div className="v-ruler"></div>
        <div className="right-box">
          <h2>New voucher</h2>
          <div className="top-block voucher-block">
            <Voucher />
            <Voucher />
            <Voucher />
            <Voucher />
            <Voucher />
          </div>
          <div className="middle-block">
            <div className="search-voucher">
              <input type={Text} placeholder="Enter your voucher code" />
              <button>Apply</button>
            </div>
          </div>
          <h2>Your voucher</h2>
          <div className="bottom-block voucher-block">
            <Voucher />
            <Voucher />
            <Voucher />
            <Voucher />
            <Voucher />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Cart;
