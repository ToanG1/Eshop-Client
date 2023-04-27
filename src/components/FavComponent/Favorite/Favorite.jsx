import React, { useState, useEffect } from "react";
import style from "./Favorite.scss";

import ProdBox from "../FavProdBox/FavProdBox";
import { findFollowProduct } from "../../../api/user/Follow/FollowProduct";

import { toggleFollowProduct } from "../../../api/user/Follow/FollowProduct";
import { addToCart } from "../../../api/user/Cart";

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
  function addToCartHanlder(id) {
    addToCart(id);
    removeFavorite(id);
  }
  return (
    <>
      <section className="favorite-home">
        <div className="fav-top-block">Wish list</div>
        <div className="fav-bottom-block">
          {products.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                paddingTop: "40%",
              }}
            >
              None Item !
            </p>
          ) : (
            products.map((prod) => {
              return (
                <ProdBox
                  prod={prod}
                  removeFavorite={removeFavorite}
                  addToCartHanlder={addToCartHanlder}
                  key={prod.id}
                />
              );
            })
          )}
        </div>
      </section>
    </>
  );
}

export default Favorite;
