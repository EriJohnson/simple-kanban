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
  hasFilter: boolean;
  statusFilter: string;
  locationFilter: string;
  priorityFilter: string;
  handleTasksChange: (newTasks: Task[]) => void;
  editTask: (id: number, newTask: Task) => void;
  handleSearch: (search: string) => void;
  handleStatusFilter: (status: string) => void;
  handleLocationFilter: (location: string) => void;
  handlePriorityFilter: (priority: string) => void;
  clearFilters: () => void;
}

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksContext = createContext({} as TasksContextProps);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(mock.mockTasks as Task[]);
  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [locationFilter, setLocationFilter] = useState<string>("");
  const [priorityFilter, setPriorityFilter] = useState<string>("");

  function handleTasksChange(newTasks: Task[]) {
    setTasks(newTasks);
  }

  function editTask(id: number, newTask: Task) {
    setTasks(tasks.map((task) => (task.id === id ? newTask : task)));
  }

  function handleStatusFilter(status: string) {
    setStatusFilter(status);
  }

  function handleLocationFilter(location: string) {
    setLocationFilter(location);
  }

  function handlePriorityFilter(priority: string) {
    setPriorityFilter(priority);
  }

  const handleSearch = useCallback((search: string) => {
    setSearch(search);
  }, []);

  function clearFilters() {
    setStatusFilter("");
    setLocationFilter("");
    setPriorityFilter("");
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

  const hasFilter = useMemo(() => {
    return !!statusFilter || !!locationFilter || !!priorityFilter;
  }, [statusFilter, locationFilter, priorityFilter]);

  const isSearchResultEmpty = useMemo(() => {
    return filteredTasks.length === 0 && (search.length > 0 || hasFilter);
  }, [filteredTasks.length, hasFilter, search.length]);

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
    hasFilter,
    statusFilter,
    locationFilter,
    priorityFilter,
    handleSearch,
    handleStatusFilter,
    handleLocationFilter,
    handlePriorityFilter,
    clearFilters,
    handleTasksChange,
    editTask,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
