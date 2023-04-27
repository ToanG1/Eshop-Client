import React, { useState, useEffect } from "react";
import style from "./DeliveryAddress.scss";
import "reactjs-popup/dist/index.css";

import { Popup } from "reactjs-popup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

import AddressCard from "../AddressCard/AddressCard";
import AddressForm from "../AddressForm/AddressForm";

import { findAllAdress } from "../../../api/user/Address";

import { findAllShipping } from "../../../api/user/Shipping";

function DeliveryAddress({ changeStep, info, setInfo }) {
  const [address, setAddress] = useState([]);
  const [shipping, setShipping] = useState([]);
  const fetchData = () => {
    findAllAdress().then((res) => {
      setAddress(res.data.addressDtoList);
    });
    findAllShipping().then((res) => {
      setShipping(res.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const removeAddress = (id) => {
    setAddress(address.filter((item) => item.id !== id));
  };

  const chooseShippingHandler = (option) => {
    setInfo({
      ...info,
      shippingId: option.id,
      delivery: option.shippingCost,
    });
    document
      .querySelectorAll(".shipping-option")
      .forEach((item) => item.classList.remove("active-choice"));
    document.getElementById(option.id).classList.add("active-choice");
  };

  const nextPageHandler = () => {
    if (info.address.id !== undefined) {
      if (info.shippingId !== -1) {
        changeStep(3);
      } else alert("please select shipping option");
    } else alert("Please select address");
  };

  return (
    <>
      <section className="address-home">
        <div className="left-box">
          <div className="title">
            <i onClick={() => changeStep(1)}>
              <FontAwesomeIcon icon={faArrowLeft} size="xm" />
            </i>
            <h1>Select Delivery Address</h1>
            <div className="add-address-btn-container">
              <Popup
                trigger={
                  <i className="add-address-btn">
                    <FontAwesomeIcon icon={faSquarePlus} />
                  </i>
                }
                modal
                onClose={() => fetchData()}
              >
                <AddressForm />
              </Popup>
            </div>
          </div>
          <div className="address-cards-list">
            {address.map((item) => {
              return (
                <AddressCard
                  address={item}
                  key={item.id}
                  info={info}
                  setInfo={setInfo}
                  removeAddress={removeAddress}
                />
              );
            })}
          </div>
        </div>
        <div className="v-ruler"></div>
        <div className="right-box">
          <div className="shipping-container">
            <h2>Shipping Option</h2>
            <div className="shipping-option-list">
              {shipping.map((option) => {
                return (
                  <div
                    className="shipping-option"
                    id={option.id}
                    key={option.id}
                    onClick={() => chooseShippingHandler(option)}
                  >
                    <p className="shipping-option-name">{option.name}</p>
                  </div>
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
                    : 0}{" "}
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
                  : info.totalCash + info.delivery}
                VND
              </p>
            </div>
            <button
              className="place-order-btn"
              onClick={() => nextPageHandler()}
            >
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
