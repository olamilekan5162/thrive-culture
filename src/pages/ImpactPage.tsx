import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, FileText, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import PlaceholderNotice from "../components/PlaceholderNotice";
import impactImage from "../assets/images/young_innovators_impact_1791935608989.jpg";

export default function ImpactPage() {
  return (
    <div className="bg-stone-50">
      {/* 1. PAGE HERO */}
      <PageHero
        kicker="Impact"
        title="Grounded Accountability Over Vanity Metrics"
        description="We evaluate real human outcomes: self-authored life plans, durable peer circles, and long-term momentum."
        breadcrumbs={[{ label: "Impact" }]}
      />

      {/* 2. OUR EVALUATION PILLARS */}
      <section className="py-14 lg:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <SectionHeading
                kicker="Measurement"
                title="What We Actually Track"
                description="Rather than claiming outsized statistics, we track four concrete markers of personal transformation:"
              />

              <div className="space-y-3 pt-1 text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#F28524] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block">
                      1. Actionable Life Blueprints
                    </strong>
                    <span className="text-stone-600 text-xs sm:text-sm">
                      Does the participant produce a realistic 1–3 year plan
                      during camp?
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#F28524] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block">
                      2. Peer Circle Cohesion
                    </strong>
                    <span className="text-stone-600 text-xs sm:text-sm">
                      Are peer accountability trios still actively meeting after
                      90 and 180 days?
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#F28524] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block">
                      3. Career & Vocational Leaps
                    </strong>
                    <span className="text-stone-600 text-xs sm:text-sm">
                      Have participants applied for internships or ambitious
                      goals previously out of reach?
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#F28524] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block">
                      4. Community Leadership
                    </strong>
                    <span className="text-stone-600 text-xs sm:text-sm">
                      Are alumni taking active responsibility in their local
                      institutions?
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 aspect-4/3">
                <img
                  src={impactImage}
                  alt="Young changemakers presenting community projects"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR STAGE PARTICIPANT JOURNEY */}
      <section className="py-14 lg:py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Lifecycle"
            title="The Participant Journey"
            description="How young people move from initial selection to sustained multiplier leadership."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-2 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#D96D14]">
                Stage 01
              </span>
              <h4 className="font-bold text-stone-950 text-sm">Selection</h4>
              <p className="text-stone-600 text-xs leading-relaxed">
                Evaluating curiosity, hunger for growth, and readiness for
                honest self-reflection.
              </p>
            </div>

            <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-2 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#D96D14]">
                Stage 02
              </span>
              <h4 className="font-bold text-stone-950 text-sm">
                Residential Camp
              </h4>
              <p className="text-stone-600 text-xs leading-relaxed">
                Four days of high-focus masterclasses, mentor dialogues, and
                roadmap crafting.
              </p>
            </div>

            <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-2 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#D96D14]">
                Stage 03
              </span>
              <h4 className="font-bold text-stone-950 text-sm">
                Accountability Trios
              </h4>
              <p className="text-stone-600 text-xs leading-relaxed">
                Quarterly peer check-ins assessing personal execution against
                blueprint goals.
              </p>
            </div>

            <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-2 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#D96D14]">
                Stage 04
              </span>
              <h4 className="font-bold text-stone-950 text-sm">
                Multiplier Impact
              </h4>
              <p className="text-stone-600 text-xs leading-relaxed">
                Alumni returning as junior mentors, workshop leaders, or
                launching community initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VERIFIED REPORTS PLACEHOLDER */}
      <section className="py-14 lg:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Transparency"
            title="Cohort Evaluation & Reports"
            description="Verified outcomes and findings will be published openly following the pilot cohort."
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-600">
                <BarChart3 className="w-4 h-4 text-[#F28524]" />
                <span>Thrive 20 Pilot Baseline Data</span>
              </div>
              <h4 className="text-base font-bold text-stone-950">
                Pre- and Post-Camp Evaluation
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Participants complete self-efficacy, career clarity, and
                financial literacy benchmarks before and after the retreat.
              </p>
              <PlaceholderNotice
                label="Pilot Cohort Outcomes"
                message="Data will be published openly after the conclusion of the inaugural retreat."
              />
            </div>

            <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-600">
                <FileText className="w-4 h-4 text-[#F28524]" />
                <span>Annual Public Disclosure</span>
              </div>
              <h4 className="text-base font-bold text-stone-950">
                Annual Impact & Financial Stewardship Report
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Full documentation of scholarships disbursed, donor funds
                utilized, and qualitative alumni trajectories.
              </p>
              <PlaceholderNotice
                label="Annual Report"
                message="The inaugural Annual Report will be released upon completion of the pilot operating cycle."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-14 bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Support Rigorous Youth Transformation
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed">
            Collaborate as an evaluation partner, underwrite scholarship
            cohorts, or open job pipelines.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              to="/partner"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-950 bg-[#F28524] hover:bg-[#DE7519] rounded-md transition-colors"
            >
              Partner With Us
              <ArrowRight className="w-3.5 h-3.5 text-stone-950" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
