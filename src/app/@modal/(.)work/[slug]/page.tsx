import { projects, projectSlug } from "@/components/portfolio/data";
import { InterceptedProjectClient } from "./client";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: projectSlug(p.title) }));
}

export default async function InterceptedProjectPage({ params }: Props) {
  const { slug } = await params;
  return <InterceptedProjectClient slug={slug} />;
}
