import { Task } from "@/types/Task";
import { createContext, useCallback, useMemo, useState } from "react";
import mock from "../mock";

interface TasksContextProps {
  tasks: Task[];
  todoTasks: Task[];
  inProgressTasks: Task[];
  doneTasks: Task[];
  isSearchResultEmpty: boolean;
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

  const handleSearch = useCallback((search: string) => {
    setSearch(search);
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, tasks]);

  const todoTasks: Task[] = filteredTasks.filter(
    (task) => task.status === "todo"
  );

  const inProgressTasks: Task[] = filteredTasks.filter(
    (task) => task.status === "inProgress"
  );

  const doneTasks: Task[] = filteredTasks.filter(
    (task) => task.status === "done"
  );

  const isSearchResultEmpty = useMemo(() => {
    return filteredTasks.length === 0 && search.length > 0;
  }, [filteredTasks.length, search.length]);

  const value = {
    tasks: filteredTasks,
    todoTasks,
    inProgressTasks,
    doneTasks,
    isSearchResultEmpty,
    addTask,
    deleteTask,
    editTask,
    handleSearch,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
