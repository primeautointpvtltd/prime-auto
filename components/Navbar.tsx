"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#inventory", label: "Brands" },
  { href: "#how-to-buy", label: "How to Buy" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-[#ffffff] ${
        scrolled ? "border-b border-prime-navy/10" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-2.5">
          <Image
            src="/logo-mark.png"
            alt="Prime Auto mark"
            width={150}
            height={63}
            className="h-9 w-auto object-contain sm:h-11"
            priority
          />
          <span className="font-display text-sm font-semibold tracking-[0.06em] text-prime-navy sm:text-base lg:text-lg">
            PRIME AUTO INTERNATIONAL
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-prime-navy/80 transition hover:bg-prime-navy/5 hover:text-prime-navy"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-md bg-prime-cyan px-4 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-prime-navy transition hover:bg-prime-navy hover:text-white"
          >
            Enquire
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-prime-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-prime-navy transition ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-prime-navy transition ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-prime-navy transition ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-prime-navy/10 bg-[#ffffff] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-prime-navy/10 py-3 text-sm font-medium uppercase tracking-[0.14em] text-prime-navy/90"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
