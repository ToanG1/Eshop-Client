import React from "react";
import style from "./Nav.scss";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <>
      <section className="Nav-home">
        <div>
          <img id="logo" src={logo} alt="logo" />
        </div>
        <div id="navigation">
          <Link className="nav-link" to="">
            Home
          </Link>
          <Link className="nav-link" to="">
            Explore
          </Link>
          <Link className="nav-link" to="">
            Blogs
          </Link>
          <Link className="nav-link" to="">
            About
          </Link>
          <Link className="nav-link" to="">
            Contact
          </Link>
        </div>
        <div id="user">
          <FontAwesomeIcon
            icon={faUser}
            style={{ paddingRight: "10px" }}
            size="lg"
          />
          <Link to="/login">Login</Link>
          <p>/</p>
          <Link to="/register">Register</Link>
        </div>
        <div id="search">
          <Link>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </Link>
        </div>
        <div id="cart">
          <Link>
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
          </Link>
          <p id="cart-count">0</p>
        </div>
        <div id="favo">
          <Link>
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </Link>
          <p id="favo-items-count">0</p>
        </div>
      </section>
    </>
  );
}

export default Nav;
