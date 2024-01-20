import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to={"/"} className="link">
              <h2>Home</h2>
            </Link>
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
            <Link to={"/book"} className="link">
              <h2>Book</h2>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
