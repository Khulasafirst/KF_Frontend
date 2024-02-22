import React, { useState, useEffect } from "react";
import Header from "../Template/Header";
import Sidebar from "../Template/Sidebar";
import Footer from "../Template/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import AdTop from "../Template/AdTop";
import AdBottom from "../Template/AdBottom";
import RightNews from "../Template/RightNews";
import Helmet from 'react-helmet';
import dateFormat from "dateformat";

const Detail = () => {
  const URL = process.env.REACT_APP_URL;
  const Web_Url = process.env.REACT_APP_WEBSITE_URL;
  const { newsslug } = useParams();
  const [singleNews, SetsingleNews] = useState();

  const getNewsBySlug = async () => {
    const getNews = await axios.get(`${URL}/admin/getSingleNewsBySlugId/${newsslug}`);
    const result = getNews;
    SetsingleNews(result?.data);
  };

  useEffect(() => {
    getNewsBySlug();
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }, [newsslug]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>

      <Helmet>
        <title>{singleNews?.data?.title}</title>
        <meta name="description" content={singleNews?.data.description.substring(0, 80)} />
        <meta name="keywords" content={singleNews?.data.slug} />
        <meta name="author" content="Khulasa News" />
        <meta property="og:title" content={singleNews?.data?.title.substring(0, 80)} />
        <meta property="og:description" content={singleNews?.data.description.substring(0, 80)} />
        <meta name="og_image" property="og:image" content={singleNews?.data.imageurl} />
        <meta property="og:url" content={`${Web_Url}/Newsdetail/index/${singleNews?.data?.slug}`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_GB" />
      </Helmet>

      <Header />
      <div className="container detail-news-page">
        <div className="row">
          <AdTop />
          <Sidebar />
          <div className="col-md-7 center-block detail-news">
            <div className="front-news px-3 margin-12">
              <div className="col-md-12 live-news">
                <h2 className="live-news-heading">
                  <span className="heading-blue">
                    {singleNews?.data?.title}{" "}
                  </span>{" "}
                </h2>
              </div>
              <div className="col-md-12 live-news-video">
                <img src={singleNews?.data.imageurl} alt="" />
              </div>
              <div className="row front-news-social-icon">
                <div className="col-md-6 detail-news-h-4">
                  <h4>
                    <span className="heading-red">BY KHULASA FIRST</span>,<br />
                    {dateFormat(singleNews?.data?.createdAt, "dddd, mmmm dS, yyyy")}
                  </h4>
                </div>
                <div className="col-md-6 icon-img">
                  <a href={`https://wa.me/?text=${Web_Url}/Newsdetail/index/${singleNews?.data?.slug}`} rel="noreferrer" target='_blank'>
                    <img src={require('../img/whatsapp-icon.png')} loading="lazy" alt="" className="whatsapp-icon" /></a>{" "}
                </div>
              </div>
            </div>
            <div className="detail-news-content">
              <p
                dangerouslySetInnerHTML={{
                  __html: singleNews?.data.description,
                }}
              ></p>
            </div>

          </div>

          <RightNews />

        </div>
      </div>
      <div className="container">
        <AdBottom />
      </div>
      <Footer />
    </>
  );
};

export default Detail;
