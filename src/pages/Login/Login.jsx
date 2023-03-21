import React, { useSate } from "react";
import style from "./Login.scss";
import { Link } from "react-router-dom";
import login_img from "../../images/login_img.png";

function Login() {
  return (
    <>
      <div className="home">
        <div id="left-section">
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
                  <switch>
                    <label>
                      <input id="switch-remember" type="checkbox" /> Remember me
                    </label>
                  </switch>
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
