import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <>
      <div className="footer-main-container">
        <div className="container">
          <div className="footer-section">
            <div className="row align-center py-3">
              <div className="col-md-2 footer-left-block">
                <Link className="footer-brand-logo" to="/">
                  <img src={require("../img/footer-logo.png")} alt="" />
                </Link>
              </div>
              <div className="col-md-6 footer-center-block">
                <ul className="d-lg-flex m-0 d-app">
                  <li className="text-center">
                    <Link className="footer-text me-2" to="/">
                      Download our app on
                    </Link>
                  </li>
                  <div>
                    <ul className="d-flex justify-content-center m-0 p-0">
                      <li className="">
                        <Link className="" to="/">
                          {" "}
                          <img
                            className="app-store-img"
                            src={require("../img/googleplay.png")}
                            alt="sgdg"
                          />
                        </Link>
                      </li>
                      <li className="">
                        <Link className="" to="/">
                          {" "}
                          <img
                            className="app-store-img"
                            src={require("../img/appstore.png")}
                            alt="sgdg"
                          />
                        </Link>
                      </li>

                    </ul>
                  </div>

                </ul>
              </div>
              <div className="col-md-4 footer-right-block">
                <ul className="d-lg-flex m-0 footer-icon">
                  <li className="text-center">
                    <Link className="footer-text" to="/">
                      Follow us on
                    </Link>
                  </li>
                  <li>
                    <ul className="d-flex m-0 p-0 justify-content-center footer-icon">
                      <li className="">
                        <a className="" href="https://www.facebook.com/khulasafirst/" target="blank">
                          {" "}
                          <img
                            className="footer-social-icon"
                            src={require("../img/fb-icon.png")}
                            alt="sgdg"
                          />
                        </a>
                      </li>
                      <li className="">
                        <a className="" href="https://twitter.com/khulasafirst" target="blank">
                          {" "}
                          <img
                            className="footer-social-icon"
                            src={require("../img/twitter-icon.png")}
                            alt="sgdg"
                          />
                        </a>
                      </li>
                      <li className="">
                        <a className="" href="https://www.instagram.com/khulasafirst/?hl=en" target="blank">
                          {" "}
                          <img
                            className="footer-social-icon"
                            src={require("../img/insta-icon.png")}
                            alt="sgdg"
                          />
                        </a>
                      </li>
                      <li className="">
                        <a className="" href="https://www.youtube.com/c/khulasaFirst" target="blank">
                          {" "}
                          <img
                            className="footer-social-icon"
                            src={require("../img/youtube-icon.png")}
                            alt="sgdg"
                          />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row bottom-footer">
          <div className="col-md-6 footer-links">
            <h6>
              Copyright © 2022 Khulasa First Pvt. Ltd., All Rights Reserved  || developed by<span className="text-primary"> workholics</span>
            </h6>
          </div>
          <div className="col-md-6 footer-links text-end">
            <h6>
              <Link className="footer-text" to="/advertise-with-us"> Advertise with Us</Link> | <span> <Link className="footer-text" to="/terms-and-conditions">Terms of Use</Link></span> |<Link className="footer-text" to="/contact-us"> Contact Us</Link> |
              <Link className="footer-text" to="/cookie-policy"> Cookie Policy</Link> |  <Link className="footer-text" to="/privacy-policy">Privacy Policy</Link>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
