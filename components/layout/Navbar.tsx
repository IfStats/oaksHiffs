"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Properties", href: "/properties" },
  { label: "Lagos", href: "/cities/Lagos" },
  { label: "Accra", href: "/cities/Accra" },
  { label: "Abuja", href: "/cities/Abuja" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-950 text-sm font-semibold text-white transition-transform group-hover:scale-105">
            O
          </div>

          <div>
            <div className="text-base font-semibold tracking-[-0.03em] text-neutral-950">
              Oakshiffs
            </div>

            <div className="text-[9px] font-medium uppercase tracking-[0.25em] text-neutral-400">
              Real Estate
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/properties"
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800"
          >
            Explore properties
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-950 transition hover:bg-neutral-100 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <nav className="mx-auto max-w-7xl px-6 py-5">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-neutral-100 py-4 text-base font-medium text-neutral-700 transition-colors hover:text-neutral-950"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/properties"
                onClick={() => setOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-4 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Explore properties
                <ArrowRight size={15} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}