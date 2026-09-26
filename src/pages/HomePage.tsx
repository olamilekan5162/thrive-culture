import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  Compass, 
  Users, 
  Flame, 
  HandHeart, 
  GraduationCap, 
  Briefcase, 
  Layers, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { InitiativeCard } from '../components/InitiativeCard';
import { CTASection } from '../components/CTASection';
import { SITE_CONFIG, INITIATIVES } from '../data/siteConfig';

// Import generated imagery assets
import heroImage from '../assets/images/hero_youth_possibility_1790379376784.jpg';
import campImage from '../assets/images/thrive_camp_experience_1790379386709.jpg';
import mentorImage from '../assets/images/mentorship_network_1790379395979.jpg';
import ecosystemImage from '../assets/images/ecosystem_community_1790379405492.jpg';

export const HomePage: React.FC = () => {
  const thrive20 = INITIATIVES.find((i) => i.id === 'thrive-20')!;

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* 1. HERO SECTION */}
      <section className="pt-8 sm:pt-14 lg:pt-18 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Identity Kicker */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[#D35400] bg-orange-100/60 px-3 py-1 rounded-sm border border-orange-200/50">
              The Umbrella Organisation
            </span>
            <span className="text-stone-400 text-xs hidden sm:inline">·</span>
            <span className="text-xs text-stone-500 hidden sm:inline">
              Expanding human imagination for the generation ahead
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#121316] tracking-tight leading-[1.08] text-balance">
                You cannot build a future you have never had the chance to see.
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl font-sans">
                <strong>Mirroring Possibilities</strong> is an organisation dedicated to expanding the horizon of young people. We dismantle the invisible ceilings of circumstance by connecting youth directly to exemplary mentors, rigorous life frameworks, and transformative residential immersions.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/initiatives"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#121316] text-white hover:bg-[#D35400] transition-colors shadow-sm"
                >
                  <span>Explore Initiatives</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/partner"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs sm:text-sm font-semibold bg-white text-stone-800 border border-stone-300 hover:border-stone-900 transition-colors"
                >
                  <span>Partner With Us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Subdued Context Strip */}
              <div className="pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-stone-600">
                <div>
                  <span className="block font-semibold text-stone-900">Current Flagship</span>
                  <span>Thrive 20 Camp</span>
                </div>
                <div>
                  <span className="block font-semibold text-stone-900">Target Cohort</span>
                  <span>Age 20 Watershed</span>
                </div>
                <div>
                  <span className="block font-semibold text-stone-900">Network Reach</span>
                  <span>Mentors & Partners</span>
                </div>
              </div>
            </div>

            {/* Right Editorial Visual Area */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-100 group">
                <img
                  src={heroImage}
                  alt="Young people collaborating and exploring possibilities in an inspiring space"
                  className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#D35400]" />
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-300">
                      The Philosophy of "Mirroring"
                    </span>
                  </div>
                  <p className="text-sm font-serif italic text-stone-200 leading-snug">
                    "When a young person meets someone who shares their background and has charted an expansive path, what once felt impossible becomes tangible."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE WHY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF3E8]/80 border border-[#E9DEC9] rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400] mb-2 block">
                The Why
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#121316] leading-tight mb-4">
                The limitation is rarely intelligence or effort. It is exposure.
              </h2>
              <p className="text-xs text-stone-500 font-mono uppercase tracking-wider">
                Our Foundational Conviction
              </p>
            </div>

            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-semibold first-letter:float-left first-letter:mr-2.5 first-letter:text-[#D35400]">
                Every year, millions of young people cross the threshold into adulthood with immense raw potential, but within heavily bounded horizons. If the only visible pathways around you are scarce, your mental map of what life can be remains artificially small.
              </p>
              <p>
                Mirroring Possibilities was established to fundamentally solve this boundary. We believe that by deliberately introducing young people to diverse practitioners, strategic life frameworks, and peer communities, we can expand their sense of agency.
              </p>
              <p>
                We do not dispense generic motivational rhetoric. We build rigorous, high-contact containers where self-awareness turns into structured direction.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D35400] hover:text-stone-900 transition-colors uppercase tracking-wider"
                >
                  <span>Read our full organizational story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO — THE ARCHITECTURAL APPROACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Our Method"
          title="How Mirroring Possibilities Operates"
          description="We translate our broader mission into distinct, targeted vehicles that cultivate agency, competence, and exposure for young people."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-stone-200/90 rounded-xl hover:border-stone-400 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center text-[#D35400] mb-6">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900 mb-3">
                Immersive Sanctuary Camps
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Disconnecting from digital friction and routine pressure. Four-day residential environments engineered for deep self-reflection, life architecture, and peer bonding.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 text-xs text-stone-500 font-medium">
              Flagship: Thrive 20 Camp
            </div>
          </div>

          <div className="p-8 bg-white border border-stone-200/90 rounded-xl hover:border-stone-400 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center text-[#D35400] mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900 mb-3">
                Intergenerational Mentorship
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Active human mirrors. Accomplished professionals, founders, and community builders who share real tradecraft, honest failures, and strategic guidance.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 text-xs text-stone-500 font-medium">
              Network: Possibility Network
            </div>
          </div>

          <div className="p-8 bg-white border border-stone-200/90 rounded-xl hover:border-stone-400 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center text-[#D35400] mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900 mb-3">
                Pragmatic Life Blueprints
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Equipping young adults with real-world competencies: financial literacy, emotional resilience, decision-making frameworks, and 3-year execution roadmaps.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 text-xs text-stone-500 font-medium">
              Output: Actionable Life Plan
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED INITIATIVE — THRIVE 20 CAMP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-b border-stone-300/80 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-widest font-bold text-[#D35400]">
                  Featured Flagship Initiative
                </span>
                <span className="text-stone-300">/</span>
                <span className="text-xs text-stone-500">Plan Twenty</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#121316]">
                Thrive 20 Camp
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 max-w-md">
              A four-day residential sanctuary tailored specifically for young people turning twenty. Turning intent into an executable life plan.
            </p>
          </div>

          {/* Featured Initiative Big Showcase Card */}
          <div className="bg-[#121316] text-white rounded-2xl overflow-hidden border border-stone-800 grid grid-cols-1 lg:grid-cols-12 shadow-xl">
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D35400] bg-orange-950/90 border border-orange-800/80 px-2 py-0.5 rounded">
                    Applications Open
                  </span>
                  <span className="text-xs text-stone-400">
                    Pilot Cohort: 25–30 Selected Participants
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-white mb-4">
                  The Four-Day Residential Experience For Entering Your Twenties
                </h3>

                <p className="text-sm text-stone-300 leading-relaxed mb-6">
                  {thrive20.purpose}
                </p>

                <div className="space-y-2.5 text-xs text-stone-300 border-l border-stone-800 pl-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D35400]" />
                    <span><strong>Eligibility:</strong> Must turn 20 within the camp year</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D35400]" />
                    <span><strong>Format:</strong> 4-day full residential immersion + ongoing circles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D35400]" />
                    <span><strong>Curriculum:</strong> 5 Core Pillars of youth life architecture</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/plan-twenty"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#121316] hover:bg-[#D35400] hover:text-white transition-colors rounded-lg text-xs font-semibold"
                >
                  <span>Explore Thrive 20 Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/apply"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-stone-200 border border-stone-700 hover:border-stone-500 rounded-lg text-xs font-medium"
                >
                  <span>Apply for Cohort</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D35400]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[440px]">
              <img
                src={campImage}
                alt="Thrive 20 camp residential immersion circle"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
            </div>
          </div>

          {/* Scalable Multi-Initiative Callout */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-stone-100 rounded-lg text-xs text-stone-600">
            <div>
              <span className="font-semibold text-stone-900">Looking ahead:</span> Mirroring Possibilities is architected to launch additional community labs, fellowships, and youth campaigns.
            </div>
            <Link to="/initiatives" className="text-[#D35400] font-semibold hover:underline flex items-center gap-1 shrink-0">
              <span>View All Pipeline Initiatives</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. OUR ECOSYSTEM — DISTINCTIVE VISUAL REPRESENTATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Interconnected Community"
          title="The Possibility Ecosystem"
          description="True transformation does not occur in a silo. We weave a living network where young people, facilitators, mentors, and partner organisations continuously reinforce one another."
        />

        {/* Editorial Connected Block Ecosystem Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Central Hub Card */}
          <div className="lg:col-span-4 bg-stone-900 text-white p-8 rounded-xl flex flex-col justify-between border border-stone-800 shadow-md">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#D35400] font-bold">
                The Core Centre
              </span>
              <h3 className="text-2xl font-serif mt-1 mb-4 text-white">
                Young People Turning 20
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                At the heart of everything sits the ambitious 20-year-old at their defining life crossroad. Every initiative is designed to anchor their agency, clarify their path, and expand their vision.
              </p>
              <div className="p-3 bg-stone-800/80 rounded-md border border-stone-700/60 text-[11px] text-stone-300">
                Self-discovery · Real-world skills · Ethical grounding · Life blueprint
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <span>Primary Beneficiaries</span>
              <Link to="/apply" className="text-white hover:text-[#D35400] flex items-center gap-1">
                <span>Join Cohort</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Orbiting Ecosystem Nodes Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-6 bg-white border border-stone-200/90 rounded-xl hover:border-stone-400 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-1.5">
                  <Flame className="w-4 h-4 text-[#D35400]" />
                  <span>Flagship Programmes</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Carefully engineered sanctuaries like Thrive 20 where young adults immerse in intensive reflection, skill sessions, and personal development.
                </p>
              </div>
              <span className="mt-4 text-[10px] text-stone-500 uppercase tracking-wider font-mono">
                Initiative Vehicle
              </span>
            </div>

            <div className="p-6 bg-white border border-stone-200/90 rounded-xl hover:border-stone-400 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-1.5">
                  <Users className="w-4 h-4 text-[#D35400]" />
                  <span>Mentors & Exemplars</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Established leaders, builders, and artisans who provide real-world perspectives, unpack vocational realities, and offer sustained guidance.
                </p>
              </div>
              <span className="mt-4 text-[10px] text-stone-500 uppercase tracking-wider font-mono">
                Relational Mirrors
              </span>
            </div>

            <div className="p-6 bg-white border border-stone-200/90 rounded-xl hover:border-stone-400 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-1.5">
                  <Briefcase className="w-4 h-4 text-[#D35400]" />
                  <span>Institutional Partners</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Foundations, venue hosts, knowledge curators, and companies opening internship pathways, sponsorships, and real organizational opportunities.
                </p>
              </div>
              <span className="mt-4 text-[10px] text-stone-500 uppercase tracking-wider font-mono">
                Structural Backing
              </span>
            </div>

            <div className="p-6 bg-white border border-stone-200/90 rounded-xl hover:border-stone-400 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-1.5">
                  <GraduationCap className="w-4 h-4 text-[#D35400]" />
                  <span>Alumni Community & Projects</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Cohort graduates who stay connected through peer accountability circles, social-impact projects, and returning as junior facilitators.
                </p>
              </div>
              <span className="mt-4 text-[10px] text-stone-500 uppercase tracking-wider font-mono">
                Compounding Multiplier
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 6. IMPACT FRAMEWORK — NO FABRICATED NUMBERS, TASTEFUL PLACEHOLDERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Evidence & Accountability"
          title="How We Measure Real Growth"
          description="We are committed to transparent, longitudinal measurement as our cohorts roll out. Below is the framework of indicators we track across every participant journey."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-stone-200 rounded-xl">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#D35400] block mb-1">
              Indicator 01
            </span>
            <h4 className="font-serif text-lg text-stone-900 mb-2">
              Participants Reached
            </h4>
            <div className="py-2 px-3 bg-stone-50 border border-dashed border-stone-300 rounded mb-2 text-xs font-mono text-stone-700">
              [Target: 25–30 Pilot Scholars]
            </div>
            <p className="text-xs text-stone-600">
              Subsidized, intensive residential cohort participation across rigorous demographic representation.
            </p>
          </div>

          <div className="p-6 bg-white border border-stone-200 rounded-xl">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#D35400] block mb-1">
              Indicator 02
            </span>
            <h4 className="font-serif text-lg text-stone-900 mb-2">
              Baseline-to-Post Growth
            </h4>
            <div className="py-2 px-3 bg-stone-50 border border-dashed border-stone-300 rounded mb-2 text-xs font-mono text-stone-700">
              [Evaluation metrics in progress]
            </div>
            <p className="text-xs text-stone-600">
              Measuring shift in self-efficacy, financial agency, and strategic life clarity via validated psychometric surveys.
            </p>
          </div>

          <div className="p-6 bg-white border border-stone-200 rounded-xl">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#D35400] block mb-1">
              Indicator 03
            </span>
            <h4 className="font-serif text-lg text-stone-900 mb-2">
              Mentors & Speakers Active
            </h4>
            <div className="py-2 px-3 bg-stone-50 border border-dashed border-stone-300 rounded mb-2 text-xs font-mono text-stone-700">
              [Cohort recruitment active]
            </div>
            <p className="text-xs text-stone-600">
              Experienced practitioners committed to firesides, advisory pods, and multi-year guidance.
            </p>
          </div>

          <div className="p-6 bg-white border border-stone-200 rounded-xl">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#D35400] block mb-1">
              Indicator 04
            </span>
            <h4 className="font-serif text-lg text-stone-900 mb-2">
              Action Plans Executed
            </h4>
            <div className="py-2 px-3 bg-stone-50 border border-dashed border-stone-300 rounded mb-2 text-xs font-mono text-stone-700">
              [Post-camp milestone tracking]
            </div>
            <p className="text-xs text-stone-600">
              Concrete 1-year and 3-year personal roadmaps tracked via quarterly peer circles.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/impact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D35400] hover:text-stone-900 transition-colors uppercase tracking-wider"
          >
            <span>Learn about our full evaluation framework</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 7. GET INVOLVED — PARTICIPATION PATHWAYS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Participation"
          title="Multiple Ways to Engage"
          description="Whether you are a young person ready to design your twenties, an experienced leader eager to mentor, or an organisation with resources to share, there is a place for you in this mission."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <Link
            to="/apply"
            className="group p-6 bg-white border border-stone-200/90 rounded-xl hover:border-[#D35400] transition-colors flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-[#D35400] uppercase tracking-wider block mb-2">
                Pathway 01
              </span>
              <h3 className="font-serif text-xl text-stone-900 group-hover:text-[#D35400] transition-colors mb-2">
                Apply
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                For young people turning 20 ready to undergo an intensive life-design residential retreat.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-stone-900 group-hover:text-[#D35400]">
              <span>Application Portal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            to="/possibility-network#mentors"
            className="group p-6 bg-white border border-stone-200/90 rounded-xl hover:border-[#D35400] transition-colors flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-[#D35400] uppercase tracking-wider block mb-2">
                Pathway 02
              </span>
              <h3 className="font-serif text-xl text-stone-900 group-hover:text-[#D35400] transition-colors mb-2">
                Mentor
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Share real tradecraft, honest challenges, and wisdom with the next generation of builders.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-stone-900 group-hover:text-[#D35400]">
              <span>Join Mentorship</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            to="/possibility-network#speakers"
            className="group p-6 bg-white border border-stone-200/90 rounded-xl hover:border-[#D35400] transition-colors flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-[#D35400] uppercase tracking-wider block mb-2">
                Pathway 03
              </span>
              <h3 className="font-serif text-xl text-stone-900 group-hover:text-[#D35400] transition-colors mb-2">
                Speak
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Deliver focused masterclasses on finance, ethics, career navigation, or creative craft.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-stone-900 group-hover:text-[#D35400]">
              <span>Guest Masterclass</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            to="/partner"
            className="group p-6 bg-white border border-stone-200/90 rounded-xl hover:border-[#D35400] transition-colors flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-[#D35400] uppercase tracking-wider block mb-2">
                Pathway 04
              </span>
              <h3 className="font-serif text-xl text-stone-900 group-hover:text-[#D35400] transition-colors mb-2">
                Partner
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Provide venue spaces, scholarships, internships, curriculum expertise, or media reach.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-stone-900 group-hover:text-[#D35400]">
              <span>Partner Options</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            to="/contact?type=volunteer"
            className="group p-6 bg-white border border-stone-200/90 rounded-xl hover:border-[#D35400] transition-colors flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-[#D35400] uppercase tracking-wider block mb-2">
                Pathway 05
              </span>
              <h3 className="font-serif text-xl text-stone-900 group-hover:text-[#D35400] transition-colors mb-2">
                Volunteer
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Help coordinate residential logistics, facilitate small reflection pods, or assist event days.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-stone-900 group-hover:text-[#D35400]">
              <span>Volunteer Circle</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </section>

      {/* 8. EDITORIAL PULL QUOTE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="py-12 border-y border-stone-300/80">
          <p className="font-serif italic text-2xl sm:text-3xl text-stone-900 leading-snug">
            "Build the website for the organisation it is becoming, not only the programme it is launching."
          </p>
          <span className="block mt-4 text-xs font-mono tracking-wider uppercase text-stone-500">
            — Strategic Framework Principle, Mirroring Possibilities
          </span>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection
          kicker="Join the Movement"
          title="Help Us Expand What Young People Believe is Possible"
          description="Whether you are an ambitious 20-year-old seeking direction or a partner ready to back the next generation with scholarships or space, we welcome you."
          primaryAction={{
            label: 'Apply for Thrive 20',
            path: '/apply'
          }}
          secondaryAction={{
            label: 'Explore Partnerships',
            path: '/partner'
          }}
        />
      </section>

    </div>
  );
};
