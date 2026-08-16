"use client";

import { motion, useReducedMotion, type Easing } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { colors, durations, easings } from "@/config";

type Direction = "right" | "left" | "up" | "down";
type DirectionMode = "normal" | "reverse";

type Props = {
  children: ReactNode;
  duration?: number;
  direction?: Direction;
  directionMode?: DirectionMode;
  angle?: number;
  color?: string;
  delay?: number;
  ease?: Easing | Easing[];
  style?: CSSProperties;
};

const NORMAL_ORIGIN: Record<Direction, CSSProperties["transformOrigin"]> = {
  right: "right",
  left: "left",
  up: "top",
  down: "bottom",
};

const REVERSE_ORIGIN: Record<Direction, CSSProperties["transformOrigin"]> = {
  right: "left",
  left: "right",
  up: "bottom",
  down: "top",
};

export function CurtainReveal({
  children,
  duration = durations.base,
  direction = "right",
  directionMode = "normal",
  angle = 0,
  color = colors.softBlack,
  delay = 0,
  ease = easings.easeIn,
  style,
}: Props) {
  const reduce = useReducedMotion();
  const isHorizontal = direction === "right" || direction === "left";
  const transformOrigin =
    directionMode === "reverse" ? REVERSE_ORIGIN[direction] : NORMAL_ORIGIN[direction];

  const initial = isHorizontal
    ? { scaleX: 1, skewX: angle }
    : { scaleY: 1, skewY: angle };
  const animate = isHorizontal
    ? { scaleX: 0, skewX: angle }
    : { scaleY: 0, skewY: angle };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", ...style }}>
      {children}
      {!reduce && (
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration, ease, delay }}
          style={{
            position: "absolute",
            inset: 0,
            background: color,
            transformOrigin,
            pointerEvents: "none",
            willChange: "transform",
          }}
          aria-hidden
        />
      )}
    </div>
  );
}
