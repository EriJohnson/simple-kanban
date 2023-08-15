import Board from "@/components/Board";
import { TasksProvider } from "./contexts/TasksContext";

export default function App() {
  return (
    <TasksProvider>
      <Board />
    </TasksProvider>
  );
}
