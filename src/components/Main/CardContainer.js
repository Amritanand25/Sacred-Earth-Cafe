import React from "react";
import Toggler from "../Toggler";
import Card from "./Card";

const CardContainer = ({ item, isOpen }) => {

  const Component = () => {
    return (
      <div>
        {item.products?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    );
  };

  return <div>
   {
    <Toggler title={item.title} Component={Component} isOpen={isOpen} />
   }
  </div>;
};

export default CardContainer;
