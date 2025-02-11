// import { AppSidebar } from "@/components/app-sidebar";
import SidebarLayout from "@/components/layout/Sidebar";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import TicketCard from "./TicketCard/TicketCard";

const CustomerDashboard = () => {
  return (
    <div>
      <SidebarProvider>
        <SidebarLayout></SidebarLayout>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </header>
          <TicketCard
            subject="Payment Issue"
            description="Customer is facing issues with payment processing."
            status="Open"
            customer="John Doe"
            executive="Alice Smith"
          />
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default CustomerDashboard;
