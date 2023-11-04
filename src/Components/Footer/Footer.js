import logo from "../Header/abm-logo.svg";
import { Link } from "react-router-dom";

import "./Footer.scss";

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
            <li className="col-link">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="col-link">
              <Link to={"/book"}>Book</Link>
            </li>
          </ul>
        </div>
        <div className="thirdCol">
          <span className="col-heading">Services</span>
          <ul>
            <li className="col-link">
              <Link to={"/makeup"}>Makeup</Link>
            </li>
            <li className="col-link">
              <Link to={"/bridal"}>Bridal</Link>
            </li>
            <li className="col-link">
              <Link to={"/sfx"}>SFX</Link>
            </li>
            <li className="col-link">
              <Link to={"/art"}>Art</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
