import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./Header.scss";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    document.querySelector("ion-icon").classList.toggle("reverse");
  };

  return (
    <nav>
      <ul>
        <li className="nav-link">
          <div className="border">
            <a href="/">Home</a>
          </div>
        </li>
        <li className="nav-link">
          <button className="dd-btn" onClick={handleOpen}>
            <div className="border work-link">
              My Work
              <ion-icon
                name="chevron-down-outline"
                className="down-arrow"
              ></ion-icon>
            </div>
          </button>
          {open ? <Dropdown /> : null}
        </li>
        <li className="nav-link">
          <div className="border">
            <a href="/">Book</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
