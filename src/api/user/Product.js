import axios from "axios";

const baseUrl = "/api/product/user/product";

let req = {
  name: null, //string
  productId: null, //string
  categoryId: null, //string
  storeId: null, //string
  listStyleId: null, //list of srting
  isNewest: null, //bolean
  isBestRating: null, //bolean
  isBestSelling: null, //bolean
  isPriceIncre: null, //bolean
  currentPage: 0,
  size: 10,
};

const listProduct = async () => {
  return axios.post(`${baseUrl}`, req).catch((err) => console.log(err));
};

const countProduct = async () => {
  return axios.post(`${baseUrl}/count`, req).catch((err) => console.log(err));
};

const findProdById = async (id) => {
  return axios.get(`${baseUrl}/${id}`).catch((err) => console.log(err));
};

export { listProduct, countProduct, findProdById };
