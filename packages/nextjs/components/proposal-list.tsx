import { TaskCard } from "@/components/cards/proposal-details";

const tasks = [
  {
    title: "Develop Smart Contract",
    description: "Create and test the main smart contract",
    status: "Completed" as "Completed",
    dueDate: "2023-10-01",
    assignee: "Alice",
  },
  {
    title: "Frontend Integration",
    description: "Integrate the smart contract with the frontend",
    status: "In Progress" as "In Progress",
    dueDate: "2023-10-05",
    assignee: "Bob",
  },
  {
    title: "Security Audit",
    description: "Conduct a security audit of the smart contract",
    status: "Todo" as "Todo",
    dueDate: "2023-10-10",
    assignee: "Charlie",
  },
  {
    title: "Documentation",
    description: "Write comprehensive documentation for the project",
    status: "Todo" as "Todo",
    dueDate: "2023-10-15",
    assignee: "Dave",
  },
  {
    title: "User Testing",
    description: "Conduct user testing and gather feedback",
    status: "Todo" as "Todo",
    dueDate: "2023-10-20",
    assignee: "Eve",
  },
  {
    title: "Deploy to Testnet",
    description: "Deploy the smart contract to a testnet for further testing",
    status: "Todo" as "Todo",
    dueDate: "2023-10-25",
    assignee: "Frank",
  },
];

export function TaskList() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Tasks</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
      </div>
    </div>
  );
}
