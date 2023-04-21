import axios from "axios";
const loginUrl = "/api/user/auth/login";
const registerUrl = "api/user/user/user";

const req = {
  username: "",
  password: "",
};

export const login = async (req) => {
  return axios
    .post(`${loginUrl}`, req)
    .then((res) => {
      if (res.data.res == "Oke") {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem(
          "User_Info",
          JSON.stringify(res.data.userResponse)
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const register = (req) => {
  return axios.post(`${registerUrl}`, req).catch((err) => console.log(err));
};
