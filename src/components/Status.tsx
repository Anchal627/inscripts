import React from "react";

interface StatusBadgeProps {
  status: "In-process" | "Complete" | "Blocked" | "Need to start";
}

export const Status: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "In-process":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Need to start":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Complete":
        return "bg-green-100 text-green-800 border-green-200";
      case "Blocked":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <span
      className={`w-26 h-6 flex gap-2 py-1 px-2 rounded-full font-medium text-[12px] ${getStatusStyles()}`}
    >
      {status}
    </span>
  );
};
