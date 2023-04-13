import axios from "axios";
import { getUser } from "../auth";
const contextInstance = axios.create({
  baseURL: `http://localhost:8080/api`,
});

contextInstance.interceptors.request.use((config) => {
  //GET TOKEN FROM KEYCLOAK
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN_JWT");

  if (ACCESS_TOKEN != null) {
    //null, undefined, '', ...
    config.headers["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
  }

  return config;
});

export { contextInstance };
