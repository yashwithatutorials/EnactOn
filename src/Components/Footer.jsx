import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Footer = () => {
  return (
    <>
 <footer className="footer">
            {/* Left Section */}
            <div className="footer-section company-info">
                <img src="/../../src/assets/enactonlogo.png" alt="Company Logo" className="logo"/>
                <h3 className='det'>EnactOn Technologies Pvt. Ltd.</h3>
                <p className='det'>A great place to work for passionate technocrats to deliver excellence to global customers!</p>
                <p className='det'><LocationOnIcon/>   605, Luxuria Business Hub, Nr. V R Mall, Vesu, Surat, Gujarat, INDIA – 395007</p>
                <p className='det'>CIN: U72900GJ2019PTC108413</p>
                {/* Social Media Icons */}
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
                <div className='hl'>
                <FacebookRoundedIcon sx={{color:'skyblue'}} className='fa'/>
                <InstagramIcon sx={{color:'pink'}} className='fa'/>
                <LinkedInIcon sx={{color:'blue'}} className='fa'/>
                <TwitterIcon sx={{color:'skyblue'}} className='fa'/>
                <YouTubeIcon sx={{color:'white'}} className='fa'/>
            </div>
            </div>
            <div className="footer-section">
                <h4>Services</h4>
                <ul>
                    <li>Mobile App Development</li>
                    <li>Website Development</li>
                    <li >Extension Development</li>
                    <li>Web 3.0 Development</li>
                    <li>AI/ML & IOT Development</li>
                    <li>Hire Remote Team</li>
                </ul>
            </div>

            {/* Technologies Section */}
            <div className="footer-section">
                <h4>Technologies</h4>
                <ul>
                    <li>Mobile App Technologies</li>
                    <li>Frontend Technologies</li>
                    <li>Backend Technologies</li>
                    <li>Full-Stack Technologies</li>
                    <li>Future Technologies</li>
                    <li>DevOps Technologies</li>
                </ul>
            </div>

            {/* Industries Section */}
            <div className="footer-section">
                <h4>Industries</h4>
                <ul>
                    <li>Startup Companies</li>
                    <li>Fintech Startups</li>
                    <li>ECommerce Businesses</li>
                    <li>Retail Industry</li>
                    <li>Advertising Agencies</li>
                    <li>Education Institutions</li>
                </ul>
            </div>

            {/* Contact Section */}
            <div className="footer-section contact">
                <h4>Contact Us</h4>
                <p style={{color:'white'}}><strong>EnactSoft Sales:</strong> +91 74260 60610</p>
                <p style={{color:'white'}}><strong>Couponated Sales:</strong> +91 94038 90058</p>
                <p style={{color:'white'}}><strong>HR/Corporate Enquiry:</strong> +91 90790 45453</p>
            </div>
        </footer>

    </>
  )
}

export default Footer