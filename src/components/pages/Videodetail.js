import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import fbicon from "../img/Facebook.svg";
import twittericon from "../img/twitter.svg";
import linkicon from "../img/link.svg";
import ReactPlayer from "react-player/file";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Videodetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slug, setslug] = useState(id);
  const [url, seturl] = useState('');



  const getslug = () => {
    fetch(`https://api.khulasafirst.com/api/v1/admin/getAllVideo_Slug_Gallery_ShortLong`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        seturl(data?.data?.shortarray);
      });
  };

  const getVideo = () => {
    fetch(`https://api.khulasafirst.com/api/v1/admin/getVideoGalleryBy_SlugId/${slug}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVideo(data?.data);
      });
  };

  useEffect(() => {
    getslug();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    getVideo();
  }, [slug]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setslug(url[currentIndex]);
  }, [currentIndex]);// eslint-disable-line react-hooks/exhaustive-deps



  return (
    <div className='main-container short-video video-detail short-vid-detail-mob '>
      <div className='row'>
        <Link to={"/Video/index"}>
          <img
            src={require("../img/back-btn.png")}
            alt=""
            className="back-btn short-vid-back-btn"
          />
        </Link>
        <div className="d-flex justify-content-center d-none-mobile">
          <div className="++ vid-page-video-block ">
            <div className="video-box">
              <Link to="#" className="video-box-short-vid">
                <ReactPlayer
                  url={video?.videourl}
                  playing={true}
                  width="100% !important"
                  height="100% !important"
                  controls={true}
                />
              </Link>
              <div className="vid-top">
                <div className="vid-logo">
                  <img
                    src={require("../img/khulasa-logo (White).png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="social-icon">
            <ul>
              <li>
                <div className="social-icon-img">
                  <img src={fbicon} alt="" />
                </div>
                <h6 className="social-icon-title">फेसबुक</h6>
              </li>
              <li>
                <div className="social-icon-img">
                  <img src={twittericon} alt="" />
                </div>
                <h6 className="social-icon-title">ट्विटर</h6>
              </li>
              <li>
                <div className="social-icon-img">
                  <img src={linkicon} alt="" />
                </div>
                <h6 className="social-icon-title">कॉपी लिंक</h6>
              </li>
            </ul>
          </div>
        </div>

        <div className="up-down-btn d-flex top-0 start-75 translate-middle d-none-mobile">
          <div className="arrow-btn">
            {currentIndex > 0 && (
              <Link to={`/video/${url[currentIndex - 1]}`}>
                <img
                  onClick={() => setCurrentIndex(currentIndex - 1)}
                  src={require("../img/up-btn.png")}
                  alt=""
                />
              </Link>
            )}
          </div>
          <div className="arrow-btn">
            {currentIndex < url.length - 1 && (
              <Link to={`/video/${url[currentIndex + 1]}`}>
                <img
                  onClick={() => setCurrentIndex(currentIndex + 1)}
                  src={require("../img/down-btn.png")}
                  alt=""
                />
              </Link>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Videodetail