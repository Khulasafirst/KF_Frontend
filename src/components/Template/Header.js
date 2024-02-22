import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchdata, setSearchdata] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    setSearchdata(value);
  };

  const Submit = async (e) => {
    e.preventDefault();

    if (!searchdata) {
      alert("Enter Search Keyword");
      return;
    } else {
      navigate(`/search/${searchdata}`);
    }

  };

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
            <form className="d-flex" onSubmit={Submit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="search"
                onChange={handleChange}
                value={searchdata}
              />

              <button className="top-search-btn" type="submit">
                <i className="search-icon fas fa-search"></i>
              </button>
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0 navbar-font">
              <li className="nav-item top-nav-item">
                <Link className="nav-link ps-0" to="/">
                  {" "}
                  <span><img className="logo" src={require("../img/nav-home-icon.png")} alt="sgdg" /></span>{" "}
                  <p className="m-0 pt-1">होम</p>
                </Link>
              </li>
              {/* <li className="nav-item  top-nav-item">
                <Link className="nav-link ps-0" to="/select-state">
                  {" "}
                  <span><img className="logo" src={require("../img/nav-city-icon.png")} alt="sgdg" /></span>{" "}
                  <p className="m-0 pt-1"> राज्य चुनें</p>
                </Link>
              </li> */}
              <li className="nav-item  top-nav-item">
                <Link className="nav-link ps-0" to="/Video/index">
                  {" "}
                  <span><img className="logo" src={require("../img/nav-video-icon.png")} alt="sgdg" /></span>{" "}
                  <p className="m-0 pt-1">वीडियो</p>
                </Link>
              </li>
              <li className="nav-item top-nav-item">
                {/* <Link className="nav-link ps-0" to="/e-paper"> */}
                <a
                  className="nav-link ps-0"
                  href="https://epaper.khulasafirst.com/"
                >
                  {" "}
                  <span><img className="logo" src={require("../img/nav-epaper-icon.png")} alt="sgdg" /></span>{" "}
                  <p className="m-0 pt-1">ई-पेपर</p>
                </a>
              </li>
              {/* <li className="nav-item top-nav-item">
                <Link className="nav-link ps-0" to="/login">
                  {" "}
                  <span><img className="profile-pic" src={require("../img/profile-icon.png")} alt="sgdg" /></span>{" "}
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
