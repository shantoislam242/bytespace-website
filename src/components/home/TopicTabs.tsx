"use client";

import { useState } from "react";
import { courseTopics } from "@/data/courses";

export default function TopicTabs() {
  const [activeTopic, setActiveTopic] = useState(courseTopics[0][0]);

  return (
    <div className="flex flex-col gap-y-[21px]" role="tablist" aria-label="Course topics">
      {courseTopics.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap items-center justify-center gap-4">
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
          {rowIndex === courseTopics.length - 1 && (
            <button type="button" className="text-label-m font-medium text-primary-800 hover:underline">
              + More
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
