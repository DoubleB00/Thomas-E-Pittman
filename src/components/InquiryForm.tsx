import { useState } from 'react';
import { Send, CheckCircle, Phone } from 'lucide-react';

interface InquiryFormProps {
  serviceType: 'residential' | 'commercial' | 'general';
}

export default function InquiryForm({ serviceType }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

      const payload = {
        access_key: accessKey,
        subject: 'New Inquiry — Thomas E Pittman Construction',
        from_name: 'Thomas E Pittman Construction Website',
        ...formData,
        service_type: serviceType,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          location: '',
          budget: '',
          message: ''
        });
      } else {
        setHasError(true);
      }
    } catch {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-900 mb-2">Inquiry Received!</h3>
        <p className="text-green-700 text-lg">
          Thanks — we received your inquiry and will reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8">
      <p className="text-sm font-semibold text-[#7A0F12] mb-6 flex items-center gap-2">
        <Phone className="w-4 h-4" />
        For fastest service, call or text{' '}
        <a href="tel:5044002460" className="underline hover:text-[#5A0A0D]">504-400-2460</a>
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0F12] focus:border-transparent outline-none transition-all"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0F12] focus:border-transparent outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0F12] focus:border-transparent outline-none transition-all"
            placeholder="(504) 000-0000"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0F12] focus:border-transparent outline-none transition-all"
          >
            <option value="">Select a service</option>
            {serviceType === 'residential' && (
              <>
                <option value="roof">Roof Replacement & Repairs</option>
                <option value="siding">Siding Repair & Replacement</option>
                <option value="renovation">Interior Renovations</option>
                <option value="concrete">Concrete/Drainage Work</option>
                <option value="other">Other</option>
              </>
            )}
            {serviceType === 'commercial' && (
              <>
                <option value="structural">Structural Repairs</option>
                <option value="investment">Property Investment Renovations</option>
                <option value="multiunit">Multi-unit Restorations</option>
                <option value="other">Other</option>
              </>
            )}
            {serviceType === 'general' && (
              <>
                <option value="residential">Residential Project</option>
                <option value="commercial">Commercial Project</option>
                <option value="consultation">Consultation</option>
                <option value="other">Other</option>
              </>
            )}
          </select>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-bold text-gray-700 mb-2">
            Project Location *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0F12] focus:border-transparent outline-none transition-all"
            placeholder="City, State"
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-bold text-gray-700 mb-2">
            Budget Range (Optional)
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0F12] focus:border-transparent outline-none transition-all"
          >
            <option value="">Select budget range</option>
            <option value="under-10k">Under $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="over-100k">Over $100,000</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0F12] focus:border-transparent outline-none transition-all resize-none"
          placeholder="Tell us about your project..."
        ></textarea>
      </div>

      {hasError && (
        <div className="mt-4 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
          Something went wrong. Please call us directly at{' '}
          <a href="tel:5044002460" className="font-bold underline">504-400-2460</a>.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full bg-[#7A0F12] text-white px-8 py-4 rounded-lg hover:bg-[#5A0A0D] transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            Send Inquiry
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
