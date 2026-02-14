import { Phone, ArrowRight, Shield, Award, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full pt-24 animate-fade-in">
      <div className="relative w-full h-[calc(100vh-6rem)] min-h-[600px] max-h-[900px]">
        <div className="absolute inset-0">
          <img
            src="/att.im1gfaiPHE9jcVbjtPDmOmWA1SoJQNEASnKggDdaBng.JPG"
            alt="Premium property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E2E2E]/95 to-[#2E2E2E]/75"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Professional Construction
                <span className="block text-[#7A0F12]">Built on Integrity</span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed font-medium">
                Thomas E Pittman Construction delivers superior craftsmanship and exceptional service for residential and commercial projects across the Metro area.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={scrollToContact}
                  className="group bg-[#7A0F12] text-white px-8 py-4 rounded-lg hover:bg-[#5A0A0D] transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Request Estimate
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="tel:555-123-4567"
                  className="bg-white text-[#2E2E2E] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  (555) 123-4567
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#7A0F12]" />
                  <span className="font-bold">Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#7A0F12]" />
                  <span className="font-bold">Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#7A0F12]" />
                  <span className="font-bold">Locally Owned</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
