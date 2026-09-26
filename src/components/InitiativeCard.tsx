import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Users, Target } from "lucide-react";
import type { Initiative } from "../data/siteConfig";

interface InitiativeCardProps {
  initiative: Initiative;
  featured?: boolean;
}

export const InitiativeCard: React.FC<InitiativeCardProps> = ({
  initiative,
  featured = false,
}) => {
  return (
    <article
      className={`group relative rounded-xl transition-all duration-200 border ${
        featured
          ? "bg-gradient-to-br from-stone-900 to-stone-950 text-white border-stone-800 p-8 sm:p-10 shadow-lg"
          : "bg-white text-stone-900 border-stone-200/90 p-6 sm:p-8 hover:border-stone-400 hover:shadow-sm"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          {initiative.flagship && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400] bg-orange-950/70 border border-orange-800/60 px-2.5 py-1 rounded-sm">
              Flagship Initiative
            </span>
          )}
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-sm ${
              featured
                ? "text-stone-300 bg-stone-800/90"
                : "text-stone-600 bg-stone-100"
            }`}
          >
            {initiative.status}
          </span>
        </div>

        <div
          className={`text-xs flex items-center gap-1.5 ${featured ? "text-stone-400" : "text-stone-500"}`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{initiative.dates}</span>
        </div>
      </div>

      <h3
        className={`font-serif tracking-tight leading-tight ${
          featured
            ? "text-3xl sm:text-4xl text-white"
            : "text-2xl text-stone-900"
        }`}
      >
        {initiative.name}
      </h3>

      <p
        className={`text-xs uppercase tracking-wider font-semibold mt-1 mb-4 ${featured ? "text-orange-400" : "text-[#D35400]"}`}
      >
        {initiative.subheading}
      </p>

      <p
        className={`text-sm sm:text-base leading-relaxed mb-6 ${featured ? "text-stone-300" : "text-stone-600"}`}
      >
        {initiative.purpose}
      </p>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 mb-8 border-t text-xs ${featured ? "border-stone-800 text-stone-300" : "border-stone-100 text-stone-600"}`}
      >
        <div className="flex items-start gap-2">
          <Target className="w-4 h-4 text-[#D35400] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block text-stone-200">
              Target Audience
            </span>
            <span>{initiative.targetAudience}</span>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Users className="w-4 h-4 text-[#D35400] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block text-stone-200">
              Cohort Scale
            </span>
            <span>{initiative.cohortSize}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {initiative.id === "thrive-20" ? (
          <>
            <Link
              to="/plan-twenty"
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                featured
                  ? "bg-white text-stone-900 hover:bg-stone-200"
                  : "bg-stone-900 text-white hover:bg-[#D35400]"
              }`}
            >
              <span>Explore Thrive 20</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/apply"
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-medium border transition-colors ${
                featured
                  ? "border-stone-700 text-stone-300 hover:text-white hover:border-stone-500"
                  : "border-stone-300 text-stone-700 hover:border-stone-900"
              }`}
            >
              <span>Apply for Cohort</span>
            </Link>
          </>
        ) : (
          <Link
            to={`/initiatives/${initiative.id}`}
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
              featured
                ? "bg-stone-800 text-white hover:bg-stone-700"
                : "bg-stone-100 text-stone-800 hover:bg-stone-200"
            }`}
          >
            <span>Learn About {initiative.name}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </article>
  );
};
