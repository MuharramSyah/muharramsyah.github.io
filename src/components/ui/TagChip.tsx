import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  size?: "sm" | "md";
};

export function TagChip({ children, size = "sm" }: Props) {
  const style: CSSProperties = {
    fontSize: size === "md" ? 13 : 12,
    padding: size === "md" ? "6px 14px" : "4px 10px",
    border: "1px solid rgba(38,38,38,0.2)",
    borderRadius: 999,
    color: size === "md" ? "rgba(38,38,38,0.7)" : "rgba(38,38,38,0.65)",
  };
  return <span style={style}>{children}</span>;
}
