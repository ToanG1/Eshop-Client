import axios from "axios";

const baseUrl = "/api/order/user/order";
const user = JSON.parse(localStorage.getItem("User_Info"));

const placeOrder = async (form) => {
  const req = {
    uid: user.uid,
    addressId: form.address.id,
    note: form.note,
    shippingId: 1, // 1,2,3
    payment: "COD",
    productVoucher: form.productVoucher,
    shippingVoucher: form.shippingVoucher,
    cartItemIdList: form.cartItemIdList,
  };
  return axios.post(baseUrl, req).catch((err) => console.log(err));
};
export { placeOrder };
