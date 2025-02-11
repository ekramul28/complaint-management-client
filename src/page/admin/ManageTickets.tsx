/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";
import {
  useDeleteTicketMutation,
  useGetAllTicketsQuery,
  useUpdateTicketMutation,
} from "@/redux/features/admin/ticketsManagementApi";

const ManageTickets = () => {
  const { data: tickets, isLoading, error } = useGetAllTicketsQuery(undefined);
  const [updateTicket] = useUpdateTicketMutation();
  const [deleteTicket] = useDeleteTicketMutation();

  const [selectedTicket, setSelectedTicket] = useState<{
    id: string;
    subject: string;
  } | null>(null);
  const [newSubject, setNewSubject] = useState("");

  if (isLoading) return <p className="text-center">Loading tickets...</p>;
  if (error) return <p className="text-red-500">Failed to load tickets</p>;

  const handleUpdate = async () => {
    if (!selectedTicket) return;
    try {
      await updateTicket({
        id: selectedTicket.id,
        data: { subject: newSubject },
      }).unwrap();
      toast.success("Ticket updated successfully!");
      setSelectedTicket(null);
    } catch {
      toast.error("Failed to update ticket");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this ticket?")) return;
    try {
      await deleteTicket(id).unwrap();
      toast.success("Ticket deleted successfully!");
    } catch {
      toast.error("Failed to delete ticket");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Tickets</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets?.map((ticket: any) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.subject}</TableCell>
              <TableCell>{ticket.description}</TableCell>
              <TableCell>{ticket.status}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedTicket(ticket)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  className="ml-2"
                  onClick={() => handleDelete(ticket.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Edit Ticket Modal */}
      <Dialog
        open={!!selectedTicket}
        onOpenChange={() => setSelectedTicket(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Ticket</DialogTitle>
          </DialogHeader>
          <Input
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            placeholder="Enter new subject"
          />
          <DialogFooter>
            <Button onClick={handleUpdate}>Update</Button>
            <Button variant="outline" onClick={() => setSelectedTicket(null)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ManageTickets;
