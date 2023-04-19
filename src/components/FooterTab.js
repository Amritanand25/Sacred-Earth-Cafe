import React from "react";
import { useSelector } from "react-redux";
import "../styles/footer-tab.css";
import { Link } from "react-router-dom";
import readIcon from "../assets/icon-read.png";
import cartIcon from "../assets/icon-cart.png";
import userIcon from "../assets/icon-user.png";

const FooterTab = () => {
  const items = useSelector((store) => store.cart.items);
  return (
    <div className="footer-tab">
      <div className="footer-item">
        <Link to='/'><img src={userIcon} alt="user-icon" /></Link>
      </div>
      <div className="footer-item">
        <Link to='/'> <img src={readIcon} alt="read-icon" /></Link>
      </div>
      <Link to="/cart">
        <div className="footer-item cart-container">
          {Object.keys(items)?.length > 0 && (
            <span className="cart">{Object.keys(items).length}</span>
          )}
          <img src={cartIcon} alt="cart-icon" />
        </div>
      </Link>
    </div>
  );
};

export default FooterTab;
