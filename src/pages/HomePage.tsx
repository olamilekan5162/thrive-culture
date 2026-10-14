import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Users,
  Sparkles,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { siteConfig } from "../data/siteConfig";
import heroImage from "../assets/images/hero_thrive_youth_1791935607522.jpg";
import thrive20Image from "../assets/images/thrive20_residential_camp_1791935607590.jpg";
import nslcImage from "../assets/images/students_leadership_conference_1791935607993.jpg";
import mentorshipImage from "../assets/images/mentorship_collaboration_1791935608626.jpg";

export default function HomePage() {
  return (
    <div className="bg-stone-50">
      {/* 1. HERO SECTION */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left: Punchy Headline & Immediate CTAs */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#D96D14]">
                <span>Youth Development</span>
                <span aria-hidden="true" className="text-stone-300">
                  ·
                </span>
                <span>Transformative Camps</span>
                <span aria-hidden="true" className="text-stone-300">
                  ·
                </span>
                <span>Lifelong Networks</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 text-balance leading-[1.12]">
                Helping Young People See Beyond What’s Possible.
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl text-balance">
                Thrive Culture connects young people with ideas, skills,
                mentors, and immersive residential camps that turn curiosity
                into real-world momentum.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/initiatives/thrive-20-camp"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-stone-950 hover:bg-[#F28524] rounded-md transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28524]"
                >
                  Explore Thrive 20 Camp
                  <ArrowRight className="w-4 h-4 text-[#F28524] group-hover:text-white" />
                </Link>
                <Link
                  to="/partner"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
                >
                  Partner With Us
                </Link>
              </div>

              {/* Key Highlights Strip */}
              <div className="pt-5 border-t border-stone-200 grid grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="block font-bold text-stone-950 text-sm">
                    Parent Body
                  </span>
                  <span className="text-stone-500">Long-term vision</span>
                </div>
                <div>
                  <span className="block font-bold text-stone-950 text-sm">
                    Thrive 20
                  </span>
                  <span className="text-stone-500">4-day flagship camp</span>
                </div>
                <div>
                  <span className="block font-bold text-stone-950 text-sm">
                    Intimate Cohorts
                  </span>
                  <span className="text-stone-500">25–30 participants</span>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 aspect-16/9 lg:aspect-4/3">
                <img
                  src={heroImage}
                  alt="Young people collaborating in a workshop"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3.5 left-4 right-4 text-white text-xs">
                  <p className="font-bold">Real Collaboration</p>
                  <p className="text-stone-300 text-xs">
                    Building agency, problem solving, and confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION TO THRIVE CULTURE (Concise & punchy) */}
      <section className="py-14 lg:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <SectionHeading
                kicker="Why We Exist"
                title="Proximity Alters Destiny."
                description="When young people only see what is in their immediate environment, their sense of what is possible remains limited. Thrive Culture changes that equation."
              />

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                We are an umbrella organisation that creates high-impact
                residential camps, student conferences, and direct connections
                to mentors. Our mission is simple: replace passive drift with
                purposeful direction.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-stone-950 hover:text-[#D96D14] transition-colors group"
                >
                  <span>Read our story & philosophy</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#F28524]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold text-stone-950">
                  Our Core Pillars
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F28524] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-stone-900">
                        Exposure First:{" "}
                      </span>
                      <span className="text-stone-600">
                        You can’t aspire to what you haven’t seen. We bring real
                        mentors into the room.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F28524] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-stone-900">
                        Practical Skills:{" "}
                      </span>
                      <span className="text-stone-600">
                        No generic hype. We focus on decision-making, financial
                        literacy, and communication.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F28524] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-stone-900">
                        Lifelong Peer Coalitions:{" "}
                      </span>
                      <span className="text-stone-600">
                        Bonds forged during our residential retreats last long
                        after camps wrap.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED INITIATIVES */}
      <section className="py-14 lg:py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeading
              kicker="Programmes"
              title="Featured Initiatives"
              description="Targeted programmes serving critical transitional moments in youth development."
            />
            <Link
              to="/initiatives"
              className="inline-flex items-center gap-1 text-sm font-bold text-stone-900 hover:text-[#D96D14] transition-colors whitespace-nowrap"
            >
              <span>View all programmes</span>
              <ArrowRight className="w-4 h-4 text-[#F28524]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Card 1: Thrive 20 Camp (Flagship) */}
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between group h-full hover:border-[#FED7B2] transition-colors">
              <div>
                <div className="relative aspect-16/9 overflow-hidden bg-stone-100">
                  <img
                    src={thrive20Image}
                    alt="Thrive 20 Camp residential workshop"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-stone-950/90 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                    Flagship Programme
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                    <span>4 Days / 3 Nights</span>
                    <span aria-hidden="true">·</span>
                    <span>Residential Retreat</span>
                    <span aria-hidden="true">·</span>
                    <span>25–30 Participants</span>
                  </div>

                  <h3 className="text-2xl font-bold text-stone-950">
                    Thrive 20 Camp
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed">
                    An intensive four-day residential retreat for young people
                    entering their twenties. Designed to build clarity,
                    practical life skills, meaningful networks, and a concrete
                    personal roadmap.
                  </p>
                </div>
              </div>

              {/* Card 1 Footer */}
              <div className="p-6 sm:p-7 pt-4 border-t border-stone-100 flex items-center justify-between gap-3 mt-auto">
                <span className="text-xs text-stone-500 font-medium truncate">
                  Pilot Applications Open
                </span>
                <Link
                  to="/initiatives/thrive-20-camp"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-stone-950 hover:bg-[#F28524] rounded-md transition-colors shrink-0"
                >
                  <span>Programme Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F28524]" />
                </Link>
              </div>
            </div>

            {/* Card 2: National Students Leadership Conference */}
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between group h-full hover:border-[#FED7B2] transition-colors">
              <div>
                <div className="relative aspect-16/9 overflow-hidden bg-stone-100">
                  <img
                    src={nslcImage}
                    alt="National Students Leadership Conference"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-stone-950/90 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                    National Initiative
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                    <span>National Summit</span>
                    <span aria-hidden="true">·</span>
                    <span>Multi-Day Gathering</span>
                    <span aria-hidden="true">·</span>
                    <span>Campus Delegates</span>
                  </div>

                  <h3 className="text-2xl font-bold text-stone-950">
                    National Students Leadership Conference
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed">
                    A nationwide gathering cultivating student leadership, civic
                    agency, and cross-campus collaboration among emerging campus
                    pioneers.
                  </p>
                </div>
              </div>

              {/* Card 2 Footer - Aligned with Card 1 */}
              <div className="p-6 sm:p-7 pt-4 border-t border-stone-100 flex items-center justify-between gap-3 mt-auto">
                <span className="text-xs text-stone-500 font-medium truncate">
                  Host Campuses Scoping
                </span>
                <Link
                  to="/initiatives#nslc"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-md transition-colors shrink-0"
                >
                  <span>Conference Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F28524]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PHILOSOPHY IN 5 CLEAN CARDS */}
      <section className="py-14 lg:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-7">
              <SectionHeading
                kicker="Methodology"
                title="How We Help Young People Grow"
                description="Five grounded principles that turn latent talent into self-directed achievement."
              />
            </div>
            <div className="lg:col-span-5 relative rounded-lg overflow-hidden border border-stone-200 aspect-16/9">
              <img
                src={mentorshipImage}
                alt="Mentorship in practice"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteConfig.philosophy.map((item) => (
              <div
                key={item.number}
                className="p-5 sm:p-6 rounded-lg border border-stone-200 bg-stone-50 hover:border-[#FED7B2] hover:bg-[#FFF5EC]/40 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-[#D96D14]">
                  {item.number}
                </span>
                <h3 className="text-base font-bold text-stone-950 mt-1.5 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IMPACT PREVIEW */}
      <section className="py-14 lg:py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Accountability"
            title="Measured by Real Outcomes"
            description="We focus on concrete transformation: actionable personal blueprints, peer circles that stick, and lifelong momentum."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <div className="p-5 bg-white rounded-lg border border-stone-200 space-y-2">
              <Compass className="w-5 h-5 text-[#F28524]" />
              <h3 className="font-bold text-stone-950 text-sm">
                Actionable Blueprints
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Every cohort participant crafts a concrete 1–3 year plan
                covering career, habits, and skills.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border border-stone-200 space-y-2">
              <Users className="w-5 h-5 text-[#F28524]" />
              <h3 className="font-bold text-stone-950 text-sm">
                Accountability Trios
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Small peer circles maintain quarterly check-ins on execution
                after the residential retreat.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border border-stone-200 space-y-2">
              <Sparkles className="w-5 h-5 text-[#F28524]" />
              <h3 className="font-bold text-stone-950 text-sm">
                Transparent Reporting
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Pilot cohort evaluation data and verified outcomes are
                documented openly.
              </p>
            </div>
          </div>

          <div>
            <Link
              to="/impact"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-950 hover:text-[#D96D14] transition-colors"
            >
              <span>Explore our impact framework</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F28524]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. PARTNERSHIP BANNER */}
      <section className="py-16 bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F28524]">
                Collaborate With Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance leading-tight">
                Help Us Expand Possibilities For The Next Generation.
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-lg">
                We partner with foundations, retreat centers, industry leaders,
                and universities to provide scholarships, venues, and
                mentorship.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/partner"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-stone-950 bg-[#F28524] hover:bg-[#DE7519] rounded-md transition-colors shadow-xs"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4 text-stone-950" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-stone-700 hover:bg-stone-800 rounded-md transition-colors"
                >
                  Direct Inquiry
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-900 border border-stone-800 p-6 rounded-xl space-y-3">
              <h3 className="text-sm font-bold text-stone-200">
                Partnership Pathways
              </h3>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F28524]" />
                  <span>
                    <strong>Funding:</strong> Underwrite participant camp
                    scholarships
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F28524]" />
                  <span>
                    <strong>Venues:</strong> Host residential retreats and
                    summits
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F28524]" />
                  <span>
                    <strong>Knowledge:</strong> Lead masterclasses as mentors
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F28524]" />
                  <span>
                    <strong>Opportunities:</strong> Offer internships &
                    shadowing
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
