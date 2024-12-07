"use client";

import { CompanyDetails } from "@/components/company-details";
import { TaskList } from "@/components/proposal-list";
import { Navbar } from "~~/components/navbar";

export default function Home() {
  const tasks = [
    {
      title: "Develop Smart Contract",
      description: "Create and test the main smart contract",
      status: "Completed" as const,
      dueDate: "2023-06-30",
      assignee: "Alice Johnson",
    },
    {
      title: "Frontend Integration",
      description: "Integrate the smart contract with the frontend",
      status: "In Progress" as const,
      dueDate: "2023-07-15",
      assignee: "Bob Smith",
    },
    {
      title: "Security Audit",
      description: "Conduct a security audit of the smart contract",
      status: "Todo" as const,
      dueDate: "2023-07-30",
      assignee: "Charlie Brown",
    },
    {
      title: "Documentation",
      description: "Write comprehensive documentation for the project",
      status: "Todo" as const,
      dueDate: "2023-08-15",
      assignee: "Diana Prince",
    },
    {
      title: "User Testing",
      description: "Conduct user testing and gather feedback",
      status: "Todo" as const,
      dueDate: "2023-08-30",
      assignee: "Ethan Hunt",
    },
    {
      title: "Deploy to Testnet",
      description: "Deploy the smart contract to a testnet for further testing",
      status: "Todo" as const,
      dueDate: "2023-09-15",
      assignee: "Fiona Gallagher",
    },
  ];

  return (
    <div>
      <div className="fixed top-0 right-0 z-10 w-screen">
        <Navbar />
      </div>
      <div className="container mx-auto py-6 mt-20">
        <h1 className="text-3xl font-bold mb-6">Company Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-2">
            <CompanyDetails />
          </div>
          <div className="md:col-span-3">
            {tasks.map((task, index) => (
              <TaskList key={index} {...task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
