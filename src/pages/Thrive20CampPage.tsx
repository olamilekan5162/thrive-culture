import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Calendar, Users, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import PlaceholderNotice from '../components/PlaceholderNotice';
import { siteConfig } from '../data/siteConfig';

export default function Thrive20CampPage() {
  const camp = siteConfig.initiatives.find((i) => i.id === 'thrive-20-camp');
  const campImage = "/src/assets/images/thrive20_residential_camp_1791935607590.jpg";

  return (
    <div className="bg-stone-50">
      
      {/* 1. HERO SECTION */}
      <section className="bg-stone-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb back to umbrella */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-stone-400">
              <li>
                <Link to="/" className="hover:text-stone-200 transition-colors">
                  Thrive Culture
                </Link>
              </li>
              <ChevronRight className="w-3 h-3 text-stone-600" />
              <li>
                <Link to="/initiatives" className="hover:text-stone-200 transition-colors">
                  Initiatives
                </Link>
              </li>
              <ChevronRight className="w-3 h-3 text-stone-600" />
              <li className="text-[#F28524] font-medium">Thrive 20 Camp</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#F28524]">
                <span>Flagship Initiative of Thrive Culture</span>
                <span aria-hidden="true" className="text-stone-600">·</span>
                <span>Cohort Pilot</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance leading-tight">
                Thrive 20 Camp
              </h1>

              <p className="text-lg sm:text-xl text-stone-200 font-medium leading-relaxed max-w-xl">
                Four days of immersive retreat living, practical life skills, and high-trust peer alignment for young people stepping into their twenties.
              </p>

              <p className="text-sm text-stone-400 leading-relaxed max-w-lg">
                The early twenties set the habits and standards of your adult life. Thrive 20 gives you a dedicated space away from daily noise to build your personal compass with clarity.
              </p>

              {/* Quick Spec Strip */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-stone-800 text-xs text-stone-300">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#F28524] shrink-0" />
                  <span>4 Days / 3 Nights</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#F28524] shrink-0" />
                  <span>25–30 Cohort</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#F28524] shrink-0" />
                  <span>Residential Retreat</span>
                </div>
              </div>

              {/* Primary Application CTA */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={camp.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-stone-950 bg-[#F28524] hover:bg-[#DE7519] rounded-md transition-colors shadow-xs"
                >
                  Apply For Next Cohort
                  <ArrowUpRight className="w-4 h-4 text-stone-950" />
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white border border-stone-700 hover:bg-stone-800 rounded-md transition-colors"
                >
                  The 4-Day Journey
                </a>
              </div>

              <p className="text-xs text-stone-500">
                * Applications reviewed on a rolling basis. Cohort strictly capped at 25–30.
              </p>

            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-stone-700 shadow-xl bg-stone-800 aspect-16/9 lg:aspect-4/3">
                <img
                  src={campImage}
                  alt="Thrive 20 Camp evening circle discussion"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-xs text-stone-300">
                  <span className="font-bold text-white">Residential Sanctuary</span> — Distraction-free space to calibrate ambitions and forge real friendships.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. WHY THRIVE 20? */}
      <section className="py-14 lg:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <SectionHeading
                kicker="The Transition"
                title="Why Your Twenties Matter"
                description="Before twenty, life follows a prescribed syllabus. In your twenties, the syllabus disappears. You must decide what to pursue, how to spend your time, and who to surround yourself with."
              />

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Without intentional reflection, it is easy to drift into choices based on peer distraction or convenience. Thrive 20 Camp offers an intentional pause where you build your own operating principles alongside other hungry young people.
              </p>
            </div>

            <div className="lg:col-span-6 bg-stone-50 border border-stone-200 p-6 sm:p-7 rounded-xl space-y-3.5">
              <h3 className="text-base font-bold text-stone-950">
                What You Walk Away With
              </h3>

              <div className="space-y-3">
                <div className="p-3.5 bg-white border border-stone-200 rounded-lg">
                  <h4 className="font-bold text-stone-900 text-xs sm:text-sm">Personal Blueprint</h4>
                  <p className="text-stone-600 text-xs mt-0.5">
                    A concrete 1–3 year plan mapping your career goals, learning priorities, and daily habits.
                  </p>
                </div>

                <div className="p-3.5 bg-white border border-stone-200 rounded-lg">
                  <h4 className="font-bold text-stone-900 text-xs sm:text-sm">High-Trust Peer Group</h4>
                  <p className="text-stone-600 text-xs mt-0.5">
                    A dedicated accountability circle of peers who keep you honest on your goals after camp.
                  </p>
                </div>

                <div className="p-3.5 bg-white border border-stone-200 rounded-lg">
                  <h4 className="font-bold text-stone-900 text-xs sm:text-sm">Pragmatic Life Skills</h4>
                  <p className="text-stone-600 text-xs mt-0.5">
                    Clear frameworks for decision-making, financial literacy, and career navigation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE 4-DAY EXPERIENCE (Crisp, scannable) */}
      <section id="experience" className="py-14 lg:py-20 bg-stone-50 border-b border-stone-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            kicker="Curriculum Arc"
            title="The Four-Day Residential Experience"
            description="A carefully sequenced retreat moving from digital unplugging to personal blueprint authoring."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Day 1 */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col justify-between space-y-3 shadow-xs">
              <div>
                <span className="text-xs font-mono font-bold text-[#D96D14] uppercase tracking-wider block mb-1">
                  Day 01
                </span>
                <h3 className="text-base font-bold text-stone-950 mb-1.5">
                  Unplug & Ground
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Arrive at the retreat center. Put away digital distractions, set cohort ground rules, and start with an honest personal audit.
                </p>
              </div>
              <div className="pt-2.5 border-t border-stone-100 text-xs text-[#D96D14] font-medium">
                Focus: Self-Audit & Safety
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col justify-between space-y-3 shadow-xs">
              <div>
                <span className="text-xs font-mono font-bold text-[#D96D14] uppercase tracking-wider block mb-1">
                  Day 02
                </span>
                <h3 className="text-base font-bold text-stone-950 mb-1.5">
                  Frameworks & Exposure
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Masterclass workshops with guest mentors. Deep-dives on career trajectories, money habits, and thinking tools.
                </p>
              </div>
              <div className="pt-2.5 border-t border-stone-100 text-xs text-[#D96D14] font-medium">
                Focus: Mentors & Tools
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col justify-between space-y-3 shadow-xs">
              <div>
                <span className="text-xs font-mono font-bold text-[#D96D14] uppercase tracking-wider block mb-1">
                  Day 03
                </span>
                <h3 className="text-base font-bold text-stone-950 mb-1.5">
                  Personal Blueprint
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Dedicated quiet hours to write your 1–3 year life plan. Peer review labs to pressure-test goals and identify blind spots.
                </p>
              </div>
              <div className="pt-2.5 border-t border-stone-100 text-xs text-[#D96D14] font-medium">
                Focus: Roadmap Synthesis
              </div>
            </div>

            {/* Day 4 */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col justify-between space-y-3 shadow-xs">
              <div>
                <span className="text-xs font-mono font-bold text-[#D96D14] uppercase tracking-wider block mb-1">
                  Day 04
                </span>
                <h3 className="text-base font-bold text-stone-950 mb-1.5">
                  Commitment & Circles
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Cohort pledge session. Formation of 3-person peer accountability circles and protocols for staying locked-in after departure.
                </p>
              </div>
              <div className="pt-2.5 border-t border-stone-100 text-xs text-[#D96D14] font-medium">
                Focus: Accountability & Launch
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. LIFE FRAMEWORK SECTION */}
      <section className="py-14 lg:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading
              kicker="Curriculum"
              title="The Thrive 20 Life Framework"
              description="A practical mental model helping participants make sound decisions throughout their twenties."
            />

            <div className="mt-6 p-6 bg-stone-50 border border-stone-200 rounded-xl space-y-4">
              <h3 className="text-base font-bold text-stone-950">
                Four Pillars of the Framework
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                {camp.lifeFramework.placeholderText}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-white border border-stone-200 rounded-md text-xs text-stone-800">
                  <strong>1. Self-Mastery:</strong> Managing energy, focus, and integrity.
                </div>
                <div className="p-3 bg-white border border-stone-200 rounded-md text-xs text-stone-800">
                  <strong>2. Practical Skills:</strong> Execution, communication, and learning speed.
                </div>
                <div className="p-3 bg-white border border-stone-200 rounded-md text-xs text-stone-800">
                  <strong>3. Financial Baseline:</strong> Budgeting, saving, and avoiding early debt traps.
                </div>
                <div className="p-3 bg-white border border-stone-200 rounded-md text-xs text-stone-800">
                  <strong>4. Peer Standards:</strong> Building high-trust relationships that elevate you.
                </div>
              </div>

              <PlaceholderNotice
                label="Curriculum Framework"
                message={camp.lifeFramework.note}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHO SHOULD APPLY? */}
      <section className="py-14 lg:py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <SectionHeading
                kicker="Who It Is For"
                title="Is Thrive 20 Right For You?"
                description="We look for curiosity, hunger for growth, and readiness to be an active, supportive peer."
              />

              <div className="space-y-3">
                <div className="flex items-start gap-2.5 p-3.5 bg-white border border-stone-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#F28524] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong className="text-stone-900 block">Ages 19–23:</strong>
                    <span className="text-stone-600">Entering or navigating university, trade training, or starting your first job.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 bg-white border border-stone-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#F28524] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong className="text-stone-900 block">Hungry for Clarity:</strong>
                    <span className="text-stone-600">Ready to stop drifting and build an intentional personal direction.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 bg-white border border-stone-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#F28524] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong className="text-stone-900 block">Full Presence:</strong>
                    <span className="text-stone-600">Able to attend all 4 days in full and contribute openly to the cohort.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-stone-200 rounded-xl p-6 sm:p-7 space-y-4 shadow-xs">
              <h3 className="text-base font-bold text-stone-950">
                Pilot Cohort: 25–30 Seats
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Applications are assessed on curiosity, honesty, and motivation. We don't filter by pedigree or grades.
              </p>
              <a
                href={camp.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-stone-950 hover:bg-[#F28524] rounded-md transition-colors"
              >
                Open Application Form
                <ArrowUpRight className="w-4 h-4 text-[#F28524]" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQS (ACCORDION) */}
      <section className="py-14 lg:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading
              kicker="Questions"
              title="Frequently Asked Questions"
              description="Quick answers about the retreat format and application process."
              className="mb-8"
            />

            <FAQAccordion items={camp.faqs} />
          </div>
        </div>
      </section>

      {/* 7. APPLICATION CTA */}
      <section className="py-14 bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Ready to Take Charge of Your Twenties?
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed">
            Apply today for the pilot cohort. Spaces are strictly limited to 25–30 participants.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={camp.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-stone-950 bg-[#F28524] hover:bg-[#DE7519] rounded-md transition-colors shadow-xs"
            >
              Apply via Google Form
              <ArrowUpRight className="w-4 h-4 text-stone-950" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white border border-stone-700 hover:bg-stone-800 rounded-md transition-colors"
            >
              Contact Admissions Desk
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
