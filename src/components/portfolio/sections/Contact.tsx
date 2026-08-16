"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useIsMobile } from "../hooks/useIsMobile";

const inputStyle = {
  fontFamily: "inherit",
  fontSize: 15,
  padding: "12px 0",
  border: "none",
  borderBottom: "1px solid rgba(38,38,38,0.25)",
  background: "transparent",
  outline: "none",
  color: "#262626",
} as const;

export function Contact() {
  const isMobile = useIsMobile();
  const sectionPaddingY = isMobile ? "56px" : "80px";
  const aboutColumns = isMobile ? "1fr" : "1.4fr 1fr";

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: `${sectionPaddingY} 0`,
        borderTop: "1px solid rgba(38,38,38,0.12)",
        display: "grid",
        gridTemplateColumns: aboutColumns,
        gap: 48,
      }}
    >
      <div>
        <SectionHeading split marginBottom={24}>
          Contact
        </SectionHeading>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: "rgba(38,38,38,0.8)",
            margin: "0 0 24px",
          }}
        >
          Open to new opportunities in machine learning and AI engineering.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 15 }}>
          <a href="mailto:muharramsyah19@gmail.com" className="hov-op">
            muharramsyah19@gmail.com
          </a>
          <a href="tel:+6281361984557" className="hov-op">
            +62 813 6198 4557
          </a>
          <span style={{ color: "rgba(38,38,38,0.6)" }}>Jakarta, Indonesia</span>
        </div>
      </div>
      <form style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <input type="text" placeholder="Name" style={inputStyle} />
        <input type="email" placeholder="Email" style={inputStyle} />
        <textarea
          placeholder="Message"
          rows={4}
          style={{ ...inputStyle, resize: "none" }}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03, backgroundColor: "#f8f5f5", color: "#7a3b3b", borderColor: "#7a3b3b" }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          style={{
            alignSelf: "flex-start",
            marginTop: 8,
            fontSize: 14,
            border: "1px solid #7a3b3b",
            background: "#7a3b3b",
            color: "#f8f5f5",
            padding: "12px 24px",
            borderRadius: 2,
            cursor: "pointer",
          }}
        >
          Send message
        </motion.button>
      </form>
    </motion.section>
  );
}
