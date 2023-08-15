import { Task } from "@/types/Task";
import { createContext, useState } from "react";
import mock from "../mock";

interface TasksContextProps {
  tasks: Task[];
  todoTasks: Task[];
  inProgressTasks: Task[];
  doneTasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newTask: Task) => void;
  handleSearch: (search: string) => void;
}

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksContext = createContext({} as TasksContextProps);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(mock as Task[]);
  const [search, setSearch] = useState<string>("");

  function addTask(task: Task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function editTask(id: number, newTask: Task) {
    setTasks(tasks.map((task) => (task.id === id ? newTask : task)));
  }

  function handleSearch(search: string) {
    setSearch(search);
  }

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  const todoTasks: Task[] = tasks.filter((task) => task.status === "todo");

  const inProgressTasks: Task[] = tasks.filter(
    (task) => task.status === "inProgress"
  );

  const doneTasks: Task[] = tasks.filter((task) => task.status === "done");

  const value = {
    tasks: filteredTasks,
    todoTasks,
    inProgressTasks,
    doneTasks,
    addTask,
    deleteTask,
    editTask,
    handleSearch,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
