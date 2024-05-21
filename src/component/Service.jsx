import React from "react";
import image1 from "../images/heading_underline.png";
import image2 from "../images/services1.png";
import image3 from "../images/services2.png";
import image4 from "../images/services3.png";
import image5 from "../images/services4.png";
import image6 from "../images/services5.png";

function Service() {
  return (
    <div className="container-fluid">
      <div className="row services p-5">
        <div className="col-sm-12"></div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <h1>SERVICES</h1>
          <img src={image1} className="welcome_img" />
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
            amet scelerisque felis. Suspendisse potenti. Aenean a risus
            condimentum, congue magna a, venenatis sem.
          </p>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="row">
            <div className="col-sm-2 p-1 m-3">
              <img src={image2} />
              <br />
              FLY ANYWHERE
            </div>
            <div className="col-sm-2 p-1 m-3">
              <img src={image3} />
              <br />
              CARGO SERVICE
            </div>
            <div className="col-sm-2 p-1 m-3">
              <img src={image4} />
              <br />
              COURIER SERVICES
            </div>
            <div className="col-sm-2 p-1 m-3">
              <img src={image5} />
              <br />
              BOX STORAGE
            </div>
            <div className="col-sm-2 p-1 m-3">
              <img src={image6} />
              <br />
              100% SAFE
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-12 mb-3"></div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <button className="services_but p-5 pt-2 pb-2">READ MORE</button>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default Service;
