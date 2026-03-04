"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/#contact" },
];

const services = [
  { label: "Web Apps & Websites", href: "/#services" },
  { label: "SaaS Development", href: "/#services" },
  { label: "Automation Systems", href: "/#services" },
  { label: "Mobile App Development", href: "/#services" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#111111] border-t border-[#1E1E1E]"
      aria-label="Site footer"
    >
      <div className="container-tight">
        {/* Main footer content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-10 py-14 border-b border-[#1E1E1E]"
        >
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2" aria-label="Web Smart home">
              <span className="w-7 h-7 rounded-md bg-[#C4793A] flex items-center justify-center flex-shrink-0">
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
                    stroke="#F8F8F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[#F8F8F6] font-semibold text-[17px] tracking-tight">
                Web<span className="text-[#C4793A]">Smart</span>
              </span>
            </Link>
            <p className="text-[13px] text-[#6B6B6B] leading-relaxed max-w-[220px]">
              A digital product studio building web apps, SaaS platforms, and
              automation for ambitious teams.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {[
                {
                  label: "Twitter / X",
                  path: "M4 4l6 6M4 10L10 4M3 3h4l3 3.5-3 3.5H3",
                },
                {
                  label: "LinkedIn",
                  path: "M4 8V12M4 5v.5M8 8c0-1.5 1-2 2-2s2 1 2 2v4M8 8v4",
                },
                {
                  label: "GitHub",
                  path: "M6 15c-2.5-.5-4-2-4-4.5 0-1.2.4-2.2 1.2-3-.1-.4-.2-1.2.2-2.5 0 0 .8-.2 2.5 1A8.5 8.5 0 0110 6c.7 0 1.5.1 2.2.3 1.7-1.2 2.5-1 2.5-1 .4 1.3.3 2.1.2 2.5.7.8 1.2 1.8 1.2 3 0 2.5-1.5 4-4 4.5",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#6B6B6B] hover:text-[#C4793A] hover:border-[#C4793A]/40 transition-all duration-200"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d={social.path}
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[11px] font-semibold text-[#4A4A4A] uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#6B6B6B] hover:text-[#F8F8F6] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-semibold text-[#4A4A4A] uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-[14px] text-[#6B6B6B] hover:text-[#F8F8F6] transition-colors duration-150"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold text-[#4A4A4A] uppercase tracking-widest mb-4">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@websmart.dev"
                className="text-[14px] text-[#6B6B6B] hover:text-[#C4793A] transition-colors duration-150 flex items-center gap-2"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M1.5 3.5L7 8l5.5-4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                hello@websmart.dev
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-[#C4793A] text-white text-[13px] font-medium px-4 py-2.5 rounded-lg hover:bg-[#D4895A] transition-colors duration-200 w-fit mt-1"
              >
                Book a Call
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-[13px] text-[#4A4A4A]">
          <p>© {new Date().getFullYear()} Web Smart. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-[#6B6B6B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#6B6B6B] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
