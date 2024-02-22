import React, { useState, useEffect } from 'react';
import Header from "../Template/Header";
import Footer from "../Template/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Link } from 'react-router-dom';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const View = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [data, setData] = useState();

  const getdata = () => {
    fetch(`http://206.189.130.102:8080/api/v1/admin/getSinglpaper/6514248aff72d0d2f4df452a`)
      .then((response) => {
        return response.json();
      }).then((res) => {
        setData(res)
      })
  }

  useEffect(() => {
    getdata();
  }, []);



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
              {data?.data?.paperimages?.map((value) => {
                return (
                  <>
                    {value?.mainimage_url === "" ? '' :
                      <SwiperSlide style={{ minHeight: 135, maxHeight: 135, padding: "5%", display: "flex" }}>
                        <img src={value?.mainimage_url} alt='xyz' />
                      </SwiperSlide>
                    }
                  </>
                )
              })}


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
              {data?.data?.paperimages?.map((value) => {
                return (
                  <SwiperSlide>
                    <>
                      <img style={{ width: "inherit", height: "100%" }} src={value?.mainimage_url} alt='xyz' />
                      {value?.subimages?.map((val) => {
                        return (
                          <Link to='/view/20077.jpg' className='map-border' state={{ img: val?.subimage_url }} style={{ top: val?.top, left: val?.left, height: val?.height, width: val?.width, position: "absolute" }} alt="Computer"> </Link>
                        )
                      })}

                    </>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default View