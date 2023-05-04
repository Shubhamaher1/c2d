import React from 'react'
import Footer from './footer'
import Header from './header'

const Our = () => {
  return (
    <>
    <Header/>
    <div className="back_re">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                     {/* <h2>Our Room</h2> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="our_room">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="titlepage">
                        <h2>Our Team</h2>
                        <p>We are working ! it is beta version </p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-4 col-sm-6">
                     <div id="serv_hover" className="room">
                        <div className="room_img">
                           <figure><img src="images/room1.jpg" alt="#" /></figure>
                        </div>
                        <div className="bed_room">
                           <h3>Shubham Aher</h3>
                           <p>CEO & Developer </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                     <div id="serv_hover" className="room">
                        <div className="room_img">
                           <figure><img src="images/room2.jpg" alt="#" /></figure>
                        </div>
                        <div className="bed_room">
                           <h3>Anant Kharat</h3>
                           <p>Marketing Head & COO </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                     <div id="serv_hover" className="room">
                        <div className="room_img">
                           <figure><img src="images/room3.jpg" alt="#" /></figure>
                        </div>
                        <div className="bed_room">
                           <h3>You</h3>
                           <p>We Always Give Value to the user </p>
                        </div>
                     </div>
                  </div>
                  {/* <div className="col-md-4 col-sm-6">
                     <div id="serv_hover" className="room">
                        <div className="room_img">
                           <figure><img src="images/room4.jpg" alt="#" /></figure>
                        </div>
                        <div className="bed_room">
                           <h3>Bed Room</h3>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                        </div>
                     </div>
                  </div> */}
                  {/* <div className="col-md-4 col-sm-6">
                     <div id="serv_hover" className="room">
                        <div className="room_img">
                           <figure><img src="images/room5.jpg" alt="#" /></figure>
                        </div>
                        <div className="bed_room">
                           <h3>Bed Room</h3>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                        </div>
                     </div>
                  </div> */}
                  {/* <div className="col-md-4 col-sm-6">
                     <div id="serv_hover" className="room">
                        <div className="room_img">
                           <figure><img src="images/room6.jpg" alt="#" /></figure>
                        </div>
                        <div className="bed_room">
                           <h3>Bed Room</h3>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                        </div>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
    <Footer/>
    </>
  )
}

export default Our