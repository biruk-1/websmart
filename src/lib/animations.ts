/**
 * Shared scroll-triggered animation variants for a consistent, premium feel.
 * Use with Framer Motion whileInView + viewport.
 */

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const scrollReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export const scrollRevealLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease },
  },
};

export const scrollRevealScale = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease },
  },
};

export const scrollRevealStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const scrollRevealItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

export const viewportOnce = { once: true, margin: "-60px", amount: 0.2 };
export const viewportTight = { once: true, margin: "-40px", amount: 0.15 };

export const transitionFast = { duration: 0.45, ease };
export const transitionMedium = { duration: 0.6, ease };
export const transitionSlow = { duration: 0.75, ease };
