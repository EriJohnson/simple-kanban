export interface Task {
  id: number;
  name: string;
  date: string;
  location: string;
  priority: "low" | "high" | "critical";
  description: string;
  attachments?: string[];
  status: "todo" | "inProgress" | "done";
}
