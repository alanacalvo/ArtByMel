import Nav from "./Nav";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "./abm-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <header>
        <Link to={"/"}>
          <img src={logo} alt="Artistry by Mel logo" className="logo" />
        </Link>
        <Nav />
      </header>
    </div>
  );
};

export default Header;
