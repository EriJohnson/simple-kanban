import { Badge, VStack } from "@chakra-ui/react";
import TaskCard from "../TaskCard";
import { Task } from "@/types/Task";

function getColorScheme(type: Task["status"]) {
  switch (type) {
    case "todo":
      return "gray";
    case "inProgress":
      return "blue";
    case "done":
      return "green";
  }
}

function getTitle(type: Task["status"]) {
  switch (type) {
    case "todo":
      return "To do";
    case "inProgress":
      return "In progress";
    case "done":
      return "Done";
  }
}

interface ColumnProps {
  type: Task["status"];
}

export default function Column({ type }: ColumnProps) {
  return (
    <VStack maxHeight="100%" spacing={3} align="start" overflow="hidden">
      <Badge
        borderRadius="full"
        fontSize="md"
        fontWeight="semibold"
        paddingX={3}
        paddingY={1}
        colorScheme={getColorScheme(type)}
      >
        {getTitle(type)}
      </Badge>

      <VStack w="full" overflowY="auto">
        <TaskCard
          description="This is a task..."
          name="Task 3"
          priority="high"
          status="todo"
          date="2023-08-20"
          location="First Floor"
          id={1}
        />

        <TaskCard
          description="This is a task..."
          name="Task 2"
          priority="low"
          status="todo"
          date="2023-08-17"
          location="Parking Lot"
          id={1}
        />

        <TaskCard
          description="This is a task..."
          name="Task 1"
          priority="critical"
          status="todo"
          date="2023-08-15"
          location="Home"
          id={1}
        />
      </VStack>
    </VStack>
  );
}
