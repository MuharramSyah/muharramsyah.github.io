"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { colors, durations, easings } from "@/config";
import type { Project } from "@/components/portfolio/types";
import { ProjectDetail } from "./ProjectDetail";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDialog({ project, onClose }: Props) {
  const open = !!project;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          key="dialog-panel"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: durations.slow, ease: easings.expoOut }}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: colors.paleRose,
            color: colors.softBlack,
            overflowY: "auto",
            willChange: "transform, opacity",
          }}
        >
          <motion.button
            type="button"
            onClick={onClose}
            aria-label="Close"
            whileHover={{ scale: 1.05, backgroundColor: colors.maroon, color: colors.paleRose }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 24,
              right: 24,
              zIndex: 2,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: `1px solid rgba(38,38,38,0.2)`,
              background: colors.paleRose,
              color: colors.maroon,
              fontSize: 22,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              paddingBottom: 3,
              lineHeight: 1,
              boxShadow: "0 4px 12px rgba(38,38,38,0.08)",
            }}
          >
            ×
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, ease: easings.expoOut, delay: 0.1 }}
            style={{
              maxWidth: 960,
              margin: "0 auto",
              padding: "88px 32px 80px",
            }}
          >
            <ProjectDetail project={project} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
