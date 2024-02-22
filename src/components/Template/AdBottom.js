import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const AdBottom = () => {
  const URL = process.env.REACT_APP_URL;
  const [isloading, setIsloading] = useState(true);
  const [bottomadvertize, setbottomadvertize] = useState();

  const getadvertize = () => {
    fetch(`${URL}/admin/getAlladvertisement`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setbottomadvertize(data?.data2?.BottomSide);
        setIsloading(false);
      });
  };

  useEffect(() => {
    getadvertize(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isloading ? (<Skeleton height={70} />) : (
        <div className="row">
          <div className="col-md-12 bottom-advertise">
            {bottomadvertize?.map((val, index) => {
              return <a key={index} href={val?.adv_url} rel="noopener noreferrer" target="_blank"><img src={val?.url} loading="lazy" alt="" /></a>;
            })}
          </div>
        </div>
      )}

    </div>
  );
};

export default AdBottom;
