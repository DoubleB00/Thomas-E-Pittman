import { Wrench, Brush, Droplets, Zap, Home, Trees } from 'lucide-react';

const services = [
  {
    icon: Brush,
    title: 'Interior & Exterior Painting',
    description: 'Professional painting services that transform your property with premium finishes and meticulous attention to detail.',
  },
  {
    icon: Wrench,
    title: 'General Repairs & Maintenance',
    description: 'Comprehensive repair services to keep your property in pristine condition, from minor fixes to major renovations.',
  },
  {
    icon: Droplets,
    title: 'Pressure Washing',
    description: 'Restore your property\'s exterior beauty with our professional pressure washing services for all surfaces.',
  },
  {
    icon: Zap,
    title: 'Electrical Services',
    description: 'Licensed electrical work including installations, repairs, and upgrades to keep your property safe and efficient.',
  },
  {
    icon: Home,
    title: 'Property Restoration',
    description: 'Complete restoration services to bring aging properties back to their former glory with modern upgrades.',
  },
  {
    icon: Trees,
    title: 'Landscaping & Outdoor',
    description: 'Enhance your curb appeal with professional landscaping design, installation, and maintenance services.',
  },
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-[#2E2E2E] mb-6">
            Comprehensive Construction Services
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            From minor repairs to major renovations, we deliver exceptional craftsmanship across all aspects of property construction and improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
              >
                <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#7A0F12] transition-colors">
                  <Icon className="w-8 h-8 text-[#7A0F12] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-[#2E2E2E] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={scrollToContact}
                  className="text-[#7A0F12] font-bold hover:text-[#5A0A0D] transition-colors inline-flex items-center gap-2"
                >
                  Get a Quote
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
