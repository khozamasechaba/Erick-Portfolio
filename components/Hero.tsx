
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
            Senior Product Designer
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 dark:text-white mb-6">
            Designing scalable systems that drive business growth.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            I help early-stage startups and enterprise teams transform complex problems into intuitive digital experiences. Focused on ROI, clarity, and user delight.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all transform hover:-translate-y-1">
              View Case Studies
            </a>
            <a href="#contact" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all transform hover:-translate-y-1">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
