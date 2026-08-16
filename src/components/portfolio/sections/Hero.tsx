"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { CurtainReveal } from "@/components/ui/CurtainReveal";
import { FadeUp } from "@/libs/motion";
import { useIsMobile } from "../hooks/useIsMobile";
import { useLocalTime } from "../hooks/useLocalTime";
import { useTypewriter } from "../hooks/useTypewriter";
import {colors} from "@/config";

type Props = {
  heroOpacity: number;
};

export function Hero({ heroOpacity }: Props) {
  const isMobile = useIsMobile();
  const heroPaddingY = isMobile ? "56px" : "96px";

  const heroName = useTypewriter("Muharram Syah", 90, 300);
  const heroRole = useTypewriter(
    "Machine Learning Engineer · Jakarta, Indonesia",
    28,
    heroName.done ? 200 : 1600,
  );
  const localTime = useLocalTime("Asia/Jakarta");

  const { scrollYProgress } = useScroll();
  const rawPortraitY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const portraitY = useSpring(rawPortraitY, { stiffness: 80, damping: 20, mass: 0.5 });

  return (
    <motion.section
      style={{
        padding: `${heroPaddingY} 0`,
        display: "flex",
        alignItems: "center",
        gap: 56,
        flexWrap: "wrap",
        position: "relative",
        minHeight: 828,
        opacity: heroOpacity,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 280 }}>
        <AvailabilityBadge label="Open to work" time={localTime} timezone="GMT+7" />
        <div
          style={{
            fontSize: 14,
            color: "#575757",
            letterSpacing: "0.02em",
            minHeight: "1.2em",
          }}
        >
          {heroRole.text}
          {!heroRole.done && (
            <span className="tw-caret" aria-hidden>
              |
            </span>
          )}
        </div>
        <h1
          style={{
            margin: 0,
            fontSize: 72,
            lineHeight: 1.02,
            fontWeight: 600,
              color: colors.maroon,
            letterSpacing: "-0.02em",
            minHeight: "1.02em",
          }}
        >
          {heroName.text}
          {!heroName.done && (
            <span className="tw-caret" aria-hidden>
              |
            </span>
          )}
        </h1>
        <FadeUp delay={0.6} y={16}>
          <p
            style={{
              maxWidth: 520,
              margin: 0,
              fontSize: 18,
              lineHeight: 1.6,
              color: "rgba(38,38,38,0.75)",
            }}
          >
            I build machine learning systems — from generative AI platforms to computer
            vision pipelines — with a focus on reliability and real-world impact.
          </p>
        </FadeUp>
        <FadeUp delay={0.8} y={12}>
          <div style={{ display: "flex", gap: 16, marginTop: 8, flexWrap: "wrap" }}>
            <a
              href="mailto:muharramsyah19@gmail.com"
              className="hov-op"
              style={{ fontSize: 14, borderBottom: "1px solid #262626", paddingBottom: 2 }}
            >
              muharramsyah19@gmail.com
            </a>
            <span style={{ color: "rgba(38,38,38,0.3)" }}>·</span>
            <a
              href="https://linkedin.com/in/muharram-syah"
              className="hov-op"
              style={{ fontSize: 14, borderBottom: "1px solid #262626", paddingBottom: 2 }}
            >
              linkedin.com/in/muharram-syah
            </a>
          </div>
        </FadeUp>
        <FadeUp delay={0.95} y={12}>
          <motion.a
            href="/cv/Muharramsyah_CV_2026-02.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            title="Download Muharram Syah résumé (PDF)"
            whileHover={{ y: -2, backgroundColor: "#7a3b3b", color: "#f8f5f5", borderColor: "#7a3b3b" }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 14,
              alignSelf: "start",
              border: "1px solid #262626",
              padding: "1em",
              fontWeight: 700,
              display: "inline-block",
              textDecoration: "none",
              color: "#262626",
            }}
          >
            Download full résumé (PDF) ↓
          </motion.a>
        </FadeUp>
      </div>
      <motion.div
        style={{
          position: "relative",
          width: 297,
          aspectRatio: "4/5",
          border: "1px solid rgba(38,38,38,0.15)",
          borderRadius: 4,
          overflow: "hidden",
          y: portraitY,
          willChange: "transform",
        }}
        whileHover={{ scale: 1.02, rotate: -0.6 }}
      >
        <CurtainReveal
          duration={0.5}
          direction="right"
          directionMode="normal"
          angle={0}
          color={colors.maroon}
          delay={0.2}
        >
          <Image
            src="/assets/images/portrait_photo.jpg"
            alt="Portrait of Muharram Syah"
            fill
            sizes="497px"
            priority
            style={{ objectFit: "cover", scale: 1.5 }}
          />
        </CurtainReveal>
      </motion.div>
    </motion.section>
  );
}
