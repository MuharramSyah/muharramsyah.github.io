"use client";

import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 70, startDelay = 200) {
  const [out, setOut] = useState("");
  useEffect(() => {
    setOut("");
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += 1;
      setOut(text.slice(0, i));
      if (i < text.length) timer = setTimeout(tick, speed);
    };
    const start = setTimeout(tick, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timer!);
    };
  }, [text, speed, startDelay]);
  return { text: out, done: out.length >= text.length };
}
