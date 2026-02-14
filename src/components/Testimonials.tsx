import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Property Manager',
    rating: 5,
    text: 'Exceptional service from start to finish. The team was professional, punctual, and the quality of work exceeded our expectations. They transformed our property beautifully.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Homeowner',
    rating: 5,
    text: 'After working with several contractors, I finally found a team that delivers on their promises. The attention to detail and communication throughout the project was outstanding.',
  },
  {
    name: 'Jennifer Thompson',
    role: 'Commercial Client',
    rating: 5,
    text: 'We\'ve used their services for multiple properties and they consistently deliver high-quality results. Reliable, professional, and a pleasure to work with.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-[#2E2E2E] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative border border-gray-100"
            >
              <Quote className="w-12 h-12 text-gray-100 absolute top-4 right-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#2E2E2E]">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#7A0F12] text-white px-6 py-3 rounded-lg shadow-md">
            <Star className="w-5 h-5 fill-white" />
            <span className="font-black text-lg">4.9/5.0</span>
            <span className="text-gray-200">Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
