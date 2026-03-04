"use client";

import { motion } from "framer-motion";

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
      className="section-padding bg-[#F8F8F6]"
      aria-labelledby="why-heading"
    >
      <div className="container-tight">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-14 items-start">
          {/* Left: sticky label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="lg:sticky lg:top-28 flex flex-col gap-5"
          >
            <span className="inline-flex items-center gap-2 text-[#C4793A] text-[12px] font-semibold uppercase tracking-widest">
              <span className="w-4 h-px bg-[#C4793A]" />
              Why Web Smart
            </span>
            <h2
              id="why-heading"
              className="text-[36px] md:text-[44px] font-bold text-[#111111] leading-[1.1] tracking-[-0.02em]"
            >
              Built for
              <br />
              the long run.
            </h2>
            <p className="text-[16px] text-[#6B6B6B] leading-relaxed">
              We obsess over the details that matter most to growing
              businesses — reliability, clarity, and compounding quality.
            </p>

            {/* Testimonial callout */}
            <div className="mt-4 bg-white border border-[#E2E2DE] rounded-2xl p-5">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C4793A" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M7 1l1.5 4H13l-3.5 2.5L11 12 7 9.5 3 12l1.5-4.5L1 5h4.5L7 1z" />
                  </svg>
                ))}
              </div>
              <p className="text-[14px] text-[#4A4A4A] leading-relaxed italic">
                &ldquo;Web Smart shipped our SaaS MVP in 7 weeks. The codebase was
                so clean our internal team took it over without a single complaint.&rdquo;
              </p>
              <div className="flex items-center gap-2.5 mt-4">
                <div className="w-8 h-8 rounded-full bg-[#3D4A3E] flex items-center justify-center text-[12px] font-bold text-white">
                  CL
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#111111]">Chris L.</p>
                  <p className="text-[12px] text-[#9A9A9A]">Founder, Stackr</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: pillars grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="group bg-white border border-[#E2E2DE] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#D8D8D4] hover:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.08)] transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F8F8F6] border border-[#E2E2DE] flex items-center justify-center text-[#6B6B6B] group-hover:bg-[#F0E6DC] group-hover:text-[#C4793A] group-hover:border-[#C4793A]/30 transition-all duration-200">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#111111] mb-1.5 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] text-[#6B6B6B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
