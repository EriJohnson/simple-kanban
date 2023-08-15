import { Task } from "./types/Task";

const tasks: Task[] = [
  {
    id: 1,
    name: "Task 1",
    description: "This is a task...",
    status: "todo",
    date: "2023-08-15",
    location: "Second Floor",
    priority: "low",
    attachments: ["file1.pdf", "file2.pdf"],
  },
  {
    id: 2,
    name: "Task 2",
    description: "This is a task...",
    status: "todo",
    date: "2023-08-15",
    location: "Second Floor",
    priority: "low",
    attachments: ["file1.pdf", "file2.pdf"],
  },
  {
    id: 3,
    name: "Task 3",
    description: "This is a task...",
    status: "inProgress",
    date: "2023-08-15",
    location: "Second Floor",
    priority: "low",
    attachments: ["file1.pdf", "file2.pdf"],
  },
  {
    id: 4,
    name: "Task 4",
    description: "This is a task...",
    status: "inProgress",
    date: "2023-08-17",
    location: "Parking Lot",
    priority: "critical",
    attachments: ["file1.pdf", "file2.pdf"],
  },
  {
    id: 5,
    name: "Task 5",
    description: "This is a task...",
    status: "done",
    date: "2023-08-20",
    location: "First Floor",
    priority: "high",
    attachments: ["file1.pdf", "file2.pdf"],
  },
];

export default tasks;
