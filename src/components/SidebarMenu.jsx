// SidebarMenu.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const SidebarMenu = ({ menusItem }) => {
    const [activeMenuItem, setActiveMenuItem] = useState(menusItem[0].label); // Initial activeMenuItem

    const handleClick = (item) => {
      setActiveMenuItem(item); // Update state on click
    };
    useEffect(() => {
        // Check for initial state mismatch
        if (activeMenuItem !== menusItem.find((menu) => menu.link === window.location.pathname).label) {
        setActiveMenuItem(menusItem.find((menu) => menu.link === window.location.pathname).label);
        }
    }, []);
     // Run once on mount
return (
    <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        {menusItem.map((menu, index) => (
        <li key={index}>
            <Link
            to={menu.link}
            onClick={() => {
                handleClick(menu.label);
            }}
            className={activeMenuItem === menu.label ? 'font-bold' : ''}
            >
            {menu.label}
            </Link>
        </li>
        ))}
    </ul>
    </div>
);
};

export default SidebarMenu;
