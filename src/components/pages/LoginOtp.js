import React from "react";
import Header from "../Template/Header";
import Footer from "../Template/Footer";
import { Link } from "react-router-dom";

const LoginOtp = () => {

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
                हमने अभी आपको आपके मोबाइल नंबर के माध्यम से 4 अंकों का कोड भेजा
                है
              </h4>
            </div>
            <div className="col-md-12">
              <form action="" className="login-form">
                <div
                  id="otp"
                  className="inputs login-otp d-flex flex-row justify-content-center mt-2"
                >
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="first"
                    maxlength="1"
                  />
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="second"
                    maxlength="1"
                  />
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="third"
                    maxlength="1"
                  />
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="fourth"
                    maxlength="1"
                  />
                </div>
                <button type="submit" className="btn login-btn ">
                  पुष्टि करे
                </button>
                <h5 className="resend-code">
                  कोड प्राप्त नहीं हुआ?{" "}
                  <Link to="#">
                    <span className="heading-red">पुन: कोड भेजे</span>
                  </Link>
                </h5>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LoginOtp;
