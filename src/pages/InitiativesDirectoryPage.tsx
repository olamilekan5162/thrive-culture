import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Flame, Layers, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { InitiativeCard } from '../components/InitiativeCard';
import { CTASection } from '../components/CTASection';
import { INITIATIVES } from '../data/siteConfig';

export const InitiativesDirectoryPage: React.FC = () => {
  const flagship = INITIATIVES.find((i) => i.flagship)!;
  const otherInitiatives = INITIATIVES.filter((i) => !i.flagship);

  return (
    <div className="space-y-24 sm:space-y-32 pt-8 sm:pt-14">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400]">
              Ecosystem Initiatives
            </span>
            <span className="text-stone-300">·</span>
            <span className="text-xs text-stone-500 font-mono">Mirroring Possibilities Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#121316] leading-[1.08] text-balance">
            Targeted vehicles engineered to expand youth horizons.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
            Mirroring Possibilities designs and executes focused initiatives tailored to specific youth development milestones. Explore our current flagship residential camp alongside upcoming innovation labs and fellowships.
          </p>
        </div>
      </section>

      {/* 2. CURRENT FLAGSHIP SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400] block mb-1">
            Current Active Initiative
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#121316]">
            The Flagship Residential Programme
          </h2>
        </div>

        <InitiativeCard initiative={flagship} featured={true} />
      </section>

      {/* 3. FUTURE INITIATIVES & PIPELINE LABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400] block mb-1">
            Pipeline Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#121316]">
            Future Programmes & Innovation Labs
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl">
            Our framework is intentionally scalable. As our ecosystem expands, these initiatives will activate across additional age thresholds and community challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherInitiatives.map((init) => (
            <InitiativeCard key={init.id} initiative={init} featured={false} />
          ))}
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection
          kicker="Co-Design an Initiative"
          title="Interested in Launching a Regional Cohort?"
          description="We collaborate with foundations and regional youth bodies to bring our curriculum and sanctuary model to new communities."
          primaryAction={{
            label: 'Partner With Us',
            path: '/partner'
          }}
          secondaryAction={{
            label: 'Apply for Thrive 20',
            path: '/apply'
          }}
        />
      </section>

    </div>
  );
};
