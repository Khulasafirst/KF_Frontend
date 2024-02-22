import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const AdRight = () => {
  const [isloading, setIsloading] = useState(true);
  const [rightadvertize, setrightadvertize] = useState();
  const URL = process.env.REACT_APP_URL;
  useEffect(() => {
    const getadvertize = () => {
      fetch(`${URL}/admin/getAlladvertisement`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setrightadvertize(data?.data2?.RightSide);
          setIsloading(false);
        });
    };

    getadvertize(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {isloading ? (<Skeleton height={180} />) : (
        <div className="right-block-advertise">
          {rightadvertize?.map((val, index) => {
            return <a key={index} href={val?.adv_url} rel="noopener noreferrer" target="_blank"><img  src={val?.url} loading="lazy" alt="" /></a>;
          })}
        </div>
      )}
    </>

  );
};

export default AdRight;
