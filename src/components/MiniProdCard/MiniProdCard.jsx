import React from "react";
import style from "./MiniProdCard.scss";
import prodImg from "../../images/prod-img.jpg";
function MiniProdCard() {
  return (
    <>
      <section className="prod-card">
        <img src={prodImg} className="prod-img" alt="product" />
        <p className="prod-name">Backpack</p>
        <div className="prod-info">
          <p className="prod-price">100.000Đ</p>
          <div>
            <p>Đã bán</p>
            <p className="sales">10k</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MiniProdCard;
