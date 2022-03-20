import React from "react";
import Images from "./images/imagejson";

export default function BlogCatalog() {
  return (
    <div className="blogcat">
      <div className="blogimage">
        
        <img src={Images.home.blog} alt="" />
      </div>
      <div className="blog content mt-3">
        <span className="badge badge-secondary blogsale">LIFESTYLE</span>
        <h6 className="author mt-3">Mr Vela. <span className="date blog"> Apr 04, 2020</span></h6>
        <h5 className="blogtitle">Lorem ipsum dolor sit amet.</h5>
        <p className="blogpara  mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo, eius harum eligendi nulla suscipit odio, excepturi mollitia omnis eaque inventore minus! Vel dolore ratione, voluptatibus perspiciatis qui alias consectetur iusto id molestiae earum sequi ut facere a dolor maiores!</p>
        <button className="btn primary">
          ReadMore

        </button>

      </div>
    </div>
  );
}
