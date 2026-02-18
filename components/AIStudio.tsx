
import React, { useState, useRef } from 'react';
import { generateFlavorStory } from '../services/geminiService';
import { FlavorStory } from '../types';

const AIStudio: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FlavorStory | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64 = e.target?.result as string;
      setPreview(base64);
      setLoading(true);
      setResult(null);

      try {
        const cleanBase64 = base64.split(',')[1];
        const story = await generateFlavorStory(cleanBase64);
        setResult(story);
      } catch (error) {
        console.error("AI Error:", error);
        alert("An error occurred while generating the description. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section id="ai-assistant" className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-2 block">Portfolio Innovation</span>
            <h2 className="text-4xl font-serif text-brand-brown mb-6">AI Flavour Storyteller</h2>
            <p className="text-brand-brown/70 mb-8 leading-relaxed">
              Harness the power of AI to create poetic descriptions for your dishes. Upload a photo, and my system (powered by Google Gemini) will generate an appetizing story, mood, and serving suggestions.
            </p>
            
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              ref={fileInputRef}
              onChange={handleFileUpload}
            />
            
            <button 
              onClick={() => fileInputRef.current?.click()}
              disabled={loading}
              className="bg-white border-2 border-brand-rose text-brand-rose px-10 py-4 rounded-full font-semibold hover:bg-brand-rose hover:text-white transition-all shadow-xl shadow-brand-rose/10 disabled:opacity-50"
            >
              {loading ? 'Generating...' : 'Upload Food Photo'}
            </button>
          </div>

          <div className="bg-white rounded-[3rem] p-8 shadow-2xl min-h-[400px] flex flex-col items-center justify-center border-4 border-brand-pink">
            {!preview && !result && (
              <div className="text-center p-12 opacity-30">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-serif italic text-lg">Your preview will appear here</p>
              </div>
            )}

            {preview && (
              <div className="w-full flex flex-col md:flex-row gap-8 items-start">
                <img src={preview} alt="Preview" className="w-full md:w-1/2 rounded-2xl shadow-lg aspect-square object-cover" />
                <div className="w-full md:w-1/2">
                  {loading && (
                    <div className="flex flex-col items-center justify-center h-full pt-10">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-rose mb-4"></div>
                      <p className="text-brand-brown animate-pulse">Analysing textures and colours...</p>
                    </div>
                  )}
                  {result && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                      <h3 className="text-2xl font-serif text-brand-brown border-b border-brand-pink pb-2">{result.title}</h3>
                      <p className="text-brand-brown/80 italic">"{result.description}"</p>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">Mood:</span>
                        <p className="text-sm font-medium text-brand-brown">{result.mood}</p>
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">Pairing Suggestions:</span>
                        <ul className="text-sm list-disc list-inside text-brand-brown/70 mt-1">
                          {result.pairings.map((p, i) => <li key={i}>{p}</li>)}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStudio;
