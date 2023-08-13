import {
  Container,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Column from "../Column";
import TaskModal from "../TaskModal";
import { useState } from "react";
import { Task } from "@/types/Task";
import TaskCard from "../TaskCard";

const tasks: Task[] = [
  {
    id: 1,
    name: "Task 1",
    description: "This is a task...",
    status: "todo",
    date: "2023-08-15",
    location: "Second Floor",
    priority: "low",
    attachments: ["file1.pdf", "file2.pdf"],
  },
  {
    id: 2,
    name: "Task 2",
    description: "This is a task...",
    status: "todo",
    date: "2023-08-15",
    location: "Second Floor",
    priority: "low",
    attachments: ["file1.pdf", "file2.pdf"],
  },
  {
    id: 3,
    name: "Task 3",
    description: "This is a task...",
    status: "inProgress",
    date: "2023-08-15",
    location: "Second Floor",
    priority: "low",
    attachments: ["file1.pdf", "file2.pdf"],
  },
  {
    id: 4,
    name: "Task 4",
    description: "This is a task...",
    status: "inProgress",
    date: "2023-08-17",
    location: "Parking Lot",
    priority: "critical",
    attachments: ["file1.pdf", "file2.pdf"],
  },
  {
    id: 5,
    name: "Task 5",
    description: "This is a task...",
    status: "done",
    date: "2023-08-20",
    location: "First Floor",
    priority: "high",
    attachments: ["file1.pdf", "file2.pdf"],
  },
];

const todoTasks: Task[] = tasks.filter((task) => task.status === "todo");
const inProgressTasks: Task[] = tasks.filter(
  (task) => task.status === "inProgress"
);
const doneTasks: Task[] = tasks.filter((task) => task.status === "done");

export default function Board() {
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

  return (
    <>
      <Container
        maxWidth="1280px"
        height="100vh"
        display="flex"
        flexDirection="column"
        padding={{ base: 4, md: 10 }}
        overflow="hidden"
      >
        <Heading as="h1" fontSize="2rem">
          Simple Kanban
        </Heading>
        <Text fontSize="sm">A board to keep track of tasks.</Text>
        <SimpleGrid
          flex={1}
          marginTop={8}
          borderRadius="xl"
          columns={{ base: 1, md: 3 }}
          background="#F8F8F8"
          spacing={10}
          padding={5}
          overflow="hidden"
        >
          <Column status="todo">
            {todoTasks.map((task) => (
              <TaskCard key={task.id} task={task} onClick={handleTaskClick} />
            ))}
          </Column>

          <Column status="inProgress">
            {inProgressTasks.map((task) => (
              <TaskCard key={task.id} task={task} onClick={handleTaskClick} />
            ))}
          </Column>

          <Column status="done">
            {doneTasks.map((task) => (
              <TaskCard key={task.id} task={task} onClick={handleTaskClick} />
            ))}
          </Column>
        </SimpleGrid>

        {selectedTask && (
          <TaskModal
            task={selectedTask}
            isOpen={isTaskModalOpen}
            onClose={handleTaskModalClose}
          />
        )}
      </Container>
    </>
  );
}
