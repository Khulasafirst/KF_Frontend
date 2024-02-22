import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Sidebar = () => {

  const [isloading, setIsloading] = useState(true);
  const [category, setcategory] = useState();
  const URL = process.env.REACT_APP_URL;

  const getcategory = () => {
    fetch(`${URL}/admin/getFrontendCategory`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setcategory(data);
        setIsloading(false);
      });
  };

  useEffect(() => {
    getcategory(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <div className="col-md-2 left-block">
        <div className="d-flex align-items-start sidebar">
          <div
            className="nav flex-column nav-pills me-3 tab-me-0"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical" >
            <ul className="navbar-nav  te">
              {isloading ? (<>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>) : (
                <>
                  {category?.data?.map((val, index) => {
                    return (
                      <li key={index} className="nav-item">
                        <Link
                          className="nav-link active-item"
                          to={`/Category/index/${val?.slug}`}
                          state={{ id: val?._id }}
                        >

                          <img
                            className="sidebar-logo"
                            src={val?.imageurl}
                            alt="img"
                          />
                          <div className="sidebar-h4">
                            {val?.name}
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="sidebar-center-block d-none-mobile">
          <div className="download-app-card my-4">
            <ul className="d-app">
              <li className="mb-3">
                <Link className="footer-text" to="/">
                  Download App from
                </Link>
              </li>
              <div className="p-2">
                <ul className="p-0">
                  <li className="mb-3">
                    <Link className="" to="/">
                      {" "}
                      <img
                        className="app-store-img w-100"
                        src={require("../img/googleplay.png")}
                        alt="sgdg"
                      />
                    </Link>
                  </li>
                  <li className="">
                    <Link className="" to="/">
                      {" "}
                      <img
                        className="app-store-img w-100"
                        src={require("../img/appstore.png")}
                        alt="sgdg"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
          <div className="social-icon-card">
            <h5 className="text-center">Follow us on</h5>
            <div className="social-icons">
              <ul>
                <li><a href="https://www.facebook.com/khulasafirst/" target="blank"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/khulasafirst" target="blank"><i className="fa-brands fa-twitter-square"></i></a></li>
                <li><a href="https://www.instagram.com/khulasafirst/?hl=en" target="blank"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://in.linkedin.com/in/khulasafirst" target="blank"><i className="fa-brands fa-linkedin"></i></a></li>
              </ul>
            </div>

          </div>
          <div className="sidebar-bottom-ad my-4">
            <div className="sidebar-btm-ad-img">
              {/* <img src={require("../img/sidebar-bottom-ad.png")} alt="" className="w-100"/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
