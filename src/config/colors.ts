export const colors = {
  softBlack: "#262626",
  gray: "#575757",
  maroon: "#7a3b3b",
  paleRose: "#f8f5f5",
} as const;

export type ColorToken = keyof typeof colors;

export function withAlpha(hex: string, alpha: number) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export const semanticColors = {
  background: colors.paleRose,
  text: colors.softBlack,
  mutedText: colors.gray,
  accent: colors.maroon,
  border: withAlpha(colors.softBlack, 0.12),
  borderStrong: colors.softBlack,
  overlay: colors.softBlack,
} as const;
