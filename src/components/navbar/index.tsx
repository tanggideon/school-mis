import React from "react";
import { DropdownMenuTrigger, DropdownMenu } from "../ui/dropdown-menu";
import { SidebarMenuButton } from "../ui/sidebar";
import { MessageCircleMoreIcon, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "../ui/input";

const Navbar = () => {
  return (
    <div className="flex w-full py-1 px-5 bg-gray-200 rounded-md justify-between items-center">
      <div className="">
      <Input type="text" placeholder="Search" className="w-[300px] border-gray-400"/>
      </div>
      <div className="flex gap-5">
        <div className="flex gap-3 items-center">
          <MessageCircleMoreIcon className="text-gray-400 w-[25px] hover:cursor-pointer hover:text-blue-700 transition ease-in" />
          <Settings className="text-gray-400 w-[25px] hover:cursor-pointer hover:text-blue-700 transition ease-in"/>
        </div>
        <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Gideon Tang</span>
                <span className="truncate text-xs">Teacher</span>
              </div>
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src="/avatars/shadcn.jpg" alt="Avatar" />
                <AvatarFallback className="rounded-lg">GT</AvatarFallback>
              </Avatar>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
