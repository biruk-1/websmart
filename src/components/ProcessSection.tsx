"use client";

import { motion } from "framer-motion";
import { scrollReveal, scrollRevealScale, scrollRevealStagger, viewportOnce } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We listen deeply. Stakeholder interviews, technical audits, and market analysis give us a complete picture before a single line is written.",
    duration: "1–2 days",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 9h4M9 7v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Strategy & Architecture",
    description:
      "Tech stack selection, system design, and roadmap planning. We create a blueprint that prevents expensive pivots later.",
    duration: "3–5 days",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 11v2a1 1 0 01-1 1h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "Iterative sprints with weekly demos. Clean code, pixel-perfect UI, and thorough testing at every checkpoint.",
    duration: "4–8 weeks",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 12l4-4 3 3 4-5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & Optimization",
    description:
      "Zero-downtime deployment, monitoring setup, and a 30-day post-launch sprint to iron out any rough edges and improve key metrics.",
    duration: "Ongoing",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 3C13.87 3 17 6.13 17 10s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="section-alt-with-gradient section-padding overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="section-dots-overlay" aria-hidden="true" />
      <div className="section-dots-glow" aria-hidden="true" />
      <div className="section-gradient-overlay" aria-hidden="true" />
      <div className="container-tight relative z-10">
        {/* Header */}
        <motion.div
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[var(--color-copper)] text-[12px] font-semibold uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-[var(--color-copper)]" />
            How We Work
          </span>
          <h2
            id="process-heading"
            className="text-[32px] sm:text-[36px] md:text-[44px] font-bold text-[var(--color-charcoal)] leading-[1.1] tracking-[-0.02em] mb-4"
          >
            A process built for
            <br />
            predictable outcomes.
          </h2>
          <p className="text-[16px] text-[var(--color-muted)] leading-relaxed">
            No surprises. No scope creep. Our four-phase process gives every project
            a clear path from idea to production.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-9 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-px bg-[var(--color-border)] z-0"
            aria-hidden="true"
          />

          <motion.div
            variants={scrollRevealStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={scrollRevealScale}
                className="relative flex flex-col gap-4"
              >
                {/* Step number circle */}
                <div className="relative z-10 flex items-center gap-3 lg:block">
                  <div className="w-[72px] h-[72px] rounded-3xl glass-card flex flex-col items-center justify-center gap-0.5 flex-shrink-0">
                    <span className="text-[10px] font-bold text-[var(--color-copper)] tracking-widest">
                      {step.number}
                    </span>
                    <div className="text-[var(--color-muted)]">{step.icon}</div>
                  </div>
                  {/* Mobile connector */}
                  <div className="lg:hidden flex-1 h-px bg-[var(--color-border)]" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-3">
                    <h3 className="text-[16px] font-bold text-[var(--color-charcoal)] tracking-tight">
                      {step.title}
                    </h3>
                    <span className="text-[11px] text-[var(--color-copper)] font-semibold bg-[var(--color-copper-dim)] px-2.5 py-1 rounded-full whitespace-nowrap">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[14px] text-[var(--color-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
