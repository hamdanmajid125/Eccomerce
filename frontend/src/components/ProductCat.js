import React from "react";
import Images from "./images/imagejson";

export default function ProductItem() {
  return (
    <div className="productitem">
      <div className="productimage">
        <img src={Images.home.productimage} alt="" />
        <span className="badge badge-secondary primary">Sale</span>
      </div>
   
    </div>
  );
}
