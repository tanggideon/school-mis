import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cookies } from "next/headers"
import { AppSideBar } from "@/components/AppSideBar";
import Navbar from "@/components/navbar";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={true}>
        <div className={`flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
        <AppSideBar />
        <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 gap-5`}>
            <Navbar />
            {children}
        </main>
        </div>
    </SidebarProvider>
  );
};

export default layout;
