import { TasksContext } from "@/contexts/TasksContext";
import { useContext } from "react";

export default function useTasks() {
  return useContext(TasksContext);
}
