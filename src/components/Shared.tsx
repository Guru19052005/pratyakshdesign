import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// ─── Types (shared) ───
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  img: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  initial: string;
}

export interface StatItem {
  num: string;
  label: string;
}

export interface ContactMessage {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  date: string;
  read: boolean;
}

// ─── LocalStorage helpers ───
export const STORAGE_KEYS = {
  projects: 'pd_projects',
  testimonials: 'pd_testimonials',
  stats: 'pd_stats',
  messages: 'pd_messages',
  adminPassword: 'pd_admin_pass',
};

export function loadData<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch {}
  return fallback;
}

export function saveData<T>(key: string, data: T) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ─── Default data ───
export const defaultGradients = [
  'linear-gradient(135deg, #0f766e 0%, #2DD4BF 100%)',
  'linear-gradient(135deg, #78350f 0%, #f59e0b 100%)',
  'linear-gradient(135deg, #1e293b 0%, #64748b 100%)',
  'linear-gradient(135deg, #831843 0%, #f43f5e 100%)',
  'linear-gradient(135deg, #064e3b 0%, #10b981 100%)',
  'linear-gradient(135deg, #4338ca 0%, #818cf8 100%)',
];

export const defaultProjects: Project[] = [
  { id: '1', title: 'Skyline Villa', category: 'Residential', description: 'Modern luxury villa with panoramic views and floor-to-ceiling windows.', img: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '2', title: 'Urban Loft', category: 'Interior Design', description: 'Contemporary loft space with industrial charm and exposed brick.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
  { id: '3', title: 'Corporate Hub', category: 'Commercial', description: 'Premium office space with modern open-plan design.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  { id: '4', title: 'Dreamscape 3D', category: 'Visualization', description: 'Photorealistic 3D architectural visualization showcase.', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80' },
  { id: '5', title: 'Green Haven', category: 'Turnkey', description: 'Eco-friendly sustainable residential project.', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' },
  { id: '6', title: 'Heritage Home', category: 'Residential', description: 'Traditional bungalow with modern design touches.', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80' },
  { id: '7', title: 'Penthouse Suite', category: 'Residential', description: 'Luxury penthouse with skyline terrace views.', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80' },
  { id: '8', title: 'Studio Apartment', category: 'Interior Design', description: 'Smart compact studio with multi-functional spaces.', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80' },
  { id: '9', title: 'Business Tower', category: 'Commercial', description: 'High-rise commercial development with premium offices.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80' },
];

export const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Mehta',
    location: 'Homeowner, Ahmedabad',
    text: 'Pratyaksh Design brought creativity, precision, and professionalism to every stage of our project. Their innovative designs and attention to detail transformed our space into something truly exceptional.',
    initial: 'R',
  },
];

export const defaultStats: StatItem[] = [
  { num: '114+', label: 'Projects Completed' },
  { num: '10+', label: 'Years Experience' },
  { num: '87+', label: 'Happy Clients' },
];

// ─── Icons ───
export const IconLogo = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <img src="/logo.png" alt="Pratyaksh Design Logo" className={className} style={{ objectFit: 'contain' }} />
);

export const IconPhone = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export const IconMail = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const IconLocation = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <circle cx="12" cy="11" r="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconFacebook = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
);

export const IconInstagram = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
);

export const IconWhatsapp = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
);

export const IconYoutube = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
);

export const IconArrow = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
);

// ─── Admin Icons ───
export const IconImage = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
);

export const IconEdit = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
);

export const IconTrash = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
);

export const IconPlus = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
);

export const IconDashboard = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10-1a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5z" /></svg>
);

export const IconStar = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
);

export const IconChart = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
);

export const IconInbox = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
);

export const IconLogout = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
);

export const IconEye = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
);

// Re-export menu icons
export { IconMenu, IconClose };

