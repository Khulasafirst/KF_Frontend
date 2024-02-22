import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdRight from "../Template/AdRight";
import "react-loading-skeleton/dist/skeleton.css";
import RightcardSkelaton from "./RightcardSkelaton";

const RightNews = () => {

  const [isloading, setIsloading] = useState(true);
  const [rightnews, setrightnews] = useState();
  const URL = process.env.REACT_APP_URL;

  useEffect(() => {
    const getbootomnews = async () => {
      const fetch = await axios.get(`${URL}/admin/getRightBottomFrontendNews_onlyRight`);
      const data1 = fetch;
      setrightnews(data1?.data?.arrayRightData);
      setIsloading(false);
    };
    getbootomnews(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="col-md-3 right-block">

      <AdRight />


      {isloading ? (
        <>
          <RightcardSkelaton />
          <RightcardSkelaton />
          <RightcardSkelaton />
          <RightcardSkelaton />
          <RightcardSkelaton />
          <RightcardSkelaton />
          <RightcardSkelaton />
          <RightcardSkelaton />
        </>
      ) : (
        <>
          {rightnews?.map((value1, index1) => (
            <React.Fragment key={index1}>
              <div className="row taza-khabre">
                <div className="col-md-12 taza-khabre-heading news-heading">
                  <h3>{value1?.title}</h3>
                </div>
                {isloading ? (
                  <RightcardSkelaton />
                ) : (
                  <>
                    {value1?.data?.slice(0, 8).map((value2, index2) => (
                      <div key={index2} className="col-md-12 taza-khabre-news-heading news-title">
                        <Link
                          to={`/Newsdetail/index/${value2?.slug}`}
                          state={{ data: value2, rightnews: rightnews }}
                        >
                          <h5>{value2.title.substring(0, 100)}</h5>
                        </Link>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <br />
            </React.Fragment>
          ))}

        </>
      )}

    </div>
  );
};

export default RightNews;
