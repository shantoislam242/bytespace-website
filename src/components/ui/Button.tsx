import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & { href?: never };
type LinkButtonProps = ComponentProps<typeof Link> & { href: string };

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-3xl bg-secondary-400 px-6 py-3 text-label-l font-medium whitespace-nowrap text-neutral-950 transition-colors hover:bg-secondary-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-400";

export default function Button(props: ButtonProps | LinkButtonProps) {
  const className = `${baseStyles} ${props.className ?? ""}`;

  if (typeof props.href === "string") {
    return <Link {...(props as LinkButtonProps)} className={className} />;
  }

  return <button type="button" {...(props as ButtonProps)} className={className} />;
}
