import axios from "axios";

const baseUrl = "/api/order/user/voucher";

const findAllVoucher = () => {
  return axios.get(baseUrl).catch((err) => console.log(err));
};

export { findAllVoucher };
