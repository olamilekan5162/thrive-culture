import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Compass, Users, Layers } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { siteConfig } from '../data/siteConfig';

export default function InitiativesPage() {
  const thrive20 = siteConfig.initiatives.find((i) => i.id === 'thrive-20-camp');
  const nslc = siteConfig.initiatives.find((i) => i.id === 'nslc');

  return (
    <div className="bg-stone-50">
      
      {/* 1. PAGE HERO */}
      <PageHero
        kicker="Initiatives"
        title="Our Ecosystem of Programmes"
        description="Targeted interventions designed to spark self-direction, practical agency, and lifelong relationships."
        breadcrumbs={[{ label: 'Initiatives' }]}
      />

      {/* 2. THRIVE 20 CAMP SPOTLIGHT */}
      <section id="thrive-20-camp" className="py-14 lg:py-20 bg-white border-b border-stone-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 aspect-16/9 lg:aspect-4/3">
                <img
                  src={thrive20.image}
                  alt="Thrive 20 Camp residential retreat cohort"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 bg-stone-950/90 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                  Flagship Programme
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
                <span>{thrive20.cohortDetails.duration}</span>
                <span aria-hidden="true">·</span>
                <span>{thrive20.cohortDetails.pilotTarget}</span>
                <span aria-hidden="true">·</span>
                <span>{thrive20.cohortDetails.format}</span>
              </div>

              <h2 className="text-3xl font-bold text-stone-950">
                {thrive20.title}
              </h2>

              <p className="text-base text-stone-700 leading-relaxed font-medium">
                {thrive20.summary}
              </p>

              <p className="text-stone-600 text-sm leading-relaxed">
                {thrive20.fullDescription}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/initiatives/thrive-20-camp"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-stone-950 hover:bg-[#F28524] rounded-md transition-colors"
                >
                  Programme Details
                  <ArrowRight className="w-3.5 h-3.5 text-[#F28524]" />
                </Link>
                <a
                  href={thrive20.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-900 bg-white border border-stone-300 hover:bg-stone-100 rounded-md transition-colors"
                >
                  Apply via Form
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F28524]" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. NSLC */}
      <section id="nslc" className="py-14 lg:py-20 bg-stone-50 border-b border-stone-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
                <span>{nslc.cohortDetails.format}</span>
                <span aria-hidden="true">·</span>
                <span>{nslc.cohortDetails.pilotTarget}</span>
              </div>

              <h2 className="text-3xl font-bold text-stone-950">
                {nslc.title}
              </h2>

              <p className="text-base text-stone-700 leading-relaxed font-medium">
                {nslc.summary}
              </p>

              <p className="text-stone-600 text-sm leading-relaxed">
                {nslc.fullDescription}
              </p>

              <div className="pt-2">
                <Link
                  to="/partner"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-900 hover:text-[#D96D14] transition-colors"
                >
                  <span>Partner as a University Host</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F28524]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 aspect-16/9 lg:aspect-4/3">
                <img
                  src={nslc.image}
                  alt="National Students Leadership Conference"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 bg-stone-950/90 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                  National Initiative
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. PIPELINE ROADMAP */}
      <section className="py-14 lg:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            kicker="Pipeline"
            title="Future Programmes in Development"
            description="Thrive Culture is expanding to support creative labs, childhood exposure, and alumni networks."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl space-y-2">
              <Layers className="w-5 h-5 text-[#F28524]" />
              <div className="text-xs font-mono font-bold text-[#D96D14]">In Design</div>
              <h3 className="font-bold text-stone-950 text-sm">Creative & Tech Labs</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Weekend studios pairing young creators with software developers, designers, and film producers.
              </p>
            </div>

            <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl space-y-2">
              <Compass className="w-5 h-5 text-[#F28524]" />
              <div className="text-xs font-mono font-bold text-[#D96D14]">Scoping</div>
              <h3 className="font-bold text-stone-950 text-sm">Childhood Discovery Circles</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Early-stage visits to laboratories, parliaments, and art studios for children aged 9–14.
              </p>
            </div>

            <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl space-y-2">
              <Users className="w-5 h-5 text-[#F28524]" />
              <div className="text-xs font-mono font-bold text-[#D96D14]">Ongoing</div>
              <h3 className="font-bold text-stone-950 text-sm">Alumni Circles</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Peer masterminds structured to support Thrive 20 graduates in reviewing their life plans quarterly.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
