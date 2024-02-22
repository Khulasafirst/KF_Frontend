import React from "react";
import AdminHeader from "../Template/AdminHeader";
import Footer from "../Template/Footer";
import AdminSidebar from "../Template/AdminSidebar";


const MyPlan = () => {

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
          <div className="col-md-5 admin-center-block">
            <div className="plan current-plan">
              <h5 className="h-5">अभी का प्लान</h5>
              <div className="col-md-12 plan-card align">
                <div className="col-md-7 plan-detail">
                  <h4 className="h-4">मासिक प्लान</h4>
                  <h5 className="h-5">एक्सपायरी डेट - 30 सितम्बर २०२३</h5>
                  <h6 className="h-6">01 सितम्बर २०२३</h6>
                </div>
                <div className="col-md-5 plan-rate">
                  <h3 className="h-3 text-center">₹ 20</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="plan past-plan">
              <h5 className="h-5">पूर्व प्लान</h5>
              <div className="col-md-12 plan-card align">
                <div className="col-md-8 plan-detail">
                  <h4 className="h-4">एक दिन प्लान</h4>
                  <h5 className="h-5">एक्सपायर हो चूका हे - 05 जुलाई २०२३</h5>
                  <h6 className="h-6">05 जुलाई २०२३</h6>
                </div>
                <div className="col-md-4 plan-rate">
                  <h3 className="h-3 text-center">₹ 1</h3>
                </div>
              </div>
              <div className="col-md-12 plan-card align">
                <div className="col-md-8 plan-detail">
                  <h4 className="h-4">मासिक प्लान</h4>
                  <h5 className="h-5">एक्सपायर हो चूका हे - 30 मई २०२३</h5>
                  <h6 className="h-6">01 मई २०२३</h6>
                </div>
                <div className="col-md-4 plan-rate">
                  <h3 className="h-3 text-center">₹ 20</h3>
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

export default MyPlan;
