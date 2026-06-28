import { useState } from 'react';
import { loadData, STORAGE_KEYS, defaultProjects, Project, IconArrow } from '../components/Shared';
import { Link } from 'react-router-dom';

export default function ProjectsPage() {
  const [projects] = useState<Project[]>(() => loadData(STORAGE_KEYS.projects, defaultProjects));
  const [filter, setFilter] = useState('All');
  // State to track which project is currently selected for the modal view
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-hand text-2xl text-teal-300 mb-3">Our Portfolio</div>
          <h1 className="font-serif-display text-5xl md:text-6xl font-bold mb-4">Selected Projects</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            A glimpse into our recent work — residential, commercial, and everything in between
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === c
                    ? 'bg-teal-600 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-stone-500">No projects in this category yet.</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  // Added onClick to select the current project
                  onClick={() => setSelectedProject(p)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    style={
                      p.img.startsWith('data:')
                        ? { backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                        : { background: p.img }
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="text-xs tracking-widest text-teal-300 font-medium uppercase mb-2">{p.category}</div>
                    <h3 className="font-serif-display text-2xl font-bold mb-1">{p.title}</h3>
                    {p.description && <p className="text-sm text-white/70 mb-2 line-clamp-2">{p.description}</p>}
                    <div className="flex items-center gap-2 text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details <IconArrow className="w-4 h-4" />
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
          <h2 className="font-serif-display text-4xl font-bold text-stone-900 mb-4">Like What You See?</h2>
          <p className="text-stone-600 mb-8 text-lg">Let's create something amazing together.</p>
          <Link to="/contact" className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Project Detail Modal Card */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)} // Close when clicking the backdrop
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden max-w-xl w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the card
          >
            {/* Top Right Close Button (X) */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-stone-800 rounded-full p-2 shadow z-10 transition-colors"
              aria-label="Close details"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Project Image Display */}
            <div 
              className="w-full h-64 sm:h-80 md:h-96"
              style={
                selectedProject.img.startsWith('data:')
                  ? { backgroundImage: `url(${selectedProject.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                  : { background: selectedProject.img }
              }
            />

            {/* Project Info Content - Bottom button removed */}
            <div className="p-5 pb-6">
              <span className="text-xs font-semibold tracking-widest text-teal-600 uppercase bg-teal-50 px-2.5 py-0.5 rounded-full">
                {selectedProject.category}
              </span>
              <h2 className="font-serif-display text-2xl font-bold text-stone-900 mt-2 mb-1.5">
                {selectedProject.title}
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                {selectedProject.description || "No full description provided for this project profile yet."}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}