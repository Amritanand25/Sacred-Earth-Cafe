import React, { useEffect, useState } from "react";
import { headerTabs } from "../data/headerTabs";
import { Link, useLocation } from "react-router-dom";
import "../styles/Utils/utils.css";
import "../styles/Tab.css";
import { getActiveRouter } from "../utils/helper";

const Tabs = () => {
  const location = useLocation();
  const [tabs, setTabs] = useState(headerTabs);

  useEffect(() => {
    setTabs(getActiveRouter(location.pathname, headerTabs));
  }, [location]);

  return (
    <div className="bg-light-gray">
      <ul className="flex items-center justify-between pt-1 tab-container">
        {tabs.map((item) => (
          <li key={item.id} className={`li-style-none tab-item p-normal ${item.active ? "active" : "non-active"}`}>
            <Link to={item.route}>{item.tab}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
