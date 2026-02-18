
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=2000" 
          alt="Elegant Food Background" 
          className="w-full h-full object-cover brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-beige/80 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <span className="inline-block text-brand-accent font-semibold tracking-widest uppercase text-sm mb-4">Exquisite Food Photography</span>
          <h2 className="text-5xl md:text-7xl font-serif text-brand-brown leading-tight mb-6 italic">
            Capturing <br />
            <span className="not-italic font-bold">Flavour in Frame</span>
          </h2>
          <p className="text-lg text-brand-brown/80 mb-8 font-light leading-relaxed">
            I create aesthetic stories that tempt the senses and tell a tale of passion for food. Modern style with a feminine touch.
          </p>
          <div className="flex space-x-4">
            <a href="#gallery" className="border-2 border-brand-brown text-brand-brown px-8 py-3 rounded-full hover:bg-brand-brown hover:text-white transition-all font-medium">View Work</a>
            <a href="#contact" className="bg-brand-rose text-white px-8 py-3 rounded-full hover:bg-brand-accent transition-all shadow-lg shadow-brand-rose/20 font-medium">Book a Session</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
