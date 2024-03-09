import { useState } from "react";
import Nav from "./Nav";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "./abm-logo.svg";
import menu from "./menu.svg";
import ResponsiveNav from "./ResponsiveNav";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    document.querySelector("ion-icon").classList.toggle("reverse");
  };

  return (
    <div className="header">
      <header>
        <Link to={"/"}>
          <img src={logo} alt="Artistry by Mel logo" className="logo" />
        </Link>
        <Nav />
        <div className="menu-container" onClick={handleOpen}>
          <img src={menu} alt="Icon of a menu" className="menu-icon" />
          {open ? <ResponsiveNav /> : null}
        </div>
      </header>
    </div>
  );
};

export default Header;
