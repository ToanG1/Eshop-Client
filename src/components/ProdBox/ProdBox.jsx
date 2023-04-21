import React from "react";
import style from "./ProdBox.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Prodbox({ prod }) {
  return (
    <>
      <section className="prod-box-container">
        <Link to={`/explore/${prod.id}`}>
          <div className="prod-img-box">
            <img src={prod.listImages[0]} alt={prod.description} />
            <div className="prod-btn">
              <div className="prod-rating">
                <FontAwesomeIcon icon={faStar} className="rating-icon" />
                <p>{prod.rating}</p>
              </div>
              <FontAwesomeIcon icon={faHeart} className="favo-icon" />
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
          <button>Add to cart</button>
        </Link>
      </section>
    </>
  );
}
export default Prodbox;
