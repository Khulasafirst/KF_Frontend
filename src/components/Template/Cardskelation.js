import React from "react";
import Skeleton from "react-loading-skeleton";

export  const Cardskelation = () => {
  return (
    <div className="col-md-6 latest-news-block ">
      <div className="col-md-5 front-latest-news-img">
        <Skeleton height={80} width={100} />
      </div>
      <div className="col-md-7 front-latest-news-text news-title">
        <h6>
          <Skeleton />
        </h6>
        <h6>
          <Skeleton />
        </h6>
        <h6>
          <Skeleton />
        </h6>
        <div className="row front-news-social-icon">
          <div className="col-md-6 h-4"></div>
          <div className="col-md-6 icon-img"></div>
        </div>
      </div>
    </div>
  );
};



export default Cardskelation;
