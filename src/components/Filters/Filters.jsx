import SearchInput from "../SearchInput/SearchInput";
import StatusFilter from "../StatusFilter/StatusFilter";

export default function Filters() {
  return (
    <section className="mb-4 d-flex w-100 align-items-end">
      <SearchInput />
      <StatusFilter />
    </section>
  );
}
