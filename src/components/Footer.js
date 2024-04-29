import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
  return (
    <>  
        <div className="footer">
            <div className="footer-logo">
                <Link to="/"><img  width="80px" src="Images/footerLogo1.png" alt="logo"/></Link>
                <Link to="/"><img  width="110px" style={{position: 'relative', bottom: '5px'}} src="Images/footerLogo2.png" alt="logo"/></Link>
            </div>

            <div className="quick-links">
                <p>Quick Links</p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul> 
            </div>

            <div className="shop">
                <p>Categories</p>
                <ul>
                    <li><Link to="/shoes">Shoes</Link></li>
                    <li><Link to="/clothing">Clothes</Link></li>
                </ul>
            </div>

            <div className="connect">
                <p>Get in touch</p>
                <Link to="/github"><img style={{ borderRadius: '50%' }} height='25px' src="Images/9_Github_logo.jpg" alt="github"/></Link>
                <Link to="/linkedin"><img style={{ borderRadius: '10px'}}  height="25px" src="Images/10_Linkedin_logo.png" alt="linkedin"/></Link>
                <Link to="/instagram"><img style={{borderRadius: '50%'}} height="25px" src="Images/11_InstagramLogo.png" alt="instagram"/></Link>
            </div>
        </div>

        <div className="copyright">
            <p>Copyright &copy; 2024, All Rights Reserved.</p>
        </div>
    </>
  );
}
