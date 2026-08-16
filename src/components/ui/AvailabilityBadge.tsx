"use client";

import { colors } from "@/config";

type Props = {
  label: string;
  time?: string;
  timezone?: string;
  status?: "available" | "busy";
};

export function AvailabilityBadge({
  label,
  time,
  timezone = "GMT+7",
  status = "available",
}: Props) {
  const dotColor = status === "available" ? "#3a8a4a" : colors.maroon;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 13,
        color: colors.gray,
        letterSpacing: "0.02em",
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: dotColor,
          animation: "dotPulse 1.8s ease-in-out infinite",
          flexShrink: 0,
        }}
        aria-hidden
      />
      <span>
        {label}
        {time ? ` · ${time} (${timezone})` : ""}
      </span>
    </div>
  );
}
