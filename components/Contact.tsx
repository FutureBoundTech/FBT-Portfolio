
import React from 'react';
import { CONTACT, COMPANY_NAME } from '../constants';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-black mb-8">Let's Build <br /><span className="text-blue-500">Something New.</span></h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Whether you need a full-scale mobile application or assistance with GST filing, our team is ready to accelerate your journey.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-blue-600/10 text-blue-500 border border-blue-500/20">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-200">Phone</h4>
                  <p className="text-gray-400">+91 {CONTACT.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-purple-600/10 text-purple-500 border border-purple-500/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-200">Email</h4>
                  <p className="text-gray-400">{CONTACT.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-emerald-600/10 text-emerald-500 border border-emerald-500/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-200">Address</h4>
                  <p className="text-gray-400">{CONTACT.address}, {CONTACT.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="p-8 md:p-12 rounded-[2rem] glass relative z-10">
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors text-gray-400 appearance-none">
                    <option value="software">Software Development</option>
                    <option value="finance">Financial Services</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <Send size={18} />
                  Submit Inquiry
                </button>
              </form>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
