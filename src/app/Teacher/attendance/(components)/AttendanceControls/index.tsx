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

const AttendanceControl = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Card className="w-1/3 h-full">
      <CardHeader>
        <CardTitle>Attendance</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col w-full gap-4 items-center justify-center">
          
      </CardContent>
    </Card>
  );
};

export default AttendanceControl;
