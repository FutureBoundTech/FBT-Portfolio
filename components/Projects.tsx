
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Built To Last</h2>
            <p className="text-gray-400 text-lg">
              A glimpse into the impact we've created for clients worldwide. From intuitive mobile apps to complex financial dashboards.
            </p>
          </div>
          <button className="px-6 py-3 border border-white/20 rounded-full text-sm font-semibold hover:bg-white/5 transition-colors">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-gray-400 font-bold uppercase tracking-widest border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
