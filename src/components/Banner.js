import React from "react";
import Images from "./images/imagejson";
import PropTypes from "prop-types";


export default function Banner(props) {
  return (
    <div
   
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item banner active">
          <img src={Images.shop.banner} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block bannertitle">
          <h1>{props.title}</h1>
      </div>
        </div>
      </div>
    </div>
  );
}
Banner.propTypes = {
  title: PropTypes.string,
  
};
// Banner.defaultProps= 
// {
//   title:"Products"
// };