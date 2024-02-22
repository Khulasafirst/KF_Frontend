import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {

  return (
    <>
      <div className="col-md-3 left-block admin-left-block">
        <div className="d-flex align-items-start sidebar">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <ul className="navbar-nav  te">
              <li className="nav-item">
                <Link className="nav-link active-item" to="/">
                  {" "}
                  <img
                    className="logo"
                    src={require("../img/my-profile.png")}
                    alt="sgdg"
                  />{" "}
                  मेरा प्रोफाइल
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
                  अपना राज्य और शहर चुने
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {" "}
                  <img
                    className="logo"
                    src={require("../img/favorite.png")}
                    alt="sgdg"
                  />{" "}
                  मेरा पसंदिता विषय{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {" "}
                  <img
                    className="logo"
                    src={require("../img/my-plan.png")}
                    alt="sgdg"
                  />{" "}
                  मेरा प्लान
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {" "}
                  <img
                    className="logo"
                    src={require("../img/logout.png")}
                    alt="sgdg"
                  />{" "}
                  लॉगआउट
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
