import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter' >
        <div className='container flexSB'>
       
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>The Academic School</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>Develop your skills with us.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Street St.  Homs, SY
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +963 992 635 705
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p style={{fontSize:'20px',color:'black',fontFamily:'fantasy'}}>
          Copyright ©2023 All rights reserved 
        </p>
      </div>
    </>
  )
}

export default Footer
