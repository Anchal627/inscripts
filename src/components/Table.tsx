import {
  Calendar,
  ChevronDown,
  ChevronDownCircle,
  Globe,
  Link2,
  User2Icon,
} from "lucide-react";
import Arrow from "../assets/Arrow.png";
import Split from "../assets/Split.png";
import Grid from "../components/Grid";
import Tab from "./Tab";

function Table() {
  return (
    <div className=" w-full h-[872px]  opacity-100 bg-[rgba(246,246,246,1)]">
      <table className="w-[1490px]">
        {/* 1row */}
        <div className=" sticky top-0 z-10 border-b bg-[rgba(246,246,246,1)] flex h-[32px]">
          <th className="w-[32px] bg-white"></th>
          <th className="w-[631px] p-2 gap-2 opacity-100 bg-[rgba(226,226,226,1)] flex items-center">
            <div className=" flex items-center w-[158px] h-[24px] p-1 opacity-100 rounded-[4px] bg-[rgba(238,238,238,1)]">
              <Link2
                className="h-[16px] w-[16px] stroke-[rgba(26,140,255,1)]
"
              />
              <span className="w-[130px] text-[rgba(84,84,84,1)] h-[16px] font-normal text-[12px] leading-[16px] tracking-[0]">
                Q3 Financial Overview
              </span>
            </div>
            <img src={Arrow} className="h-4 w-4" />
          </th>
          <th className="w-[134px] p-2  opacity-100 bg-white"></th>
          <th className="w-[134px] h-[32px] p-0 bg-[rgba(210,224,212,1)]">
            <div className="flex items-center justify-center h-full px-4 gap-1">
              <img src={Split} className="h-4 w-4" />
              <span className="w-[29px] font-medium text-[14px]  leading-[20px] tracking-[0] text-[rgba(80,84,80,1)]">
                ABC
              </span>
            </div>
          </th>
          <th className="w-[251px] h-[32px] p-0 bg-[rgba(220,207,252,1)]">
            <div className="flex items-center px-4 gap-1 justify-center h-full">
              <img src={Split} className="h-4 w-4 filter brightness-0 invert" />
              <span className="w-[127px] font-medium text-[14px]  leading-[20px] tracking-[0] text-[rgba(80,84,80,1)]">
                Answer a question
              </span>
            </div>
          </th>

          <th className="w-[134px] h-[32px] p-0 bg-[rgba(250,194,175,1)]">
            <div className="flex items-center justify-center h-full px-4 gap-1">
              <img src={Split} className="h-4 w-4 filter brightness-0 invert" />
              <span className="w-[50px] font-medium text-[14px]  leading-[20px] tracking-[0] text-[rgba(80,84,80,1)]">
                Extract
              </span>
            </div>
          </th>
          <th className="w-[144px] h-[32px] p-0 bg-[rgba(238,238,238,1)] text-[20px] text-center border border-[rgba(203,203,203,1)]">
            +
          </th>
        </div>

        {/* 2nd row */}
        <div className=" sticky top-[32px] z-10 border-b bg-[rgba(246,246,246,1)] flex h-[32px] w-[1460px]">
          <th className="flex w-8 h-8 gap-1 pr-1 pl-2 bg-[#eeeeee] text-[#afafaf] text-center">
            #
          </th>
          <th className=" w-64 h-8 gap-1 pr-1 bg-[#eeeeee] border border-[rgba(203,203,203,1)]">
            <div className="flex items-center h-full justify-between">
              <div className="w-[220px] flex justify-start">
                <span className="w-[127px] font-medium text-[14px]  leading-[20px] tracking-[0] text-[rgba(80,84,80,1)]">
                  Job Request
                </span>
              </div>
              <ChevronDown className="h-[20px] w-[20px] stroke-[rgba(80,84,80,1)]" />
            </div>
          </th>

          <th className="flex w-[124px] h-8 gap-1 pr-1 pl-2 bg-[#eeeeee] border border-[rgba(203,203,203,1)] justify-center">
            <div className="flex items-center h-full justify-center gap-1">
              <Calendar className="h-4 w-4" />
              <span className="w-[68px] font-medium text-[14px]  leading-[20px] tracking-[0] text-[rgba(80,84,80,1)]">
                Submitted
              </span>
              <ChevronDown className="h-[20px] w-[20px] stroke-[rgba(80,84,80,1)]" />
            </div>
          </th>
          <th className="flex w-[124px] h-8 gap-1 pr-1 pl-2 bg-[#eeeeee] border border-[rgba(203,203,203,1)] justify-center">
            <div className="flex items-center h-full justify-center gap-1">
              <ChevronDownCircle className="h-4 w-4" />
              <span className="w-[68px] font-medium text-[14px]  leading-[20px] tracking-[0] text-[rgba(80,84,80,1)]">
                Status
              </span>
              <ChevronDown className="h-[20px] w-[20px] stroke-[rgba(80,84,80,1)]" />
            </div>
          </th>

          <th className="flex w-[126px] h-8 gap-1 pr-1 pl-2 bg-[#eeeeee] border border-[rgba(203,203,203,1)] justify-center">
            <div className="flex items-center h-full justify-center gap-1">
              <User2Icon className="h-4 w-4" />
              <span className="w-[68px] font-medium text-[14px]  leading-[20px] tracking-[0] text-[rgba(80,84,80,1)]">
                Submitter
              </span>
              <ChevronDown className="h-[20px] w-[20px] stroke-[rgba(80,84,80,1)]" />
            </div>
          </th>
          <th className="flex w-[135px] h-8 gap-1 pr-1 pl-2 bg-[#eeeeee] border border-[rgba(203,203,203,1)] justify-center">
            <div className="flex items-center h-full justify-center gap-1">
              <Globe className="h-4 w-4" />
              <span className="w-[68px] font-medium text-[14px]  leading-[20px] tracking-[0] text-[rgba(80,84,80,1)]">
                URL
              </span>
              <ChevronDown className="h-[20px] w-[20px] stroke-[rgba(80,84,80,1)]" />
            </div>
          </th>
          <th className="flex w-[135px] h-8 gap-1 pr-1 pl-2 bg-[#e8f0e9] border border-[rgba(203,203,203,1)] justify-center">
            <div className="flex items-center h-full justify-center gap-1">
              <span className="w-[68px] font-medium text-[14px]  leading-[20px] tracking-[0] text-[rgba(80,84,80,1)]">
                Assigned
              </span>
              <ChevronDown className="h-[20px] w-[20px] stroke-[rgba(80,84,80,1)]" />
            </div>
          </th>
          <th className="flex w-[125px] h-8 gap-1 pr-1 pl-2 bg-[#eae3fc] border border-[rgba(203,203,203,1)] justify-center">
            <div className="flex items-center h-full justify-center gap-1">
              <span className="w-[68px] font-medium text-[14px]  leading-[20px] tracking-[0] text-[rgba(80,84,80,1)]">
                Priority
              </span>
              <ChevronDown className="h-[20px] w-[20px] stroke-[rgba(80,84,80,1)]" />
            </div>
          </th>
          <th className="flex w-[125px] h-8 gap-1 pr-1 pl-2 bg-[#eae3fc] border border-[rgba(203,203,203,1)] justify-center">
            <div className="flex items-center h-full justify-center gap-1">
              <span className="w-[68px] font-medium text-[14px]  leading-[20px] tracking-[0] text-[rgba(80,84,80,1)]">
                Due Date
              </span>
              <ChevronDown className="h-[20px] w-[20px] stroke-[rgba(80,84,80,1)]" />
            </div>
          </th>
          <th className="flex w-[135px] h-8 gap-1 pr-1 pl-2 bg-[#ffe9e0] border border-[rgba(203,203,203,1)] justify-center">
            <div className="flex items-center h-full justify-center gap-1">
              <span className="w-[68px] font-medium text-[14px]  leading-[20px] tracking-[0] text-[rgba(80,84,80,1)]">
                Est. Value
              </span>
              <ChevronDown className="h-[20px] w-[20px] stroke-[rgba(80,84,80,1)]" />
            </div>
          </th>
          <th className="w-[144px] h-[32px] p-0 bg-white text-[20px] text-center border border-[rgba(203,203,203,1)]"></th>
        </div>
        <Grid />
      </table>
      <Tab />
    </div>
  );
}
export default Table;
