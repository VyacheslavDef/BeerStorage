import React from "react";
import { Link } from "react-router-dom";
import Cup from "./Cup";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left"></div>
      <div className="header_center">
        <ul className="header_center_items">
          <li>
            <Link to={"/test-on-react"}>Главная</Link>
          </li>
          <li>
            <Link to={"/test-on-react/faworits"}>Избранное</Link>
          </li>
        </ul>
      </div>
      <div className="header_right">
        <Cup/>
      </div>
    </div>
  );
};

export default Header;
