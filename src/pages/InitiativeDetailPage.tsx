import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Users,
  Target,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Flame,
} from "lucide-react";
import { INITIATIVES } from "../data/siteConfig";

export const InitiativeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // If thrive-20, route to dedicated flagship Plan Twenty experience
  if (id === "thrive-20") {
    return <Navigate to="/plan-twenty" replace />;
  }

  const initiative = INITIATIVES.find((i) => i.id === id);

  if (!initiative) {
    return (
      <div className="pt-20 text-center max-w-xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-serif text-stone-900 mb-4">
          Initiative Not Found
        </h2>
        <p className="text-sm text-stone-600 mb-8">
          The requested initiative could not be found in our current directory.
        </p>
        <Link
          to="/initiatives"
          className="px-5 py-2.5 bg-[#121316] text-white rounded-lg text-xs font-semibold"
        >
          View All Initiatives
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-8 sm:pt-14 pb-20 space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/initiatives"
          className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 hover:text-[#D35400] transition-colors mb-8 uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Initiatives</span>
        </Link>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-[#D35400] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">
            {initiative.status}
          </span>
          <span className="text-xs text-stone-500 font-mono">
            {initiative.dates}
          </span>
        </div>

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-serif text-[#121316] leading-tight mb-2">
          {initiative.name}
        </h1>
        <p className="text-xs uppercase tracking-wider font-semibold text-[#D35400] mb-6">
          {initiative.subheading}
        </p>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans mb-10">
          {initiative.purpose}
        </p>

        {/* Core Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-white border border-stone-200 rounded-xl mb-12 text-xs">
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-[#D35400] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-900 block">
                Target Demographic
              </span>
              <span className="text-stone-600">
                {initiative.targetAudience}
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-[#D35400] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-900 block">
                Cohort Scale
              </span>
              <span className="text-stone-600">{initiative.cohortSize}</span>
            </div>
          </div>
        </div>

        {/* Problem & Experience Sections */}
        <div className="space-y-12">
          <div className="p-8 bg-[#FAF3E8] border border-[#E8DEC9] rounded-2xl">
            <h3 className="font-serif text-2xl text-stone-900 mb-3">
              The Challenge We Are Addressing
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed font-sans">
              {initiative.problem}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-stone-900 mb-3">
              The Programme Experience
            </h3>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
              {initiative.experienceDescription}
            </p>
          </div>

          {/* Pillars */}
          {initiative.pillars.length > 0 && (
            <div>
              <h3 className="font-serif text-2xl text-stone-900 mb-6">
                Core Focus Pillars
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {initiative.pillars.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="p-6 bg-white border border-stone-200 rounded-xl"
                  >
                    <span className="text-xs font-mono font-bold text-[#D35400] block mb-1">
                      0{idx + 1}
                    </span>
                    <h4 className="font-serif text-xl text-stone-900 mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                    <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500">
                      Focus: {pillar.focus}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Eligibility & Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-white border border-stone-200 rounded-xl">
              <h4 className="font-serif text-lg text-stone-900 mb-3">
                Eligibility Framework
              </h4>
              <ul className="space-y-2 text-xs text-stone-600">
                {initiative.eligibility.map((e, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D35400] shrink-0 mt-0.5" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-xl">
              <h4 className="font-serif text-lg text-stone-900 mb-3">
                Selection Process
              </h4>
              <ul className="space-y-2 text-xs text-stone-600">
                {initiative.selectionCriteria.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#D35400] font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTA */}
          <div className="p-8 bg-[#121316] text-white rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-2xl text-white mb-1">
                Stay Informed on {initiative.name}
              </h4>
              <p className="text-xs text-stone-300">
                Register your interest to be notified when candidate
                applications open.
              </p>
            </div>
            <Link
              to="/contact?enquiry=initiative"
              className="px-6 py-3 bg-[#D35400] hover:bg-orange-600 text-white transition-colors rounded-lg text-xs font-semibold whitespace-nowrap shadow-sm"
            >
              {initiative.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
