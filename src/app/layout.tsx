import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { site } from "@/config";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description:
    "AI/ML Engineer building generative AI platforms, computer vision pipelines, and production ML infrastructure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
