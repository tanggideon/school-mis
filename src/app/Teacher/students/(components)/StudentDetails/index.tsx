"use client";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPinHouseIcon, Timer } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const StudentDetails = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Card className="w-1/3 h-full">
      <CardHeader>
        <CardTitle>Student Details</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col w-full gap-4 items-center justify-center">
          <Avatar className="w-[100px] h-[100px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>GT</AvatarFallback>
          </Avatar>
        <Separator />
        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-col">
            <span className="text-[12px] font-semibold text-gray-500">
              Full Name:
            </span>
            <span className="text-[14px] font-bold text-gray-700 pl-3">
              Gideon Tang Be-Inpuleng
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col w-1/2">
              <span className="text-[12px] font-semibold text-gray-500">
                Gender:
              </span>
              <span className="text-[14px] font-bold text-gray-700 pl-3">
                Male
              </span>
            </div>
            <div className="flex flex-col w-1/2">
              <span className="text-[12px] font-semibold text-gray-500">
                Date of Birth:
              </span>
              <span className="text-[14px] font-bold text-gray-700 pl-3">
                12/12/2001
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col w-1/2">
              <span className="text-[12px] font-semibold text-gray-500">
                Current Class:
              </span>
              <span className="text-[14px] font-bold text-gray-700 pl-3">
                Basic Six (6)
              </span>
            </div>
            <div className="flex flex-col w-1/2">
              <span className="text-[12px] font-semibold text-gray-500">
                Date Enrolled:
              </span>
              <span className="text-[14px] font-bold text-gray-700 pl-3">
                26/06/2023
              </span>
            </div>
          </div>
        </div>
        <Separator />
        <div className="w-full">
          <Button className="w-full hover:cursor-pointer">View Details</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentDetails;
