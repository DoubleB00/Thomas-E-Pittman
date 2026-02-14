import { Clock, DollarSign, ThumbsUp, MessageSquare, CheckCircle2, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'On-Time, Every Time',
    description: 'We respect your time with punctual service and projects completed within agreed timelines.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise charges. Clear, upfront pricing you can trust.',
  },
  {
    icon: ThumbsUp,
    title: 'Quality Craftsmanship',
    description: 'Meticulous attention to detail and premium materials for results that last.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Regular updates and open dialogue throughout your entire project.',
  },
  {
    icon: CheckCircle2,
    title: 'Guaranteed Results',
    description: 'Backed by our satisfaction guarantee and commitment to excellence.',
  },
  {
    icon: TrendingUp,
    title: 'Property Value Enhancement',
    description: 'Services designed to increase your property value and curb appeal.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-[#2E2E2E] mb-6">
            Why Choose Thomas E Pittman Construction
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Experience the difference that professionalism, expertise, and genuine care make in every project we undertake.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-[#7A0F12] transition-colors">
                    <Icon className="w-7 h-7 text-[#7A0F12] group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#2E2E2E] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
