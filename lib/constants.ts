/**
 * Application-wide constants
 */

export const BRAND = {
  NAME: "Nextin Project Management",
  TAGLINE: "All-in-One Business Management Platform",
  EMAIL: "support@nextin.com",
  PHONE: "[Phone Number]",
  ADDRESS: "[Company Address]",
} as const;

export const SOCIAL_LINKS = {
  LINKEDIN: "#",
  TWITTER: "#",
  FACEBOOK: "#",
  YOUTUBE: "#",
} as const;

export const COLORS = {
  // Brand Colors
  NEXTIN_ORANGE: "#F16822",
  NEXTIN_ORANGE_HOVER: "#D85A1A", // Slightly darker for hover
  WORKSPACE_BLUE: "#005B82",
  WORKSPACE_BLUE_HOVER: "#004A6B", // Slightly darker for hover
  STANDARD_GRAY: "#58595B",
  // Legacy (keeping for backward compatibility, but using brand colors)
  PRIMARY: "#005B82", // Workspace Blue
  PRIMARY_HOVER: "#004A6B", // Workspace Blue Hover
} as const;

export const ANIMATION = {
  DEFAULT_DELAY: 150,
  DEFAULT_DURATION: 0.8,
  DEFAULT_EASE: "power3.out",
} as const;

