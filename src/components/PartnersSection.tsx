"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { scrollReveal, scrollRevealItem, scrollRevealStagger, viewportOnce } from "@/lib/animations";

/** Add partner logos in public/assets/partners/ (e.g. finova.svg). Logo shows when set; otherwise abbr is used. */
export type Partner = { name: string; abbr: string; note?: string; logo?: string };

const partners: Partner[] = [
  { name: "Finova", abbr: "FN", note: "Ops & dashboards", logo: "/assets/partners/finova.svg" },
  { name: "Stackr", abbr: "ST", note: "SaaS MVPs", logo: "/assets/partners/stackr.svg" },
  { name: "Meridian", abbr: "MD", note: "Automation systems", logo: "/assets/partners/meridian.svg" },
  { name: "Loopkit", abbr: "LK", note: "Mobile products", logo: "/assets/partners/loopkit.svg" },
  { name: "Arcflow", abbr: "AF", note: "Web platforms", logo: "/assets/partners/arcflow.svg" },
  { name: "Velox", abbr: "VX", note: "Growth sites", logo: "/assets/partners/velox.svg" },
];

function PartnerCard({ partner }: { partner: Partner }) {
  const [logoError, setLogoError] = useState(false);
  const showLogo = partner.logo && !logoError;

  return (
    <motion.div
      variants={scrollRevealItem}
      className="glass-card rounded-2xl px-4 py-4 flex items-center gap-3 hover:border-[var(--color-copper)]/30 hover:shadow-[var(--glass-shadow-hover)] transition-all duration-200"
      aria-label={partner.name}
    >
      <div className="w-10 h-10 rounded-2xl glass-subtle flex items-center justify-center flex-shrink-0 overflow-hidden">
        {showLogo ? (
          <img
            src={partner.logo}
            alt=""
            className="w-full h-full object-contain p-1"
            onError={() => setLogoError(true)}
          />
        ) : (
          <span className="text-[11px] font-bold text-[var(--color-muted)]">{partner.abbr}</span>
        )}
      </div>
      <div className="min-w-0">
        <p className="text-[14px] font-semibold text-[var(--color-charcoal)] tracking-tight truncate">{partner.name}</p>
        {partner.note ? <p className="text-[12px] text-[var(--color-muted)] leading-snug truncate">{partner.note}</p> : null}
      </div>
    </motion.div>
  );
}

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="section-alt-with-gradient section-padding overflow-hidden"
      aria-labelledby="partners-heading"
    >
      <div className="section-dots-overlay" aria-hidden="true" />
      <div className="section-dots-glow" aria-hidden="true" />
      <div className="section-gradient-overlay" aria-hidden="true" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-[var(--color-copper)] text-[12px] font-semibold uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-[var(--color-copper)]" />
            Partners
          </span>
          <h2
            id="partners-heading"
            className="text-[32px] sm:text-[36px] md:text-[44px] font-bold text-[var(--color-charcoal)] leading-[1.1] tracking-[-0.02em]"
          >
            Companies we partner with
            <br />
            to ship faster.
          </h2>
          <p className="text-[16px] text-[var(--color-muted)] leading-relaxed mt-4">
            We collaborate with founders, product teams, and trusted partners to deliver polished releases — with clear
            communication and dependable execution.
          </p>
        </motion.div>

        <motion.div
          variants={scrollRevealStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
          aria-label="Partner logos"
        >
          {partners.map((p) => (
            <PartnerCard key={p.name} partner={p} />
          ))}
        </motion.div>

        <motion.div
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-10 glass-card rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
        >
          <div className="max-w-xl">
            <p className="text-[15px] font-semibold text-[var(--color-charcoal)] tracking-tight">
              Want your company listed here?
            </p>
            {/* <p className="text-[13px] text-[var(--color-muted)] leading-relaxed mt-1">
              Add logo files in <code className="text-[12px] bg-[var(--color-surface)] px-1.5 py-0.5 rounded">public/assets/partners/</code> and
              set the <code className="text-[12px] bg-[var(--color-surface)] px-1.5 py-0.5 rounded">logo</code> path in the partners list.
            </p> */}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-charcoal)] text-[var(--color-base)] text-[13px] font-medium px-5 py-2.5 rounded-xl hover:bg-[var(--color-copper)] transition-colors duration-200"
          >
            Send partner list
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

