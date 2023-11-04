import React from "react";
import "./Footer.scss";
import logo from "../Header/abm-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="cols">
        <div className="firstCol">
          <img src={logo} alt="Artistry by Mel logo" className="footer-logo" />
          <p>Copyright © {currentYear}</p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/makeupbymelvinn/?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-instagram" className="instagram" />
            </a>
            <a
              href="https://www.facebook.com/melvin.abraham.5"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-facebook" className="facebook" />
            </a>
          </div>
        </div>
        <div className="secondCol">
          <span className="col-heading">Main</span>
          <ul>
            <li className="col-link">Home</li>
            <li className="col-link">Book</li>
          </ul>
        </div>
        <div className="thirdCol">
          <span className="col-heading">Services</span>
          <ul>
            <li className="col-link">Makeup</li>
            <li className="col-link">SFX</li>
            <li className="col-link">Art</li>
            <li className="col-link">Bridal</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
