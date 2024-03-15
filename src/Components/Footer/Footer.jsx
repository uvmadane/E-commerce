import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/10.jpg'
import instagram_icon from '../Assets/facebook.png'
import pinterest_icon from '../Assets/twitter.png'
import whatsapp_icon from '../Assets/google.png'
const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-logo">
        <img src={footer_logo} alt="footer img" width={50}/>
        <p>SHOPPER</p>
    </div>
    <ul className='footer-links'>
    <li>Company</li>
    <li>Products</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>

    </ul>
    <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" height={50} />
        </div>
        <div className="footer-icons-container">
            <img src={pinterest_icon} alt="" height={50} />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" height={50} />
        </div>
    </div>
    <div className="footer-copyright">
        <hr/>
        <p>Copyright 2 2024 All Right Reserved.</p>
    </div>
      
    </div>
  )
}
export default Footer 
