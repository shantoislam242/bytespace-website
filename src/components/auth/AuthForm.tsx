"use client";

import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import Button from "@/components/ui/Button";

type AuthFormProps = {
  eyebrow: string;
  title: ReactNode;
  submitLabel: string;
  footer: { text: string; linkLabel: string; href: string; tone?: "muted" | "dark" };
  children: ReactNode;
  extra?: ReactNode;
  className?: string;
};

export default function AuthForm({ eyebrow, title, submitLabel, footer, children, extra, className = "lg:h-full" }: AuthFormProps) {
  // There is no backend for this project, so the form only runs browser validation.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className={`flex flex-col gap-16 lg:justify-between lg:gap-0 ${className}`}>
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-body-l text-primary-800">{eyebrow}</p>
          <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.01em] text-neutral-950 sm:text-heading-m">
            {title}
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {children}
          <Button type="submit" className="self-end">
            {submitLabel}
          </Button>
        </form>
      </div>

      {extra}

      <p className={`text-center text-body-m ${footer.tone === "dark" ? "text-neutral-700" : "text-muted"}`}>
        {footer.text}{" "}
        <Link href={footer.href} className="text-primary-800 hover:underline">
          {footer.linkLabel}
        </Link>
      </p>
    </div>
  );
}
