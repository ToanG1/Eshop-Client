import React, { useState } from "react";
import style from "./OrderSummary.scss";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

import img from "../../../images/prod-img.jpg";

import OrderItemCard from "../OrderItemCard/OrderItemCard";

function OrderSummary({ voucher, changeStep, chosenList, info, setInfo }) {
  const [search, setSearch] = useState("");
  const [match, setMatchItem] = useState([]);
  const [vouchers, setVouchers] = useState({});
  const handleSearch = (value) => {
    setSearch(value);
    if (value !== "")
      setMatchItem(
        voucher.filter(
          (item) =>
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.code.toLowerCase().includes(value.toLowerCase())
        )
      );
  };
  const handleChooseVoucher = (id) => {
    setSearch("");
    setMatchItem([]);
    match.forEach((item) => {
      if (item.id === id) {
        if (item.role === 0) {
          setInfo({
            ...info,
            shippingVoucher: item,
          });
          setVouchers({
            ...vouchers,
            delivery: item.voucherValue,
          });
        } else {
          setInfo({
            ...info,
            productVoucher: item,
          });
          setVouchers({
            ...vouchers,
            item: item.voucherValue,
          });
        }
      }
    });
  };
  console.log(vouchers);
  return (
    <>
      <section className="order-summary-home">
        <div className="left-box">
          <div className="title">
            <div onClick={() => changeStep(0)}>
              <FontAwesomeIcon icon={faArrowLeft} size="xm" />
            </div>
            <h1>Order Summary</h1>
            <span>
              <FontAwesomeIcon icon={faCircle} size="2xs" /> {info.totalProd}{" "}
              items
            </span>
          </div>
          <div className="order-items-container">
            {chosenList.map((box) => {
              return (
                <>
                  <div className="store-label">
                    <img
                      src={box.store.avatar != null ? box.store.avatar : img}
                      alt=""
                    />
                    <span>
                      {box.store.name != null ? box.store.name : "store"}
                    </span>
                  </div>
                  <div className="order-items">
                    {box.cartItemDtoList.map((cartItem) => {
                      return <OrderItemCard cartItem={cartItem} />;
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="v-ruler"></div>
        <div className="right-box">
          {/* <div className="notification">
            <i>
              <FontAwesomeIcon icon={faTruckFast} size="2x" />
            </i>
            Yay! No Delivery Charge on this order
          </div> */}
          <div className="voucher-container">
            <div className="voucher-search-header">
              <h2>Have a coupon ?</h2>
              <div className="vouchers-chosen">
                {vouchers.item !== undefined ? (
                  <p className="item-voucher">
                    {vouchers.item * 100}% off on delivery
                  </p>
                ) : null}
                {vouchers.delivery !== undefined ? (
                  <p className="delivery-voucher">
                    {vouchers.delivery * 100}% off on delivery
                  </p>
                ) : null}
              </div>
            </div>

            <div className="voucher-code">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <div className="mathching-items">
              {match.map((item) => {
                return (
                  <p
                    className="match-voucher"
                    onClick={() => handleChooseVoucher(item.id)}
                  >
                    {item.name}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="price-detail-container">
            <h2>Price Details ({info.totalProd} items)</h2>
            <div id="table-container">
              <div className="row">
                <p>Total on produts</p>
                <p>{info.totalCash} VND</p>
              </div>
              <div className="row">
                <p>Discount on products</p>
                <p className="discount">
                  {info.productVoucher.voucherValue !== undefined
                    ? info.totalCash * info.productVoucher.voucherValue
                    : 0}
                  VND
                </p>
              </div>
              <div className="row">
                <p>Delivery Fee</p>
                <p>{info.delivery} VND</p>
              </div>
              <div className="row">
                <p>Discount on Delivery</p>
                <p className="discount">
                  {info.shippingVoucher.voucherValue !== undefined
                    ? info.delivery * info.shippingVoucher.voucherValue
                    : 0}
                  VND
                </p>
              </div>
            </div>
            <div className="h-ruler"></div>
            <div className="total-price">
              <p>Total</p>
              <p>
                {info.productVoucher.voucherValue !== undefined &&
                info.shippingVoucher.voucherValue !== undefined
                  ? info.totalCash -
                    info.totalCash * info.productVoucher.voucherValue +
                    info.delivery -
                    info.delivery * info.shippingVoucher.voucherValue
                  : 0}
                VND
              </p>
            </div>
            <button className="place-order-btn" onClick={() => changeStep(2)}>
              Place Order
              <i>
                <FontAwesomeIcon icon={faArrowRight} />
              </i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderSummary;
