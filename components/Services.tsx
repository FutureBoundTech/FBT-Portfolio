
import React from 'react';
import { SERVICES, getIcon } from '../constants';
import { Code, TrendingUp } from 'lucide-react';

const Services: React.FC = () => {
  const techServices = SERVICES.filter(s => s.category === 'tech');
  const financeServices = SERVICES.filter(s => s.category === 'finance');

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Expertise</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Tech Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
              <Code size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-bold">Digital Innovation</h3>
              <p className="text-gray-400">Cutting-edge software solutions for the modern era.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techServices.map((service) => (
              <div 
                key={service.id} 
                className="group p-8 rounded-3xl glass hover:bg-blue-600/10 transition-all duration-500 hover:translate-y-[-10px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  {getIcon(service.icon)}
                </div>
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                  {getIcon(service.icon)}
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Finance Section */}
        <div id="finance">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
              <TrendingUp size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-bold">Financial Excellence</h3>
              <p className="text-gray-400">Expert tax and compliance management for business growth.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {financeServices.map((service) => (
              <div 
                key={service.id} 
                className="group p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-purple-600/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="mb-4 text-purple-500 group-hover:scale-110 transition-transform">
                  {getIcon(service.icon)}
                </div>
                <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
