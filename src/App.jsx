import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Transport from "./pages/Transport";
import News from "./pages/News";
import Clients from "./pages/Clients";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Homepage from "./pages/Homepage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Homepage />
      {/* <Aboutus />
      <Transport />
      <News />
      <Clients />
      <Contactus />
      <Login />
      <SignUp /> */}
    </div>
  );
}

export default App;
