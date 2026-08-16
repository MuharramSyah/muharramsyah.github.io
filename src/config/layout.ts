export const breakpoints = {
  mobile: 760,
};

export const container = {
  maxWidth: 880,
  sideNavWidth: 180,
};

export const spacing = {
  sectionPaddingX: (isMobile: boolean) => (isMobile ? "0 24px" : "0 0px"),
  sectionPaddingY: (isMobile: boolean) => (isMobile ? "56px" : "80px"),
  heroPaddingY: (isMobile: boolean) => (isMobile ? "56px" : "96px"),
  navPadding: (isMobile: boolean) => (isMobile ? "18px 24px" : "20px 48px"),
};

export const grid = {
  aboutColumns: (isMobile: boolean) => (isMobile ? "1fr" : "1.4fr 1fr"),
  timelineColumns: (isMobile: boolean) => (isMobile ? "80px 1fr" : "120px 1fr"),
  skillsColumns: (isMobile: boolean) => (isMobile ? "1fr 1fr" : "repeat(4, 1fr)"),
};

export const typography = {
  fontFamily: "-apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  heroTitle: 72,
  sectionHeading: 64,
  projectTitle: (isMobile: boolean) => (isMobile ? 20 : 24),
};
