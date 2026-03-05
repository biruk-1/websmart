"use client";

import { motion } from "framer-motion";
import { scrollReveal, scrollRevealStagger, scrollRevealItem, viewportOnce } from "@/lib/animations";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-base-100)] section-padding relative overflow-hidden"
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
              className="inline-flex items-center gap-2 bg-[#1E1E1E] text-[#C4793A] border border-[#2A2A2A] text-[12px] font-semibold px-3 py-1.5 rounded-xl tracking-widest uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4793A] animate-pulse" />
              Taking on new projects
            </motion.span>

            {/* Headline */}
            <motion.h2
              variants={scrollRevealItem}
              id="cta-heading"
              className="text-[36px] sm:text-[40px] md:text-[56px] font-bold text-[#F8F8F6] leading-[1.06] tracking-[-0.025em] text-balance"
            >
              Ready to Build
              <br />
              <span className="text-[#C4793A]">Something Smart?</span>
            </motion.h2>

            {/* Sub copy */}
            <motion.p
              variants={scrollRevealItem}
              className="text-[15px] sm:text-[16px] text-[#9A9A9A] leading-relaxed max-w-md"
            >
              Let&apos;s talk about your project. We&apos;ll review your requirements,
              share a transparent proposal, and move fast.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={scrollRevealItem}
              className="flex flex-wrap gap-3 justify-center"
            >
              <a
                href="mailto:websmartstudio2025@gmail.com"
                className="inline-flex items-center gap-2.5 bg-[#C4793A] text-white text-[14px] font-semibold px-7 py-3.5 rounded-2xl hover:bg-[#D4895A] transition-colors duration-200 shadow-[0_4px_20px_-4px_rgba(196,121,58,0.5)]"
              >
                Let&apos;s Talk
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
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
                className="inline-flex items-center gap-2 bg-transparent text-[#9A9A9A] text-[14px] font-medium px-6 py-3.5 rounded-2xl border border-[#2A2A2A] hover:border-[#4A4A4A] hover:text-[#F8F8F6] transition-all duration-200"
              >
                websmartstudio2025@gmail.com
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p
              variants={scrollRevealItem}
              className="text-[13px] text-[#4A4A4A]"
            >
              Response within 24 hours &middot; No commitment required
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
