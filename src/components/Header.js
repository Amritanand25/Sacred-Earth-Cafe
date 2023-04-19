import React from "react";
import "../styles/Utils/utils.css";
import logo from "../assets/logo.svg";
import code from "../assets/icon-code.png";
import waiter from "../assets/icon-waiter.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-light-gray p-normal flex-wrap">
      <Link to="/">
        <div className="flex logo">
          <img src={logo} alt="Sacred Earth Cafe - logo" />
          <h2 className="font-normal weight-600 ml-1">Sacred Earth Cafe</h2>
        </div>
      </Link>
      <div>
        <img src={waiter} alt="Waiter" />
        <img className="ml-1" src={code} alt="Code" />
      </div>
    </header>
  );
};

export default Header;
