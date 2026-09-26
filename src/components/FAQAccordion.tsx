import React, { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import type { FAQItem } from "../data/siteConfig";

interface FAQAccordionProps {
  items: FAQItem[];
  allowFilter?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  allowFilter = false,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(items.map((i) => i.category || "General"))),
  ];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((i) => (i.category || "General") === selectedCategory);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full">
      {allowFilter && categories.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-stone-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedCategory === cat
                  ? "bg-[#121316] text-white"
                  : "text-stone-600 bg-stone-100 hover:bg-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
        {filteredItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.question} className="py-5 transition-colors">
              <button
                type="button"
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 text-left group focus-visible:outline-2 focus-visible:outline-[#D35400] rounded-sm"
              >
                <div className="flex items-center gap-3">
                  {item.category && (
                    <span className="text-[10px] uppercase font-semibold text-[#D35400] tracking-wider hidden sm:inline-block w-20">
                      {item.category}
                    </span>
                  )}
                  <span className="font-serif text-lg sm:text-xl text-stone-900 group-hover:text-[#D35400] transition-colors">
                    {item.question}
                  </span>
                </div>
                <div className="shrink-0 p-1 rounded-full text-stone-400 group-hover:text-stone-700">
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-[#D35400]" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="mt-4 pl-0 sm:pl-24 pr-4 text-xs sm:text-sm text-stone-600 leading-relaxed animate-in fade-in duration-150">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
