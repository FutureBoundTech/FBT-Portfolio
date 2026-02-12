
import React from 'react';
import { COMPANY_NAME, CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="font-extrabold text-lg">
              {COMPANY_NAME}
            </span>
          </div>
          
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved. <br className="md:hidden" />
            Designed for the future of IT & Finance.
          </p>

          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
