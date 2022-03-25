import React from "react";
import Images from "./images/imagejson";

export default function ProductItemHome(props) {

  return (
    <div className="productitem text-center">
      <div>
        <img className="img-fluid" src={Images.home.productimage} alt="" />
        <span className="badge badge-secondary primary">Sale</span>
      </div>
      <div className="productcontent text-left">
        <h5 className="productitle">Product</h5>
        <p className="price">$40</p>
      </div>
    </div>
  );
}
