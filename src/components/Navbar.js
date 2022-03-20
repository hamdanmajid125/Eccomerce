import Images from "./images/imagejson";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import CategoryNavItems from "./CategoryNavItems";

export default function Navbar() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
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
                <CategoryNavItems/>
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
                <FontAwesomeIcon icon={faCartPlus} />
              </span>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
