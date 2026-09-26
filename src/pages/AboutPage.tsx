import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  Compass, 
  Heart, 
  Eye, 
  Target, 
  ShieldCheck, 
  Users, 
  CheckCircle2 
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { SITE_CONFIG } from '../data/siteConfig';

import mentorImage from '../assets/images/mentorship_network_1790379395979.jpg';
import ecosystemImage from '../assets/images/ecosystem_community_1790379405492.jpg';

export const AboutPage: React.FC = () => {
  const fiveQuestions = [
    {
      num: '01',
      question: 'Why does Mirroring Possibilities exist?',
      answer:
        'Because potential is universally distributed, but expansive exposure is not. Millions of young people navigate their critical transitions bounded entirely by the narrow horizons of their immediate geographical or socioeconomic surroundings. We exist to dissolve that artificial ceiling and show young people the full spectrum of what life can hold.',
    },
    {
      num: '02',
      question: 'What does "Mirroring Possibilities" mean?',
      answer:
        'Human aspirations are deeply mimetic: we emulate what we can see. "Mirroring" means actively placing credible, relatable exemplars in front of young people. When young people see someone from their walk of life operating with competence, dignity, and purpose, that exemplar becomes a psychological mirror reflecting their own latent capacity.',
    },
    {
      num: '03',
      question: 'Who does it serve?',
      answer:
        'Young people at crucial developmental inflection points, starting with young adults turning twenty. We intentionally seek individuals with raw curiosity and appetite for growth, irrespective of formal academic credentials, university status, or privilege.',
    },
    {
      num: '04',
      question: 'How does it create change?',
      answer:
        'By combining immersive residential sanctuaries with practical competencies (financial literacy, emotional fortitude, decision models), intergenerational mentorship, and peer accountability circles. We don’t just inspire; we equip participants with a rigorous personal life blueprint.',
    },
    {
      num: '05',
      question: 'What future is it trying to help build?',
      answer:
        'A world where no young person’s life trajectory is predetermined by zip code, background, or lack of exposure. A generation of grounded, self-authoring leaders who possess the self-awareness, skills, and networks to build flourishing lives and uplift their communities.',
    },
  ];

  const values = [
    {
      title: 'Intentional Exposure',
      description: 'You cannot aim for what you cannot see. We prioritize active, tactile exposure to diverse life pathways, ideas, and mentors.',
    },
    {
      title: 'Rigour Over Rhetoric',
      description: 'Inspiration without actionable methodology is fleeting. We teach concrete decision tools, financial literacy, and disciplined life frameworks.',
    },
    {
      title: 'Human Dignity & Safety',
      description: 'Transformation requires vulnerability. We create environments characterized by deep psychological safety, mutual respect, and authentic listening.',
    },
    {
      title: 'Intergenerational Continuity',
      description: 'Wisdom compounds when shared. We bridge the gap between seasoned builders and emerging young adults through candid, continuous dialogue.',
    },
    {
      title: 'Self-Authored Agency',
      description: 'We do not impose prescribed dogmas. We equip every young person with the discernment to author their own definition of a purposeful life.',
    },
    {
      title: 'Ecosystem Scalability',
      description: 'We build institutional architecture that outlasts single programmes, creating a multi-decade foundation for future youth initiatives.',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pt-8 sm:pt-14">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400]">
              About the Organisation
            </span>
            <span className="text-stone-300">·</span>
            <span className="text-xs text-stone-500">Mirroring Possibilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#121316] leading-[1.1] text-balance">
            Building the architecture of possibility for the generation ahead.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
            Mirroring Possibilities is an umbrella organisation founded on a single conviction: when you expand what a young person can perceive, you forever alter what they are capable of achieving.
          </p>
        </div>
      </section>

      {/* 2. THE 5 STRATEGIC QUESTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF3E8]/90 border border-[#E8DEC9] rounded-2xl p-8 sm:p-12 lg:p-16">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400] block mb-2">
              Strategic Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#121316]">
              Five Questions That Define Us
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              The fundamental inquiry guiding every initiative, cohort, and partnership we forge.
            </p>
          </div>

          <div className="space-y-8 divide-y divide-[#E2D5BE]">
            {fiveQuestions.map((item) => (
              <div key={item.num} className="pt-8 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                <div className="md:col-span-4 flex items-center md:items-start gap-3">
                  <span className="text-xs font-mono font-bold text-[#D35400] bg-white/80 px-2 py-1 rounded border border-[#E0D2B8]">
                    {item.num}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-stone-900 leading-snug">
                    {item.question}
                  </h3>
                </div>
                <div className="md:col-span-8 text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-10 bg-white border border-stone-200/90 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#D35400] mb-4">
                <Eye className="w-4 h-4" />
                <span>Our Vision</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#121316] mb-4 leading-snug">
                An unconstrained horizon for every young mind.
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                {SITE_CONFIG.vision}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 text-xs text-stone-400 font-mono">
              The Long-Range Horizon
            </div>
          </div>

          <div className="p-8 sm:p-10 bg-white border border-stone-200/90 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#D35400] mb-4">
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#121316] mb-4 leading-snug">
                Connecting youth to the people and tools that reshape life.
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                {SITE_CONFIG.mission}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 text-xs text-stone-400 font-mono">
              The Daily Mandate
            </div>
          </div>

        </div>
      </section>

      {/* 4. OUR PHILOSOPHY & VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Principles & Ethos"
          title="The Values That Guide Our Hands"
          description="We operate with rigorous intentionality. These core values govern curriculum selection, mentor onboarding, partner alignment, and camp facilitation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="p-6 bg-white border border-stone-200/90 rounded-xl hover:border-stone-400 transition-colors"
            >
              <h4 className="font-serif text-xl text-stone-900 mb-2">
                {v.title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. VISUAL STORY BREAK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200">
            <img
              src={mentorImage}
              alt="Mentorship session at Mirroring Possibilities"
              className="w-full h-[380px] sm:h-[440px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400]">
              The Relational Fabric
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-[#121316] leading-tight">
              Human connection as the catalyst for life design.
            </h3>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              We do not treat young adults as empty vessels to be lectured. We design intimate circles where seasoned founders, artisans, engineers, and community elders sit at eye level, sharing not only their accomplishments, but the real costs, pivots, and quiet discipline of their journeys.
            </p>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              In doing so, the abstract concept of a purposeful career becomes a tangible, achievable blueprint.
            </p>
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP & ADVISORY COUNCIL PLACEHOLDERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Governance & Stewardship"
          title="Team & Steering Council"
          description="Guided by a collective of educators, youth development practitioners, and strategic advisors committed to ethical stewardship."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center font-serif text-lg font-bold mb-4">
              MP
            </div>
            <h4 className="font-serif text-xl text-stone-900 mb-1">
              Founding Leadership Circle
            </h4>
            <span className="text-xs font-mono text-[#D35400] block mb-3">
              [Appointments & biographies to be updated]
            </span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Stewarding overall organisation strategy, capital allocation, and expansion across regional cohorts.
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center font-serif text-lg font-bold mb-4">
              ED
            </div>
            <h4 className="font-serif text-xl text-stone-900 mb-1">
              Curriculum & Developmental Advisory
            </h4>
            <span className="text-xs font-mono text-[#D35400] block mb-3">
              [Advisory council to be announced]
            </span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Guiding educational design, cognitive growth assessments, and psychometric evaluation rigor.
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center font-serif text-lg font-bold mb-4">
              PN
            </div>
            <h4 className="font-serif text-xl text-stone-900 mb-1">
              Possibility Network Faculty
            </h4>
            <span className="text-xs font-mono text-[#D35400] block mb-3">
              [Mentor roster under active recruitment]
            </span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Distinguished cross-sector mentors providing real-world guidance during camps and ongoing circles.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-stone-500">
            Note: In adherence to our strict transparency principles, individual governance profiles will be formally published alongside our initial cohort rollout.
          </p>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection
          kicker="Flagship Initiative"
          title="Discover the Plan Twenty Residential Experience"
          description="Learn how Thrive 20 Camp brings our mission to life through an intensive 4-day retreat for young adults turning twenty."
          primaryAction={{
            label: 'Explore Thrive 20 Camp',
            path: '/plan-twenty'
          }}
          secondaryAction={{
            label: 'Partner With Us',
            path: '/partner'
          }}
        />
      </section>

    </div>
  );
};
