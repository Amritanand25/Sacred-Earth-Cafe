import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import "../../styles/order.css";

const CurrentOrder = () => {
  const [totalList, setTotalList] = useState([]);
  const items = useSelector((store) => store.cart.items);
  useEffect(() => {
    setTotalList(Object.values(items));
  }, [items]);
  return (
    <div className="order-container">
      {totalList?.map((item) => (
        <OrderItem {...item} key={item.id} type="current" />
      ))}
    </div>
  );
};

export default CurrentOrder;
