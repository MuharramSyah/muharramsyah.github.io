import type { Project } from "@/components/portfolio/types";
import { colors } from "@/config";

type Props = {
  project: Project;
};

export function ProjectDetail({ project }: Props) {
  return (
    <article style={{ color: colors.softBlack }}>
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          marginBottom: 12,
          alignItems: "center",
        }}
      >
        {project.tags.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: colors.maroon,
            }}
          >
            {t}
          </span>
        ))}
        <span style={{ fontSize: 12, color: colors.gray }}>· {project.year}</span>
      </div>

      <h1
        style={{
          margin: 0,
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        {project.title}
      </h1>

      <div
        style={{
          marginTop: 32,
          width: "100%",
          aspectRatio: "16/9",
          borderRadius: 10,
          background: project.image
            ? `url(${project.image}) center/cover`
            : "repeating-linear-gradient(135deg, rgba(38,38,38,0.06) 0px, rgba(38,38,38,0.06) 2px, transparent 2px, transparent 12px)",
          border: "1px solid rgba(38,38,38,0.12)",
          display: project.image ? "block" : "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!project.image && (
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 12,
              color: "rgba(38,38,38,0.5)",
            }}
          >
            {project.title.toLowerCase().replace(/\s+/g, "-")}.png
          </span>
        )}
      </div>

      <div style={{ marginTop: 40 }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: colors.gray,
            marginBottom: 12,
          }}
        >
          About this project
        </div>
        <div style={{ maxWidth: 720 }}>
          {(project.overview ?? project.blurb)
            .split(/\n{2,}/)
            .map((para, i) => (
              <p
                key={i}
                style={{
                  margin: i === 0 ? 0 : "16px 0 0",
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "rgba(38,38,38,0.85)",
                }}
              >
                {para}
              </p>
            ))}
        </div>
      </div>

      {project.stack && project.stack.length > 0 && (
        <div style={{ marginTop: 40 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: colors.gray,
              marginBottom: 12,
            }}
          >
            Skills & Tools
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {project.stack.map((s) => (
              <span
                key={s}
                style={{
                  fontSize: 13,
                  padding: "6px 12px",
                  borderRadius: 999,
                  background: "rgba(38,38,38,0.06)",
                  color: colors.softBlack,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.links &&
        (project.links.code || project.links.demo || project.links.paper) && (
          <div
            style={{
              marginTop: 40,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "12px 22px",
                  borderRadius: 4,
                  background: colors.maroon,
                  color: colors.paleRose,
                  textDecoration: "none",
                }}
              >
                View live demo →
              </a>
            )}
            {project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "12px 22px",
                  borderRadius: 4,
                  border: `1px solid ${colors.softBlack}`,
                  color: colors.softBlack,
                  textDecoration: "none",
                }}
              >
                View source →
              </a>
            )}
            {project.links.paper && (
              <a
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "12px 22px",
                  borderRadius: 4,
                  border: `1px solid ${colors.softBlack}`,
                  color: colors.softBlack,
                  textDecoration: "none",
                }}
              >
                Read paper →
              </a>
            )}
          </div>
        )}
    </article>
  );
}
