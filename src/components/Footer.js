import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>  
        <div className="footer">
            <div className="footer-logo">
                <a href="/"><img  width="80px" src="Images/footerLogo1.png" alt="logo"/></a>
                <a href="/"><img  width="110px" style={{position: 'relative', bottom: '5px'}} src="Images/footerLogo2.png" alt="logo"/></a>
            </div>

            <div className="quick-links">
                <p>Quick Links</p>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Contact</a></li>
                </ul> 
            </div>

            <div className="shop">
                <p>Categories</p>
                <ul>
                    <li><a href="">Shoes</a></li>
                    <li><a href="">Clothes</a></li>
                </ul>
            </div>

            <div className="connect">
                <p>Get in touch</p>
                <a href="https://github.com/Bhanu-Rana3141"><img style={{ borderRadius: '50%' }} height='25px' src="Images/9_Github_logo.jpg" alt="github"/></a>
                <a href="https://www.linkedin.com/in/bhanu-partap-singh-rana-875957272/"><img style={{ borderRadius: '10px'}}  height="25px" src="Images/10_Linkedin_logo.png" alt="linkedin"/></a>
                <a href="https://www.instagram.com/bhanu.rana3826/"><img style={{borderRadius: '50%'}} height="25px" src="Images/11_InstagramLogo.png" alt="instagram"/></a>
            </div>
        </div>

        <div className="copyright">
            <p>Copyright &copy; 2024, All Rights Reserved.</p>
        </div>
    </>
  );
}
