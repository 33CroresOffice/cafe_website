import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface CafeInfo {
  name: string;
  location?: string;
  phone?: string;
  email?: string;
  opening_hours?: string;
}

export default function Contact({ cafeInfo }: { cafeInfo: CafeInfo | null }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-lg">We'd love to hear from you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600">{cafeInfo?.location || 'Bhubaneswar, Odisha'}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <a href={`tel:${cafeInfo?.phone}`} className="text-blue-600 hover:text-blue-700">
                  {cafeInfo?.phone || '+91 98765 43210'}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a href={`mailto:${cafeInfo?.email}`} className="text-blue-600 hover:text-blue-700">
                  {cafeInfo?.email || 'hello@blueberrycafe.com'}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="w-6 h-6 text-blue-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                <p className="text-gray-600">{cafeInfo?.opening_hours || 'Mon-Sun: 8:00 AM - 10:00 PM'}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Order & Reserve</h3>
              <div className="space-y-2">
                <a
                  href="https://www.swiggy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Order on Swiggy</span>
                </a>
                <a
                  href="https://www.eazydiner.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Reserve on EazyDiner</span>
                </a>
                <a
                  href="https://www.zomato.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Reserve on Zomato</span>
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
