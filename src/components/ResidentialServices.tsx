import { Home, Hammer, PaintBucket, Droplets, CheckCircle } from 'lucide-react';
import InquiryForm from './InquiryForm';

export default function ResidentialServices() {
  const services = [
    {
      icon: Home,
      title: 'Roof Replacement & Repairs',
      description: 'Complete roofing solutions from minor repairs to full replacements with premium materials and expert installation.'
    },
    {
      icon: Hammer,
      title: 'Siding Repair & Replacement',
      description: 'Transform your home\'s exterior with quality siding that enhances curb appeal and protects your investment.'
    },
    {
      icon: PaintBucket,
      title: 'Interior Renovations',
      description: 'From kitchens to bathrooms, we bring your vision to life with meticulous attention to detail and craftsmanship.'
    },
    {
      icon: Droplets,
      title: 'Concrete & Drainage Work',
      description: 'Professional concrete services and drainage solutions to protect your property and enhance functionality.'
    }
  ];

  const benefits = [
    'Licensed and Insured Contractors',
    'Free Estimates & Consultations',
    'Quality Materials & Workmanship',
    'Flexible Scheduling',
    'Clean Job Sites',
    'Warranty on All Work'
  ];

  return (
    <section id="residential" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#7A0F12]/10 px-4 py-2 rounded-full mb-4">
            <Home className="w-5 h-5 text-[#7A0F12]" />
            <span className="text-[#7A0F12] font-bold">Residential Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#2E2E2E] mb-4">
            Transform Your Home
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert craftsmanship for homeowners who demand quality. From repairs to complete renovations, we bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
            <div className="p-12 lg:p-16">
              <h3 className="text-3xl font-black text-[#2E2E2E] mb-8">
                Why Homeowners Choose Us
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#7A0F12] flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700 font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-[#7A0F12]/5 rounded-xl border-l-4 border-[#7A0F12]">
                <p className="text-gray-700 italic leading-relaxed">
                  "Working with Thomas E Pittman Construction was a dream. They transformed our outdated kitchen into a modern masterpiece. Professional, clean, and on time!"
                </p>
                <p className="text-[#7A0F12] font-bold mt-4">
                  - Sarah M., Homeowner
                </p>
              </div>
            </div>

            <div className="relative min-h-[400px] lg:min-h-0">
              <img
                src="/att.sOq6BqEr-Ab8u7mPxKXYXdeomQLxkXRu7p47B-rtjIo.JPG"
                alt="Residential project"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-[#2E2E2E] mb-4">
              Request Your Free Estimate
            </h3>
            <p className="text-lg text-gray-600">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>
          <InquiryForm serviceType="residential" />
        </div>
      </div>
    </section>
  );
}
