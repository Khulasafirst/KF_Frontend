import React from "react";
import { Link } from "react-router-dom";

const AdminHeader = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={require("../img/khulasa-logo.png")} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="top-search-btn" type="submit">
                <i className="search-icon fas fa-search"></i>
              </button>
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0 navbar-font">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {" "}
                  <img
                    className="logo"
                    src={require("../img/calender-icon.png")}
                    alt="sgdg"
                  />{" "}
                  तारीख बदले{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {" "}
                  <img
                    className="logo"
                    src={require("../img/city.png")}
                    alt="sgdg"
                  />{" "}
                  शहर बदले{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {" "}
                  <img
                    className="profile-pic"
                    src={require("../img/profile-icon.png")}
                    alt="sgdg"
                  />{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminHeader;
