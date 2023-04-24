import React from "react";
import style from "./MiniVoucher.scss";

function MiniVoucher() {
  return (
    <>
      <section className="mini-voucher-home">
        <div className="mini-voucher-left-box">
          <p>Sale 70%</p>
          <p>Order from 500.000D, sale max 300.000D</p>
          <p>Date: 30.04.2023</p>
        </div>
        <div className="mini-voucher-right-box">
          <button>Save</button>
        </div>
      </section>
    </>
  );
}
export default MiniVoucher;
