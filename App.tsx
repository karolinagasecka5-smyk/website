
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import AIStudio from './components/AIStudio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-rose selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <AIStudio />
        <About />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <a 
          href="#contact" 
          className="bg-brand-rose text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
