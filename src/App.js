import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Products from "./pages/Products/Products";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Checkout from "./pages/Checkout/Checkout";
import Shop from "./pages/Shop/Shop";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"register"} element={<Register />} />
          <Route path={"explore"} element={<Explore />} />
          <Route path={"/:category"} element={<Products />} />
          <Route path={"explore/:id"} element={<ProductInfo />} />
          <Route path={"cart"} element={<Checkout />} />
          <Route path={"shop/:id"} element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
