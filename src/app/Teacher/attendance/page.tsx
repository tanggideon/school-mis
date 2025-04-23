import React from "react";
import AttendanceControls from "./(components)/AttendanceControls";
import AttendanceTable from "./(components)/AttendanceTable";
import { Download, LucideShare2, MoreHorizontalIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AttendanceBarChart } from "./(components)/BarChart";
import { AttendanceRadial } from "./(components)/AttendanceRdial";

const page = () => {
  return (
    <div className="w-full h-full rounded-md flex gap-5">
      <div className="w-2/3 h-full flex flex-col gap-5">
        <div className="flex-1 grid gap-5 grid-rows-2 bg-gray-200 rounded-md p-5">
          <div className="flex gap-5 w-full">
            <div className="w-2/3 h-full bg-white rounded-md px-5 py-2">
              <div className="w-full flex items-center justify-between">
                <span className="font-bold text-sm">Attendance Summary</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="bg-transparent">
                      <MoreHorizontalIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Daily Performance</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Download />
                      <span>Download Report</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LucideShare2 />
                      <span>Export PDF</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <AttendanceBarChart />
            </div>
            <div className="w-1/3 h-full bg-white rounded-md">
              <AttendanceRadial />
            </div>
          </div>
          <div className="w-full rounded-md flex-1 bg-white px-5 py-2">
            <AttendanceTable />
          </div>
        </div>
      </div>
      <AttendanceControls />
    </div>
  );
};

export default page;
