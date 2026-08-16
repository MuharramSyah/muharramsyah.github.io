"use client";

import { FadeUp, StaggerGroup, StaggerItem } from "@/libs/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timeline } from "../data";
import { useIsMobile } from "../hooks/useIsMobile";

export function Experience() {
  const isMobile = useIsMobile();
  const sectionPaddingY = isMobile ? "56px" : "80px";
  const timelineColumns = isMobile ? "80px 1fr" : "120px 1fr";

  return (
    <section
      id="experience"
      style={{ padding: `${sectionPaddingY} 0`, borderTop: "1px solid rgba(38,38,38,0.12)" }}
    >
      <FadeUp>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 32,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <SectionHeading split marginBottom={0} textAlign="left">
            Experience
          </SectionHeading>
        </div>
      </FadeUp>
      <StaggerGroup>
        {timeline.map((t) => (
          <StaggerItem key={`${t.period}-${t.role}`}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: timelineColumns,
                gap: 16,
                padding: "20px 0",
                borderBottom: "1px solid rgba(38,38,38,0.1)",
              }}
            >
              <div style={{ fontSize: 14, color: "#575757" }}>{t.period}</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>{t.role}</div>
                <div style={{ fontSize: 14, color: "rgba(38,38,38,0.6)", marginTop: 2 }}>
                  {t.company} · {t.location}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "rgba(38,38,38,0.7)",
                    margin: "8px 0 0",
                    maxWidth: 640,
                  }}
                >
                  {t.summary}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
