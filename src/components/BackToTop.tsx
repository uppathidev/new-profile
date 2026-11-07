import { ArrowUp } from 'lucide-react';
import { useScrollY } from '@/hooks/useScrollY';

const SHOW_AFTER_PX = 480;

export default function BackToTop() {
  const visible = useScrollY() > SHOW_AFTER_PX;

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-line bg-surface text-fg shadow-lg shadow-black/40 transition-all duration-300 hover:border-accent hover:text-accent sm:bottom-8 sm:right-8 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none invisible translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
