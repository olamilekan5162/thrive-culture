import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface CTASectionProps {
  kicker?: string;
  title: string;
  description: string;
  primaryAction: {
    label: string;
    path: string;
  };
  secondaryAction?: {
    label: string;
    path: string;
  };
  variant?: 'dark' | 'warm';
}

export const CTASection: React.FC<CTASectionProps> = ({
  kicker = 'Step Into the Possibility',
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'dark',
}) => {
  return (
    <section
      className={`py-16 sm:py-20 my-16 rounded-2xl relative overflow-hidden border ${
        variant === 'dark'
          ? 'bg-[#121316] text-white border-stone-800'
          : 'bg-[#FAF3E8] text-stone-900 border-[#E8D9C0]'
      }`}
    >
      {/* Subtle organic background accent */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-[#D35400]/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <span
          className={`text-xs uppercase tracking-widest font-semibold ${
            variant === 'dark' ? 'text-[#D35400]' : 'text-[#D35400]'
          }`}
        >
          {kicker}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal mt-3 mb-5 leading-tight text-balance">
          {title}
        </h2>
        <p
          className={`text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed ${
            variant === 'dark' ? 'text-stone-300' : 'text-stone-700'
          }`}
        >
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to={primaryAction.path}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-sm ${
              variant === 'dark'
                ? 'bg-white text-[#121316] hover:bg-[#D35400] hover:text-white'
                : 'bg-[#121316] text-white hover:bg-[#D35400]'
            }`}
          >
            <span>{primaryAction.label}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {secondaryAction && (
            <Link
              to={secondaryAction.path}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-medium border transition-colors ${
                variant === 'dark'
                  ? 'border-stone-700 text-stone-300 hover:text-white hover:border-stone-500'
                  : 'border-stone-400 text-stone-800 hover:border-stone-800'
              }`}
            >
              <span>{secondaryAction.label}</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
