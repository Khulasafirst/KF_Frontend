import React, { useState, useEffect } from "react";
import Header from "../Template/Header";
import Footer from "../Template/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AdTop from "../Template/AdTop";
import AdBottom from "../Template/AdBottom";
import Helmet from "react-helmet";

const Video = () => {
  const URL = process.env.REACT_APP_URL;
  const [page, setPage] = useState(0);
  const [shortvideo, setShortvideo] = useState([]);

  const getvideo = async () => {
    const fetch = await axios.get(
      `${URL}/admin/get_by_limit_AllVideoGallery_ShortLong?page=${page}&perPage=12`
    );
    const data = fetch?.data?.data?.shortVideo;
    setShortvideo((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    getvideo(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleinfintescroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) { }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleinfintescroll);
    return () => window.removeEventListener("scroll", handleinfintescroll);
  });

  return (
    <>
      <Helmet>
        <title>Video</title>
        <meta name="description" content="Hindi News; Latest Hindi News, Breaking Hindi News Live, Hindi Samachar (हिं समाचार), Hindi News Paper Today - Khulasa First" />
        <meta name="keywords" content="Khulasa news" />
        <meta name="author" content="Khulasa News" />
        <meta property="og:title" content="Khulasa news" />
        <meta property="og:description" content="Khulasa news" />
        <meta property="og:image" content="https://khulasafirst.com/static/media/khulasa-logo.bff780506a8f5775b489.png" />
        <meta property="og:url" content="Khulasa news" />
      </Helmet>

      <Header />
      <div className="container"></div>

      <div className="container">
        <div className="row">
          <AdTop />
        </div>

        <div className="row">
          {shortvideo?.map((val, index) => {
            return (
              <div key={index} className="col-md-3 vid-page-video-block">
                <div className="video">
                  <div className="video-box">
                    <Link to={`/video/${val?.slug}`}>
                      <div className="image-container">
                        <img src={val.imageurl} alt="" className="image-with-gradient" />
                        <div className="gradient-overlay"></div>
                      </div>
                    </Link>
                  </div>
                  <div className="play-btn">
                    <Link to={`/video/${val?.slug}`}>
                      <img
                        src={require("../img/play-btn.png")}
                        alt=""
                        className="play-btn"
                      />
                    </Link>
                  </div>
                </div>
                <div className="news-title">
                  <h5 className="news-videos-title">{val.title}</h5>
                  <div className="h-4">
                    <h4>महाकाल सेना</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <AdBottom />
      </div>
      <Footer />
    </>
  );
};

export default Video;
