import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#2E2E2E] mb-6 leading-tight">
              Building Excellence Since Day One
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Thomas E Pittman Construction has served the Metro area with integrity and superior craftsmanship. We've built our reputation on delivering exceptional quality and unmatched customer service.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our team of skilled professionals is committed to transforming your property with meticulous attention to detail, proven construction techniques, and a dedication to excellence that sets us apart.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#7A0F12] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-1">Proven Track Record</h3>
                  <p className="text-gray-700">Delivering exceptional results across hundreds of residential and commercial projects.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#7A0F12] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-1">Licensed & Certified</h3>
                  <p className="text-gray-700">Our team maintains the highest industry certifications and ongoing training standards.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#7A0F12] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-1">Your Property. Our Priority.</h3>
                  <p className="text-gray-700">Client satisfaction guaranteed, backed by our comprehensive workmanship warranty.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/att.XTbdyall4PGtGjZU-vhTo9fjcSIV-D38LFz48rB6Sj8.JPG"
                alt="Professional construction services"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[#7A0F12] text-white p-8 rounded-xl shadow-xl max-w-xs">
              <p className="text-5xl font-black mb-2">500+</p>
              <p className="text-lg font-bold">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
