"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { colors, durations, easings } from "@/config";

const GREETINGS = [
  "Hello",
  "Halo",
  "Hola",
  "Bonjour",
  "Ciao",
  "Olá",
  "Hallo",
  "こんにちは",
  "안녕하세요",
  "你好",
  "Namaste",
  "مرحبا",
];

type Props = {
  perGreetingMs?: number;
  onFinish?: () => void;
};

export function BootLoader({ perGreetingMs = 550, onFinish }: Props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (index >= GREETINGS.length) {
      const t = setTimeout(() => {
        setVisible(false);
        onFinish?.();
      }, perGreetingMs);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setIndex((i) => i + 1), perGreetingMs);
    return () => clearTimeout(t);
  }, [index, perGreetingMs, onFinish]);

  const current = GREETINGS[Math.min(index, GREETINGS.length - 1)];
  const isLast = index >= GREETINGS.length - 1;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="boot-loader"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: easings.expoOut }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: colors.softBlack,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            willChange: "transform",
          }}
          aria-hidden
        >
          <div
            style={{
              position: "absolute",
              top: 24,
              left: 24,
              right: 24,
              display: "flex",
              justifyContent: "space-between",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: colors.paleRose,
              opacity: 0.55,
            }}
          >
            <span>Muha · Portfolio</span>
            <span>2026</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
              transition={{ duration: durations.fast, ease: easings.expoOut }}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 16,
                color: colors.paleRose,
                fontFamily:
                  "-apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "clamp(48px, 12vw, 128px)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: isLast ? colors.paleRose : colors.maroon,
                  alignSelf: "center",
                  transition: "background 0.3s",
                }}
              />
              {current}
            </motion.div>
          </AnimatePresence>

          <div
            style={{
              position: "absolute",
              bottom: 32,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 160,
                height: 2,
                background: `${colors.paleRose}33`,
                overflow: "hidden",
                borderRadius: 2,
              }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: (index + 1) / GREETINGS.length }}
                transition={{ duration: 0.3, ease: easings.easeOut }}
                style={{
                  height: "100%",
                  background: colors.paleRose,
                  transformOrigin: "0 50%",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
