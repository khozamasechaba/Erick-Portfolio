
import React from 'react';

const PROJECTS = [
  {
    title: "FinTech Dashboard v2",
    description: "Redesigned the primary user portal, increasing monthly active users by 42% through simplified navigation and real-time data visualization.",
    image: "https://picsum.photos/800/600?random=1",
    tags: ["UX/UI", "Analytics", "SaaS"],
  },
  {
    title: "EcoConnect Mobile App",
    description: "A community-driven sustainability platform. Led the end-to-end design process from discovery to high-fidelity prototyping.",
    image: "https://picsum.photos/800/600?random=2",
    tags: ["Mobile", "User Research"],
  },
  {
    title: "Lumina Design System",
    description: "Built a comprehensive design system for a team of 40+ engineers, reducing frontend production time by 30%.",
    image: "https://picsum.photos/800/600?random=3",
    tags: ["Systems", "Documentation"],
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              A curated collection of projects where design strategy meets technical excellence.
            </p>
          </div>
          <div className="flex space-x-4">
            <span className="text-sm font-medium px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full">All Projects</span>
            <span className="text-sm font-medium px-4 py-2 text-slate-400 cursor-pointer hover:text-slate-600 transition-colors">Case Studies</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-slate-100 dark:bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-2 flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  View Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
