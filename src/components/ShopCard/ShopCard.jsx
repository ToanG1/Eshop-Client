import React from "react";
import style from "./ShopCard.scss";
import { Link } from "react-router-dom";

import shopCover from "../../images/shop-cover.png";
import shopAvatar from "../../images/shop-avatar.png";

function ShopCard() {
  return (
    <>
      <section className="shop-card-home">
        <Link to="">
          <div className="shop-card-container">
            <img
              src={shopCover}
              alt="shop-cover-img"
              className="shop-cover-img"
            />
            <img
              src={shopAvatar}
              alt="shop-avatar-img"
              className="shop-avatar-img"
            />
            <p>Zara</p>
          </div>
        </Link>
      </section>
    </>
  );
}

export default ShopCard;
