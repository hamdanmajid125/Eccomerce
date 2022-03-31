import React, { useState, useLayoutEffect, useEffect } from "react";
import { Offcanvas, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { CartItems } from "./CartItems";
import { Scrollbars } from "react-custom-scrollbars-2";

export default function Cart(props) {
  let navigate = useNavigate();
  const [show, setShow] = useState(true);
  let [cartitems, setCartItems] = useState(null);
  const handleClose = () => setShow(false);
  let disable = true;

  useEffect(() => {
    setCartItems(JSON.parse(sessionStorage.getItem("items")));
    return true;
  }, []);
  const getdisable = () => 
  {
    disable = false
  }

  return (
    <div className="relative">
      <Offcanvas placement="end" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ marginLeft: "10px" }}>
            Your Cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Scrollbars>
            <div className="container">
              {cartitems === undefined || cartitems === null ? (
                (<h5>No Items</h5>)
              ) : (
                (getdisable(),
                cartitems.map((cartitems, index) => (
                  <CartItems
                    className="cartitems"
                    key={index}
                    protitle={cartitems.pro_title}
                    price={cartitems.pro_price}
                    buyqty={cartitems.buy_qty}
                    proimage={cartitems.pro_image}
                  />
                )))
              )}
            </div>
            <div className="cart-buttons">
              <button
                className="btn primary"
                disabled={disable}
                onClick={() => {
                  navigate(`checkout`);
                  setShow(false);
                }}
              >
                Check Out
              </button>
              <button
                className="btn primary"
                onClick={() => {
                  sessionStorage.clear();
                  setCartItems(null);
                  disable = true
                }}
              >
                Clear Cart
              </button>
            </div>
          </Scrollbars>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
