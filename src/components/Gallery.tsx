import { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    src: '/att.im1gfaiPHE9jcVbjtPDmOmWA1SoJQNEASnKggDdaBng.JPG',
    alt: 'Luxury property entrance',
    title: 'Premium Property Renovation',
    category: 'Commercial',
  },
  {
    src: '/att.XTbdyall4PGtGjZU-vhTo9fjcSIV-D38LFz48rB6Sj8.JPG',
    alt: 'Premium property exterior',
    title: 'Residential Home Transformation',
    category: 'Residential',
  },
  {
    src: '/att.JwOx-AXuvfbltz_ARKw9NTICSqtPt8KhljEyz4YgJ44.JPG',
    alt: 'Multi-family residential complex',
    title: 'Multi-Family Property Restoration',
    category: 'Commercial',
  },
  {
    src: '/att.sOq6BqEr-Ab8u7mPxKXYXdeomQLxkXRu7p47B-rtjIo.JPG',
    alt: 'Custom home renovation',
    title: 'Luxury Home Addition',
    category: 'Residential',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-[#2E2E2E] mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-700 font-medium mb-8">
            Explore our recent projects showcasing the quality and attention to detail that defines our work.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Residential', 'Commercial'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                  filter === category
                    ? 'bg-[#7A0F12] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E]/95 via-[#2E2E2E]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                <div className="p-8 text-white w-full">
                  <div className="inline-block px-3 py-1 bg-[#7A0F12] rounded-full text-sm font-bold mb-3">
                    {image.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                  <p className="text-gray-200">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}
