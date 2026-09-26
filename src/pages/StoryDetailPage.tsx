import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import { STORIES } from '../data/siteConfig';

export const StoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const story = STORIES.find((s) => s.id === id) || STORIES[0];

  return (
    <div className="pt-8 sm:pt-14 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/stories"
          className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 hover:text-[#D35400] transition-colors mb-8 uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Journal Index</span>
        </Link>

        {/* Metadata Kicker */}
        <div className="flex items-center gap-3 text-xs text-stone-500 font-mono mb-4">
          <span className="text-[#D35400] font-semibold uppercase">{story.category}</span>
          <span>·</span>
          <span>{story.date}</span>
          <span>·</span>
          <span>{story.readTime}</span>
        </div>

        {/* Main Article Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#121316] leading-[1.12] mb-6 text-balance">
          {story.title}
        </h1>

        {/* Author Byline */}
        <div className="py-4 border-y border-stone-200/80 mb-10 flex items-center justify-between text-xs text-stone-600">
          <div>
            <span className="font-semibold text-stone-900">{story.author}</span>
            <span className="text-stone-400 mx-2">·</span>
            <span className="text-stone-500">{story.role}</span>
          </div>
          <span className="text-stone-400">Mirroring Possibilities Journal</span>
        </div>

        {/* Pull Quote */}
        {story.quote && (
          <div className="my-8 p-6 sm:p-8 bg-[#FAF3E8] border-l-4 border-[#D35400] rounded-r-xl">
            <p className="font-serif italic text-xl sm:text-2xl text-stone-900 leading-snug">
              "{story.quote}"
            </p>
          </div>
        )}

        {/* Article Body Content */}
        <div className="space-y-6 text-base sm:text-lg text-stone-800 leading-relaxed font-sans font-light">
          {story.content.map((paragraph, idx) => (
            <p key={idx} className={idx === 0 ? 'first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#D35400] first-letter:font-normal' : ''}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Post Bottom Signoff */}
        <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            <span className="font-semibold text-stone-900">About this entry:</span> Written for the Mirroring Possibilities public record.
          </div>
          <Link
            to="/apply"
            className="text-[#D35400] font-semibold hover:underline"
          >
            Apply for Thrive 20 Cohort →
          </Link>
        </div>

      </div>
    </div>
  );
};
