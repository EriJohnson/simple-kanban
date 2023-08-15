import { Task } from "@/types/Task";
import { createContext, useCallback, useMemo, useState } from "react";
import mock from "../mock";

interface TasksContextProps {
  tasks: Task[];
  todoTasks: Task[];
  inProgressTasks: Task[];
  doneTasks: Task[];
  isSearchResultEmpty: boolean;
  locationsFilter: Task["location"][];
  hasFilters: boolean;
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newTask: Task) => void;
  handleSearch: (search: string) => void;
  handleStatusFilter: (status: string | null) => void;
  handleLocationFilter: (location: string | null) => void;
  handlePriorityFilter: (priority: string | null) => void;
  clearFilters: () => void;
}

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksContext = createContext({} as TasksContextProps);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(mock as Task[]);
  const [search, setSearch] = useState<string>("");

  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const [locationFilter, setLocationFilter] = useState<string | null>(null);

  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);

  function addTask(task: Task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function editTask(id: number, newTask: Task) {
    setTasks(tasks.map((task) => (task.id === id ? newTask : task)));
  }

  function handleStatusFilter(status: string | null) {
    setStatusFilter(status);
  }

  function handleLocationFilter(location: string | null) {
    setLocationFilter(location);
  }

  function handlePriorityFilter(priority: string | null) {
    setPriorityFilter(priority);
  }

  const handleSearch = useCallback((search: string) => {
    setSearch(search);
  }, []);

  function clearFilters() {
    setStatusFilter(null);
    setLocationFilter(null);
    setPriorityFilter(null);
    setSearch("");
  }

  const filteredTasks = useMemo(() => {
    return tasks.filter(
      (task) =>
        task.name.toLowerCase().includes(search.toLowerCase()) &&
        (!statusFilter || task.status === statusFilter) &&
        (!locationFilter || task.location === locationFilter) &&
        (!priorityFilter || task.priority === priorityFilter)
    );
  }, [search, tasks, statusFilter, locationFilter, priorityFilter]);

  const todoTasks: Task[] = filteredTasks.filter(
    (task) => task.status === "todo"
  );

  const inProgressTasks: Task[] = filteredTasks.filter(
    (task) => task.status === "inProgress"
  );

  const doneTasks: Task[] = filteredTasks.filter(
    (task) => task.status === "done"
  );

  const hasFilters = useMemo(() => {
    return (
      statusFilter !== null ||
      locationFilter !== null ||
      priorityFilter !== null
    );
  }, [statusFilter, locationFilter, priorityFilter]);

  const isSearchResultEmpty = useMemo(() => {
    return filteredTasks.length === 0 && (search.length > 0 || hasFilters);
  }, [filteredTasks.length, hasFilters, search.length]);

  const locationsFilter = useMemo(() => {
    const locations = tasks.map((task) => task.location);

    return [...new Set(locations)];
  }, [tasks]);

  const value = {
    tasks: filteredTasks,
    todoTasks,
    inProgressTasks,
    doneTasks,
    isSearchResultEmpty,
    locationsFilter,
    hasFilters,
    addTask,
    deleteTask,
    editTask,
    handleSearch,
    handleStatusFilter,
    handleLocationFilter,
    handlePriorityFilter,
    clearFilters,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
