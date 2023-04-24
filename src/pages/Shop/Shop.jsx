import React, { useState, useEffect } from "react";
import style from "./Shop.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMessage } from "@fortawesome/free-solid-svg-icons";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Voucher from "../../components/Voucher/Voucher";
import MiniProdCard from "../../components/MiniProdCard/MiniProdCard";
import shopAvatar from "../../images/shop-avatar.png";

import { listProduct } from "../../api/user/Product";

function Shop() {
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
      <section className="shop-home">
        <div className="shop-info-container">
          <div className="shop-info">
            <div className="shop-avatar">
              <div>
                <img src={shopAvatar} alt="avatar" />
                <span>Zara Official</span>
              </div>
              <div>
                <button>
                  {" "}
                  <FontAwesomeIcon icon={faPlus} /> Follow
                </button>
                <button>
                  {" "}
                  <FontAwesomeIcon icon={faMessage} /> Chat
                </button>
              </div>
            </div>
            <div className="shop-info-content">
              <div>
                <span>Products:</span>
                <span>Following:</span>
                <span>Rate response time:</span>
              </div>
              <div>
                <span>Followed:</span>
                <span>Rate:</span>
                <span>Join from:</span>
              </div>
            </div>
          </div>
          <div className="shop-vouchers">
            <h2>Shop vouchers</h2>
            <div className="vouchers-container">
              {[...Array(5)].map((_, i) => (
                <Voucher key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="shop-prods-container">
          <h2>Shop products</h2>
          <div className="products-container">
            {products.map((prod, i) => (
              <MiniProdCard prod={prod} key={prod.id} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Shop;
