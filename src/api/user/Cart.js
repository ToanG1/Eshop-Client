import axios from "axios";

const baseUrl = "/api/order/user";

const user = JSON.parse(localStorage.getItem("User_Info"));

const findCart = async () => {
  return axios
    .get(`${baseUrl}/cart/${user.uid}?currentPage=0&size=10`)
    .catch((err) => console.log(err));
};

const addToCart = async (prodId, quantity = 1) => {
  const req = {
    uid: user.uid,
    productId: prodId,
    quantity: quantity,
  };
  return axios
    .post(`${baseUrl}/cartItem`, req)
    .catch((err) => console.log(err));
};

const deleteCartItem = async (prodId) => {
  return axios
    .delete(`${baseUrl}/cartItem/${prodId}`)
    .catch((err) => console.log(err));
};
export { findCart, addToCart, deleteCartItem };
