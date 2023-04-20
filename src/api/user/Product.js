import axios from "axios";
const req = {
  name: "iphone",
};
const listProduct = async () => {
  // return contextInstance
  //   .post("/product/user/product", req)
  //   .catch((err) => {
  //     console.log(err);
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   });
  return axios
    .post("/api/product/user/product", req)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export { listProduct };
