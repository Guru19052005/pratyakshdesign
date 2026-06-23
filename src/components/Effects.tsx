import { useEffect, useState } from 'react';

// ─── Scroll Progress Bar ───
export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ─── Page Transition ───
export function PageTransition() {
  return null;
}
