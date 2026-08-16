"use client";

import { FadeUp, StaggerGroup, StaggerItem } from "@/libs/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "../data";
import { useIsMobile } from "../hooks/useIsMobile";

export function Skills() {
  const isMobile = useIsMobile();
  const sectionPaddingY = isMobile ? "56px" : "80px";
  const skillsColumns = isMobile ? "1fr 1fr" : "repeat(4, 1fr)";

  return (
    <section
      id="skills"
      style={{ padding: `${sectionPaddingY} 0`, borderTop: "1px solid rgba(38,38,38,0.12)" }}
    >
      <FadeUp>
        <SectionHeading split>Skills & Tools</SectionHeading>
      </FadeUp>
      <StaggerGroup style={{ display: "grid", gridTemplateColumns: skillsColumns, gap: 32 }}>
        {skillGroups.map((g) => (
          <StaggerItem key={g.label}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>{g.label}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {g.items.map((item) => (
                <div key={item} style={{ fontSize: 14, color: "rgba(38,38,38,0.7)" }}>
                  {item}
                </div>
              ))}
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
