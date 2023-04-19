import React from "react";
import "../styles/UILayout.css";
import Header from "./Header";
import Tabs from "./Tabs";
import FooterTab from "./FooterTab";

const UILayout = ({ Component }) => {
  return (
    <div className="se-ui-container">
      <div className="shadow">
        <Header />
        <Tabs />
      </div>
      <Component />
      <FooterTab />
    </div>
  );
};

export default UILayout;
