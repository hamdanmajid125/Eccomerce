import React from "react";
import PropTypes from "prop-types";

export default function ProductItem(props) {
  return (
    <div className="productitem">
      <div className="productimage">
        <img className="productimg" src={props.proimg} alt="" />
        <span className="badge badge-secondary primary">Sale</span>
      </div>
      <div className="productcontent text-left">
        <h5 className="productitle">{props.protitle}</h5>
        <p className="procat">{props.procat}</p>
        <p className="price">${props.proprice}</p>
      </div>
    </div>
  );
}
ProductItem.propTypes = {
  protitle: PropTypes.string,
  procat: PropTypes.string,
  proprice: PropTypes.number,
  proimg: PropTypes.string,
};