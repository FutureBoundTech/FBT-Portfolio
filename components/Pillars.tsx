
import React from 'react';
import { ShieldCheck, Zap, Scale, Cpu } from 'lucide-react';

const Pillars: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Software Pillar */}
        <div className="relative group p-10 rounded-[3rem] overflow-hidden bg-blue-600/5 border border-blue-500/10 hover:border-blue-500/30 transition-all">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full group-hover:bg-blue-600/20 transition-colors"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/20">
              <Zap size={24} />
            </div>
            <h3 className="text-3xl font-black mb-6">Modern IT <br />Ecosystems</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We don't just write code; we architect systems that scale with your ambitions. From cloud-native applications to enterprise-grade mobile solutions, our IT pillar is built on the latest tech stacks and agile methodologies.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-blue-400 font-bold text-lg">99.9%</span>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Uptime Focus</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-blue-400 font-bold text-lg">Modern</span>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Tech Stacks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Finance Pillar */}
        <div className="relative group p-10 rounded-[3rem] overflow-hidden bg-purple-600/5 border border-purple-500/10 hover:border-purple-500/30 transition-all">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/10 blur-3xl rounded-full group-hover:bg-purple-600/20 transition-colors"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center text-white mb-8 shadow-lg shadow-purple-500/20">
              <Scale size={24} />
            </div>
            <h3 className="text-3xl font-black mb-6">Strategic Finance <br />& Compliance</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Navigate the complex landscape of Indian taxation and insurance with ease. Our financial experts ensure your business stays compliant, audit-ready, and strategically positioned for fiscal efficiency.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-purple-400 font-bold text-lg">Zero</span>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Compliance Risk</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-purple-400 font-bold text-lg">Expert</span>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Advisory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
