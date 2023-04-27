import axios from "axios";

const baseUrl = "/api/user/user/address";

const user = JSON.parse(localStorage.getItem("User_Info"));
const findAllAdress = () => {
  const req = {
    uid: user.uid,
    currentpage: 0,
    size: 10,
  };
  return axios.post(`${baseUrl}`, req);
};

const createAddress = (form) => {
  const req = {
    uid: user.uid,
    name: form.name,
    address: form.address,
    phoneNumber: form.phoneNumber,
  };
  return axios.post(`${baseUrl}/create`, req).then((err) => console.log(err));
};
const updateAddress = (form) => {
  const req = {
    uid: user.uid,
    id: form.id,
    name: form.name,
    address: form.address,
    phoneNumber: form.phoneNumber,
  };
  return axios.put(`${baseUrl}`, req).then((err) => console.log(err));
};

const deleteAddress = (id) => {
  return axios
    .delete(`${baseUrl}/${user.uid}?id=${id}`)
    .then((err) => console.log(err));
};

export { findAllAdress, createAddress, updateAddress, deleteAddress };
