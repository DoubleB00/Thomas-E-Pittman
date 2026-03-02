import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

      const payload = {
        access_key: accessKey,
        subject: 'New Estimate Request — Thomas E Pittman Construction',
        from_name: 'Thomas E Pittman Construction Website',
        ...formData,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl sm:text-5xl font-black text-[#2E2E2E] mb-4">
            Request Your Free Estimate
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Get in touch with us today to discuss your project. We'll provide a detailed, no-obligation estimate.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-[#7A0F12] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div className="text-center sm:text-left">
              <p className="text-white font-black text-lg leading-tight">
                For fastest service, call or text us directly
              </p>
              <p className="text-red-200 text-sm mt-1">
                Immediate response — available Mon–Sat
              </p>
            </div>
            <a
              href="tel:5044002460"
              className="flex-shrink-0 bg-white text-[#7A0F12] px-7 py-3 rounded-xl font-black text-xl flex items-center gap-2 hover:bg-gray-100 active:scale-95 transition-all shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              504-400-2460
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm font-semibold text-[#7A0F12] mb-4 flex items-center gap-1.5">
              <Phone className="w-4 h-4" />
              For fastest service, call or text{' '}
              <a href="tel:5044002460" className="underline hover:text-[#5A0A0D]">504-400-2460</a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#2E2E2E] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7A0F12] focus:ring-2 focus:ring-[#7A0F12]/20 outline-none transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[#2E2E2E] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7A0F12] focus:ring-2 focus:ring-[#7A0F12]/20 outline-none transition-all"
                    placeholder="(504) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#2E2E2E] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7A0F12] focus:ring-2 focus:ring-[#7A0F12]/20 outline-none transition-all"
                    placeholder="john@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold text-[#2E2E2E] mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7A0F12] focus:ring-2 focus:ring-[#7A0F12]/20 outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="roofing">Roof Replacement & Repairs</option>
                  <option value="siding">Siding Repair & Replacement</option>
                  <option value="renovation">Interior Renovations</option>
                  <option value="concrete">Concrete/Drainage Work</option>
                  <option value="commercial">Commercial Project</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#2E2E2E] mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7A0F12] focus:ring-2 focus:ring-[#7A0F12]/20 outline-none transition-all resize-none"
                  placeholder="Please describe your project and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7A0F12] text-white px-8 py-4 rounded-lg hover:bg-[#5A0A0D] transition-colors font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Request
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-300 text-green-900 px-4 py-4 rounded-lg font-medium">
                  Thanks — we received your inquiry and will reach out shortly.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  Something went wrong. Please call us directly at{' '}
                  <a href="tel:5044002460" className="font-bold underline">504-400-2460</a>.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#7A0F12]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2E2E2E] mb-1">Phone / Text</p>
                    <a href="tel:5044002460" className="text-[#7A0F12] hover:text-[#5A0A0D] text-lg font-bold">
                      504-400-2460
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#7A0F12]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2E2E2E] mb-1">Email</p>
                    <a href="mailto:Roof.ssr@gmail.com" className="text-[#7A0F12] hover:text-[#5A0A0D]">
                      Roof.ssr@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#7A0F12]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2E2E2E] mb-1">Service Area</p>
                    <p className="text-gray-700">
                      Serving Southeast Louisiana<br />
                      and Surrounding Communities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#7A0F12]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2E2E2E] mb-1">Business Hours</p>
                    <p className="text-gray-700">
                      Monday - Friday: 7:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#7A0F12]/5 border-2 border-[#7A0F12]/20 rounded-xl p-6">
              <h4 className="font-black text-[#2E2E2E] text-lg mb-2">
                Emergency Services Available
              </h4>
              <p className="text-gray-700 mb-4">
                For urgent matters, call us 24/7 at{' '}
                <a href="tel:5044002460" className="text-[#7A0F12] font-bold">504-400-2460</a>
              </p>
              <a
                href="tel:5044002460"
                className="w-full bg-[#7A0F12] text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#5A0A0D] active:scale-95 transition-all shadow-md"
              >
                <Phone className="w-5 h-5" />
                Call or Text Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
