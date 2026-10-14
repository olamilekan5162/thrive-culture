import React from "react";

export default function SectionHeading({
  kicker,
  title,
  description,
  alignment = "left",
  theme = "light",
  className = "",
}: any) {
  const isCenter = alignment === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}
    >
      {kicker && (
        <p
          className={`text-xs font-bold tracking-wider uppercase mb-2 ${
            isDark ? "text-[#F28524]" : "text-[#D96D14]"
          }`}
        >
          {kicker}
        </p>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance leading-tight ${
          isDark ? "text-white" : "text-stone-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-stone-300" : "text-stone-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
