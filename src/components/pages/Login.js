import React from "react";
import Header from "../Template/Header";
import Footer from "../Template/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  
  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-md-5 card login-card text-center">
            <div className="card-logo">
              <Link to="#">
                <img src={require("../img/khulasa-logo.png")} alt="" />
              </Link>
            </div>
            <div className="login-heading px-3">
              <h4 className="h-4">
                कृपया लॉगइन करने के लिए अपना मोबाइल नंबर जोड़े
              </h4>
            </div>
            <div className="col-md-12">
              <form action="" className="login-form">
                <div className="form-group login-detail">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="कृपया अपना नाम दर्ज करे"
                  />
                </div>
                <div className="form-group login-detail">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="कृपया  मोबाइल नंबर जोड़े"
                  />
                </div>
                <button type="submit" className="btn login-btn ">
                  {" "}
                  प्रोफाइल अपडेट करे
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
