import React from "react";
import logo1 from "../assets/logo1.png"; // Light theme variant
import logo2 from "../assets/logo2.png"; // Dark theme variant

export default function Logo({ theme = "light", className = "h-50 w-auto" }) {
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
