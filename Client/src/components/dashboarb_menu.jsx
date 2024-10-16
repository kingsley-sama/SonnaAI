import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Home, Grid, ChevronRight, Layers, Paintbrush, Box, Palette, Menu as MenuIcon, LogOut, Video } from 'lucide-react';

const MenuItem = ({ icon: Icon, label, to, isActive }) => (
  <Link to={to} className={`flex flex-row items-center gap-2 p-3 text-gray-300 hover:bg-gray-700 rounded-lg cursor-pointer ${isActive ? 'bg-gray-700' : ''}`}>
    <Icon size={24} />
    <span className="text-xs text-center">{label}</span>
  </Link>
);

const UserInfo = () => (
  <div className="flex flex-col items-center mt-auto pt-4 border-t border-gray-700">
    <div className="flex flex-col items-center gap-2">
      <img src="/api/placeholder/40/40" alt="User" className="w-10 h-10 rounded-full bg-gray-600" />
      <span className="text-sm text-gray-300">John Doe</span>
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
    { icon: Home, label: 'Dashboard', to: '/dashboard' },
    { icon: Video, label: 'Video Conference', to: '/video_meeting' },
    { icon: Box, label: 'Courses', to: '/courses' },
    { icon: Grid, label: 'Get started', to: '/get-started' },
    { icon: ChevronRight, label: 'Develop', to: '/develop' },
    { icon: Layers, label: 'Foundations', to: '/foundations' },
    { icon: Paintbrush, label: 'Styles', to: '/styles' },
    { icon: Palette, label: 'Tokens', to: '/dashboard/Games' },
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

// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Search, Home, Grid, ChevronRight, Layers, Paintbrush, Box, Palette, Menu as MenuIcon, LogOut, Video } from 'lucide-react';

// const MenuItem = ({ icon: Icon, label, to, isActive }) => (
//   <Link to={to} className={`flex flex-col items-center gap-2 p-3 text-gray-300 hover:bg-gray-700 rounded-lg cursor-pointer ${isActive ? 'bg-gray-700' : ''}`}>
//     <Icon size={24} />
//     <span className="text-xs text-center">{label}</span>
//   </Link>
// );

// const UserInfo = () => (
//   <div className="flex flex-col items-center mt-auto pt-4 border-t border-gray-700">
//     <div className="flex flex-col items-center gap-2">
//       <img src="/api/placeholder/40/40" alt="User" className="w-10 h-10 rounded-full bg-gray-600" />
//       <span className="text-sm text-gray-300">John Doe</span>
//     </div>
//     <button className="flex items-center gap-2 px-4 py-2 mt-2 text-sm text-gray-300 bg-gray-700 rounded-lg hover:bg-gray-600">
//       <LogOut size={16} />
//       <span>Logout</span>
//     </button>
//   </div>
// );

// const SideMenu = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const location = useLocation();

//   const toggleMobileMenu = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const menuItems = [
//     { icon: Home, label: 'Dashboard', to: '/dashboard' },
//     { icon: Video, label: 'Video Conference', to: 'video_meeting' },
//     { icon: Box, label: 'Courses', to: 'courses' },
//     { icon: Grid, label: 'Get started', to: '/get-started' },
//     { icon: ChevronRight, label: 'Develop', to: '/develop' },
//     { icon: Layers, label: 'Foundations', to: '/foundations' },
//     { icon: Paintbrush, label: 'Styles', to: '/styles' },
//     { icon: Palette, label: 'Tokens', to: 'dashboard/Games' },
//   ];

//   return (
//     <div className="relative h-full">
//       {/* Mobile menu toggle button */}
//       <button 
//         className="lg:hidden fixed top-4 left-4 z-20 p-2 bg-gray-800 rounded-md"
//         onClick={toggleMobileMenu}
//       >
//         <MenuIcon className="text-white" size={24} />
//       </button>
//       {/* Side menu */}
//       <div className={`
//         'translate-x-0' : '-translate-x-full'
//         lg:translate-x-0 fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white p-4 
//         transition-all duration-300 ease-in-out z-10 overflow-y-auto
//       `}>
//         <div className="mb-6">
//           <div className="bg-gray-700 p-2 rounded-lg w-full">
//             <Search className="text-gray-400 mx-auto" size={24} />
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-2">
//           {menuItems.map((item, index) => (
//             <MenuItem 
//               key={index} 
//               icon={item.icon} 
//               label={item.label} 
//               to={item.to}
//               isActive={location.pathname === item.to}
//             />
//           ))}
//         </div>
//         <UserInfo />
//       </div>
//     </div>
//   );
// };

// export default SideMenu;
