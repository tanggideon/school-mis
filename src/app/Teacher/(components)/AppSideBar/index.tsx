"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  BookUser,
  Calendar1Icon,
  Command,
  GalleryVerticalEnd,
  LayoutDashboardIcon,
  Users2,
  MessageCircleMoreIcon
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain, User } from "./user";
import { SwitchClasses } from "./switchClasses";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  classes: [
    {
      name: "Basic Five (5)",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Basic Six (6)",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Basic Seven (7)",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Students",
      url: "/Teacher/students",
      icon: Users2,
      isActive: true,
      items: [
        {
          title: "All Students",
          url: "/Teacher/students",
        },
        {
          title: "Attendance",
          url: "/Teacher/attendance",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Calendar",
      url: "/Teacher/calendar",
      icon: Calendar1Icon,
      items: [
        {
          title: "Class Timetable",
          url: "/Teacher/calendar",
        },
        {
          title: "Holidays",
          url: "#",
        },
        {
          title: "School Events",
          url: "#",
        },
      ],
    },
    {
      title: "Assignments",
      url: "/Teacher/assignments",
      icon: BookOpen,
      items: [
        {
          title: "Take Homes",
          url: "#",
        },
        {
          title: "Class Assignment",
          url: "#",
        },
        {
          title: "Submissions",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSideBar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SwitchClasses classes={data.classes} />
      </SidebarHeader>
      <SidebarContent>
      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Home</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/Teacher/"}>
                <LayoutDashboardIcon />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/Teacher/subjects"}>
                <BookUser />
                <span>Subjects</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/Teacher/messages"}>
                <MessageCircleMoreIcon />
                <span>Messages</span>
              </Link>
            </SidebarMenuButton>
            <SidebarMenuBadge className="bg-red-500 rounded-full p-1 text-gray-50">24</SidebarMenuBadge>
          </SidebarMenuItem>
        </SidebarMenu>
        </SidebarGroup>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <User user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
