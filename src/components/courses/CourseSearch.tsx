import { ChevronDownIcon, SearchIcon } from "@/components/icons";

export default function CourseSearch() {
  return (
    <form role="search" action="/courses" className="flex w-full max-w-[624px] items-start gap-3 sm:gap-4">
      <label className="flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-6">
        <SearchIcon className="shrink-0 text-neutral-400" />
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          name="q"
          placeholder="Search"
          className="w-full min-w-0 bg-transparent text-body-l text-neutral-950 outline-none placeholder:text-neutral-400"
        />
      </label>
      <button
        type="button"
        className="flex h-12 items-center gap-2 rounded-3xl bg-secondary-400 px-6 text-label-l font-medium text-neutral-950 transition-colors hover:bg-secondary-300"
      >
        Courses
        <ChevronDownIcon />
      </button>
    </form>
  );
}
