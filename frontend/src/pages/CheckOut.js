import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Images from "../components/images/imagejson";

export default function CheckOut(props) {
  let [total, setTotal] = useState(0)
  let [cartitems, setCartItems] = useState(null);
  useEffect(() => {
    setCartItems(JSON.parse(sessionStorage.getItem("items")));
  }, []);
  let gettotal=(price,buy_qty) => {
    total = total + Number(price) * Number(buy_qty)
  }
  

  return (
    
    <div className="checkout">
      <div className="row">
        <div className="col-md-7">
          <div className="container">
            <h2 className="happy text-center">Happy Shopping!</h2>
            <form className="checkoutform" action="submit">
              <div className="comp">
                <h5 className="comphead">Contact Information</h5>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    <small>Email me with news and offers</small>
                  </label>
                </div>
              </div>

              <div className="comp">
                <h5 className="comphead">Shipping Address</h5>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="City"
                    />
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="remberme"
                      />
                      <label className="form-check-label" htmlFor="remberme">
                        Save this information for next time
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkoutdiv">
                <button className="btn checkoutbtn ">Contnuing Shopping</button>
                <a href="#" className="checkoutlink">
                  Return Cart
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-5 grey">
          <div className="grey-content">
            <div className="productscart">
              <div className="parentcart">
                {
                   cartitems!==null?(
                
                cartitems.map((cartitems, index) => (
                
                 
                  <div className="row">
                    <div className="col-md-2">
                      <div className="cartimage">
                        <img src={cartitems.proimg} alt="" />
                      </div>
                      <span className="qty-pro">{cartitems.buy_qty}</span>
                    </div>

                    <div className="col-md-5">
                      <div className="cartcontent">
                        <p>{cartitems.pro_title}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="cartcontent">
                        <p className="price">${cartitems.pro_price}.00</p>
                        {
                          gettotal(cartitems.pro_price,cartitems.buy_qty)
                          

                        }
                      </div>
                    </div>
                  </div>
                
                ))): <h1>Hello</h1>
                }

                <hr className="solid" />
                <div className="bill">
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-start">
                      <p>Total</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                      <h4 className="price">${total}.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
