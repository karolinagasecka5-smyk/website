
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-beige">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 border-t-8 border-brand-rose">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-brand-brown mb-4">Let's talk about your project</h2>
            <p className="text-brand-brown/60">I'd love to hear how I can help make your brand stand out.</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-brand-brown mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-brand-pink focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all"
                  placeholder="Julia Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-brown mb-2">E-mail</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-brand-pink focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all"
                  placeholder="contact@yourbrand.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-brand-brown mb-2">Collaboration Interest</label>
              <select className="w-full px-4 py-3 rounded-xl border border-brand-pink focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all bg-white">
                <option>Restaurant Menu Session</option>
                <option>Cookbook Photography</option>
                <option>Social Media Collaboration</option>
                <option>Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-brand-brown mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-brand-pink focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all"
                placeholder="Briefly describe your expectations..."
              ></textarea>
            </div>
            
            <button className="w-full bg-brand-brown text-white py-4 rounded-xl font-bold hover:bg-brand-accent transition-all shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
