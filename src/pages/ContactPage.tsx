import { useState } from 'react';
import { IconPhone, IconMail, IconLocation, IconFacebook, IconInstagram, IconWhatsapp, IconYoutube, IconArrow, STORAGE_KEYS, loadData, saveData, ContactMessage } from '../components/Shared';

export default function ContactPage() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', projectType: 'Residential', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMsg: ContactMessage = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      read: false,
    };
    const existing = loadData<ContactMessage[]>(STORAGE_KEYS.messages, []);
    saveData(STORAGE_KEYS.messages, [...existing, newMsg]);
    setSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', projectType: 'Residential', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-hand text-2xl text-teal-300 mb-3">Get in Touch</div>
          <h1 className="font-serif-display text-5xl md:text-6xl font-bold mb-4">Let's Build Something Amazing</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Reach out for a consultation
          </p>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif-display text-3xl font-bold text-stone-900 mb-6">Contact Information</h2>
              <p className="text-stone-600 mb-8">
                Fill out the form and we'll get back to you within 24 hours. Or reach us through any of the channels below.
              </p>

              <div className="space-y-4 mb-8">
                <a href="tel:+919913845738" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200 hover:border-teal-600 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-teal-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform"><IconPhone /></div>
                  <div>
                    <div className="text-xs text-stone-500 uppercase tracking-wider">Call Us</div>
                    <div className="font-semibold text-stone-900">+91 99 138 45 738</div>
                  </div>
                </a>

                <a href="mailto:id.pratyakshdesign@gmail.com" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200 hover:border-teal-600 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-teal-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform"><IconMail /></div>
                  <div>
                    <div className="text-xs text-stone-500 uppercase tracking-wider">Email Us</div>
                    <div className="font-semibold text-stone-900">id.pratyakshdesign@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200">
                  <div className="w-12 h-12 rounded-lg bg-teal-600 text-white flex items-center justify-center"><IconLocation /></div>
                  <div>
                    <div className="text-xs text-stone-500 uppercase tracking-wider">Visit Us</div>
                    <div className="font-semibold text-stone-900">Pratyaksh Design Studio</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200">
                  <div className="w-12 h-12 rounded-lg bg-teal-600 text-white flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 uppercase tracking-wider">Founder</div>
                    <div className="font-semibold text-stone-900">Ar. Jigar Panchal</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm text-stone-500 mb-3">Follow us on social media</div>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/idjigar.panchal" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all"><IconFacebook /></a>
                  <a href="https://www.instagram.com/id_pratyaksh_design" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all"><IconInstagram /></a>
                  <a href="https://wa.me/c/919913845738" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all"><IconWhatsapp /></a>
                  <a href="https://www.youtube.com/@PratyakshDesign" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all"><IconYoutube /></a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-stone-100">
              <h3 className="font-serif-display text-3xl font-bold text-stone-900 mb-2">Send a Message</h3>
              <p className="text-stone-500 mb-8">Fill out the form below</p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
                  ✓ Thank you! Your message has been sent. We will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">First Name *</label>
                    <input required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Last Name *</label>
                    <input required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email *</label>
                  <input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Phone *</label>
                  <input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} type="tel" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Project Type</label>
                  <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition bg-white">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Interior Design</option>
                    <option>3D Visualization</option>
                    <option>Turnkey Project</option>
                    <option>Industrial</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Message *</label>
                  <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3.5 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-teal-600/30 inline-flex items-center justify-center gap-2">
                  Send Message <IconArrow className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
