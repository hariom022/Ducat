import React from "react";
import "./Header.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Header = () => {
  return (
    <div className="header-container">
      <div className="social-icon">
        <ul className="social">
          <li>
            <FacebookIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <LinkedInIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <YouTubeIcon />
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <ul className="contact">
          <li>
            <WhatsAppIcon />
            <span>+91 9026894022</span>
          </li>
          <li>
            <CallIcon />
            <span>+91 9026894022</span>
          </li>
          <li>
            <EmailIcon />
            <span>hariommaurya022@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
