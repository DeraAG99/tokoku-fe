import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ renderContent, menus }) => {
  // State untuk mengelola item menu yang sedang dipilih
  const [activeMenuItem, setActiveMenuItem] = useState('');

  // Fungsi untuk memperbarui state item menu yang aktif saat diklik
  const handleClick = (item) => {
    setActiveMenuItem(item);
  };

  useEffect(() => {
    // Check for initial state mismatch
    if (activeMenuItem !== menus.find((menu) => menu.link === window.location.pathname).label) {
      handleClick(menus.find((menu) => menu.link === window.location.pathname).label);
    }
  }, []); // Run once on mount

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Menu</label>
        <div className="p-4">
          {renderContent}
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {menus.map((menu, index) => (
            <li key={index}>
              <Link
                to={menu.link}
                onClick={() => handleClick(menu.label)}
                className={`${activeMenuItem === menu.label ? 'font-bold bg-base-100 shadow-md' : ''}`}
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
