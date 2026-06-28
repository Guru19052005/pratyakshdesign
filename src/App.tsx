import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar, Footer, ScrollToTop } from './components/Shared';
import { ScrollProgressBar } from './components/Effects';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminPanelPage from './pages/AdminPanelPage';
import { FaWhatsapp } from "react-icons/fa";

export default function App() {
  const navigate = useNavigate();

  const whatsappMessage = encodeURIComponent(
  "Hello Pratyaksh Design! I visited your website and would like to know more about your architecture and interior design services."
);

  // Global shortcut: Ctrl+Shift+A opens admin login
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        navigate('/admin-login');
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [navigate]);

  return (
    <>
      <ScrollToTop />
      <ScrollProgressBar />
      <Routes>
        {/* Admin pages */}
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminPanelPage />} />

        {/* Website pages */}
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
              <Navbar onOpenAdmin={() => navigate('/admin-login')} />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/testimonials" element={<TestimonialsPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </div>
              <Footer onOpenAdmin={() => navigate('/admin-login')} />
              {/* Floating WhatsApp Button */}
<a
  href={`https://wa.me/919913845738?text=${whatsappMessage}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  title="Chat on WhatsApp"
  className="fixed bottom-6 right-6 z-50 group"
>
  {/* Animated Ring */}
  <span className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"></span>

  {/* Main Button */}
  <div className="relative w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
    <FaWhatsapp className="text-4xl" />
  </div>
</a>
            </div>
          }
        />
      </Routes>
    </>
  );
}

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <div className="text-8xl font-serif-display font-bold text-teal-600 mb-4">404</div>
      <h1 className="text-3xl font-bold text-stone-900 mb-2">Page Not Found</h1>
      <p className="text-stone-500 mb-6">The page you're looking for doesn't exist.</p>
      <button onClick={() => navigate('/')} className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
        Go Home
      </button>
    </div>
  );
}
