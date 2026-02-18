
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-brown py-12 text-brand-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif font-bold text-white mb-4">Sweet<span className="text-brand-accent">Light</span> Studio</h2>
        <p className="max-w-md mx-auto text-sm opacity-60 mb-8 leading-loose">
          Exquisite food photography created with passion and a feminine aesthetic.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://instagram.com/sweetlight.studio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Pinterest</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
        </div>
        <div className="border-t border-white/10 pt-8 text-xs opacity-40">
          &copy; {new Date().getFullYear()} Sweet Light Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
