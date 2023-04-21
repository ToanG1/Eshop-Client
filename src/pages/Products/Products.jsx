import React, { useState, useEffect } from "react";
import style from "./Products.scss";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import MiniProdCard from "../../components/MiniProdCard/MiniProdCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faCircle } from "@fortawesome/free-solid-svg-icons";

import { listProduct, countProduct } from "../../api/user/Product";

function Products() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      let res = await listProduct();
      setProducts(res.data.productDtoList);
      // res = await countProduct();
      // setAmount(data.data);
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
            {products.map((prod) => (
              <MiniProdCard prod={prod} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Products;
