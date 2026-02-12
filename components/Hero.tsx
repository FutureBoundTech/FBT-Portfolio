
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest animate-pulse">
          Innovation Meets Precision
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
          Evolving The <span className="gradient-text">Future</span> <br />
          Of IT & Finance
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Future Bound Tech is a powerhouse of digital transformation. We blend high-end software development with expert financial consultation to scale your vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="group px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-gray-200 transition-all hover:translate-y-[-2px]"
          >
            Explore Services
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full glass font-bold hover:bg-white/10 transition-all"
          >
            View Showcase
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <ChevronDown size={32} />
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Hero;
