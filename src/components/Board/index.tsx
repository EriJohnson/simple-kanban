import { Container, Flex, Heading, Text } from "@chakra-ui/react";

export default function Board() {
  return (
    <>
      <Container
        maxWidth="1280px"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        padding={{ base: 4, md: 10 }}
      >
        <Heading as="h1" fontSize="2rem">
          Simple Kanban
        </Heading>
        <Text fontSize="sm">A board to keep track of tasks.</Text>

        <Flex
          flex={1}
          width="full"
          marginTop={8}
          borderRadius="xl"
          background="#F8F8F8"
        ></Flex>
      </Container>
    </>
  );
}
