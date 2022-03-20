import { faHeadphonesSimple, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Images from "./images/imagejson";


export default function Footer() {
  return (
    <div className="footer">
      <div className="container p-4">
        <div className="row">
          <div className="col-md-3">
            <img className="footerlogo" src={Images.home.footerlogo} alt="" />
          </div>
          <div className="col-md-3">
            <h5 className="footerhead">Information Company</h5>
            <ul className="footerul">
              <li className="footerli">Hamdan</li>
              <li className="footerli"> Hamdan</li>
              <li className="footerli">Hamdan</li>
              <li className="footerli">Hamdan</li>
              <li className="footerli">Hamdan</li>
              <li className="footerli">Hamdan</li>
              <li className="footerli">Hamdan</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="footerhead">Information Company</h5>
            <ul className="footerul">
              <li className="footerli">Hamdan</li>
              <li className="footerli"> Hamdan</li>
              <li className="footerli">Hamdan</li>
              <li className="footerli">Hamdan</li>
              <li className="footerli">Hamdan</li>
              <li className="footerli">Hamdan</li>
              <li className="footerli">Hamdan</li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="sectionfooter">
              <h5 className="footerhead">Let's Talk</h5>
              <div className="row">
                <div className="col-md-2">
                  <FontAwesomeIcon
                    className="footerIcons"
                    icon={faHeadphonesSimple}
                  />
                </div>
                <div className="col-md-10 grey">
                  +391 (0)35 2568 4593 <br />
                  hello@domain.com
                </div>
              </div>
            </div>
            <div className="sectionfooter mt-3">
              <h5 className="footerhead">Find Us</h5>
              <div className="row">
                <div className="col-md-2">
                  <FontAwesomeIcon
                    className="footerIcons"
                    icon={faLocationDot}
                  />
                </div>
                <div className="col-md-10 grey">
                  +391 (0)35 2568 4593 <br />
                  hello@domain.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
