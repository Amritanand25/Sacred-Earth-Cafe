import React from "react";
import "../../styles/card-container.css";
import plusIcon from "../../assets/icon-plus.png";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, addMoreItem, removeMoreItem } from "../../redux/cartSlice";
import minusIcon from "../../assets/icon-minus.png";

const Card = ({ src, isVeg, title, id, price }) => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);

  const addToCartHandler = () => {
    dispatch(addItemToCart({ id, src, isVeg, price, title, quantity: 1 }));
  };

  const decrementCartItemHandler = () => {
    dispatch(removeMoreItem({id: id}));
  }

  const incrementCartItemHandler = () => {
    dispatch(addMoreItem({id: id}));
  }
  
  return (
    <div className="card-container">
      <div>
        <img src={src} alt={title} />
      </div>
      <div className="card-details">
        <div className="flex items-center">
          <span className={isVeg ? "veg" : "non-veg"}>
            <span></span>
          </span>
          <h4 className="title">{title}</h4>
        </div>
        <div className="flex justify-between mt-1 items-center">
          <span>&#8377; {price}</span>
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
            <button
              className="flex items-center btn"
            >
              <span>
                <img src={minusIcon} alt="minus-icon" onClick={decrementCartItemHandler} />
              </span>
              <span className="item-data">{items[id].quantity}</span>
              <span>
                <img src={plusIcon} alt="plus-icon" onClick={incrementCartItemHandler} />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
