import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BarChart3,
  TrendingUp,
  Target,
  BookOpen,
  ShieldCheck,
  Users,
  Compass,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import {
  ImpactMetric,
  type MetricDefinition,
} from "../components/ImpactMetric";
import { CTASection } from "../components/CTASection";
import { STORIES } from "../data/siteConfig";

export const ImpactPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Indicators aligned strictly with the strategy framework
  const impactIndicators: MetricDefinition[] = [
    {
      indicator: "Cohort Participants Reached",
      category: "Scale & Inclusion",
      placeholderValue: "[Target: 25–30 Pilot Cohort Scholars]",
      context:
        "Rigorous selection ensuring diverse socio-economic representation, academic paths, and vocational aims.",
      measurementMethod: "Cohort registration & verified attendance records",
    },
    {
      indicator: "Baseline-to-Post Growth in Life Clarity",
      category: "Psychological Empowerment",
      placeholderValue: "[Pre- & Post-Camp Assessment Scheduled]",
      context:
        "Measuring quantitative shifts in self-efficacy, internal locus of control, and personal vision before and after the 4-day retreat.",
      measurementMethod:
        "Standardized psychological self-assessment instrument",
    },
    {
      indicator: "Practical Financial Literacy Mastery",
      category: "Capability Building",
      placeholderValue: "[Curriculum Evaluation In Progress]",
      context:
        "Testing practical competencies in personal cash flows, debt management, investment principles, and long-term planning.",
      measurementMethod: "Post-module practical simulation assessments",
    },
    {
      indicator: "Multi-Year Life Blueprints Completed",
      category: "Actionable Planning",
      placeholderValue: "[100% of Camp Graduates Expected]",
      context:
        "Every scholar produces a bound, personal life execution blueprint with tangible 1-year and 3-year milestones.",
      measurementMethod: "Blueprint submission and facilitator review",
    },
    {
      indicator: "Active Mentors & Speakers Engaged",
      category: "Relational Ecosystem",
      placeholderValue: "[Recruitment for Pilot Cohort Active]",
      context:
        "Seasoned professionals providing intergenerational guidance, fireside sessions, and ongoing advice.",
      measurementMethod: "Mentor commitment agreements & session logs",
    },
    {
      indicator: "6-Month Post-Camp Accountability Retention",
      category: "Long-term Longitudinal",
      placeholderValue: "[Post-Pilot Longitudinal Tracking]",
      context:
        "Tracking scholar pod meeting frequency, milestone execution, and sustained peer support six months post-camp.",
      measurementMethod: "Quarterly peer-circle check-in logs",
    },
    {
      indicator: "Grassroots Projects / Ventures Incubated",
      category: "Community Contribution",
      placeholderValue: "[Post-Camp Fellowship Tracking]",
      context:
        "Tracking community solutions, creative initiatives, or social enterprises initiated by cohort alumni.",
      measurementMethod: "Next Horizon Fellowship milestones",
    },
    {
      indicator: "Institutional & Venue Partnerships Formed",
      category: "Ecosystem Sustainability",
      placeholderValue: "[Founding Partner Alignment Underway]",
      context:
        "Foundations, corporate sponsors, and educational institutions funding scholarships and spaces.",
      measurementMethod: "Executed partnership Memoranda of Understanding",
    },
  ];

  const categories = [
    "All",
    "Scale & Inclusion",
    "Psychological Empowerment",
    "Capability Building",
    "Actionable Planning",
    "Relational Ecosystem",
    "Long-term Longitudinal",
  ];

  const filteredMetrics =
    selectedCategory === "All"
      ? impactIndicators
      : impactIndicators.filter((m) => m.category === selectedCategory);

  return (
    <div className="space-y-24 sm:space-y-32 pt-8 sm:pt-14">
      {/* 1. EDITORIAL HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400]">
              Accountability & Evidence
            </span>
            <span className="text-stone-300">·</span>
            <span className="text-xs text-stone-500 font-mono">
              Our Results & Longitudinal Framework
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#121316] leading-[1.08] text-balance">
            A public record of rigorous growth and genuine impact.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
            We do not manufacture vanity numbers. As our inaugural cohorts
            launch, this public ledger will publish verified baseline-to-post
            assessments, longitudinal tracking, and real participant outcomes.
          </p>
        </div>
      </section>

      {/* 2. THE RIGOUR MANIFESTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF3E8]/80 border border-[#E8DEC9] rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400]">
                Methodological Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#121316]">
                How We Approach Measurement
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Many youth programmes rely purely on post-event satisfaction
                surveys. Mirroring Possibilities pairs qualitative reflection
                with validated developmental indicators, measuring participant
                agency before the camp, immediately following commencement, and
                at 6-month longitudinal intervals.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-stone-600 pt-2">
                <span>• Pre-Camp Baseline Audit</span>
                <span>• Immediate Competency Assessment</span>
                <span>• 6-Month Blueprint Execution Review</span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 bg-white border border-stone-200 rounded-xl">
              <div className="flex items-center gap-2 text-stone-900 font-serif text-lg mb-2">
                <ShieldCheck className="w-5 h-5 text-[#D35400]" />
                <span>Zero Fabrication Pledge</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                In accordance with our governance guidelines, no metric will be
                published until rigorously audited with cohort participants and
                facilitators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IMPACT INDICATOR FRAMEWORK GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Core Indicators"
          title="The Measurement Matrix"
          description="The 8 core indicators monitored across every programme cohort. Values will update live as verified results are collected."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedCategory === cat
                  ? "bg-[#121316] text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMetrics.map((m) => (
            <ImpactMetric key={m.indicator} metric={m} />
          ))}
        </div>
      </section>

      {/* 4. FEATURED STORIES SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400] block mb-2">
              Qualitative Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#121316]">
              Stories, Reflections & Field Notes
            </h2>
          </div>
          <Link
            to="/stories"
            className="text-xs font-semibold text-[#D35400] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Explore All Journal Entries</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STORIES.map((s) => (
            <Link
              key={s.id}
              to={`/stories/${s.id}`}
              className="p-6 bg-white border border-stone-200/90 rounded-xl hover:border-stone-400 transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] text-stone-500 font-mono mb-3">
                  <span className="text-[#D35400] font-semibold uppercase">
                    {s.category}
                  </span>
                  <span>{s.readTime}</span>
                </div>

                <h3 className="font-serif text-xl text-stone-900 group-hover:text-[#D35400] transition-colors mb-2 leading-snug">
                  {s.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {s.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>{s.author}</span>
                <span className="text-stone-400">{s.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection
          kicker="Support the Evidence"
          title="Back Our Evaluation and Scholar Cohorts"
          description="Help us fund comprehensive research and psychometric impact evaluations as we build a lasting model for youth empowerment."
          primaryAction={{
            label: "Partner With Us",
            path: "/partner",
          }}
          secondaryAction={{
            label: "Apply for Thrive 20",
            path: "/apply",
          }}
        />
      </section>
    </div>
  );
};
