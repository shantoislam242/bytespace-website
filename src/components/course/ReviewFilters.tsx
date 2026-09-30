"use client";

import { useState } from "react";
import { StarSharpIcon } from "@/components/icons";

const options = ["all", 5, 4, 3, 2, 1] as const;

export default function ReviewFilters() {
  const [active, setActive] = useState<(typeof options)[number]>("all");

  return (
    <div className="flex flex-wrap items-start gap-4">
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            onClick={() => setActive(option)}
            className={`flex items-center gap-1 rounded-3xl px-4 py-3 text-label-m font-medium transition-colors ${
              isActive ? "bg-secondary-400 text-neutral-950" : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100"
            }`}
          >
            {option === "all" ? (
              "All rating"
            ) : (
              <>
                <StarSharpIcon />
                <span className="leading-6">{option}</span>
              </>
            )}
          </button>
        );
      })}
    </div>
  );
}
