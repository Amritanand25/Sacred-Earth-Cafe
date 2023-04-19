import React, { useEffect, useState } from "react";
import upArrow from "../assets/up.png";
import downArrow from "../assets/down.png";

const Toggler = ({ isOpen, Component, title }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between p-normal mt-1"
      >
        <h3 className="font-small weight-500">{title}</h3>
        <div className="w-60 border-gray"></div>
        <div>
          <img src={open ? upArrow : downArrow} alt="toggle-icon" />
        </div>
      </div>
      <div className="p-normal">{open && <Component />}</div>
    </div>
  );
};

export default Toggler;
