import useTasks from "@/hooks/useTasks";
import SearchInput from "./SearchInput";

export default function Filters() {
  const { handleSearch } = useTasks();

  return <SearchInput onChange={handleSearch} />;
}
