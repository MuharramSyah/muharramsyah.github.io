import { colors, site } from "@/config";

export function FooterBar() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        padding: "32px 0 48px",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 13,
        color: colors.gray,
        flexWrap: "wrap",
        gap: 8,
      }}
    >
      <span>© {year} {site.name}</span>
      <span>Built with care in Jakarta</span>
    </footer>
  );
}
