// import { AppSidebar } from "@/components/app-sidebar";
import SidebarLayout from "@/components/layout/Sidebar";
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
            id="123"
            subject="Payment Issue"
            description="Customer is facing issues with payment processing."
            status="Open"
            customer="John Doe"
            executive="Alice Smith"
            userId="user_1" // Current logged-in user
            customerId="user_1" // Owner of the ticket
            onDelete={(id) => console.log(`Deleted ticket ${id}`)}
            onUpdate={(id, updatedData) =>
              console.log(`Updated ticket ${id}:`, updatedData)
            }
          />
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default CustomerDashboard;
