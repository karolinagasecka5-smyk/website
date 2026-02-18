
import React, { useState } from 'react';
import { Photo } from '../types';

const PHOTOS: Photo[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600', category: 'Desserts', title: 'Summer Cheesecake' },
  { id: '2', url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800', category: 'Main Courses', title: 'Power Bowl' },
  { id: '3', url: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=500', category: 'Desserts', title: 'Homemade Gelato' },
  { id: '4', url: 'https://images.unsplash.com/photo-1455853659719-4b521eebc76d?auto=format&fit=crop&q=80&w=700', category: 'Drinks', title: 'Pink Latte' },
  { id: '5', url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=900', category: 'Still Life', title: 'Fresh Ingredients' },
  { id: '6', url: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=600', category: 'Main Courses', title: 'Breakfast of Champions' },
  { id: '7', url: 'https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&q=80&w=700', category: 'Drinks', title: 'Morning Refreshment' },
  { id: '8', url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800', category: 'Still Life', title: 'Rustic Steak' },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Desserts', 'Main Courses', 'Drinks', 'Still Life'];

  const filteredPhotos = filter === 'All' 
    ? PHOTOS 
    : PHOTOS.filter(p => p.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-brand-brown mb-4">Project Portfolio</h2>
          <div className="w-16 h-1 bg-brand-pink mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-brand-rose text-white border-brand-rose' 
                    : 'bg-transparent text-brand-brown border-brand-pink hover:border-brand-rose'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="masonry-grid">
          {filteredPhotos.map(photo => (
            <div key={photo.id} className="masonry-item group relative overflow-hidden rounded-2xl">
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-brown/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                <p className="text-xs uppercase tracking-widest mb-1">{photo.category}</p>
                <h3 className="text-xl font-serif">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
