import React from "react";
import { BsLinkedin, BsThreeDotsVertical } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { RiMenu5Fill } from "react-icons/ri";

function Connections() {
  function Switch() {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
      setIsOn(!isOn);
    };
  }

  return (
    <div className="flex bg-gray-100 min-h-screen p-4">
      {/* Sidebar */}
      <div className="w-1/4 bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <RiMenu5Fill className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold">Filter</h2>
          </div>
          <button className="text-sm text-blue-500">View all</button>
        </div>
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-sm font-medium">Job Title</h3>
          <div className="flex items-center space-x-4">
            <span className="text-sm bg-gray-500 px-2 py-1 text-white rounded-full">
              3
            </span>
            <button className="text-sm text-red-500 flex items-center">
              Clear all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-sm font-medium">Company</h3>
          <button className="text-lg text-gray-500">›</button>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-sm font-medium">Job Title</h3>
          <button className="text-lg text-gray-500">›</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 ml-6">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search Connection"
            className="w-full border px-4 py-2 rounded-lg"
          />
        </div>

        {/* Connection Cards */}
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
            >
              {/* Left Section */}
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="profile"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-base font-semibold">Olivia Rhye</h3>
                  <p className="text-sm text-gray-500">
                    Lead UX Designer | Product Manager | Special Projects
                  </p>
                  <p className="text-sm text-gray-400">
                    Position: Director, Company: McDonald's
                  </p>
                  <p className="text-sm text-gray-400">
                    Connection on: Jan 4, 2024, Location: Andre Pradesh
                  </p>
                  <div className="flex mt-2 space-x-2">
                    <span className="text-xs bg-blue-100 text-blue-500 px-2 py-1 rounded-full">
                      Label
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-500 px-2 py-1 rounded-full">
                      Label
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-500 px-2 py-1 rounded-full">
                      +4
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex items-center">
                <button className="flex items-center justify-center w-7 h-7 rounded-full bg-cyan-700 text-white">
                  <FaLinkedinIn size={18} />
                </button>
                <div className="relative ml-4">
                  <input type="checkbox" className="sr-only" />
                  <div className="bg-gray-200 w-10 h-5 rounded-full shadow-inner"></div>
                  <div className="absolute top-0 left-0 w-5 h-5 rounded-full bg-white transform translate-x-0 transition duration-300"></div>
                </div>
                <button className="text-gray-400 ml-4">
                  <BsThreeDotsVertical />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Connections;
