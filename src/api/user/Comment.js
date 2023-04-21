import axios from "axios";

const baseUrl = "/api/product/user/comment";

let req = {
  username: "",
  content: "",
  rating: 0,
};

const comment = (comment) => {
  req = comment;
  return axios.post(`${baseUrl}`, req).catch((err) => console.log(err));
};

export { comment };
