import React from "react";
import { Link, useParams } from "react-router-dom";
import style from "./MiniProdCard.scss";
import prodImg from "../../images/prod-img.jpg";
function MiniProdCard({ id }) {
  return (
    <>
      <section className="prod-card">
        <Link to={`/explore/${id}`}>
          <img src={prodImg} className="prod-img" alt="product" />
          <p className="prod-name">Backpack</p>
          <div className="prod-info">
            <p className="prod-price">100.000Đ</p>
            <div>
              <p>Đã bán</p>
              <p className="sales">10k</p>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}

export default MiniProdCard;
