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
import { LazyLoadImage } from "react-lazy-load-image-component";


const Category = () => {
  const URL = process.env.REACT_APP_URL;
  const Web_Url = process.env.REACT_APP_WEBSITE_URL;
  const { slug } = useParams();
  const [news, setNews] = useState();
  const [rightnews, setrightnews] = useState();
  const [slugId, setslugId] = useState('6538dc0c001dd93ad3658958');
  const [ShowHideDiv, setShowHideDiv] = useState("none");

  const getcatIdBySlug = async () => {
    setShowHideDiv("none");
    const getCatId = await axios.get(`${URL}/admin/getCategoryBySlug/${slug}`);
    const result = getCatId;
    const id2 = result.data.data._id;
    setslugId(id2);
  };

  useEffect(() => {
    getcatIdBySlug();
  }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

  const getnewsByCategory = async () => {
    setShowHideDiv("none");
    const datas = await axios.get(`${URL}/admin/getNewsByCategoryId/${slugId}`);
    const response = await datas.data;
    setNews(response);
    if (!response?.data?.length) {
      setShowHideDiv("block");
    } else {
      setShowHideDiv("none");
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
    getnewsByCategory();
    getbootomnews();
  }, [slugId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* -======================= Seo Start -=======================*/}

      <Helmet>
        <title>{slug.charAt(0).toUpperCase() + slug.slice(1)}</title>
        <meta name="description" content="HIndore news, Indore News in Hindi Indore breaking news" />
        <meta name="keywords" content={slug} />
        <meta name="author" content="Khulasa News" />
        <meta property="og:title" content={slug.substring(0,80)} />
        <meta property="og:description" content={slug.substring(0,80)} />
        <meta  name="og_image" property="og:image" content="https://khulasafirst.com/static/media/khulasa-logo.bff780506a8f5775b489.png" />
        <meta property="og:url" content={slug} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_GB" />
     
      </Helmet>
      {/* -======================= Seo Start -=======================*/}
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

                      <Link to={`/Newsdetail/index/${val?.slug}`} state={{ data: val, rightnews: rightnews }} >
                        <LazyLoadImage src={val.imageurl} alt="" />
                      </Link>

                    </div>

                    <div className="col-md-7 front-latest-news-text news-title">
                      <Link to={`/Newsdetail/index/${val?.slug}`} state={{ data: val, rightnews: rightnews }} >
                        <h5>{val?.title}</h5>
                      </Link>

                      <div className="row front-news-social-icon">
                        <div className="col-md-6 h-4">
                          {val?.categoryid.slice(0, 1).map((c1, index) => {
                            return (
                              <h4 key={index}>
                                {c1.name}
                                {index ? ", " : ""}
                              </h4>
                            );
                          })}

                        </div>

                        <div className="col-md-6 icon-img">
                          <a
                            href={`https://wa.me/?text=${Web_Url}/detail/${val?.slug}`}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {" "}
                            {/* <img src={require('../img/share-icon.png')} alt="" className="share-icon" />{" "} */}
                            <img src={require('../img/whatsapp-icon.png')} alt="" className="whatsapp-icon" />{" "}

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

export default Category;
