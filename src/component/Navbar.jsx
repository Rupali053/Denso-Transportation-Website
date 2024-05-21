import React from 'react';

function Navbar() {
  return (
    <div className='container-fluid'>
      <div className="navbar2 row">
        <div className='col-sm-2'></div>
        <div className='col-sm-8'>
          <nav className="navbar navbar-justified navbar-expand-lg text-white">
            <div className="container-fluid">
              <div className="navbar-brand">&emsp;&emsp;&emsp;&emsp;</div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <div className='nabavr_div'>
                      <a className="nav-link" href="#home" style={{ color: 'white' }}><div>HOME</div></a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className='nabavr_div'>
                      <a className="nav-link" href="#about" style={{ color: 'white' }}><div>ABOUT</div></a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className='nabavr_div'>
                      <a className="nav-link" href="#welcome" style={{ color: 'white' }}><div>TRANSPORT</div></a>
                    </div>
                  </li>
                  {/* <li className="nav-item">
                    <div className='nabavr_div'>
                      <a className="nav-link" href="#service" style={{ color: 'white' }}><div>SERVICE</div></a>
                    </div>
                  </li> */}
                  <li className="nav-item">
                    <div className='nabavr_div'>
                      <a className="nav-link" href="#notice" style={{ color: 'white' }}><div>NEWS</div></a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className='nabavr_div'>
                      <a className="nav-link" href="#testimonial" style={{ color: 'white' }}><div>CLIENTS</div></a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className='nabavr_div'>
                      <a className="nav-link" href="#contact" style={{ color: 'white' }}><div>CONTACT US</div></a>
                    </div>
                  </li>
                  {/* <li className="nav-item">
                    <div className='nabavr_div'>
                      <a className="nav-link" href="#contact" style={{ color: 'white' }}><div>CONTACT</div></a>
                    </div>
                  </li> */}
                  <li className="nav-item">
                    <div className='nabavr_div'>
                      <a className="nav-link" href="#" style={{ color: 'white' }}><div>LOGIN</div></a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className='nabavr_div'>
                      <a className="nav-link" href="#" style={{ color: 'white' }}><div>REGISTER</div></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className='col-sm-2'></div>
      </div>
    </div>
  );
}

export default Navbar;
