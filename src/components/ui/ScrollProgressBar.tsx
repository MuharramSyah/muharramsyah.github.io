"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { colors, spring } from "@/config";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, spring.scroll);
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: colors.softBlack,
        transformOrigin: "0% 50%",
        scaleX,
        zIndex: 60,
        pointerEvents: "none",
      }}
    />
  );
}
