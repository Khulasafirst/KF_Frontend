import React from "react";
import Header from "../Template/Header";
import Footer from "../Template/Footer";

const SelectState = () => {

  return (
    <>
      <Header />

      <div className="container main-container  select-state">
        <div className="row select-state-container">
          <div className="col-md-6 select-state-heading">
            <h4 className="h-4">राज्य चुने</h4>
          </div>
          <div className="col-md-6 select-state-heading">
            <h5 className="h-5">स्कीप</h5>
          </div>
          <div className="col-md-12 card select-state-card text-center">
            <div className="col-md-2">
              <div className="box-border">
                <div className="state">
                  <img src={require("../img/state-img.png")} alt="" />
                </div>
                <img
                  src={require("../img/add-city-icon.png")}
                  alt=""
                  className="add-city-icon"
                />
              </div>
              <div className="city-name">
                <h3 className="h-3">मध्य प्रदेश</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SelectState;
