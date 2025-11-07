import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', eventType: '', eventDate: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#FDFBF7] to-[#F5EFE9]">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-['Playfair_Display'] text-5xl mb-6 text-[#30383B] leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-[#5A5A5A] max-w-3xl leading-relaxed">
            Ready to bring your celebration to life? We'd love to hear about your vision.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-[#6A1027]/10 border-2 border-[#6A1027] rounded-lg p-12 text-center">
                  <p className="text-2xl font-['Playfair_Display'] text-[#6A1027] mb-4">
                    Thank you for reaching out!
                  </p>
                  <p className="text-[#5A5A5A] leading-relaxed">
                    We've received your inquiry and will get back to you within 24 hours. We're excited to discuss your event!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#30383B] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#6A1027]/20 rounded-lg text-[#30383B] focus:outline-none focus:border-[#6A1027] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#30383B] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#6A1027]/20 rounded-lg text-[#30383B] focus:outline-none focus:border-[#6A1027] transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#30383B] mb-2">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#6A1027]/20 rounded-lg text-[#30383B] focus:outline-none focus:border-[#6A1027] transition-colors"
                      >
                        <option value="">Select an event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="celebration">Private Celebration</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#30383B] mb-2">
                        Preferred Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#6A1027]/20 rounded-lg text-[#30383B] focus:outline-none focus:border-[#6A1027] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#30383B] mb-2">
                      Tell us about your vision
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#6A1027]/20 rounded-lg text-[#30383B] focus:outline-none focus:border-[#6A1027] transition-colors resize-none"
                      placeholder="Share your ideas, budget, guest count, or any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-10 py-4 bg-[#6A1027] text-white font-medium tracking-wide rounded transition-all hover:bg-[#30383B] hover:shadow-lg hover:shadow-[#EC6839]/35 shadow-md shadow-[#6A1027]/25"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-['Playfair_Display'] text-2xl text-[#6A1027] mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <a
                    href="mailto:hello@pepperbloom.com"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#FDFBF7] transition-colors"
                  >
                    <Mail size={24} className="text-[#EC6839] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-[#5A5A5A] mb-1">Email</p>
                      <p className="text-[#30383B] font-medium">hello@pepperbloom.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+14155551234"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#FDFBF7] transition-colors"
                  >
                    <Phone size={24} className="text-[#EC6839] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-[#5A5A5A] mb-1">Phone</p>
                      <p className="text-[#30383B] font-medium">+1 (415) 555-1234</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-lg">
                    <MapPin size={24} className="text-[#EC6839] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-[#5A5A5A] mb-1">Location</p>
                      <p className="text-[#30383B] font-medium">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#EC6839]/10 to-[#F29EB7]/10 p-6 rounded-lg border border-[#EC6839]/20">
                <h4 className="font-['Playfair_Display'] text-lg text-[#6A1027] mb-3">
                  Response Time
                </h4>
                <p className="text-[#5A5A5A] text-sm">
                  We typically respond to inquiries within 24 hours during business days. We look forward to creating something beautiful together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
