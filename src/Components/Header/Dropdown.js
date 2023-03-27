import React from "react";
import "./Header.scss";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div id="myDropdown" className="dropdown-content">
        <ul>
          <li>
            <div className="dd-link">
              <a href="/" className="menu-link">
                Makeup
              </a>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </li>
          <li>
            <div className="dd-link">
              <a href="/" className="menu-link">
                SFX
              </a>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </li>
          <li>
            <div className="dd-link">
              <a href="/" className="menu-link">
                Art
              </a>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </li>
          <li>
            <div className="dd-link">
              <a href="/" className="menu-link">
                Theater
              </a>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
