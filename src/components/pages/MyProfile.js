import React from "react";
import Footer from "../Template/Footer";
import AdminSidebar from "../Template/AdminSidebar";
import AdminHeader from "../Template/AdminHeader";

const MyProfile = () => {

  return (
    <>
      <AdminHeader />

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

          <AdminSidebar />

          <div className="col-md-6 admin-center-block">
            <form action="" className="profile-form">
              <div className="form-group profile-update-form">
                <label for="formGroupExampleInput">नाम</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                />
              </div>
              <div className="form-group profile-update-form">
                <label for="formGroupExampleInput2">मोबाइल नंबर</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                />
              </div>
              <button type="submit" className="btn update-btn ">
                {" "}
                प्रोफाइल अपडेट करे
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyProfile;
