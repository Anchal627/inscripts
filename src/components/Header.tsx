import { Bell, Search } from "lucide-react";
import Panel from "../assets/Panel.png";
import Profile from "../assets/Profile.png";
function Header() {
  return (
    <div className="w-full h-[56px] flex justify-between items-center border-b pt-2 pr-4 pb-2 pl-4 border border-b border-gray-200 bg-white">
      <div className=" flex gap-4 items-center">
        <img src={Panel} alt="Panel" className="w-[20px] h-[16px]" />
        <span className="text-sm text-gray-600">Workspace</span>
        <span className="text-gray-400">›</span>
        <span className="text-sm text-gray-600">Folder 2</span>
        <span className="text-gray-400">›</span>
        <span className="text-sm font-medium">Spreadsheet 3 </span>
        <span className="text-sm text-gray-600 flex w-[24px] h-[24px] gap-2 rounded">
          ...{" "}
        </span>
      </div>

      <div className="flex w-[365px] h-[40px] gap-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 " />
          <input
            type="text"
            placeholder="Search within sheet"
            className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
          />
        </div>
        <div className=" relative flex items-center">
          <Bell className="h-[24px] w-[24px] text-gray-900" />
          <span className=" w-5 h-5 -top-0 -right-2 rounded-full border-2 absolute bg-[#4B6A4F] text-white font-body font-medium text-[10px] leading-4 tracking-normal flex items-center justify-center">
            2
          </span>
        </div>
        <div className="flex w-[112px] h-[40px] gap-2 pt-[6px] pr-3 pb-[6px] pl-2 rounded-lg bg-white items-center">
          <img
            src={Profile}
            alt="Profile"
            className="w-[28px] h-[28px] rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-medium text-sm leading-4 tracking-normal text-gray-800 w-[65px]">
              John Doe
            </span>
            <span className="font-medium text-xs eading-[12px] tracking-normal text-gray-500">
              john.doe..
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
