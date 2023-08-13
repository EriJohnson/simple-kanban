import { Task } from "@/types/Task";
import { Badge } from "@chakra-ui/react";

function getColorScheme(status: Task["status"]) {
  switch (status) {
    case "todo":
      return "gray";
    case "inProgress":
      return "blue";
    case "done":
      return "green";
  }
}

function getTitle(status: Task["status"]) {
  switch (status) {
    case "todo":
      return "To do";
    case "inProgress":
      return "In progress";
    case "done":
      return "Done";
  }
}

interface StatusBadgeProps {
  status: Task["status"];
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge
      borderRadius="full"
      fontSize="md"
      fontWeight="semibold"
      paddingX={3}
      paddingY={1}
      colorScheme={getColorScheme(status)}
    >
      {getTitle(status)}
    </Badge>
  );
}
