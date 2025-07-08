import React from "react";

interface PriorityBadgeProps {
  priority: "High" | "Medium" | "Low";
}

export const Priority: React.FC<PriorityBadgeProps> = ({ priority }) => {
  const getPriorityStyles = () => {
    switch (priority) {
      case "High":
        return "text-[#ef4d44]";
      case "Medium":
        return " text-[#c29210]";
      case "Low":
        return "text-[#1a8cff]";
      default:
        return " text-gray-600";
    }
  };

  return (
    <span
      className={`w-[27px] h-[16px] font-semibold text-[14px] leading-4 text-center ${getPriorityStyles()}`}
    >
      {priority}
    </span>
  );
};
