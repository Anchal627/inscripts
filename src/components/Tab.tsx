import React, { useState } from "react";

function Tab() {
  const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[40px] bg-white border-t border-gray-300 flex items-center justify-between px-6 z-20">
      <div className="flex gap-6 text-[14px] font-medium text-gray-700">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer px-2 h-full flex items-center
              ${
                activeTab === tab
                  ? "border-t-2 border-[rgba(75,106,79,1)] text-[rgba(75,106,79,1)] bg-[rgba(62, 87, 65, 1)];"
                  : ""
              }
            `}
          >
            {tab}
          </div>
        ))}
      </div>
      <button className="text-[20px] font-bold px-3 py-1 bg-[rgba(246,246,246,1)] border border-gray-300 rounded">
        +
      </button>
    </div>
  );
}

export default Tab;
