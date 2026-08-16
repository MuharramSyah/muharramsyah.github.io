import type { CSSProperties, ReactNode } from "react";
import { SplitText } from "@/libs/motion";
import {colors} from "@/config";

type Props = {
  children: ReactNode;
  split?: boolean;
  marginBottom?: number;
  fontWeight?: number;
  textAlign?: CSSProperties["textAlign"];
};

export function SectionHeading({
  children,
  split = false,
  marginBottom = 32,
  fontWeight,
  textAlign,
}: Props) {
  const style: CSSProperties = {
    fontSize: 64,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: colors.maroon,
    marginBottom,
    ...(fontWeight ? { fontWeight } : {}),
    ...(textAlign ? { textAlign } : {}),
  };
  return (
    <div style={style}>
      {split && typeof children === "string" ? <SplitText text={children} /> : children}
    </div>
  );
}
