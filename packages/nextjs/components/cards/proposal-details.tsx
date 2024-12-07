"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import { TaskModal } from "./proposal-modal"

interface TaskCardProps {
  title: string;
  description: string;
  status: "Todo" | "In Progress" | "Completed";
  dueDate: string;
  assignee: string;
}

export function TaskCard({ title, description, status, dueDate, assignee }: TaskCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const statusColor = {
    "Todo": "bg-yellow-500",
    "In Progress": "bg-blue-500",
    "Completed": "bg-green-500"
  }[status]

  return (
    <>
      <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setIsModalOpen(true)}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {/* <Badge className={statusColor}>
            </Badge> */}
            {status}
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        status={status}
        dueDate={dueDate}
        assignee={assignee}
      />
    </>
  )
}

