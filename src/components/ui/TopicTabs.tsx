"use client";

import { useState } from "react";

type TopicTabsProps = {
  rows: string[][];
  showMore?: boolean;
  // row alignment, the home page centers the rows while the search page spreads them out
  rowClassName?: string;
};

export default function TopicTabs({ rows, showMore = false, rowClassName = "justify-center" }: TopicTabsProps) {
  const [activeTopic, setActiveTopic] = useState(rows[0][0]);

  return (
    <div className="flex flex-col gap-y-[21px]" role="tablist" aria-label="Course topics">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={`flex flex-wrap items-center gap-4 ${rowClassName}`}>
          {row.map((topic) => {
            const isActive = topic === activeTopic;
            return (
              <button
                key={topic}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTopic(topic)}
                className={`rounded-3xl px-4 py-3 text-label-m font-medium transition-colors ${
                  isActive ? "bg-secondary-400 text-neutral-950" : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                {topic}
              </button>
            );
          })}
          {showMore && rowIndex === rows.length - 1 && (
            <button type="button" className="text-label-m font-medium text-primary-800 hover:underline">
              + More
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
