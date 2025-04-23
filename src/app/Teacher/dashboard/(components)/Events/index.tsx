"use client"
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area"
import { MapPinHouseIcon, Timer } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Events = () => {

  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="w-1/3 h-full bg-gray-200 rounded-md flex flex-col items-center justify-start">
      <div className="bg-white w-full h-[55%] px-3 pt-3">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
      <ScrollArea className="flex flex-col bg-white w-full p-3 gap-5 h-[45%]">
        <div className="bg-white w-full px-3 py-2 mb-3 border-2 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-[14px] truncate text-gray-600">Speech and Price Giving Day</h3>
            <span className="font-bold text-[12px] text-gray-600">20/11/2025</span>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <p className="text-justify font-semibold text-[12px] text-gray-500">You are cordially invited to the Speech and Price giving day of the school. Your presence and support will go a long way to inspire staff, students and parents</p>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Events;
