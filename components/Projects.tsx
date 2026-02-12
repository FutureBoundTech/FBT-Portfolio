
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, PlayCircle } from 'lucide-react';
import ProjectShowcase from './ProjectShowcase';

const Projects: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Built To <span className="text-blue-500">Last</span></h2>
            <p className="text-gray-400 text-lg">
              A glimpse into the impact we've created for clients worldwide. Click on any project to launch the interactive live demo.
            </p>
          </div>
          <button className="px-6 py-3 border border-white/20 rounded-full text-sm font-semibold hover:bg-white/5 transition-colors">
            Our Development Process
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer relative"
              onClick={() => setActiveProjectId(project.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6 border border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                  <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl shadow-blue-500/30">
                    <PlayCircle size={28} />
                  </div>
                  <span className="mt-4 text-white font-bold text-sm tracking-widest uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    Launch Live Demo
                  </span>
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
              <div className="mt-4 flex items-center text-blue-400 text-xs font-bold gap-1 group-hover:gap-2 transition-all">
                EXPLORE DEMO <ExternalLink size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProjectId && (
        <ProjectShowcase 
          projectId={activeProjectId} 
          onClose={() => setActiveProjectId(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
