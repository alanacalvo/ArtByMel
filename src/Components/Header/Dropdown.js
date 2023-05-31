import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div id="myDropdown" className="dropdown-content">
        <ul>
          <li>
            <div className="dd-link">
              {/* <a href="/" className="menu-link">
                Makeup
              </a> */}
              <Link to={"/"} className="menu-link">
                Makeup
              </Link>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </li>
          <li>
            <div className="dd-link">
              <Link to={"/sfx"} className="menu-link">
                SFX
              </Link>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </li>
          <li>
            <div className="dd-link">
              <Link to={"/art"} className="menu-link">
                Art
              </Link>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </li>
          <li>
            <div className="dd-link">
              <Link to={"/theatre"} className="menu-link">
                Theatre
              </Link>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
