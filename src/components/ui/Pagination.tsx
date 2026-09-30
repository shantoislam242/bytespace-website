"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

const arrowStyles =
  "flex h-12 w-14 items-center justify-center rounded-3xl border border-neutral-200 bg-white transition-colors hover:border-primary-800 disabled:cursor-not-allowed disabled:hover:border-neutral-200";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const [page, setPage] = useState(1);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-6">
      <button
        type="button"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className={`${arrowStyles} text-neutral-700`}
      >
        <ChevronLeftIcon />
      </button>

      {pages.map((number) => (
        <button
          key={number}
          type="button"
          aria-current={number === page ? "page" : undefined}
          onClick={() => setPage(number)}
          className={`font-heading text-heading-xs leading-7 font-semibold ${
            number === page ? "text-neutral-200" : "text-neutral-950 hover:text-primary-800"
          }`}
        >
          {number}
        </button>
      ))}

      <button
        type="button"
        aria-label="Next page"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className={`${arrowStyles} text-neutral-950`}
      >
        <ChevronRightIcon />
      </button>
    </nav>
  );
}
