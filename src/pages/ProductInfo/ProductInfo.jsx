import React, { useState } from "react";
import style from "./ProductInfo.scss";
import { Link, useParams } from "react-router-dom";

import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import StylesList from "../../components/StylesList/StylesList";
import TypesList from "../../components/TypesList/TypesList";
import Comments from "../../components/Comments/Comments";
import MiniProdCard from "../../components/MiniProdCard/MiniProdCard";

import shopAvatar from "../../images/shop-avatar.png";
import prodImg from "../../images/prod-img.jpg";

function ProductInfo() {
  const [quantity, setQuantity] = useState(1);
  const id = useParams();
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let settings4relatedPod = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 6.2,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <>
      <Nav />
      <div className="product-info-section">
        <div className="main-info-container">
          <div className="product-img-slider">
            <Slider {...settings}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <img src={prodImg} alt={item.toString()} />
              ))}
            </Slider>
          </div>
          <div className="product-info">
            <div className="prod-name">
              Super idol backpack vip pro plus max limited royal special
            </div>
            <div className="rating">
              <div className="rating-stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarEmpty} />
                <FontAwesomeIcon icon={faStarEmpty} />
              </div>
              <div className="rating-count">500 Đánh giá</div>
              <div className="sales">22.3k Đã bán</div>
            </div>
            <div className="price-container">
              <div className="price">
                <span className="og-price">500.000Đ</span>
                <span>400.000Đ</span>
              </div>
              <div className="sale-banner">Summer sale 2023</div>
            </div>
            <StylesList />
            <div className="selection-container">
              <TypesList />
              <div className="quantity-container">
                <div className="quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => {
                      if (quantity >= 1) setQuantity(quantity - 1);
                    }}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="quantity-input"
                    value={quantity}
                    min={0}
                  />
                  <button
                    className="quantity-btn"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="add-btn">
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="common-info-container">
          <div className="left-container">
            <div className="shop-info">
              <div className="shop-name">
                <img src={shopAvatar} alt="shop" />
                <p className="shop-name-text">ZARA</p>
              </div>
            </div>
            <div className="product-desciption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className="right-container">
            <div className="comments-container">
              <Comments />
            </div>
          </div>
        </div>
      </div>
      <div className="related-prod-section">
        <h2>Related Products</h2>
        <Slider {...settings4relatedPod}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <MiniProdCard id={item} />
          ))}
        </Slider>
      </div>
      <Footer />
    </>
  );
}
export default ProductInfo;
