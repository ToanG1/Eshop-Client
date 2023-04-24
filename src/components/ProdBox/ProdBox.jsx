import React, { useState, useEffect } from "react";
import style from "./ProdBox.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faFullHeart } from "@fortawesome/free-solid-svg-icons";

import { toggleFollowProduct } from "../../api/user/Follow/FollowProduct";
import { addToCart } from "../../api/user/Cart";

function Prodbox({ prod }) {
  const [isFav, setIsFav] = useState(false);
  function toggleFav() {
    toggleFollowProduct(prod.id);
    setIsFav(!isFav);
  }

  function addToCartHanlder() {
    addToCart(prod.id);
  }
  return (
    <>
      <section className="prod-box-container">
        <div className="prod-img-box">
          <Link to={`/explore/${prod.id}`}>
            <img src={prod.listImages[0]} alt={prod.description} />
          </Link>
          <div className="prod-btn">
            <div className="prod-rating">
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
              <p>{prod.rating}</p>
            </div>
            <div onClick={() => toggleFav()}>
              {isFav ? (
                <FontAwesomeIcon icon={faFullHeart} className="favo-icon" />
              ) : (
                <FontAwesomeIcon icon={faHeart} className="favo-icon" />
              )}
            </div>
          </div>
        </div>
        <div className="prod-info">
          <div className="name-box">
            <h2 className="prod-name">{prod.name}</h2>
            <p className="prod-store">{prod.category.name}</p>
          </div>

          <div className="price-box">
            <p className="prod-price">{prod.price} VND</p>
            <p className="prod-desc-price">{prod.price} VND</p>
          </div>
        </div>
        <button onClick={() => addToCartHanlder()}>Add to cart</button>
      </section>
    </>
  );
}
export default Prodbox;
