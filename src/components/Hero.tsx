"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-[var(--color-base)] overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #D8D8D4 1px, transparent 0)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />
      {/* Gradient fade at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(248,248,246,0) 0%, #F8F8F6 100%)",
        }}
      />

      <div className="container-tight relative w-full py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-6 max-w-xl">
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="inline-flex items-center gap-2 bg-[#F0E6DC] text-[#C4793A] text-[12px] font-semibold px-3 py-1 rounded-full tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4793A]" />
                Digital Product Studio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[44px] md:text-[56px] lg:text-[60px] font-bold text-[var(--color-charcoal)] leading-[1.08] tracking-[-0.02em] text-balance"
            >
              We Build Smart{" "}
              <span className="relative inline-block">
                Digital Products
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 240 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5.5C60 2.5 120 1.5 238 5.5"
                    stroke="#C4793A"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              That Scale
            </motion.h1>

            {/* Subheading */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[17px] text-[var(--color-muted)] leading-relaxed max-w-md"
            >
              Web Smart partners with startups and growing businesses to build
              polished web applications, scalable SaaS products, and intelligent
              automation systems — engineered to last.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#111111] text-[#F8F8F6] text-[14px] font-semibold px-6 py-3 rounded-xl hover:bg-[#C4793A] transition-all duration-200 shadow-sm"
              >
                Start Your Project
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
                href="#services"
                className="inline-flex items-center gap-2 bg-transparent text-[#111111] text-[14px] font-semibold px-6 py-3 rounded-xl border border-[#D8D8D4] hover:border-[#111111] transition-all duration-200"
              >
                View Our Work
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex -space-x-2.5">
                {["C", "M", "A", "R"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#F8F8F6] flex items-center justify-center text-[11px] font-semibold text-[#F8F8F6]"
                    style={{
                      backgroundColor: ["#3D4A3E", "#6B4C3B", "#2A3F4A", "#4A3A2A"][i],
                    }}
                    aria-hidden="true"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-[#6B6B6B]">
                Trusted by <strong className="text-[#111111] font-semibold">40+ founders</strong> worldwide
              </p>
            </motion.div>
          </div>

          {/* Right: Abstract illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative hidden lg:flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Main card */}
              <div className="absolute inset-8 rounded-3xl bg-white border border-[#E2E2DE] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] overflow-hidden">
                {/* Inner content simulation */}
                <div className="p-8 h-full flex flex-col gap-5">
                  {/* Header bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#E2E2DE]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#E2E2DE]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#E2E2DE]" />
                    </div>
                    <div className="w-24 h-2 rounded-full bg-[#F2F2EE]" />
                  </div>

                  {/* Metric cards row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Uptime", value: "99.9%", color: "#3D4A3E" },
                      { label: "Speed", value: "1.2s", color: "#C4793A" },
                      { label: "Users", value: "12.4k", color: "#2A3F4A" },
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-xl p-3 bg-[#F8F8F6] border border-[#E2E2DE]"
                      >
                        <p className="text-[10px] text-[#9A9A9A] font-medium">{metric.label}</p>
                        <p
                          className="text-[16px] font-bold mt-0.5"
                          style={{ color: metric.color }}
                        >
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="flex-1 rounded-xl bg-[#F8F8F6] border border-[#E2E2DE] p-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="w-20 h-2 rounded-full bg-[#E2E2DE]" />
                      <div className="w-10 h-2 rounded-full bg-[#C4793A]/30" />
                    </div>
                    {/* SVG chart */}
                    <div className="flex-1 flex items-end">
                      <svg viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#C4793A" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#C4793A" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 65 C20 60 40 55 60 45 C80 35 100 50 120 38 C140 26 160 32 180 20 C200 8 220 14 240 10"
                          fill="none"
                          stroke="#C4793A"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M0 65 C20 60 40 55 60 45 C80 35 100 50 120 38 C140 26 160 32 180 20 C200 8 220 14 240 10 L240 80 L0 80 Z"
                          fill="url(#chartGrad)"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom list */}
                  <div className="flex flex-col gap-2">
                    {[70, 45, 85].map((width, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded bg-[#F2F2EE] border border-[#E2E2DE] flex-shrink-0" />
                        <div
                          className="h-2 rounded-full bg-[#E2E2DE]"
                          style={{ width: `${width}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge top-right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 right-0 bg-white border border-[#E2E2DE] rounded-2xl px-4 py-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]"
              >
                <p className="text-[11px] text-[#9A9A9A] font-medium">Automation</p>
                <p className="text-[14px] font-bold text-[#111111] mt-0.5">−68% manual work</p>
              </motion.div>

              {/* Floating badge bottom-left */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-4 left-0 bg-[#111111] border border-[#2A2A2A] rounded-2xl px-4 py-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)]"
              >
                <p className="text-[11px] text-[#9A9A9A] font-medium">Deployment</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#5A8A5A] animate-pulse" />
                  <p className="text-[13px] font-semibold text-[#F8F8F6]">Live in 8 weeks</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
