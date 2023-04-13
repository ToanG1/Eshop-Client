import { User, UserManager } from "oidc-client";

const settings = {
  authority: "http://localhost:8181/realms/EShop-microservices-Realm/",
  client_id: "eshop-react-client",
  redirect_uri: "http://localhost:3000/signin-callback.html",
  response_type: "code",
  scope: "openid profile message.read",
};

const userManager = new UserManager(settings);

export const getUser = () => {
  return userManager.getUser();
};

export const login = () => {
  return userManager.signinRedirect();
};

export const logout = () => {
  return userManager.signoutRedirect();
};
