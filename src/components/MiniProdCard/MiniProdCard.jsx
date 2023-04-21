import React from "react";
import { Link, useParams } from "react-router-dom";
import style from "./MiniProdCard.scss";
import prodImg from "../../images/prod-img.jpg";
function MiniProdCard({ prod }) {
  return (
    <>
      <section className="prod-card">
        <Link to={`/explore/${prod.id}`}>
          <img
            src={prod.listImages[0]}
            className="prod-img"
            alt={prod.description}
          />
          <p className="prod-name">{prod.name}</p>
          <div className="prod-info">
            <p className="prod-price">{prod.price} VND</p>
            <div>
              <p>Đã bán {prod.sales}</p>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}

export default MiniProdCard;
