import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left"><img src={logo} alt="" /></div>
      <div className="header_center">
        <ul className="header_center_items">
          <li>
            <Link to={"/BeerStorage"}>Главная</Link>
          </li>
          <li>
            <Link to={"/BeerStorage/faworits"}>Избранное</Link>
          </li>
        </ul>
      </div>
      <div className="header_right"></div>
    </div>
  );
};

export default Header;
