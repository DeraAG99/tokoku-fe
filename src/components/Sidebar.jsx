// Sidebar.jsx
import React from 'react';
import SidebarContent from './SidebarContent';
import SidebarMenu from './SidebarMenu';

const Sidebar = ({ renderContent, menusItem}) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <SidebarContent renderContent={renderContent} />
      <SidebarMenu menusItem={menusItem} activeMenuItem={activeMenuItem} handleClick={handleClick} />
    </div>
  );
};

export default Sidebar;
