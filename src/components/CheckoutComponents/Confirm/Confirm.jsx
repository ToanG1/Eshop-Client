import React, { useEffect, useState } from "react";
import style from "./Confirm.scss";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import ConfirmedImg from "../../../images/confirmed-img.png";
import { placeOrder } from "../../../api/user/Order";
function Confirm({ form }) {
  const [res, setRes] = useState({});
  useEffect(() => {
    placeOrder(form).then((res) => {
      setRes(res.data);
    });
  }, []);
  return (
    <>
      <section className="confirm-home">
        <div className="confirm-container">
          {res.res === null ? (
            <>
              <h1>
                Confirmed <FontAwesomeIcon icon={faCheck} />
              </h1>
              <div>
                <h2>Thank you for your order!</h2>
                <h2>
                  Order Id:{" "}
                  {res.orders.map((order) => {
                    return order.id + ", ";
                  })}
                </h2>
              </div>

              <img src={ConfirmedImg} alt="" />
              <div>
                <h3>Estimated Delivery</h3>
                <h3>Saturday, 8th April, 2023</h3>
              </div>

              <button className="place-order-btn">
                <Link to="/explore">
                  Continue Shopping
                  <i>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </i>
                </Link>
              </button>
            </>
          ) : (
            <>
              <div>{res.res}</div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
export default Confirm;
