"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { ProjectDialog } from "@/components/ui/ProjectDialog";
import { findProjectBySlug } from "@/components/portfolio/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function InterceptedProjectPage({ params }: Props) {
  const { slug } = use(params);
  const router = useRouter();
  const project = findProjectBySlug(slug);
  return <ProjectDialog project={project} onClose={() => router.back()} />;
}
