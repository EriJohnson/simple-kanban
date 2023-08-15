import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";

interface SearchInputProps {
  onChange: (value: string) => void;
}

export default function SearchInput({ onChange }: SearchInputProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [value, onChange]);

  function handleSearchInputKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      console.log("enter");
    }

    if (event.key === "Escape") {
      setValue("");
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <InputGroup maxW="50%">
      <Input
        value={value}
        onChange={handleChange}
        onKeyDown={handleSearchInputKeyDown}
        placeholder="Search for a task"
        bg="white"
        borderRadius="lg"
        border="1px solid #DDD"
        boxShadow="0px 2px 4px 0px rgba(0, 0, 0, 0.08)"
        cursor="pointer"
        transition="all 0.2s"
        color="#5A5A65"
        focusBorderColor="#DDD"
      />

      <InputRightElement
        overflow="hidden"
        fontSize="2xl"
        children={
          <IconButton
            variant="ghost"
            _hover={{ bg: "gray.50" }}
            aria-label="Buscar"
            icon={<MdSearch color="#A0AEC0" />}
          />
        }
      />
    </InputGroup>
  );
}
