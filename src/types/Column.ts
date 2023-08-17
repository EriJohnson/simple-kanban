import { Status } from "./Status";
import { Task } from "./Task";

export interface Column {
  id: Status;
  title: string;
  tasks: Task[];
}
