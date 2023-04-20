import axios from "axios";
export const login = () => {
  return axios
    .post("/api/user/auth/login", {
      username: "toandeptrai",
      password: "12345",
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
