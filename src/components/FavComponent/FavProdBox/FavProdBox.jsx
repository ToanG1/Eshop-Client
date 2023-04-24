import React from "react";
import style from "./FavProdBox.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

import img from "../../../images/prod-img.jpg";

function FavProdBox({ prod, removeFavorite }) {
  return (
    <>
      <section className="fav-prod-box">
        <img src={prod.listImages[0]} alt="" />
        <p>{prod.name}</p>
        <i onClick={() => removeFavorite(prod.id)}>
          <FontAwesomeIcon icon={faXmark} />
        </i>
        <button>
          <FontAwesomeIcon icon={faCartPlus} />{" "}
        </button>
      </section>
    </>
  );
}

export default FavProdBox;
