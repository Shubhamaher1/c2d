import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className=" col-md-4">
                     <h3>Contact US</h3>
                     <ul className="conta">
                        <li><i className="fa fa-map-marker" aria-hidden="true"></i> Address</li>
                        <li><i className="fa fa-mobile" aria-hidden="true"></i> +91 ----------</li>
                        <li> <i className="fa fa-envelope" aria-hidden="true"></i><a href="#"> c2d@gmail.com</a></li>
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <h3>Menu Link</h3>
                     <ul className="link_menu">
                        <li className="active"><Link to="/index">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/room">Our</Link></li>
                        <li><Link to="/galley">Gallery</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <h3>News letter</h3>
                     <form className="bottom_form">
                        <input className="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                        <button className="sub_btn">subscribe</button>
                     </form>
                     <ul className="social_icon">
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-10 offset-md-1">
                        
                        <p>
                        © 2023 All Rights Reserved. Design by <a href="https://portfolio-f70e1.web.app/"> Shubham Aher</a>
                        <br/><br/>
                       
                        </p>

                     </div>
                  </div>
               </div>
            </div>
         </div>
        
      </footer>
  )
}

export default Footer