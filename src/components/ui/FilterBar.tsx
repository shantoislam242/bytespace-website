import type { ReactNode } from "react";
import { CategoryIcon, FilterIcon, SignalIcon, SortIcon } from "@/components/icons";

function FilterButton({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="flex h-12 items-center gap-1 rounded-3xl border border-neutral-200 bg-white px-4 text-label-m font-medium whitespace-nowrap text-neutral-700 transition-colors hover:border-primary-800"
    >
      <span className="text-neutral-950">{icon}</span>
      {label}
    </button>
  );
}

export default function FilterBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-4">
        <FilterButton icon={<FilterIcon />} label="Filter" />
        <FilterButton icon={<SignalIcon className="size-6" />} label="Level" />
        <FilterButton icon={<CategoryIcon />} label="Category" />
      </div>
      <FilterButton icon={<SortIcon />} label="Most relevant" />
    </div>
  );
}
