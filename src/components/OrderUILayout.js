import React from "react";
import backArrow from "../assets/icon-back.png";
import warningIcon from "../assets/icon-warn.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../styles/order.css";
import rightArrow from "../assets/icon-right.png";
import Toggler from "./Toggler";
import CurrentOrder from "./Cart/CurrentOrder";
import PreviousOrder from "./Cart/PreviousOrder";
import { removeItemFromCart, resetCart } from "../redux/cartSlice";

const OrderUILayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  const goBackHandler = () => {
    navigate(-1);
  };

  const placeOrderHandler = () => {
    let localData = localStorage.getItem("order");
    if (localData) {
      localData = JSON.parse(localData);
      for (let key in localData) {
        if (items[key]) {
          localData[key].quantity =
            localData[key].quantity + items[key].quantity;
          dispatch(removeItemFromCart({ id: +key }));
        }
      }
      for (let key in items) {
        if (!localData[key]) {
          localData[key] = items[key];
        }
      }

      localStorage.setItem("order", JSON.stringify(localData));
    } else {
      localStorage.setItem("order", JSON.stringify(items));
    }
    dispatch(resetCart());
    navigate('/');
  };

  return (
    <div className="order-ui-container">
      <header className="order-header flex justify-between items-center p-normal">
        <div className="flex items-center">
          <img src={backArrow} alt="back-arrow" onClick={goBackHandler} />
          <h4>Place Order</h4>
        </div>
        <div>
          <img src={warningIcon} alt="warning-icon" />
        </div>
      </header>
      <div>
        <Toggler
          Component={CurrentOrder}
          isOpen={true}
          title={"Current Order"}
        />
        <br />
        <Toggler
          Component={PreviousOrder}
          isOpen={false}
          title={"Previous Order"}
        />
      </div>
      {Object.keys(items)?.length > 0 && (
        <button
          className="order-btn flex items-center justify-between"
          onClick={placeOrderHandler}
        >
          <span>{Object.keys(items)?.length} Items</span>
          <div className="flex items-center">
            <span className="place-order-text">PLACE ORDER</span>
            <img src={rightArrow} alt="right-arrow" />
          </div>
        </button>
      )}
    </div>
  );
};

export default OrderUILayout;
