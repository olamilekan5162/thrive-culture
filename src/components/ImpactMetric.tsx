import React from 'react';

export interface MetricDefinition {
  indicator: string;
  category: string;
  placeholderValue: string;
  context: string;
  measurementMethod: string;
}

interface ImpactMetricProps {
  metric: MetricDefinition;
}

export const ImpactMetric: React.FC<ImpactMetricProps> = ({ metric }) => {
  return (
    <div className="p-6 bg-white border border-stone-200/90 rounded-xl hover:border-stone-400 transition-colors flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D35400]">
            {metric.category}
          </span>
          <span className="text-[10px] text-stone-500 font-mono">Framework Target</span>
        </div>

        <h4 className="font-serif text-xl sm:text-2xl text-stone-900 mb-2 leading-snug">
          {metric.indicator}
        </h4>

        <div className="my-3 py-2 px-3 bg-stone-50 border border-dashed border-stone-300 rounded-md">
          <span className="font-mono text-xs font-semibold text-stone-700 block">
            {metric.placeholderValue}
          </span>
        </div>

        <p className="text-xs text-stone-600 leading-relaxed">
          {metric.context}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] text-stone-500 flex items-center justify-between">
        <span className="italic">{metric.measurementMethod}</span>
      </div>
    </div>
  );
};
