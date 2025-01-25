import React from 'react';

interface MenuItem {
  label: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const handleOnClick = (menuItem: string) => {
    console.log(`${menuItem} is clicked`);
  };

  return (
    <div className="flex-none sidebar bg-gray-800 text-white p-4 w-64 h-full" key="sidebar">
      <ul className="menu space-y-4">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <a
              href="#"
              onClick={() => handleOnClick(item.label)}  // Pass item.label to the handler
              className="flex items-center p-2 rounded-md hover:bg-gray-700"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
