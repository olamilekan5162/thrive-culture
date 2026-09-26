import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Clock, 
  FileText, 
  Send, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { FAQAccordion } from '../components/FAQAccordion';
import { SITE_CONFIG, INITIATIVES, FAQS } from '../data/siteConfig';

export const ApplicationPage: React.FC = () => {
  const thrive20 = INITIATIVES.find((i) => i.id === 'thrive-20')!;

  // Interactive Eligibility Self-Check State
  const [turningTwenty, setTurningTwenty] = useState<boolean | null>(null);
  const [canAttendFullCamp, setCanAttendFullCamp] = useState<boolean | null>(null);
  const [openToGrowth, setOpenToGrowth] = useState<boolean | null>(null);

  const isEligible = turningTwenty === true && canAttendFullCamp === true && openToGrowth === true;
  const isChecked = turningTwenty !== null && canAttendFullCamp !== null && openToGrowth !== null;

  const journeySteps = [
    {
      step: '01',
      title: 'Review & Self-Check',
      description: 'Confirm you meet the age threshold (turning 20 during camp year) and can commit to all 4 days.',
    },
    {
      step: '02',
      title: 'Written Reflection Form',
      description: 'Complete the Google Application Form with genuine reflections on your values, challenges, and goals.',
    },
    {
      step: '03',
      title: 'Committee Review',
      description: 'Our review circle reads every application with care. Shortlisted candidates are invited to an informal conversation.',
    },
    {
      step: '04',
      title: 'Cohort Confirmation',
      description: 'Successful candidates receive their invitation, travel instructions, pre-camp readings, and roommate matches.',
    },
    {
      step: '05',
      title: 'The 4-Day Sanctuary',
      description: 'Arrive at the retreat sanctuary for four days of intensive transformation and life blueprinting.',
    },
  ];

  const applicationPrompts = [
    {
      topic: 'Your Horizon & Crossroad',
      prompt: 'What does turning twenty feel like for you right now? What questions or decisions are you currently wrestling with?',
    },
    {
      topic: 'Personal Agency',
      prompt: 'Describe a moment in your life where you had to push through self-doubt or circumstance to create your own outcome.',
    },
    {
      topic: 'Cohort Contribution',
      prompt: 'What unique perspective, background, or energy do you bring to a circle of 25 fellow young adults?',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pt-8 sm:pt-14">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400]">
              Candidate Portal
            </span>
            <span className="text-stone-300">·</span>
            <span className="text-xs text-stone-500 font-mono">Thrive 20 Cohort Application</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#121316] leading-[1.08] text-balance">
            Apply to the Thrive 20 Residential Experience.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
            We are looking for thoughtful, self-reflective young adults turning twenty who are eager to build an intentional foundation for the decade ahead. No corporate polish required—bring your genuine voice.
          </p>
        </div>
      </section>

      {/* 2. THE APPLICATION JOURNEY STEPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Selection Path"
          title="The Candidate Journey"
          description="How the application process works from initial review to stepping foot into the residential sanctuary."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {journeySteps.map((step, idx) => (
            <div
              key={step.step}
              className="p-5 bg-white border border-stone-200/90 rounded-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#D35400] block mb-2">
                  Step {step.step}
                </span>
                <h4 className="font-serif text-lg text-stone-900 mb-2 leading-snug">
                  {step.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 text-[10px] text-stone-400 font-mono">
                Phase 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE ELIGIBILITY SELF-CHECKER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF3E8] border border-[#E8DEC9] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-[#D35400]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400]">
              Interactive Self-Verification
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif text-[#121316] mb-2">
            Quick Eligibility Self-Check
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mb-6">
            Confirm these three core prerequisites before launching the official application form:
          </p>

          <div className="space-y-4 mb-6">
            {/* Check 1 */}
            <div className="p-4 bg-white/80 rounded-lg border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs sm:text-sm text-stone-800">
                1. Will you turn <strong>20 years old</strong> within the camp calendar year?
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setTurningTwenty(true)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md border ${
                    turningTwenty === true
                      ? 'bg-stone-900 text-white border-stone-900'
                      : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setTurningTwenty(false)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md border ${
                    turningTwenty === false
                      ? 'bg-red-700 text-white border-red-700'
                      : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Check 2 */}
            <div className="p-4 bg-white/80 rounded-lg border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs sm:text-sm text-stone-800">
                2. Can you commit to the full <strong>4-day residential retreat</strong> in its entirety?
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setCanAttendFullCamp(true)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md border ${
                    canAttendFullCamp === true
                      ? 'bg-stone-900 text-white border-stone-900'
                      : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setCanAttendFullCamp(false)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md border ${
                    canAttendFullCamp === false
                      ? 'bg-red-700 text-white border-red-700'
                      : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Check 3 */}
            <div className="p-4 bg-white/80 rounded-lg border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs sm:text-sm text-stone-800">
                3. Are you open to participating honestly in reflection, peer discussions, and mentorship?
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setOpenToGrowth(true)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md border ${
                    openToGrowth === true
                      ? 'bg-stone-900 text-white border-stone-900'
                      : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setOpenToGrowth(false)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md border ${
                    openToGrowth === false
                      ? 'bg-red-700 text-white border-red-700'
                      : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  No
                </button>
              </div>
            </div>
          </div>

          {/* Result Feedback */}
          {isChecked && (
            <div
              className={`p-4 rounded-lg text-xs sm:text-sm flex items-start gap-3 ${
                isEligible
                  ? 'bg-emerald-50 border border-emerald-300 text-emerald-900'
                  : 'bg-amber-50 border border-amber-300 text-amber-900'
              }`}
            >
              {isEligible ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">You meet the core criteria!</strong>
                    <span>You are ready to complete the official application form below.</span>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Eligibility notice:</strong>
                    <span>
                      Thrive 20 is strictly reserved for individuals turning twenty during the camp year who can attend the full 4-day experience. If you do not meet this criteria, please explore our other upcoming initiatives or register your interest on our Contact page.
                    </span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 4. APPLICATION PREPARATION & ESSAY PROMPTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Preparation"
          title="What the Application Involves"
          description="We value depth, authenticity, and clarity over buzzwords. Prepare to reflect on these key themes inside the form."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {applicationPrompts.map((item, idx) => (
            <div
              key={item.topic}
              className="p-6 bg-white border border-stone-200/90 rounded-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-mono font-bold text-[#D35400] block mb-2">
                  Theme 0{idx + 1}
                </span>
                <h4 className="font-serif text-xl text-stone-900 mb-3">
                  {item.topic}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 italic leading-relaxed">
                  "{item.prompt}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] text-stone-400">
                Approx. 200–300 words recommended
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OFFICIAL APPLICATION SUBMISSION LAUNCHPAD */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#121316] text-white rounded-2xl p-8 sm:p-12 lg:p-14 border border-stone-800 shadow-xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400] block mb-2">
            The Launchpad
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
            Ready to Submit Your Application?
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto mb-8 leading-relaxed">
            The official candidate form takes approximately 20–30 minutes to complete. We recommend drafting your responses thoughtfully before submitting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.applicationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#121316] hover:bg-[#D35400] hover:text-white transition-colors rounded-lg text-sm font-semibold shadow-md"
            >
              <span>Launch Official Application Form</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              to="/plan-twenty"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-stone-900 text-stone-300 border border-stone-700 hover:border-stone-500 rounded-lg text-sm font-medium"
            >
              <span>Review Camp Details First</span>
            </Link>
          </div>

          <p className="text-[11px] text-stone-500 mt-6 font-mono">
            Direct Form Link: {SITE_CONFIG.applicationFormUrl} (Configured centrally)
          </p>
        </div>
      </section>

      {/* 6. FAQS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Questions"
          title="Application & Selection FAQs"
          description="Clarifications on the application timeline, selection notifications, and review criteria."
          align="center"
        />

        <FAQAccordion items={FAQS.filter((f) => f.category === 'Eligibility' || f.category === 'General')} />
      </section>

    </div>
  );
};
