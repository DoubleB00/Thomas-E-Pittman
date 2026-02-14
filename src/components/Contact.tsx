import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

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
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Form submission:', formData);

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-[#2E2E2E] mb-6">
            Request Your Free Estimate
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Get in touch with us today to discuss your project. We'll provide a detailed, no-obligation estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
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
                    placeholder="(555) 123-4567"
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
                  <option value="painting">Interior & Exterior Painting</option>
                  <option value="repairs">General Repairs & Maintenance</option>
                  <option value="pressure-washing">Pressure Washing</option>
                  <option value="electrical">Electrical Services</option>
                  <option value="restoration">Property Restoration</option>
                  <option value="landscaping">Landscaping & Outdoor</option>
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
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Thank you! We'll contact you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  There was an error submitting your request. Please call us directly.
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
                    <p className="font-bold text-[#2E2E2E] mb-1">Phone</p>
                    <a href="tel:555-123-4567" className="text-[#7A0F12] hover:text-blue-700 text-lg">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#7A0F12]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2E2E2E] mb-1">Email</p>
                    <a href="mailto:info@premierhomeservices.com" className="text-[#7A0F12] hover:text-blue-700">
                      info@premierhomeservices.com
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
                      Serving the Greater Metro Area<br />
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
              <p className="text-gray-700">
                For urgent matters, call us 24/7 at <a href="tel:555-123-4567" className="text-[#7A0F12] font-bold">(555) 123-4567</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
