import Link from "next/link";
import { notFound } from "next/navigation";
import { findProjectBySlug, projects, projectSlug } from "@/components/portfolio/data";
import { ProjectDetail } from "@/components/ui/ProjectDetail";
import { colors, container } from "@/config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: projectSlug(p.title) }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = findProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main
      style={{
        background: colors.paleRose,
        color: colors.softBlack,
        minHeight: "100vh",
        fontFamily: "-apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: container.maxWidth, margin: "0 auto", padding: "80px 32px" }}>
        <Link
          href="/#work"
          style={{
            fontSize: 14,
            color: colors.gray,
            textDecoration: "none",
            display: "inline-block",
            marginBottom: 40,
          }}
        >
          ← Back to work
        </Link>
        <ProjectDetail project={project} />
      </div>
    </main>
  );
}
