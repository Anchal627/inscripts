import { ArrowUpDown, ChevronsRight, EyeOff, ListFilter } from "lucide-react";
import icon from "../assets/icon.png";
import Import from "../assets/Import.png";
import Export from "../assets/Export.png";
import Share from "../assets/Share.png";
import New from "../assets/New.png";
function Row() {
  return (
    <div className="flex items-center w-full h-12 gap-2 border-b pt-[6px] pr-2 pb-[6px] pl-2 border-gray-200 bg-white">
      <div className="w-[91px] h-[36px] gap-1 rounded p-2 bg-white flex items-center">
        <span className="font-medium text-sm leading-5 tracking-normal text-[#121212]">
          Tool bar
        </span>
        <ChevronsRight className="h-[16px] w-[16px] mt-1" />
      </div>
      <div className="w-[1px] h-[24px] bg-gray-200"></div>
      <div className="flex w-[871px] h-[36px] gap-1">
        <button className="flex w-[118px] h-[36px] gap-1 pt-2 pr-3 pb-2 pl-2 rounded-[6px] bg-white items-center hover:bg-gray-100">
          <EyeOff className="w-4 h-4" />
          <span className="w-[74px] h-[20px] font-normal text-sm leading-5 tracking-norma text-[#121212]">
            Hide fields
          </span>
        </button>
        <button className="flex w-[73px] h-[36px] gap-1 pt-2 pr-3 pb-2 pl-2 rounded-[6px] bg-white items-center hover:bg-gray-100">
          <ArrowUpDown className="w-4 h-4" />
          <span className="w-[29px] h-[20px] font-normal text-sm leading-5 tracking-normal text-[#121212]">
            Sort
          </span>
        </button>
        <button className="flex w-[80px] h-[36px] gap-1 pt-2 pr-3 pb-2 pl-2 rounded-[6px] bg-white items-center hover:bg-gray-100">
          <ListFilter className="w-4 h-4" />
          <span className="w-[36px] h-[20px] font-normal text-sm leading-5 text-[#121212]">
            Filter
          </span>
        </button>
        <button className="flex w-[105px] h-[36px] gap-1 pt-2 pr-3 pb-2 pl-2 rounded-[6px] bg-white items-center hover:bg-gray-100">
          <img src={icon} alt="icon" />
          <span className="w-[61px] h-[20px] font-normal text-sm leading-5 text-[#121212]">
            Cell view
          </span>
        </button>
      </div>

      <div className="w-[437px] h-[36px] gap-2  opacity-100 flex items-center ml-24">
        <button className="flex items-center w-[90px] h-[36px] bg-white gap-1 opacity-100 rounded-[6px] border border-solid border-[rgba(238,238,238,1)] pt-2 pr-3 pb-2 pl-2 hover:bg-gray-100">
          <img src={Import} alt="import" />
          <span className="w-[46px] h-[20px] font-medium text-[14px] leading-[20px] tracking-[0] text-[rgba(84,84,84,1)]">
            Import
          </span>
        </button>
        <button className="w-[89px] h-[36px] gap-1 opacity-100 rounded-[6px] border pt-2 pr-3 pb-2 pl-2 bg-white flex items-center border-[rgba(238,238,238,1)] hover:bg-gray-100">
          <img src={Export} alt="export" />
          <span className="w-[46px] h-[20px] font-medium text-[14px] leading-[20px] tracking-[0] text-[rgba(84,84,84,1)]">
            Export
          </span>
        </button>
        <button className="w-[89px] h-[36px] gap-1 opacity-100 rounded-[6px] border pt-2 pr-3 pb-2 pl-2 bg-white flex items-center border-[rgba(238,238,238,1)] hover:bg-gray-100">
          <img src={Share} alt="share" />
          <span className="w-[46px] h-[20px] font-medium text-[14px] leading-[20px] tracking-[0] text-[rgba(84,84,84,1)]">
            Share
          </span>
        </button>
        <button className=" w-[150px] h-[36px] gap-1 opacity-100 rounded-[6px] pt-2 pr-6 pb-2 pl-6 bg-[rgba(75,106,79,1)] flex items-center hover:bg-green-800">
          <img src={New} alt="new" />
          <span className="w-[78px] h-[20px]  font-medium text-[14px] leading-[20px] tracking-[0] text-white ">
            New Action
          </span>
        </button>
      </div>
    </div>
  );
}
export default Row;
