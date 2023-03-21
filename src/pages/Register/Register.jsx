import React, { useSate } from "react";
import style from "./Register.scss";
import { Link } from "react-router-dom";

import login_img from "../../images/login_img.png";

function Login() {
  return (
    <>
      <div className="home">
        <div id="left-section">
          <img id="login-img" src={login_img} alt="imagefor login" />
        </div>
        <div id="register-section">
          <section id="register-container">
            <div>
              <h1>Create an account </h1>
              <h4>Hello there, let's start your journey with us</h4>
            </div>
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
                <input
                  type="passwrod"
                  className="form-control"
                  id="re-password"
                  placeholder="Re-enter passsword"
                />
                <div id="buttonP">
                  <switch>
                    <label>
                      <input id="switch-remember" type="checkbox" /> I accept
                      the Terms of Service and Privacy Policy
                    </label>
                  </switch>
                </div>
                <div id="register-btn">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <p id="line-break"></p>
                <div id="login">
                  <p>Already have an account?</p>
                  <Link to="/login">Login now</Link>
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
