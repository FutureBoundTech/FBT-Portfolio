
import React from 'react';
import { SERVICES, getIcon } from '../constants';
import { Code, TrendingUp, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const techServices = SERVICES.filter(s => s.category === 'tech');
  const financeServices = SERVICES.filter(s => s.category === 'finance');

  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">Our Capabilities</span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Mastering Two Worlds</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We bridge the gap between complex software engineering and strategic financial compliance, providing a unified growth engine for your business.
          </p>
        </div>

        {/* Tech Section Highlight */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="p-5 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-[2rem] shadow-xl shadow-blue-500/20">
              <Code size={40} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-black mb-2 tracking-tight">Software Engineering</h3>
              <p className="text-blue-400 font-medium">Building the infrastructure of tomorrow.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techServices.map((service) => (
              <div 
                key={service.id} 
                className="group p-8 rounded-[2.5rem] glass border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
              >
                <div className="mb-8 inline-flex p-4 rounded-2xl bg-blue-500 text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  {getIcon(service.icon)}
                </div>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-semibold text-gray-300">
                      <CheckCircle2 size={14} className="text-blue-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Finance Section Highlight */}
        <div id="finance" className="relative">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="p-5 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-[2rem] shadow-xl shadow-purple-500/20">
              <TrendingUp size={40} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-black mb-2 tracking-tight">Financial Management</h3>
              <p className="text-purple-400 font-medium">Strategic compliance for sustainable growth.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {financeServices.map((service) => (
              <div 
                key={service.id} 
                className="group p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-purple-600/5 hover:border-purple-500/30 transition-all duration-500"
              >
                <div className="mb-6 text-purple-500 group-hover:scale-110 transition-transform">
                  {getIcon(service.icon)}
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 pt-4 border-t border-white/5">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-[10px] uppercase tracking-wider text-purple-400/80 font-bold">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
