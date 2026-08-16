"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { FadeUp, StaggerGroup, StaggerItem } from "@/libs/motion";
import { ProjectDialog } from "@/components/ui/ProjectDialog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { colors } from "@/config";
import { projects } from "../data";
import { useIsMobile } from "../hooks/useIsMobile";
import type { Project } from "../types";

const FILTERS = [
  "All Projects",
  "Computer Vision",
  "NLP",
  "Generative AI",
  "Infrastructure",
] as const;
type Filter = (typeof FILTERS)[number];

export function Work() {
  const isMobile = useIsMobile();
  const sectionPaddingY = isMobile ? "56px" : "80px";
  const workGridColumns = isMobile ? "1fr" : "repeat(2, 1fr)";
  const [activeFilter, setActiveFilter] = useState<Filter>("All Projects");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") return projects;
    const needle = activeFilter.toLowerCase();
    return projects.filter((p) =>
      p.tags.some(
        (t) => t.toLowerCase().includes(needle) || needle.includes(t.toLowerCase()),
      ),
    );
  }, [activeFilter]);

  return (
    <section
      id="work"
      style={{ padding: `${sectionPaddingY} 0`, borderTop: "1px solid rgba(38,38,38,0.12)" }}
    >
      <FadeUp>
        <SectionHeading split>Selected Work</SectionHeading>
      </FadeUp>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          marginBottom: 40,
        }}
      >
        {FILTERS.map((f) => {
          const isActive = activeFilter === f;
          return (
            <motion.button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontSize: 13,
                fontWeight: 600,
                padding: "9px 18px",
                borderRadius: 999,
                border: `1px solid ${isActive ? colors.maroon : "rgba(38,38,38,0.2)"}`,
                background: isActive ? colors.maroon : "transparent",
                color: isActive ? colors.paleRose : colors.softBlack,
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s, border-color 0.2s",
              }}
            >
              {f}
            </motion.button>
          );
        })}
      </div>

      <StaggerGroup
        key={activeFilter}
        style={{ display: "grid", gridTemplateColumns: workGridColumns, gap: "36px 28px" }}
      >
        {filteredProjects.map((p) => (
          <StaggerItem key={p.title}>
            <motion.button
              type="button"
              onClick={() => setActiveProject(p)}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                width: "100%",
                padding: 0,
                cursor: "pointer",
                textDecoration: "none",
                color: colors.softBlack,
                borderRadius: 10,
                overflow: "hidden",
                // border: "1px solid rgba(38,38,38,0.12)",
                background: colors.paleRose,
                font: "inherit",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3 / 1",
                  background: p.image
                    ? "rgba(38,38,38,0.04)"
                    : "repeating-linear-gradient(135deg, rgba(38,38,38,0.06) 0px, rgba(38,38,38,0.06) 2px, transparent 2px, transparent 12px)",
                  // borderBottom: "1px solid rgba(38,38,38,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 760px) 100vw, 340px"
                    style={{ objectFit: "cover", border: "1px solid rgba(38,38,38,0.12)", borderRadius: 10 }}
                  />
                ) : (
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 12,
                      color: "rgba(38,38,38,0.5)",
                    }}
                  >
                    {p.title.toLowerCase().replace(/\s+/g, "-")}.png
                  </span>
                )}
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    color: colors.gray,
                    background: colors.paleRose,
                    padding: "3px 8px",
                    borderRadius: 4,
                    border: "1px solid rgba(38,38,38,0.15)",
                    zIndex: 1,
                  }}
                >
                  {p.year}
                </span>
              </div>
              <div
                style={{
                  padding: "18px 0px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: "0.01em",
                        padding: "4px 12px",
                        borderRadius: 999,
                        background: colors.maroon,
                        color: colors.paleRose,
                        lineHeight: 1.4,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.25,
                  }}
                >
                  {p.title}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "rgba(38,38,38,0.75)",
                  }}
                >
                  {p.blurb}
                </p>
              </div>
            </motion.button>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <ProjectDialog project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
