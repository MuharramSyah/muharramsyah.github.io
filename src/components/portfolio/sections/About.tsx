"use client";

import { motion } from "framer-motion";
import { StaggerGroup, StaggerItem } from "@/libs/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIconLink } from "@/components/ui/SocialIconLink";
import { useIsMobile } from "../hooks/useIsMobile";

const socials = [
  { href: "mailto:muharramsyah19@gmail.com", label: "@", title: "Email" },
  { href: "https://linkedin.com/in/muharram-syah", label: "in", title: "LinkedIn" },
  { href: "https://github.com/muharram-syah", label: "GH", title: "GitHub" },
];

export function About() {
  const isMobile = useIsMobile();
  const sectionPaddingY = isMobile ? "56px" : "80px";

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: `${sectionPaddingY} 0`,
        borderTop: "1px solid rgba(38,38,38,0.12)",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        position: "relative",
        width: "100%",
      }}
    >
      <div style={{ position: "relative" }}>
        <SectionHeading split marginBottom={24} fontWeight={600} textAlign="left">
          About
        </SectionHeading>
        <StaggerGroup style={{ display: "flex", gap: 12, marginBottom: 20 }}>
          {socials.map((s) => (
            <StaggerItem key={s.title}>
              <SocialIconLink href={s.href} label={s.label} title={s.title} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <div
          style={{
            fontSize: 17,
            lineHeight: 1.75,
            color: "rgba(38,38,38,0.8)",
            margin: 0,
            maxWidth: 883,
          }}
        >
          <p>
            I&apos;m an AI/ML Engineer with over six years of experience across Computer
            Vision, NLP, and Generative AI. I started as an ML intern, then spent nearly
            four years at a leading geospatial technology company, advancing from Data
            Scientist to Engineering Lead, where I built production systems for traffic
            anomaly detection, disaster monitoring, and crop grading. I later optimized
            real-time inference infrastructure at a major oil &amp; gas operator, cutting
            cloud costs by over 80%.
          </p>
          <p>
            Today, as <strong>Lead AI Engineer at AppFuxion Consulting</strong>, I
            architect vision-language model pipelines and document intelligence systems
            that power enterprise AI platforms — from fine-tuning layout detection models
            to serving 30B+ parameter <b>VLMs</b> on GPU clusters.
          </p>
          <p>
            I care about ML systems that actually ship: models that survive production
            traffic, pipelines that don&apos;t silently degrade, and infrastructure that a
            small team can operate confidently.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
