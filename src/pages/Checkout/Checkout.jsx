import React, { useEffect, useState } from "react";
import style from "./Checkout.scss";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Confirm from "../../components/CheckoutComponents/Confirm/Confirm";
import Payment from "../../components/CheckoutComponents/Payment/Payment";
import DeliveryAddress from "../../components/CheckoutComponents/DeliveryAddress/DeliveryAddress";
import OrderSummary from "../../components/CheckoutComponents/OrderSummary/OrderSummary";
import Cart from "../Cart/Cart";

import { findAllVoucher } from "../../api/user/Voucher";
function Checkout() {
  const [info, setInfo] = useState({
    address: {},
    totalProd: 0,
    totalCash: 0,
    delivery: 0,
    shippingId: -1,
    note: "",
    cartItemIdList: [],
    productVoucher: {},
    shippingVoucher: {},
  });
  const [step, setStep] = useState(0);

  const [voucher, setVoucher] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      findAllVoucher().then((res) => {
        setVoucher(res.data);
      });
    };
    fetchData();
  }, []);

  const [chosenList, setChosenList] = useState([]);
  useEffect(() => {
    var totalProd = 0;
    var totalCash = 0;
    chosenList.map((box) => {
      totalProd = totalProd + box.cartItemDtoList.length;
      box.cartItemDtoList.map((item) => {
        totalCash = totalCash + item.quantity * item.productDto.price;
      });
    });
    setInfo({
      ...info,
      totalProd: totalProd,
      totalCash: totalCash,
    });
  }, [chosenList]);

  const renderPages = (step) => {
    switch (step) {
      case 0:
        return (
          <Cart
            voucher={voucher}
            changeStep={setStep}
            setChosenList={setChosenList}
          />
        );
      case 1:
        return (
          <OrderSummary
            voucher={voucher}
            chosenList={chosenList}
            info={info}
            setInfo={setInfo}
            changeStep={setStep}
          />
        );
      case 2:
        return (
          <DeliveryAddress changeStep={setStep} info={info} setInfo={setInfo} />
        );
      case 3:
        return <Payment info={info} setInfo={setInfo} changeStep={setStep} />;
      case 4:
        const form = {
          ...info,
          cartItemIdList: chosenList
            .map((box) => box.cartItemDtoList.map((item) => item.id))
            .flat(),
          productVoucher: info.productVoucher.code,
          shippingVoucher: info.shippingVoucher.code,
        };
        return <Confirm form={form} />;
      default:
        return <Cart changeStep={setStep} />;
    }
  };
  return (
    <>
      <Nav />
      <section className="checkout-home">{renderPages(step)}</section>
      <Footer />
    </>
  );
}

export default Checkout;
