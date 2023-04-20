import React, { useState, useEffect } from "react";
import style from "./Products.scss";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import MiniProdCard from "../../components/MiniProdCard/MiniProdCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faCircle } from "@fortawesome/free-solid-svg-icons";

import { listProduct } from "../../api/user/Product";

function Products() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await listProduct();
      setProducts(data);
    };
    fetchData();
  }, []);
  console.log(products);
  return (
    <>
      <Nav />
      <section className="products-by-cate">
        <div className="prod-container">
          <div className="top-container">
            <div className="cate-name">
              <h2>{category} </h2>
              <FontAwesomeIcon icon={faCircle} size="xs" />
              <span>123 items</span>
            </div>
            <div className="filter-btn">
              <FontAwesomeIcon icon={faFilter} />
              Filter
            </div>
          </div>
          <div className="prod-cards">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <MiniProdCard id={item} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Products;
