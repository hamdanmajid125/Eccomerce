import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export const CartItems = (props) => {
  const [count, setCount] = useState(props.buyqty);
  
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <img src={props.proimage} alt="" />
        </div>
        <div className="col-md-5">
          <h5 className="producttitleh5">{props.protitle}</h5>
          <p className="procontent">Category</p>
          <p className="procontent">{props.price}</p>
        </div>
        <div className="col-md-4">
          <div className="col">
            <div className="number">
              <button
                type="button"
                className="btn-default btn-circle"
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -
              </button>
              <input className="counterinput" value={count} type="text" onChange={event => setCount(event.target.value)} />
              <button
                type="button"
                className="btn-default btn-circle"
                onClick={() => {
                  setCount(count + 1);
                }}
              > +
              </button>
            </div>
          </div>
          <div className="col text-end">
            <div className="icondelete">
              <FontAwesomeIcon className="trash" icon={faTrash}></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
CartItems.propTypes = {
  protitle: PropTypes.string,
  price: PropTypes.number,
  buyqty: PropTypes.number,
  proimage:PropTypes.string,
};

