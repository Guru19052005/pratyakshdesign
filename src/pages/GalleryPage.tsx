import { useState } from 'react';

const galleryImages = [
  { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', title: 'Modern Villa Exterior', category: 'Residential' },
  { img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80', title: 'Luxury Living Room', category: 'Interior' },
  { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', title: 'Open Office Space', category: 'Commercial' },
  { img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&q=80', title: 'Master Bedroom Suite', category: 'Interior' },
  { img: 'https://images.unsplash.com/photo-16134904935768-7ba188743c83?w=600&q=80', title: 'Garden Villa', category: 'Residential' },
  { img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80', title: 'Kids Playroom', category: 'Interior' },
  { img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80', title: 'Retail Store', category: 'Commercial' },
  { img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', title: 'Modern Kitchen', category: 'Interior' },
  { img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80', title: 'Luxury Bungalow', category: 'Residential' },
  { img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80', title: 'Corporate Meeting Room', category: 'Commercial' },
  { img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80', title: 'Modern Bathroom', category: 'Interior' },
  { img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80', title: 'Elegant Dining Area', category: 'Interior' },
  { img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80', title: 'Luxury Penthouse', category: 'Residential' },
  { img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', title: 'Sustainable Home', category: 'Residential' },
  { img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', title: 'Hotel Lobby', category: 'Commercial' },
  { img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80', title: 'Studio Apartment', category: 'Interior' },
];

const categories = ['All', ...Array.from(new Set(galleryImages.map((g) => g.category)))];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lightboxImg, setLightboxImg] = useState<typeof galleryImages[0] | null>(null);

  const filtered = filter === 'All' ? galleryImages : galleryImages.filter((g) => g.category === filter);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-hand text-2xl text-teal-300 mb-3">Our Gallery</div>
          <h1 className="font-serif-display text-5xl md:text-6xl font-bold mb-4">Project Gallery</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            A visual journey through our diverse portfolio of architectural and interior design projects
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === c
                    ? 'bg-teal-600 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightboxImg(img)}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                  i % 5 === 0 ? 'row-span-2' : ''
                }`}
              >
                <img
                  src={img.img}
                  alt={img.title}
                  className="w-full h-full min-h-[200px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white">
                    <div className="text-xs text-teal-300 font-medium uppercase">{img.category}</div>
                    <div className="font-semibold">{img.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            onClick={() => setLightboxImg(null)}
          >
            ✕
          </button>
          <img
            src={lightboxImg.img}
            alt={lightboxImg.title}
            className="max-w-5xl max-h-[80vh] w-full object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 left-0 right-0 text-center text-white">
            <div className="text-sm text-teal-300 uppercase">{lightboxImg.category}</div>
            <div className="font-serif-display text-2xl font-bold">{lightboxImg.title}</div>
          </div>
        </div>
      )}
    </>
  );
}
