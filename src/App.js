import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"register"} element={<Register />} />
          <Route path={"explore"} element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
