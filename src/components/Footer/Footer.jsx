import React from "react";
import style from "./Footer.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <>
      <section className="footer-home">
        <div className="left-container">
          <div className="cate-column">
            <h1>Categories</h1>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div key={item} className="cate-item">
                <Link className="link">
                  <span>Cate name</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="help-column">
            <h1>Help</h1>
            <div>
              <Link className="link">
                <span>Help</span>
              </Link>
            </div>
            <div>
              <Link className="link">
                <span>Help</span>
              </Link>
            </div>
            <div>
              <Link className="link">
                <span>Help</span>
              </Link>
            </div>
          </div>
          <div className="more-column">
            <h1>More</h1>
            <div>
              <Link className="link">
                <span>More</span>
              </Link>
            </div>
            <div>
              <Link className="link">
                <span>More</span>
              </Link>
            </div>
            <div>
              <Link className="link">
                <span>More</span>
              </Link>
            </div>
            <div>
              <Link className="link">
                <span>More</span>
              </Link>
            </div>
            <div>
              <Link className="link">
                <span>More</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="register-promo">
            <p>Sign up for first ordder 10% off</p>
            <div>
              <input type={Text} placeholder="Your Email Address" />
              <button>Register</button>
            </div>
          </div>
          <div className="social-media-logo">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGoogle} />
          </div>
          <div id="com">@2023 Sheppo, Inc. All Rights Reserved</div>
        </div>
      </section>
    </>
  );
}
export default Footer;
