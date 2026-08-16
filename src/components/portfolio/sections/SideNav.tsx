"use client";

import { useState, type CSSProperties } from "react";
import { colors } from "@/config";
import { SECTION_IDS, type SectionId } from "../types";
import { useActiveSection } from "../hooks/useActiveSection";
import { useIsMobile } from "../hooks/useIsMobile";

const NAV_ACTIVE_BOLD = true;
const NAV_ACTIVE_INDENT = 15;
const NAV_WIDTH = 180;

export function SideNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const isMobile = useIsMobile();
  const activeSection = useActiveSection();

  const navPadding = isMobile ? "18px 24px" : "20px 48px";
  const closeMenu = () => setMobileMenuOpen(false);
  const toggleMenu = () => setMobileMenuOpen((v) => !v);
  const toggleCollapsed = () => setCollapsed((v) => !v);

  const navLink = (id: SectionId): CSSProperties => {
    const isActive = activeSection === id;
    return {
      opacity: isActive ? 1 : 0.7,
      display: "block",
      marginTop: 30,
      marginBottom: 30,
      fontWeight: isActive && NAV_ACTIVE_BOLD ? 700 : 400,
      marginLeft: isActive ? `${NAV_ACTIVE_INDENT}px` : "0px",
      color: isActive ? colors.maroon : colors.softBlack,
      transition: "font-weight 0.2s, margin-left 0.2s, color 0.2s, opacity 0.2s",
    };
  };

  const sidebarLeft = !isMobile && collapsed ? -NAV_WIDTH : 0;
  const chevronLeft = !isMobile && collapsed ? 12 : NAV_WIDTH + 12;

  return (
    <>
      {mobileMenuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            background: colors.paleRose,
            borderBottom: "1px solid rgba(38,38,38,0.1)",
          }}
        >
          {(["work", "about", "experience", "skills", "contact"] as const).map((id, i, arr) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              style={{
                padding: "16px 24px",
                borderBottom:
                  i === arr.length - 1 ? undefined : "1px solid rgba(38,38,38,0.08)",
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}

      <div
        style={{
          position: "fixed",
          zIndex: 50,
          background: colors.paleRose,
          display: "grid",
          alignItems: "center",
          padding: navPadding,
          left: sidebarLeft,
          fontFamily: "-apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif",
          height: "100%",
          textAlign: "left",
          top: 0,
          width: NAV_WIDTH,
          boxSizing: "border-box",
          transition: "left 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          style={{
            display: "inline-block",
            fontSize: 14,
            alignSelf: "center",
            alignItems: "center",
            position: "static",
            transform: collapsed ? "scale(0.05) translateY(120px)" : "scale(1) translateY(0)",
            opacity: collapsed ? 0 : 1,
            transformOrigin: "bottom left",
            transition:
              "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease",
          }}
        >
          {SECTION_IDS.map((id) => (
            <a key={id} href={`#${id}`} className="hov-nav" style={navLink(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
        <button
          onClick={toggleMenu}
          style={{
            display: isMobile ? "block" : "none",
            background: "none",
            border: "none",
            fontSize: 14,
            cursor: "pointer",
            color: colors.softBlack,
            padding: 8,
          }}
        >
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {!isMobile && (
        <button
          onClick={toggleCollapsed}
          aria-label={collapsed ? "Show navigation" : "Hide navigation"}
          style={{
            position: "fixed",
            zIndex: 51,
            top: "50%",
            left: chevronLeft,
            transform: "translateY(-50%)",
            width: 40,
            height: 40,
            borderWidth: "1px",
              borderStyle: "solid",
              borderColor: colors.maroon,
            borderRadius: 100,
            background: colors.paleRose,
            color: colors.maroon,
            fontSize: 24,
            cursor: "pointer",
            display: "inline-block",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 400,
            padding: 0,
              paddingBottom: 5,
            transition: "left 0.35s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {collapsed ? "›" : "‹"}
        </button>
      )}
    </>
  );
}
