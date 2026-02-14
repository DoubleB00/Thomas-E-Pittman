import { Building2, Wrench, TrendingUp, Home as HomeIcon, CheckCircle, Star } from 'lucide-react';
import InquiryForm from './InquiryForm';

export default function CommercialServices() {
  const services = [
    {
      icon: Wrench,
      title: 'Structural Repairs',
      description: 'Expert structural assessment and repair services to ensure the integrity and safety of your commercial property.'
    },
    {
      icon: TrendingUp,
      title: 'Property Investment Renovations',
      description: 'Maximize ROI with strategic renovations that increase property value and attract quality tenants.'
    },
    {
      icon: HomeIcon,
      title: 'Multi-Unit Restorations',
      description: 'Comprehensive restoration services for apartment complexes and multi-family properties.'
    }
  ];

  const advantages = [
    'Minimal Business Disruption',
    'Project Management Expertise',
    'Commercial-Grade Materials',
    'Competitive Pricing',
    'Licensed & Bonded',
    'References Available'
  ];

  const testimonials = [
    {
      quote: "Thomas E Pittman Construction completed our 12-unit apartment renovation ahead of schedule and under budget. Their professionalism and attention to detail were outstanding.",
      author: "Michael R.",
      role: "Property Manager"
    },
    {
      quote: "We've worked with them on multiple commercial projects. Their expertise in structural repairs and ability to work within our timeline make them our go-to contractor.",
      author: "Jennifer L.",
      role: "Real Estate Investor"
    }
  ];

  return (
    <section id="commercial" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#7A0F12]/10 px-4 py-2 rounded-full mb-4">
            <Building2 className="w-5 h-5 text-[#7A0F12]" />
            <span className="text-[#7A0F12] font-bold">Commercial Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#2E2E2E] mb-4">
            Professional Commercial Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by property managers and investors for quality commercial construction and renovation services that protect and enhance your investment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-[#7A0F12]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-[#7A0F12]" />
              </div>
              <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[400px] lg:min-h-0 order-2 lg:order-1">
              <img
                src="/att.XTbdyall4PGtGjZU-vhTo9fjcSIV-D38LFz48rB6Sj8.JPG"
                alt="Commercial project"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="p-12 lg:p-16 order-1 lg:order-2">
              <h3 className="text-3xl font-black text-[#2E2E2E] mb-8">
                The Commercial Advantage
              </h3>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#7A0F12] flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700 font-medium">
                      {advantage}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-[#2E2E2E] rounded-xl text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-[#7A0F12] fill-current" />
                  <Star className="w-6 h-6 text-[#7A0F12] fill-current" />
                  <Star className="w-6 h-6 text-[#7A0F12] fill-current" />
                  <Star className="w-6 h-6 text-[#7A0F12] fill-current" />
                  <Star className="w-6 h-6 text-[#7A0F12] fill-current" />
                </div>
                <p className="font-bold text-lg mb-2">
                  Trusted by Property Professionals
                </p>
                <p className="text-gray-300">
                  Over 100+ commercial projects completed with a 100% satisfaction rate
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#7A0F12] fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-[#7A0F12] font-bold">
                  {testimonial.author}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-[#2E2E2E] mb-4">
              Discuss Your Commercial Project
            </h3>
            <p className="text-lg text-gray-600">
              Get a detailed proposal tailored to your business needs
            </p>
          </div>
          <InquiryForm serviceType="commercial" />
        </div>
      </div>
    </section>
  );
}
