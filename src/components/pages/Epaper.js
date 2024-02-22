import React from "react";
import Header from "../Template/Header";
import Footer from "../Template/Footer";
import { Link } from "react-router-dom";
// import { Seo } from "../Template/Seo";
const Epaper = () => {
  // const URL = process.env.REACT_APP_URL;

  return (
    <>
      <Header />
      <div className="row epaper-top-ad">
        <div className="col-md-12 epaper-heading">
          <h2>
            खुलासा फर्स्ट<span className="heading-red"> ई-पेपर</span> सब्सक्राइब
            करें और प्रीमियम एक्सपीरियंस पाएं
          </h2>
          <Link to="#">
            <h4 className="premium-btn">
              <img src={require("../img/premium-icon.png")} alt="" />
              <span>प्रीमियम</span>
            </h4>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 epaper-list-heading">
            <h4 className="h-4">
              <span className="heading-red">ख़ुलासा फर्स्ट ई-पेपर</span>- इंदौर
              न्यूज़
            </h4>
          </div>
          <div className="col-md-3 epaper-list">
            <Link to="/view">
              <img
                src={require("../img/khulasa-newspaper.png")}
                alt=""
                className="epaper-img"
              />
            </Link>
            <div className="epaper-title">
              <h5 className="epaper-date">26 Jul 2023 </h5>
              <h5 className="epaper-city">इंदौर</h5>
            </div>
          </div>
          <div className="col-md-3 epaper-list">
            <Link to="/view">
              <img
                src={require("../img/khulasa-newspaper.png")}
                alt=""
                className="epaper-img"
              />
            </Link>
            <div className="epaper-title">
              <h5 className="epaper-date">26 Jul 2023 </h5>
              <h5 className="epaper-city">इंदौर</h5>
            </div>
          </div>
          <div className="col-md-3 epaper-list">
            <Link to="/view">
              <img
                src={require("../img/khulasa-newspaper.png")}
                alt=""
                className="epaper-img"
              />
            </Link>
            <div className="epaper-title">
              <h5 className="epaper-date">26 Jul 2023 </h5>
              <h5 className="epaper-city">इंदौर</h5>
            </div>
          </div>
          <div className="col-md-3 epaper-list">
            <Link to="/view">
              <img
                src={require("../img/khulasa-newspaper.png")}
                alt=""
                className="epaper-img"
              />
            </Link>
            <div className="epaper-title">
              <h5 className="epaper-date">26 Jul 2023 </h5>
              <h5 className="epaper-city">इंदौर</h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Epaper;
