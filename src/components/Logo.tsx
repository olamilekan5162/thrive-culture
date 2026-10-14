import React from "react";
import logo1 from "../assets/logo1.png"; // Light theme variant
import logo2 from "../assets/logo2.png"; // Dark theme variant

/**
 * Thrive Culture Official Logo Component
 * Uses PNG assets for light and dark theme variations.
 */
export default function Logo({
  variant = "full", // Kept for API backward compatibility
  theme = "light",
  className = "h-9 w-auto",
}) {
  const isDark = theme === "dark";
  const logoSrc = isDark ? logo2 : logo1;

  return (
    <img
      src={logoSrc}
      alt="Thrive Culture Logo"
      className={className}
      draggable="false"
    />
  );
}
