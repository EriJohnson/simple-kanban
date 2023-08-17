import { Task } from "@/types/Task";
import formatDate from "@/utils/formatDate";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { MdLocationPin as LocationIcon } from "react-icons/md";
import PriorityBadge from "../Badges/PriorityBadge";
import { Draggable } from "@hello-pangea/dnd";

interface TaskCardProps {
  task: Task;
  index: number;
  onClick: (task: Task) => void;
}

export default function TaskCard({ task, index, onClick }: TaskCardProps) {
  function handleClick() {
    onClick(task);
  }

  return (
    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          w="full"
          borderRadius="lg"
          border="1px solid #DDD"
          boxShadow="0px 2px 4px 0px rgba(0, 0, 0, 0.08)"
          cursor="pointer"
          transition="all 0.2s"
          color="#5A5A65"
          _hover={{
            boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.16)",
            bg: "#F8F8F8",
          }}
          onClick={handleClick}
        >
          <CardHeader px={4} pb={0}>
            <Heading fontSize="md" fontWeight="semibold">
              {task.name}
            </Heading>
          </CardHeader>

          <CardBody px={4} py={0}>
            <HStack spacing={1}>
              <Icon as={LocationIcon} />
              <Text as="span">{task.location}</Text>
            </HStack>
          </CardBody>

          <CardFooter px={4}>
            <HStack w="full" justify="space-between">
              <PriorityBadge priority={task.priority} />

              <Text fontSize="sm">{formatDate(task.date)}</Text>
            </HStack>
          </CardFooter>
        </Card>
      )}
    </Draggable>
  );
}
