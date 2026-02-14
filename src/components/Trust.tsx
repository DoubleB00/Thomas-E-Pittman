import { Shield, Award, FileCheck, Users } from 'lucide-react';

const credentials = [
  {
    icon: Shield,
    title: 'Fully Licensed',
    description: 'Licensed contractors with all required state and local certifications for your peace of mind.',
  },
  {
    icon: Award,
    title: 'Fully Insured',
    description: 'Comprehensive liability and workers compensation insurance protecting you and your property.',
  },
  {
    icon: FileCheck,
    title: 'Certified Professionals',
    description: 'Industry-certified technicians maintaining the highest standards of quality and safety.',
  },
  {
    icon: Users,
    title: 'Bonded & Trusted',
    description: 'Bonded for your protection with a proven track record of reliability and integrity.',
  },
];

export default function Trust() {
  return (
    <section className="py-24 bg-[#2E2E2E] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Licensed, Insured & Certified
          </h2>
          <p className="text-xl text-gray-300 font-medium">
            Your trust is earned through transparency, professionalism, and unwavering commitment to quality and safety standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-[#7A0F12] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#5A0A0D] transition-colors shadow-lg">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {credential.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {credential.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-[#7A0F12] rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-3xl font-black mb-4">
            Backed by Our 100% Satisfaction Guarantee
          </h3>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium">
            We stand behind every project with our comprehensive satisfaction guarantee. If you're not completely satisfied, we'll make it right.
          </p>
        </div>
      </div>
    </section>
  );
}
