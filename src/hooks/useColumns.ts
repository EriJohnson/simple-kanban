import { Column } from "@/types/Column";
import { useEffect, useState } from "react";
import useTasks from "./useTasks";

interface useColumnsReturn {
  columns: Column[];
  handleDragEnd: (result: {
    destination: { droppableId: string; index: number };
    source: { droppableId: string; index: number };
  }) => void;
}

export default function useColumns(): useColumnsReturn {
  const [columns, setColumns] = useState<Column[]>([] as Column[]);
  const { todoTasks, inProgressTasks, doneTasks, editTask } = useTasks();

  function handleColumnChange(newColumns: Column[]) {
    setColumns(newColumns);
  }

  useEffect(() => {
    const newColumns: Column[] = [
      {
        id: "todo",
        title: "To do",
        tasks: todoTasks,
      },
      {
        id: "inProgress",
        title: "In progress",
        tasks: inProgressTasks,
      },
      {
        id: "done",
        title: "Done",
        tasks: doneTasks,
      },
    ];

    setColumns(newColumns);
  }, [doneTasks, inProgressTasks, todoTasks]);

  function handleDragEnd(result) {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    const isSameColumn = destination.droppableId === source.droppableId;
    const isSameIndex = destination.index === source.index;

    if (isSameColumn && isSameIndex) {
      return;
    }

    const sourceColumn = columns.find(
      (column) => column.id === source.droppableId
    );
    const destinationColumn = columns.find(
      (column) => column.id === destination.droppableId
    );

    if (!sourceColumn || !destinationColumn) {
      return;
    }

    if (isSameColumn) {
      const updatedTasks = Array.from(sourceColumn.tasks);
      const [movedTask] = updatedTasks.splice(source.index, 1);
      updatedTasks.splice(destination.index, 0, movedTask);

      const updatedColumns = columns.map((column) => {
        if (column.id === source.droppableId) {
          return { ...column, tasks: updatedTasks };
        }
        return column;
      });

      handleColumnChange(updatedColumns);
    } else {
      const sourceTasks = Array.from(sourceColumn.tasks);
      const destinationTasks = Array.from(destinationColumn.tasks);

      const [movedTask] = sourceTasks.splice(source.index, 1);
      const updatedTask = { ...movedTask, status: destinationColumn.id };
      editTask(movedTask.id, updatedTask);
      destinationTasks.splice(destination.index, 0, updatedTask);

      const updatedColumns = columns.map((column) => {
        if (column.id === source.droppableId) {
          return { ...column, tasks: sourceTasks };
        }
        if (column.id === destination.droppableId) {
          return { ...column, tasks: destinationTasks };
        }
        return column;
      });

      handleColumnChange(updatedColumns);
    }
  }

  return { columns, handleDragEnd };
}
