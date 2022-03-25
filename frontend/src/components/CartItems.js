import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Images from "./images/imagejson";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const CartItems = () => {
  const [count, setCount] = useState(1);
//   const [text,setTxtLetter]= useState("0")

  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <img src={Images.home.productimage} alt="" />
        </div>
        <div className="col-md-5">
          <h5 className="producttitleh5">Product Title</h5>
          <p className="procontent">Category</p>
          <p className="procontent">$34</p>
        </div>
        <div className="col-md-4">
          <div class="col">
            <div className="number">
              <button
                type="button"
                class="btn-default btn-circle"
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -
              </button>
              <input className="counterinput" value={count} type="text" onChange={event => setCount(event.target.value)} />
              <button
                type="button"
                class="btn-default btn-circle"
                onClick={() => {
                  setCount(count + 1);
                }}
              > +
              </button>
            </div>
          </div>
          <div class="col text-end">
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
