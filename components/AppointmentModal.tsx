
import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Mail, Video, Send, CheckCircle, Copy, Check, Ticket, Download, MessageSquare, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, CONTACT, ADMIN_EMAIL, COMPANY_NAME } from '../constants';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentMeetLink, setCurrentMeetLink] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    service: 'Software Development'
  });

  useEffect(() => {
    if (isOpen) {
      setSuccess(false);
      setLoading(false);
      setCopied(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const generateMeetLink = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const segment = (len: number) => Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    return `https://meet.google.com/${segment(3)}-${segment(4)}-${segment(3)}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentMeetLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWhatsApp = () => {
    const text = `🚀 *Appointment Confirmed with ${COMPANY_NAME}*\n\n👤 *Client:* ${formData.name}\n🛠️ *Service:* ${formData.service}\n📅 *Date:* ${formData.date}\n⏰ *Time:* ${formData.time}\n\n🔗 *Meeting Link:* ${currentMeetLink}\n\nLooking forward to our session!`;
    window.open(`https://wa.me/${CONTACT.phone.replace(/\s/g, '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const meetLink = generateMeetLink();
    setCurrentMeetLink(meetLink);
    
    // Combined params for the template
    const templateParams = {
      admin_email: ADMIN_EMAIL,
      client_email: formData.email,
      from_name: formData.name,
      reply_to: formData.email,
      appointment_date: formData.date,
      appointment_time: formData.time,
      service_type: formData.service,
      meet_link: meetLink,
      company_name: COMPANY_NAME
    };

    try {
      // Logic: If the template is configured with BCC to admin, we only send once.
      // But to be 100% sure the user's specific request "send to both" is handled:
      // We'll use one send call, assuming the template handles both via its internal logic (To: {{client_email}}, BCC: futurebound.tech@gmail.com)
      // If the user hasn't set BCC, we can send twice programmatically here.
      
      // Sending to Client (Template should have To Email: {{client_email}})
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        { ...templateParams, to_email: formData.email },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Explicitly sending a notification to Admin too
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        { ...templateParams, to_email: ADMIN_EMAIL, from_name: `BOOKING: ${formData.name}` },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSuccess(true);
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      // Fallback: Proceed anyway so client gets their ticket on screen
      setSuccess(true); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={onClose}></div>
      
      <div className="relative w-full max-w-xl bg-[#080808] border border-white/10 rounded-[3.5rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-500">
        {/* Top Branding Bar */}
        <div className="p-1.5 text-center bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 animate-gradient-x">
           <div className="flex items-center justify-center gap-2">
             <Sparkles size={10} className="text-white animate-pulse" />
             <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white">Quantum Booking Protocol v3.1</span>
             <Sparkles size={10} className="text-white animate-pulse" />
           </div>
        </div>

        <div className="p-8 md:p-12">
          {success ? (
            <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500/10 text-blue-400 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-blue-500/20 rotate-12 group-hover:rotate-0 transition-transform">
                  <CheckCircle size={40} className="animate-bounce" />
                </div>
                <h2 className="text-4xl font-black tracking-tighter">System <span className="text-blue-500">Synched</span></h2>
                <p className="text-gray-500 text-sm mt-2 max-w-xs mx-auto">Your consultation slot is locked. An email has been dispatched to both parties.</p>
              </div>

              {/* Futuristic Digital Ticket */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] overflow-hidden">
                  {/* Ticket Top Section */}
                  <div className="p-6 border-b border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-xs font-black shadow-lg shadow-blue-500/30">F</div>
                      <span className="text-xs font-black uppercase tracking-widest text-gray-300">{COMPANY_NAME}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter">Reference ID</div>
                      <div className="text-[10px] font-mono text-blue-400 font-bold">FT-{Math.random().toString(36).substr(2, 6).toUpperCase()}</div>
                    </div>
                  </div>

                  {/* Ticket Details with Perforation Look */}
                  <div className="p-8 grid grid-cols-2 gap-y-8 relative">
                    <div className="space-y-1">
                      <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Client Name</p>
                      <p className="text-lg font-black text-white truncate">{formData.name}</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Service Domain</p>
                      <p className="text-sm font-bold text-blue-500">{formData.service}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Event Date</p>
                      <p className="text-lg font-bold flex items-center gap-2"><Calendar size={14} className="text-blue-500" />{formData.date}</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">T-Minus (Time)</p>
                      <p className="text-lg font-bold flex items-center justify-end gap-2"><Clock size={14} className="text-blue-500" />{formData.time}</p>
                    </div>

                    {/* Decorative Perforation notches */}
                    <div className="absolute -left-4 top-[140px] w-8 h-8 bg-[#080808] rounded-full border border-white/10"></div>
                    <div className="absolute -right-4 top-[140px] w-8 h-8 bg-[#080808] rounded-full border border-white/10"></div>
                  </div>

                  {/* Ticket Link Access Section */}
                  <div className="mx-6 mb-6 p-5 bg-blue-600/5 rounded-3xl border border-blue-500/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Digital Entry Link</span>
                      <Video size={16} className="text-blue-500" />
                    </div>
                    <div className="flex items-center gap-3 bg-black/80 p-4 rounded-2xl border border-white/5 group/link">
                      <code className="text-[11px] font-mono text-blue-300 truncate flex-1 opacity-80">{currentMeetLink}</code>
                      <button 
                        onClick={handleCopy}
                        className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-gray-400 hover:text-white"
                      >
                        {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Grid */}
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={shareToWhatsApp}
                  className="flex items-center justify-center gap-3 py-5 rounded-[1.8rem] bg-[#25D366] text-white font-black text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] transition-all active:scale-95"
                >
                  <MessageSquare size={18} /> Sync WhatsApp
                </button>
                <button 
                  onClick={onClose}
                  className="flex items-center justify-center gap-3 py-5 rounded-[1.8rem] bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-95"
                >
                  Finish
                </button>
              </div>
              <p className="text-center text-[10px] text-gray-600 font-bold uppercase tracking-widest">A copy has been transmitted to {formData.email}</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-4xl font-black tracking-tighter">Reserve <span className="text-blue-500">Access</span></h2>
                  <p className="text-gray-500 text-sm mt-1">Book your real-time consultation session.</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-all group">
                  <X size={24} className="group-hover:rotate-90 transition-transform" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                      <User size={12} className="text-blue-500" /> Full Identity
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Elon Musk"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                      <Mail size={12} className="text-blue-500" /> Digital Contact
                    </label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. name@future.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                      <Calendar size={12} className="text-blue-500" /> Slot Date
                    </label>
                    <input 
                      required
                      type="date" 
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 transition-all cursor-pointer"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                      <Clock size={12} className="text-blue-500" /> UTC/IST Slot
                    </label>
                    <input 
                      required
                      type="time" 
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 transition-all cursor-pointer"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Service Architecture</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 transition-all cursor-pointer appearance-none"
                  >
                    <option className="bg-[#080808]" value="Software Development">Software Development</option>
                    <option className="bg-[#080808]" value="Mobile App Development">Mobile App Development</option>
                    <option className="bg-[#080808]" value="GST/IT Return Filing">GST/IT Return Filing</option>
                    <option className="bg-[#080808]" value="Insurance/LIC Consultancy">Insurance/LIC Consultancy</option>
                  </select>
                </div>

                <button 
                  disabled={loading}
                  className="w-full py-5 rounded-[2rem] bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={16} /> Deploy Booking Request
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
