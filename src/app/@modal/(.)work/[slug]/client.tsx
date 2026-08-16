"use client";

import { useRouter } from "next/navigation";
import { ProjectDialog } from "@/components/ui/ProjectDialog";
import { findProjectBySlug } from "@/components/portfolio/data";

type Props = { slug: string };

export function InterceptedProjectClient({ slug }: Props) {
  const router = useRouter();
  const project = findProjectBySlug(slug);
  return <ProjectDialog project={project} onClose={() => router.back()} />;
}
