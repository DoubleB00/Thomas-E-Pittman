import { Home, Building2, ArrowRight } from 'lucide-react';

export default function ServicesChoice() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-[#2E2E2E] mb-4">
            What Can We Build For You?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From dream homes to commercial projects, we bring expertise and quality to every job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <button
            onClick={() => scrollToSection('residential')}
            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          >
            <div className="absolute inset-0">
              <img
                src="/att.sOq6BqEr-Ab8u7mPxKXYXdeomQLxkXRu7p47B-rtjIo.JPG"
                alt="Residential Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E]/95 via-[#2E2E2E]/60 to-[#2E2E2E]/30 group-hover:from-[#7A0F12]/95 group-hover:via-[#7A0F12]/60 transition-all duration-500"></div>
            </div>

            <div className="relative z-10 p-12 text-left min-h-[400px] flex flex-col justify-end">
              <Home className="w-16 h-16 text-white mb-6" />
              <h3 className="text-4xl font-black text-white mb-4">
                Residential Services
              </h3>
              <p className="text-lg text-gray-100 mb-6">
                Transform your house into your dream home with our expert craftsmanship
              </p>
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </button>

          <button
            onClick={() => scrollToSection('commercial')}
            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          >
            <div className="absolute inset-0">
              <img
                src="/att.XTbdyall4PGtGjZU-vhTo9fjcSIV-D38LFz48rB6Sj8.JPG"
                alt="Commercial Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E]/95 via-[#2E2E2E]/60 to-[#2E2E2E]/30 group-hover:from-[#7A0F12]/95 group-hover:via-[#7A0F12]/60 transition-all duration-500"></div>
            </div>

            <div className="relative z-10 p-12 text-left min-h-[400px] flex flex-col justify-end">
              <Building2 className="w-16 h-16 text-white mb-6" />
              <h3 className="text-4xl font-black text-white mb-4">
                Commercial Services
              </h3>
              <p className="text-lg text-gray-100 mb-6">
                Professional construction solutions for your business and investment properties
              </p>
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
