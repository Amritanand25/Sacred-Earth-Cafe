import React from "react";
import plusIcon from "../../assets/icon-plus.png";
import "../../styles/Main.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  addMoreItem,
  removeMoreItem,
} from "../../redux/cartSlice";
import minusIcon from "../../assets/icon-minus.png";

const Card = ({ src, id, title, isVeg, price }) => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);

  const addToCartHandler = () => {
    dispatch(addItemToCart({ id, src, isVeg, price, title, quantity: 1 }));
  };

  const decrementCartItemHandler = () => {
    dispatch(removeMoreItem({ id: id }));
  };

  const incrementCartItemHandler = () => {
    dispatch(addMoreItem({ id: id }));
  };
  return (
    <div className="food-card-container flex p-1">
      {src && (
        <div>
          <img src={src} alt={title} />
        </div>
      )}
      <div className="ml-1 w-100">
        <h4>{title}</h4>
        <div className="flex justify-between mt-1 items-center">
          <div className="flex items-center card-details">
            <span className={isVeg ? "veg" : "non-veg"}>
              <span></span>
            </span>
            <span className="ml-1">&#8377; {price}</span>
          </div>
          {!items[id] && (
            <button
              className="flex items-center btn"
              onClick={addToCartHandler}
            >
              <span>
                <img src={plusIcon} alt="plus-icon" />
              </span>
              <span>Add</span>
            </button>
          )}
          {items[id] && (
            <button className="flex items-center btn">
              <span>
                <img
                  src={minusIcon}
                  alt="minus-icon"
                  onClick={decrementCartItemHandler}
                />
              </span>
              <span className="item-data">{items[id].quantity}</span>
              <span>
                <img
                  src={plusIcon}
                  alt="plus-icon"
                  onClick={incrementCartItemHandler}
                />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
