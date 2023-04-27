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

const deleteCartItem = async (id) => {
  return axios
    .delete(`${baseUrl}/cartItem/${id}?uid=${user.uid}`)
    .catch((err) => console.log(err));
};

const deleteCartBox = async (id) => {
  return axios
    .delete(`${baseUrl}/cartBox/${id}?uid=${user.uid}`)
    .catch((err) => console.log(err));
};

const updateQuantity = async (id, quantity) => {
  const req = {
    uid: user.uid,
    cartItemId: id,
    quantity: quantity,
  };
  return axios.put(`${baseUrl}/cartItem`, req).catch((err) => console.log(err));
};
export { findCart, addToCart, deleteCartItem, deleteCartBox, updateQuantity };
