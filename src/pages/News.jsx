import React from 'react'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Notice from '../component/Notice'
import Footer1 from '../component/Footer1'
import Footer from '../component/Footer'

function News() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Notice/>
        <Footer1/>
        <Footer/>
    </div>
  )
}

export default News