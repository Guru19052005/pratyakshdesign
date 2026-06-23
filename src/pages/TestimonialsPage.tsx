import { useState } from 'react';
import { loadData, STORAGE_KEYS, defaultTestimonials, Testimonial } from '../components/Shared';
import { Link } from 'react-router-dom';

export default function TestimonialsPage() {
  const [testimonials] = useState<Testimonial[]>(() => loadData(STORAGE_KEYS.testimonials, defaultTestimonials));

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-hand text-2xl text-teal-300 mb-3">Testimonials</div>
          <h1 className="font-serif-display text-5xl md:text-6xl font-bold mb-4">What Clients Say</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Real stories from real clients we've had the privilege to work with
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {testimonials.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">No Testimonials Yet</h3>
              <p className="text-stone-500">Check back soon for client reviews!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-stone-50 hover:bg-white hover:shadow-xl p-8 rounded-2xl border border-stone-100 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-serif-display text-lg text-stone-800 leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center text-white font-bold text-xl">
                      {t.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900">{t.name}</div>
                      <div className="text-sm text-stone-500">{t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif-display text-4xl font-bold text-stone-900 mb-4">
            Want to Share Your Experience?
          </h2>
          <p className="text-stone-600 mb-8 text-lg">
            We'd love to hear about your journey with Pratyaksh Design
          </p>
          <Link
            to="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
