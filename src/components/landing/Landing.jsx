import React from 'react'
import Footer from './footer'
import Header from './header'
import Main from './main'

const Landing = () => {
  return (
    <>
    
    {/* <div className="loader_bg">
         <div className="loader"><img src="images/loading.gif" alt="#"/></div>
      </div> */}
      <Header/>
   <Main/>
      <Footer/>
    </>
  )
}

export default Landing