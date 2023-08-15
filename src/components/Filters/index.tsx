import useTasks from "@/hooks/useTasks";
import { CloseButton, HStack, Tooltip } from "@chakra-ui/react";
import {
  MdLocationPin as LocationIcon,
  MdPriorityHigh as PriorityIcon,
  MdOutlineAreaChart as StatusIcon,
} from "react-icons/md";
import FilterSelect from "./FilterSelect";
import SearchInput from "./SearchInput";

export default function Filters() {
  const {
    locationsFilter,
    hasFilters,
    handleSearch,
    handleStatusFilter,
    handleLocationFilter,
    handlePriorityFilter,
    clearFilters,
  } = useTasks();

  return (
    <HStack spacing={2}>
      <SearchInput onChange={handleSearch} />

      <FilterSelect
        name="Status"
        icon={StatusIcon}
        onChange={handleStatusFilter}
        options={["todo", "inProgress", "done"]}
      />

      <FilterSelect
        name="Location"
        icon={LocationIcon}
        onChange={handleLocationFilter}
        options={locationsFilter}
      />

      <FilterSelect
        name="Priority"
        icon={PriorityIcon}
        onChange={handlePriorityFilter}
        options={["low", "high", "critical"]}
      />

      {hasFilters && (
        <Tooltip label="Clear Filters">
          <CloseButton onClick={clearFilters} />
        </Tooltip>
      )}
    </HStack>
  );
}
