import React from "react";
import style from "./MiniVoucher.scss";

function MiniVoucher({ voucher }) {
  return (
    <>
      <section className="mini-voucher-home">
        <div className="mini-voucher-left-box">
          <p>
            Sale {voucher.voucherValue * 100} % in{" "}
            {voucher.role === 1 ? "items" : "delivery fee"}
          </p>
          <p>{voucher.name}</p>
          <p>{voucher.code}</p>
        </div>
        <div className="mini-voucher-right-box">
          <button>Save</button>
        </div>
      </section>
    </>
  );
}
export default MiniVoucher;
