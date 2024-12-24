import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { RiMenu5Fill } from "react-icons/ri";
import { FiChevronDown, FiChevronRight, FiChevronUp, FiSearch } from "react-icons/fi";
import arif2 from "../assets/users/Untitled design (7).png";

function Connections() {
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showJobTitleDropdown, setShowJobTitleDropdown] = useState(false);
  const [companySearch, setCompanySearch] = useState("");
  const [jobTitleSearch, setJobTitleSearch] = useState("");

  const companyList = ["Grow Connection", "Real Estate", "Campaign Growth"];
  const jobTitleList = ["Designer", "Product Manager", "Engineer", "UX Researcher"];

  const filteredCompanies = companyList.filter((company) =>
    company.toLowerCase().includes(companySearch.toLowerCase())
  );

  const filteredJobTitles = jobTitleList.filter((title) =>
    title.toLowerCase().includes(jobTitleSearch.toLowerCase())
  );

  const toggleCompanyDropdown = () => {
    setShowCompanyDropdown(!showCompanyDropdown);
  };

  const toggleJobTitleDropdown = () => {
    setShowJobTitleDropdown(!showJobTitleDropdown);
  };

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

        {/* Company Dropdown */}
        <div className="mb-6">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={toggleCompanyDropdown}
          >
            <h3 className="text-sm font-medium">Company</h3>
            {showCompanyDropdown ? (
              <FiChevronUp className="text-lg text-gray-500" />
            ) : (
              <FiChevronRight className="text-lg text-gray-500" />
            )}
          </div>

          {showCompanyDropdown && (
            <div className="mt-4 bg-gray-100 p-3 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <FiSearch className="text-gray-400 w-5 h-5 absolute ml-3" />
                <input
                  type="text"
                  placeholder="Search company"
                  value={companySearch}
                  onChange={(e) => setCompanySearch(e.target.value)}
                  className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <ul className="space-y-2">
                {filteredCompanies.length > 0 ? (
                  filteredCompanies.map((company, index) => (
                    <li key={index} className="text-sm flex items-center">
                      <input
                        type="radio"
                        name="company"
                        id={`company-${index}`}
                        className="mr-2"
                      />
                      <label htmlFor={`company-${index}`} className="cursor-pointer">
                        {company}
                      </label>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-500">No results found</li>
                )}
              </ul>
              <button className="text-blue-500 text-sm mt-3">Show all →</button>
            </div>
          )}
        </div>

        {/* Job Title Dropdown */}
        <div className="mb-6">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={toggleJobTitleDropdown}
          >
            <h3 className="text-sm font-medium">Job Title</h3>
            {showJobTitleDropdown ? (
              <FiChevronUp className="text-lg text-gray-500" />
            ) : (
              <FiChevronRight className="text-lg text-gray-500" />
            )}
          </div>

          {showJobTitleDropdown && (
            <div className="mt-4 bg-gray-100 p-3 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <FiSearch className="text-gray-400 w-5 h-5 absolute ml-3" />
                <input
                  type="text"
                  placeholder="Search job title"
                  value={jobTitleSearch}
                  onChange={(e) => setJobTitleSearch(e.target.value)}
                  className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <ul className="space-y-2">
                {filteredJobTitles.length > 0 ? (
                  filteredJobTitles.map((title, index) => (
                    <li key={index} className="text-sm flex items-center">
                      <input
                        type="radio"
                        name="jobTitle"
                        id={`jobTitle-${index}`}
                        className="mr-2"
                      />
                      <label htmlFor={`jobTitle-${index}`} className="cursor-pointer">
                        {title}
                      </label>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-500">No results found</li>
                )}
              </ul>
              <button className="text-blue-500 text-sm mt-3">Show all →</button>
            </div>
          )}
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
                  src={arif2}
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
