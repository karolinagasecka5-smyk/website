
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-beige/80 backdrop-blur-md border-b border-brand-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-serif font-bold text-brand-brown tracking-tighter">
              Sweet<span className="text-brand-accent">Light</span> Studio
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#gallery" className="text-brand-brown hover:text-brand-accent px-3 py-2 font-medium transition-colors">Portfolio</a>
              <a href="#ai-assistant" className="text-brand-brown hover:text-brand-accent px-3 py-2 font-medium transition-colors">AI Studio</a>
              <a href="#about" className="text-brand-brown hover:text-brand-accent px-3 py-2 font-medium transition-colors">About</a>
              <a href="#contact" className="bg-brand-rose text-white px-6 py-2 rounded-full font-medium hover:bg-brand-accent transition-all">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-brown p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-beige pb-4 px-4 space-y-1">
          <a href="#gallery" className="block px-3 py-4 text-brand-brown border-b border-brand-pink">Portfolio</a>
          <a href="#ai-assistant" className="block px-3 py-4 text-brand-brown border-b border-brand-pink">AI Studio</a>
          <a href="#about" className="block px-3 py-4 text-brand-brown border-b border-brand-pink">About</a>
          <a href="#contact" className="block px-3 py-4 text-brand-brown">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
