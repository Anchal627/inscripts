import { Priority } from "./Priority";
import { Status } from "./Status";

type RowData = {
  id: number;
  task: string;
  submitted: string;
  status: "In-process" | "Need to start" | "Complete" | "Blocked";
  submitter: string;
  url: string;
  assigned: string;
  priority: "Medium" | "High" | "Low";
  dueDate: string;
  value: string;
};
const rows: RowData[] = [
  {
    id: 1,
    task: "Launch social media campaign for....",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel...",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    value: "6,200,000",
  },
  {
    id: 2,
    task: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhan...",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    value: "3,500,000",
  },
  {
    id: 3,
    task: "Finalize user testing feedback for app...",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohn...",
    assigned: "Rachel lee",
    priority: "Low",
    dueDate: "10-12-2024",
    value: "4,750,000",
  },
  {
    id: 4,
    task: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen...",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    value: "5,900,000",
  },
  {
    id: 5,
    task: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicab...",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    value: "2,800,000",
  },
];
const Grid: React.FC = () => {
  return (
    <div className=" w-[1490px] h-[872px]  opacity-100 bg-[rgba(246,246,246,1)] ">
      <tbody>
        {rows.map((row) => (
          <tr
            key={row.id}
            className="border-b border-gray-100 hover:bg-gray-50 border border-[rgba(203,203,203,1)]"
          >
            <td className="w-8 h-8 bg-white text-center text-[#757575] border border-[rgba(203,203,203,1)]">
              {row.id}
            </td>
            <td className="w-64 h-8 px-2 bg-white border border-[rgba(203,203,203,1)]">
              <div className="flex gap-2 h-full items-center">
                <span className=" w-[240px] h-[16px] text-[14px] leading-4 font-[400]">
                  {row.task}
                </span>
              </div>
            </td>
            <td className="w-[124px] px-2 bg-white border border-[rgba(203,203,203,1)]">
              <div className="flex gap-2 items-center justify-center">
                <span className="w-[106px] text-[#121212] h-[18px]  text-[14px] leading-4 text-right">
                  {row.submitted}
                </span>
              </div>
            </td>
            <td className="w-[124px] px-2 bg-white border border-[rgba(203,203,203,1)] text-center">
              <div className="flex items-center justify-center">
                <Status status={row.status} />
              </div>
            </td>
            <td className="w-[124px] px-2 bg-white border border-[rgba(203,203,203,1)]">
              <div className="flex gap-2 items-center justify-center">
                <span className="w-[106px] text-[#121212] h-[18px]  text-[14px] leading-4 ">
                  {row.submitter}
                </span>
              </div>
            </td>

            <td className="w-[135px] px-2 bg-white border border-[rgba(203,203,203,1)]">
              <div className="flex gap-2 items-center justify-center">
                <span className="w-[106px] text-[#121212] h-[18px]  text-[14px] leading-4 underline font-normal ">
                  {row.url}
                </span>
              </div>
            </td>
            <td className="w-[135px] px-2 bg-white border border-[rgba(203,203,203,1)]">
              <div className="flex gap-2 items-center justify-center">
                <span className="w-[119px] text-[#121212] h-[18px]  text-[14px] leading-4 font-normal ">
                  {row.assigned}
                </span>
              </div>
            </td>

            <td className="w-[125px] px-2 bg-white border border-[rgba(203,203,203,1)]">
              <div className="flex gap-2 items-center justify-center">
                <span className="w-[106px] text-[#121212] h-[18px]  text-[14px] leading-4  font-normal text-center">
                  <Priority priority={row.priority} />
                </span>
              </div>
            </td>
            <td className="w-[124px] py-2 px-2 bg-white border border-[rgba(203,203,203,1)]">
              <div className="flex gap-2 items-center justify-center">
                <span className="w-[106px] text-[#121212] h-[18px]  text-[14px] leading-4 text-right">
                  {row.dueDate}
                </span>
              </div>
            </td>
            <td className="w-[136px] py-2 px-2 bg-white border border-[rgba(203,203,203,1)]">
              <div className="flex gap-2 items-center justify-center">
                <span className="w-[106px] text-[#121212] h-[18px]  text-[16px] leading-4 text-right">
                  {row.value}
                </span>
              </div>
            </td>
            <td className="w-[144px] h-[32px] p-0 bg-white text-[20px] text-center border border-[rgba(203,203,203,1)]"></td>
          </tr>
        ))}
        {Array.from({ length: 23 }, (_, index) => {
          const id = index + 6;
          return (
            <tr
              key={id}
              className="border-b border-gray-100 hover:bg-gray-50 border border-[rgba(203,203,203,1)]"
            >
              <td className="w-8 h-8 bg-white text-center text-[#757575] border border-[rgba(203,203,203,1)]">
                {id}
              </td>
              <td className="w-64 h-8 px-2 bg-white border border-[rgba(203,203,203,1)]"></td>
              <td className="w-[124px] px-2 bg-white border border-[rgba(203,203,203,1)]"></td>
              <td className="w-[124px] px-2 bg-white border border-[rgba(203,203,203,1)] text-center"></td>
              <td className="w-[124px] px-2 bg-white border border-[rgba(203,203,203,1)]"></td>
              <td className="w-[135px] px-2 bg-white border border-[rgba(203,203,203,1)]"></td>
              <td className="w-[135px] px-2 bg-white border border-[rgba(203,203,203,1)]"></td>
              <td className="w-[125px] px-2 bg-white border border-[rgba(203,203,203,1)]"></td>
              <td className="w-[124px] py-2 px-2 bg-white border border-[rgba(203,203,203,1)]"></td>
              <td className="w-[136px] py-2 px-2 bg-white border border-[rgba(203,203,203,1)]"></td>
              <td className="w-[144px] h-[32px] p-0 bg-white text-[20px] text-center border border-[rgba(203,203,203,1)]"></td>
            </tr>
          );
        })}
      </tbody>
    </div>
  );
};
export default Grid;
