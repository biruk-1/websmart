"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, type ReactElement } from "react";
import { scrollReveal, scrollRevealScale, scrollRevealStagger, viewportOnce } from "@/lib/animations";

type ProjectType = "Mobile App" | "Website" | "SaaS";

/** Add project images in public/assets/projects/ (e.g. habit-app.jpg). Add links for live site, app store, repo, etc. */
export type ProjectLink = { label: string; href: string };

type Project = {
  type: ProjectType;
  title: string;
  description: string;
  /** Path under public (e.g. /assets/projects/habit-app.jpg) or full URL. Omit for placeholder. */
  image?: string;
  /** e.g. { label: "Live site", href: "https://..." }, { label: "App Store", href: "..." } */
  links?: ProjectLink[];
  highlights: string[];
  stack: string[];
  outcome: string;
};

const typeMeta: Record<ProjectType, { icon: ReactElement; badge: string }> = {
  "Mobile App": {
    badge: "Mobile App",
    icon: (
      <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="2.5" width="10" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 15.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 5.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  Website: {
    badge: "Website",
    icon: (
      <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2.5" y="4" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 19h8M11 17v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.5 7.5h15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  SaaS: {
    badge: "SaaS",
    icon: (
      <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M7.5 16.5H6.8C4.15 16.5 2 14.4 2 11.85c0-2.08 1.45-3.83 3.45-4.34C6.22 5.42 8.2 4 10.55 4c2.98 0 5.4 2.26 5.6 5.12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8 16.5H16.2c2.1 0 3.8-1.65 3.8-3.7 0-1.76-1.26-3.24-2.95-3.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8.5 17.5l2-2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 15.5V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
};

const projects: Project[] = [
  {
    type: "Mobile App",
    title: "Habit & Wellness Tracker",
    description:
      "A clean, fast habit app with streaks, reminders, and offline-first performance — designed for daily use and long-term retention.",
    image: "/assets/projects/RevFit.jpg",
    links: [
      { label: "App Store", href: "#" },
      { label: "Play Store", href: "#" },
    ],
    highlights: ["Push notifications + reminders", "Offline-first sync", "Analytics-ready events"],
    stack: ["React Native", "Node.js", "Postgres"],
    outcome: "Shipped MVP in 6 weeks",
  },
  {
    type: "Mobile App",
    title: "Clear Communication Companion",
    description:
      "ClearMe - is an AI-powered app that helps you communicate clearly and effectively with your friends and family.",
    image: "/assets/projects/ClearMe.jpg",
    links: [{ label: "Live demo", href: "#" }],
    highlights: ["Realtime updates", "Photo proof-of-delivery", "Role-based access"],
    stack: ["Flutter", "Firebase", "Maps API"],
    outcome: "Reduced missed deliveries by 32%",
  },
  {
    type: "Website",
    title: "High-Converting Marketing Website",
    description:
      "A premium brand site built for speed and SEO with conversion-focused landing pages, clear messaging, and smooth motion.",
    image: "/assets/projects/marketing.png",
    links: [
      { label: "Live site", href: "#" },
      { label: "Case study", href: "#" },
    ],
    highlights: ["SEO + performance tuning", "CMS-ready structure", "Conversion-optimized sections"],
    stack: ["Next.js", "Tailwind", "Vercel"],
    outcome: "95+ Lighthouse score",
  },
  {
    type: "Website",
    title: "Workora",
    description:
      "Workora is a secure customer portal that allows customers to find thier best nearby fittinng workspaces and book them with a single click.",
    image: "/assets/projects/Workora.png",
    links: [{ label: "Demo", href: "https://v0-workora-website-design.vercel.app/" }],
    highlights: ["Authentication + permissions", "Data visualization", "Audit-friendly actions"],
    stack: ["React", "Node.js", "Postgres"],
    outcome: "Internal ops time −40%",
  },
  {
    type: "SaaS",
    title: "Resturant Operations Automation SaaS",
    description:
      "A multi-tenant SaaS platform that automates Hotels and Resturants Operational workflows with integrations, alerts, and an admin control plane.",
    image: "/assets/projects/resturant.png",
    links: [
      { label: "Visit app", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    highlights: ["Multi-tenant architecture", "Stripe billing foundations", "Event-driven automations"],
    stack: ["Next.js", "Node.js", "Postgres"],
    outcome: "From idea → launch in 8 weeks",
  },
];

function ProjectImagePlaceholder() {
  return (
    <div
      className="w-full aspect-[16/10] rounded-2xl bg-[var(--color-base-100)] border border-[var(--color-border)] flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-2 text-[var(--color-muted-light)]">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className="text-[12px] font-medium">Add image</span>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const meta = typeMeta[project.type];
  const hasImage = project.image && project.image.length > 0;
  const [imageError, setImageError] = useState(false);
  const showImage = hasImage && !imageError;

  return (
    <motion.article
      variants={scrollRevealScale}
      className="group glass-card rounded-3xl overflow-hidden flex flex-col hover:border-[var(--color-copper)]/30 hover:shadow-[var(--glass-shadow-hover)] transition-all duration-300"
    >
      {/* Image block: put files in public/assets/projects/ (e.g. habit-app.jpg) or use full URLs */}
      <div className="relative w-full aspect-[16/10] bg-[var(--color-base-100)] shrink-0">
        {/* Premium hover overlays */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(196,121,58,0.22)] via-transparent to-[rgba(255,255,255,0.14)] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
        </div>

        {showImage ? (
          <img
            src={project.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-hover:rotate-[0.4deg]"
            onError={() => setImageError(true)}
          />
        ) : (
          <ProjectImagePlaceholder />
        )}
      </div>

      <div className="p-6 sm:p-7 flex flex-col gap-5 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl glass-subtle flex items-center justify-center text-[var(--color-muted)] group-hover:bg-[var(--color-copper-dim)] group-hover:text-[var(--color-copper)] group-hover:border-[var(--color-copper)]/30 transition-all duration-200">
              {meta.icon}
            </div>
            <span className="inline-flex items-center text-[12px] font-semibold tracking-wide uppercase bg-[var(--color-copper-dim)] text-[var(--color-copper)] px-3 py-1.5 rounded-xl">
              {meta.badge}
            </span>
          </div>

          <div className="text-right">
            <p className="text-[11px] text-[var(--color-muted-light)] font-medium uppercase tracking-widest">Outcome</p>
            <p className="text-[13px] font-semibold text-[var(--color-charcoal)] tracking-tight">{project.outcome}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-[18px] sm:text-[19px] font-bold text-[var(--color-charcoal)] tracking-tight leading-snug">
            {project.title}
          </h3>
          <p className="text-[14px] text-[var(--color-muted)] leading-relaxed">{project.description}</p>
        </div>

        <ul className="flex flex-col gap-2.5" role="list">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5">
              <span className="w-4 h-4 rounded-full bg-[var(--color-copper-dim)] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    d="M1.5 4L3 5.5L6.5 2"
                    stroke="var(--color-copper)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[13px] text-[var(--color-muted)] leading-snug">{h}</span>
            </li>
          ))}
        </ul>

        {/* Project links (Live site, App Store, GitHub, etc.) */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--color-copper)] hover:text-[var(--color-charcoal)] border border-[var(--color-border)] hover:border-[var(--color-copper)]/50 px-3 py-1.5 rounded-lg transition-colors"
              >
                {link.label}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
        )}

        <div className="pt-1 flex flex-wrap items-center justify-between gap-3 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="text-[12px] font-medium text-[var(--color-muted)] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-2.5 py-1 rounded-xl"
              >
                {t}
              </span>
            ))}
          </div>

          <Link
            href="/#contact"
            className="relative inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--color-copper)] hover:text-[var(--color-charcoal)] transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-[var(--color-copper)] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            aria-label={`Discuss a project like ${project.title}`}
          >
            Build something like this
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M3 7H11M7.5 3.5L11 7L7.5 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-[var(--color-base)] section-dots-base" aria-labelledby="projects-heading">
      <div className="container-tight">
        <motion.div
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-12"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-[var(--color-copper)] text-[12px] font-semibold uppercase tracking-widest mb-4">
              <span className="w-4 h-px bg-[var(--color-copper)]" />
              Portfolio
            </span>
            <h2
              id="projects-heading"
              className="text-[32px] sm:text-[36px] md:text-[44px] font-bold text-[var(--color-charcoal)] leading-[1.1] tracking-[-0.02em]"
            >
              Sample projects we can
              <br />
              build for you.
            </h2>
            <p className="text-[16px] text-[var(--color-muted)] leading-relaxed mt-4">
              Two mobile apps, two websites, and one SaaS — a quick snapshot of what we ship across platforms.
            </p>
          </div>

          <Link
            href="/#contact"
            className="btn-primary group shrink-0 text-[13px] px-5 py-2.5"
          >
            Request a proposal
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="arrow-hover">
              <path
                d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          variants={scrollRevealStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

