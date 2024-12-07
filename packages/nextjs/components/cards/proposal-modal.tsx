import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  status: "Todo" | "In Progress" | "Completed";
  dueDate: string;
  assignee: string;
}

export function TaskModal({ isOpen, onClose, title, description, status, dueDate, assignee }: TaskModalProps) {
  const statusColor = {
    Todo: "bg-yellow-500",
    "In Progress": "bg-blue-500",
    Completed: "bg-green-500",
  }[status];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{status}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Description:</span>
            <p className="col-span-3">{description}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Due Date:</span>
            <span className="col-span-3">{dueDate}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Assignee:</span>
            <span className="col-span-3">{assignee}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
