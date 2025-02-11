"use client";

import SidebarLayout from "@/components/layout/Sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import TicketCard from "./TicketCard/TicketCard";

import { useState } from "react";
import {
  useDeleteTicketMutation,
  useGetAllTicketsQuery,
  useUpdateTicketMutation,
} from "@/redux/features/tickets/ticketsManagementApi";
import EditTicketModal from "./TicketCard/EditTicketModal";

const CustomerDashboard = () => {
  const { data: tickets, isLoading, error } = useGetAllTicketsQuery(undefined);
  const [updateTicket] = useUpdateTicketMutation();
  const [deleteTicket] = useDeleteTicketMutation();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      await deleteTicket(id);
    }
  };

  const handleUpdate = (ticket: any) => {
    setSelectedTicket(ticket);
    setIsEditModalOpen(true);
  };

  return (
    <SidebarProvider>
      <SidebarLayout />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </header>
        <div className="p-4 space-y-4">
          {isLoading ? (
            <p className="text-center text-gray-500">Loading tickets...</p>
          ) : error ? (
            <p className="text-center text-red-500">Failed to load tickets.</p>
          ) : tickets?.length > 0 ? (
            tickets.map((ticket: any) => (
              <TicketCard
                key={ticket.id}
                id={ticket.id}
                subject={ticket.subject}
                description={ticket.description}
                status={ticket.status}
                customer={ticket.customer}
                executive={ticket.executive}
                userId="user_1"
                customerId={ticket.customerId}
                onDelete={() => handleDelete(ticket.id)}
                onUpdate={() => handleUpdate(ticket)}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No tickets available.</p>
          )}
        </div>
      </SidebarInset>

      {/* Edit Modal */}
      {isEditModalOpen && selectedTicket && (
        <EditTicketModal
          ticket={selectedTicket}
          onClose={() => setIsEditModalOpen(false)}
          onSave={async (updatedData) => {
            await updateTicket({ id: selectedTicket.id, updatedData });
            setIsEditModalOpen(false);
          }}
        />
      )}
    </SidebarProvider>
  );
};

export default CustomerDashboard;
