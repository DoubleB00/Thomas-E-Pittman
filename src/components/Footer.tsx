import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Shield, Award, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2E2E2E] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-black mb-4">Thomas E Pittman Construction</h3>
            <p className="text-gray-300 mb-6 leading-relaxed font-medium">
              Your Property. Our Priority. Building excellence across the Metro area since 1995.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="w-4 h-4 text-[#7A0F12]" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Award className="w-4 h-4 text-[#7A0F12]" />
                <span className="text-sm font-medium">Bonded Contractor</span>
              </div>
              <p className="text-xs text-gray-400">License #12345678</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="bg-[#7A0F12] w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#5A0A0D] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-[#7A0F12] w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#5A0A0D] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-[#7A0F12] w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#5A0A0D] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-[#7A0F12] transition-colors text-left font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('residential')} className="block text-gray-300 hover:text-[#7A0F12] transition-colors text-left font-medium">
                Residential Services
              </button>
              <button onClick={() => scrollToSection('commercial')} className="block text-gray-300 hover:text-[#7A0F12] transition-colors text-left font-medium">
                Commercial Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block text-gray-300 hover:text-[#7A0F12] transition-colors text-left font-medium">
                Gallery
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-[#7A0F12] transition-colors text-left font-medium">
                About Us
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-[#7A0F12] transition-colors text-left font-medium">
                Contact
              </button>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-black mb-4">Our Services</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[#7A0F12] font-bold text-sm mb-2">Residential</p>
                <ul className="space-y-2 text-gray-300 text-sm font-medium">
                  <li>Roof Replacement & Repairs</li>
                  <li>Siding Installation</li>
                  <li>Interior Renovations</li>
                  <li>Concrete & Drainage</li>
                </ul>
              </div>
              <div>
                <p className="text-[#7A0F12] font-bold text-sm mb-2">Commercial</p>
                <ul className="space-y-2 text-gray-300 text-sm font-medium">
                  <li>Structural Repairs</li>
                  <li>Property Renovations</li>
                  <li>Multi-Unit Restorations</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-4">Contact Us</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#7A0F12] flex-shrink-0 mt-1" />
                <a href="tel:555-123-4567" className="text-gray-300 hover:text-white transition-colors font-medium">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#7A0F12] flex-shrink-0 mt-1" />
                <a href="mailto:info@thomasepittman.com" className="text-gray-300 hover:text-white transition-colors font-medium">
                  info@thomasepittman.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#7A0F12] flex-shrink-0 mt-1" />
                <p className="text-gray-300 font-medium">
                  Serving the Greater Metro Area<br />
                  and Surrounding Communities
                </p>
              </div>
            </div>

            <div className="bg-[#7A0F12]/20 p-4 rounded-lg border border-[#7A0F12]/30">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#7A0F12]" />
                <h5 className="font-bold text-sm">Business Hours</h5>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Mon - Fri: 7:00 AM - 6:00 PM<br />
                Saturday: 8:00 AM - 4:00 PM<br />
                Sunday: Closed<br />
                <span className="text-[#7A0F12] font-bold">24/7 Emergency Service</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm font-medium">
              © {currentYear} Thomas E Pittman Construction. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
