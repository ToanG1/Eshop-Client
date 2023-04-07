import React, { useState } from "react";
import style from "./Checkout.scss";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Confirm from "../../components/CheckoutComponents/Confirm/Confirm";
import Payment from "../../components/CheckoutComponents/Payment/Payment";
import DeliveryAddress from "../../components/CheckoutComponents/DeliveryAddress/DeliveryAddress";
import OrderSummary from "../../components/CheckoutComponents/OrderSummary/OrderSummary";

function Checkout() {
  const [state, setState] = useState({
    confirm: false,
    payment: false,
    delivery: false,
  });
  const [step, setStep] = useState(0);
  const renderPages = (step) => {
    switch (step) {
      case 0:
        return <OrderSummary changeStep={setStep} />;
      case 1:
        return <DeliveryAddress changeStep={setStep} />;
      case 2:
        return <Payment changeStep={setStep} />;
      case 3:
        return <Confirm />;
      default:
        return <OrderSummary changeStep={setStep} />;
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
