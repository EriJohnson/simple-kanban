import { Task } from "@/types/Task";
import { VStack } from "@chakra-ui/react";
import StatusBadge from "../Badges/StatusBadge";

interface ColumnProps {
  status: Task["status"];
  children?: React.ReactNode;
}

export default function Column({ status, children }: ColumnProps) {
  return (
    <VStack maxHeight="100%" spacing={3} align="start" overflow="hidden">
      <StatusBadge status={status} />

      <VStack w="full" overflowY="auto">
        {children}S
      </VStack>
    </VStack>
  );
}
