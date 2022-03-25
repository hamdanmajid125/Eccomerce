import React, { useState } from "react";
import PropTypes from "prop-types";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let procart = {}
export default function ProductItem(props) {
  let [cart, setcart] = useState(null)

  const handleAddCart = () => {
    if (cart == null) {
      cart = {};
      cart[props.proid] = 1;
      procart[props.proid] = cart

    } else {
      if (cart[props.proid] !== undefined) {
        cart[props.proid] = cart[props.proid] + 1;
        procart[props.proid] = cart[props.proid]
        

      } else {
        cart[props.proid] = 1;
        procart[props.proid] = cart
      }
    }
    console.log(localStorage)
    localStorage.setItem('items', JSON.stringify(procart));
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
