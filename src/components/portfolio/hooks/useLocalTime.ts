"use client";

import { useEffect, useState } from "react";

export function useLocalTime(timeZone = "Asia/Jakarta", intervalMs = 30_000) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone,
          hour: "numeric",
          minute: "2-digit",
        }),
      );
    };
    tick();
    const id = setInterval(tick, intervalMs);
    return () => clearInterval(id);
  }, [timeZone, intervalMs]);
  return time;
}
