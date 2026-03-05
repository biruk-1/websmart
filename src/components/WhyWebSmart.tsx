"use client";

import { motion } from "framer-motion";
import { scrollReveal, scrollRevealLeft, scrollRevealScale, scrollRevealStagger, viewportOnce } from "@/lib/animations";

const pillars = [
  {
    title: "Scalable Architecture",
    description:
      "Every system we build anticipates growth. From day-one database design to distributed microservices — your infrastructure won't become a liability.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 18V9l8-5 8 5v9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="8" y="13" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Clean, Documented Code",
    description:
      "We write for humans first. Every codebase is structured, well-documented, and ready for your internal team to take ownership of.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M7 8l-4 3 4 3M15 8l4 3-4 3M13 5l-4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Business-Focused Solutions",
    description:
      "We're not just engineers — we're partners. Every technical decision is mapped to a business outcome you can measure.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 16l4.5-4.5 3 3L16 9l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 9h3v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Performance & Security",
    description:
      "Lighthouse scores above 95. OWASP-aware development. SOC2-friendly architecture patterns baked in, not bolted on.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M11 3L4 6v5c0 4.42 2.98 8.56 7 9.93C15.02 19.56 18 15.42 18 11V6l-7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Long-Term Partnership",
    description:
      "We don't disappear after go-live. Our clients stay with us through growth stages because we care about what happens after launch.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M16 11c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 4h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 4l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Transparent Communication",
    description:
      "Weekly updates, shared project boards, and a direct line to your engineering lead. You're always in the loop — no black boxes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 5h14a1 1 0 011 1v8a1 1 0 01-1 1H8l-4 3V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 9h6M8 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhyWebSmart() {
  return (
    <section
      id="about"
      className="section-alt-with-gradient section-padding overflow-hidden bg-[var(--color-section-alt)]"
      aria-labelledby="why-heading"
    >
      <div className="section-dots-overlay" aria-hidden="true" />
      <div className="section-dots-glow" aria-hidden="true" />
      <div className="section-gradient-overlay" aria-hidden="true" />
      <div className="container-tight relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 sm:gap-14 items-start">
          {/* Left: sticky label */}
          <motion.div
            initial={scrollRevealLeft.hidden}
            whileInView={scrollRevealLeft.visible}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 flex flex-col gap-5"
          >
            <span className="inline-flex items-center gap-2 text-[var(--color-copper)] text-[12px] font-semibold uppercase tracking-widest">
              <span className="w-4 h-px bg-[var(--color-copper)]" />
              Why Web Smart
            </span>
            <h2
              id="why-heading"
              className="text-[32px] sm:text-[36px] md:text-[44px] font-bold text-[var(--color-charcoal)] leading-[1.1] tracking-[-0.02em]"
            >
              Built for
              <br />
              the long run.
            </h2>
            <p className="text-[16px] text-[var(--color-muted)] leading-relaxed">
              We obsess over the details that matter most to growing
              businesses — reliability, clarity, and compounding quality.
            </p>

            {/* Testimonial callout */}
            <motion.div
              initial={scrollReveal.hidden}
              whileInView={scrollReveal.visible}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4 glass-card rounded-3xl p-5 sm:p-6"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--color-copper)" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M7 1l1.5 4H13l-3.5 2.5L11 12 7 9.5 3 12l1.5-4.5L1 5h4.5L7 1z" />
                  </svg>
                ))}
              </div>
              <p className="text-[14px] text-[var(--color-muted)] leading-relaxed italic">
                &ldquo;Web Smart shipped our SaaS MVP in 7 weeks. The codebase was
                so clean our internal team took it over without a single complaint.&rdquo;
              </p>
              <div className="flex items-center gap-2.5 mt-4">
                <div className="w-8 h-8 rounded-full bg-[#3D4A3E] flex items-center justify-center text-[12px] font-bold text-white">
                  CL
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[var(--color-charcoal)]">Chris L.</p>
                  <p className="text-[12px] text-[var(--color-muted-light)]">Founder, Stackr</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: pillars grid */}
          <motion.div
            variants={scrollRevealStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={scrollRevealScale}
                className="group glass-card rounded-3xl p-5 sm:p-6 flex flex-col gap-4 hover:border-[var(--color-copper)]/30 hover:shadow-[var(--glass-shadow-hover)] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-2xl glass-subtle flex items-center justify-center text-[var(--color-muted)] group-hover:bg-[var(--color-copper-dim)] group-hover:text-[var(--color-copper)] group-hover:border-[var(--color-copper)]/30 transition-all duration-200">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[var(--color-charcoal)] mb-1.5 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">
                    {pillar.description}
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
