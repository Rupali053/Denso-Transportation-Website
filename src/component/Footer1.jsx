import React from "react";
import image1 from "../images//call.png";
import image2 from "../images/map.png";
import image3 from "../images/mail.png";

function Footer1() {
  return (
    <div className="container-fluid">
      <div className="row footer1">
        <div className="col-sm-1"></div>
        <div className="col-sm-2 pt-2">
          <div className="foot_cont pt-2">
            <img src={image1} />
            <p>&ensp;Call Now &nbsp; +01 1234567890</p>
          </div>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-2 pt-2">
          <div className="foot_cont pt-2">
            <img src={image2} />
            <p> &ensp;Location</p>
          </div>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-2 pt-2">
          <div className="foot_cont pt-2">
            <img src={image3} />
            <p>&ensp;demo@gmail.com</p>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
}

export default Footer1;
