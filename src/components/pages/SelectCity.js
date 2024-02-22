import React from "react";
import Header from "../Template/Header";
import Footer from "../Template/Footer";

const SelectCity = () => {

  return (
    <>
      <Header />

      <div className="container select-city h-100">
        <div className="row select-state-container">
          <div className="col-md-6 select-state-heading">
            <h4 className="h-4">शहर चुने</h4>
          </div>
          <div className="col-md-6 select-state-heading">
            <h5 className="h-5">स्कीप</h5>
          </div>
          <div className="col-md-12 card select-state-card">
            <div className="search-city">
              <input
                type="search"
                className="search-box"
                placeholder="शहर खोजे"
              />
              <img
                src={require("../img/search-icon.png")}
                alt=""
                className="search-icon"
              />
            </div>
            <div className="col-md-12 add-city">
              <button className="btn add-city-btn">
                इंदौर{" "}
                <img
                  src={require("../img/add-btn.png")}
                  alt=""
                  className="plus-icon"
                />
              </button>
              <button className="btn add-city-btn">
                भोपाल{" "}
                <img
                  src={require("../img/add-btn.png")}
                  alt=""
                  className="plus-icon"
                />
              </button>
              <button className="btn add-city-btn">
                जबलपुर{" "}
                <img
                  src={require("../img/add-btn.png")}
                  alt=""
                  className="plus-icon"
                />
              </button>
              <button className="btn add-city-btn">
                खंडवा{" "}
                <img
                  src={require("../img/add-btn.png")}
                  alt=""
                  className="plus-icon"
                />
              </button>
              <button className="btn add-city-btn">
                सिंगरौली{" "}
                <img
                  src={require("../img/add-btn.png")}
                  alt=""
                  className="plus-icon"
                />
              </button>
              <button className="btn add-city-btn">
                रतलाम{" "}
                <img
                  src={require("../img/add-btn.png")}
                  alt=""
                  className="plus-icon"
                />
              </button>
              <button className="btn add-city-btn">
                जबलपुर{" "}
                <img
                  src={require("../img/add-btn.png")}
                  alt=""
                  className="plus-icon"
                />
              </button>
              <button className="btn add-city-btn">
                इंदौर{" "}
                <img
                  src={require("../img/add-btn.png")}
                  alt=""
                  className="plus-icon"
                />
              </button>
            </div>
          </div>
          <button className="col-md-12 btn next-btn text-center">सबमिट</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SelectCity;
