import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Target, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import PlaceholderNotice from '../components/PlaceholderNotice';
import { siteConfig } from '../data/siteConfig';

export default function AboutPage() {
  const mentorshipImage = "/src/assets/images/mentorship_collaboration_1791935608626.jpg";
  const youthImage = "/src/assets/images/hero_thrive_youth_1791935607522.jpg";

  return (
    <div className="bg-stone-50">
      
      {/* 1. PAGE HERO */}
      <PageHero
        kicker="About Thrive Culture"
        title="We Exist to Expand What Young People Deem Possible."
        description="Thrive Culture connects emerging generations with transformative exposure, practical skills, and lifelong networks."
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* 2. THE STORY (Simple, human, crisp) */}
      <section className="py-14 lg:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <SectionHeading
                kicker="Our Story"
                title="The Power of Being in the Room"
                description="Most young people grow up bounded by what they see around them. If no one in your circle has built a business, led an institution, or explored creative fields, those paths feel unreachable."
              />

              <div className="space-y-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Thrive Culture was founded to change this. We believe intentional exposure is the ultimate equalizer. By bringing young minds into direct contact with visionary practitioners and immersive camps, we replace self-doubt with clear ambition.
                </p>
                <p>
                  We are not a one-time workshop. We are building an enduring ecosystem of residential camps, student conferences, and partner pathways that support young leaders over the long run.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 aspect-4/3">
                <img
                  src={mentorshipImage}
                  alt="Mentors collaborating with young adults"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION (Punchy cards) */}
      <section className="py-14 lg:py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            kicker="North Stars"
            title="Vision & Mission"
            description="The governing purpose behind everything Thrive Culture creates."
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Vision */}
            <div className="bg-white p-7 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D96D14] mb-2">
                  <Compass className="w-4 h-4 text-[#F28524]" />
                  <span>Our Vision</span>
                </div>
                <h3 className="text-xl font-bold text-stone-950 mb-2">
                  Unbounded Youth Potential
                </h3>
                <p className="text-stone-700 text-base leading-relaxed font-medium">
                  "{siteConfig.statements.vision.placeholderText}"
                </p>
              </div>

              <PlaceholderNotice
                label="Vision Statement"
                message={siteConfig.statements.vision.note}
              />
            </div>

            {/* Mission */}
            <div className="bg-white p-7 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D96D14] mb-2">
                  <Target className="w-4 h-4 text-[#F28524]" />
                  <span>Our Mission</span>
                </div>
                <h3 className="text-xl font-bold text-stone-950 mb-2">
                  Connecting Curiosity With Opportunity
                </h3>
                <p className="text-stone-700 text-base leading-relaxed font-medium">
                  "{siteConfig.statements.mission.placeholderText}"
                </p>
              </div>

              <PlaceholderNotice
                label="Mission Statement"
                message={siteConfig.statements.mission.note}
              />
            </div>

          </div>

        </div>
      </section>

      {/* 4. MEANING BEHIND THE NAME */}
      <section className="py-14 lg:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <SectionHeading
              kicker="Brand Meaning"
              title="What 'Thrive Culture' Means"
              description="A deliberate union of personal agency and shared community standards."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-6 bg-stone-50 border border-stone-200 rounded-lg space-y-2">
                <span className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider">
                  Thrive
                </span>
                <h4 className="text-base font-bold text-stone-950">
                  Beyond Survival
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Moving beyond merely coping to building deep competence, financial agency, and purposeful work.
                </p>
              </div>

              <div className="p-6 bg-[#FFF5EC] border border-[#FED7B2] rounded-lg space-y-2">
                <span className="text-xs font-mono font-bold text-[#D96D14] uppercase tracking-wider">
                  Culture
                </span>
                <h4 className="text-base font-bold text-stone-950">
                  Shared Standards
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Willpower is fragile; culture lasts. When high standards are the group norm, growth becomes natural.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES (Concise & crisp) */}
      <section className="py-14 lg:py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Ethics"
            title="Core Values"
            description="The principles guiding how we design programmes, treat participants, and steward resources."
            className="mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {siteConfig.coreValues.map((value, idx) => (
              <div
                key={idx}
                className="p-5 bg-white border border-stone-200 rounded-lg space-y-1.5 shadow-xs"
              >
                <h4 className="text-sm font-bold text-stone-950">
                  {value.title}
                </h4>
                <p className="text-stone-600 text-xs leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TEAM PLACEHOLDER */}
      <section className="py-14 lg:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Stewardship"
            title="Leadership & Advisory"
            description="Guided by educators, founders, and youth development advocates committed to long-term impact."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.team.map((member, idx) => (
              <div
                key={idx}
                className="bg-stone-50 rounded-xl border border-stone-200 p-6 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-lg bg-stone-950 text-white flex items-center justify-center font-bold text-sm">
                    TC
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#D96D14] uppercase tracking-wider block">
                      {member.role}
                    </span>
                    <h4 className="text-base font-bold text-stone-950 mt-0.5">
                      {member.name}
                    </h4>
                    <p className="text-xs text-stone-500">{member.title}</p>
                  </div>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <PlaceholderNotice
              label="Leadership Announcement"
              message="Official executive profiles and photographs will be updated upon formal public announcement."
            />
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-14 bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Join the Movement.
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed">
            Explore our flagship Thrive 20 Camp or partner with us to sponsor future cohorts.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/initiatives/thrive-20-camp"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-950 bg-[#F28524] hover:bg-[#DE7519] rounded-md transition-colors"
            >
              Explore Thrive 20
              <ArrowRight className="w-3.5 h-3.5 text-stone-950" />
            </Link>
            <Link
              to="/partner"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white border border-stone-700 hover:bg-stone-800 rounded-md transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
