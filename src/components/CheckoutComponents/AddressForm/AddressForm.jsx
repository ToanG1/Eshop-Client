import React, { useState } from "react";
import style from "./AddressForm.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { createAddress, updateAddress } from "../../../api/user/Address";

function AddressForm({ address }) {
  const isCreated = address ? true : false;
  const [form, setForm] = useState({
    id: address ? address.id : "",
    name: address ? address.receiverName : "",
    address: address ? address.receiverAddress : "",
    phoneNumber: address ? address.phoneNumber : "",
  });
  const [tags, setTags] = useState([
    { name: "Home", color: "red" },
    { name: "Work", color: "blue" },
    { name: "Friend", color: "orange" },
    { name: "Parent", color: "purple" },
    { name: "Kelly", color: "DodgerBlue" },
    { name: "David", color: "Brown" },
    { name: "John", color: "CadetBlue" },
    { name: "Hoa", color: "Chocolate" },
    { name: "Tung", color: "Crimson" },
    { name: "Giau", color: "DarkGreen" },
    { name: "Other", color: "green" },
  ]);
  const addTagHandler = (tag) => {
    setTags(tags.concat(tag));
  };
  const submitHandler = () => {
    if (isCreated) updateAddress(form);
    else createAddress(form);
  };
  return (
    <>
      <section className="address-form-home">
        <div className="header">
          <h2>Add new Adress</h2>
          <button onClick={() => submitHandler()}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div className="address-form-container">
          <div className="address-form-left-box">
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Receiver Name"
            />
            <input
              type="text"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              placeholder="Receiver Address"
            />
            <input
              type="text"
              value={form.phoneNumber}
              onChange={(e) =>
                setForm({ ...form, phoneNumber: e.target.value })
              }
              placeholder="Phone Number"
            />
          </div>
          <div className="address-form-right-box">
            {tags.map((tag) => {
              return (
                <p
                  key={tag}
                  style={{
                    height: "14px",
                    width: "fit-content",
                    marginLeft: "10px",
                    padding: "2px 5px",
                    fontSize: "14px",
                    color: `${tag.color}`,
                    border: `1px solid ${tag.color}`,
                    borderRadius: "4px",
                  }}
                >
                  {tag.name}
                </p>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default AddressForm;
