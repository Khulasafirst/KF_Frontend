import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light justify-content-center">
        <ul className="navbar-nav align">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {" "}
              <img
                className="logo"
                src={require("../img/building.png")}
                alt="sgdg"
              />{" "}
              मध्यप्रदेश
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {" "}
              <img
                className="logo"
                src={require("../img/building.png")}
                alt="sgdg"
              />{" "}
              इंदौर
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {" "}
              <img
                className="logo"
                src={require("../img/building.png")}
                alt="sgdg"
              />{" "}
              भोपाल
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {" "}
              <img
                className="logo"
                src={require("../img/building.png")}
                alt="sgdg"
              />{" "}
              जबलपुर
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {" "}
              <img
                className="logo"
                src={require("../img/mahakal.png")}
                alt="sgdg"
              />{" "}
              महाकाल सेना
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {" "}
              <img
                className="logo"
                src={require("../img/building.png")}
                alt="sgdg"
              />{" "}
              देश
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {" "}
              <img
                className="logo"
                src={require("../img/videsh.png")}
                alt="sgdg"
              />{" "}
              विदेश
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {" "}
              <img
                className="logo"
                src={require("../img/khel.png")}
                alt="sgdg"
              />{" "}
              खेल
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {" "}
              <img
                className="logo"
                src={require("../img/vyapar.png")}
                alt="sgdg"
              />{" "}
              व्यापार
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {" "}
              <img
                className="logo"
                src={require("../img/manoranjan.png")}
                alt="sgdg"
              />{" "}
              मनोरंजन
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {" "}
              <img
                className="logo"
                src={require("../img/technology.png")}
                alt="sgdg"
              />{" "}
              टेक्नोलॉजी
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {" "}
              <img
                className="logo"
                src={require("../img/health.png")}
                alt="sgdg"
              />{" "}
              स्वास्थ्य
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {" "}
              <img
                className="logo"
                src={require("../img/crime.png")}
                alt="sgdg"
              />{" "}
              क्राइम
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {" "}
              <img
                className="logo"
                src={require("../img/video.png")}
                alt="sgdg"
              />{" "}
              विडियो
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
