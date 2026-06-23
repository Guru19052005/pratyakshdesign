import { Link } from 'react-router-dom';
import { IconArrow, loadData, STORAGE_KEYS, defaultStats, defaultProjects, Project, StatItem } from '../components/Shared';
import { useState } from 'react';

export default function HomePage() {
  const [stats] = useState<StatItem[]>(() => loadData(STORAGE_KEYS.stats, defaultStats));
  const [projects] = useState<Project[]>(() => loadData(STORAGE_KEYS.projects, defaultProjects));

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/85 via-stone-900/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 bg-teal-600/20 border border-teal-400/40 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-sm font-medium text-teal-100">Designing Spaces, Defining Lifestyles</span>
            </div>
            <h1 className="font-serif-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-up">
              Shaping <span className="text-teal-400">Spaces</span><br />That Inspire
            </h1>
            <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-lg leading-relaxed animate-fade-up">
              Architecture Planner, Industrial Planner, Interior Designer & Turnkey Projects — crafted with precision, delivered with passion.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up">
              <Link to="/projects" className="bg-teal-600 hover:bg-teal-700 text-white px-7 py-3 rounded-full font-medium inline-flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-teal-600/30">
                View Projects <IconArrow className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="border-2 border-white/30 hover:border-white/80 hover:bg-white/10 text-white px-7 py-3 rounded-full font-medium transition-all">
                Start a Project
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/20 animate-fade-up">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif-display text-3xl md:text-4xl font-bold text-teal-400">{s.num}</div>
                  <div className="text-sm text-stone-300 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* QUICK SERVICES PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="font-hand text-2xl text-teal-700 mb-3">Our Expertise</div>
            <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">What We Do Best</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Architecture', desc: 'Sustainable designs', icon: '🏛️' },
              { title: 'Industrial', desc: 'Efficient layouts', icon: '🏭' },
              { title: 'Interior', desc: 'Bespoke spaces', icon: '🎨' },
              { title: 'Turnkey', desc: 'End-to-end solutions', icon: '🔑' },
            ].map((s) => (
              <Link key={s.title} to="/services" className="bg-stone-50 hover:bg-teal-50 p-6 rounded-2xl border border-stone-200 hover:border-teal-300 transition-all group">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-serif-display text-xl font-bold text-stone-900 mb-1">{s.title}</h3>
                <p className="text-sm text-stone-500">{s.desc}</p>
                <div className="text-teal-600 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="font-hand text-2xl text-teal-700 mb-3">Featured</div>
              <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-stone-900">Latest <span className="text-teal-600">Projects</span></h2>
            </div>
            <Link to="/projects" className="text-teal-700 hover:text-teal-800 font-medium border-b-2 border-teal-600 pb-1 inline-flex items-center gap-2">
              View All <IconArrow className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((p) => (
              <div key={p.id} className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" style={p.img.startsWith('data:') ? { backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center' } : { background: p.img }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="text-xs tracking-widest text-teal-300 font-medium uppercase mb-2">{p.category}</div>
                  <h3 className="font-serif-display text-2xl font-bold mb-1">{p.title}</h3>
                  {p.description && <p className="text-sm text-white/70">{p.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold mb-4">Ready to Start Your Dream Project?</h2>
          <p className="text-teal-100 mb-8 text-lg">Let's discuss how we can bring your vision to life.</p>
          <Link to="/contact" className="inline-block bg-white text-teal-700 hover:bg-teal-50 px-8 py-3 rounded-full font-medium transition-colors">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
