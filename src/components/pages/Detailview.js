import React from 'react'
import Header from "../Template/Header";
import Footer from "../Template/Footer";
import { useLocation } from 'react-router-dom';

const Detailview = () => {
    const location = useLocation();
    const { img } = location.state
    return (
        <div>
            <Header />

            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <img style={{ width: "inherit", height: "100%" }} src={img}  alt=''/>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Detailview