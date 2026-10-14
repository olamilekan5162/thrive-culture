import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import PageHero from '../components/PageHero';
import { siteConfig } from '../data/siteConfig';

export default function StoriesPage() {
  const [selectedStory, setSelectedStory] = useState(siteConfig.stories[0]);
  const stories = siteConfig.stories;

  return (
    <div className="bg-stone-50">
      
      {/* 1. PAGE HERO */}
      <PageHero
        kicker="Journal & Perspectives"
        title="Field Notes on Youth Potential"
        description="Essays, programme design insights, and reflections on exposure and human agency."
        breadcrumbs={[{ label: 'Stories & Journal' }]}
      />

      {/* 2. ARTICLE READER */}
      <section className="py-14 lg:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Article Body */}
            <div className="lg:col-span-8 space-y-6">
              {selectedStory && (
                <article className="space-y-4">
                  
                  {/* Clean unboxed text metadata */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                    <span className="text-[#D96D14] font-bold">{selectedStory.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedStory.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedStory.readTime}</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 text-balance leading-tight">
                    {selectedStory.title}
                  </h1>

                  <p className="text-base text-stone-600 font-medium leading-relaxed border-l-2 border-[#F28524] pl-3.5 my-3 italic">
                    {selectedStory.summary}
                  </p>

                  <div className="space-y-3.5 text-stone-700 text-sm sm:text-base leading-relaxed pt-1">
                    {selectedStory.body.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-stone-200 text-xs text-stone-500">
                    Published by Thrive Culture Editorial.
                  </div>

                </article>
              )}
            </div>

            {/* Right: Archive list */}
            <div className="lg:col-span-4 space-y-5">
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#F28524]" />
                  <span>Articles & Dispatches</span>
                </h3>

                <div className="space-y-2">
                  {stories.map((story) => {
                    const isCurrent = selectedStory.id === story.id;
                    return (
                      <button
                        key={story.id}
                        type="button"
                        onClick={() => setSelectedStory(story)}
                        className={`w-full text-left p-3.5 rounded-lg transition-all border ${
                          isCurrent
                            ? 'bg-white border-[#FED7B2] shadow-xs'
                            : 'bg-transparent border-transparent hover:bg-stone-100 hover:border-stone-200'
                        }`}
                      >
                        <div className="text-xs text-[#D96D14] font-bold mb-0.5">
                          {story.category} · {story.date}
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-stone-950 leading-snug">
                          {story.title}
                        </h4>
                        <p className="text-xs text-stone-500 mt-0.5 line-clamp-2">
                          {story.summary}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Newsletter Callout */}
              <div className="p-5 bg-stone-100 border border-stone-200 rounded-xl space-y-2">
                <h4 className="font-bold text-stone-950 text-xs sm:text-sm">
                  Future Editorial Releases
                </h4>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Want to be notified when new essays or cohort briefs drop?
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-stone-900 hover:text-[#D96D14] transition-colors"
                >
                  <span>Connect with our desk</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F28524]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
