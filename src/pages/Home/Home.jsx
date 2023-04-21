import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import style from "./Home.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import ProdBox from "../../components/ProdBox/ProdBox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { listProduct } from "../../api/user/Product";
function Home() {
  let settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    centerMode: true,
    // responsive: [
    //   {
    //     breakpoint: 960,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 2,
    //     },
    //   },
    // ],
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const current_nav_item = document.getElementById("nav-home");
    current_nav_item.classList.add("active");
    const fetchData = async () => {
      let res = await listProduct();
      setProducts(res.data.productDtoList);
    };
    fetchData();
  }, []);
  return (
    <>
      <Nav />
      <section className="homepage-home">
        <div className="cate-container">
          <div id="first-block">
            <Link to="/cate/all" className="label-cate">
              <p>Brands Everyone's Crushing on</p>
              <span>
                Explore all <FontAwesomeIcon icon={faArrowRightLong} />
              </span>
            </Link>
          </div>
          <div id="second-block">
            <div id="top-block">
              <Link className="label-cate">
                <p>234 Items</p>
                <span>
                  Cate name
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </span>
              </Link>
            </div>
            <div id="bottom-block">
              <div id="left-block">
                <Link className="label-cate">
                  <p>523 Items</p>
                  <span>
                    Cate name
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </span>
                </Link>
              </div>
              <div id="right-block">
                <Link className="label-cate">
                  <p>123 Items</p>
                  <span>
                    Cate name
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="prod-container">
          <h1>Arrival Products</h1>
          <div className="arrival-prod prod-slider">
            <Slider {...settings}>
              {products.map((prod) => (
                <ProdBox prod={prod} key={prod.id} />
              ))}
            </Slider>
          </div>
          <h1>Top Products</h1>
          <div className="top-prod prod-slider">
            <Slider {...settings}>
              {products.map((prod) => (
                <ProdBox prod={prod} key={prod.id} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
