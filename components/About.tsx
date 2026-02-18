
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="relative w-full lg:w-1/2">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-pink rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600" 
              alt="Food Photographer" 
              className="relative z-10 rounded-[4rem] shadow-2xl w-full max-w-md mx-auto aspect-[3/4] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 z-20 bg-brand-rose text-white p-8 rounded-2xl shadow-xl">
              <span className="text-4xl font-serif font-bold">10+</span>
              <p className="text-sm font-medium">Years Experience</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-serif text-brand-brown mb-6 italic">Hi, I'm <span className="not-italic font-bold">Karolina</span></h2>
            <p className="text-lg text-brand-brown/70 leading-relaxed mb-6">
              I believe that food is not just calories, but primarily emotions, memories, and beauty that deserve the best setting. My work combines a love for gastronomy with an eye for detail and natural light.
            </p>
            <p className="text-lg text-brand-brown/70 leading-relaxed mb-8">
              I specialize in modern, light food photography for cookbook authors, food bloggers, restaurants and premium brands. I treat every shot as a small work of art.
            </p>
            <p className="text-lg text-brand-brown/70 leading-relaxed mb-8 italic">
              Based in the Zurich, Switzerland and available to work remotely with clients and brands nationwide.
            </p>
      
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-serif text-xl text-brand-brown mb-2">Styling</h4>
                <p className="text-sm text-brand-brown/60">I create compositions that bring still life to life.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl text-brand-brown mb-2">Editing</h4>
                <p className="text-sm text-brand-brown/60">Natural colours and bringing out product textures.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-brand-pink flex items-center justify-center">
                 <svg className="w-6 h-6 text-brand-rose" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <span className="text-brand-brown font-medium">@sweetlight.studio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
