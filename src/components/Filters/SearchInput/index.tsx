import { Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdSearch as SearchIcon } from "react-icons/md";

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
    <InputGroup>
      <Input
        value={value}
        onChange={handleChange}
        onKeyDown={handleSearchInputKeyDown}
        placeholder="Search"
      />

      <InputRightElement
        children={<Icon boxSize={5} color="#5A5A65" as={SearchIcon} />}
      />
    </InputGroup>
  );
}
