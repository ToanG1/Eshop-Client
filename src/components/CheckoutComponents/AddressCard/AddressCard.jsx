import React from "react";
import style from "./AddressCard.scss";

import { Popup } from "reactjs-popup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

import AddressForm from "../AddressForm/AddressForm";

import { deleteAddress } from "../../../api/user/Address";

function AddressCard({ address, info, setInfo, removeAddress }) {
  const addAddressToOrder = () => {
    setInfo({
      ...info,
      address: address,
    });
  };
  const deleteAddressHandler = (id) => {
    deleteAddress(id);
    removeAddress(id);
  };
  return (
    <>
      <section className="address-card-home">
        <input
          type="radio"
          name="order-address"
          onChange={() => addAddressToOrder()}
        />
        <div className="address-info-container">
          <div className="header">
            <h3>{address.receiverName}</h3>
            <p>Home</p>
          </div>
          <p>{address.receiverAddress}</p>
          <div className="phone">
            <p>Mobile: </p>
            <p>0{address.phoneNumber}</p>
          </div>
          <div className="address-btn">
            <Popup
              trigger={
                <i>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </i>
              }
              modal
            >
              <AddressForm address={address} />
            </Popup>

            <i onClick={() => deleteAddressHandler(address.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </i>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddressCard;
