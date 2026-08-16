import type { Easing } from "framer-motion";

export const easings = {
  expoOut: [0.16, 1, 0.3, 1] as [number, number, number, number],
  easeIn: "easeIn" as Easing,
  easeOut: "easeOut" as Easing,
  easeInOut: "easeInOut" as Easing,
};

export const durations = {
  fast: 0.25,
  base: 0.5,
  slow: 0.8,
  splash: 1.1,
};

export const spring = {
  soft: { type: "spring" as const, stiffness: 80, damping: 20, mass: 0.5 },
  snappy: { type: "spring" as const, stiffness: 260, damping: 22 },
  bouncy: { type: "spring" as const, stiffness: 300, damping: 18 },
  scroll: { stiffness: 120, damping: 20, mass: 0.4 },
};
