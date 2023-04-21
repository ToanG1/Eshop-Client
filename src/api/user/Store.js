import axios from "axios";

const baseUrl = "/api/user/user/store";

const findStoreById = async (id) => {
  return axios.get(`${baseUrl}/${id}`).catch((err) => console.log(err));
};

export { findStoreById };
