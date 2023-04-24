import axios from "axios";

const baseUrl = "/api/user/user";
const user = JSON.parse(localStorage.getItem("User_Info"));

const findFollowProduct = async () => {
  return axios
    .get(`${baseUrl}/followProduct/${user.id}?currentPage=0&size=10`)
    .catch((err) => console.log(err));
};
const toggleFollowProduct = async (prodId) => {
  const req = {
    id: user.id,
    productId: prodId,
  };
  return axios
    .post(`${baseUrl}/followProduct`, req)
    .catch((err) => console.log(err));
};

export { findFollowProduct, toggleFollowProduct };
