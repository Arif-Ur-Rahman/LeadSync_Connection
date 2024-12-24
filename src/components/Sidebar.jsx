import React, { useState } from "react";
import { FaHome, FaChartBar, FaCog, FaUser, FaEnvelope, FaProjectDiagram, FaAngleUp, FaAngleDown } from "react-icons/fa"; // Icons
import { AiOutlineTeam } from "react-icons/ai";
import logo from '../assets/logo/lead.png';
import user from '../assets/users/user1.png';

function Sidebar() {
  // State to track which menu is expanded
  const [expanded, setExpanded] = useState(null);

  // Menu items with icons and subitems
  const menuItems = [
    { name: "Analytics", icon: <FaChartBar />, subItems: ["Activity", "Team Stats"] },
    { name: "Campaign", icon: <FaEnvelope />, subItems: ["Campaign List", "New Campaign"] },
    { name: "CRM", icon: <FaUser />, subItems: ["Clients", "Deals"] },
    { name: "Replies", icon: <FaEnvelope />, subItems: [] },
    { name: "Projects", icon: <FaProjectDiagram />, subItems: ["Active Projects", "Archived"] },
    { name: "Extract Leads", icon: <FaHome />, subItems: [] },
    { name: "Settings", icon: <FaCog />, subItems: ["Integration", "Team Stats"] },
  ];

  // Toggles expanded state
  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="w-64 h-screen bg-gray-100 flex flex-col">
      {/* Logo */}
      <div className="flex items-center">
    {/* Replace with the actual path to your Leadsync logo image */}
    <img src={logo} alt="Leadsync Logo" className="w-8 h-8 ml-10" />
    <div className="pt-4 pb-4 pr-4 pl-2 font-bold text-xl text-black">Leadsync</div>
  </div>

      {/* Account Selector */}
      <div className="px-4 py-2">
        <label htmlFor="account" className="block text-sm text-gray-600 mb-1">
          Choose your Account
        </label>
        <select
          id="account"
          className="w-full border rounded p-2 text-sm focus:outline-blue-500"
        >
          <option>Project Name</option>
        </select>
      </div>

      {/* Menu Items */}
      <ul className="flex-grow  px-2">
        {menuItems.map((item, index) => (
          <li key={index} className="mb-2">
            <button
              onClick={() => toggleExpand(index)}
              className="flex justify-between items-center w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded"
            >
              <span className="flex items-center">
                <span className="mr-2 text-lg">{item.icon}</span> {item.name}
              </span>
              {item.subItems.length > 0 && (
                <span className="text-sm">
                  {expanded === index ? <FaAngleUp /> : <FaAngleDown />} 
                </span>
              )}
            </button>
            {expanded === index && item.subItems.length > 0 && (
              <ul className="ml-8 mt-1 text-gray-600 text-sm">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="py-1">
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Support Section */}
      <div className="p-4 border-t">
        <div className="text-sm text-gray-700">Support</div>
        <div className="mt-2 flex items-center">
          <img
            src={user}
            alt="User Avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <div className="text-sm font-medium">Dev</div>
            <div className="text-xs text-gray-500">dev@leadsync.ai</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;