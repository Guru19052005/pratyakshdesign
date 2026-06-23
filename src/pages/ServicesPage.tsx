export default function ServicesPage() {
  const services = [
    {
      icon: '📐',
      title: 'Architecture Planning',
      desc: 'Thoughtful, sustainable architectural designs that blend form and function, transforming spaces into experiences.',
      features: ['Site Analysis', 'Concept Design', '3D Visualization', 'Working Drawings', 'Project Approval']
    },
    {
      icon: '🏭',
      title: 'Industrial Planning',
      desc: 'Strategic, high-efficiency industrial layouts designed for optimized workflow, structural integrity, and future scalability.',
      features: ['Factory Layouts', 'Warehouse Design', 'Workflow Optimization', 'Safety Compliance', 'Expansion Planning']
    },
    {
      icon: '🎨',
      title: 'Interior Designing',
      desc: 'Bespoke interiors that reflect your personality — from cozy residential retreats to inspiring commercial spaces.',
      features: ['Space Planning', 'Custom Furniture', 'Lighting Design', 'Material Selection', 'Styling & Décor']
    },
    {
      icon: '🔑',
      title: 'Turnkey Projects',
      desc: 'End-to-end project management — from concept to completion — delivering quality craftsmanship on time and budget.',
      features: ['Project Management', 'Civil Work', 'Interior Execution', 'Quality Control', 'Handover & Support']
    },
  ];

  const process = [
    { step: '01', title: 'Consultation', desc: 'We listen, understand your vision, and align on goals.' },
    { step: '02', title: 'Design', desc: 'Conceptual designs & 3D visualizations are crafted.' },
    { step: '03', title: 'Develop', desc: 'Detailed drawings, approvals & material selections.' },
    { step: '04', title: 'Deliver', desc: 'Turnkey execution with quality checks at every step.' },
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-hand text-2xl text-teal-300 mb-3">Our Services</div>
          <h1 className="font-serif-display text-5xl md:text-6xl font-bold mb-4">What We Offer</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            A full spectrum of architectural and design services under one roof
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="group bg-stone-50 hover:bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-stone-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-start gap-5">
                    <div className="text-5xl">{s.icon}</div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-teal-600 tracking-widest mb-1">0{i + 1}</div>
                      <h3 className="font-serif-display text-2xl font-bold text-stone-900 mb-3">{s.title}</h3>
                      <p className="text-stone-600 leading-relaxed mb-4">{s.desc}</p>
                      <ul className="space-y-1">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-stone-600">
                            <span className="w-1.5 h-1.5 bg-teal-600 rounded-full" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="font-hand text-2xl text-teal-300 mb-3">Our Process</div>
            <h2 className="font-serif-display text-4xl md:text-5xl font-bold mb-4">From Vision to Reality</h2>
            <p className="text-teal-100 max-w-2xl mx-auto">
              A transparent, collaborative journey that turns your ideas into beautifully crafted spaces.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((s) => (
              <div key={s.step} className="relative">
                <div className="font-serif-display text-6xl font-bold text-teal-400/30 mb-2">{s.step}</div>
                <h3 className="font-serif-display text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-teal-100">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-stone-600 mb-8 text-lg">
            Every project is unique. Let's discuss your specific requirements.
          </p>
          <a href="/contact" className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
