"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { read } from "fs";
import { ExpandIcon, MessageCircle, MoreHorizontalIcon } from "lucide-react";
import React from "react";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const page = () => {
  const [read, setRead] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <div className="w-full h-full rounded-md flex gap-5">
      <div className="w-2/3 h-full flex flex-col gap-5">
        <div className="flex flex-col gap-3 flex-1 bg-white rounded-md p-5">
          <Header
            Title="Messages"
            Description="Respond to messages from administrators and other staff"
          />
          <Separator />
          <div className="flex-1">
            <div className="w-full bg-blue-500 h-[50px] rounded-none rounded-t-md flex">
              <div className="w-[10%] h-full"></div>
              <Separator className="bg-white" orientation="vertical" />
              <div className="w-[50%] h-full flex items-center px-5">
                <span className="text-gray-100 font-bold text-lg">Message</span>
              </div>
              <Separator className="bg-white" orientation="vertical" />
              <div className="w-[25%] h-full flex items-center px-5">
                <span className="text-gray-100 font-bold text-lg">Date</span>
              </div>
              <Separator className="bg-white" orientation="vertical" />
              <div className="w-[15%] h-full flex items-center px-5">
                <span className="text-gray-100 font-bold text-lg">Action</span>
              </div>
            </div>
            <div className="rounded-none rounded-b-md border-2">
              <div className="w-full bg-red-50 flex ">
                <div className="w-[10%] h-full flex items-center justify-center py-3 px-5">
                <Checkbox
                  checked={read}
                  disabled
                  className="my-auto"
                />
                </div>
                <Separator className="bg-gray-500" orientation="vertical" />
                <div className="w-[50%] h-full flex flex-col items-start justify-center py-3 px-5">
                  <span className="font-bold text-gray-700 w-full truncate">
                    Urgent Message to All Students
                  </span>
                  <span className="font-semibold text-gray-500 truncate text-xs w-full">
                    Please inform all students in your class of the scheduled
                    end of semester examination starting on Friday, 20th April,
                    2025
                  </span>
                </div>
                <Separator className="bg-gray-500" orientation="vertical" />
                <div className="w-[25%] h-full flex flex-col items-start justify-center py-3 px-5">
                  <span className="font-bold text-gray-700 w-full truncate text-sm">
                    Friday, 13th April, 2025
                  </span>
                  <span className="font-semibold text-gray-500 truncate text-xs w-full">
                    7:33 am
                  </span>
                </div>
                <Separator className="bg-gray-500" orientation="vertical" />
                <div className="w-[15%] h-full flex items-center px-5 justify-center py-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="bg-transparent">
                        <MoreHorizontalIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Message Actions</DropdownMenuLabel>
                      <DropdownMenuCheckboxItem
                        checked={read}
                        onCheckedChange={setRead}
                      >
                        {read ? "Read" : "Unread"}
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <MessageCircle />
                        <span>Respond</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ExpandIcon />
                        <span>View Details</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <Separator className="bg-gray-200" />
              <div className="flex items-center justify-between py-3 px-3">
                <div className="flex gap-3 rounded-md px-3">
                  <span className="font-semibold text-gray-500">1</span>
                  <span className="font-semibold text-gray-500">of</span>
                  <span className="font-semibold text-gray-500">5</span>
                </div>
                <div className="flex">
                  <Button
                    variant="outline"
                    disabled
                    className="rounded-none rounded-l-md"
                  >
                    Prev
                  </Button>
                  <Button variant="outline" disabled className="rounded-none">
                    1
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-none rounded-r-md"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
