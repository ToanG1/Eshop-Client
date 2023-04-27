import axios from "axios";

const baseURL = "/api/order/user/shipping";

const findAllShipping = () => {
  return axios.get(baseURL).catch((err) => {
    console.log(err);
  });
};

export { findAllShipping };
