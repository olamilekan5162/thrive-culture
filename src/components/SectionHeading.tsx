import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) => {
  return (
    <div
      className={`mb-10 lg:mb-14 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}
    >
      {kicker && (
        <div className="flex items-center gap-2 mb-3">
          {align === 'center' && <span className={`h-px w-6 ${light ? 'bg-white/40' : 'bg-[#D35400]/60'}`} />}
          <span
            className={`text-xs font-semibold tracking-widest uppercase ${
              light ? 'text-stone-300' : 'text-[#D35400]'
            }`}
          >
            {kicker}
          </span>
          <span className={`h-px w-6 ${light ? 'bg-white/40' : 'bg-[#D35400]/60'}`} />
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight leading-[1.15] text-balance ${
          light ? 'text-white' : 'text-[#121316]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-stone-300' : 'text-stone-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
