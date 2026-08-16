"use client";

import { useEffect, useState } from "react";
import { SECTION_IDS, type SectionId } from "../types";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId | "">("");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id as SectionId);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return activeSection;
}
