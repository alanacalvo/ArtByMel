import React from "react";
import "./Header.scss";
import logo from "./abm-logo.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header">
      <header>
        <img src={logo} alt="Artistry by Mel logo" className="logo" />
        <Nav />
      </header>
    </div>
  );
};

export default Header;
