import { Task } from "@/types/Task";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

export default function useBoard() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const {
    isOpen: isTaskModalOpen,
    onOpen: handleOpenModal,
    onClose: handleCloseModal,
  } = useDisclosure();

  function handleTaskClick(task: Task) {
    setSelectedTask(task);
    handleOpenModal();
  }

  function handleTaskModalClose() {
    setSelectedTask(null);
    handleCloseModal();
  }

  return {
    selectedTask,
    isTaskModalOpen,
    handleTaskClick,
    handleTaskModalClose,
  };
}
