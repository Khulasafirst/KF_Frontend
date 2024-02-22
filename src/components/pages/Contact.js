import React, { useState } from "react";
import Header from "../Template/Header";
import Footer from "../Template/Footer";
import axios from "axios";
const Contact = () => {
  const URL = process.env.REACT_APP_URL;
  const [fordata, setFordata] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const Submit = async (e) => {
    e.preventDefault();
    const { name, email, mobile, message } = fordata;
   
    if (!name || !email || !mobile || !message) {
      alert("Please Fill All Details..");
      return;
    }
    const url = `${URL}/users/feedbacksend`;
    axios
      .post(url, {
        name: name,
       email: email,
        mobile: mobile,
        message: message,
      })
      .then((result) => {
        setFordata({name: "",
        email: "",
        mobile: "",
        message: ""})
        alert("Thank for contact us Our team will reach you soon.");
      })
      .catch((error) => {
      console.log(error);
      });
   
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFordata({ ...fordata, [name]: value });
  };
  return (
    <>
      <Header />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <section class="contact_us">
              <div class="row">
                <div class="col-md-12">
                  <div class="contact_inner">
                    <div class="row">
                      <div class="col-md-10">
                        <div class="contact_form_inner">
                          <div class="contact_field">
                            <h3>Contact Us</h3>
                            <p>
                              Feel Free to contact us any time. We will get back
                              to you as soon as we can!.
                            </p>
                            <form>
                              <input
                                type="text"
                                name="name"
                                value={fordata.name}
                                onChange={handleChange}
                                class="form-control form-group"
                                placeholder="Name"
                              />
                              <input
                                type="email"
                                name="email"
                                value={fordata.email}
                                onChange={handleChange}
                                class="form-control form-group"
                                placeholder="Email"
                              />
                              <input
                                type="number"
                                name="mobile"
                                value={fordata.mobile}
                                onChange={handleChange}
                                class="form-control form-group"
                                placeholder="Mobile No."
                              />
                              <textarea
                                name="message"
                                value={fordata.message}
                                onChange={handleChange}
                                class="form-control form-group"
                                placeholder="Message"
                                rows="4"
                              ></textarea>
                              <button
                                class="contact_form_submit"
                                onClick={Submit}
                              >
                                Send
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2 d-none-mobile">
                        <div class="right_conatct_social_icon d-flex align-items-end">
                          <div class="socil_item_inner d-flex">
                            <li>
                              <a href="https://www.facebook.com/khulasafirst/" target="blank">
                                <i class="fab fa-facebook-square"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/khulasafirst/?hl=en">
                                <i class="fab fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/khulasafirst">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="contact_info_sec">
                      <h4>Contact Info</h4>
                      <div class="d-flex info_single align-items-center">
                        <i class="fas fa-headset"></i>
                        <span>+91 8818956789</span>
                      </div>
                      <div class="d-flex info_single align-items-center">
                        <i class="fas fa-envelope-open-text"></i>
                        <span>khulasafirst@gmail.com</span>
                      </div>
                      <div class="d-flex info_single align-items-center">
                        <i class="fas fa-map-marked-alt"></i>
                        <span>
                        Office Address : DO-3, Shopping Complex, AB Rd, opposite Dainaik Bhaskar Press, Indore, Madhya Pradesh 452011
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
