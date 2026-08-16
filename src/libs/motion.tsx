"use client";

import { motion, useReducedMotion, type Variants, type HTMLMotionProps } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

type FadeUpProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
};

export function FadeUp({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  once = true,
  amount = 0.2,
  ...rest
}: FadeUpProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

type StaggerGroupProps = HTMLMotionProps<"div"> & {
  amount?: number;
  once?: boolean;
};

export function StaggerGroup({
  children,
  amount = 0.15,
  once = true,
  ...rest
}: StaggerGroupProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...rest }: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={itemVariants} {...rest}>
      {children}
    </motion.div>
  );
}

type SplitTextProps = {
  text: string;
  style?: CSSProperties;
  className?: string;
  delay?: number;
  wordDelay?: number;
  once?: boolean;
};

export function SplitText({
  text,
  style,
  className,
  delay = 0,
  wordDelay = 0.05,
  once = true,
}: SplitTextProps) {
  const words = text.split(" ");
  return (
    <motion.span
      style={{ display: "inline-block", ...style }}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.6 }}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: { y: "110%" },
              show: {
                y: "0%",
                transition: { duration: 0.7, ease, delay: delay + i * wordDelay },
              },
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

type MarqueeProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
  style?: CSSProperties;
};

export function Marquee({ children, speed = 40, className, style }: MarqueeProps) {
  return (
    <div
      className={className}
      style={{ overflow: "hidden", display: "flex", ...style }}
    >
      <motion.div
        style={{ display: "flex", gap: 32, whiteSpace: "nowrap", flexShrink: 0 }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
