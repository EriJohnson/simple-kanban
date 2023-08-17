import { Task } from "@/types/Task";
import { VStack } from "@chakra-ui/react";
import StatusBadge from "../Badges/StatusBadge";
import { Droppable } from "@hello-pangea/dnd";

interface ColumnProps {
  id: Task["status"];
  children?: React.ReactNode;
}

export default function Column({ id, children }: ColumnProps) {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <VStack maxHeight="100%" spacing={3} align="start" overflow="hidden">
          <StatusBadge status={id} />

          <VStack
            flex={1}
            w="full"
            overflowY="auto"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {children}

            {provided.placeholder}
          </VStack>
        </VStack>
      )}
    </Droppable>
  );
}
