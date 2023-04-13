import { contextInstance } from "../axios/index";

const listProduct = async () => {
  return contextInstance.get(`product/user/product`);
};

export { listProduct };
