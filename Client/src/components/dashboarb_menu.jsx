import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Home, Grid, ChevronRight, Layers, Paintbrush, Box, Palette, Menu as MenuIcon, LogOut, Video } from 'lucide-react';
import janedoe from '../assets/images/steptodown.com755174.jpg'


const MenuItem = ({ icon: Icon, label, to, isActive }) => (
  <Link to={to} className={`flex flex-row items-center gap-2 p-3 text-gray-300 hover:bg-gray-700 rounded-lg cursor-pointer bg-gray-700' }`}>
    <Icon size={24} />
    <span className="text-xs text-center">{label}</span>
  </Link>
);

const UserInfo = () => (
  <div className="flex flex-col items-center mt-auto pt-4 border-t border-gray-700">
    <div className="flex flex-col items-center gap-2">
      <img src={janedoe} alt="User" className="w-10 h-10 rounded-full bg-gray-600" />
      <span className="text-sm text-gray-300">Jane Doe</span>
    </div>
    <button className="flex items-center gap-2 px-4 py-2 mt-2 text-sm text-gray-300 bg-gray-700 rounded-lg hover:bg-gray-600">
      <LogOut size={16} />
      <span>Logout</span>
    </button>
  </div>
);

const SideMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: Grid, label: 'Dashboard', to: ' ' },
    { icon: Video, label: 'Online Class', to: 'video_meeting' },
    { icon: Box, label: 'Learning', to: 'courses' },
    { icon: Palette, label: 'Tokens', to: 'games' },
  ];

  return (
    <div className="relative h-full flex flex-col">
      {/* Mobile menu toggle button */}
      <button 
        className="lg:hidden p-2 bg-gray-800 rounded-md"
        onClick={toggleMobileMenu}
      >
        <MenuIcon className="text-white" size={24} />
      </button>
      
      {/* Side menu */}
      <div className={`flex flex-col w-full h-full bg-gray-800 text-white p-4 transition-all duration-300 ease-in-out overflow-y-auto ${mobileOpen ? 'block' : 'hidden lg:block'}`}>
        <div className="mb-6">
          <div className="bg-gray-700 p-2 rounded-lg w-full">
            <Search className="text-gray-400 mx-auto" size={24} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-2">
          {menuItems.map((item, index) => (
            <MenuItem 
              key={index} 
              icon={item.icon} 
              label={item.label} 
              to={item.to}
              isActive={location.pathname === item.to}
            />
          ))}
        </div>
        <UserInfo />
      </div>
    </div>
  );
};

export default SideMenu;
