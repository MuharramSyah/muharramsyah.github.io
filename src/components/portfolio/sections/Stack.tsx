"use client";

import { FadeUp, Marquee, StaggerGroup, StaggerItem } from "@/libs/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagChip } from "@/components/ui/TagChip";
import { MARQUEE_KEYWORDS, stackGroups } from "../data";
import { useIsMobile } from "../hooks/useIsMobile";

export function Stack() {
  const isMobile = useIsMobile();
  const sectionPaddingY = isMobile ? "56px" : "80px";

  return (
    <section
      id="stack"
      style={{ padding: `${sectionPaddingY} 0`, borderTop: "1px solid rgba(38,38,38,0.12)" }}
    >
      <FadeUp>
        <SectionHeading>What I work with</SectionHeading>
      </FadeUp>
      <Marquee
        speed={45}
        style={{
          marginBottom: 32,
          paddingBottom: 20,
          borderBottom: "1px solid rgba(38,38,38,0.1)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        {MARQUEE_KEYWORDS.map((k, i) => (
          <TagChip key={`${k}-${i}`} size="md">
            {k}
          </TagChip>
        ))}
      </Marquee>
      <StaggerGroup style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {stackGroups.map((s) => (
          <StaggerItem key={s.label}>
            <div style={{ padding: "20px 0", borderBottom: "1px solid rgba(38,38,38,0.1)" }}>
              <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{s.label}</div>
              <div
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "rgba(38,38,38,0.7)",
                  maxWidth: 720,
                }}
              >
                {s.items}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
