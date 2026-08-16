"use client";

import { useEffect, useState } from "react";
import { breakpoints } from "@/config";

export function useIsMobile(breakpoint = breakpoints.mobile) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}
