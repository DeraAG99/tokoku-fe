import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { adminMenus } from "../Menus/adminMenus";

const Mainpage = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar renderContent={children} menus={adminMenus} />
    </div>
  );
};
export default Mainpage;
