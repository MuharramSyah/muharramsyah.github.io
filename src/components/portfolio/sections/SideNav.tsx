"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type CSSProperties } from "react";
import { Button } from "@heroui/react";
import { ChevronLeft, ChevronRight, Bars, Xmark } from "@gravity-ui/icons";
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

  const closeMenu = () => setMobileMenuOpen(false);
  const toggleMenu = () => setMobileMenuOpen((v) => !v);
  const toggleCollapsed = () => setCollapsed((v) => !v);

  const label = (id: SectionId) => id.charAt(0).toUpperCase() + id.slice(1);

  if (isMobile) {
    return (
      <>
        <Button
          onPress={toggleMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          variant="bordered"
          radius="full"
          isIconOnly
          style={{
            position: "fixed",
            top: 16,
            right: 16,
            zIndex: 65,
            background: colors.paleRose,
            color: colors.softBlack,
            boxShadow: "0 4px 12px rgba(38,38,38,0.08)",
          }}
        >
          {mobileMenuOpen ? <Xmark /> : <Bars />}
        </Button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 55,
                background: colors.paleRose,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 24,
                padding: 24,
              }}
            >
              {SECTION_IDS.map((id, i) => {
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    onClick={closeMenu}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.08 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      fontSize: 32,
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? colors.maroon : colors.softBlack,
                      textDecoration: "none",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {label(id)}
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  const sidebarLeft = collapsed ? -NAV_WIDTH : 0;
  const chevronLeft = collapsed ? 12 : NAV_WIDTH + 12;

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

  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: 50,
          background: colors.paleRose,
          display: "grid",
          alignItems: "center",
          padding: "20px 48px",
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
              {label(id)}
            </a>
          ))}
        </div>
      </div>

      <Button
        onPress={toggleCollapsed}
        aria-label={collapsed ? "Show navigation" : "Hide navigation"}
        variant="bordered"
        radius="full"
        isIconOnly
        style={{
          position: "fixed",
          zIndex: 51,
          top: "50%",
          left: chevronLeft,
          fontSize: 24,
          cursor: "pointer",
          fontWeight: 400,
          padding: 0,
          transition: "left 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {collapsed ? <ChevronRight /> : <ChevronLeft />}
      </Button>
    </>
  );
}
