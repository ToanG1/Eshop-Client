import React from "react";
import style from "./OrderSummary.scss";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircle,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

import OrderItemCard from "../OrderItemCard/OrderItemCard";

function OrderSummary({ changeStep, ...props }) {
  return (
    <>
      <section className="order-summary-home">
        <div className="left-box">
          <div className="title">
            <Link to="">
              <FontAwesomeIcon icon={faArrowLeft} size="xm" />
            </Link>
            <h1>Order Summary</h1>
            <span>
              <FontAwesomeIcon icon={faCircle} size="2xs" /> 2 items
            </span>
          </div>
          <div className="order-items">
            <OrderItemCard />
            <OrderItemCard />
            <OrderItemCard />
          </div>
        </div>
        <div className="v-ruler"></div>
        <div className="right-box">
          <div className="notification">
            <i>
              <FontAwesomeIcon icon={faTruckFast} size="2x" />
            </i>
            Yay! No Delivery Charge on this order
          </div>
          <div className="voucher-container">
            <h2>Have a coupon ?</h2>
            <div className="voucher-code">
              <input type="text" placeholder="Enter Coupon Code" />
              <button>Apply</button>
            </div>
          </div>
          <div className="price-detail-container">
            <h2>Price Details (2 items)</h2>
            <div id="table-container">
              <div className="row">
                <p>Total on produts</p>
                <p>1.000.000D</p>
              </div>
              <div className="row">
                <p>Discount on products</p>
                <p className="discount">100.000D</p>
              </div>
              <div className="row">
                <p>Delivery Fee</p>
                <p>54.000D</p>
              </div>
              <div className="row">
                <p>Discount on Delivery</p>
                <p className="discount">32.000D</p>
              </div>
            </div>
            <div className="h-ruler"></div>
            <div className="total-price">
              <p>Total</p>
              <p>922.000D</p>
            </div>
            <button className="place-order-btn" onClick={() => changeStep(1)}>
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
