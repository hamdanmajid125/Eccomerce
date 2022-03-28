import React, { useState,useEffect } from "react";
import Images from "./images/imagejson";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import CategoryNavItems from "./CategoryNavItems";
import Cart from "./Cart";

export default function Navbar() {
  const [count, setcount] = useState(0)
  const [cart, setCart] = useState(false);
  useEffect(() => {
    fetchData();
  }, [cart]);
  const fetchData = () =>
  {
    if(count == 0)
    {
      setcount(count+1)
    } 
    else{
      setcount(count+1)
      setCart(true)
    }
  }


  return (
    <>
      {cart && <Cart />}
      <nav className="navbar fixed-top navbar-expand-lg navbar-light shadow">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Images.home.logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarcenter">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Shop
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Collections
                </a>
                <CategoryNavItems />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <FontAwesomeIcon icon={faUser} className="userIcon" />
              <span className="gapmargin">Login/SignUp</span>
              <span className="gapmargin">|</span>

              <span className="gapmargin">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              <span className="gapmargin">
                <button className="btn" onClick={()=>{
                  setCart(!cart)
                }}>
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
              </span>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
