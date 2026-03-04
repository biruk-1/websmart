"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Web Smart shipped our SaaS MVP in 7 weeks. The codebase was so clean our internal team took it over without a single complaint.",
    author: "Chris L.",
    role: "Founder, Stackr",
    initial: "CL",
    color: "#3D4A3E",
  },
  {
    quote:
      "We needed a website and an internal dashboard. They delivered both on time, and the site ranks on page one for our main keywords.",
    author: "Maria K.",
    role: "Head of Ops, Finova",
    initial: "MK",
    color: "#6B4C3B",
  },
  {
    quote:
      "The automation system they built cut our manual data entry by 80%. ROI in the first quarter. Couldn't ask for more.",
    author: "James T.",
    role: "CTO, Meridian",
    initial: "JT",
    color: "#2A3F4A",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-[#C4793A] text-[12px] font-semibold uppercase tracking-widest mb-4">
              <span className="w-4 h-px bg-[#C4793A]" />
              What Clients Say
            </span>
            <h2
              id="testimonials-heading"
              className="text-[36px] md:text-[44px] font-bold text-[#111111] leading-[1.1] tracking-[-0.02em]"
            >
              Trusted by founders
              <br />
              and product teams.
            </h2>
          </div>
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#C4793A] hover:text-[#111111] transition-colors shrink-0"
          >
            View all testimonials
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3 7H11M7.5 3.5L11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="bg-[#F8F8F6] border border-[#E2E2DE] rounded-2xl p-6 flex flex-col gap-5 hover:border-[#D8D8D4] hover:shadow-[0_4px_24px_-6px_rgba(0,0,0,0.08)] transition-all duration-200"
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
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#111111]">{t.author}</p>
                  <p className="text-[13px] text-[#6B6B6B]">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
