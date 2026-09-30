"use client";

import Link from "next/link";
import { useState } from "react";
import { BagIcon, CloseIcon, MenuIcon } from "@/components/icons";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators/purepearl-studio" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-30 text-neutral-50">
      <div className="container-page flex h-[120px] items-start justify-between">
        <Logo className="mt-[35px]" />

        <nav className="absolute left-1/2 mt-[47px] hidden -translate-x-1/2 gap-6 lg:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={index === 0 ? "text-label-m font-medium" : "text-body-m hover:text-secondary-400"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-[48px] hidden items-center gap-6 lg:flex">
          <Link href="/login" className="text-base leading-6 hover:text-secondary-400">
            Sign In
          </Link>
          <Link href="/register" className="text-base leading-6 hover:text-secondary-400">
            Join Us
          </Link>
          <button type="button" aria-label="Open cart" className="hover:text-secondary-400">
            <BagIcon />
          </button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="mt-[42px] lg:hidden"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isOpen && (
        <div className="container-page absolute inset-x-0 top-24 lg:hidden">
          <nav className="flex flex-col gap-4 rounded-2xl bg-white p-6 text-neutral-950 shadow-lg">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-body-m">
                {link.label}
              </Link>
            ))}
            <hr className="border-neutral-100" />
            <Link href="/login" className="text-body-m">
              Sign In
            </Link>
            <Link href="/register" className="text-body-m">
              Join Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
