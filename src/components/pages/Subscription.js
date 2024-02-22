import React from "react";
import Header from "../Template/Header";
import Footer from "../Template/Footer";
import { Link } from "react-router-dom";

const Subscription = () => {

  return (
    <>
      <Header />
      <div className="row epaper-top-ad">
        <div className="col-md-12 epaper-heading">
          <h2>
            खुलासा फर्स्ट<span className="heading-red"> ई-पेपर</span> सब्सक्राइब
            करें और प्रीमियम एक्सपीरियंस पाएं
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-9 card">
            <div className="row app-description-box">
              <div className="col-md-4 app-description align">
                <ul>
                  <li>सभी संस्करण पढ़े</li>
                  <li>सीमित विज्ञापन</li>
                  <li>बुकमार्क करें</li>
                  <li>मोबाहल एप्प पर पढ़ें</li>
                </ul>
              </div>
              <div className="col-md-8 app-epaper-imgs">
                <img
                  className="col-md-5"
                  src={require("../img/khulasa-newspaper.png")}
                  alt=""
                />
                <img
                  className="col-md-4 v-align-bottom"
                  src={require("../img/khulasa-newspaper.png")}
                  alt=""
                />
                <img
                  className="col-md-3 v-align-bottom"
                  src={require("../img/khulasa-newspaper.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="row px-2">
              <div className="col-md-4 subscription-plan align">
                <div className="col-md-7 plan-title">
                  <h4 className="plan-validity text-center">एक दिन प्लान</h4>
                  <h3 className="plan-rate text-center">₹ 1</h3>
                </div>
                <div className="col-md-5">
                  <Link to="#">
                    <button className="buy-btn">Buy Now</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 subscription-plan align">
                <div className="col-md-7 plan-title">
                  <h4 className="plan-validity text-center">मासिक प्लान</h4>
                  <h3 className="plan-rate text-center">₹ 20</h3>
                </div>
                <div className="col-md-5">
                  <Link to="#">
                    <button className="buy-btn">Buy Now</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 subscription-plan align">
                <div className="col-md-7 plan-title">
                  <h4 className="plan-validity text-center">वार्षिक प्लान</h4>
                  <h3 className="plan-rate text-center">₹ 99</h3>
                </div>
                <div className="col-md-5">
                  <Link to="#">
                    <button className="buy-btn">Buy Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Subscription;
