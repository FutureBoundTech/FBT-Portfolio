
import React, { useState } from 'react';
import { 
  X, 
  ShoppingCart, 
  LayoutDashboard, 
  Package, 
  Users, 
  Search, 
  TrendingUp,
  FileCheck,
  Bell,
  UserCircle
} from 'lucide-react';

interface ProjectShowcaseProps {
  projectId: string;
  onClose: () => void;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projectId, onClose }) => {
  const [cartCount, setCartCount] = useState(0);

  const renderEcommerce = () => (
    <div className="flex flex-col h-full bg-slate-50 text-slate-900 rounded-2xl overflow-hidden">
      <nav className="p-4 bg-white border-b flex justify-between items-center">
        <div className="font-bold text-xl text-indigo-600">AuraShop</div>
        <div className="flex gap-4 items-center">
          <div className="relative cursor-pointer" onClick={() => setCartCount(prev => prev + 1)}>
            <ShoppingCart size={24} className="text-slate-600" />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">{cartCount}</span>
          </div>
          <UserCircle size={24} className="text-slate-400" />
        </div>
      </nav>
      <div className="p-6 flex-1 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">New Collections</h2>
          <div className="flex gap-2 text-sm text-slate-500">
            <span className="font-medium text-indigo-600">All</span>
            <span>Trending</span>
            <span>Popular</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-square bg-slate-200">
                <img src={`https://picsum.photos/seed/${i + 10}/300/300`} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="text-xs text-indigo-600 font-bold uppercase tracking-wider mb-1">Premium</div>
                <div className="font-bold text-slate-800">Product #{i}042</div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg font-black text-indigo-600">${(i * 12.99).toFixed(2)}</span>
                  <button 
                    onClick={() => setCartCount(c => c + 1)}
                    className="bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-indigo-700 active:scale-95 transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderERP = () => (
    <div className="flex h-full bg-[#101218] text-white rounded-2xl overflow-hidden border border-white/10">
      <div className="w-20 md:w-64 border-r border-white/10 flex flex-col p-4">
        <div className="font-black text-blue-500 mb-10 hidden md:block">OMNIPORTAL</div>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-blue-500/10 text-blue-400 rounded-xl"><LayoutDashboard size={20}/> <span className="hidden md:block">Dashboard</span></div>
          <div className="flex items-center gap-3 p-3 text-slate-400 hover:bg-white/5 rounded-xl cursor-not-allowed"><Package size={20}/> <span className="hidden md:block">Inventory</span></div>
          <div className="flex items-center gap-3 p-3 text-slate-400 hover:bg-white/5 rounded-xl cursor-not-allowed"><Users size={20}/> <span className="hidden md:block">Suppliers</span></div>
          <div className="flex items-center gap-3 p-3 text-slate-400 hover:bg-white/5 rounded-xl cursor-not-allowed"><TrendingUp size={20}/> <span className="hidden md:block">Logistics</span></div>
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-white/10 flex items-center justify-between px-6">
          <div className="text-sm text-slate-400">Inventory Overview</div>
          <div className="flex gap-4">
            <Search size={18} className="text-slate-500" />
            <Bell size={18} className="text-slate-500" />
          </div>
        </header>
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
              <div className="text-xs text-slate-500 font-bold uppercase mb-2">Total Shipments</div>
              <div className="text-3xl font-bold">1,482</div>
              <div className="text-xs text-emerald-400 mt-2">+12% from last month</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
              <div className="text-xs text-slate-500 font-bold uppercase mb-2">Active Warehouses</div>
              <div className="text-3xl font-bold">24</div>
              <div className="text-xs text-slate-500 mt-2">Global distribution</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
              <div className="text-xs text-slate-500 font-bold uppercase mb-2">Revenue Growth</div>
              <div className="text-3xl font-bold">$2.4M</div>
              <div className="text-xs text-emerald-400 mt-2">Target reached</div>
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
            <h4 className="font-bold mb-4">Live Traffic Map</h4>
            <div className="aspect-[21/9] bg-blue-500/10 rounded-2xl flex items-center justify-center border border-dashed border-blue-500/30">
              <p className="text-blue-500/50 font-bold animate-pulse">Connecting to Global Feed...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTaxFlow = () => (
    <div className="flex flex-col h-full bg-[#f8fafc] text-slate-900 rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
      <div className="bg-indigo-900 p-6 text-white flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">TaxFlow Pro</h2>
          <p className="text-indigo-300 text-xs">Financial Compliance Dashboard</p>
        </div>
        <div className="px-4 py-2 bg-emerald-500 text-white text-xs font-bold rounded-full">LIVE COMPLIANCE</div>
      </div>
      <div className="p-6 space-y-6 flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {['GST Returns', 'IT Filling', 'TDS', 'PF'].map(item => (
            <div key={item} className="p-4 bg-white border border-slate-200 rounded-xl">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">{item}</div>
              <div className="text-xl font-bold">94% Done</div>
              <div className="mt-2 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full" style={{ width: '94%' }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-slate-100 font-bold flex justify-between">
            <span>Recent Filings</span>
            <span className="text-xs text-indigo-600 cursor-pointer">Export CSV</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="p-4">Entity Name</th>
                  <th className="p-4">Period</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[1, 2, 3, 4].map(i => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-4 font-medium">Future Corp Pvt Ltd</td>
                    <td className="p-4 text-slate-500">Oct - Dec 2024</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                        <FileCheck size={12}/> Success
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const getDemo = () => {
    switch(projectId) {
      case 'p2': return renderEcommerce();
      case 'p1': return renderERP();
      case 'p3': return renderTaxFlow();
      default: return <div className="p-20 text-center">Demo coming soon...</div>;
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-300">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full max-w-6xl h-full max-h-[850px] z-10 flex flex-col">
        <div className="flex justify-between items-center mb-4 text-white">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">Interactive Showcase</span>
            <h3 className="text-xl font-bold hidden sm:block">Live Project Environment</h3>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500/20 hover:text-red-400 flex items-center justify-center transition-all border border-white/10"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 relative shadow-[0_0_100px_rgba(59,130,246,0.1)] rounded-2xl overflow-hidden group">
          {getDemo()}
        </div>
        <p className="mt-4 text-center text-gray-500 text-sm">
          This is a simulated demo environment of our production-ready software solutions.
        </p>
      </div>
    </div>
  );
};

export default ProjectShowcase;