// ─── Navbar ───
export function Navbar({ onOpenAdmin }: { onOpenAdmin: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <IconLogo className="w-10 h-10" />
          <div className="leading-tight">
            <div className="font-serif-display text-lg font-bold text-[#3BB3C2]">PRATYAKSH</div>
            <div className="text-xs tracking-widest font-medium text-[#88C9A8]">DESIGN</div>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`nav-link text-sm font-medium transition-colors ${location.pathname === item.href ? 'text-teal-700' : 'text-stone-700 hover:text-teal-700'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">Get in Touch</Link>
        </div>
        <button className="md:hidden text-stone-700" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)} className={`block font-medium ${location.pathname === item.href ? 'text-teal-700' : 'text-stone-700 hover:text-teal-700'}`}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── Menu icons (for navbar) ───
const IconMenu = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
);
const IconClose = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
);

// ─── Footer ───
export function Footer({ onOpenAdmin }: { onOpenAdmin: () => void }) {
  const location = useLocation();
  const [secretClicks, setSecretClicks] = useState(0);
  const secretTimer: { current: ReturnType<typeof setTimeout> | null } = { current: null };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleSecretClick = () => {
    const newCount = secretClicks + 1;
    setSecretClicks(newCount);
    if (secretTimer.current) clearTimeout(secretTimer.current);
    if (newCount >= 5) { setSecretClicks(0); onOpenAdmin(); return; }
    secretTimer.current = setTimeout(() => setSecretClicks(0), 2000);
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <IconLogo className="w-12 h-12" />
              <div>
                <div className="font-serif-display text-lg font-bold text-[#3BB3C2]">PRATYAKSH</div>
                <div className="text-xs tracking-widest font-medium text-[#88C9A8]">DESIGN</div>
              </div>
            </div>
            <div className="text-xs text-white font-medium space-y-1">
              <div className="flex items-center gap-2"><span>Architecture Planner</span><span>|</span><span>Industrial Planner</span></div>
              <div className="flex items-center gap-2"><span>Interior Designer</span><span>|</span><span>Turnkey Projects</span></div>
            </div>
            <p className="text-stone-400 mt-1">— Designing spaces that inspire.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navItems.map((n) => (
                <li key={n.label}>
                  <Link to={n.href} className={`hover:text-teal-400 transition-colors ${location.pathname === n.href ? 'text-teal-400' : ''}`}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><IconPhone className="w-4 h-4 text-teal-400" /><a href="tel:+919913845738" className="hover:text-teal-400">+91 99 138 45 738</a></li>
              <li className="flex items-center gap-2"><IconMail className="w-4 h-4 text-teal-400" /><a href="mailto:id.pratyakshdesign@gmail.com" className="hover:text-teal-400 text-xs">id.pratyakshdesign@gmail.com</a></li>
              <li className="flex items-start gap-2"><IconLocation className="w-4 h-4 text-teal-400 mt-0.5" /><span>Pratyaksh Design</span></li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href="https://www.facebook.com/idjigar.panchal" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-stone-800 hover:bg-teal-600 flex items-center justify-center transition-colors"><IconFacebook className="w-4 h-4" /></a>
              <a href="https://www.instagram.com/id_pratyaksh_design" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-stone-800 hover:bg-teal-600 flex items-center justify-center transition-colors"><IconInstagram className="w-4 h-4" /></a>
              <a href="https://wa.me/c/919913845738" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-stone-800 hover:bg-teal-600 flex items-center justify-center transition-colors"><IconWhatsapp className="w-4 h-4" /></a>
              <a href="https://www.youtube.com/@PratyakshDesign" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-stone-800 hover:bg-teal-600 flex items-center justify-center transition-colors"><IconYoutube className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <p onClick={handleSecretClick} className="cursor-default select-none">© {new Date().getFullYear()} Pratyaksh Design. All rights reserved.</p>
          <p>Designed with <span className="text-teal-400">♥</span> by Ar. Jigar Panchal</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Scroll to top on page change ───
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}
