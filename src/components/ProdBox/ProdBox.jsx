import React from "react";
import style from "./ProdBox.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Prodbox() {
  return (
    <>
      <section className="prod-box-container">
        <div className="prod-img-box">
          <img
            src="https://static.zara.net/photos///2023/V/0/2/p/4720/411/800/2/w/1126/4720411800_2_1_1.jpg?ts=1678875810160"
            alt="prod-img"
          />
          <div className="prod-btn">
            <div className="prod-rating">
              <FontAwesomeIcon icon={faStar} className="rating-icon" />
              <p>4.5</p>
            </div>
            <FontAwesomeIcon icon={faHeart} className="favo-icon" />
          </div>
        </div>
        <div className="prod-info">
          <div className="name-box">
            <h2 className="prod-name">Bomber for summer</h2>
            <p className="prod-store">Zara</p>
          </div>

          <div className="price-box">
            <p className="prod-price">100.000Đ</p>
            <p className="prod-desc-price">80.000Đ</p>
          </div>
        </div>
        <button>Add to cart</button>
      </section>
    </>
  );
}
export default Prodbox;
