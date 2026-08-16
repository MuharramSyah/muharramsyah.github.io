import type { Metadata } from "next";
import { site } from "@/config";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description:
    "AI/ML Engineer building generative AI platforms, computer vision pipelines, and production ML infrastructure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
