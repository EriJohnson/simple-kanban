import { Select, Icon, As } from "@chakra-ui/react";

interface FilterSelectProps {
  icon: As;
  options: string[];
  name: string;
  onChange: (value: string) => void;
}

export default function FilterSelect({
  icon,
  options,
  name,
  onChange,
}: FilterSelectProps) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    onChange(event.target.value);
  }

  return (
    <Select
      placeholder={name}
      variant="outline"
      bg="#f8f8f8"
      onChange={handleChange}
      icon={<Icon as={icon} />}
      color="#5A5A65"
      sx={{
        option: {
          color: "#5A5A65",
        },
      }}
    >
      <option hidden>{name}</option>
      {options?.map((optionItem) => (
        <option
          key={optionItem}
          value={optionItem}
          style={{ textTransform: "capitalize" }}
        >
          {optionItem}
        </option>
      ))}
    </Select>
  );
}
