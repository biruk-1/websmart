"use client";

import { motion } from "framer-motion";
import { scrollReveal, scrollRevealStagger, scrollRevealItem, viewportOnce } from "@/lib/animations";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-base-100)] section-padding relative overflow-hidden section-dots-base"
      aria-labelledby="cta-heading"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(196,121,58,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="container-tight relative">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            variants={scrollRevealStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col items-center gap-6 sm:gap-7"
          >
            {/* Badge */}
            <motion.span
              variants={scrollRevealItem}
              className="inline-flex items-center gap-2 bg-[#111111] text-[var(--color-copper)] border border-white/10 text-[12px] font-semibold px-3 py-1.5 rounded-xl tracking-widest uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4793A] animate-pulse" />
              Taking on new projects
            </motion.span>

            {/* Headline */}
            <motion.h2
              variants={scrollRevealItem}
              id="cta-heading"
              className="text-[36px] sm:text-[40px] md:text-[56px] font-bold text-[var(--color-charcoal)] leading-[1.06] tracking-[-0.025em] text-balance"
            >
              Ready to Build
              <br />
              <span className="text-[var(--color-copper)]">Something Smart?</span>
            </motion.h2>

            {/* Sub copy */}
            <motion.p
              variants={scrollRevealItem}
              className="text-[15px] sm:text-[16px] text-[var(--color-muted)] leading-relaxed max-w-md"
            >
              Let&apos;s talk about your project. We&apos;ll review your requirements,
              share a transparent proposal, and move fast.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={scrollRevealItem}
              className="flex flex-wrap gap-3 justify-center group/cta"
            >
              <a
                href="mailto:websmartstudio2025@gmail.com"
                className="btn-primary group text-[14px] px-7 py-3.5 rounded-2xl"
              >
                Let&apos;s Talk
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="arrow-hover"
                >
                  <path
                    d="M3 7H11M7.5 3.5L11 7L7.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="mailto:websmartstudio2025@gmail.com"
                className="btn-secondary text-[14px] px-6 py-3.5 rounded-2xl"
              >
                websmartstudio2025@gmail.com
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p
              variants={scrollRevealItem}
              className="text-[13px] text-[var(--color-muted-light)]"
            >
              Response within 24 hours &middot; No commitment required
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
