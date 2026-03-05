"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { scrollReveal, scrollRevealScale, scrollRevealStagger, viewportOnce } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "Web Smart shipped our SaaS MVP in 7 weeks. The codebase was so clean our internal team took it over without a single complaint. We're now scaling with confidence.",
    author: "Chris L.",
    role: "Founder, Stackr",
    initial: "CL",
    color: "#3D4A3E",
    service: "SaaS Development",
  },
  {
    quote:
      "We needed a website and an internal dashboard. They delivered both on time, and the site ranks on page one for our main keywords. Professional from day one.",
    author: "Maria K.",
    role: "Head of Ops, Finova",
    initial: "MK",
    color: "#6B4C3B",
    service: "Web & Dashboard",
  },
  {
    quote:
      "The automation system they built cut our manual data entry by 80%. ROI in the first quarter. Couldn't ask for more.",
    author: "James T.",
    role: "CTO, Meridian",
    initial: "JT",
    color: "#2A3F4A",
    service: "Automation",
  },
  {
    quote:
      "Our mobile app launched on iOS and Android in one go. The UX is smooth, support was responsive, and we hit the App Store featured list.",
    author: "Sarah N.",
    role: "Product Lead, Loopkit",
    initial: "SN",
    color: "#4A3A2A",
    service: "Mobile App",
  },
  {
    quote:
      "We had a vague idea and a tight deadline. Web Smart helped us scope it, build it, and ship it. The process was transparent and the result exceeded expectations.",
    author: "David R.",
    role: "Co-founder, Arcflow",
    initial: "DR",
    color: "#2A4A3A",
    service: "Web Application",
  },
  {
    quote:
      "Finally a dev partner that speaks business. They understood our metrics, our growth goals, and built something we could actually maintain.",
    author: "Elena V.",
    role: "CEO, Velox",
    initial: "EV",
    color: "#3A2A4A",
    service: "SaaS & Web",
  },
];

export default function TestimonialsPageContent() {
  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-[#F8F8F6] min-h-screen">
      <div className="container-tight">
        {/* Breadcrumb / Back */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 sm:mb-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#6B6B6B] hover:text-[#111111] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
        </motion.div>

        {/* Page header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-2xl mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#C4793A] text-[12px] font-semibold uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-[#C4793A]" />
            Testimonials
          </span>
          <h1 className="text-[32px] sm:text-[40px] md:text-[52px] font-bold text-[#111111] leading-[1.08] tracking-[-0.025em] mb-4">
            What our clients
            <br />
            say about us.
          </h1>
          <p className="text-[16px] text-[#6B6B6B] leading-relaxed">
            Real stories from founders and product teams who built with Web Smart.
          </p>
        </motion.header>

        {/* Testimonials grid */}
        <motion.div
          variants={scrollRevealStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.author}
              variants={scrollRevealScale}
              className="glass-card rounded-3xl p-5 sm:p-7 flex flex-col gap-5 hover:shadow-[var(--glass-shadow-hover)] transition-all duration-200"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#C4793A" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M7 1l1.5 4H13l-3.5 2.5L11 12 7 9.5 3 12l1.5-4.5L1 5h4.5L7 1z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-[15px] text-[#4A4A4A] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between gap-4 pt-2 border-t border-[#E2E2DE]">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-[14px] font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-[#111111]">{t.author}</p>
                    <p className="text-[13px] text-[#6B6B6B]">{t.role}</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-[#C4793A] bg-[#F0E6DC] px-2.5 py-1 rounded-full whitespace-nowrap">
                  {t.service}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={viewportOnce}
          transition={{ duration: 0.55 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-[15px] text-[#6B6B6B] mb-4">
            Ready to start your project?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#111111] text-[#F8F8F6] text-[14px] font-semibold px-6 py-3 rounded-xl hover:bg-[#C4793A] transition-colors duration-200"
          >
            Let&apos;s Talk
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3 7H11M7.5 3.5L11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
