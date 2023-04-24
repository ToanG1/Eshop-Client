import React, { useState, useEffect } from "react";
import style from "./Favorite.scss";

import ProdBox from "../FavProdBox/FavProdBox";
import { findFollowProduct } from "../../../api/user/Follow/FollowProduct";

import { toggleFollowProduct } from "../../../api/user/Follow/FollowProduct";
function Favorite() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await findFollowProduct();
      setProducts(data.data.productDtoList);
    };
    fetchData();
  }, []);
  const removeFavorite = (prodId) => {
    setProducts(products.filter((prod) => prod.id !== prodId));
    toggleFollowProduct(prodId);
  };
  return (
    <>
      <section className="favorite-home">
        <div className="fav-top-block">Wish list</div>
        <div className="fav-bottom-block">
          {products.map((prod) => {
            return (
              <ProdBox
                prod={prod}
                removeFavorite={removeFavorite}
                key={prod.id}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Favorite;
