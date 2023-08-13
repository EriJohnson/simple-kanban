import { Task } from "@/types/Task";
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import LocationIcon from "../icons/Location";
import formatDate from "@/utils/formatDate";

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

export default function TaskCard(task: Task) {
  return (
    <Card
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
    >
      <CardHeader px={4} pb={0}>
        <Heading fontSize="md" fontWeight="semibold">
          {task.name}
        </Heading>
      </CardHeader>

      <CardBody px={4} py={0}>
        <Text>
          <LocationIcon mr={1} />
          {task.location}
        </Text>
      </CardBody>

      <CardFooter px={4}>
        <HStack w="full" justify="space-between">
          <Badge
            colorScheme={getColorScheme(task.priority)}
            borderRadius="md"
            paddingX={1}
          >
            {task.priority}
          </Badge>

          <Text fontSize="sm">{formatDate(task.date)}</Text>
        </HStack>
      </CardFooter>
    </Card>
  );
}
