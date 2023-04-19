import React from "react";
import { main } from "../../data/main";
import CardContainer from "./CardContainer";

const MainContainer = () => {
  return (
    <div>
      {main.map((item, i) => (
        <div key={item.title}>
          <CardContainer item={item} isOpen={i===0 ? true : false} />
        </div>
      ))}
    </div>
  );
};

export default MainContainer;
