import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const AdTop = () => {
  const URL = process.env.REACT_APP_URL;
  const [isloading, setIsloading] = useState(true);
  const [topadvertize, settopadvertize] = useState();

  const getadvertize = () => {
    fetch(`${URL}/admin/getAlladvertisement`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        settopadvertize(data?.data2?.TopSide);
        setIsloading(false);
      });
  };

  useEffect(() => {
    getadvertize(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isloading ? (<Skeleton height={70} />) : (
        <>
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="top-ad-block">
                {topadvertize?.map((val, index) => {
                  return <a href={val?.adv_url} key={index} rel="noopener noreferrer" target="_blank"><img  src={val?.url} loading="lazy" alt="" /></a>;
                })}
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default AdTop;
