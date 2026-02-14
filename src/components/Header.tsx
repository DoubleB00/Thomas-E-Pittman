import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 py-3">
          <div className="flex items-center">
            <img
              src="/7895708F-1AC6-4A1F-814B-461F820E8739.PNG"
              alt="Thomas E Pittman Construction"
              className="h-16 w-auto md:h-20 object-contain"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#7A0F12] font-semibold transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#7A0F12] font-semibold transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#7A0F12] font-semibold transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-[#7A0F12] font-semibold transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#7A0F12] font-semibold transition-colors">
              Contact
            </button>
            <a href="tel:555-123-4567" className="flex items-center gap-2 bg-[#7A0F12] text-white px-6 py-3 rounded-lg hover:bg-[#5A0A0D] transition-colors font-bold shadow-md">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#7A0F12]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#7A0F12] font-semibold text-left">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#7A0F12] font-semibold text-left">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#7A0F12] font-semibold text-left">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-[#7A0F12] font-semibold text-left">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#7A0F12] font-semibold text-left">
              Contact
            </button>
            <a href="tel:555-123-4567" className="flex items-center gap-2 bg-[#7A0F12] text-white px-6 py-3 rounded-lg hover:bg-[#5A0A0D] transition-colors font-bold justify-center shadow-md">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
