import { Task } from "@/types/Task";
import { Badge } from "@chakra-ui/react";

function getColorScheme(type: Task["priority"]) {
  switch (type) {
    case "critical":
      return "red";
    case "high":
      return "yellow";
    case "low":
      return "gray";
  }
}

interface PriorityBadgeProps {
  priority: Task["priority"];
}

export default function PriorityBadge({ priority }: PriorityBadgeProps) {
  return (
    <Badge
      colorScheme={getColorScheme(priority)}
      borderRadius="md"
      paddingX={1}
    >
      {priority}
    </Badge>
  );
}
