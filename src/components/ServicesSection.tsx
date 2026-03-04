"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Applications & Websites",
    description:
      "From marketing websites to complex internal tools and customer-facing platforms — we build web applications and websites that perform under pressure and rank well.",
    benefits: [
      "Performant, accessible, and SEO-ready",
      "Built on modern stacks: Next.js, React, Node.js",
      "Designed for maintainability and team handoff",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="3" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 19h8M11 16v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 8l3 3-3 3M12 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "SaaS Product Development",
    description:
      "Turn your product idea into a revenue-generating SaaS. We handle the full stack — from auth and billing to analytics and growth infrastructure.",
    benefits: [
      "Multi-tenant architecture from day one",
      "Stripe billing, auth, and onboarding flows",
      "Built to scale from 0 to 100k users",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M11 2C7.13 2 4 5.13 4 9c0 2.38 1.19 4.47 3 5.74V17h8v-2.26C16.81 13.47 18 11.38 18 9c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 17v2a1 1 0 001 1h4a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 9l1.5 1.5L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Automation Systems",
    description:
      "Eliminate repetitive work and unlock operational efficiency. We design and deploy automation pipelines that integrate across your entire stack.",
    benefits: [
      "End-to-end workflow automation",
      "API integrations, webhooks, and event-driven logic",
      "Custom dashboards and monitoring",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 11h3l2-7 4 14 2-7h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that users love. From iOS and Android to React Native and Flutter — we ship apps that feel at home on every device.",
    benefits: [
      "iOS, Android, or cross-platform with one codebase",
      "App Store and Play Store submission support",
      "Push notifications, offline support, and performance tuning",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="5" y="2" width="12" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 15h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding bg-[#F8F8F6]"
      aria-labelledby="services-heading"
    >
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-xl mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#C4793A] text-[12px] font-semibold uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-[#C4793A]" />
            What We Build
          </span>
          <h2
            id="services-heading"
            className="text-[36px] md:text-[44px] font-bold text-[#111111] leading-[1.1] tracking-[-0.02em] mb-4"
          >
            Four disciplines,
            <br />
            one focused studio.
          </h2>
          <p className="text-[16px] text-[#6B6B6B] leading-relaxed">
            We go deep rather than wide. Every engagement is staffed with specialists
            who live and breathe their domain.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <motion.article
              key={service.number}
              variants={cardVariants}
              className="group relative bg-white border border-[#E2E2DE] rounded-2xl p-7 flex flex-col gap-5 cursor-default
                         hover:border-[#C4793A]/40 hover:shadow-[0_12px_40px_-12px_rgba(196,121,58,0.15)]
                         transition-all duration-300"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-6 right-6 h-px bg-[#C4793A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              {/* Icon + Number */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#F8F8F6] border border-[#E2E2DE] flex items-center justify-center text-[#6B6B6B] group-hover:bg-[#F0E6DC] group-hover:text-[#C4793A] group-hover:border-[#C4793A]/30 transition-all duration-300">
                  {service.icon}
                </div>
                <span className="text-[13px] font-semibold text-[#D8D8D4] group-hover:text-[#C4793A]/50 transition-colors duration-300">
                  {service.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-bold text-[#111111] leading-snug tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-[#6B6B6B] leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Benefits */}
              <ul className="flex flex-col gap-2.5 mt-1" role="list">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#F0E6DC] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M1.5 4L3 5.5L6.5 2"
                          stroke="#C4793A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[13px] text-[#4A4A4A] leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
