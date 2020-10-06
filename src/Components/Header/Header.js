import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <nav className="header__nav">
        <Link to="/" className="header__logo">
          <img src={require("../../images/logos/mainlogo.png")} alt="" />
        </Link>
        <div className="header__links">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/donation">
              <li>Donation</li>
            </Link>
            <Link to="/events">
              <li>Events</li>
            </Link>
            <Link to="/blogs">
              <li>Blogs</li>
            </Link>

            <li>
              <Link to="/register">
                <button className="btn btn-primary btn-lg">Register</button>
              </Link>
            </li>
            <li>
              <Link to="/admin">
                <button className="btn btn-dark btn-lg">Admin</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
