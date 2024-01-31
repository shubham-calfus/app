// ... (your existing imports)
"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import DoneIcon from "@mui/icons-material/Done";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchCompany() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [scrollbarVisible, setScrollbarVisible] = useState(true);
  const scrollContainerRef = useRef(null);

  const companyData = [
    { name: "AreaTrend.com" },
    { name: "Bodybuilding" },
    { name: "Phone Flipper" },
    { name: "time of America  a" },
    { name: "Speed Sourcing" },
    { name: "Triple T Trading" },
    { name: "Transformer" },
    { name: "call center" },
    { name: "Area of zone" },
    { name: "time of America" },
  ];

  const allCompanies = [
    { name: "The A. I. Root Company" },
    { name: "(DNDB)ATIRA DESIGNS PVT LTD" },
    { name: "10 Strawberry Street" },
    { name: "14 Karat Home Inc" },
    { name: "24/7 Comfort Apparel" },
    { name: "3D CAM PAZARLAMA SANAYI VE TICARET " },
    { name: "88 International" },
    { name: "14 Karat Home" },
    { name: "The A. I.  Company" },
    { name: "Body Gain" },
    { name: "88 International systems" },
    { name: "The I. Root Company" },
    { name: "Trends.com" },
    { name: "14 Katy Jones Ltd" },
  ];

  const filteredCompanyData = companyData.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAllCompanies = allCompanies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCompanyClick = (company) => {
    setSelectedCompany((prevSelectedCompany) =>
      prevSelectedCompany && prevSelectedCompany.name === company.name
        ? null
        : company
    );
  };

  return (
    <>
      <div className="w-[346px]  h-[616px] py-4 bg-white rounded-lg shadow flex-col justify-start items-start inline-flex overflow-x-auto scrollbar-w-0.5 scrollbar-track-gray-100 scrollbar-thumb-gray-500">
        {/* Search Bar */}
        <div className="relative w-[100%] px-6  flex items-center ">
          <div className="absolute left-3 top-2 text-gray-500 ">
            <SearchIcon className="w-6 h-6 ml-7 gap-0 fill-current" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for companies..."
            className="h-9 px-11 py-2 bg-gray-100 rounded-md text-black-500 text-sm font-normal font-sans leading-tight w-full"
          />
        </div>

        {/* Recent Company Data */}
        {/* Most Recent Heading */}
        <div className="h-10 px-4 py-2  bg-white justify-start items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
            <div className="text-gray-500 mt-4 text-xs font-medium  leading-none">
              Most Recent
            </div>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className={`overflow-y-auto scrollbar-w-0.5 w-[100%] ${
            scrollbarVisible
              ? "scrollbar-track-gray-100 scrollbar-thumb-gray-500"
              : "scrollbar-hidden"
          }`}
        >
          {filteredCompanyData.map((company, index) => (
            <div
              key={index}
              className={`self-stretch h-10 px-4 py-2 bg-white justify-start items-center gap-2 cursor-pointer`}
              onClick={() => handleCompanyClick(company)}
            >
              <div className="grow shrink basis-0 w-[100%] flex-col justify-center items-start gap-0.5 inline-flex">
                <div
                  className={`w-[100%]  flex justify-between text-sm font-normal leading-tight`}
                >
                  <span
                    style={{
                      color:
                        selectedCompany && selectedCompany.name === company.name
                          ? "#007BFF"
                          : "",
                    }}
                  >
                    {company.name}
                  </span>
                  {selectedCompany && selectedCompany.name === company.name && (
                    <DoneIcon
                      style={{
                        color: "#007BFF",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Separator Line */}
        <div className="self-stretch h-4 pt-2 pb-[7px] bg-white flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch h-px bg-black bg-opacity-10"></div>
        </div>

        {/* All Companies */}
        <div className="h-10 px-4 py-2 bg-white justify-start items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
            <div className="text-gray-500 text-xs font-medium  leading-none">
              All Companies
            </div>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className={`overflow-y-auto scrollbar-w-0.5 w-[100%] ${
            scrollbarVisible
              ? "scrollbar-track-gray-100 scrollbar-thumb-gray-500"
              : "scrollbar-hidden"
          }`}
        >
          {filteredAllCompanies.map((company, index) => (
            <div
              key={index}
              className={`self-stretch h-10 px-4 py-2 bg-white justify-start items-center gap-2 cursor-pointer`}
              onClick={() => handleCompanyClick(company)}
            >
              <div className="grow shrink basis-0 w-[100%] flex-col justify-center items-start gap-0.5 inline-flex">
                <div
                  className={`w-[100%]  flex justify-between text-sm font-normal leading-tight`}
                >
                  <span
                    style={{
                      color:
                        selectedCompany && selectedCompany.name === company.name
                          ? "#007BFF"
                          : "",
                    }}
                  >
                    {company.name}
                  </span>
                  {selectedCompany && selectedCompany.name === company.name && (
                    <DoneIcon
                      style={{
                        color: "#007BFF",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
