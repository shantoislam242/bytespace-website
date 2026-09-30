import type { ReactNode } from "react";
import Navbar from "./Navbar";

type PageHeaderProps = {
  children: ReactNode;
  className?: string;
};

// Blue grid header used on the inner pages
export default function PageHeader({ children, className = "" }: PageHeaderProps) {
  return (
    <section className={`bg-grid relative bg-primary-800 ${className}`}>
      <Navbar />
      {children}
    </section>
  );
}
