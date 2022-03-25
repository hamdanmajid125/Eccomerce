import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { CartItems } from "./CartItems";
import { Scrollbars } from "react-custom-scrollbars-2";

export default function Cart(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Offcanvas placement="end" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Scrollbars>
            <div className="container">
              <CartItems />
              <CartItems />
              <CartItems />
              <CartItems />
              <CartItems />
            </div>
          </Scrollbars>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
