import { Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Column from "../Column";

export default function Board() {
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
          <Column type="todo" />
          <Column type="inProgress" />
          <Column type="done" />
        </SimpleGrid>
      </Container>
    </>
  );
}
