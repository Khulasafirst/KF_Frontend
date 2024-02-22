import React, { useState, useEffect } from "react";
import Header from "../Template/Header";
import Footer from "../Template/Footer";
import Sidebar from "../Template/Sidebar";
import { Link } from "react-router-dom";
import AdTop from "../Template/AdTop";
import AdBottom from "../Template/AdBottom";
import RightNews from "../Template/RightNews";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Cardskelation from "../Template/Cardskelation";
import Videoskelaton from "../Template/Videoskelaton";
import Maincard from "../Template/Maincard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css/scrollbar";
import axios from "axios";
import Helmet from "react-helmet";
const URL = process.env.REACT_APP_URL;
const Web_Url = process.env.REACT_APP_WEBSITE_URL;

const Home = () => {
  const [isloading, setIsloading] = useState(true);
  const [news, setNews] = useState();
  const [bottomnews, setbottomnews] = useState();
  const [longvideo, setlongvideo] = useState();
  const [shortvideo, setShortvideo] = useState();

  const getnewsAll = () => {
    fetch(`${URL}/admin/frontend_Mainnews_and_fixedorder_news`, {
    // fetch(`${URL}/admin/getMainFrontendNews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ All: "All", limit: 25 }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNews(data);
        setIsloading(false);
      });
  };

  const getbootomnews = async () => {
    fetch(`${URL}/admin/getRightBottomFrontendNews_onlyBottom`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setbottomnews(data?.arrayBottomData);
      });
  };

  const getvideo = async () => {
    const fetch = await axios.get(`${URL}/admin/getAllVideoGallery_ShortLong`);
    const data1 = fetch;
    setlongvideo(data1?.data?.data?.longVideo);
    setShortvideo(data1?.data?.data?.shortVideo);
  };

  useEffect(() => {
    getnewsAll();
    getbootomnews();
  }, []);

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      getvideo();
    }, 1000);
    return () => {
      clearTimeout(redirectTimeout);
    };
  }, []);



  return (
    <>
      {/* -======================= Seo Start -=======================*/}

      <Helmet>
        <title>Indore news, Indore News in Hindi Indore breaking news</title>
        <meta name="description" content="Indore news, Indore News in Hindi Indore breaking news" />
        <meta name="keywords" content="Indore news, Indore News in Hindi Indore breaking news" />
        <meta name="author" content="Khulasa First" />
        <meta property="og:title" content="Khulasa First" />
        <meta property="og:description" content="Indore news, Indore News in Hindi Indore breaking news" />
        <meta name="og_image"
          property="og:image"
          content="https://api.khulasafirst.com/uploads/images/1700205919126-1700205919126.png"
        />
        <meta property="og:url" content="https://khulasafirst.com/" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_GB" />
      </Helmet>

      {/* -======================= Seo Start -=======================*/}

      <Header />

      <div className="container">
        <AdTop />
        <div className="row">
          <Sidebar />

          <div className="col-md-7 center-block">
            <div className="front-news ">
              <div className="col-md-12 live-news">
                <Link className="live-link" to="/">
                  <h4 className="live-tag">LIVE</h4>
                </Link>
                <SkeletonTheme highlightColor="#ffffff">
                  {isloading ? (
                    <Skeleton />
                  ) : (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/Newsdetail/index/${news?.data[0].slug}`}
                    >
                      <h2 className="live-news-heading">
                        <span className="heading-green">
                          {news?.data[0].title}
                        </span>
                      </h2>
                    </Link>
                  )}
                </SkeletonTheme>
              </div>
              <SkeletonTheme highlightColor="#ffffff">
                {isloading ? (
                  <Maincard />
                ) : (
                  <div className="col-md-12 live-news-video">
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/Newsdetail/index/${news?.data[0].slug}`}
                    >
                      <LazyLoadImage
                        style={{ height: "auto" }}
                        src={news?.data[0].imageurl}
                        loading="lazy"
                        alt="main"
                      />
                    </Link>
                  </div>
                )}
              </SkeletonTheme>
              <div className="row front-news-social-icon px-2">
                <div className="col-md-6 h-4">
                  <h4>ताजा खबर</h4>
                </div>
              </div>
            </div>

            <div className="front-latest-news row">
              <SkeletonTheme highlightColor="#ffffff">
                {isloading ? (
                  <>
                    <Cardskelation />
                    <Cardskelation />
                    <Cardskelation />
                    <Cardskelation />
                    <Cardskelation />
                    <Cardskelation />
                    <Cardskelation />
                    <Cardskelation />
                  </>
                ) : (
                  <>
                    {news?.data?.slice(0, 10).map((val, index) => {
                      return (
                        <div
                          className="col-md-6 latest-news-block "
                          key={index}
                        >
                          <div className="col-md-5 front-latest-news-img">
                            <Link
                              to={`/Newsdetail/index/${val?.slug}`}
                              state={{ data: val }}
                            >
                              {val?.thumbnailImage ? <LazyLoadImage
                                src={val.thumbnailImage}
                                loading="lazy"
                                alt="xyz"
                              /> : <LazyLoadImage
                                src={val.imageurl}
                                loading="lazy"
                                alt="xyz"
                              />}
                            </Link>
                          </div>
                          <div className="col-md-7 front-latest-news-text news-title">
                            <Link
                              to={`/Newsdetail/index/${val?.slug}`}
                              state={{ data: val }}
                            >
                              <h5>{val?.title}</h5>
                            </Link>
                            <div className="row front-news-social-icon">
                              <div className="col-md-6 h-4">
                                {val?.categoryid
                                  .slice(0, 1)
                                  .map((c1, index) => {
                                    return (
                                      <h4 key={index}>
                                        {c1.name}
                                        {index ? ", " : ""}
                                      </h4>
                                    );
                                  })}
                              </div>
                              <div className="col-md-6 icon-img">
                                <button className="share-btn">
                                  <a
                                    href={`https://wa.me/?text=${Web_Url}/Newsdetail/index/${val?.slug}`}
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    {" "}
                                    <LazyLoadImage
                                      src={require("../img/whatsapp-icon.png")}
                                      loading="lazy"
                                      alt=""
                                      className="whatsapp-icon"
                                    />
                                  </a>{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </SkeletonTheme>
            </div>
          </div>

          <RightNews />
        </div>
      </div>

      {!longvideo === 0 &&
        <div className="news-videos-section">
          <div className="container">
            <div className="row">
              <div className="news-videos-heading news-heading">
                <LazyLoadImage
                  className="heading-icon"
                  src={require("../img/nav-video-icon.png")}
                  loading="lazy"
                  alt=""
                />
                <h3>विडियो</h3>
              </div>
              <div className="front-video-img">
                <Swiper
                  breakpoints={{
                    350: {
                      width: 350,
                      slidesPerView: 1,
                    },
                  }}
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {isloading ? (
                    <div style={{ display: "flex" }}>
                      <Videoskelaton />
                      <Videoskelaton />
                      <Videoskelaton />
                      <Videoskelaton />
                    </div>
                  ) : (
                    <>
                      {longvideo?.map((val1, outerIndex) => {
                        return (
                          <div
                            key={outerIndex}
                            className="col-md-3 front-video-img news-videos news-title"
                          >
                            {val1?.map((val, innerIndex) => {
                              const combinedIndex = `${outerIndex}-${innerIndex}`;
                              return (
                                <SwiperSlide key={combinedIndex}>
                                  <Link to={`/videolong/${val?._id}`}>
                                    {" "}
                                    <LazyLoadImage
                                      src={val.imageurl}
                                      loading="lazy"
                                      alt=""
                                      style={{
                                        width: "100%",
                                        position: "relative",
                                      }}
                                    />
                                    <div className="play-btn">
                                      <a href="/video/653fab9d65eb646550607622">
                                        <LazyLoadImage
                                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARjSURBVHgB5Zs/SBxBFMafJsTGJEVEVEgCwYMDE0iCYqPdNQkoEZJ0YmITm0Qh1ySFImjS+SepUmi0NWAjaGUTFREkNoLCCQHFOwsJiGehWGS+vR0Z11tvd29ndnb9wfPO2xOcb95783bnTQmpoZrZY/MVVm6aSJZZhtkes5RpWZJMCckBg3vOrJlZLbOb5A0uxByzNZKA3wI8YdZpvvoNvAMijFPOS3zBLwFeM3tFOfdWwSz5JESxAmCmP5O6gVspWgivAiDGv5IcV3cLQuMXsynywDVyDwb9g9l90gMk2EZmVeRh5XDrAZ2m6Qq84T25CAk3AnygXLLTHXgAREg5+bLTEECie0Hh4AazBLMVZv8KfdmJAJj5sAye41iEQiGge8wXAuHwhi7JCaX2f2uUsmEePMBy/Z0u3necYRcCWFIQ915reJ3AGBASK/ku2gmAIidG0aGOcqvCtvVCvhCA6+tQ4fkNkvmFULB6QJRc3wrGdEKW22qrB2D2g7qxUQEKuXNeIAqA2X9G0QaDP1fNigI8pWjPPuecF4gCvKWrAX9cZ8AFQNa/CrPPaeZvuADSY7+lpeV2PB4vIz04m3DRA6SSSCRuzc/PP+rv79fF0wwvgADI/kr+qZqamrLe3t4Hu7u79T09PZUULMakQwDlJS+EGB4ejk1PT8cCDIvgBOC0tbVVbmxs1AckhLE7BQFqKWAgBPJDAGFRDQG0SEo8LJAfOjo67pAaYhCgnDQCQkxMTMQVhUWVNh5gheeHkZGRuxUVFddJEqWkOd3d3fcWFxcfShKhXGsBstns6ejo6E5TU9P6/v7+KUlAmmsVy+rq6kF7e3tqc3PzmOSRhQdkSCPS6fRxa2vrekNDw7rkwRvAA6S3oTgB7j40NLTT19eXJnXsQQB4QKBPgCcnJzPJZHJbVpxfQgYC+NZu4hbEOav+/i4tLR1RMKQggKNdVD9BnHd1daVmZmYOKDjg+VkIsECKQJyPjY1lBgYG0gG4u5Ut/OCbo2gxkVoR4onQ8vLykQYD53xhNssFCEvzg5+8ZLbHK0FlYaAJ2B0ykn+p8IHyZBggc/yNeC9wVbwAhd8f/osowBRpUhVK5jcJtY+4O4ydUzQSRHFrXOQTCRNtvR2OuhdcaKu19gecmNZI0QOVH9b+E/HDfA9E4AVSevMD5ifl8W67J0KDFK1QwKTO5rtgJwDiZJCiAVx/3O7iZZ2ivKMqzKsCb5627RYt1CqLXIB9gzoKH4fMPlKe1jgRJ73CaDDEDnKY+gYxeMz8VqEvOu0W52VyGMLB8eCBmxMjfGnUWQTE/Dsq4PYibo/MrJkGEXRrpkSNnyQHZwREvJwZwhKJkEBy1CEvwOVxhukbWao8J3gRAKBIgggQo5iTocWC4gaz7rly9evgJPru0GeoaqeZnyAtumT3++gshEDLnYxECVfHw1vMunZHZ62gbkDrLVrRcGrca4ggqy+YForD03YgWfJiqtp8bwWzekiKj8//B+DqHWqfHkSnAAAAAElFTkSuQmCC"
                                          alt=""
                                          className="play-btn long-vid-play-btn"
                                        />
                                      </a>
                                    </div>
                                  </Link>
                                </SwiperSlide>
                              );
                            })}
                          </div>
                        );
                      })}
                    </>
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      }


      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            {" "}
            {bottomnews?.map((val1, outerIndex) => {
              return (
                <div className=" breaking-news mb-3" key={outerIndex}>
                  <div className="news-heading heading-underline">
                    <LazyLoadImage
                      className="heading-icon"
                      src={require("../img/khel-icon.png")}
                      loading="lazy"
                      alt=""
                    />
                    <h3>{val1.title}</h3>
                  </div>
                  <div className="row">
                    {val1?.data?.slice(0, 16).map((val2, innerIndex) => {
                      const combinedIndex = `${outerIndex}-${innerIndex}`;
                      return (
                        <div
                          key={combinedIndex}
                          className="col-lg-6 breaking-news-block"
                        >
                          <div className="row">
                            <div className="col-md-5 col-5 breaking-news-img">
                              <Link
                                style={{ textDecoration: "none" }}
                                to={`/Newsdetail/index/${val2?.slug}`}
                                state={{ data: val2 }}
                              >
                                {val2?.thumbnailImage ? <LazyLoadImage
                                  src={val2.thumbnailImage}
                                  loading="lazy"
                                  alt="xyz"
                                /> : <LazyLoadImage
                                  src={val2.imageurl}
                                  loading="lazy"
                                  alt="xyz"
                                />}
                              </Link>
                            </div>

                            <div className="col-md-7 col-7 news-title">
                              <Link
                                style={{ textDecoration: "none" }}
                                to={`/Newsdetail/index/${val2?.slug}`}
                                state={{ data: val2 }}
                              >
                                <h5>{val2?.title}</h5>
                              </Link>
                              <div className="row category-news-social-icon">
                                <div className="col-md-6 h-4 w-50">
                                  {val2?.categoryid
                                    .slice(0, 1)
                                    .map((c1, index) => {
                                      return (
                                        <h4 key={index}>
                                          {c1.name}
                                          {index ? ", " : ""}
                                        </h4>
                                      );
                                    })}
                                </div>
                                <div className="col-md-6 icon-img w-50">
                                  <button className="share-btn">
                                    <a
                                      href={`https://wa.me/?text=${Web_Url}/Newsdetail/index/${val2?.slug}`}
                                      rel="noreferrer"
                                      target="_blank"
                                    >
                                      {" "}
                                      <LazyLoadImage
                                        src={require("../img/whatsapp-icon.png")}
                                        loading="lazy"
                                        alt=""
                                        className="whatsapp-icon"
                                      />
                                    </a>{" "}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-md-4 ">
            <div className="short-videos">
              <div className="news-heading heading-underline">
                <img
                  className="heading-icon"
                  src={require("../img/short-video-icon.png")}
                  alt=""
                />
                <h3>शॉर्ट वीडियो</h3>
              </div>
              {isloading ? (
                <Skeleton />
              ) : (
                <>
                  <div className="short-vid2">
                    <Swiper
                      navigation={true}
                      modules={[Autoplay, Navigation]}
                      loop={true}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      className="mySwiper"
                    >
                      {shortvideo?.map((val, index) => (
                        <SwiperSlide key={index}>
                          <div className="image-container">
                            <Link to={`/video/${val?.slug}`}>
                              <LazyLoadImage
                                src={val.imageurl}
                                loading="lazy"
                                alt=""
                                className="image-with-gradient"
                              />
                              <div className="short-vid2-gradient-overlay"></div>
                            </Link>
                            <div className="short-vid2-bottom">
                              <div className="d-flex justify-content-end">
                                <Link to={`/Video/index`}>
                                  <button>और देखें</button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </>
              )}
            </div>
            {/* <div className="right-btm-ad">
              <div className="right-block-advertise right-btm-ad-card my-4">
                <Link to="/">
                  <LazyLoadImage
                    src={require("../img/adhyan.jpg")}
                    alt=""
                    className="w-100"
                  />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
        <AdBottom />
      </div>

      <Footer />
    </>
  );
};

export default Home;
