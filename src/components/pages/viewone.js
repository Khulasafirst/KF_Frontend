import React, { useState } from 'react';
import Header from "../Template/Header";
import Footer from "../Template/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import img from '../img/page9.1.jpg'
import { Link } from 'react-router-dom';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const View = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Swiper
              direction={'vertical'}
              style={{ height: 1600, overflow: "scroll" }}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={10}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >

              <SwiperSlide style={{ minHeight: 135, maxHeight: 135, padding: "5%", display: "flex" }}>
                <img src='https://epaper.khulasafirst.com/media/120/2023-09/26115329-page-01.jpg' />
              </SwiperSlide>
              <SwiperSlide style={{ minHeight: 135, maxHeight: 135, padding: "5%", display: "flex" }}>
                <img src='https://epaper.khulasafirst.com/media/120/2023-09/26115329-page-02.jpg' />
              </SwiperSlide>
              <SwiperSlide style={{ minHeight: 135, maxHeight: 135, padding: "5%", display: "flex" }}>
                <img src='https://epaper.khulasafirst.com/media/120/2023-09/26115329-page-04.jpg' />
              </SwiperSlide>
            </Swiper>

          </div>

          <div className='col-md-10'>
            <Swiper
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >

              <SwiperSlide>
                <>
                  <img style={{ width: "inherit", height: "100%" }} src='https://epaper.khulasafirst.com/media/2023-09/26115329-page-01.jpg' />
                  <Link to='/view/20077.jpg' className='map-border' state={{ img: 'https://epaper.khulasafirst.com/map-image/20077.jpg' }} style={{ top: "2%", left: "1.5957446808510638%", height: "96%", width: "96%", position: "absolute" }} alt="Computer"> </Link>

                </>
              </SwiperSlide>
              <SwiperSlide>
                <>
                  <img style={{ width: "inherit", height: "100%" }} src='https://epaper.khulasafirst.com/media/2023-09/26115329-page-02.jpg' />
                  <Link to='/view/20080.jpg' className='map-border' state={{ img: 'https://epaper.khulasafirst.com/map-image/20080.jpg' }} style={{ top: "7.81803620496817%", left: "1.5957446808510638%", height: "56.055959654210035%", width: "100%", position: "absolute" }} alt="Computer"> </Link>
                  <Link to='/view/20079.jpg' className='map-border' state={{ img: 'https://epaper.khulasafirst.com/map-image/20079.jpg' }} style={{ top: "63.7074%", left: "2.2%", height: "33.2351%", width: "58.1%", position: "absolute" }} alt="Phone"> </Link>
                  <Link to='/view/20078.jpg' className='map-border' state={{ img: 'https://epaper.khulasafirst.com/map-image/20078.jpg' }} style={{ top: "63.8699%", left: "61%", height: "33.5602%", width: "36.7%", position: "absolute" }} alt="Cup of coffee"> </Link>
                </>
              </SwiperSlide>
              <SwiperSlide>
                <>
                  <img style={{ width: "inherit", height: "100%" }} src='https://epaper.khulasafirst.com/media/2023-09/26115329-page-04.jpg' />
                  <Link to='/view/1' className='map-border' state={{ img: img }} style={{ top: "8.53224%", left: "2.4%%", height: "43.7176%", width: "94.8%", position: "absolute" }} alt="Computer"> </Link>
                  <Link to='/view/20135.jpg' className='map-border' state={{ img: 'https://epaper.khulasafirst.com/map-image/20135.jpg' }} style={{ top: "51.9248%", left: "2.3%", height: "45.2615%", width: "95.7%", position: "absolute" }} alt="Phone"> </Link>
                </>
              </SwiperSlide>
            </Swiper>

          </div>


        </div>


      </div>

      <Footer />
    </>
  )
}

export default View