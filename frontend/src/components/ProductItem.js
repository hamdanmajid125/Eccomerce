import React, { useState } from "react";
import PropTypes from "prop-types";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let procart = [];
export default function ProductItem(props) {
  let [cart, setcart] = useState(null);
  const populateCartFirst = () => {
    cart["id"] = props.proid;
    cart["pro_title"] = props.protitle;
    cart["pro_price"] = props.proprice;
    cart["buy_qty"] = 1;
    cart["pro_image"] = props.proimg;
    procart.push(cart);
  };
  const populateCart = () => {
    for (var i = 0; i < procart.length; i++) {
      if (procart[i]["pro_title"] === props.protitle) {
        procart[i]["buy_qty"] = procart[i]["buy_qty"] + 1;
      }
    }
  };
  const exisiting = () => {
    for (var i = 0; i < procart.length; i++) {
      if (procart[i]["pro_title"] === props.protitle) {
        procart[i]["buy_qty"] = procart[i]["buy_qty"] + 1;
        return true;
      }
    }
    return false;
  };
  const handleAddCart = () => {
    if (cart == null || sessionStorage.items == undefined) {
      if (sessionStorage.items === undefined) {
        procart = [];
      } 
    cart = {};
    if (exisiting() == false) {
      populateCartFirst();
      
        sessionStorage.setItem("items", JSON.stringify(procart));
      }
    } else {
      cart = {};
      populateCart();

      sessionStorage.setItem("items", JSON.stringify(procart));
    }

    setcart(null);
    console.log(procart);
  };
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
      <div className="addcart">
        <button onClick={handleAddCart} className="btn-sm addtocart">
          <FontAwesomeIcon icon={faCartShopping} />{" "}
          <span className="addtext">Add to Cart</span>{" "}
        </button>
      </div>
    </div>
  );
}
ProductItem.propTypes = {
  proid: PropTypes.number,
  protitle: PropTypes.string,
  procat: PropTypes.string,
  proprice: PropTypes.number,
  proimg: PropTypes.string,
};
