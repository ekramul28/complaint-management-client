/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const EditTicketModal = ({
  ticket,
  onClose,
  onSave,
}: {
  ticket: any;
  onClose: any;
  onSave: any;
}) => {
  const [updatedData, setUpdatedData] = useState({ ...ticket });

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Ticket</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            //   label="Subject"
            value={updatedData.subject}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, subject: e.target.value })
            }
          />
          <Input
            //   label="Description"
            value={updatedData.description}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, description: e.target.value })
            }
          />
          <Input
            //   label="Status"
            value={updatedData.status}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, status: e.target.value })
            }
          />
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => onSave(updatedData)}>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditTicketModal;
