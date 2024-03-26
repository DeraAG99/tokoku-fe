import React, { useState } from 'react';
import Kategpri from '../pages/admin/Kategori';

const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');

  const handleClick = (item) => {
    setActiveMenuItem(item);
  };

  const contentMap = {
    Dashboard: (
      <div>
        <h1>Dashboard</h1>
        <p>Selamat datang di dashboard!</p>
      </div>
    ),
    Kategori: (
      <Kategpri/>
    ),
    Produk: (
      <div>
        <h1>Daftar Produk</h1>
        <ul>
          <li>TV</li>
          <li>Baju</li>
          <li>Beras</li>
        </ul>
      </div>
    ),
    Profile: (
      <div>
        <h1>Profile Pengguna</h1>
        <p>Nama: John Doe</p>
        <p>Email: john.doe@example.com</p>
      </div>
    ),
    Logout: (
      <div>
        <h1>Logout</h1>
        <p>Apakah Anda yakin ingin logout?</p>
        <button>Ya, Logout</button>
      </div>
    ),
  };

  const activeContent = contentMap[activeMenuItem];

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Menu</label>
         <div className='p-4'>
          {activeContent}   
         </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li onClick={() => handleClick('Dashboard')}>
            <a>Dashboard</a>
          </li>
          <li onClick={() => handleClick('Kategori')}>
            <a>Kategori</a>
          </li>
          <li onClick={() => handleClick('Produk')}>
            <a>Produk</a>
          </li>
          <li onClick={() => handleClick('Profile')}>
            <a>Profile</a>
          </li>
          <li onClick={() => handleClick('Logout')}>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
