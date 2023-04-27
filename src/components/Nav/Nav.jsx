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
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import Favorite from "../FavComponent/Favorite/Favorite";
function Nav() {
  const user = JSON.parse(localStorage.getItem("User_Info"));
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
          {user ? (
            <p className="username">{user.name}</p>
          ) : (
            <>
              <Link to={"/login"}>Login</Link>
              <p>/</p>
              <Link to={"/register"}>Register</Link>
            </>
          )}
        </div>
        <div id="search">
          <Link>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </Link>
        </div>
        <div id="cart">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
          </Link>
          <p id="cart-count">0</p>
        </div>
        <div id="favo">
          <Popup
            trigger={<FontAwesomeIcon icon={faHeart} size="lg" />}
            position={"bottom right"}
          >
            {(close) => <Favorite />}
          </Popup>
          <p id="favo-items-count">0</p>
        </div>
      </section>
    </>
  );
}

export default Nav;
