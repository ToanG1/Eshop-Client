import React, { useSate } from "react";
import style from "./Login.scss";
import { Link } from "react-router-dom";
import login_img from "../../images/login_img.png";
import logo from "../../images/logo.png";

function Login() {
  return (
    <>
      <div className="home">
        <div id="left-section">
          <img id="logo" src={logo} alt="logo" />
          <img id="login-img" src={login_img} alt="imagefor login" />
        </div>
        <div id="login-section">
          <section id="login-container">
            <h1>Nice to see you again! </h1>
            <form>
              <div className="form-group">
                <input
                  type={Text}
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <input
                  type="passwrod"
                  className="form-control"
                  id="password"
                  placeholder="Enter passsword"
                />
                <div id="buttonP">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <p>Remember me</p>
                  <a>Forgot password?</a>
                </div>
                <div id="login-btn">
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </div>
                <p id="line-break"></p>
                <div id="register">
                  <p>Dont have an account?</p>
                  <Link to="/register">Get started</Link>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Login;
