import React, { useState, useEffect } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { CartItems } from "./CartItems";
import { Scrollbars } from "react-custom-scrollbars-2";

export default function Cart(props) {
  const [show, setShow] = useState(true);
  let [cartitems, setCartItems] = useState(null);
  const handleClose = () => setShow(false);
  useEffect(() => {
    setCartItems(JSON.parse(sessionStorage.getItem("items")));
  }, []);

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
                <h1>No Items</h1>
              ) : (
                cartitems.map((cartitems, index) => (
                  <CartItems
                    className="cartitems"
                    key={index}
                    protitle={cartitems.pro_title}
                    price={cartitems.pro_price}
                    buyqty={cartitems.buy_qty}
                    proimage={cartitems.pro_image}
                  />
                ))
              )}
            </div>
            <div className="cart-buttons">
              <button className="btn primary">Check Out</button>
              <button
                className="btn primary"
                onClick={() => {
                  sessionStorage.clear();
                  setCartItems(null);
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
