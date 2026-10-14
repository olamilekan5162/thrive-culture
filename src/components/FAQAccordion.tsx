import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="divide-y divide-stone-200 border-y border-stone-200">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const id = `faq-item-${idx}`;

        return (
          <div key={idx} className="py-4 sm:py-5">
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              aria-controls={id}
              className="w-full flex items-start justify-between text-left gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded-sm"
            >
              <span className="text-base sm:text-lg font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
                {item.question}
              </span>
              <span className="p-1 rounded-md text-stone-500 group-hover:text-stone-900 group-hover:bg-stone-100 transition-all shrink-0 mt-0.5">
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-amber-700' : ''
                  }`}
                />
              </span>
            </button>
            {isOpen && (
              <div id={id} className="pt-3 pr-8 text-stone-600 text-sm sm:text-base leading-relaxed">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
