import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const response = await fetch(`${supabaseUrl}/rest/v1/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseAnonKey,
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          ...formData,
          service_type: serviceType,
          created_at: new Date().toISOString()
        })
      });

      if (response.ok) {
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
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
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
        <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
        <p className="text-green-700">
          We've received your inquiry and will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8">
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
            placeholder="(555) 123-4567"
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
