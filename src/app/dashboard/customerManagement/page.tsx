"use client";

export default function CustomerManagement() {
  const backendRegions = ["All region", "North America", "APAC"];

  const dynamicData = [
    { label: "New Request", value: 10 },
    { label: "Onboarding in Progress", value: 6 },
    { label: "Invite sent to the Customers", value: 8 },
    { label: "Tradeful Pending Approvals", value: 5 },
    { label: "Onboarding Completed", value: 3 },
    { label: "Onboarding Cycle Time", value: "2 weeks" },
  ];

  return (
    <>
      <div className="h-screen border-spacing-1 flex justify-center ">
        <div className="w-[97%] h-44 rounded-lg border-spacing-1">
          <div className=" h-[26%] bg-white flex justify-between items-center">
            <h1 className="text-3xl text-gray-800">Customer Management</h1>
            <div className="w-[18%] rounded-lg h-[70%] bg-blue-100 flex items-center justify-between pl-1 pr-1">
              {backendRegions.map((region, index) => (
                <button
                  key={index}
                  className="bg-transparent font-300 text-black text-sm px-2 py-0.5 hover:text-blue-500 hover:shadow-lg hover:bg-white hover:px-2 hover:py-0.5 hover:rounded-md"
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
          <div className=" h-[62%] mt-3 rounded-lg border border-solid border-blue border-grey-800 pl-5 flex justify-between items-center">
            {dynamicData.map((item, index) => (
              <div
                key={index}
                className="border-grey-800 border-r w-[16%] h-[70%]"
              >
                <h6 className="text-sm">{item.label}</h6>
                <h5 className="text-3xl mt-2">{item.value}</h5>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
