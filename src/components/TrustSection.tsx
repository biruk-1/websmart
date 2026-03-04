"use client";

import { motion } from "framer-motion";

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
      className="bg-[#F8F8F6] border-t border-b border-[#E2E2DE] py-16 md:py-20 overflow-hidden"
      aria-label="Trust and social proof"
    >
      <div className="container-tight">
        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[13px] font-medium text-[#9A9A9A] uppercase tracking-widest mb-8">
            Trusted by builders and founders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {trustLogos.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-2.5 text-[#9A9A9A] hover:text-[#6B6B6B] transition-colors duration-200"
                aria-label={logo.name}
              >
                <div className="w-7 h-7 rounded-md bg-[#E2E2DE] flex items-center justify-center text-[10px] font-bold text-[#6B6B6B]">
                  {logo.abbr}
                </div>
                <span className="text-[15px] font-semibold tracking-tight">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E2E2DE] rounded-2xl overflow-hidden border border-[#E2E2DE]"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#F8F8F6] px-6 py-7 flex flex-col gap-1 text-center"
            >
              <span className="text-[32px] md:text-[36px] font-bold text-[#111111] leading-none tracking-tight">
                {stat.value}
              </span>
              <span className="text-[13px] text-[#6B6B6B] font-medium leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
