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
import { DragDropContext } from "@hello-pangea/dnd";
import Column from "../Column";
import Filters from "../Filters";
import NotFound from "../NotFound";
import TaskCard from "../TaskCard";
import TaskModal from "../TaskModal";
import useBoard from "./useBoard";
import useColumns from "@/hooks/useColumns";

export default function Board() {
  const { isSearchResultEmpty } = useTasks();
  const { columns, handleDragEnd } = useColumns();

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
        <HStack justify="space-between" align="start">
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
          <DragDropContext onDragEnd={handleDragEnd}>
            {!isSearchResultEmpty ? (
              <SimpleGrid flex={1} columns={{ base: 1, md: 3 }} spacing={10}>
                {columns.map((column) => (
                  <Column key={column.id} id={column.id}>
                    {column.tasks.map((task, index) => (
                      <TaskCard
                        key={task.id}
                        index={index}
                        task={task}
                        onClick={handleTaskClick}
                      />
                    ))}
                  </Column>
                ))}
              </SimpleGrid>
            ) : (
              <NotFound />
            )}
          </DragDropContext>
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
