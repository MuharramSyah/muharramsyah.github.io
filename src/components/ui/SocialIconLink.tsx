"use client";

import { motion } from "framer-motion";

type Props = {
  href: string;
  label: any;
  title: string;
};

export function SocialIconLink({ href, label, title }: Props) {
  return (
    <motion.a
      href={href}
      title={title}
      whileHover={{ scale: 1.08, backgroundColor: "#7a3b3b", color: "#f8f5f5", borderColor: "#7a3b3b" }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "1px solid rgba(38,38,38,0.25)",
        fontSize: 13,
        fontWeight: 600,
        color: "#262626",
        textDecoration: "none",
      }}
    >
      {label}
    </motion.a>
  );
}
