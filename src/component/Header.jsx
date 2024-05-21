import React from "react";
import image1 from "../images/logo_navbar.png";
import image2 from "../images/call.png";
import image3 from "../images/mail.png";

function Header() {
  return (
    <div className="container-fluid">
      <div className="row navbar1">
        <div className="col-2"></div>
        <div className="col-8 content">
          <ul class="nav nav-pills nav-justified">
            <li class="nav-item">
              <div className="logo_head">
                <img src={image1} />
                <p>
                  <h2>DENSO</h2>
                </p>
              </div>
            </li>
            <li class="nav-item">
              <div className="logo_head pt-2">
                <img src={image2} style={{ paddingTop: "5px" }} />
                <p>CALL US: +01234567890</p>
              </div>
            </li>
            <li class="nav-item">
              <div className="logo_head pt-2">
                <img src={image3} style={{ paddingTop: "5px" }} />
                <p>demo@gmail.com</p>
              </div>
            </li>
            <li class="nav-item">
              <div className="pt-2">
                <form className="example">
                  <input type="text" placeholder="Search.." name="search" />
                </form>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Header;
