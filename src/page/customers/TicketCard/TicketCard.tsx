"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trash2, Edit2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

type TicketCardProps = {
  id: string;
  subject: string;
  description: string;
  status: "Open" | "Resolved" | "Closed";
  customer: string;
  executive: string;
  userId: string;
  customerId: string;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updatedData: Partial<TicketCardProps>) => void;
};

const TicketCard: React.FC<TicketCardProps> = ({
  id,
  subject,
  description,
  status,
  customer,
  executive,
  userId,
  customerId,
  onDelete,
  onUpdate,
}) => {
  const { toast } = useToast();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [updatedSubject, setUpdatedSubject] = useState(subject);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-yellow-500 text-white";
      case "Resolved":
        return "bg-green-500 text-white";
      case "Closed":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const handleUpdate = () => {
    onUpdate(id, { subject: updatedSubject, description: updatedDescription });
    setIsEditOpen(false);
    toast({ title: "Ticket updated successfully" });
  };

  const handleDelete = () => {
    onDelete(id);
    setIsDeleteConfirmOpen(false);
    toast({ title: "Ticket deleted successfully", variant: "destructive" });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-lg">{subject}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-gray-600">{description}</p>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Status:</span>
          <Badge className={getStatusColor(status)}>{status}</Badge>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Customer:</span>
          <span className="text-gray-700">{customer}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Executive:</span>
          <span className="text-gray-700">{executive}</span>
        </div>

        {/* Edit & Delete Buttons (Only if user is the customer) */}
        {userId === customerId && (
          <div className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditOpen(true)}
            >
              <Edit2 className="w-4 h-4 mr-1" /> Edit
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => setIsDeleteConfirmOpen(true)}
            >
              <Trash2 className="w-4 h-4 mr-1" /> Delete
            </Button>
          </div>
        )}
      </CardContent>

      {/* Edit Ticket Modal */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Ticket</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <Input
              value={updatedSubject}
              onChange={(e) => setUpdatedSubject(e.target.value)}
              placeholder="Subject"
            />
            <Textarea
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
              placeholder="Description"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdate}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <AlertDialog
        open={isDeleteConfirmOpen}
        onOpenChange={setIsDeleteConfirmOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this ticket?
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
};

export default TicketCard;
