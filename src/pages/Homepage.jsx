import React from 'react'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Home from '../component/Home'
import Welcome from '../component/Welcome'
import Footer1 from '../component/Footer1'
import Footer from '../component/Footer'
import Service from '../component/Service'
import Notice from '../component/Notice'
import About from "../component/About"
import Testimonial from "../component/Testimonial"
import Contact from "../component/Contact"

function Homepage() {
  return (
<div>
      <Header />
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="welcome">
        <Welcome />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="notice">
        <Notice />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer1 />
      <Footer />
    </div>
  )
}

export default Homepage