import React from 'react'
import Header from "../Template/Header";
import Footer from "../Template/Footer";

const Advertize = () => {
  return (
    <>
      <Header />
      <div className='container mt-5 mb-5' style={{ height: '50vh' }}>
        <div className='row'>
          <div className='col-md-12'>
            <h3 className='text-center'>Advertise With Us</h3>
            <div style={{ border: "1px solid gray", alignItems: 'center', padding: '70px 50px' }}>
              <h5 className='text-center'>Mr. Ankur Jaiswal</h5>
              <h6 className='text-center'>Mobile : 8818956789</h6>
              <h6 className='text-center'>Office Address : DO-3, Shopping Complex, AB Rd, opposite Dainaik Bhaskar Press, Indore, Madhya Pradesh 452011</h6>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Advertize