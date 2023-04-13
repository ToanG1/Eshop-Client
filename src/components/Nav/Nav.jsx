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

import { getUser, login, logout } from "../../api/auth";

function Nav() {
  const jwt = localStorage.getItem("USER_INFO");
  console.log(jwt);
  return (
    <>
      <section className="Navigation-home">
        <div>
          <img id="logo" src={logo} alt="logo" />
        </div>
        <div id="navigation">
          <Link className="nav-link" id="nav-home" to="/">
            Home
          </Link>
          <Link className="nav-link" id="nav-explore" to="/explore">
            Explore
          </Link>
          <Link className="nav-link" id="nav-blogs" to="">
            Blogs
          </Link>
          <Link className="nav-link" id="nav-about" to="">
            About
          </Link>
          <Link className="nav-link" id="nav-contact" to="">
            Contact
          </Link>
        </div>
        <div id="user">
          <FontAwesomeIcon
            icon={faUser}
            style={{ paddingRight: "10px" }}
            size="lg"
          />
          <button onClick={login}>Login</button>
          <p>/</p>
          <button onClick={logout}>Register</button>
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
