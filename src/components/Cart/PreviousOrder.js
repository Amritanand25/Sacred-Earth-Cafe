import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";

const PreviousOrder = () => {
  const [totalList, setTotalList] = useState([]);
  let localData = localStorage.getItem("order");

  useEffect(() => {
    if (localData) {
      let temp = JSON.parse(localData);
      setTotalList(Object.values(temp));
    }
  }, [localData]);

  if (totalList.length < 1) {
    return <span>No Data</span>;
  }

  return (
    <div className="order-container">
      {totalList?.map((item) => (
        <OrderItem {...item} key={item.id} type="previous" />
      ))}
    </div>
  );
};

export default PreviousOrder;
