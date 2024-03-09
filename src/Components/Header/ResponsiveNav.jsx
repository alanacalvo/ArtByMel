import { Link } from "react-router-dom";
import close from "./close.svg";
import "./ResponsiveNav.scss";

const ResponsiveNav = () => {
  return (
    <div className="responsive-container">
      <nav id="responsive">
        <ul>
          <li className="nav-link">
            <Link to={"/"} className="link">
              <h2>Home</h2>
            </Link>
          </li>
          <li className="nav-link">
            <Link to={"/makeup"} className="link">
              <h2>Makeup</h2>
            </Link>
          </li>
          <li className="nav-link">
            <Link to={"/bridal"} className="link">
              <h2>Bridal</h2>
            </Link>
          </li>
          <li className="nav-link">
            <Link to={"/sfx"} className="link">
              <h2>SFX</h2>
            </Link>
          </li>
          <li className="nav-link">
            <Link to={"/art"} className="link">
              <h2>Art</h2>
            </Link>
          </li>
          <li className="nav-link">
            <Link to={"/book"} className="link">
              <h2>Book</h2>
            </Link>
          </li>
        </ul>
        <img src={close} alt="Close icon" className="close-btn" />
      </nav>
    </div>
  );
};

export default ResponsiveNav;
