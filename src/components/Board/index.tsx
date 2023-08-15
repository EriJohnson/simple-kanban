import useTasks from "@/hooks/useTasks";
import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Column from "../Column";
import Filters from "../Filters";
import NotFound from "../NotFound";
import TaskCard from "../TaskCard";
import TaskModal from "../TaskModal";
import useBoard from "./useBoard";

export default function Board() {
  const { todoTasks, inProgressTasks, doneTasks, isSearchResultEmpty } =
    useTasks();

  const {
    isTaskModalOpen,
    selectedTask,
    handleTaskClick,
    handleTaskModalClose,
  } = useBoard();

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
        <HStack justify="space-between">
          <Box>
            <Heading as="h1" fontSize="2rem">
              Simple Kanban
            </Heading>
            <Text fontSize="sm">A board to keep track of tasks.</Text>
          </Box>

          <Filters />
        </HStack>

        <Flex
          flex={1}
          marginTop={8}
          borderRadius="xl"
          background="#F8F8F8"
          padding={5}
          overflow="hidden"
        >
          {!isSearchResultEmpty ? (
            <SimpleGrid flex={1} columns={{ base: 1, md: 3 }} spacing={10}>
              <Column status="todo">
                {todoTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onClick={handleTaskClick}
                  />
                ))}
              </Column>

              <Column status="inProgress">
                {inProgressTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onClick={handleTaskClick}
                  />
                ))}
              </Column>

              <Column status="done">
                {doneTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onClick={handleTaskClick}
                  />
                ))}
              </Column>
            </SimpleGrid>
          ) : (
            <NotFound />
          )}
        </Flex>

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
