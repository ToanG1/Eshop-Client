import React, { useState, useEffect } from "react";
import style from "./ProductInfo.scss";
import { Link, useParams } from "react-router-dom";

import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCartShopping,
  faHeart as faHeartFull,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as faStarEmpty,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import StylesList from "../../components/StylesList/StylesList";
import TypesList from "../../components/TypesList/TypesList";
import Comments from "../../components/Comments/Comments";
import MiniProdCard from "../../components/MiniProdCard/MiniProdCard";

import shopAvatar from "../../images/shop-avatar.png";
import prodImg from "../../images/prod-img.jpg";

import { listProduct, findProdById } from "../../api/user/Product";
import { findStoreById } from "../../api/user/Store";

import { toggleFollowProduct } from "../../api/user/Follow/FollowProduct";
import { addToCart } from "../../api/user/Cart";
function ProductInfo() {
  const [quantity, setQuantity] = useState(1);
  let id = useParams();
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

  const [products, setProducts] = useState([]);
  const [prod, setProd] = useState({
    listImages: [],
    name: "",
    price: "",
    rating: "",
    sales: "",
    description: "",
    id: "",
    listTypes: [],
    listStyle: [],
    storeId: -1,
  });
  let res;
  const [store, setStore] = useState({});
  useEffect(() => {
    const fetchProd = async () => {
      res = await findProdById(id.id);
      setProd(res.data);
    };

    fetchProd();
  }, [id]);

  useEffect(() => {
    const fetchStore = async () => {
      res = await findStoreById(prod.storeId);
      setStore(res.data);
    };
    const fetchRelatedProd = async () => {
      res = await listProduct();
      setProducts(res.data.productDtoList);
    };
    fetchStore();
    fetchRelatedProd();
  }, [prod]);

  const [isFav, setIsFav] = useState(false);
  function toggleFav() {
    toggleFollowProduct(prod.id);
    setIsFav(!isFav);
  }

  function addToCartHanlder() {
    addToCart(prod.id);
  }

  console.log(id);

  return (
    <>
      <Nav />
      <div className="product-info-section">
        <div className="main-info-container">
          <div className="product-img-slider">
            <Slider {...settings}>
              {prod.listImages.map((image, index) => (
                <img src={image} alt={index} />
              ))}
            </Slider>
          </div>
          <div className="product-info">
            <div className="prod-name">{prod.name}</div>
            <div className="rating">
              <div className="rating-stars">
                {[...Array(5)].map((star, i) => {
                  if (i < prod.rating) return <FontAwesomeIcon icon={faStar} />;
                  else return <FontAwesomeIcon icon={faStarEmpty} />;
                })}
              </div>
              <div className="rating-count">500 Đánh giá</div>
              <div className="sales">{prod.sales} Đã bán</div>
            </div>
            <div className="price-container">
              <div className="price">
                <span className="og-price">{prod.price} VND</span>
                <span>{prod.price} VND</span>
              </div>
              <div className="sale-banner">Summer sale 2023</div>
            </div>
            <StylesList styles={prod.listStyle} />
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
                <div className="fav-btn" onClick={() => toggleFav()}>
                  {isFav ? (
                    <FontAwesomeIcon icon={faHeartFull} />
                  ) : (
                    <FontAwesomeIcon icon={faHeart} />
                  )}
                </div>
                <button className="add-btn" onClick={() => addToCartHanlder()}>
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
                <img src={store.avatar} alt="shop" />
                <p className="shop-name-text">{store.name}</p>
              </div>
            </div>
            <div className="product-desciption">{prod.description}</div>
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
          {products.map((prod) => (
            <MiniProdCard prod={prod} key={prod.id} />
          ))}
        </Slider>
      </div>
      <Footer />
    </>
  );
}
export default ProductInfo;
