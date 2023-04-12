import React from "react";
import style from "./Voucher.scss";

function Voucher() {
  return (
    <>
      <section className="voucher-home">
        <div className="left-box">
          <p>Sale 70%</p>
          <p>Order from 500.000D, sale max 300.000D</p>
          <p>Date: 30.04.2023</p>
        </div>
        <div className="right-box">
          <button>Save</button>
        </div>
      </section>
    </>
  );
}
export default Voucher;
