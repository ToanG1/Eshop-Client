import React from "react";
import style from "./AddressCard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
function AddressCard() {
  return (
    <>
      <section className="address-card-home">
        <input type="radio" name="order-address" />
        <div className="address-info-container">
          <div className="header">
            <h3>Dinh Van Toan</h3>
            <p>Home</p>
          </div>
          <p>123 Duong Hoa Lang, Lang Cat, Tan Hai, Phu My, Ba Ria Vung Tau</p>
          <div className="phone">
            <p>Mobile: </p>
            <p>0123456789</p>
          </div>
          <div className="address-btn">
            <i>
              <FontAwesomeIcon icon={faPenToSquare} />
            </i>
            <i>
              <FontAwesomeIcon icon={faTrash} />
            </i>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddressCard;
