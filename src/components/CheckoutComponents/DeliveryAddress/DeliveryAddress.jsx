import React from "react";
import style from "./DeliveryAddress.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

import AddressCard from "../AddressCard/AddressCard";

function DeliveryAddress({ changeStep, ...props }) {
  return (
    <>
      <section className="address-home">
        <div className="left-box">
          <div className="title">
            <i onClick={() => changeStep(0)}>
              <FontAwesomeIcon icon={faArrowLeft} size="xm" />
            </i>
            <h1>Select Delivery Address</h1>
            <i className="add-address-btn">
              <FontAwesomeIcon icon={faSquarePlus} />
            </i>
          </div>
          <div className="address-cards-list">
            <AddressCard />
            <AddressCard />
            <AddressCard />
            <AddressCard />
            <AddressCard />
          </div>
        </div>
        <div className="v-ruler"></div>
        <div className="right-box">
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

export default DeliveryAddress;
