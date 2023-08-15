import { Center, Heading } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Center flex={1}>
      <Heading
        as="h2"
        size="md"
        color="#5A5A65"
        margin="0 auto"
        textAlign="center"
      >
        No tasks found...
      </Heading>
    </Center>
  );
}
