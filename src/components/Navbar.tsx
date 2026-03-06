"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Partners", href: "/#partners" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClassName = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-shell ${
    scrolled ? "navbar-shell--scrolled" : "navbar-shell--top"
  }`;

  const isDark = theme === "dark";
  const navTextClassName = isDark
    ? "text-[rgba(245,245,242,0.78)] hover:text-white"
    : "text-[#6B6B6B] hover:text-[#111111]";
  const logoTextClassName = isDark ? "text-white" : "text-[#111111]";
  const logoMarkClassName = isDark
    ? "bg-white text-[#111111] group-hover:bg-[#C4793A]"
    : "bg-[#111111] text-[#F8F8F6] group-hover:bg-[#C4793A]";
  const toggleClassName = isDark
    ? "border-[var(--color-border)] bg-[var(--color-surface)] text-white hover:text-white hover:border-[#C4793A]/70"
    : "border-[#E2E2DE] bg-[#F8F8F6] text-[#6B6B6B] hover:text-[#111111] hover:border-[#C4793A]/60";
  const mobileMenuClassName = isDark
    ? "md:hidden border-t border-[var(--color-border)] pb-6 pt-4 bg-[rgba(7,7,7,0.96)] backdrop-blur-md"
    : "md:hidden border-t border-[#E2E2DE] pb-6 pt-4 bg-[#F8F8F6]/95 backdrop-blur-md";
  const mobileLineClassName = isDark ? "bg-white" : "bg-[#111111]";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={headerClassName}
    >
      <div className="container-tight">
        <nav
          className="flex items-center justify-between h-16 md:h-18"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            aria-label="Web Smart home"
          >
            <span
              className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${logoMarkClassName}`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 7L5.5 3.5L7 5L10 2L12 4M2 10.5L5.5 7L7 8.5L10 5.5L12 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className={`font-semibold text-[17px] tracking-tight ${logoTextClassName}`}>
              Web<span className="text-[#C4793A]">Smart</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-8" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`link-underline text-[14px] font-medium transition-colors duration-200 py-1 ${navTextClassName}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200 ${toggleClassName}`}
              >
                {isDark ? (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.5 2.25A5.25 5.25 0 1012.75 7.5 3.75 3.75 0 017.5 2.25z"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle
                      cx="7.5"
                      cy="7.5"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                    <path
                      d="M7.5 1.25v1.5M7.5 12.25v1.5M2.25 7.5h1.5M11.25 7.5h1.5M3.3 3.3l1.05 1.05M10.65 10.65l1.05 1.05M11.7 3.3 10.65 4.35M4.35 10.65 3.3 11.7"
                      stroke="currentColor"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>

              {/* CTA */}
              <Link
                href="/#contact"
                className="btn-primary group text-[13px] px-5 py-2.5"
              >
                Book a Strategy Call
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="arrow-hover"
                >
                  <path
                    d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 transition-all duration-200 ${mobileLineClassName} ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 transition-all duration-200 ${mobileLineClassName} ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 transition-all duration-200 ${mobileLineClassName} ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`${mobileMenuClassName} rounded-b-2xl`}
          >
            <div className="flex flex-col gap-3">
              <ul className="flex flex-col gap-1" role="list">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-2 text-[15px] font-medium transition-colors ${navTextClassName}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200 ${toggleClassName}`}
                >
                  {isDark ? (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.5 2.25A5.25 5.25 0 1012.75 7.5 3.75 3.75 0 017.5 2.25z"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <circle
                        cx="7.5"
                        cy="7.5"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      />
                      <path
                        d="M7.5 1.25v1.5M7.5 12.25v1.5M2.25 7.5h1.5M11.25 7.5h1.5M3.3 3.3l1.05 1.05M10.65 10.65l1.05 1.05M11.7 3.3 10.65 4.35M4.35 10.65 3.3 11.7"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </button>
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary flex-1 justify-center text-[14px] px-4 py-2.5 rounded-lg"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
