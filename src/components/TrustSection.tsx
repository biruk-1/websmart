"use client";

import { motion } from "framer-motion";
import { scrollReveal, scrollRevealStagger, scrollRevealItem, viewportOnce } from "@/lib/animations";

const stats = [
  { value: "40+", label: "Products shipped" },
  { value: "8 wks", label: "Average time to launch" },
  { value: "99.9%", label: "Average uptime delivered" },
  { value: "3×", label: "Avg. revenue growth for clients" },
];

const trustLogos = [
  { name: "Finova", abbr: "FN" },
  { name: "Stackr", abbr: "ST" },
  { name: "Loopkit", abbr: "LK" },
  { name: "Meridian", abbr: "MD" },
  { name: "Arcflow", abbr: "AF" },
  { name: "Velox", abbr: "VX" },
];

export default function TrustSection() {
  return (
    <section
      id="about"
      className="section-alt-with-gradient section-padding border-t border-b border-[var(--color-border)] overflow-hidden"
      aria-label="Trust and social proof"
    >
      <div className="section-dots-overlay" aria-hidden="true" />
      <div className="section-dots-glow" aria-hidden="true" />
      <div className="section-gradient-overlay" aria-hidden="true" />
      <div className="container-tight relative z-10">
        {/* Client logos */}
        <motion.div
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[13px] font-medium text-[var(--color-muted-light)] uppercase tracking-widest mb-8">
            Trusted by builders and founders
          </p>
          <motion.div
            variants={scrollRevealStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
          >
            {trustLogos.map((logo) => (
              <motion.div
                key={logo.name}
                variants={scrollRevealItem}
                className="flex items-center gap-2.5 text-[var(--color-muted-light)] hover:text-[var(--color-muted)] transition-colors duration-200"
                aria-label={logo.name}
              >
                <div className="w-8 h-8 rounded-xl glass-subtle flex items-center justify-center text-[10px] font-bold text-[var(--color-muted)]">
                  {logo.abbr}
                </div>
                <span className="text-[15px] font-semibold tracking-tight">{logo.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={scrollRevealStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scrollRevealItem}
              className="glass-card rounded-3xl px-4 sm:px-6 py-6 sm:py-7 flex flex-col gap-1 text-center"
            >
              <span className="text-[32px] md:text-[36px] font-bold text-[var(--color-charcoal)] leading-none tracking-tight">
                {stat.value}
              </span>
              <span className="text-[13px] text-[var(--color-muted)] font-medium leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
