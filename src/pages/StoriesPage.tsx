import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Clock, Tag } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { STORIES, type Story } from "../data/siteConfig";

export const StoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Stories",
    "Reflections",
    "Programme Updates",
    "Participant Voices",
    "Thought Leadership",
  ];

  const filteredStories =
    selectedCategory === "All"
      ? STORIES
      : STORIES.filter((s) => s.category === selectedCategory);

  return (
    <div className="space-y-24 sm:space-y-32 pt-8 sm:pt-14">
      {/* 1. EDITORIAL HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400]">
              The Journal
            </span>
            <span className="text-stone-300">·</span>
            <span className="text-xs text-stone-500 font-mono">
              Dispatches & Perspectives
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#121316] leading-[1.08] text-balance">
            Stories, field reflections, and ideas on youth development.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
            A public journal documenting the philosophy of Mirroring
            Possibilities, curriculum explorations, and reflections on
            navigating the defining threshold of turning twenty.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS & STORY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-stone-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedCategory === cat
                  ? "bg-[#121316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <article
              key={story.id}
              className="p-8 bg-white border border-stone-200/90 rounded-2xl hover:border-stone-400 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 font-mono mb-4">
                  <span className="text-[#D35400] font-semibold uppercase tracking-wider">
                    {story.category}
                  </span>
                  <span>{story.readTime}</span>
                </div>

                <Link to={`/stories/${story.id}`}>
                  <h3 className="font-serif text-2xl text-stone-900 group-hover:text-[#D35400] transition-colors mb-3 leading-snug">
                    {story.title}
                  </h3>
                </Link>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {story.excerpt}
                </p>

                {story.quote && (
                  <blockquote className="p-3 bg-stone-50 border-l-2 border-[#D35400] text-xs font-serif italic text-stone-700 mb-6">
                    "{story.quote}"
                  </blockquote>
                )}
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-stone-900 block">
                    {story.author}
                  </span>
                  <span className="text-[11px] text-stone-500">
                    {story.role}
                  </span>
                </div>
                <Link
                  to={`/stories/${story.id}`}
                  className="inline-flex items-center gap-1 font-semibold text-[#D35400] hover:underline"
                >
                  <span>Read</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="p-12 text-center bg-stone-100 rounded-xl text-stone-500 text-sm">
            No articles published under this category yet. Check back following
            our inaugural cohort.
          </div>
        )}
      </section>
    </div>
  );
};
