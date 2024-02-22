import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import fbicon from "../img/Facebook.svg"
import twittericon from "../img/twitter.svg"
import linkicon from "../img/link.svg"
import ReactPlayer from "react-player/file";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Helmet from "react-helmet";

const Web_Url = process.env.REACT_APP_WEBSITE_URL;

const VideoDetailLong = () => {
    const URL = process.env.REACT_APP_URL;
    const { id } = useParams();
    const [arr1, setArr1] = useState([]);
    // const [index, setIndex] = useState(0);
    const index = 0;
    const [singlevideo, setSinglevideo] = useState();

    const getsinglevideo_FirstTime = async () => {
        const fetch = await axios.get(`${URL}/admin/getVideoGalleryById/${id}`);
        const response = fetch;
        setSinglevideo(response?.data);
    };

    useEffect(() => {
        setArr1((arr1) => [...arr1, id]);
        getsinglevideo_FirstTime(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getsinglevideo = async () => {
        const no = arr1[index];
        const fetch = await axios.get(`${URL}/admin/getVideoGalleryById/${no}`);
        const response = fetch;
        setSinglevideo(response?.data);
    };

    useEffect(() => {
        getsinglevideo(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);


    const getAllvideo = async () => {
        const fetch = await axios.get(`${URL}/admin/getAllVideoGallery_ShortLong`);
        const data1 = fetch;
        for (var i = 0; i < data1?.data?.data?.shortVideo.length; i++) {
            const dta = data1?.data?.data?.shortVideo[i]._id;
            setArr1((arr1) => [...arr1, dta]);
        }
    };


    useEffect(() => {
        getAllvideo(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Helmet>
                <title>{singlevideo?.data?.title}</title>
                <meta name="description" content={singlevideo?.data?.imageurl} />
                <meta name="keywords" content={singlevideo?.data?.title} />
                <meta name="author" content="Khulasa News" />
                <meta property="og:title" content={singlevideo?.data?.title} />
                <meta property="og:description" content={singlevideo?.data?.description} />
                <meta property="og:image" content={singlevideo?.data?.imageurl} />
                <meta property="og:url" content={`${Web_Url}/detail/${singlevideo?.data?.slug}`}
                />
            </Helmet>

            <div className="main-container long-video video-detail">
                <div className="row">

                    <Link to={"/khulasa"}>
                        <img
                            src={require("../img/back-btn.png")}
                            alt=""
                            className="back-btn"
                        />
                    </Link>

                    <div className="d-flex justify-content-center ">
                        <div className="long-youtube-vid long-youtube-vid-mobile ">
                            {singlevideo?.data?.videotype === "YOUTUBE" ?
                                <iframe title="myFrame" className="videoIFrame" src={singlevideo?.data?.youtubeurl} frameborder="0" allowfullscreen></iframe>
                                : <div className="++ vid-page-video-block ">
                                    <div className="video-box">
                                        {singlevideo?.data?.videotype === "YOUTUBE" ? null
                                            :
                                            <Link to="#">
                                                <ReactPlayer
                                                    url={singlevideo?.data?.videourl}
                                                    playing={true}
                                                    width="100% !important"
                                                    height="100% !important"
                                                    controls={true}
                                                />
                                            </Link>

                                        }
                                        <div className="vid-top">
                                            <div className="vid-logo">
                                                <img src={require("../img/khulasa-logo (White).png")} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>


                        <div className="social-icon d-none-mobile">
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
                    <div className="short-video-title text-center">
                        <Link to="#">
                            <h3 className="h-3">
                                <span className="heading-green">
                                    {singlevideo?.data?.title}
                                </span>
                            </h3>
                        </Link>
                    </div>
                    <div className="social-icon social-icon-mobile">
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
                <div className="container ">
                </div>
            </div>
        </>
    );
};

export default VideoDetailLong;
