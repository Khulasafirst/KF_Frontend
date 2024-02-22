import React from 'react'
import Skeleton from "react-loading-skeleton";

const Videoskelaton = () => {
  return (
    <div className="col-md-3 front-video-img news-videos news-title ">

     
        <Skeleton height={160} width={200} borderRadius={20} />
      
    
    </div>
  )
}

export default Videoskelaton