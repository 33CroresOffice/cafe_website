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

  const contactItems = [
    { icon: MapPin, label: 'Location', value: cafeInfo?.location || 'Bhubaneswar, Odisha' },
    { icon: Phone, label: 'Phone', value: cafeInfo?.phone || '+91 98765 43210', href: `tel:${cafeInfo?.phone}` },
    { icon: Mail, label: 'Email', value: cafeInfo?.email || 'hello@blueberrycafe.com', href: `mailto:${cafeInfo?.email}` },
    { icon: Clock, label: 'Hours', value: cafeInfo?.opening_hours || 'Mon-Sun: 8:00 AM - 10:00 PM' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-amber-500 uppercase tracking-widest">Connect With Us</span>
          <h2 className="text-5xl font-bold text-white mb-4 mt-2">Get in Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">We'd love to hear from you. Reach out with any questions or reservations.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            {contactItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center group-hover:scale-110 transition">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-gray-400 hover:text-amber-400 transition">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="pt-8 border-t border-slate-700 mt-8">
              <h3 className="font-semibold text-white mb-6">Order & Reserve</h3>
              <div className="space-y-3">
                {[
                  { name: 'Swiggy', url: 'https://www.swiggy.com' },
                  { name: 'EazyDiner', url: 'https://www.eazydiner.com' },
                  { name: 'Zomato', url: 'https://www.zomato.com' },
                ].map((service, idx) => (
                  <a
                    key={idx}
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-800 text-amber-400 hover:bg-slate-700 border border-slate-700 hover:border-amber-500 transition group"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition" />
                    <span className="font-medium">{service.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-slate-800 bg-opacity-50 backdrop-blur p-8 rounded-2xl border border-slate-700">
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Message</label>
              <textarea
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition resize-none"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white py-4 rounded-lg hover:from-amber-700 hover:to-amber-600 transition font-semibold shadow-lg transform hover:scale-105"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
