
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-6">Let's build something remarkable together.</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Open to new opportunities, collaborations, or just a coffee chat about design and strategy.
            </p>
            <a 
              href="mailto:hello@erickvr.design" 
              className="text-xl font-semibold border-b-2 border-slate-900 dark:border-white hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-all pb-1"
            >
              hello@erickvr.design
            </a>
          </div>
          
          <div className="flex flex-col space-y-4 text-sm font-medium">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Dribbble</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Behance</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Read.cv</a>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Erick Van Reenen. Built with React & Tailwind CSS.</p>
          <p>Handcrafted with precision & focus.</p>
        </div>
      </div>
    </footer>
  );
};
