import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FAQPage() {
  const faqs = [
    {
      q: 'What services does Pratyaksh Design offer?',
      a: 'We offer comprehensive Architecture Planner, Industrial Planner, Interior Designer, and Turnkey Project solutions — all under one roof.',
    },
    {
      q: 'How long does a typical project take?',
      a: 'Timelines vary by scope. A typical residential interior takes 3-6 months, while full turnkey projects can take 6-12 months from concept to handover.',
    },
    {
      q: 'Do you work outside Ahmedabad?',
      a: 'Yes! We serve clients across Gujarat, Rajasthan, Mumbai, and other parts of Western India. Our team travels to project sites as needed.',
    },
    {
      q: 'What is your design process?',
      a: 'We follow a 4-step process: Consultation → Design → Development → Delivery. You are involved at every stage to ensure your vision is realized.',
    },
    {
      q: 'Can you work with existing architects or contractors?',
      a: 'Absolutely. We can collaborate with your existing team or manage the entire project independently — whichever works best for you.',
    },
    {
      q: 'How do I get started?',
      a: 'Simply fill out the contact form or call us directly. We\'ll schedule a free initial consultation to understand your requirements and provide a tailored proposal.',
    },
    {
      q: 'What are your payment terms?',
      a: 'We typically work with a milestone-based payment structure, aligned with project phases. Specific terms are discussed during the initial consultation.',
    },
    {
      q: 'Do you offer 3D visualization services?',
      a: 'Yes! We provide photorealistic 3D renders and immersive 360° walkthroughs, so you can visualize your space before construction begins.',
    },
    {
      q: 'Can you work with a specific budget?',
      a: 'Absolutely. We tailor our designs to match your budget while maintaining quality and aesthetics. We provide transparent cost estimates upfront.',
    },
    {
      q: 'What makes Pratyaksh Design different?',
      a: 'Our combination of innovative design thinking, technical expertise, and end-to-end project management sets us apart. From concept to handover, we deliver excellence.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-hand text-2xl text-teal-300 mb-3">FAQ</div>
          <h1 className="font-serif-display text-5xl md:text-6xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Got questions? We've got answers. Can't find what you're looking for? Get in touch.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-stone-50 rounded-xl border transition-all duration-300 ${
                  openIndex === i ? 'border-teal-300 shadow-md' : 'border-stone-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-stone-900 pr-4">{faq.q}</span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                      openIndex === i ? 'bg-teal-600 text-white rotate-180' : 'bg-teal-100 text-teal-700'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5 text-stone-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif-display text-4xl font-bold text-stone-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-stone-600 mb-8 text-lg">
            Our team is always happy to help. Reach out anytime.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
