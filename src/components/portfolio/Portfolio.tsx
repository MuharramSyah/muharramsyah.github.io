"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState, type CSSProperties } from "react";
import { BootLoader } from "@/components/ui/BootLoader";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { colors, container, spacing, typography } from "@/config";
import { useIsMobile } from "./hooks/useIsMobile";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { FooterBar } from "./sections/FooterBar";
import { Hero } from "./sections/Hero";
import { SideNav } from "./sections/SideNav";
import { Skills } from "./sections/Skills";
import { Stack } from "./sections/Stack";
import { Work } from "./sections/Work";

const rootStyle: CSSProperties = {
  background: colors.paleRose,
  color: colors.softBlack,
  fontFamily: typography.fontFamily,
  width: "100%",
  position: "relative",
};

export default function Portfolio() {
  const isMobile = useIsMobile();
  const sectionPaddingX = spacing.sectionPaddingX(isMobile);

  const [booting, setBooting] = useState(false);
  useEffect(() => {
    try {
      if (!sessionStorage.getItem("muha-boot-seen")) setBooting(true);
    } catch {
      setBooting(true);
    }
  }, []);
  useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = booting ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [booting]);
  const handleBootFinish = () => {
    try {
      sessionStorage.setItem("muha-boot-seen", "1");
    } catch {}
    setBooting(false);
  };

  const { scrollYProgress } = useScroll();
  const [heroOpacity, setHeroOpacity] = useState(1);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setHeroOpacity(Math.max(0, 1 - v * 3));
  });

  return (
    <div style={rootStyle}>
      {booting && <BootLoader onFinish={handleBootFinish} />}
      <ScrollProgressBar />
      <SideNav />
      <div
        id="top"
        style={{
          maxWidth: container.maxWidth,
          margin: "0 auto",
          padding: sectionPaddingX,
          fontSize: 14,
        }}
      >
        <Hero heroOpacity={heroOpacity} />
        <About />
        <Stack />
        <Work />
        <Experience />
        <Skills />
        <Contact />
        <FooterBar />
      </div>
    </div>
  );
}
