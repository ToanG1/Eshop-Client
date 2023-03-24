import React, { useEffect } from "react";
import style from "./Explore.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import ShopCard from "../../components/ShopCard/ShopCard";
import MiniProdCard from "../../components/MiniProdCard/MiniProdCard";
function Explore() {
  let settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 5.22,
    slidesToScroll: 1,
    centerMode: true,
  };
  useEffect(() => {
    const current_nav_item = document.getElementById("nav-explore");
    current_nav_item.classList.add("active");
  });
  return (
    <>
      <Nav />
      <section className="explorepage-home">
        <div className="cate-container">
          <h2>
            Recommended Categories
            <FontAwesomeIcon icon={faCaretRight} />
          </h2>
          <div className="categories">
            <div id="first-block">
              <button className="cate-name">CateName</button>
            </div>

            <div id="second-block">
              <button className="cate-name">CateName</button>
            </div>
            <div id="third-block">
              <div id="top-block">
                <div>
                  <button className="cate-name">CateName</button>
                </div>
                <div>
                  <button className="cate-name">CateName</button>
                </div>
              </div>
              <div id="bottom-block">
                <div>
                  <button className="cate-name">CateName</button>
                </div>
                <div>
                  <button className="cate-name">CateName</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shop-container">
          <h2>Recommended Shops</h2>
          <div className="shop-cards">
            <Slider {...settings}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <ShopCard key={item} />
              ))}
            </Slider>
          </div>
        </div>
        <div className="prod-container">
          <h2>
            Recommended Shops <FontAwesomeIcon icon={faCaretRight} />
          </h2>
          <div className="prod-cards">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <MiniProdCard />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Explore;
