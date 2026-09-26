import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Users, 
  Target, 
  Clock, 
  MapPin, 
  Compass, 
  ShieldCheck, 
  Flame, 
  Layers, 
  ArrowRight 
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTASection } from '../components/CTASection';
import { INITIATIVES, FAQS } from '../data/siteConfig';

import campImage from '../assets/images/thrive_camp_experience_1790379386709.jpg';
import mentorImage from '../assets/images/mentorship_network_1790379395979.jpg';

export const Thrive20Page: React.FC = () => {
  const thrive20 = INITIATIVES.find((i) => i.id === 'thrive-20')!;
  const location = useLocation();

  // Scroll to hash if present
  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  const scheduleDays = [
    {
      day: 'Day 01',
      theme: 'Deconstruction & Grounding',
      description: 'Arrival at the retreat sanctuary, digital sunset, breaking through superficial masks, and mapping personal values.',
      highlights: ['Arrival & sanctuary orientation', 'Unlearning societal scripts', 'The Personal Inventory workshop', 'Opening campfire circle']
    },
    {
      day: 'Day 02',
      theme: 'Practical Tools & Decision Craft',
      description: 'Masterclasses on financial fundamentals, strategic prioritization, mental resilience models, and interpersonal agency.',
      highlights: ['Financial mechanics of your twenties', 'Mental models for high-stakes decisions', 'Overcoming impostor paralysis', 'Small-group reflection pods']
    },
    {
      day: 'Day 03',
      theme: 'The Possibility Mirror & Mentors',
      description: 'Candid, unfiltered fireside exchanges with intergenerational mentors, industry builders, and practitioners.',
      highlights: ['Fireside dialogues with mentors', 'Real-world career breakdowns', 'Unvarnished stories of failure & resilience', 'Speed mentoring rounds']
    },
    {
      day: 'Day 04',
      theme: 'The Life Blueprint & Commissioning',
      description: 'Synthesizing insights into a concrete 1-year and 3-year execution plan, peer commitment circles, and commencement.',
      highlights: ['Drafting the 3-Year Life Blueprint', 'Peer accountability pod formation', 'Commissioning ceremony', 'Re-entry preparation']
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pt-8 sm:pt-14">
      
      {/* 1. HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-stone-200 pb-12">
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D35400] bg-orange-100/80 px-2.5 py-1 rounded-sm border border-orange-200/60">
              Flagship Initiative
            </span>
            <span className="text-xs text-stone-500 font-mono">
              Plan Twenty Residential Immersion
            </span>
            <span className="text-stone-300">·</span>
            <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
              Applications Open
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#121316] leading-[1.08] tracking-tight text-balance">
                Four days that transform the trajectory of your twenties.
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
                <strong>Thrive 20</strong> is an immersive residential sanctuary designed specifically for young people turning twenty. Step away from everyday noise to uncover genuine clarity, master practical life competencies, connect with exceptional mentors, and craft an actionable personal blueprint.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/apply"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#121316] text-white hover:bg-[#D35400] transition-colors shadow-sm"
                >
                  <span>Apply for Thrive 20</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-xs sm:text-sm font-medium bg-white text-stone-800 border border-stone-300 hover:border-stone-800 transition-colors"
                >
                  <span>Explore the Experience</span>
                </a>
              </div>

              {/* Fast Facts Grid */}
              <div className="pt-6 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-stone-600">
                <div>
                  <span className="block font-semibold text-stone-900">Duration</span>
                  <span>4 Days Residential</span>
                </div>
                <div>
                  <span className="block font-semibold text-stone-900">Cohort Scale</span>
                  <span>25–30 Scholars</span>
                </div>
                <div>
                  <span className="block font-semibold text-stone-900">Eligibility</span>
                  <span className="text-[#D35400] font-medium">Turning 20 in camp year</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-200">
                <img
                  src={campImage}
                  alt="Thrive 20 camp retreat circle"
                  className="w-full h-[400px] sm:h-[460px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* In-page Anchor Navigation Bar */}
          <div className="mt-12 pt-6 border-t border-stone-200 flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-medium text-stone-600">
            <span className="text-stone-400 uppercase text-[10px] tracking-wider">Navigate:</span>
            <a href="#about" className="px-3 py-1.5 rounded-md hover:bg-stone-200/70 hover:text-stone-900 transition-colors">
              Why Thrive 20?
            </a>
            <a href="#experience" className="px-3 py-1.5 rounded-md hover:bg-stone-200/70 hover:text-stone-900 transition-colors">
              The Experience
            </a>
            <a href="#pillars" className="px-3 py-1.5 rounded-md hover:bg-stone-200/70 hover:text-stone-900 transition-colors">
              Life Framework & Pillars
            </a>
            <a href="#eligibility" className="px-3 py-1.5 rounded-md hover:bg-stone-200/70 hover:text-stone-900 transition-colors">
              Who Should Apply?
            </a>
            <a href="#beyond" className="px-3 py-1.5 rounded-md hover:bg-stone-200/70 hover:text-stone-900 transition-colors">
              Beyond the Camp
            </a>
            <a href="#faq" className="px-3 py-1.5 rounded-md hover:bg-stone-200/70 hover:text-stone-900 transition-colors">
              FAQs
            </a>
          </div>

        </div>
      </section>

      {/* 2. WHY THRIVE 20? SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-[#FAF3E8]/80 border border-[#E8DEC9] rounded-2xl p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400] mb-2 block">
                The Turning Point
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#121316] leading-tight mb-4">
                Why Focus Specifically on Turning Twenty?
              </h2>
              <p className="text-xs text-stone-500 font-mono">
                The most underestimated milestone in human development
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
              <p>
                {thrive20.problem}
              </p>
              <p>
                At twenty, the choices you make around career trajectories, personal relationships, financial habits, and self-belief set off exponential compounding curves. Yet most young people are left to navigate this decisive decade with trial-and-error, isolated from grounded counsel.
              </p>
              <p>
                Thrive 20 provides the structured pause and reflective sanctuary young people need to make these decisions with intentionality, self-awareness, and courage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE EXPERIENCE & 4-DAY SEQUENCE */}
      <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <SectionHeading
          kicker="The 4-Day Journey"
          title="The Camp Experience"
          description="A carefully sequenced retreat away from notifications, status games, and daily pressures. Every day is engineered around deep focus, honesty, and strategic growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scheduleDays.map((item) => (
            <div
              key={item.day}
              className="p-6 bg-white border border-stone-200/90 rounded-xl hover:border-stone-400 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#D35400] bg-orange-50 px-2 py-0.5 rounded">
                    {item.day}
                  </span>
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                </div>
                
                <h4 className="font-serif text-xl text-stone-900 mb-2 leading-snug">
                  {item.theme}
                </h4>
                
                <p className="text-xs text-stone-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-stone-100">
                  <span className="text-[10px] uppercase font-semibold text-stone-500 tracking-wider block">
                    Curriculum Highlights
                  </span>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-1.5">
                        <span className="text-[#D35400]">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LIFE FRAMEWORK / 5 CORE PILLARS */}
      <section id="pillars" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <SectionHeading
          kicker="Curriculum Architecture"
          title="The 5 Pillars of Thrive 20"
          description="The five structural pillars that form the backbone of the Plan Twenty curriculum, addressing the complete young adult experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {thrive20.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-8 bg-white border border-stone-200/90 rounded-xl hover:border-stone-400 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#D35400] font-bold block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl text-stone-900 mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 text-xs">
                <span className="font-semibold text-stone-900 block mb-0.5">Core Focus:</span>
                <span className="text-stone-500">{pillar.focus}</span>
              </div>
            </div>
          ))}

          {/* 6th Card: The Output */}
          <div className="p-8 bg-stone-900 text-white rounded-xl flex flex-col justify-between border border-stone-800">
            <div>
              <span className="text-xs font-mono text-[#D35400] font-bold block mb-2">
                Tangible Output
              </span>
              <h3 className="font-serif text-2xl text-white mb-3 leading-snug">
                Your Personal Life Blueprint
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                Participants do not leave with mere inspiration. Every scholar departs with a bound, multi-year strategic roadmap outlining quarterly milestones, financial targets, peer accountability pacts, and mentor contacts.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-800 text-xs text-orange-300 font-medium">
              A durable compass for the decade ahead
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHO SHOULD APPLY? */}
      <section id="eligibility" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-6 p-8 sm:p-12 bg-white border border-stone-200 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400] block mb-2">
                Eligibility Requirements
              </span>
              <h3 className="text-3xl font-serif text-[#121316] mb-4">
                Who Is Thrive 20 Designed For?
              </h3>
              <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                We intentionally construct an intellectually and experientially diverse cohort. We do not select based on pedigree or privilege, but on authenticity and character.
              </p>

              <div className="space-y-3.5 mb-8">
                {thrive20.eligibility.map((req) => (
                  <div key={req} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-5 h-5 text-[#D35400] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-orange-50/70 border border-orange-200/60 rounded-lg text-xs text-stone-700">
              <strong className="text-[#D35400]">Non-Negotiable Threshold:</strong> Applicants must be turning 20 years old during the camp calendar year.
            </div>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-12 bg-white border border-stone-200 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400] block mb-2">
                Selection Criteria
              </span>
              <h3 className="text-3xl font-serif text-[#121316] mb-4">
                What We Seek in Candidates
              </h3>
              <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                During the application review, our committee prioritizes genuine self-reflection over polished corporate jargon.
              </p>

              <div className="space-y-4 mb-8">
                {thrive20.selectionCriteria.map((c) => (
                  <div key={c} className="p-3 bg-stone-50 border border-stone-200/80 rounded-lg text-xs sm:text-sm text-stone-700">
                    {c}
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/apply"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-[#121316] text-white hover:bg-[#D35400] transition-colors rounded-lg text-xs sm:text-sm font-semibold shadow-xs"
            >
              <span>Begin Application Review</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. BEYOND THE CAMP */}
      <section id="beyond" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-stone-900 text-white rounded-2xl p-8 sm:p-12 lg:p-16 border border-stone-800">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400] block mb-2">
              Sustained Trajectory
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
              Beyond the Camp: The Ongoing Circle
            </h2>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-8">
              The four days at Thrive 20 mark the initiation, not the conclusion. Every graduate is inducted into the lifetime Possibility Network.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs sm:text-sm text-stone-300">
            <div className="p-5 bg-stone-800/80 border border-stone-700/80 rounded-lg">
              <h4 className="font-serif text-lg text-white mb-1.5">
                Peer Pods
              </h4>
              <p className="text-xs text-stone-400">
                Monthly structured accountability syncs with your 4-person cohort pod to review execution against your Life Blueprint.
              </p>
            </div>

            <div className="p-5 bg-stone-800/80 border border-stone-700/80 rounded-lg">
              <h4 className="font-serif text-lg text-white mb-1.5">
                Quarterly Mentor Salons
              </h4>
              <p className="text-xs text-stone-400">
                Exclusive virtual and in-person firesides with guest industry practitioners to answer real-time career dilemmas.
              </p>
            </div>

            <div className="p-5 bg-stone-800/80 border border-stone-700/80 rounded-lg">
              <h4 className="font-serif text-lg text-white mb-1.5">
                Alumni Fellowships
              </h4>
              <p className="text-xs text-stone-400">
                Priority access to our Next Horizon Fellowship grants for graduates incubating social impact or entrepreneurial projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <SectionHeading
          kicker="Answers"
          title="Frequently Asked Questions"
          description="Everything you need to know about eligibility, camp life, costs, and selection."
          align="center"
        />

        <FAQAccordion items={FAQS} allowFilter={true} />
      </section>

      {/* 8. CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection
          kicker="Apply Now"
          title="Step into the 4-Day Immersion at Thrive 20"
          description="Applications for our upcoming cohort are currently being accepted. Review the process and submit your candidate profile."
          primaryAction={{
            label: 'Go to Application Portal',
            path: '/apply'
          }}
          secondaryAction={{
            label: 'Have Questions? Contact Us',
            path: '/contact'
          }}
        />
      </section>

    </div>
  );
};
