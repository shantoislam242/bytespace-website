import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: ReactNode;
  description: ReactNode;
  size?: "m" | "s";
  className?: string;
};

export default function SectionHeading({ title, description, size = "m", className = "" }: SectionHeadingProps) {
  return (
    <div className={`mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center ${className}`}>
      <h2
        className={`font-heading font-semibold text-ink ${
          size === "m" ? "text-[32px] leading-[1.2] tracking-[-0.01em] sm:text-heading-m" : "text-[28px] leading-[1.2] tracking-[-0.01em] sm:text-heading-s"
        }`}
      >
        {title}
      </h2>
      <p className="text-body-m text-neutral-400 sm:text-body-l">{description}</p>
    </div>
  );
}
