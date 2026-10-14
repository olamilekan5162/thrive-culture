import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({
  kicker,
  title,
  description,
  breadcrumbs = [],
  children,
}) {
  return (
    <section className="bg-stone-100/70 border-b border-stone-200 pt-10 pb-14 lg:pt-14 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-stone-500">
              <li>
                <Link to="/" className="hover:text-stone-900 transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-stone-400" />
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-stone-900 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-stone-900 font-medium">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl">
          {kicker && (
            <p className="text-xs font-bold uppercase tracking-wider text-[#D96D14] mb-2.5">
              {kicker}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 text-balance leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-3.5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  );
}
