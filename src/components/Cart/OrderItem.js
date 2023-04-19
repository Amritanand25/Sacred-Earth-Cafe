import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMoreItem, removeMoreItem } from "../../redux/cartSlice";
import minusIcon from "../../assets/icon-minus.png";
import plusIcon from "../../assets/icon-plus.png";

const OrderItem = ({ isVeg, title, id, price, src, type, quantity }) => {
  const dispatch = useDispatch();
  const store = useSelector(store => store.cart.items)
  const items = type === 'current' ? store : JSON.parse(localStorage.getItem('order'));

  const decrementCartItemHandler = () => {
    dispatch(removeMoreItem({ id: id }));
  };

  const incrementCartItemHandler = () => {
    dispatch(addMoreItem({ id: id }));
  };

  return (
    <div className="w-96 flex items-center m-1 justify-between">
      <div className="card-details flex items-center">
        <span className={isVeg ? "veg" : "non-veg"}>
          <span></span>
        </span>
        <div className="ml-1">
          <h4>{title}</h4>
          <span>&#8377; {price}</span>
        </div>
      </div>
      {
        type === 'current' && 
        <div>
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
      }
      {
        type === 'previous' && <span>{items[id].quantity}</span>
      }
    </div>
  );
};

export default OrderItem;
