import React, { useState, useEffect } from "react";
import Header from "../Template/Header";
import Sidebar from "../Template/Sidebar";
import Footer from "../Template/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AdTop from "../Template/AdTop";
import AdBottom from "../Template/AdBottom";
import RightNews from "../Template/RightNews";
import Helmet from "react-helmet";


const Search_news = () => {
  const URL = process.env.REACT_APP_URL;
  const Web_Url = process.env.REACT_APP_WEBSITE_URL;
  const { slug } = useParams();
  const [news, setNews] = useState();
  const [rightnews, setrightnews] = useState();
  const [ShowHideDiv, setShowHideDiv] = useState("none");



  const getnewsBySearch = async () => {
    setShowHideDiv("none");
    const datas = await axios.get(`${URL}/admin/getsearchdataresult/${slug}`);
    const response = await datas?.data;
    setNews(response);
    if (response.length === 0) {
      setShowHideDiv("block");
    }
  };

  const getbootomnews = () => {
    fetch(`${URL}/admin/getRightBottomFrontendNews`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setrightnews(data?.arrayRightData);
      });
  };

  useEffect(() => {
    getnewsBySearch();
    getbootomnews();
  }, [slug]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>


      <Helmet>
        <title></title>
        <meta name="description" content="Hindi News; Latest Hindi News, Breaking Hindi News Live, Hindi Samachar (हिं समाचार), Hindi News Paper Today - Khulasa First" />
        <meta name="keywords" content={slug} />
        <meta name="author" content="Khulasa News" />
        <meta property="og:title" content={slug} />
        <meta property="og:description" content={slug} />
        <meta property="og:image" content="" />
        <meta property="og:url" content={slug} />
      </Helmet>

      <Header />
      <div className="container">
        <div className="row">
          <AdTop />
          <Sidebar />
          <div className="col-md-7 center-block detail-news">
            <div className="front-latest-news row">

              <div className="NoDataFound">
                <b style={{ display: ShowHideDiv }}>खबर उपलब्ध नहीं है !</b>
              </div>

              {news?.data?.map((val, index) => {
                return (
                  <div className="col-md-6 latest-news-block " key={index}>
                    <div className="col-md-5 front-latest-news-img">
                      <Link
                        to={`/Newsdetail/index/${val?.slug}`}
                        state={{ data: val, rightnews: rightnews }}
                      >
                        <img src={val?.imageurl} alt="" />
                      </Link>
                    </div>
                    <div className="col-md-7 front-latest-news-text news-title">
                      <Link
                        to={`/Newsdetail/index/${val?.slug}`}
                        state={{ data: val, rightnews: rightnews }}
                      >
                        <h5>{val?.title}</h5>
                      </Link>
                      <div className="row front-news-social-icon">
                        <div className="col-md-6 h-4">
                        </div>
                        <div className="col-md-6 icon-img">
                          <a
                            href={`https://wa.me/?text=${Web_Url}/detail/${val?.slug}`}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {" "}
                            <img
                              src={require("../img/share-icon.png")}
                              alt=""
                              className="share-icon"
                            />{" "}
                            <img
                              src={require("../img/whatsapp-icon.png")}
                              alt=""
                              className="whatsapp-icon"
                            />{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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

export default Search_news;
