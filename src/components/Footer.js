import "./FooterStyles.css";
import React from 'react'
import {FaFacebook, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                     <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                     <div>
                        <p>227/A1 Vellimalai Kovil street.</p>
                        <p>Arasur, Sathyamangalam</p>
                     </div>
                 </div>
                 <div className="phone">
                     <h4>
                      <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                       9360453130
                      </h4> 
                </div>
                <div className="email">
                    <h4>
                     <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                      balaarupeni451@gmail.com
                    </h4> 
                </div>
            </div>
       <div className="right">
            <p>You may also reach me at</p>
            <div className="social">
              <Link to="https://www.facebook.com/harirupe.harirupe?mibextid=ZbWKwL"><FaFacebook size={20} style={{color:"#fff", marginRight:"1rem"}}/></Link>
              
              <Link to="https://twitter.com/rupeni_s?t=2feEh0LUQhCZ4nzdYxjvAA&s=09"><FaTwitter size={20} style={{color:"#fff", marginRight:"1rem"}}/></Link>
              
              <Link to="https://www.linkedin.com/in/balaa-rupeni-s"><FaLinkedinIn size={20} style={{color:"#fff", marginRight:"1rem"}}/></Link>
              
            </div>
        </div>  
     </div>   
</div>
  );
};

export default Footer

