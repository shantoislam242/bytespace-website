"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseTabs({ slug }: { slug: string }) {
  const pathname = usePathname();
  const base = `/courses/${slug}`;
  const tabs = [
    { label: "About", href: base },
    { label: "Lessons", href: `${base}/lessons` },
    { label: "Reviews", href: `${base}/reviews` },
  ];

  return (
    <nav aria-label="Course sections" className="flex gap-4">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.label}
            href={tab.href}
            scroll={false}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-3xl px-4 py-3 text-label-m font-medium transition-colors ${
              isActive ? "bg-secondary-400 text-neutral-950" : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
