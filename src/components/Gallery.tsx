import { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    src: '/att.im1gfaiPHE9jcVbjtPDmOmWA1SoJQNEASnKggDdaBng.JPG',
    alt: 'Luxury property entrance',
    category: 'Commercial',
  },
  {
    src: '/att.XTbdyall4PGtGjZU-vhTo9fjcSIV-D38LFz48rB6Sj8.JPG',
    alt: 'Premium property exterior',
    category: 'Residential',
  },
  {
    src: '/att.JwOx-AXuvfbltz_ARKw9NTICSqtPt8KhljEyz4YgJ44.JPG',
    alt: 'Multi-family residential complex',
    category: 'Commercial',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-[#2E2E2E] mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Explore our recent projects showcasing the quality and attention to detail that defines our work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-semibold">{image.category}</p>
                  <p className="text-sm text-gray-200">{image.alt}</p>
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
