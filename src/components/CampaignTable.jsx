import React, { useState } from "react";
import {
  FaUserFriends,
  FaEnvelope,
  FaCheck,
  FaChevronDown,
  FaPlay,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { MdDelete, MdDetails, MdOutlineInfo, MdOutlinePlayArrow } from "react-icons/md";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { RiDeleteBin5Fill } from "react-icons/ri";

function CampaignTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSelectCampaignOpen, setIsSelectCampaignOpen] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const campaigns = [
    {
      name: "Grow Connection",
      createdDate: "August 2014",
      status: "Draft",
      totalLeads: 50,
      invitesSent: 50,
      connections: 50,
    },
    {
      name: "Canadian House",
      createdDate: "December 2020",
      status: " Draft",
      totalLeads: 50,
      invitesSent: 50,
      connections: 50,
    },
    {
      name: "Real State",
      createdDate: "June 2018",
      status: " Draft",
      totalLeads: 50,
      invitesSent: 50,
      connections: 50,
    },
    {
      name: "Book Writer",
      createdDate: "January 2023",
      status: "Draft",
      totalLeads: 50,
      invitesSent: 50,
      connections: 50,
    },
    {
      name: "Grow Connection",
      createdDate: "March 2021",
      status: " Draft",
      totalLeads: 50,
      invitesSent: 50,
      connections: 50,
    },
    {
      name: "Real State",
      createdDate: "September 2019",
      status: "Draft",
      totalLeads: 50,
      invitesSent: 50,
      connections: 50,
    },
    {
      name: "Grow Connection",
      createdDate: "April 2022",
      status: " Draft",
      totalLeads: 50,
      invitesSent: 50,
      connections: 50,
    },
    {
      name: "Year-End Clearance Push",
      createdDate: "November 2017",
      status: " Draft",
      totalLeads: 50,
      invitesSent: 50,
      connections: 50,
    },
    {
      name: "Grow Connection",
      createdDate: "July 2020",
      status: "Draft",
      totalLeads: 50,
      invitesSent: 50,
      connections: 50,
    },
    {
      name: "Real State",
      createdDate: "May 2016",
      status: " Draft",
      totalLeads: 50,
      invitesSent: 50,
      connections: 50,
    },
  ];

  const toggleSelectCampaignDropdown = () => {
    setIsSelectCampaignOpen(!isSelectCampaignOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  // Filter campaigns based on the search term
  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredCampaigns.length / itemsPerPage);
  const paginatedCampaigns = filteredCampaigns.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search Campaign"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Filter Button */}
          <button className="border border-gray-300 rounded-lg px-4 py-2 text-sm flex items-center gap-2">
            Filter by
            <FaChevronDown className="text-gray-600" />
          </button>
          {/* Select Campaign Dropdown */}
          <div className="relative">
            <button
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm flex items-center gap-2"
              onClick={toggleSelectCampaignDropdown}
            >
              Select Campaign
              <FaChevronDown className="text-gray-600" />
            </button>
            {isSelectCampaignOpen && (
              <div className="absolute top-full left-0 mt-1 w-60 bg-white border rounded shadow-lg z-10">
                <div className="p-2 border-b">
                  <input
                    type="text"
                    placeholder="Search Campaign"
                    className="w-full px-3 py-2 border rounded text-sm focus:outline-blue-500"
                  />
                </div>
                <ul className="list-none p-0 max-h-48 overflow-y-auto">
                  {filteredCampaigns.length > 0 ? (
                    filteredCampaigns.map((campaign, index) => (
                      <li
                        key={index}
                        className="hover:bg-gray-100 px-4 py-2 text-sm text-gray-700 flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox text-blue-600 border-gray-300 rounded"
                        />
                        {campaign.name}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-sm text-gray-500">
                      No campaigns found.
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
        <button className="bg-blue-600 text-white rounded-lg px-6 py-2 text-sm">
          + Create Campaign
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow">
        <table className="w-full table-auto border-collapse text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-3 px-4">NAME</th>
              <th className="py-3 px-4">STATUS</th>
              <th className="py-3 px-4">TOTAL LEAD</th>
              <th className="py-3 px-4">INVITE SENT</th>
              <th className="py-3 px-4">CONNECTION</th>
              <th className="py-3 px-4">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCampaigns.map((campaign, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition duration-150"
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <ImStatsDots className="text-blue-500" />
                    <div>
                      <div className="font-medium">{campaign.name}</div>
                      <div className="text-xs text-gray-500">
                        Created in {campaign.createdDate}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="bg-gray-200 text-xs px-3 py-1 rounded-full">
                    {campaign.status}
                  </span>
                </td>
                <td className="py-3 pl-16 items-center">
                  <div className="flex items-center space-x-1">
                    <FaUserFriends className="text-gray-600" />
                    <span>{campaign.totalLeads}</span>
                  </div>
                </td>
                <td className="py-3 pl-16 items-center">
                  <div className="flex items-center space-x-1">
                    <FaEnvelope className="text-gray-600" />
                    <span>{campaign.invitesSent}</span>
                  </div>
                </td>

                <td className="py-3 pl-16 items-center">
                  <div className="flex items-center space-x-1">
                    <FaCheck className="text-gray-600" />
                    <span>{campaign.connections}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-center relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <BsThreeDotsVertical />
                  </button>
                  {dropdownIndex === index && (
                    <div className="absolute right-0 mt-2 w-60 bg-white border rounded shadow-lg z-10">
                      <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                        <HiAdjustmentsHorizontal className="mr-2" />
                        Go to Details
                      </button>
                      <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                        <FaPlay className="mr-2" />
                        Start Campaign
                      </button>
                      <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-100 w-full">
                        <RiDeleteBin5Fill className="mr-2" />
                        Delete Campaign
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <span>
          Showing {currentPage} of {totalPages}
        </span>
        <div className="flex gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`border px-4 py-2 rounded-lg ${
              currentPage === 1 ? "text-gray-400" : "text-black"
            }`}
          >
            Previous
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={`border px-4 py-2 rounded-lg ${
              currentPage === totalPages ? "text-gray-400" : "text-black"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampaignTable;
