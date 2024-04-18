// SidebarContent.jsx
import React from 'react';

const SidebarContent = ({ renderContent }) => {
  return (
    <div className="drawer-content flex flex-col">
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Menu</label>
      <div className="p-4">
        {renderContent}
      </div>
    </div>
  );
};

export default SidebarContent;
