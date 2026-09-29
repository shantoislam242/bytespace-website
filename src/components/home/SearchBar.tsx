import { SearchIcon } from "@/components/icons";
import Button from "@/components/ui/Button";

export default function SearchBar({ className = "" }: { className?: string }) {
  return (
    <form role="search" action="/" className={`flex w-full max-w-[581px] items-start gap-4 ${className}`}>
      <label className="flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-6 py-3">
        <SearchIcon className="shrink-0 text-neutral-400" />
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          className="w-full min-w-0 bg-transparent text-body-l text-neutral-950 outline-none placeholder:text-neutral-400"
        />
      </label>
      <Button type="submit">Search</Button>
    </form>
  );
}
